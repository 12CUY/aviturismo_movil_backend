import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { CreateUserDto } from './create-user.dto';
import { JwtAuthGuard } from '../usuario/jwt-auth.guard';

@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Post('register')
  async register(@Body() createUserDto: CreateUserDto) {
    return this.usuarioService.register(createUserDto);
  }

  @Post('login')
  async login(@Body() loginDto: { correo: string, contrasena: string }) {
    // Pasar ambos parámetros al servicio
    return this.usuarioService.login(loginDto.correo, loginDto.contrasena);
  }

  

  @UseGuards(JwtAuthGuard)
  @Get('me')
  async getProfile(@Request() req) {
    return this.usuarioService.findUserById(req.user.id);
  }
}
