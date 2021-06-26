import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/auth/user.entity";
import { CreateTaskDto } from "./Dtos/createTask.dto";
import { CreateTaskTypeDto } from "./Dtos/createTaskType.dto";
import { UpdateTaskDto } from "./Dtos/updateTask.dto";
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


    async getAllTasks(user:User):Promise<Task[]>{
        return await this.taskRepository.getAllTasks(user)
    }
    async createTask(createTaskDto:CreateTaskDto , user:User):Promise<Task>{
        return await this.taskRepository.createTask(createTaskDto , user)
    }
    async getTaskById(id:number , user:User):Promise<Task>{
        const task = await this.taskRepository.findOne(id);
        if(!task){
            throw new NotFoundException('this task doesnt exist');
        }
        return task
    }
    async deleteTask(id:number , user:User):Promise<void>{
        const task = this.getTaskById(id ,user);
        await this.taskRepository.delete(id);
    }
    async updateTask(id:number , updateTaskDto:UpdateTaskDto  ,user:User):Promise<Task>{
        const {status , type} =updateTaskDto
        const task =  await this.getTaskById(id , user);
        task.status = status;
        task.taskType = type;
        await task.save();
        return task
    }

}