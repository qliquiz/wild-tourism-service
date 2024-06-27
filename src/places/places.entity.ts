import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger/dist/decorators";
import { SamePlace } from "src/sames/sames.entity";

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

  @ApiProperty({ example: 'true', description: 'Проверено модерацией' })
  @Column({ default: false })
  isChecked: boolean;

  @OneToMany(() => SamePlace, (same) => same.place)
  sames: SamePlace[];
}