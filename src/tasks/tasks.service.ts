import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, getConnection, Repository } from 'typeorm';
import { CreateTaskDto } from './dto/create-task.dto';
import { TaskEntity } from './task.entity';
import { Task } from './tasks.model';
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
    const task = CreateTaskDto.mapTo(createTaskDto);

    await this.taskRepository.save(task);
    return await this.taskRepository.findOne(task.guid);
  }

  async updateTask(dto: CreateTaskDto, taskId: string): Promise<TaskEntity> {
    const task = await this.taskRepository.findOne(taskId);
    const updatedTask = CreateTaskDto.patchTo(dto, task);

    const savedEntity = await this.taskRepository.save(updatedTask);

    /* await getConnection()
      .createQueryBuilder()
      .update(TaskEntity)
      .set(updatedTask)
      .where('guid = :guid', { guid: taskId })
      .execute(); */
    return await this.taskRepository.findOne(task.guid);
  }
}
