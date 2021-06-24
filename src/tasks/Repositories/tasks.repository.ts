import { time, timeStamp } from "console";
import { EntityRepository, Repository } from "typeorm";
import { CreateTaskDto } from "../Dtos/createTask.dto";
import { TaskStatus } from "../Entities/task-status.entity";
import { Task } from "../Entities/tasks.entity";
@EntityRepository(Task)
export class TaskRepository extends Repository<Task>{
    async getAllTasks():Promise<Task[]>{
        const query  = this.createQueryBuilder('tasks');
        const tasks =  await query.getMany();
        return tasks;
    }

    async createTask(createTaskDto:CreateTaskDto):Promise<Task>{
        const {title , description ,estimatedTime , sprint , taskType} = createTaskDto;
        const task = new Task();
        task.title = title;
        task.description = description;
        task.spentTime = new Date("0000-01-01 00:00:01");
        task.estimatedTime = estimatedTime;
        task.sprint = sprint;
        task.taskType = taskType;
        task.status = TaskStatus.OPEN;
        await task.save();
        return task;
    }
}