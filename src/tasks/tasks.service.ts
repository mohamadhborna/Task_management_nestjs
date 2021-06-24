import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateTaskDto } from "./Dtos/createTask.dto";
import { CreateTaskTypeDto } from "./Dtos/createTaskType.dto";
import { TaskType } from "./Entities/task-type.entity";
import { Task } from "./Entities/tasks.entity";
import { TaskTypeRepository } from "./Repositories/tasks-type.reppository";
import { TaskRepository } from "./Repositories/tasks.repository";

@Injectable()
export class TaskService{
    constructor(
        @InjectRepository(TaskRepository)
        private taskRepository: TaskRepository ,
        @InjectRepository(TaskTypeRepository)
        private taskTypeRepository : TaskTypeRepository
    ){}
    
    async createTaskType(createTaskTypeDto: CreateTaskTypeDto):Promise<TaskType>{
        return await this.taskTypeRepository.createTaskTypes(createTaskTypeDto)
    }

    async getAllTaskTypes(): Promise<TaskType[]>{
        return await this.taskTypeRepository.getAllTaskTypes()
    }

    async getTaskTypeById(id:number):Promise<TaskType>{
        const taskType = await this.taskTypeRepository.findOne(id)
        if(!taskType){
            throw new NotFoundException('this task type desnt exist ')
        }
        return taskType;
    }


    async getAllTasks():Promise<Task[]>{
        return await this.taskRepository.getAllTasks()
    }
    async createTask(createTaskDto:CreateTaskDto):Promise<Task>{
        return await this.taskRepository.createTask(createTaskDto)
    }
    async getTaskById(id:number):Promise<Task>{
        const task = await this.taskRepository.findOne(id);
        if(!task){
            throw new NotFoundException('this task doesnt exist');
        }
        return task
    }
    async deleteTask(id:number):Promise<void>{
        const task = this.getTaskById(id);
        await this.taskRepository.delete(id);
    }

}