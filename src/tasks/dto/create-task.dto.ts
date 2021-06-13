import { Optional } from '@nestjs/common';
import { IsNotEmpty, IsString } from 'class-validator';
import { TaskEntity } from '../task.entity';
import { TaskStatus } from '../tasks.model';
import { UserEntity } from '../users/user.entity';

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @Optional()
  description?: string;

  constructor(override: CreateTaskDto) {
    Object.assign(this, override);
  }

  static mapTo(dto: CreateTaskDto): TaskEntity {
    return new TaskEntity({
      name: dto.name,
      description: dto.description,
      status: TaskStatus.OPEN,
      user: new UserEntity({ name: 'krishna', userId: '1310' }),
    });
  }

  static patchTo(dto: CreateTaskDto, entity: TaskEntity): TaskEntity {
    return new TaskEntity({
      name: dto.name ?? entity.name,
      description: dto.description ?? entity.description,
      status: TaskStatus.OPEN,
      user: new UserEntity({
        name: 'krishna' + new Date().toISOString(),
        userId: '1310',
      }),
    });
  }
}
