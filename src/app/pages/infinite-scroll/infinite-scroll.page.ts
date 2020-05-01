import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.page.html',
  styleUrls: ['./infinite-scroll.page.scss'],
})
export class InfiniteScrollPage implements OnInit {
  @ViewChild(IonInfiniteScroll, {static: false}) infiniteScroll: IonInfiniteScroll;
  data : any []  = Array(20);
  constructor() { }

  ngOnInit() {
  }
  loadData(event){
    if (this.data.length > 79){
      event.target.complete();
      this.infiniteScroll.disabled=true;
      return;
    }
    setTimeout(()=>{
          const nuevArray = Array(20);
          this.data.push(... nuevArray);
          event.target.complete();
      });
  }

}
