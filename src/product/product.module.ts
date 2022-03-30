import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ListModule } from '../list/list.module';
import { ProductsConsumer } from './product.consumer';
import { ProductController } from './product.controller';
import { Product } from './product.entity';
import { ProductRepository } from './product.repository';
import { ProductsService } from './product.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Product]),
    BullModule.registerQueue({
      name: 'products-queue',
    }),
    ListModule,
  ],
  controllers: [ProductController],
  providers: [ProductsService, ProductsConsumer, ProductRepository],
  exports: [ProductsService, ProductsConsumer, TypeOrmModule],
})
export class ProductModule {}
