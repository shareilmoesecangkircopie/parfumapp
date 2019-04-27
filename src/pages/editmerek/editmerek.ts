import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListmerekPage } from '../../pages/listmerek/listmerek';


@IonicPage()
@Component({
  selector: 'page-editmerek',
  templateUrl: 'editmerek.html',
})
export class EditmerekPage {
  public note = {};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditmerekPage');
  }

  updatenote(){
    // Pindahkan halaman ke halaman Home, dari tombol save ke tombol tambah data
    this.navCtrl.push(ListmerekPage);
    console.log("tombol edit di click : "+this.note);
  }

}
