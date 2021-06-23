import { EntityRepository, Repository } from "typeorm";
import { Task } from "../Entities/tasks.entity";

@EntityRepository(Task)
export class TaskRepository extends Repository<Task>{
    async getAllTasks():Promise<Task[]>{
        const query  = this.createQueryBuilder('tasks');
        const tasks =  await query.getMany();
        return tasks;
    }
}