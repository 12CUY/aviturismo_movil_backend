import { Module } from '@nestjs/common';
import { CodigoQrController } from './codigo_qr.controller';
import { CodigoQrService } from './codigo_qr.service';

@Module({
  controllers: [CodigoQrController],
  providers: [CodigoQrService],
})
export class CodigoQrModule {}
