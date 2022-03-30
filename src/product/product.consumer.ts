import { OnQueueCompleted, Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';
import { ListService } from '../list/list.service';
import { ProductInterface } from './product.interface';
import { ProductsService } from './product.service';

@Processor('products-queue')
export class ProductsConsumer {
  constructor(
    private readonly productsService: ProductsService,
    private readonly listService: ListService,
  ) {}

  @Process('products-job')
  readOperationJob(job: Job<any>) {
    if (job.data.products) {
      job.data.products.map((item: ProductInterface) => {
        return this.productsService.createProduct(item as ProductInterface);
      });
    }
  }

  @OnQueueCompleted()
  saveStatus(job: Job<any>) {
    return this.listService.updateById(job.data.listId);
  }
}
