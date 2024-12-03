import { Component, OnInit } from '@angular/core';
import { Emprendimiento } from '../../models/emprendimiento';
import { HomeService } from '../../services/home.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-emprendedor',
  standalone: false,
  
  templateUrl: './emprendedor.component.html',
  styleUrl: './emprendedor.component.css'
})
export class EmprendedorComponent implements OnInit{
  emprendimientos: Emprendimiento[] = [];
  cargando: boolean = false;
  error: string | null = null;

  constructor(private homeService: HomeService, public router: Router) {}

  ngOnInit(): void {
    this.cargarEmprendimientos(3); // Aquí pasa el ID del emprendedor
  }

  cargarEmprendimientos(idEmprendedor: number): void {
    this.cargando = true;
    this.error = null;
    
    this.homeService.getEmprendimientosByEmprendedor(idEmprendedor)
      .subscribe({
        next: (data) => {
          this.emprendimientos = data;
          this.cargando = false;
          console.log(this.emprendimientos)
        },
        error: (err) => {
          console.log(err)
          this.error = 'No se pudieron cargar los emprendimientos';
          this.cargando = false;
        }
      });
  }
}
