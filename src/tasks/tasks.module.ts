import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskController } from './tasks.controller';
import { TaskRepository } from './tasks.repository';

@Module({
    imports :[
        TypeOrmModule.forFeature([TaskRepository]),
        TaskController
    ]
})
export class TasksModule {}
