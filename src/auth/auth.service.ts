import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SignUpDto } from './Dtos/signUp.dto';
import { UserRepository } from './user.repository';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(UserRepository)
        private userRepository:UserRepository
    ){}
    
    async signUp(signUpDto:SignUpDto):Promise<void>{
        return await this.userRepository.signUp(signUpDto)
    }
}
