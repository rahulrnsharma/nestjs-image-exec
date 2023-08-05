import { Injectable } from '@nestjs/common';
import { join, resolve } from 'path';
import { existsSync } from 'fs';
import sharp = require('sharp');
var sizeOf = require('image-size');
@Injectable()
export class ImageGeneratorService {
  public async generateImage(image: Express.Multer.File,width:number,height:number,format:keyof sharp.FormatEnum | sharp.AvailableFormatInfo): Promise<any> {
    // const [fileName, fileType] = image.split('.');

    // const targetPath = resolve('./src', 'assets', image);
    // const basePath = resolve('./src', 'assets', `${fileBaseName}.${fileType}`);
  
    // if (!existsSync(targetPath)) {
    //   if (!existsSync(basePath)) {
    //     return undefined;
    //   }
    console.log(format);
//    const formatObj={
//     id: "string",
//     input: { file: true, buffer: true, stream: true, fileSuffix?: [] },
//     output: { file: true, buffer: true, stream: true, alias?: [] },
// }
var dimensions = sizeOf(image.buffer);
if(width==0){
  width = dimensions.width;
} 
 if(height ==0){
  height = dimensions.height 
}

     const response =   await sharp(image.buffer)
        .resize({width:width,height:height})
        .toFormat(format)
       .extract({ left: 0, top: 0, width: 100, height: 100 })
        .toBuffer()
        .then((data)=>{
           return {b64Data: data.toString('base64'), extension: format};
        })
      return response
    }
  }

  //{id:'extention',
  // input:{file:true,buffer:true,stream:true,fileSuffix:[image.mimetype]},
  // output:{file:true,buffer:true,stream:true,alias:['webp']}}