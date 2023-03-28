import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { IsVerified } from '../dto/create-feed.dto';

@Entity()
export class MyEntity {
  @PrimaryGeneratedColumn()
  email?: string;

  @Column()
  password?: string;
  

  @Column()
 verified: IsVerified;

}
