import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  constructor(private alertcontroller: AlertController, 
    private router: Router) { }

  ngOnInit() {
  }
  async confirmarregistro(){

    const alert = await this.alertcontroller.create({
      header: 'Registro',
      message: 'Espere que DuocUC confirme su formulario',
      mode: 'ios',
      buttons: [
        {
          text: 'Registrarse',
          role: 'confirm',
          handler: () => {
             this.router.navigate(['/comienzo']);
          },
        },
      ],
    });
  
    await alert.present();
  
    }
}
