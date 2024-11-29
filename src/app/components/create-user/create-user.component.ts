import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { TipoDocumento, Usuario, UsuarioService } from '../../usuario.service';

@Component({
  selector: 'app-create-user',
  standalone: false,
  
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.css'
})
export class CreateUserComponent {
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
      rol: ''
    }

     // Opciones de tipoDocumento basadas en el enum
    tipoDocumento = Object.values(TipoDocumento); // ['CC', 'TI', 'CE', 'PAS', 'RC', 'NIT']

    constructor(private usuarioService: UsuarioService, private router:Router){}

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
}
