import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListtransPage } from '../../pages/listtrans/listtrans';

@IonicPage()
@Component({
  selector: 'page-addtrans',
  templateUrl: 'addtrans.html',
})
export class AddtransPage {
  public note = {};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddtransPage');
  }

  savenote(){
    // Pindahkan halaman ke halaman Home, dari tombol save ke tombol tambah data
    this.navCtrl.push(ListtransPage);
    console.log("tombol simpan di click : "+this.note);
  }

}
