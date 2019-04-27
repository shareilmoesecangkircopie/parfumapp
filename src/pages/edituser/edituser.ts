import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListuserPage } from '../../pages/listuser/listuser';


@IonicPage()
@Component({
  selector: 'page-edituser',
  templateUrl: 'edituser.html',
})
export class EdituserPage {
  public note = {};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EdituserPage');
  }

  updatenote(){
    // Pindahkan halaman ke halaman Home, dari tombol save ke tombol tambah data
    this.navCtrl.push(ListuserPage);
    console.log("tombol edit di click : "+this.note);
  }

}
