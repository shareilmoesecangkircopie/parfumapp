import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListlokasiPage } from '../../pages/listlokasi/listlokasi'; //script untuk pindah halaman tergantung tujuan

@IonicPage()
@Component({
  selector: 'page-editlokasi',
  templateUrl: 'editlokasi.html',
})
export class EditlokasiPage {
  public note = {};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditlokasiPage');
  }

  updatenote(){
    // Pindahkan halaman ke halaman Home, dari tombol save ke tombol tambah data
    this.navCtrl.push(ListlokasiPage);
    console.log("tombol edit di click : "+this.note);
  }

}
