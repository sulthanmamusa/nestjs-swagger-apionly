import * as fs from 'fs';
import { createProxyMiddleware } from 'http-proxy-middleware';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await app.use(
    '/custom_product',
    createProxyMiddleware({
      target: 'http://192.168.0.219',
      changeOrigin: true
    })
  );

  const options = new DocumentBuilder()
    .setTitle('Travelomatix Api')
    .setDescription('The travelomatix API description')
    .setVersion('1.0')
    .addTag('Travelomatix')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
  fs.writeFileSync('./swagger-spec.json', JSON.stringify(document));
  await app.listen(3000);
}
bootstrap();
