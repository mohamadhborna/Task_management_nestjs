import { EntityRepository, Repository } from "typeorm";
import { Task } from "../Entities/tasks.entity";

@EntityRepository(Task)
export class TaskRepository extends Repository<Task>{
    
}