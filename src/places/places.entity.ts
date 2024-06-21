import { ApiProperty } from "@nestjs/swagger/dist/decorators";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Place {
  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'Листвянка', description: 'Название' })
  @Column({ type: 'varchar', length: 30, nullable: false })
  name: string;

  @ApiProperty({ example: 'Красиво', description: 'Описание' })
  @Column({ type: 'varchar', length: 600, nullable: true })
  description: string;

  @ApiProperty({ description: 'Фотографии' })
  @Column('text', { array: true, nullable: true })
  photos: string[];
  
  @ApiProperty({ example: 'camping', description: 'Категория' })
  @Column({ type: 'varchar', length: 20, nullable: false, default: 'camping' })
  category: string;

  @ApiProperty({ example: '101.101101', description: 'Широта' })
  @Column({ type: 'float', default: 0.0 })
  latitude: number;

  @ApiProperty({ example: '101.101101', description: 'Долгота' })
  @Column({ type: 'float', default: 0.0 })
  longitude: number;

  @ApiProperty({ example: '104.27810668945312', description: 'Координаты левого края' })
  @Column({ type: 'float', default: 0.0 })
  left: number;

  @ApiProperty({ example: '52.054179425297164', description: 'Координаты верхнего края' })
  @Column({ type: 'float', default: 0.0 })
  top: number;
  
  @ApiProperty({ example: '105.51132202148436', description: 'Координаты левого края' })
  @Column({ type: 'float', default: 0.0 })
  right: number;

  @ApiProperty({ example: '51.7151177895987', description: 'Координаты нижнего  края' })
  @Column({ type: 'float', default: 0.0 })
  bottom: number;
}