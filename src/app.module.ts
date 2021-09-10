import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModelEntity } from './nested/user/user-model.entity';
import { UserModule } from './nested/user/user.module';
import { CommentsEntity } from './tasks/comments/comments.entity';
import { TaskEntity } from './tasks/task.entity';
import { TasksModule } from './tasks/tasks.module';
import { UserEntity } from './tasks/users/user.entity';
import { CategoryModule } from './category/category.module';
import { CategoryEntity } from './category/entities/category.entity';

@Module({
  imports: [
    TasksModule,
    UserModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Lock.1310',
      database: 'postgres',
      entities: [
        TaskEntity,
        UserEntity,
        CommentsEntity,
        UserModelEntity,
        CategoryEntity,
      ], // using path won't work 'src/**/*.entity.ts'
      logging: true,
      synchronize: true,
    }),
    CategoryModule,
  ],
})
export class AppModule {}
