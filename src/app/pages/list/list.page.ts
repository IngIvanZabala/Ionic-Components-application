import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { IonList } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  @ViewChild('userList', { static: false}) userList: IonList;
  usuarios : Observable<any>;
  constructor(private dataService: DataService ) { }

  ngOnInit() {
    this.usuarios = this.dataService.getUsers();
  }
  share( user){
      console.log(user);
      this.userList.closeSlidingItems();
  }
  remove(user){
     console.log(user);  
     this.userList.closeSlidingItems();
  }
  facebook(user){
      console.log(user);
      this.userList.closeSlidingItems();
  }
  youtube(user){
     console.log(user);
     this.userList.closeSlidingItems();
  }
}
