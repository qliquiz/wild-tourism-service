import { Controller, Post, UploadedFiles, UseInterceptors, Body } from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';

@Controller('upload')
export class FileUploadController {
  @Post()
  @UseInterceptors(FilesInterceptor('files', 5)) // 'files' - имя поля, 10 - максимальное количество файлов
  uploadFiles(@UploadedFiles() files: Array<Express.Multer.File>, @Body() body: any) {
    console.log('Files:', files);
    console.log('Other Data:', body);
    return {
      message: 'Files uploaded successfully',
      files,
      body,
    };
  }
}