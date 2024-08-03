import { Document, Types } from 'mongoose';

export interface IAnswer {
  answer: string;
  userId: Types.ObjectId;
  vote: number;
}

export interface IQuestion extends Document {
  // readonly grade: string;
  readonly category: string;
  readonly question: string;
  // readonly vote: number;
  // readonly voters: Types.ObjectId[];
  readonly userId: Types.ObjectId;
  // readonly answers: IAnswer[];
  // readonly time: Date;
}
