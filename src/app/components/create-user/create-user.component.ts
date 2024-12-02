import { Component, OnInit} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';
import { TipoDocumento } from '../../enum/tipoDocumento';
import { Usuario } from '../../models/usuario';
import { Rol } from '../../models/rol';
import { RolService } from '../../services/rol.service';
import { UsuarioCommand } from '../../models/commands/usuarioCommand';

import { getEnumKeyFromValue } from '../../utils/enum-utils';

@Component({
  selector: 'app-create-user',
  standalone: false,

  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.css'
})

export class CreateUserComponent implements OnInit{
    roles: Rol[] = []; // Lista de roles obtenida del backend
    usuario: Usuario = {
      idUsuario: 0,
      tipoDocumento: TipoDocumento.CEDULA_CIUDADANIA,
      documento: '',
      nombre: '',
      apellidos: '',
      correoElectronico: '',
      contrasenia:'',
      edad: 0,
      celular: 0,
      rol: { idRol: 0, nombre: '' }
    }


     // Opciones de tipoDocumento basadas en el enum
    tipoDocumento = Object.values(TipoDocumento); // ['CC', 'TI', 'CE', 'PAS', 'RC', 'NIT']

    constructor(private usuarioService: UsuarioService, private router: Router, private rolService: RolService){}

    onSubmit(): void{

      const tipoDocumentoKey = getEnumKeyFromValue(this.usuario.tipoDocumento, TipoDocumento);

      const command: UsuarioCommand = {

        tipoDocumento:tipoDocumentoKey || this.usuario.tipoDocumento,
        documento: this.usuario.documento,
        nombre: this.usuario.nombre,
        apellidos: this.usuario.apellidos,
        correoElectronico: this.usuario.correoElectronico,
        contrasenia: this.usuario.contrasenia,
        edad: this.usuario.edad,
        celular: this.usuario.celular,
        idRol: this.usuario.rol?.idRol, // Solo se envía el ID del rol en el command
      };
      console.log(command);


      this.usuarioService.createUsuario(command).subscribe({
        next: (result: Usuario) => {
          this.usuario = result;  // Mapear el resultado
          console.log('Usuario creado: ', this.usuario);
          alert('Usuario creado con éxito');
          this.router.navigate(['/']);
        },
        error: (e) => {
          console.error('Error al crear usuario: ', e);
          if (e.error) {
            console.error('Error detallado: ', e.error);
          }
          alert('Hubo un error al crear el usuario');
        }
      });

    }

    ngOnInit(): void {
      // Cargar los roles al inicializar el componente
      this.rolService.getRoles().subscribe((data) => {
        this.roles = data;
      });
    }



}
