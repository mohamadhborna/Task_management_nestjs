import { IsDate, IsNotEmpty } from "class-validator";

export class CreateTaskDto {

    @IsNotEmpty()
    title: string;
    @IsNotEmpty()
    description: string;
    @IsDate()
    spentTime: string
    
}