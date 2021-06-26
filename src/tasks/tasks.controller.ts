import { Body, Controller, Delete, Get, Param, Patch, Post, Req, UseGuards, UsePipes, ValidationPipe } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { Role } from "src/auth/role.enum";
import { Roles } from "src/auth/roles.decorator";
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
    @UseGuards(AuthGuard())
    getAllTasks(@Req() req):Promise<Task[]>{
        return this.taskService.getAllTasks(req.user);
    }
    @Post()
    @UseGuards(AuthGuard('jwt'))
    createTask(@Body()createTaskDto:CreateTaskDto , @Req() req):Promise<Task>{
        return this.taskService.createTask(createTaskDto ,req.user)
    }
    @Get('/:id')
    @UseGuards(AuthGuard('jwt'))
    getTaskById(@Param('id') id: number , @Req() req){
        return this.taskService.getTaskById(id , req.user)
    }
    @Delete('/:id')
    @UseGuards(AuthGuard('jwt'))
    deleteTaskById(@Param('id') id: number , @Req() req){
        return this.taskService.deleteTask(id  ,req.user)
    }
    @Patch('/:id')
    @UseGuards(AuthGuard('jwt'))
    @Roles(Role.ADMIN)
    updateTask(
        @Param('id') id:number,
        @Body()updateTaskDto:UpdateTaskDto,
    ):Promise<Task>{
        return this.taskService.updateTask(id,updateTaskDto);
    }

}