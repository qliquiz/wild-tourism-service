import { PlacesController } from './places.controller';
import { PlacesService } from './places.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SamePlacesService } from 'src/sames/sames.service';
import { Module } from '@nestjs/common';
import { Place } from './places.entity';
import { SamePlace } from 'src/sames/sames.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Place, SamePlace])],
    controllers: [PlacesController],
    providers: [PlacesService, SamePlacesService]
})
export class PlacesModule {}