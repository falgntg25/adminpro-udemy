import { Component, OnInit, Inject } from '@angular/core';
import { SettingsService } from '../../services/services.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor( public settingService: SettingsService) { }

  ngOnInit() {
    this.colocarCheck();
  }
cambiarColor(tema:string, link: any){
  this.aplicarCheck(link);

  this.settingService.aplicarTema(tema);

}

aplicarCheck(link:any){

  let selectores:any = document.getElementsByClassName('selector');

  for (let ref of selectores){

    ref.classList.remove('working');
  }

  link.classList.add('working');
}

colocarCheck(){

  let selectores:any = document.getElementsByClassName('selector');

  let tema = this.settingService.ajustes.tema;
  for (let ref of selectores){
    if( ref.getAttribute('data-theme') === tema ){
      ref.classList.add('working');
      break;
    }

  }

}

}
