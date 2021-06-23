import { Controller, Get } from "@nestjs/common";
import { Task } from "./Entities/tasks.entity";
import { TaskService } from "./tasks.service";

@Controller('tasks')
export class TaskController{
    constructor(private taskService: TaskService){}

    @Get()
    getAllTasks():Promise<Task[]>{
        return this.taskService.getAllTasks();
    }
}