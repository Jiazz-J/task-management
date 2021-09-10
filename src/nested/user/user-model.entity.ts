import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { v4 as uuid4 } from 'uuid';

@Entity(UserModelEntity.MODEL_NAME)
export class UserModelEntity {
  static MODEL_NAME = 'userModel';

  @PrimaryGeneratedColumn()
  id?: string = uuid4();

  @Column({ type: 'varchar', length: 50 })
  username: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  region: string;

  @ManyToOne((type) => UserModelEntity)
  @JoinColumn({ name: 'friendsRef' })
  user: UserModelEntity[];

  // @JoinColumn({ name: 'friendRef' })
  @OneToMany(() => UserModelEntity, (user) => user)
  friends: UserModelEntity;

  constructor(override: Partial<UserModelEntity>) {
    Object.assign(this, override);
  }
}
