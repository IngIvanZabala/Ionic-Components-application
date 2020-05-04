import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

  constructor(private loadingControl : LoadingController) { }

  ngOnInit() {
    this.presentLoadingWithOptions();
  }
  async presentLoading() {
    const loading = await this.loadingControl.create({
      message: 'Please wait...',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }
  async presentLoadingWithOptions() {
    const loading = await this.loadingControl.create({
      spinner: 'dots',
      duration: 5000,
      message: 'Espera un momento, ya volveremos',
      translucent: true,
      cssClass: 'custom-class custom-loading',
      backdropDismiss: false
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed with role:', role);
  }

}
