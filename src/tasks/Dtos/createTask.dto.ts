import { IsDate, IsNotEmpty, IsNumber, IS_DATE, IS_IN } from "class-validator";

export class CreateTaskDto {

    @IsNotEmpty()
    title: string;
    @IsNotEmpty()
    description: string;
    @IsDate()
    estimatedTime: Date
    @IsNotEmpty()
    sprint:string
    @IsNumber()
    taskType:number    
}