import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MyService } from './feed.service';
import { MyEntity } from './entities/feed.entity';
import { MyController } from './feed.controller';

@Module({
  imports: [TypeOrmModule.forFeature([MyEntity])],
  controllers: [MyController],
  providers: [MyService],
})

export class FeedModule {}
