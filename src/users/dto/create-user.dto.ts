import { IsNotEmpty } from 'class-validator';
import { LoginUserDto } from './login-user.dto';

export class CreateUserDto extends LoginUserDto {
  @IsNotEmpty()
  full_name: string;

  @IsNotEmpty()
  phone: number;

  @IsNotEmpty()
  adhaar_id: number;
}