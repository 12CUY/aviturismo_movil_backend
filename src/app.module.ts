import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './module/usuario/usuario.module';
import { PublicacionModule } from './module/publicacion/publicacion.module';
import { ObservacionModule } from './module/observacion/observacion.module';
import { ImagenesModule } from './module/imagenes/imagenes.module';
import { CodigoQrModule } from './module/codigo_qr/codigo_qr.module';

@Module({
  imports: [UsuarioModule, PublicacionModule, ObservacionModule, ImagenesModule, CodigoQrModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
