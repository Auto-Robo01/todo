import { DataSource, DataSourceOptions } from 'typeorm';
import { User } from './users/user.entity';

export const appDataSource = new DataSource({
  type: 'postgres',
  database: 'todo',
  username: 'postgres',
  password: 'hawa7893',
  entities: [User],
  synchronize: true,
  migrations: ['/migrations/*.{js,ts}'],
} as DataSourceOptions);
