import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ImageGeneratorService } from './image-genrate.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { resolve } from 'path';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [ImageGeneratorService],
})
export class AppModule {}