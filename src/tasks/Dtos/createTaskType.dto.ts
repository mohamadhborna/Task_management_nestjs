import { IsNotEmpty } from "class-validator";

export class CreateTaskTypeDto {
    @IsNotEmpty()
    typeName:string;
}