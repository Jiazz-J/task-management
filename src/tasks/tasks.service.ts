import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './tasks.model';
import { v4 as uuid4 } from 'uuid';
import { CreateTaskDto } from './dto/create-task.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskEntity } from './task.entity';
import { Repository } from 'typeorm';
@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TaskEntity)
    private readonly taskRepository: Repository<TaskEntity>,
  ) {}
  private tasks: Task[] = [];

  getAllTasks(): Task[] {
    return this.tasks;
  }

  async createTask(createTaskDto: CreateTaskDto): Promise<TaskEntity> {
    const { name, description } = createTaskDto;

    const task = {
      name,
      description,
      guid: uuid4(),
      status: TaskStatus.OPEN,
    };

    await this.taskRepository.save(task);
    return await this.taskRepository.findOne(task.guid);
  }
}
