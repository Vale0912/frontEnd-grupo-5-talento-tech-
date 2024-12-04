import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HomeService } from '../../services/home.service';
import { Emprendimiento } from '../../models/emprendimiento';
import { Sector } from '../../models/sector';
import { Router, RouterModule } from '@angular/router';
import { SectorService } from '../../services/sector.service';
import { EmprendimientoCommand } from '../../models/commands/EmprendimientoCommand';

@Component({
  selector: 'app-create-emprendimiento',
  standalone: false,
  
  templateUrl: './create-emprendimiento.component.html',
  styleUrl: './create-emprendimiento.component.css'
})
export class CreateEmprendimientoComponent implements OnInit{
    sectores: Sector[] = []; 
    emprendimiento: Emprendimiento = {
      idEmprendimiento: 0,
      titulo: '',
      descripcion: '',
      ubicacion: '',
      rendimiento: 0,
      montoRequerido:0,
      estado: true,
      urlImagen: '',
      idEmprendedor:1,
      idSector: {idSector: 0, nombre:''},
    }

    constructor (private homeService: HomeService, private router: Router, private sectorService: SectorService){}

    onSubmit(): void {
      
      const command: EmprendimientoCommand = {
        
        titulo: this.emprendimiento.titulo,
        descripcion: this.emprendimiento.descripcion,
        ubicacion: this.emprendimiento.ubicacion,
        rendimiento:this.emprendimiento.rendimiento,
        montoRequerido: this.emprendimiento.montoRequerido,
        estado: this.emprendimiento.estado,
        urlImagen: this.emprendimiento.urlImagen,
        idEmprendedor: this.emprendimiento.idEmprendedor,
        idSector: this.emprendimiento.idSector.idSector,

      }

      this.homeService.createEmprendimiento(command).subscribe({
        next: (result: Emprendimiento) => {
          this.emprendimiento = result;
          console.log('Emprendimiento creado', this.emprendimiento)
          alert('¡El emprendimiento se ha creado exitosamente!');
        },   error: (e) => {
          console.error('Error al crear emprendimiento: ', e);
          if (e.error) {
            console.error('Error detallado: ', e.error);
          }
          alert('Hubo un error al crear el emprendimiento');
        }

        }
      )
      console.log(this.emprendimiento)
    }

    ngOnInit(): void {
      this.sectorService.getSectores().subscribe((data) => {
        this.sectores = data
      })
    }


}
