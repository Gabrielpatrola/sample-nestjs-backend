import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { ProductsService } from './../src/product/product.service';
import { ProductModule } from './../src/product/product.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;
  let productsService: ProductsService;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule, ProductModule],
    })
      .overrideProvider(ProductsService)
      .useValue(productsService)
      .compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });
  
  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });

  it('/products/upload (POST)', () => {

    return request(app.getHttpServer())
      .post('/products/upload')
      .set('Content-Type', 'multipart/form-data')
      .attach('file', './test/products.csv')
      .expect(201);
  });

  it('/products (GET)', () => {
    return request(app.getHttpServer()).get('/products').expect(200);
  });

  it('/products/:id (GET)', () => {
    return request(app.getHttpServer())
      .get('/products/' + 1)
      .expect(200);
  });

  it('/products/:id (PUT)', () => {
    return request(app.getHttpServer())
      .put('/products/' + 2)
      .expect(200);
  });

  it('/products/:id (DELETE)', () => {
    return request(app.getHttpServer())
      .delete('/products/' + Math.floor(Math.random() * (10 - 3) + 3))
      .expect(200);
  });
});
