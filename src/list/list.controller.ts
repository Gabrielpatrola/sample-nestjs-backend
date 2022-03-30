import { Controller, Get, Param } from '@nestjs/common';
import { ListService } from './list.service';

@Controller('lists')
export class ListController {
  constructor(private readonly listService: ListService) {}

  @Get('/')
  async findAll() {
    return await this.listService.findAll();
  }

  @Get('/:id')
  async findOne(@Param('id') id: number) {
    return await this.listService.findById(id);
  }
}
