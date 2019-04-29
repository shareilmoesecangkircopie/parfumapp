import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListtransPage } from '../../pages/listtrans/listtrans';

@IonicPage()
@Component({
  selector: 'page-edittrans',
  templateUrl: 'edittrans.html',
})
export class EdittransPage {
  public note = {};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EdittransPage');
  }

  updatenote(){
    // Pindahkan halaman ke halaman Home, dari tombol save ke tombol tambah data
    this.navCtrl.push(ListtransPage);
    console.log("tombol edit di click : "+this.note);
  }

}
