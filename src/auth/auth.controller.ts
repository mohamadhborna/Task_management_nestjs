import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto } from './Dtos/signIn.dto';
import { SignUpDto } from './Dtos/signUp.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService){}

    @Post('/sign-up')
    signUp(@Body(ValidationPipe) signUpDto:SignUpDto):Promise<void>{
        return this.authService.signUp(signUpDto)
    }
    
    @Post('/sign-in')
    signIn(@Body(ValidationPipe)signInDto:SignInDto):Promise<{accessToken:string}>{
        return this.authService.signIn(signInDto)
    }
}
