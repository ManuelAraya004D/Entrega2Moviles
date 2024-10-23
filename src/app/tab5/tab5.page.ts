import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router,ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})

export class Tab5Page implements OnInit {
  user: any;
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
  ) {}


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
  



  mostrarMenu() {
    
    this.menucontroller.open('first');
  }

  irlogin(tab: string) {
    this.router.navigate(['/comienzo']);
  }



  cerrarSesion() {
    
    
    this.router.navigate(['/comienzo']); 
    
    sessionStorage.clear(); 
    
  }

  editarPerfilaaaaaaaaa() {
    sessionStorage.clear(); 
    this.router.navigate(['/editarperfil2']); 
  }

  
  editarPerfil(Observable:any){
    this.router.navigate(['/editarperfil2', this.usuario.id],
      {queryParams: {user :JSON.stringify(Observable)}}
    )
  }

  

}