import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { CreateTaskTypeDto } from "./Dtos/createTaskType.dto";
import { TaskType } from "./Entities/task-type.entity";
import { Task } from "./Entities/tasks.entity";
import { TaskService } from "./tasks.service";

@Controller('tasks')
export class TaskController{
    constructor(private taskService: TaskService){}

    @Get('/tasktypes')
    getAllTaskTypes():Promise<TaskType[]>{
        return this.taskService.getAllTaskTypes()
    }
    @Post('/tasktypes')
    createTaskType(@Body()createTaskTypeDto:CreateTaskTypeDto):Promise<TaskType>{
        return this.taskService.createTaskType(createTaskTypeDto)
    }
    @Get('/tasktypes/:id')
    getTaskTypeBydId(@Param('id') id:number){
        return this.taskService.getTaskTypeById(id)
    }
    @Get()
    getAllTasks():Promise<Task[]>{
        return this.taskService.getAllTasks();
    }

}