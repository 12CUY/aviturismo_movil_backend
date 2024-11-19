import { Module } from '@nestjs/common';
import { PublicacionController } from './publicacion.controller';
import { PublicacionService } from './publicacion.service';

@Module({
  controllers: [PublicacionController],
  providers: [PublicacionService]
})
export class PublicacionModule {}
