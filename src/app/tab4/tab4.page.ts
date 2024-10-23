import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Justificacion,Users } from 'src/interfaces/user';
import { ApicrudService } from '../services/apicrud.service';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  justificaciones: Justificacion[] = [];
  usuario: Users | null = null;

  constructor(
    private menucontroller: MenuController,
    private router: Router,
    private alertcontroller: AlertController,
    private apiService: ApicrudService 
  ) {}

  ngOnInit() {
    this.cargarUsuarioYJustificaciones();
  }

  
  cargarUsuarioYJustificaciones() {
    const usuarioStr = sessionStorage.getItem('usuario');
    if (usuarioStr) {
      this.usuario = JSON.parse(usuarioStr);
      if (this.usuario && this.usuario.justificacion) {
        this.justificaciones = this.usuario.justificacion;
      }
    } else {
      this.showAlert('Error', 'No se encontró la información del usuario.');
    }
  }

  mostrarMenu() {
    this.menucontroller.open('first');
  }


  async showAlert(header: string, message: string) {
    const alert = await this.alertcontroller.create({
      header: header,
      message: message,
      buttons: ['OK'],
    });
    await alert.present();
  }
}

