import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModelEntity } from './user-model.entity';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserModelEntity])],
  controllers: [UserController],
  providers: [UserService],
  //exports: [TypeOrmModule], // this doesn't work
})
export class UserModule {}
