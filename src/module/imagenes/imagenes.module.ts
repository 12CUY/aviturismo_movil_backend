import { Module } from '@nestjs/common';
import { ImagenesController } from './imagenes.controller';
import { ImagenesService } from './imagenes.service';

@Module({
  controllers: [ImagenesController],
  providers: [ImagenesService]
})
export class ImagenesModule {}
