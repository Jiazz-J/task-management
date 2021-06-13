import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskEntity } from './tasks/task.entity';
import { TasksModule } from './tasks/tasks.module';
import { UserEntity } from './tasks/users/user.entity';

@Module({
  imports: [
    TasksModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Lock.1310',
      database: 'postgres',
      entities: [TaskEntity, UserEntity], // using path won't work 'src/**/*.entity.ts'
      logging: true,
      synchronize: true,
    }),
  ],
})
export class AppModule {}
