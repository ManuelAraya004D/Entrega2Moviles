import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Asignatura, Asistencia, Users } from 'src/interfaces/user';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-registro-asistencia',
  templateUrl: './registro-asistencia.page.html',
  styleUrls: ['./registro-asistencia.page.scss'],
})
export class RegistroAsistenciaPage implements OnInit {
  asignatura: Asignatura | null = null;
  qrdata: string = '';
  fechaGenerada: string | null = null;
  usuario: Users | null = null; 

  constructor(private route: ActivatedRoute, private toastController: ToastController) {}

  ngOnInit() {
    
    const usuarioStr = sessionStorage.getItem('usuario');
    console.log('Usuario en sessionStorage:', usuarioStr);

    if (usuarioStr) {
      this.usuario = JSON.parse(usuarioStr);
      console.log('Usuario recuperado:', this.usuario);
      if (this.usuario) {
        console.log('Asignaturas recuperadas:', this.usuario.asignaturas);
      }
    } else {
      console.log('No se encontró el usuario en sessionStorage.');
    }

    this.route.queryParams.subscribe(params => {
      if (params['asignatura']) {
        this.asignatura = JSON.parse(params['asignatura']);
        
        if (this.asignatura && !this.asignatura.asistencias) {
          this.asignatura.asistencias = [];
        }
      } else {
        this.showToast('No se proporcionó información de asignatura.');
      }
    });
  }

  generarQr() {
    if (this.asignatura && this.usuario) {
      this.fechaGenerada = new Date().toLocaleDateString();
      this.qrdata = `Asignatura: ${this.asignatura.nombre}\n` +
                    `Profesor: ${this.asignatura.profesor.nombre}\n` +
                    `Email: ${this.usuario.email}\n` +
                    `Usuario: ${this.usuario.username ? this.usuario.username : 'No disponible'}\n` + 
                    `RUT: ${this.usuario.rut ? this.usuario.rut : 'No disponible'}\n` + 
                    `Fecha: ${this.fechaGenerada}`;
      
      const asistenciaRegistro: Asistencia = {
        fecha: this.fechaGenerada,
        estado: 'presente',
        asignaturaNombre: this.asignatura.nombre 
      };
      
      if (!this.asignatura.asistencias) {
        this.asignatura.asistencias = [];
      }
      this.asignatura.asistencias.push(asistenciaRegistro);
      console.log('Prueba asistencia:', this.asignatura.asistencias);
  
      this.showToast('QR generado y asistencia almacenada con éxito.');
    } else {
      this.showToast('No hay información de asignatura o usuario disponible.');
    }
  }
  
  async showToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'top',
    });
    toast.present();
  }
}
