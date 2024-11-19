import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Observacion } from '../observacion/observacion.entity';

@Entity('codigos_qr')
export class CodigoQR {
  @PrimaryGeneratedColumn()
  id_qr: number;

  @ManyToOne(() => Observacion, (observacion) => observacion.codigos_qr)
  observacion: Observacion;

  @Column({ type: 'varchar', length: 255 })
  qr_data: string;

  @Column({ type: 'varchar', length: 255 })
  url_qr: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  fecha_generacion: Date;
}
