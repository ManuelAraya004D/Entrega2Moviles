import { Component } from '@angular/core';





interface Menu{
  icon:string;
  name:string;
  redirecTo:string;
}


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  menu: Menu[]=[
    {
      icon:'log-in',
      name:'Cambiar cuenta',
      redirecTo:'/comienzo'
    },
    {
      icon:'home',
      name:'Home',
      redirecTo:'/tabs/tab1'
    },
    {
      icon:'calendar',
      name:'Calendario',
      redirecTo:'/tabs/tab2'
    },
    {
      icon:'qr-code',
      name:'QR',
      redirecTo:'/tabs/tab3'
    },
    {
      icon:'accessibility',
      name:'Solicitudes',
      redirecTo:'/tabs/tab4'
    },
    {
      icon:'person-circle',
      name:'Perfil',
      redirecTo:'/tabs/tab5'
      
    },

  ]


  constructor() {}
}
