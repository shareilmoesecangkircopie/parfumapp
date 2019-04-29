import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListtransPage } from '../../pages/listtrans/listtrans';
import { ListtokoPage } from '../../pages/listtoko/listtoko';
import { ListorderPage } from '../../pages/listorder/listorder';

@IonicPage()
@Component({
  selector: 'page-dashuser',
  templateUrl: 'dashuser.html',
})
export class DashuserPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashuserPage');
  }

  listtrans(){
    this.navCtrl.push(ListtransPage); /*Pindah halaman*/
    console.log("tombol di clik");
  }

  listtoko(){
    this.navCtrl.push(ListtokoPage); /*Pindah halaman*/
    console.log("tombol di clik");
  }

  listorder(){
    this.navCtrl.push(ListorderPage); /*Pindah halaman*/
    console.log("tombol di clik");
  }

}
