import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { TaskEntity } from '../task.entity';
import { v4 as uuid4 } from 'uuid';

@Entity()
export class CommentsEntity {
  @PrimaryColumn()
  commentId: string = uuid4();

  @Column()
  text: string;

  @Column({ nullable: false })
  taskGuid: string;

  @ManyToOne((type) => TaskEntity, (task) => task.comments, {
    onDelete: 'CASCADE',
    onUpdate: 'RESTRICT',
    primary: true,
    orphanedRowAction: 'delete',
  })
  @JoinColumn()
  public task: TaskEntity;

  constructor(override: Partial<CommentsEntity>) {
    Object.assign(this, override);
  }
}
