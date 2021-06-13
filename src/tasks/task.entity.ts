import { Column, Entity, OneToOne, PrimaryColumn } from 'typeorm';
import { v4 as uuid4 } from 'uuid';
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

  @OneToOne((type) => UserEntity, (details) => details.task, {
    eager: true,
    //onDelete: 'CASCADE',
    cascade: true,
  })
  public user: UserEntity;

  constructor(override: Partial<TaskEntity>) {
    Object.assign(this, override);
  }
}
