import { EntityRepository, Repository } from 'typeorm';
import { List } from './list.entity';

@EntityRepository(List)
export class ListRepository extends Repository<List> {
  async createAndSave(data: List): Promise<List> {
    const productData = this.create(data);
    return await this.save(productData);
  }

  async compareAndUpdate(list: List) {
    try {
      list.status = true;
      await this.save(list);
    } catch (err) {
      throw new Error(err.message);
    }
  }
}
