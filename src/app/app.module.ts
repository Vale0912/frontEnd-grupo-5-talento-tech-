import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { EmprendedorComponent } from './components/emprendedor/emprendedor.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';

import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { VerDetalleComponent } from './components/ver-detalle/ver-detalle.component';

import { HeaderComponent } from './components/header/header.component';
import { CreateEmprendimientoComponent } from './components/create-emprendimiento/create-emprendimiento.component';


@NgModule({
  declarations: [
    AppComponent,
    EmprendedorComponent,
    CreateUserComponent,
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    VerDetalleComponent,
    HeaderComponent,
    CreateEmprendimientoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
