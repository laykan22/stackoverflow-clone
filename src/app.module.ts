import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AppService } from './app.service';
import { UserSchema } from './schema/user.schema';
import { UserService } from './user/user.service';
import { UserController } from './user/user.controller';
import { QuestionController } from './question/question.controller';
import { QuestionService } from './question/question.service';
import { QuestionModule } from './question/question.module';
import { QuestionSchema } from './schema/question.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/stackoverflow'),
    QuestionModule,
    MongooseModule.forFeature([
      { name: 'User', schema: UserSchema },
      { name: 'Question', schema: QuestionSchema },
    ]),
  ],
  controllers: [AppController, UserController, QuestionController],
  providers: [AppService, UserService, QuestionService],
})
export class AppModule {}
