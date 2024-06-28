import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config/dist/config.module';
import { PlacesModule } from './places/places.module';
import { SamePlacesModule } from './sames/sames.module';
import { Module } from '@nestjs/common';
import { Place } from './places/places.entity';
import { SamePlace } from './sames/sames.entity';
import { UploadModule } from './upload/upload.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `${process.env.NODE_ENV}.env`
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [Place, SamePlace],
      synchronize: true
    }),
    PlacesModule,
    SamePlacesModule,
    UploadModule
  ]
})
export class AppModule {}