export interface EmprendimientoCommand {
    titulo: string;
    descripcion: string;
    ubicacion: string;
    rendimiento: number;
    montoRequerido: number;
    estado: boolean;
    urlImagen: string;
    idEmprendedor: number;
    idSector: number;
}