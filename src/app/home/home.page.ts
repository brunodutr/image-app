import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  images = [
    { url: 'assets/rio.jpg', nome: 'Rio de Janeiro' },
    { url: 'assets/sp.jpg', nome: 'São Paulo' },
    { url: 'assets/ny.jpg', nome: 'Nova Iorque' },
    { url: 'assets/paris.jpg', nome: 'Paris' }
  ]

  salvar(img){
    console.log(img);
  }
}
