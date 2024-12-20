import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './module/usuario/usuario.module';
import { PublicacionModule } from './module/publicacion/publicacion.module';
import { ObservacionModule } from './module/observacion/observacion.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'aviturismo',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true
    }),
    UsuarioModule,
    PublicacionModule,
    ObservacionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
