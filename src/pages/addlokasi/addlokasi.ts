import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListlokasiPage } from '../../pages/listlokasi/listlokasi';
 
@IonicPage()
@Component({
  selector: 'page-addlokasi',
  templateUrl: 'addlokasi.html',
})
export class AddlokasiPage {
  public note = {};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddlokasiPage');
  }

  savenote(){
    // Pindahkan halaman ke halaman Home, dari tombol save ke tombol tambah data
    this.navCtrl.push(ListlokasiPage);
    console.log("tombol simpan di click : "+this.note);
  }
   
}
