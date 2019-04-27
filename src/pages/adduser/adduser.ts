import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListuserPage } from '../../pages/listuser/listuser';


@IonicPage()
@Component({
  selector: 'page-adduser',
  templateUrl: 'adduser.html',
})
export class AdduserPage {
  public note = {};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdduserPage');
  }

  savenote(){
    // Pindahkan halaman ke halaman Home, dari tombol save ke tombol tambah data
    this.navCtrl.push(ListuserPage);
    console.log("tombol simpan di click : "+this.note);
  }

}
