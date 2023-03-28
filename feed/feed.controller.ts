import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { MyService } from './feed.service';
import { MyEntity } from './entities/feed.entity';

import {}

@Controller('feed')
export class MyController {
  constructor(private readonly myService: MyService) {}

  @Post()
  async create(@Body() myEntity: MyEntity): Promise<MyEntity> {
    return this.myService.create(myEntity);
  }

  @Get()
  async findAll(): Promise<MyEntity[]> {
    return this.myService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<MyEntity> {
    return this.myService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() myEntity: MyEntity,
  ): Promise<MyEntity> {
    return this.myService.update(id, myEntity);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.myService.delete(id);
  }
}
