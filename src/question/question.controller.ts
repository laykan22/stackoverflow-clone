import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { Request, Response } from 'express';
import { QuestionService } from '../question/question.service'; // Assuming you have a QuestionService
import { JwtAuthGuard } from '../guards/jwt.guard';
import { QuestionDto } from 'src/dto/question.dto';

@Controller({
  path: 'question',
  version: '1',
})
export class QuestionController {
  constructor(private readonly questionService: QuestionService) {}

  // @UseGuards(JwtAuthGuard)
  @Post('askque')
  askque(@Body() dto: QuestionDto) {
    return this.questionService.askQuestion(dto);
  }
}
