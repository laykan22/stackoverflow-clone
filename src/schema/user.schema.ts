import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User extends Document {
  @Prop({ required: [true, 'User must have an email'], unique: true, trim: true })
  email: string;

  @Prop({ required: [true, 'Password is required'], select: false })
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
}

export const UserSchema = SchemaFactory.createForClass(User);
