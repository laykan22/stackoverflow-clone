import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MongooseModule} from '@nestjs/mongoose'
import { AppService } from './app.service';
import { UserSchema } from './schema/user.schema';
import { UserService } from './user/user.service';
import { UserController } from './user/user.controller';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/stackoverflow'),
    MongooseModule.forFeature([{name:'User',schema:UserSchema}])
  ],
  controllers: [AppController, UserController],
  providers: [AppService, UserService],
})
export class AppModule {}
