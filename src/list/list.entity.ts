import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('list')
export class List {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  status: boolean;
}
