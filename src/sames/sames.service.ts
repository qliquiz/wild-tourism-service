import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { PlaceDTO } from 'src/places/places.dto';
import { Same } from './sames.entity';

@Injectable()
export class SamesService {
  constructor(
    @InjectRepository(Same)
    private samesRepository: Repository<Same>
  ) {}

  async create(dto: PlaceDTO): Promise<Same> {
    const newSame = this.samesRepository.create(dto);
    return await this.samesRepository.save(newSame);
  }

  async getAll(): Promise<Same[]> {
    return await this.samesRepository.find();
  }

  async get(id: number): Promise<Same> {
    return await this.samesRepository.findOneBy({ id });
  }

  async update(id: number, dto: PlaceDTO): Promise<Same> {
    await this.samesRepository.update(id, dto);
    return await this.samesRepository.save({ id });
  }

  async delete(id: number): Promise<void> {
    await this.samesRepository.delete(id);
  }
}