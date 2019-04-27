import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListmerekPage } from '../../pages/listmerek/listmerek';

@IonicPage()
@Component({
  selector: 'page-addmerek',
  templateUrl: 'addmerek.html',
})
export class AddmerekPage {
  public note = {};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddmerekPage');
  }

  savenote(){
    // Pindahkan halaman ke halaman Home, dari tombol save ke tombol tambah data
    this.navCtrl.push(ListmerekPage);
    console.log("tombol simpan di click : "+this.note);
  }

}
