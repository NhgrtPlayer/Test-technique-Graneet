import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Cities {
  @PrimaryGeneratedColumn()
  name: string;

  @Column()
  postalCode: string;
}
