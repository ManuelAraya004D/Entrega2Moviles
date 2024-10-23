export interface IJustificacion {
    id: string;               
    profesorNombre: string;
    fecha: string;
    asignatura: string;
    descripcion: string;
}


export interface IJustificacionNueva {
    profesorNombre: string;
    fecha: string;
    asignatura: string;
    descripcion: string;
}