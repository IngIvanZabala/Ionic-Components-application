import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  routes : component[] = 
  [
    {
      icon:'american-football',
      title:"Alert", 
      redirectTo:"/alert"
    }, 
    {
      icon:'cart-outline',
      title:"Action Sheet", 
      redirectTo:"/action-sheet"
    },
    {
      icon:'person-outline',
      title:'Avatar',
      redirectTo:'/avatar'
    },
    {
      icon:'apps-outline',
      title:'Botones',
      redirectTo:'/button'
    },
    {
      icon:'card-outline',
      title:'Cards',
      redirectTo:'/card'
    },
    {
      icon:'checkmark-circle-outline',
      title:'checkbox',
      redirectTo:'/checkbox'
    },
    {
      icon:'calendar-outline',
      title:'Datetime',
      redirectTo:'/datetime'
    },
    {
      icon:'caret-forward-circle-outline',
      title:'Fab',
      redirectTo:'/fab'
    },
    {
      icon:'phone-portrait-outline',
      title:'Grid',
      redirectTo:'/grid'
    },
    {
      icon:'refresh-circle-outline',
      title:'Infinite Scroll',
      redirectTo:'/infinite-scroll'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
interface component {
  icon: string;
  title: string;
  redirectTo: string;
}


