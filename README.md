# Manual de Funcionamiento de "Aviturismo"

Este documento describe cómo funciona el sistema **"Aviturismo"** para el registro y gestión de observaciones de aves. A continuación, se detallan los pasos del proceso y las relaciones de la base de datos involucradas.

## Flujo de Trabajo

### 1. Registro e Inicio de Sesión

- **Registro**: Los usuarios nuevos completan un formulario con su nombre, correo electrónico y contraseña. Estos datos se almacenan en la tabla `usuarios`.
  
- **Inicio de sesión**: El sistema verifica el correo electrónico y la contraseña del usuario en la tabla `usuarios` para autenticarlo.

### 2. Dashboard de Usuario

- Después de iniciar sesión, el usuario accede a su dashboard, donde puede ver las observaciones previas y registrar una nueva observación de ave.

### 3. Captura de Imagen

- El usuario puede capturar una foto en tiempo real o seleccionar una imagen de la galería. La URL de la imagen se guarda en la tabla `imagenes` y se asocia a una observación específica mediante `id_observacion`.

### 4. Registro de Observación de Ave

El usuario completa un formulario de observación en tres pasos:
  
  1. **Detalles del observador y la especie del ave**:  
     - Campos: `nombre_observador`, `especie_ave`.
  
  2. **Características físicas del ave**:  
     - Campos: `cantidad_aves`, `tamano_ave`, `patron_alas`.
  
  3. **Información ambiental y de comportamiento**:  
     - Campos: `condiciones_climaticas`, `tipo_habitat`, `comportamiento`.
  
  4. **Ubicación de la observación**:  
     - Campos: `ubicacion_latitud`, `ubicacion_longitud`.

Estos datos se validan y se insertan en la tabla `observaciones`.

### 5. Generación de Código QR

- Tras completar el registro de la observación, se genera un **código QR** que contiene información clave de la observación (por ejemplo, un enlace a los detalles). 
- Los datos del código QR se guardan en la tabla `codigos_qr` y se asocian con la observación correspondiente.

### 6. Vista de Detalles de la Observación

- El usuario puede visualizar una vista previa de la observación, que incluye la imagen y todos los detalles ingresados.
- Si se generó un código QR, también se muestra en esta pantalla.

### 7. Guardar y Publicar Observación

- Si el usuario confirma que la información es correcta, la observación se guarda en la tabla `publicaciones`, asociada al `id_usuario` y al `id_observacion`.

### 8. Gestión de Observaciones

- Los usuarios pueden ver todas sus observaciones desde su perfil, donde pueden editar o eliminar cada publicación.
- Al eliminar una publicación, se borran los registros correspondientes de las tablas `publicaciones`, `observaciones`, `imagenes` y `codigos_qr`.

## Relaciones de la Base de Datos

- **Usuarios**: Un usuario puede tener múltiples observaciones.
- **Observaciones**: Cada observación está vinculada a una imagen y un código QR.
- **Publicaciones**: Cada observación publicada se asocia con un registro en la tabla `publicaciones`.

## Flujo de Datos

1. Un usuario **registra una observación**.
2. Se guarda la **imagen** y se genera un **código QR**.
3. Los datos de la observación se **guardan** en la base de datos.
4. Se muestra una **vista previa** para confirmar la publicación.
5. La observación se **publica** y puede ser gestionada desde el perfil del usuario.

## Resumen

Este sistema está diseñado para gestionar de manera eficiente las observaciones de aves, permitiendo a los usuarios registrar, visualizar, editar, eliminar y compartir observaciones mediante códigos QR. La estructura de base de datos y el flujo de trabajo garantizan un proceso organizado y fluido para cada usuario.


## Instalación

1. Clona este repositorio en tu máquina local:

   ```bash
   git clone https://github.com/12CUY/aviturismo_movil_backend.git

2. instalar dependencias
   ```bash
   npm i

3. iniciar el proyecto
   crear una base de datos en mysql 
   ```bash
   npm run start:dev

# back_aviturismo

<img src="/img/data.jpeg" alt="drawing" width="200"/>