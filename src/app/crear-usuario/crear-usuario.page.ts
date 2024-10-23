import { Component, OnInit } from '@angular/core';
import {FormBuilder,Validators,FormGroup,FormControl} from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { UserNuevo } from 'src/interfaces/user';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.page.html',
  styleUrls: ['./crear-usuario.page.scss'],
})
export class CrearUsuarioPage implements OnInit {

  registroForm:FormGroup;

  nuevoUsuario: UserNuevo={
    username:"",
    apellido:"",
    email:"",
    password:"",
    rut:"",
    isactive:false
  }
  userdata: any;

  constructor(private authservice: AuthService, private alertcontroller:AlertController,private router:Router,private fBuilder:FormBuilder)
   { 
    this.registroForm=this.fBuilder.group({
      'username':new FormControl ("",[Validators.required,Validators.minLength(3)]),
      'apellido':new FormControl ("",[Validators.required,Validators.minLength(3)]),
      'email'   :new FormControl ("",[Validators.required,Validators.email]),
      'password':new FormControl ("",[Validators.required,Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/)]),
      'rut'     :new FormControl ("",[Validators.required,Validators.minLength(8)])
    })
   }

  ngOnInit() {
  }

  crearUsuario(){
    if(this.registroForm.valid){
      this.authservice.getByUsername(this.registroForm.value.username).subscribe (resp=>{
        this.userdata = resp;
        if(this.userdata.lenght>0){
          this.registroForm.reset();
          this.errorDuplicidad();
        }
        else {
          this.nuevoUsuario.username = this.registroForm.value.username;
          this.nuevoUsuario.apellido = this.registroForm.value.apellido;
          this.nuevoUsuario.email    =this.registroForm.value.email;
          this.nuevoUsuario.password =this.registroForm.value.password;
          this.nuevoUsuario.rut      =this.registroForm.value.rut;
          this.nuevoUsuario.isactive =true;
          this.authservice.postUsuario(this.nuevoUsuario).subscribe();
          this.registroForm.reset();
          this.mostrarMensaje();
          this.router.navigateByUrl('/comienzo')
          
        }
      })
    }
  }

  async mostrarMensaje(){
    const alerta = await this.alertcontroller.create({
      header: 'Usario creado',
      message: ' Bienvenid@'  + this.nuevoUsuario.username,
      buttons: ['OK']
    });
    alerta.present();
  }

  async errorDuplicidad(){
    const alerta = await this.alertcontroller.create({
      header: 'ERROR',
      message: 'El usuario'  + this.nuevoUsuario.username + 'ya esta registrado en el sistema',
      buttons: ['OK']
    });
    alerta.present();
  }




}
