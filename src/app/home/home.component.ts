import { Component, OnInit } from '@angular/core';
import { Emprendimiento } from '../models/emprendimiento';
import { EmprendimientoService } from './../services/emprendimiento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: false,

  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  emprendimientos: Emprendimiento[] = [];

  constructor(private empredimientoService: EmprendimientoService, private router: Router){}



  ngOnInit(): void {
    this.empredimientoService.getEmprendimientos().subscribe({
      next: (data) => {
        this.emprendimientos = data;
      },
      error: (err) => {
        console.error('Error al cargar los emprendimientos:', err);
      },
    });
  }

  verDetalle(proyecto: Emprendimiento): void {
    console.log(proyecto)
    this.router.navigate(['/ver-detalle'], { state: { proyecto } });
  }

}
