import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { TaskEntity } from './task.entity';
import { Task } from './tasks.model';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  @Get()
  getAllTasks(): Task[] {
    return this.taskService.getAllTasks();
  }

  @Post()
  createTask(
    @Body(new ValidationPipe()) createTaskDto: CreateTaskDto,
  ): Promise<TaskEntity> {
    return this.taskService.createTask(createTaskDto);
  }

  @Patch('/:taskId')
  updateTask(
    @Body(new ValidationPipe()) createTaskDto: CreateTaskDto,
    @Param('taskId') taskId: string,
  ): Promise<TaskEntity> {
    return this.taskService.updateTask(createTaskDto, taskId);
  }
}
