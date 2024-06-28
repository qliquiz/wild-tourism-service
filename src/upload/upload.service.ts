import { Injectable } from '@nestjs/common';

@Injectable()
export class UploadService {
  getUploadedFilesUrls(files: Express.Multer.File[]): string[] {
    return files.map(file => `http://localhost:${process.env.PORT}/uploads/${file.filename}`);
  }
}