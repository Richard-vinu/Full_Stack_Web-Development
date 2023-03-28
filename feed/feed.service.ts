import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MyEntity } from './entities/feed.entity';
import { FindOneOptions } from 'typeorm';

@Injectable()
export class MyService {
  constructor(
    @InjectRepository(MyEntity)
    private readonly myRepository: Repository<MyEntity>,
  ) {}

  async findAll(): Promise<MyEntity[]> {
    return this.myRepository.find();
  }

  async findOne(id: number): Promise<MyEntity> {
     const options: FindOneOptions<MyEntity> = { where: { id } };
    return this.myRepository.findOne(options);
  }

  async create(myEntity: MyEntity): Promise<MyEntity> {
    return this.myRepository.save(myEntity);
  }

  async update(id: number, myEntity: MyEntity): Promise<MyEntity> {
         const options: FindOneOptions<MyEntity> = { where: { id } };
    const entityToUpdate = await this.myRepository.findOne(options);
    entityToUpdate.name = myEntity.name;
    entityToUpdate.age = myEntity.age;
    return this.myRepository.save(entityToUpdate);
  }

  async delete(id: number): Promise<void> {
    await this.myRepository.delete(id);
  }
}
