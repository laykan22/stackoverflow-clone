import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Question, QuestionDocument } from '../schema/question.schema'; // Correct path
import { Answer } from 'src/schema/answer.schema';
import { IQuestion } from 'src/interface/question.interface';
import { QuestionDto } from 'src/dto/question.dto';

@Injectable()
export class QuestionService {
  constructor(
    @InjectModel('Question') private questionModel: Model<IQuestion>,
  ) {}

  async askQuestion(dto: QuestionDto) {
    const { category, question } = dto;

    // Create and save the question
    const newQuestion = new this.questionModel({
      category,
      question,
    });
    const saveQuestion = await newQuestion.save();

    return {
      status: true,
      message: 'Successfully Posted Question',
      data: saveQuestion,
    };
  }
}
