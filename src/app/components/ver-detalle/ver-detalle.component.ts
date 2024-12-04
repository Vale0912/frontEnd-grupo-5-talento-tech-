import { Component, OnInit  } from '@angular/core';
import { Emprendimiento } from '../../models/emprendimiento';
import { Router } from '@angular/router';
import { HomeService } from '../../services/home.service';
import { Emprendedor } from '../../models/emprendedor';
import { Sector } from '../../models/sector';
import { SectorService } from '../../services/sector.service';

@Component({
  selector: 'app-ver-detalle',
  standalone: false,

  templateUrl: './ver-detalle.component.html',
  styleUrl: './ver-detalle.component.css'
})
export class VerDetalleComponent implements OnInit{

  proyecto: Emprendimiento | undefined;
  sector: Sector | undefined;
  emprendedor: Emprendedor | undefined;

  constructor(private router: Router, private sectorService: SectorService, private homeService: HomeService) {
    const navigation = this.router.getCurrentNavigation();
    this.proyecto = navigation?.extras.state?.['proyecto'];
    console.log(this.proyecto?.idSector)
    if (this.proyecto) {
      this.sectorService.getSectorById(this.proyecto.idSector.idSector).subscribe({
        next: (sectorData) => {
          this.sector = sectorData;
          console.log('Esta es la data', sectorData)
        },
        error: (err) => {
          console.error('Error al obtener el sector:', err);
        }
      });
    }
    
  }
  

  ngOnInit(): void {
    if (this.proyecto) {
      // Cargar el sector por ID
      this.sectorService.getSectorById(this.proyecto.idSector.idSector).subscribe({
        next: (sectorData) => {
          this.sector = sectorData;
        },
        error: (err) => console.error('Error al cargar el sector', err),
      });

      // Cargar el emprendedor por ID
      this.homeService.getEmprendedorById(this.proyecto.idEmprendedor).subscribe({
        next: (emprendedorData) => {
          this.emprendedor = emprendedorData;
        },
        error: (err) => console.error('Error al cargar el emprendedor', err),
      });
    }

}}
