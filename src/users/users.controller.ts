import { Controller, Get, Body, Post, Param } from '@nestjs/common';
import { LoginUserDto } from './dto/login-user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { UserDto } from './dto/user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) { }
    
    // TODO: Not implemented in backend yet
    @Post('login')
    login(@Body() userInfo: LoginUserDto): UserDto {
        return userInfo as UserDto;
    }

    @Post('create')
    async createUser(@Body() userInfo: CreateUserDto): Promise<UserDto> {
        return this.usersService.createUser(userInfo);
    }

    // TODO: Not implemented in backend yet
    @Get(':user_id')
    findOneUser(@Param(':user_id') userId: string): UserDto {
        return new UserDto();
    }
}
