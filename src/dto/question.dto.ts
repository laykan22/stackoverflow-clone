import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, MaxLength } from 'class-validator';

export class QuestionDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'node',
    description: 'Category of the question',
  })
  category: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(500)
  @ApiProperty({
    example: 'How do I use Node.js?',
    description: 'The question being asked',
  })
  question: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: '1234567890',
    description: 'ID of the question being voted on',
  })
  userId: string;
}
