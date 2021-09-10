import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
} from 'typeorm';

@Entity('category')
export class CategoryEntity {
  @PrimaryColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @OneToMany((type) => CategoryEntity, (category) => category.parent, {
    cascade: true, // When adding cascade to children the persistence worked
  })
  children?: CategoryEntity[];

  @ManyToOne((type) => CategoryEntity, (category) => category.children)
  parent: CategoryEntity;

  constructor(override: Partial<CategoryEntity>) {
    Object.assign(this, override);
  }
}
