import { Controller, Get, Post, Body, Delete, Query, Put, UseInterceptors, UploadedFiles, UseGuards } from '@nestjs/common';
import { PlacesService } from './places.service';
import PlaceDTO from './places.dto';
import { Place } from './places.entity';
import { FilesInterceptor } from '@nestjs/platform-express';
import { PasswordHeaderGuard } from 'src/guard';

@Controller('places')
export class PlacesController {
  constructor(private readonly placesService: PlacesService) {}

  @Post()
  @UseInterceptors(FilesInterceptor('photos', 5))
  async createPlace(@UploadedFiles() files: Array<Express.Multer.File>, @Body() dto: PlaceDTO) {
    dto.latitude = parseFloat(dto.latitude as any);
    dto.longitude = parseFloat(dto.longitude as any);
    dto.photos = files;
    return this.placesService.create(dto);
  }

  @Get()
  getAll(): Promise<Place[]> {
    return this.placesService.getAll();
  }

/*   @Get()
  get(@Query('id') id: string): Promise<Place> {
    return this.placesService.get(+id);
  } */

  @UseGuards(PasswordHeaderGuard)
  @Put()
  update(@Query('id') id: string, @Body() dto: PlaceDTO): Promise<Place> {
    return this.placesService.update(+id, dto);
  }

  @UseGuards(PasswordHeaderGuard)
  @Delete()
  delete(@Query('id') id: string): Promise<void> {
    return this.placesService.delete(+id);
  }
}