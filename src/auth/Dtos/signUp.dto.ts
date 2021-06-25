import { Type } from "class-transformer";
import { ArrayMaxSize, ArrayMinSize, IsArray, IsEnum, IsIn, isNotEmpty, IsString, Matches, MaxLength, min, MinLength, ValidateNested } from "class-validator";
import { Role } from "../role.enum";

export class SignUpDto{
    @IsString()
    @MinLength(4)
    @MaxLength(20) 
    username:string;
    @IsString()
    @MinLength(8)
    @MaxLength(20)
    @Matches("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})") 
    password:string;
    @IsIn([Role.ADMIN , Role.USER])
    role:Role


    
}