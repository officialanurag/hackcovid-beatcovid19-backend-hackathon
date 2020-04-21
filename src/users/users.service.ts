import { Injectable, HttpService, HttpException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CreateUserDto } from './dto/create-user.dto';
import { UserDto } from './dto/user.dto';
import { LoginUserDto } from './dto/login-user.dto';

@Injectable()
export class UsersService {
    springURL: string;

    constructor(private configService: ConfigService, private httpService: HttpService) {
        this.springURL = this.configService.get<string>('springURL');
    }

    async createUser(userInfo: CreateUserDto): Promise<UserDto> {
        try {
            const response = await this.httpService.post(`${this.springURL}/users/create`, userInfo).toPromise();
            return response.data;
        } catch (e) {
            throw new HttpException(e.response.data, e.response.data.status);
        }
    }

    async login(userInfo: LoginUserDto): Promise<UserDto> {
        try {
            const response = await this.httpService.post(`${this.springURL}/users/login`, userInfo).toPromise();
            return response.data;
        } catch (e) {
            throw new HttpException(e.response.data, e.response.data.status);
        }
    }

    async getUserById(userId: string): Promise<UserDto> {
        try {
            const response = await this.httpService.get(`${this.springURL}/users/${userId}`).toPromise();
            return response.data;
        } catch (e) {
            throw new HttpException(e.response.data, e.response.data.status);
        }
    }
}
