import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Publicacion } from '../publicacion/publicacion.entity';
import { Observacion } from '../observacion/observacion.entity';

@Entity('usuarios')
export class Usuario {
  @PrimaryGeneratedColumn()
  id_usuario: number;

  @Column({ type: 'varchar', length: 100 })
  nombre: string;

  @Column({ type: 'varchar', length: 100, unique: true })
  correo: string;

  @Column({ type: 'varchar', length: 255 })
  contrasena: string;

  @OneToMany(() => Publicacion, (publicacion) => publicacion.usuario)
  publicaciones: Publicacion[];

  @OneToMany(() => Observacion, (observacion) => observacion.usuario)
  observaciones: Observacion[];
}
