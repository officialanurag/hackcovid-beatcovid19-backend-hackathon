import { Injectable, HttpService } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CreateUserDto } from './dto/create-user.dto';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UsersService {
    springURL: string;

    constructor(private configService: ConfigService, private httpService: HttpService) {
        this.springURL = this.configService.get<string>('springURL');
    }

    async createUser(userInfo: CreateUserDto): Promise<UserDto> {
        const response =  await this.httpService.post(`${this.springURL}/users/create`, userInfo).toPromise();
        return response.data;
    }
}
