import { SamePlacesController } from './sames.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SamePlacesService } from './sames.service';
import { Module } from '@nestjs/common';
import { Place } from 'src/places/places.entity';
import { SamePlace } from './sames.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Place, SamePlace])],
  exports: [SamePlacesService],
  controllers: [SamePlacesController],
  providers: [SamePlacesService]
})
export class SamePlacesModule {}