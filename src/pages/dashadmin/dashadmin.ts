import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListlokasiPage } from '../../pages/listlokasi/listlokasi';
 


@IonicPage()
@Component({
  selector: 'page-dashadmin',
  templateUrl: 'dashadmin.html',
})
export class DashadminPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashadminPage');
  }

  listlokasi(){
    this.navCtrl.push(ListlokasiPage); /*Pindah halaman*/
    console.log("tombol di clik");
  }

  

}
