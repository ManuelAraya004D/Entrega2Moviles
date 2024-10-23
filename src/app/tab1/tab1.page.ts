import { Component,AfterViewInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import Swiper from 'swiper';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})


export class Tab1Page {

  constructor(private menucontroller: MenuController, private router: Router) {}

  mostrarMenu(){
    this.menucontroller.open('first');
  }


  ircalendario(tab: string) {
    this.router.navigate(['/tabs/tab2']);
  }
  irqr(tab: string) {
    this.router.navigate(['/tabs/tab3']);
  }
  irsolicitudes(tab: string) {
    this.router.navigate(['/tabs/tab4']);
  }
  irperfil(tab: string) {
    this.router.navigate(['/tabs/tab5']);
  }
  ngAfterViewInit() {
    const swiper = new Swiper('.swiper-container', {
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }

}
