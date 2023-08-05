import { Body, Controller, Get, NotFoundException, Param, Post, Redirect, Render, Res, StreamableFile, UploadedFile, UseInterceptors } from '@nestjs/common';
import { ImageGeneratorService } from './image-genrate.service';
import { createReadStream } from 'fs';
import { FileInterceptor } from '@nestjs/platform-express';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly imageGeneratorService: ImageGeneratorService) {}

  //  @Get('')
  //  getMessage(){
  //   return "Hello The server is runing well"
  //  }

  @Get('')
  @Render('index')
  public root() {
    return;
  }
 
  @Post('image')
  @UseInterceptors(FileInterceptor('image'))
  public async getImage(@UploadedFile('image') image:Express.Multer.File , @Body() width:string, height:string) {
     console.log(width,height)
    // const generatedFilePath = await this.imageGeneratorService.generateImage(image);
    // console.log(generatedFilePath);
    
    // if (!generatedFilePath) {
    //   throw new NotFoundException();
    // }
    // const file = createReadStream(generatedFilePath);
    // return new StreamableFile(file); 
    // return this.imageGeneratorService.generateImage(image);
  }


  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
 async uploadFile(@UploadedFile() file: Express.Multer.File, @Body() allBody:object,@Res() res:Response) {
    const obj = JSON.parse(JSON.stringify(allBody));
    obj.width = Number(obj.width)
    obj.height = Number(obj.height)
   const result=await this.imageGeneratorService.generateImage(file,obj.width,obj.height,obj.extension)
   return res.json(result);//`data:${result.extension};${result.b64Data}`;
} 

}