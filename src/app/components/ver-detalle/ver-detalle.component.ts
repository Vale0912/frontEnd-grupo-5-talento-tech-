import { Component, OnInit  } from '@angular/core';
import { Emprendimiento } from '../../models/emprendimiento';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ver-detalle',
  standalone: false,

  templateUrl: './ver-detalle.component.html',
  styleUrl: './ver-detalle.component.css'
})
export class VerDetalleComponent {

  proyecto: Emprendimiento | undefined;

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.proyecto = navigation?.extras.state?.['proyecto'];
  }



}
