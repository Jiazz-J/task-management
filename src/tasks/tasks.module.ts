import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskEntity } from './task.entity';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { UserEntity } from './users/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TaskEntity, UserEntity])],
  controllers: [TasksController],
  providers: [TasksService],
  //exports: [TypeOrmModule], // this doesn't work
})
export class TasksModule {}
