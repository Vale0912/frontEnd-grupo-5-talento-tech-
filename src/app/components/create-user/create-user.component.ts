import { Component, OnInit} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';
import { TipoDocumento } from '../../models/tipoDocumento';
import { Usuario } from '../../models/usuario';
import { Rol } from '../../models/rol';
import { RolService } from '../../services/rol.service';

@Component({
  selector: 'app-create-user',
  standalone: false,
  
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.css'
})

export class CreateUserComponent implements OnInit{
    roles: any[] = []; // Lista de roles obtenida del backend
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

    constructor(private usuarioService: UsuarioService, private router:Router, private rolService: RolService){}

    onSubmit():void{
      this.usuarioService.createUser(this.usuario).subscribe({
        next:(result) => {
          console.log("Usuario ", this.usuario)
          console.log("Result: ", result);
          alert("Usuario creado con éxito")
          this.router.navigate(['/'])
        }, error:(e) => {
          console.log("Error: No se creo por ", e)
          alert("Hubo un error al crear el usuario")
        }
      })
    }

    ngOnInit(): void {
      // Cargar los roles al inicializar el componente
      this.rolService.getRoles().subscribe((data) => {
        this.roles = data;
      });
    }
} 
