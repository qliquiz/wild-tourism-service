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

  @ApiProperty({ example: '104.27810668945312', description: 'Координаты левого края' })
  readonly left: number;

  @ApiProperty({ example: '52.054179425297164', description: 'Координаты верхнего края' })
  readonly top: number;
  
  @ApiProperty({ example: '105.51132202148436', description: 'Координаты левого края' })
  readonly right: number;

  @ApiProperty({ example: '51.7151177895987', description: 'Координаты нижнего  края' })
  readonly bottom: number;
}