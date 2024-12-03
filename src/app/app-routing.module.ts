import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { HomeComponent } from './home/home.component';
import { EmprendedorComponent } from './components/emprendedor/emprendedor.component';
import { CreateEmprendimientoComponent } from './components/create-emprendimiento/create-emprendimiento.component';
import { VerDetalleComponent } from './components/ver-detalle/ver-detalle.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "createUser", component: CreateUserComponent },
  { path: 'ver-detalle', component: VerDetalleComponent },
  {path: "emprendedor", component: EmprendedorComponent},
  {path: "createEmprendimiento", component: CreateEmprendimientoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
