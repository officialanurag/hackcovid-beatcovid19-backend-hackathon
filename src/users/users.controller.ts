import { Controller, Get, Body, Post, Param, UseFilters } from '@nestjs/common';
import { LoginUserDto } from './dto/login-user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { UserDto } from './dto/user.dto';
import { UsersService } from './users.service';
import { HttpExceptionFilter } from '../infrastructure/filters/http-exception.filter';

@Controller('users')
@UseFilters(HttpExceptionFilter)
export class UsersController {
    constructor(private usersService: UsersService) { }
    
    @Post('login')
    async login(@Body() userInfo: LoginUserDto): Promise<UserDto> {
        return this.usersService.login(userInfo);
    }

    @Post('create')
    async createUser(@Body() userInfo: CreateUserDto): Promise<UserDto> {
        return this.usersService.createUser(userInfo);
    }

    @Get(':user_id')
    async findOneUser(@Param('user_id') userId: string): Promise<UserDto> {
        return this.usersService.getUserById(userId);
    }
}
