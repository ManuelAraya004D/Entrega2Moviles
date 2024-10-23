import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router,ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ApicrudService } from '../services/apicrud.service';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-editarperfil2',
  templateUrl: './editarperfil2.page.html',
  styleUrls: ['./editarperfil2.page.scss'],
})
export class Editarperfil2Page implements OnInit {

  user: any 

  usuario: any = {
    id:0,
    username: "",
    apellido: "",
    email: "",
    rut: ""
  };

  id: any;



  constructor(    
    private menucontroller: MenuController,
    private router: Router,
    private alertcontroller: AlertController,
    private apicrud:ApicrudService,
    private authService: AuthService, private activated: ActivatedRoute) { this.activated.queryParams.subscribe(param=>{this.user=JSON.parse(param['user'])})}

    ngOnInit() {
    
      const usuarioStr = sessionStorage.getItem('usuario');
      console.log('Usuario en sessionStorage:', usuarioStr); 
  
      if (usuarioStr) {
        this.usuario = JSON.parse(usuarioStr);
        console.log('Usuario recuperado:', this.usuario); 
        console.log('Justificaciones recuperadas:', this.usuario.justificacion); 
      } else {
        console.log('No se encontró el usuario en sessionStorage.');
      }
  }

  onFileSelected(event: Event) {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput.files && fileInput.files.length > 0) {
      const file = fileInput.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        this.usuario.photo = reader.result as string; // Guardamos la URL de la imagen en el objeto usuario
      };

      reader.readAsDataURL(file);
    }
  }

  
  mostrarMenu() {
    this.menucontroller.open('first');
  }

  irlogin(tab: string) {
    this.router.navigate(['/comienzo']);
  }



 

  updateUsuario(){
    this.apicrud.putUsuarios(this.usuario).subscribe();
    sessionStorage.clear();
    this.router.navigateByUrl('/comienzo');
    sessionStorage.clear();
  }




  Volver() {
    sessionStorage.clear(); 
    this.router.navigate(['/tabs/tab5']); 
  }

  
}
