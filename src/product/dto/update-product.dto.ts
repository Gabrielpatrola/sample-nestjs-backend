import { IsOptional } from 'class-validator';

export class UpdateProductDto {
  @IsOptional()
  lm: number;

  @IsOptional()
  name: string;

  @IsOptional()
  free_shipping: number;

  @IsOptional()
  description: string;

  @IsOptional()
  price: number;

  @IsOptional()
  category: number;
}
