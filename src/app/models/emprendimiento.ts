import { Sector } from "./sector";
export interface Emprendimiento {
    idEmprendimiento: number;
    titulo: string;
    descripcion: string;
    ubicacion: string;
    rendimiento: number;
    montoRequerido: number;
    estado: boolean;
    urlImagen: string;
    idEmprendedor: number;
    idSector: Sector;
}