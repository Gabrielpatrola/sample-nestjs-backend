import { Injectable } from '@nestjs/common';
import { ListRepository } from './list.repository';
import { List } from './list.entity';
import { Connection } from 'typeorm';

@Injectable()
export class ListService {
  constructor(
    private readonly connection: Connection,
    private listRespository: ListRepository,
  ) {
    this.listRespository = this.connection.getCustomRepository(ListRepository);
  }

  async createList(data) {
    return this.listRespository.createAndSave(data as List);
  }

  async findAll() {
    return await this.listRespository.find();
  }

  async findById(id: number) {
    return await this.listRespository.findOne(id);
  }

  async updateById(id: number) {
    const list = await this.listRespository.findOne(id);

    return await this.listRespository.compareAndUpdate(list);
  }
}
