import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskTypeRepository } from './Repositories/tasks-type.reppository';
import { TaskController } from './tasks.controller';
import { TaskRepository } from './Repositories/tasks.repository';

@Module({
    imports :[
        TypeOrmModule.forFeature([TaskRepository , TaskTypeRepository]),
        TaskController
    ]
})
export class TasksModule {}
