import { InjectRepository } from '@nestjs/typeorm';
import { SamesService } from 'src/sames/sames.service';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { PlaceDTO } from './places.dto';
import { Between } from 'typeorm';
import { Place } from './places.entity';
import { Same } from 'src/sames/sames.entity';

@Injectable()
export class PlacesService {
  constructor(
    private samesService: SamesService,
    @InjectRepository(Place)
    private placesRepository: Repository<Place>
  ) {}

  async create(dto: PlaceDTO): Promise<Place | Same> {
    const samePlace: Place = await this.placesRepository.findOne({
      where: {
        category: dto.category,
        latitude: Between(dto.latitude - 0.03, dto.latitude + 0.03),
        longitude: Between(dto.longitude - 0.03, dto.longitude + 0.03)
      }
    });
    if (samePlace) return await this.samesService.create(dto);
    const newPlace = this.placesRepository.create(dto);
    return await this.placesRepository.save(newPlace);
  }

  async getAll(): Promise<Place[]> {
    return await this.placesRepository.find();
  }

  async get(id: number): Promise<Place> {
    return await this.placesRepository.findOneBy({ id });
  }

  async update(id: number, dto: PlaceDTO): Promise<Place> {
    await this.placesRepository.update(id, dto);
    return await this.placesRepository.save({ id });
  }

  async delete(id: number): Promise<void> {
    await this.placesRepository.delete(id);
  }
}