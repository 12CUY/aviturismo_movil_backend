import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Observacion } from '../observacion/observacion.entity';

@Entity('imagenes')
export class Imagen {
  @PrimaryGeneratedColumn()
  id_imagen: number;

  @ManyToOne(() => Observacion, (observacion) => observacion.imagenes)
  observacion: Observacion;

  @Column({ type: 'varchar', length: 255 })
  url_imagen: string;
}