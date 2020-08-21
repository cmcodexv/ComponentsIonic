import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
   componentes: componente[] =[
     {
       icon: 'american-football',
       name: 'Action Sheet',
       redirectTo: '/action-sheet'
     },
     {
      icon: 'american-football',
      name: 'Alert',
      redirectTo: '/alert'
    },
    {
      icon: 'beaker',
      name: 'Avatar',
      redirectTo: '/avatar'
    },
    {
      icon: 'radio-button-on',
      name: 'Botones y Router',
      redirectTo: '/botones'
    },
    {
      icon: 'card',
      name: 'Cards',
      redirectTo: '/card'
    },
    {
      icon: 'checkmark-circle-outline',
      name: 'Checkbox',
      redirectTo: '/check'
    },
    {
      icon: 'calendar',
      name: 'dateTime',
      redirectTo: '/date-time'
    }
   ];
  constructor() { }

  ngOnInit() {
  }

}
 interface componente {
   icon: string;
   name: string;
   redirectTo:string;
 }