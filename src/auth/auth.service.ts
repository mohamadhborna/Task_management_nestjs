import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { SignInDto } from './Dtos/signIn.dto';
import { SignUpDto } from './Dtos/signUp.dto';
import { JwtPayload } from './jwt-payload.interface';
import { UserRepository } from './user.repository';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(UserRepository)
        private userRepository:UserRepository,
        private jwtService:JwtService
    ){}

    async signUp(signUpDto:SignUpDto):Promise<void>{
        return await this.userRepository.signUp(signUpDto)
    }

    async signIn(signInDto:SignInDto):Promise<{accessToken:string}>{
        const username =  await this.userRepository.validationUserPassword(signInDto);
        if(!username){
            throw new UnauthorizedException('Invalid creditional')
        }
        const payload:JwtPayload = {username};
        const accessToken = await this.jwtService.sign(payload)
        return {accessToken}
    }
}
