import { EntityRepository, Repository } from "typeorm";
import { CreateTaskTypeDto } from "../Dtos/createTaskType.dto";
import { TaskType } from "../Entities/task-type.entity";

@EntityRepository(TaskType)
export class TaskTypeRepository extends Repository<TaskType>{

    async getAllTaskTypes():Promise<TaskType[]>{
        const query = this.createQueryBuilder('taskTypes');
        const taskTypes  = query.getMany()
        return taskTypes;
    }

    async createTaskTypes(createTaskTypeDto : CreateTaskTypeDto):Promise<TaskType>{
        let {typeName} = createTaskTypeDto
        const taskType = new TaskType();
        taskType.typeName = typeName;
        await taskType.save()
        return taskType
    }
    
}