import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';
import { ProductRepository } from './product.repository';
import { ProductInterface, ProductJobInterface } from './product.interface';
import { Product } from './product.entity';
import { Connection } from 'typeorm';

@Injectable()
export class ProductsService {
  constructor(
    private readonly connection: Connection,
    @InjectQueue('products-queue')
    private queue: Queue,
    private productRepository: ProductRepository,
  ) {
    this.productRepository =
      this.connection.getCustomRepository(ProductRepository);
  }

  async sendMessage(product: ProductInterface, name: string, id: number) {
    await this.queue.add('products-job', {
      products: product,
      listName: name,
      listId: id,
    });
  }

  async createProduct(data: ProductInterface) {
    this.productRepository.createAndSave(data as Product);
  }

  async findAll() {
    return await this.productRepository.find();
  }

  async findById(id: number) {
    return await this.productRepository.findOne(id);
  }

  async updateById(id: number, data: ProductInterface) {
    const product = await this.productRepository.findOne(id);

    return await this.productRepository.compareAndUpdate(product, data);
  }

  async deleteById(id: number) {
    return await this.productRepository.delete(id);
  }
}
