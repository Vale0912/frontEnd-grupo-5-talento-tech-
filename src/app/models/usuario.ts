import { TipoDocumento } from "../enum/tipoDocumento";
import { Rol } from "./rol";

export interface Usuario {
    idUsuario: number;
    tipoDocumento: TipoDocumento;
    documento: string;
    nombre: string;
    apellidos: string;
    correoElectronico: string;
    contrasenia:string;
    edad: number;
    celular: number;
    rol: Rol;
  }
