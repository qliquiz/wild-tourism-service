import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { PlaceDTO } from './places.dto';
import { Place } from './places.entity';

@Injectable()
export class PlacesService {
  constructor(
    @InjectRepository(Place)
    private placesRepository: Repository<Place>
  ) {}

  async create(dto: PlaceDTO): Promise<Place> {
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