import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ListController } from './list.controller';
import { List } from './list.entity';
import { ListRepository } from './list.repository';
import { ListService } from './list.service';

@Module({
  imports: [TypeOrmModule.forFeature([List])],
  controllers: [ListController],
  providers: [ListService, ListRepository],
  exports: [ListService, TypeOrmModule],
})
export class ListModule {}
