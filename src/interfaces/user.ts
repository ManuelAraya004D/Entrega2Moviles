export interface Users {
  id: string;  // Cambiado a string
  username: string;
  apellido: string;
  email: string;
  password: string;
  rut: string;
  isactive: boolean;
  asignaturas: Asignatura[]; 
  justificacion: Justificacion[];  
}

export interface Justificacion {
  id: string;
  asignaturaId: string; 
  descripcion: string;       
  fecha: string;    
  asignaturaNombre: string;    
  profesorNombre: string;  
}

export interface Asignatura {
  id: string;  
  nombre: string;
  profesor: Profesor;
  foto: string;
  asistencias: Asistencia[]; 
}

export interface Profesor {
  nombre: string;
  email: string;
}

export interface Asistencia {
  fecha: string;          
  estado: string;     
  asignaturaNombre: string;  
}

export interface UserNuevo {
  username: string;
  apellido: string;
  email: string;
  password: string;
  rut: string;
  isactive: boolean;
}

export interface justificacionNueva {
  motivo: string;       
  fecha: string;    
  asignaturaNombre: string;    
  profesorNombre: string;  
}
