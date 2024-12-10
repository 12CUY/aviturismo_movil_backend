import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Usuario } from '../usuario/usuario.entity';


@Entity('observaciones')
export class Observacion {
  @PrimaryGeneratedColumn()
  id_observacion: number;

  @ManyToOne(() => Usuario, (usuario) => usuario.observaciones)
  usuario: Usuario;

  @Column({ type: 'varchar', length: 255 })
  url_imagen: string;

  @Column({ type: 'varchar', length: 100 })
  nombre_observador: string;

  @Column({ type: 'varchar', length: 100 })
  especie_ave: string;

  @Column({ type: 'int' })
  cantidad_aves: number;

  @Column({ type: 'varchar', length: 50 })
  tamano_ave: string;

  @Column({ type: 'varchar', length: 100 })
  patron_alas: string;

  @Column({ type: 'varchar', length: 100 })
  condiciones_climaticas: string;

  @Column({ type: 'varchar', length: 100 })
  tipo_habitat: string;

  @Column({ type: 'varchar', length: 50 })
  forma_cola: string;

  @Column({ type: 'varchar', length: 50 })
  tipo_pico: string;

  @Column({ type: 'varchar', length: 100 })
  color_ave: string;

}
