import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  routes : component[] = [{icon:'american-football',title:"Alert", redirectTo:"/alert"}, {icon:'cart-outline',title:"Action Sheet", redirectTo:"/action-sheet"}]
  constructor() { }

  ngOnInit() {
  }

}
interface component {
  icon: string;
  title: string;
  redirectTo: string;
}


