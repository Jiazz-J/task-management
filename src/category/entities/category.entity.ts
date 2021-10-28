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

  @OneToMany((type) => CategoryEntity, (category) => category.category, {
    cascade: true, // When adding cascade to children the persistence worked
    //  eager: true,
  })
  categories?: CategoryEntity[];

  @ManyToOne((type) => CategoryEntity, (category) => category.categories, {
    // eager: true,
  })
  category: CategoryEntity;

  constructor(override: Partial<CategoryEntity>) {
    Object.assign(this, override);
  }
}
