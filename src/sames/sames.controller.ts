import { Controller, Get, Post, Body, Delete, Query, Put, UseInterceptors, UploadedFiles } from '@nestjs/common';
import { SamePlacesService } from './sames.service';
import PlaceDTO from 'src/places/places.dto';
import { SamePlace } from './sames.entity';

@Controller('sames')
export class SamePlacesController {
  constructor(private readonly samesService: SamePlacesService) {}

  @Post()
  async createPlace(@Body() dto: PlaceDTO): Promise<SamePlace> {
    return this.samesService.create(dto);
  }

  @Get()
  getAll(): Promise<SamePlace[]> {
    return this.samesService.getAll();
  }

  @Get()
  get(@Query('id') id: string): Promise<SamePlace> {
    return this.samesService.get(+id);
  }

  @Put()
  update(@Query('id') id: string, @Body() dto: PlaceDTO): Promise<SamePlace> {
    return this.samesService.update(+id, dto);
  }

  @Delete()
  delete(@Query('id') id: string): Promise<void> {
    return this.samesService.delete(+id);
  }
}