import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.page.html',
  styleUrls: ['./checkbox.page.scss'],
})
export class CheckboxPage implements OnInit {
  data : checkBoxArray []= [
    { 
      name:'primary',
      isSelected: false,
    },
    { 
      name:'secondary',
      isSelected: true,
    },
    { 
      name:'tertiary',
      isSelected: false,
    },
    { 
      name:'success',
      isSelected: true,
    },
  ];

  constructor() { }

  ngOnInit() {
  }
  onClick(data){
    console.log(data);
  }

}

interface checkBoxArray {
  name : string,
  isSelected: boolean
}
