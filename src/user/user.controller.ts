import { Body, Controller, Post, Res, HttpStatus } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from 'src/dto/create-user.dto';
import { Response, response } from 'express';
import { LoginUserDto } from 'src/dto/login-user.dto';

@Controller({
  path: 'user',
  version: '1',
})
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('signup')
  signup(@Body() dto: CreateUserDto) {
    return this.userService.createUser(dto);
  }

  @Post('login')
  login(@Body() dto: LoginUserDto) {
    return this.userService.loginUser(dto);
  }
}
