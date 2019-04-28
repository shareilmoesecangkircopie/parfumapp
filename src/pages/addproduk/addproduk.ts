import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListprodukPage } from '../../pages/listproduk/listproduk';

@IonicPage()
@Component({
  selector: 'page-addproduk',
  templateUrl: 'addproduk.html',
})
export class AddprodukPage {
  public note = {};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddprodukPage');
  }

  savenote(){
    // Pindahkan halaman ke halaman Home, dari tombol save ke tombol tambah data
    this.navCtrl.push(ListprodukPage);
    console.log("tombol simpan di click : "+this.note);
  }

}
