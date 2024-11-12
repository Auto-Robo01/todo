import { Injectable } from '@nestjs/common';
// import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
// import { Report } from '../reports/report.enitity';
import { User } from '../users/user.entity';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  //   constructor(private configService: ConfigService) {}
  constructor() {}

  createTypeOrmOptions(connectionName?: string): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      username: 'postgres',
      database: 'todo',
      password: 'hawa7893',
      synchronize: true,
      autoLoadEntities: true,
    };
    // switch (process.env.NODE_ENV) {
    //   case 'development':
    //     return {
    //       type: 'postgres',
    //       database: 'db.sqlite',
    //       synchronize: false,
    //       autoLoadEntities: true,
    //     };
    //   case 'test':
    //     return {
    //       type: 'sqlite',
    //       database: 'test.sqlite',
    //       migrationsRun: true, //so migrations run when we run each test
    //       autoLoadEntities: true,
    //       synchronize: true,
    //     };
    //   case 'production':
    //     return {
    //       type: 'postgres',
    //       url: process.env.DATABASE_URL,
    //       migrationsRun: true,
    //       autoLoadEntities: true,
    //       ssl: {
    //         rejectUnauthorized: false,
    //       },
    //     };
    //   default:
    //     throw new Error('Environment not found');
    // }
  }
}
