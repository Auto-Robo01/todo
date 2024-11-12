import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum Gender {
  Male = 'Male',
  Female = 'Female',
  Other = 'Other',
}

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  mobile: number;

  @Column()
  email: string;

  @Column({
    type: 'enum',
    enum: Gender,
  })
  gender: Gender;

  @Column()
  country: string;

  @Column()
  hobbies: string;

  @Column()
  password: string;
}
