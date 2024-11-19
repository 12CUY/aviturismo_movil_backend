import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Usuario } from '../usuario/usuario.entity';
import { Observacion } from '../observacion/observacion.entity';

@Entity('publicaciones')
export class Publicacion {
  @PrimaryGeneratedColumn()
  id_publicacion: number;

  @ManyToOne(() => Usuario, (usuario) => usuario.publicaciones)
  usuario: Usuario;

  @ManyToOne(() => Observacion, (observacion) => observacion.publicaciones)
  observacion: Observacion;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  fecha_publicacion: Date;
}
