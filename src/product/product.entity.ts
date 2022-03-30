import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('product')
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  lm: number;

  @Column()
  name: string;

  @Column()
  free_shipping: number;

  @Column()
  description: string;

  @Column()
  price: number;

  @Column()
  category: number;
}
