import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type QuestionDocument = Question & Document;

@Schema()
export class Question {
  // @Prop({ required: [true, 'Question must have a grade'], trim: true })
  // grade: string;
  // @Prop({ required: [true, 'Question must have a category'], trim: true })
  // category: string;
  // @Prop({ required: [true, 'Question must have a description'], trim: true })
  // question: string;
  // @Prop({ default: 0 })
  // vote: number;
  // @Prop({ type: [Types.ObjectId], default: [] })
  // voters: Types.ObjectId[];
  // @Prop({ required: [true, 'Question must have a User ID'] })
  // userId: Types.ObjectId;
  // @Prop({
  //   type: [
  //     {
  //       answer: { type: String, trim: true },
  //       userId: { type: Types.ObjectId },
  //       vote: { type: Number, default: 0 },
  //     },
  //   ],
  //   default: [],
  // })
  // answers: {
  //   answer: string;
  //   userId: Types.ObjectId;
  //   vote: number;
  // }[];
  // @Prop({ default: Date.now })
  // time: Date;
}

export const QuestionSchema = SchemaFactory.createForClass(Question);
