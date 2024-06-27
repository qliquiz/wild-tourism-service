import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: 'http://localhost:3000', // URL вашего фронтенда
    credentials: true,
  });

  const config = new DocumentBuilder()
    .setTitle('Сервис для туризма')
    .setDescription('Документация REST API')
    .setVersion('1.0.0')
    .addTag('qliquiz, alblak')
    .build();
    
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/docs', app, document);

  await app.listen(process.env.PORT, () => console.log(`The server is running on port ${process.env.PORT}`));
}
bootstrap();