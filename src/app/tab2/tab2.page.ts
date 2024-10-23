import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

import { addIcons } from 'ionicons';
import { chevronForward, listCircle } from 'ionicons/icons';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private menucontroller: MenuController) {

    addIcons({ chevronForward, listCircle });
  }

  mostrarMenu(){
    this.menucontroller.open('first');
  }
  


}
