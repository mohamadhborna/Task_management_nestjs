import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { CreateTaskDto } from "./Dtos/createTask.dto";
import { CreateTaskTypeDto } from "./Dtos/createTaskType.dto";
import { UpdateTaskDto } from "./Dtos/updateTask.dto";
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
    @Post()
    createTask(@Body()createTaskDto:CreateTaskDto):Promise<Task>{
        return this.taskService.createTask(createTaskDto)
    }
    @Get('/:id')
    getTaskById(@Param('id') id: number){
        return this.taskService.getTaskById(id)
    }
    @Delete('/:id')
    deleteTaskById(@Param('id') id: number){
        return this.taskService.deleteTask(id)
    }
    @Patch('/:id')
    updateTask(
        @Param('id') id:number,
        @Body()updateTaskDto:UpdateTaskDto
    ):Promise<Task>{
        return this.taskService.updateTask(id,updateTaskDto);
    }

}