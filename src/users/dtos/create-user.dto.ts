import { IsEmail, IsNumber, IsString, Length } from 'class-validator';
import { Gender } from '../user.entity';

export class CreateUserDto {
  @IsString()
  @Length(4, 50)
  name: string;

  @IsNumber()
  //   @MinLength(8)
  mobile: number;

  @IsEmail()
  email: string;

  @IsString()
  @Length(4)
  gender: Gender;

  @IsString()
  @Length(1)
  country: string;

  @IsString()
  @Length(1)
  hobbies: string;

  @IsString()
  @Length(8)
  password: string;
}
