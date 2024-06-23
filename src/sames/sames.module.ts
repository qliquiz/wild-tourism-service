import { SamesController } from './sames.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SamesService } from './sames.service';
import { Module } from '@nestjs/common';
import { Place } from 'src/places/places.entity';
import { Same } from './sames.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Place, Same])],
  exports: [SamesService],
  controllers: [SamesController],
  providers: [SamesService]
})
export class SamesModule {}