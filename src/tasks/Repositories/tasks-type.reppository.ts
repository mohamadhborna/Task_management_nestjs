import { EntityRepository, Repository } from "typeorm";
import { TaskType } from "../Entities/task-type.entity";

@EntityRepository(TaskType)
export class TaskTypeRepository extends Repository<TaskType>{
    
}