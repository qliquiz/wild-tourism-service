import { Controller, Get, Post, Body, Delete, Query, Put, UseInterceptors, UploadedFiles } from '@nestjs/common';
import { FileFieldsInterceptor } from '@nestjs/platform-express/multer/interceptors/file-fields.interceptor';
import { PlacesService } from './places.service';
import { PlaceDTO } from './places.dto';
import { Place } from './places.entity';

@Controller('places')
export class PlacesController {
  constructor(private readonly placesService: PlacesService) {}

  @Post()
  @UseInterceptors(FileFieldsInterceptor([{ name: 'photos', maxCount: 10 }]))
  create(@UploadedFiles() files: { photos?: Express.Multer.File[] }, @Body() dto: PlaceDTO): Promise<Place> {
    if (files.photos) dto.photos = files.photos.map(file => file.filename);
    return this.placesService.create(dto);
  }

  @Get()
  getAll(): Promise<Place[]> {
    return this.placesService.getAll();
  }

  @Get()
  get(@Query('id') id: string): Promise<Place> {
    return this.placesService.get(+id);
  }

  @Put()
  update(@Query('id') id: string, @Body() dto: PlaceDTO): Promise<Place> {
    return this.placesService.update(+id, dto);
  }

  @Delete()
  delete(@Query('id') id: string): Promise<void> {
    return this.placesService.delete(+id);
  }
}