import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import PlaceDTO from 'src/places/places.dto';
import { SamePlace } from './sames.entity';

@Injectable()
export class SamePlacesService {
  constructor(
    @InjectRepository(SamePlace)
    private samesRepository: Repository<SamePlace>
  ) {}

  async create(dto: PlaceDTO): Promise<SamePlace> {
    const newSamePlace = this.samesRepository.create(dto);
    return this.samesRepository.save(newSamePlace);
  }

  async getAll(): Promise<SamePlace[]> {
    return await this.samesRepository.find();
  }

  async get(id: number): Promise<SamePlace> {
    return await this.samesRepository.findOneBy({ id });
  }

  async update(id: number, dto: PlaceDTO): Promise<SamePlace> {
    await this.samesRepository.update(id, dto);
    return await this.samesRepository.save({ id });
  }

  async delete(id: number): Promise<void> {
    await this.samesRepository.delete(id);
  }
}