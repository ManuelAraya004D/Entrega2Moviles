import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-comienzo',
  templateUrl: './comienzo.page.html',
  styleUrls: ['./comienzo.page.scss'],
})
export class ComienzoPage implements OnInit {

  
  userdata: any;

  usuario ={
    id:0,
    username:"",
    apellido:"",
    email:"",
    password:"",
    rut:"",
    isactive: false,
    asignaturas: [],
    justificacion: [],

  }

  loginForm : FormGroup; 

  constructor(private authservice: AuthService,
    private alertcontroller: AlertController,
    private toast: ToastController,
    private router: Router,
    private fbuilder: FormBuilder) {
      this.loginForm = this.fbuilder.group({
        'username': new FormControl("", [Validators.required, Validators.minLength(3)]),
        'password': new FormControl("", [Validators.required, Validators.minLength(6)])
       })
     }

  ngOnInit() {
  }

  login() {
    
    if (!this.loginForm.valid) {
        return;
    }

   
 
    const username=this.loginForm.value.username;
    const password=this.loginForm.value.password;

    this.authservice.getByUsername(username).subscribe(resp => { 
      this.userdata = resp;
      console.log(this.userdata);
      if (this.userdata.length === 0) {
        this.loginForm.reset();
        this.UsuarioNoExiste();
        return;
      }

        
        this.usuario = {
            id: this.userdata[0].id,
            username: this.userdata[0].username,
            apellido: this.userdata[0].apellido,
            password: this.userdata[0].password,
            email: this.userdata[0].email,
            rut: this.userdata[0].rut,
            isactive: this.userdata[0].isactive,
            asignaturas: this.userdata[0].asignaturas,
            justificacion: this.userdata[0].justificacion,

            
        };

        
        if (this.usuario.password !== password) {
            this.loginForm.reset();
            this.ErrorUsuario();
            return;
        }

        
        if (!this.usuario.isactive) {
            this.loginForm.reset();
            this.UsuarioInactivo();
            return;
        }

      
        this.IniciarSesion(this.usuario);
    }, error => {
        
        console.error('Error al obtener el usuario:', error);
        this.loginForm.reset();
        this.ErrorUsuario();
    });
}

private IniciarSesion(usuario: any) {
  sessionStorage.setItem('usuario', JSON.stringify(usuario)); 
  sessionStorage.setItem('username', usuario.username); 
  sessionStorage.setItem('password', usuario.password); 
  sessionStorage.setItem('ingresado', 'true');
  this.showToast('Sesión Iniciada ' + usuario.username); 
  this.router.navigate(['/tabs/tab1']);
}

async showToast(msg: string) {
    const toast = await this.toast.create({
        message: msg,
        duration: 3000
    });
    toast.present();
}

async UsuarioInactivo() {
    const alerta = await this.alertcontroller.create({
        header: 'Usuario inactivo',
        message: 'Contactar a admin@admin.cl',
        buttons: ['OK']
    });
    alerta.present();
}

async ErrorUsuario() {
    const alerta = await this.alertcontroller.create({
        header: 'Error..',
        message: 'Revise sus credenciales',
        buttons: ['OK']
    });
    alerta.present();
}

async UsuarioNoExiste() {
    const alerta = await this.alertcontroller.create({
        header: 'No existe...',
        message: 'Debe registrarse..',
        buttons: ['OK']
    });
    alerta.present();
}
Registro(){
    this.router.navigate(['/crear-usuario']);
  }

}


