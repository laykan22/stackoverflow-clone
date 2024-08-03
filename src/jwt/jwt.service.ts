import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcrypt';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class JwtService {
  constructor(private readonly configService: ConfigService) {}

  static generateToken(user: any) {
    const payload = {
      subject: user._id,
      email: user.email,
      userType: 'USER',
    };

    const options = {
      expiresIn: '90d',
    };

    try {
      const secret = process.env.JWT_SECRET || 'your-default-secret'; // Use your secret or from ConfigService
      const token = jwt.sign(payload, secret, options);
      console.log('Token successfully created'); // Replace with your logger if needed
      return token;
    } catch (err) {
      console.error(`Error generating token: ${err.message}`); // Replace with your logger if needed
      throw new Error(err.message);
    }
  }

  // static comparePassword(password: string, hashedPassword: string): boolean {
  //   return bcrypt.compareSync(password, hashedPassword);
  // }
}
