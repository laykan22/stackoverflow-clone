import { Schema, Document } from 'mongoose';

export const AnswerSchema = new Schema({
  questionId: { type: Schema.Types.ObjectId, ref: 'Question', required: true },
  answer: { type: String, required: true },
  votes: { type: Number, default: 0 },
});

export interface Answer extends Document {
  questionId: string;
  answer: string;
  votes: number;
}
