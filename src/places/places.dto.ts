import { ApiProperty } from "@nestjs/swagger/dist/decorators/api-property.decorator";

export class PlaceDTO {
  @ApiProperty({ example: 'Листвянка', description: 'Название' })
  readonly name: string;

  @ApiProperty({ example: 'Красиво', description: 'Описание' })
  readonly description: string;

  @ApiProperty({ description: 'Фотографии' })
  photos: string[];
  
  @ApiProperty({ example: 'camping', description: 'Категория' })
  readonly category: string;

  @ApiProperty({ example: '101.101101', description: 'Широта' })
  readonly latitude: number;

  @ApiProperty({ example: '101.101101', description: 'Долгота' })
  readonly longitude: number;
}