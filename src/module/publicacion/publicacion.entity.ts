import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Usuario } from '../usuario/usuario.entity';

@Entity('publicaciones')
export class Publicacion {
  @PrimaryGeneratedColumn()
  id_publicacion: number;

  @ManyToOne(() => Usuario, (usuario) => usuario.publicaciones)
  usuario: Usuario;


  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  fecha_publicacion: Date;
}
