import { EntityRepository, Repository } from "typeorm";
import { SignUpDto } from "./Dtos/signUp.dto";
import { User } from "./user.entity";
import * as bcrypt from 'bcrypt'
import { ConflictException, InternalServerErrorException } from "@nestjs/common";
import { SignInDto } from "./Dtos/signIn.dto";

@EntityRepository(User)
export class UserRepository extends Repository<User>{

    async signUp(signUpDto:SignUpDto):Promise<void>{
        const {username , password , role} = signUpDto;
        const salt = await bcrypt.genSalt()
        const user = new User();
        user.username = username;
        user.role  = role;
        user.password = await this.hashPassword(password , salt);
        user.salt = salt;
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
    async validationUserPassword(signInDto:SignInDto):Promise<string>{
        const {username , password} = signInDto;
        const user = await this.findOne({username});
        if(user && await user.validatePassword(password)){
            return user.username
        } else{
            return null;
        }

    }
    private async hashPassword(password:string , salt:string){
        return await bcrypt.hash(password  ,salt)
    }
}