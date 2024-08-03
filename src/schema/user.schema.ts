import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Schema()
export class User extends Document {
  @Prop({
    required: [true, 'User must have an email'],
    unique: true,
    trim: true,
  })
  email: string;

  @Prop({
    required: [true, 'Password is required'],
    select: false,
    unique: true,
  })
  password: string;

  @Prop({ required: [true, 'User must have a first name'], trim: true })
  firstName: string;

  @Prop({ required: [true, 'User must have a last name'], trim: true })
  lastName: string;

  @Prop()
  notifications: any[];

  @Prop()
  score: number;

  @Prop({ default: Date.now })
  time: Date;
  jwtService: any;

  async hashPassword(password: string): Promise<string> {
    return await bcrypt.hash(password, 10);
  }

  async generateToken(userId: string | number, ttl: string) {
    return (
      await this.jwtService.signAsync({
        userId: userId,
      }),
      {
        expiresIn: ttl,
      }
    );
  }
}

export const UserSchema = SchemaFactory.createForClass(User);
