import { Column, Entity, PrimaryColumn } from 'typeorm';
import { TaskStatus } from './tasks.model';

@Entity('tasks')
export class TaskEntity {
  @PrimaryColumn()
  guid: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  status: TaskStatus;
}
