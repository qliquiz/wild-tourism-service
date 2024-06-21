import { Module } from '@nestjs/common';
import { Place } from './places.entity';
import { PlacesController } from './places.controller';
import { PlacesService } from './places.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([Place])],
    controllers: [PlacesController],
    providers: [PlacesService]
})
export class PlacesModule {}