import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Asignatura } from 'src/interfaces/user';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  qrdata: string;
  usuario: any = {
    username: '',
    apellido: '',
    email: '',
    rut: '',
    asignaturas: []
  };

  constructor(
    private menucontroller: MenuController,
    private router: Router,
    private authService: AuthService,
    private activated: ActivatedRoute
  ) {
    this.qrdata = '';
  }

  mostrarMenu() {
    this.menucontroller.open('first');
  }

  ngOnInit() {
    const usuarioStr = sessionStorage.getItem('usuario');
    console.log('Usuario en sessionStorage:', usuarioStr);
  
    if (usuarioStr) {
      this.usuario = JSON.parse(usuarioStr);
      console.log('Usuario recuperado:', this.usuario);
      console.log('Asignaturas recuperadas:', this.usuario.asignaturas); 
    } else {
      console.log('No se encontró el usuario en sessionStorage.');
    }
  }
  
  irlogin(tab: string) {
    this.router.navigate(['/comienzo']);
  }

  irAsistencia(asignatura: Asignatura) {
    
    this.router.navigate(['/registro-asistencia'], {
      queryParams: { asignatura: JSON.stringify(asignatura) }
    });
  }

  cerrarSesion() {
    this.router.navigate(['/comienzo']); 
    sessionStorage.clear(); 
  }


  VerAsistencia(){
    this.router.navigate(['/ver-asistencia']);
  }


}