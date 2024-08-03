import * as bcrypt from 'bcrypt';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from '../dto/create-user.dto';
import { IUser } from '../interface/user.interface';
import { JwtService } from '../jwt/jwt.service';
import { LoginUserDto } from 'src/dto/login-user.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private userModel: Model<IUser>) {}

  async createUser(dto: CreateUserDto) {
    const { firstName, lastName, email, password } = dto;

    // Check if email is taken
    const emailExist = await this.userModel.findOne({ email });
    if (emailExist) {
      return {
        statusCode: 409,
        message: 'Email already registered',
      };
    }

    // Hash the password using bcrypt
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the user
    const createdUser = await this.userModel.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });

    // Generate a token
    const token = await JwtService.generateToken(createdUser);

    return {
      data: createdUser,
      token,
    };
  }

  async loginUser(dto: LoginUserDto) {
    const { email, password } = dto;
    // Find the user by email
    const user = await this.userModel.findOne({ email });
    if (!user) {
      return {
        statusCode: 401,
        message: 'Invalid email or password',
      };
    }

    // Check if the password is correct
    const isPasswordValid = bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return {
        statusCode: 401,
        message: 'Invalid email or password',
      };
    }

    // Generate a token using the static method
    const token = JwtService.generateToken(user);

    return {
      data: user,
      token,
    };
  }
}
