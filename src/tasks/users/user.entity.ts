import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from 'typeorm';
import { TaskEntity } from '../task.entity';

@Entity('users')
export class UserEntity {
  @PrimaryColumn()
  taskGuid: string;

  @Column()
  name: string;

  @Column()
  userId: string;

  @OneToOne((type) => TaskEntity, { primary: true })
  @JoinColumn()
  public task: TaskEntity;

  constructor(override: Partial<UserEntity>) {
    Object.assign(this, override);
  }
}
