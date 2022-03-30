import { EntityRepository, Repository } from 'typeorm';
import { Product } from './product.entity';
import { ProductInterface } from './product.interface';

@EntityRepository(Product)
export class ProductRepository extends Repository<Product> {
  async createAndSave(data: Product): Promise<Product> {
    const findProduct = await this.findOne({
      where: { lm: data.lm },
    });

    if (!findProduct) {
      const productData = this.create(data);
      return await this.save(productData);
    }

    await this.update(findProduct.id, data);

    return findProduct;
  }

  async compareAndUpdate(product: Product, data: ProductInterface) {
    try {
      product.lm = data.lm ?? product.lm;
      product.name = data.name ?? product.name;
      product.free_shipping = data.free_shipping ?? product.free_shipping;
      product.description = data.description ?? product.description;
      product.price = data.price ?? product.price;
      product.category = data.category ?? product.category;

      const newValues = await this.save(product);

      return newValues;
    } catch (err) {
      throw new Error(err.message);
    }
  }
}
