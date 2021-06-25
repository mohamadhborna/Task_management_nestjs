import { EntityRepository, Repository } from "typeorm";
import { SignUpDto } from "./Dtos/signUp.dto";
import { User } from "./user.entity";
import * as bcrypt from 'bcrypt'
import { ConflictException, InternalServerErrorException } from "@nestjs/common";

@EntityRepository(User)
export class UserRepository extends Repository<User>{

    async signUp(signUpDto:SignUpDto):Promise<void>{
        const {username , password , role} = signUpDto;
        const salt = await bcrypt.genSalt()
        const user = new User();
        user.username = username;
        user.role  = role;
        user.password = await this.hashPassword(password , salt);

        try{
            user.save()
        }
        catch(err){
            let repetitiveUserNameErrorCode = '2305';
            if(err.code === repetitiveUserNameErrorCode){
                throw new ConflictException('Username already exist');
            }
            else{
                throw new InternalServerErrorException('Some thong went wrong')
            }

        }

    }
    private async hashPassword(password:string , salt:string){
        return await bcrypt.hash(password  ,salt)
    }
}