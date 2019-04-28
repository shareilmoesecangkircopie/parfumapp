import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListprodukPage } from '../../pages/listproduk/listproduk';

@IonicPage()
@Component({
  selector: 'page-editproduk',
  templateUrl: 'editproduk.html',
})
export class EditprodukPage {
  public note = {};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditprodukPage');
  }

  updatenote(){
    // Pindahkan halaman ke halaman Home, dari tombol save ke tombol tambah data
    this.navCtrl.push(ListprodukPage);
    console.log("tombol edit di click : "+this.note);
  }

}
