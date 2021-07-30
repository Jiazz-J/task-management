import { Column, Entity, OneToMany, OneToOne, PrimaryColumn } from 'typeorm';
import { v4 as uuid4 } from 'uuid';
import { CommentsEntity } from './comments/comments.entity';
import { TaskStatus } from './tasks.model';
import { UserEntity } from './users/user.entity';

@Entity('tasks')
export class TaskEntity {
  @PrimaryColumn()
  guid: string = uuid4();

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  status: TaskStatus;

  @OneToOne(() => UserEntity, (details) => details.task, {
    eager: true,
    //onDelete: 'CASCADE',
    cascade: true,
  })
  public user: UserEntity;

  @OneToMany(() => CommentsEntity, (comment) => comment.task, {
    eager: true,
    onUpdate: 'CASCADE',
    cascade: true,
  })
  comments: CommentsEntity[];

  constructor(override: Partial<TaskEntity>) {
    Object.assign(this, override);
  }
}
