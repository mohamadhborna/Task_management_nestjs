import { IsIn, IsString } from "class-validator";
import { TaskStatus } from "../Entities/task-status.entity";

export class UpdateTaskDto {
    @IsString()
    type:number;
    @IsIn([TaskStatus.DONE , TaskStatus.IN_PROGRESS , TaskStatus.OPEN])
    status:TaskStatus
}