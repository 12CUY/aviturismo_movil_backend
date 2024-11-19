import { Module } from '@nestjs/common';
import { ObservacionController } from './observacion.controller';
import { ObservacionService } from './observacion.service';

@Module({
  controllers: [ObservacionController],
  providers: [ObservacionService]
})
export class ObservacionModule {}
