import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Task } from "./Entities/tasks.entity";
import { TaskRepository } from "./Repositories/tasks.repository";

@Injectable()
export class TaskService{
    constructor(
        @InjectRepository(TaskRepository)
        private taskRepository: TaskRepository
    ){}
    
    async getAllTasks():Promise<Task[]>{
        return await this.taskRepository.getAllTasks()
    }
}