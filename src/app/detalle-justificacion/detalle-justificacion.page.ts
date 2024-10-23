import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router,ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ApicrudService } from '../services/apicrud.service';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-detalle-justificacion',
  templateUrl: './detalle-justificacion.page.html',
  styleUrls: ['./detalle-justificacion.page.scss'],
})
export class DetalleJustificacionPage implements OnInit {
  user: any;
  usuario: any = {
    username: '',
    apellido: '',
    email: '',
    rut: '',
    asignaturas: []
  };

  justificacion: any;

  justificaciones : any = {
    id:'',
    asignaturaId: '',
    motivo: '',
    fecha: '',
    asignaturaNombre:'',
    profesorNombre: '',

  }


  constructor(    
    private menucontroller: MenuController,
    private router: Router,
    private alertcontroller: AlertController,
    private apicrud:ApicrudService,
    private authService: AuthService, private activated: ActivatedRoute) { this.activated.queryParams.subscribe(param=>{this.user=JSON.parse(param['user'])})
    
    this.activated.queryParams.subscribe(param =>{
      this.justificacion =JSON.parse(param['justificacion']);
    })
  }

    ngOnInit() {
    
      const usuarioStr = sessionStorage.getItem('usuario');
      console.log('Usuario en sessionStorage:', usuarioStr); 
  
      if (usuarioStr) {
        this.usuario = JSON.parse(usuarioStr);
        console.log('Usuario recuperado:', this.usuario); 
      } else {
        console.log('No se encontró el usuario en sessionStorage.');
      }
  }


 
  updateJustificacion() {
    
    this.apicrud.putJustificacion(this.usuario.id)
      .subscribe(response => {
        console.log('Justificación actualizada correctamente', response);
        
      }, error => {
        console.error('Error al actualizar la justificación', error);
        
      });
  }


  


  


  mostrarMenu(){
    this.menucontroller.open('first');
  }
}
