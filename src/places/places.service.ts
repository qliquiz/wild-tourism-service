import { InjectRepository } from '@nestjs/typeorm';
import { SamePlacesService } from 'src/sames/sames.service';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import PlaceDTO from './places.dto';
import { Between } from 'typeorm';
import { Place } from './places.entity';
import { SamePlace } from 'src/sames/sames.entity';

@Injectable()
export class PlacesService {
  constructor(
    private samesService: SamePlacesService,
    @InjectRepository(Place)
    private placesRepository: Repository<Place>
  ) {}

  async create(dto: PlaceDTO): Promise<Place | SamePlace> {
    const samePlace: Place = await this.placesRepository.findOne({
      where: {
        category: dto.category,
        latitude: Between(dto.latitude - 0.01, dto.latitude + 0.01),
        longitude: Between(dto.longitude - 0.01, dto.longitude + 0.01)
      }
    });
    if (samePlace) return this.samesService.create(dto);
    const newPlace = this.placesRepository.create(dto);
    console.log('<Place>');
    console.log(newPlace);
    return this.placesRepository.save(newPlace);
  }

  async getAll(): Promise<Place[]> {
    return await this.placesRepository.find({ where: { isChecked: true }});
  }

  /* async get(id: number): Promise<Place> {
    return await this.placesRepository.findOneBy({ id });
  } */

  async update(id: number, dto: PlaceDTO): Promise<Place> {
    await this.placesRepository.update(id, dto);
    return await this.placesRepository.save({ id });
  }

  async delete(id: number): Promise<void> {
    await this.placesRepository.delete(id);
  }
}