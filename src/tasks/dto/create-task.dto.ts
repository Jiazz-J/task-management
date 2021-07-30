import { Optional } from '@nestjs/common';
import { IsNotEmpty, IsString } from 'class-validator';
import { CommentDto } from '../comments/comment.dto';
import { CommentsEntity } from '../comments/comments.entity';
import { TaskEntity } from '../task.entity';
import { TaskStatus } from '../tasks.model';
import { UserDto } from '../users/user.dto';
import { UserEntity } from '../users/user.entity';

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @Optional()
  description?: string;

  user?: UserDto;

  comments?: CommentDto[];

  constructor(override: CreateTaskDto) {
    Object.assign(this, override);
  }

  static mapTo(dto: CreateTaskDto): TaskEntity {
    return new TaskEntity({
      name: dto.name,
      description: dto.description,
      status: TaskStatus.OPEN,
      user: new UserEntity({ name: dto.user.name, userId: dto.user.userId }),
      comments: dto.comments.map((comment) => {
        return new CommentsEntity({ text: comment.text });
      }),
    });
  }

  static patchTo(dto: CreateTaskDto, entity: TaskEntity): TaskEntity {
    return new TaskEntity({
      guid: entity.guid,
      name: dto.name ?? entity.name,
      description: dto.description ?? entity.description,
      status: TaskStatus.OPEN,
      user: new UserEntity({
        name: dto.user.name ?? entity.user.name,
        userId: dto.user.userId ?? entity.user.userId,
        //  taskGuid: entity.guid,
      }),
      comments:
        dto.comments && dto.comments.length > 0
          ? dto.comments.map((comment) => {
              return new CommentsEntity({
                text: comment.text,
                // taskGuid: entity.guid,
              });
            })
          : entity.comments,
    });
  }
}
