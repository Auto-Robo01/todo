import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Gender, User } from './user.entity';
import { Repository } from 'typeorm';

export type UserDetails = {
  email: string;
  password: string;
  mobile: number;
  name: string;
  hobbies: string;
  country: string;
  gender: Gender;
};

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private repo: Repository<User>) {}

  create({
    email,
    password,
    mobile,
    name,
    hobbies,
    country,
    gender,
  }: UserDetails) {
    const user = this.repo.create({
      name,
      mobile,
      email,
      gender,
      country,
      hobbies,
      password,
    });
    return this.repo.save(user);
  }

  find(email: string) {
    return this.repo.find({ where: { email } });
  }
}
