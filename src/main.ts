import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import express from 'express';
import path, { join,resolve } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useStaticAssets(join(__dirname,'assets'));
  app.setBaseViewsDir(join(__dirname,'views'));
  app.setViewEngine('hbs');
 console.log(join(__dirname,'assets'),"")

  const port = process.env.PORT || 3000;
  await app.listen(port);
  Logger.log(`???? Application is running on: http://localhost:${port}`);
}

bootstrap();