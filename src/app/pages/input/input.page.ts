import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
})
export class InputPage implements OnInit {
  name: string;
  userData = {
    email: '',
    password: ''
  }
  constructor() { }

  ngOnInit() {
  }
  onSubmitForm(){
    console.log(this.userData);
  }
}
