import { Controller, Get, Post, Body, Delete, Query, Put, UseInterceptors, UploadedFiles } from '@nestjs/common';
import { FileFieldsInterceptor } from '@nestjs/platform-express/multer/interceptors/file-fields.interceptor';
import { SamesService } from './sames.service';
import { PlaceDTO } from 'src/places/places.dto';
import { Same } from './sames.entity';

@Controller('sames')
export class SamesController {
  constructor(private readonly samesService: SamesService) {}

  @Post()
  @UseInterceptors(FileFieldsInterceptor([{ name: 'photos', maxCount: 10 }]))
  create(@UploadedFiles() files: { photos?: Express.Multer.File[] }, @Body() dto: PlaceDTO): Promise<Same> {
    if (files.photos) dto.photos = files.photos.map(file => file.filename);
    return this.samesService.create(dto);
  }

  @Get()
  getAll(): Promise<Same[]> {
    return this.samesService.getAll();
  }

  @Get()
  get(@Query('id') id: string): Promise<Same> {
    return this.samesService.get(+id);
  }

  @Put()
  update(@Query('id') id: string, @Body() dto: PlaceDTO): Promise<Same> {
    return this.samesService.update(+id, dto);
  }

  @Delete()
  delete(@Query('id') id: string): Promise<void> {
    return this.samesService.delete(+id);
  }
}