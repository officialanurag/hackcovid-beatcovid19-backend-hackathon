import { Controller, Get, Body, Post, Param, UseFilters } from '@nestjs/common';
import { LoginUserDto } from './dto/login-user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { UserDto } from './dto/user.dto';
import { UsersService } from './users.service';
import { UsersExceptionFilter } from './dto/filters/users-exception.filter';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) { }
    
    @Post('login')
    @UseFilters(UsersExceptionFilter)
    async login(@Body() userInfo: LoginUserDto): Promise<UserDto> {
        return this.usersService.login(userInfo);
    }

    @Post('create')
    @UseFilters(UsersExceptionFilter)
    async createUser(@Body() userInfo: CreateUserDto): Promise<UserDto> {
        return this.usersService.createUser(userInfo);
    }

    @Get(':user_id')
    @UseFilters(UsersExceptionFilter)
    async findOneUser(@Param('user_id') userId: string): Promise<UserDto> {
        return this.usersService.getUserById(userId);
    }
}
