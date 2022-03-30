import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';
import { ProductJobInterface } from './product.interface';
import { ProductsService } from './product.service';

@Processor('products-queue')
export class ProductsConsumer {
  constructor(private readonly productsService: ProductsService) {}

  @Process('products-job')
  readOperationJob(job: Job<unknown>) {
    return this.productsService.createProduct(job.data as ProductJobInterface);
  }
}
