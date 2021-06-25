import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto } from './Dtos/signUp.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService){}

    @Post('/sign-up')
    signUp(@Body(ValidationPipe) signUpDto:SignUpDto):Promise<void>{
        return this.authService.signUp(signUpDto)
    }
}
