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
import { Inversionista } from '../../models/inversionista';
import { Emprendedor } from '../../models/emprendedor';

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

    inversionista: Inversionista = {
      capitalDisponible: 0,
      idUsuario: 0,
    };
  
    emprendedor: Emprendedor = {
      experiencia: 0,
      idUsuario: 0,
    };

    isInversionista = false;
    isEmprendedor = false;

  onRoleChange(): void {
    this.isInversionista = this.usuario.rol.nombre === 'Inversionista';
    this.isEmprendedor = this.usuario.rol.nombre === 'Emprendedor';
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

       // Verifica si el usuario tiene un ID válido
  if (!this.usuario.idUsuario || this.usuario.idUsuario === 0) {
    // Primero, crea el usuario
    this.usuarioService.createUsuario(command).subscribe({
      next: (response: any) => {
        // Asigna el ID del usuario creado al rol correspondiente
        this.usuario = response.data;
        console.log('Usuario creado: ', this.usuario);

        // Muestra una notificación
        alert('Usuario creado con éxito');

        const usuarioId = this.usuario.idUsuario; // Ajusta según la respuesta de tu backend
  
        if (this.isInversionista) {
          this.inversionista.idUsuario = usuarioId;
          this.createInversionista();
        } else if (this.isEmprendedor) {
          this.emprendedor.idUsuario = usuarioId;
          this.createEmprendedor();
        }
      },
      error: (e) => {
        console.error('Error al crear usuario: ', e);
        if (e.error) {
          console.error('Error detallado: ', e.error);
        }
        alert('Hubo un error al crear el usuario');
      }

    });
      } else {
        // Usuario ya existe, continúa con la creación del rol
        if (this.isInversionista) {
          this.createInversionista();
        } else if (this.isEmprendedor) {
          this.createEmprendedor();
        }
      }
    }

    createInversionista(): void {
      this.usuarioService.createInversionista(this.inversionista).subscribe({
        next: () => {
          alert('El inversionista ha sido creado correctamente')
        },
        error: (error) => {
          alert('No se pudo crear el inversionista')
          console.error('Error creando inversionista:', error);
        },
      });
      console.log(this.inversionista)
    }

    createEmprendedor(): void {
      this.usuarioService.createEmprendedor(this.emprendedor).subscribe({
        next: () => {
          alert('El emprendedor ha sido creado correctamente')
        },
        error: (error) => {
          alert('No se pudo crear el emprendedor')
          console.error('Error creando emprendedor:', error);
        },
      });
      console.log(this.emprendedor)

    }
     

    ngOnInit(): void {
      // Cargar los roles al inicializar el componente
      this.rolService.getRoles().subscribe((data) => {
        this.roles = data;
      });
    }



}
