import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListkabPage } from '../../pages/listkab/listkab';

@IonicPage()
@Component({
  selector: 'page-addkab',
  templateUrl: 'addkab.html',
})
export class AddkabPage {
  public note = {};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddkabPage');
  }

  savenote(){
    // Pindahkan halaman ke halaman Home, dari tombol save ke tombol tambah data
    this.navCtrl.push(ListkabPage);
    console.log("tombol simpan di click : "+this.note);
  }

}
