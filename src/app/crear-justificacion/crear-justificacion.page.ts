import { Component, OnInit } from '@angular/core';
import {FormBuilder,Validators,FormGroup,FormControl} from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { justificacionNueva } from 'src/interfaces/user';

@Component({
  selector: 'app-crear-justificacion',
  templateUrl: './crear-justificacion.page.html',
  styleUrls: ['./crear-justificacion.page.scss'],
})
export class CrearJustificacionPage implements OnInit {

  
  constructor(private authservice: AuthService, private alertcontroller:AlertController,private router:Router,private fBuilder:FormBuilder)
   { 

   }

  ngOnInit() {
  }




}
