import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListtokoPage } from '../../pages/listtoko/listtoko';



@IonicPage()
@Component({
  selector: 'page-addtoko',
  templateUrl: 'addtoko.html',
})
export class AddtokoPage {
  public note = {};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddtokoPage');
  }

  savenote(){
    // Pindahkan halaman ke halaman Home, dari tombol save ke tombol tambah data
    this.navCtrl.push(ListtokoPage);
    console.log("tombol simpan di click : "+this.note);
  }

}
