import { IsNotEmpty } from 'class-validator';
import { CreateUserDto } from './create-user.dto';

export class UserDto extends CreateUserDto {
  @IsNotEmpty()
  user_id: string;

  @IsNotEmpty()
  current_token: string;
}