import { BadRequestException, Injectable } from '@nestjs/common';
import { UserDetails, UsersService } from './users.service';
import { randomBytes, scrypt as _scrypt } from 'crypto';
import { promisify } from 'util';

const scrypt = promisify(_scrypt);

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async signup(userDetails: UserDetails) {
    const users = await this.usersService.find(userDetails.email);

    if (users.length) {
      throw new BadRequestException('Email Already exists');
    }

    const salt = randomBytes(8).toString('hex');
    const hash = (await scrypt(userDetails.password, salt, 32)) as Buffer;
    const result = salt + '.' + hash.toString('hex');

    const user = await this.usersService.create({
      ...userDetails,
      password: result,
    });

    return user;
  }
}
