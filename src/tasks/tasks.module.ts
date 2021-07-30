import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommentsEntity } from './comments/comments.entity';
import { TaskEntity } from './task.entity';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { UserEntity } from './users/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TaskEntity, UserEntity, CommentsEntity])],
  controllers: [TasksController],
  providers: [TasksService],
  //exports: [TypeOrmModule], // this doesn't work
})
export class TasksModule {}
