import { IsString, Matches, MaxLength, MinLength } from "class-validator";
export class SignInDto{
    @IsString()
    @MinLength(4)
    @MaxLength(20) 
    username:string;
    @IsString()
    @MinLength(4)
    @MaxLength(20) 
    password:string
}