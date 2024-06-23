import { PlacesController } from './places.controller';
import { PlacesService } from './places.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SamesService } from 'src/sames/sames.service';
import { Module } from '@nestjs/common';
import { Place } from './places.entity';
import { Same } from 'src/sames/sames.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Place, Same])],
    controllers: [PlacesController],
    providers: [PlacesService, SamesService]
})
export class PlacesModule {}