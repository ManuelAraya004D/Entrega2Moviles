import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearJustificacionPageRoutingModule } from './crear-justificacion-routing.module';

import { CrearJustificacionPage } from './crear-justificacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearJustificacionPageRoutingModule
  ],
  declarations: [CrearJustificacionPage]
})
export class CrearJustificacionPageModule {}
