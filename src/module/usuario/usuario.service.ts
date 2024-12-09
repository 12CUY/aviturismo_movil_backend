import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './usuario.entity';
import { CreateUserDto } from './create-user.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
    private readonly jwtService: JwtService,
  ) {}

  async register(createUserDto: CreateUserDto): Promise<Usuario> {
    const { contrasena, ...userData } = createUserDto;

    // Encriptar contraseña
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(contrasena, salt);

    // Crear una nueva instancia del usuario
    const newUser = this.usuarioRepository.create({
      ...userData,
      contrasena: hashedPassword,
    });

    // Guardar en la base de datos
    return this.usuarioRepository.save(newUser);
  }

  async login(correo: string, contrasena: string): Promise<{ token: string }> {
    const user = await this.usuarioRepository.findOneBy({ correo });

    if (!user) {
      throw new UnauthorizedException('Usuario o contraseña incorrectos');
    }

    const isPasswordValid = await bcrypt.compare(contrasena, user.contrasena);

    if (!isPasswordValid) {
      throw new UnauthorizedException('Usuario o contraseña incorrectos');
    }

    // Usar la propiedad correcta `id_usuario` en lugar de `id`
    const payload = { correo: user.correo, sub: user.id_usuario }; 
    const token = this.jwtService.sign(payload);

    return { token };
  }

  async findUserById(id: number): Promise<Usuario> {
    return this.usuarioRepository.findOne({
      where: { id_usuario: id },
      relations: ['publicaciones', 'observaciones'], // Carga relaciones si se necesitan
    });
  }
}
