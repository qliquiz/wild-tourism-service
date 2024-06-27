import { ApiProperty } from "@nestjs/swagger/dist/decorators/api-property.decorator";
import { IsString, IsNumber } from 'class-validator';
import { Type } from 'class-transformer';
import { IsBoolean } from "class-validator";
import { IsArray } from "class-validator";
import { ValidateNested } from "class-validator";

export default class PlaceDTO {
  @IsString()
  @ApiProperty({ example: 'Листвянка', description: 'Название' })
  readonly name: string;

  @IsString()
  @ApiProperty({ example: 'Красиво', description: 'Описание' })
  readonly description: string;

  @IsString()
  @ApiProperty({ example: 'camping', description: 'Категория' })
  readonly category: string;

  @IsBoolean()
  @ApiProperty({ example: 'true', description: 'Проверено модерацией' })
  isChecked: boolean;

  @IsNumber()
  @Type(() => Number)
  @ApiProperty({ example: '101.101101', description: 'Широта' })
  latitude: number;

  @IsNumber()
  @Type(() => Number)
  @ApiProperty({ example: '101.101101', description: 'Долгота' })
  longitude: number;

  @IsArray()
  @ValidateNested({ each: true })
  photos: Express.Multer.File[];
}