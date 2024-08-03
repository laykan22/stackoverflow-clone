import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  MaxLength,
  IsNotEmpty,
  IsEmail,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  @ApiProperty({
    example: 'lekan',
    description: 'first name of the user',
  })
  firstName: string;

  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  @ApiProperty({
    example: 'mustapha',
    description: 'last name of the user',
  })
  lastName: string;

  @IsEmail()
  @IsNotEmpty()
  @ApiProperty({
    example: 'test@gmail.com',
    description: 'email of the user',
  })
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  @ApiProperty({
    example: 'password',
    description: 'password of the user',
  })
  password: string;
}
