import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { readFileSync } from 'fs';
import { diskStorage } from 'multer';
import { parse } from 'papaparse';
import { ProductInterface, ProductJobInterface } from './product.interface';
import { ProductsService } from './product.service';
import { editFileName } from '../utils/file.utils';
import { ListService } from '../list/list.service';

@Controller('products')
export class ProductController {
  constructor(
    private readonly productsService: ProductsService,
    private readonly listService: ListService,
  ) {}

  @Get('/')
  async findAll() {
    return await this.productsService.findAll();
  }

  @Get('/:id')
  async findOne(@Param('id') id: number) {
    return await this.productsService.findById(id);
  }

  @Delete('/:id')
  async deleteOne(@Param('id') id: number) {
    return await this.productsService.deleteById(id);
  }

  @Put('/:id')
  async updateOne(@Param('id') id: number, @Body() data: ProductInterface) {
    return await this.productsService.updateById(id, data);
  }

  @Post('/upload')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './files',
        filename: editFileName,
      }),
    }),
  )
  async uploadFile(@UploadedFile() file) {
    const csvFile = readFileSync('files/' + file.filename);
    const csvData = csvFile.toString();

    const parsedCsv = parse(csvData, {
      header: true,
      skipEmptyLines: true,
      transformHeader: (header) => header.toLowerCase(),
      complete: (results) => results.data,
    });

    const newList = await this.listService.createList({
      name: file.filename,
      status: false,
    });

    this.productsService.sendMessage(
      parsedCsv.data as any,
      newList.name,
      newList.id,
    );

    return newList;
  }
}
