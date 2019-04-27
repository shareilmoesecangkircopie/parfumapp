import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListtokoPage } from '../../pages/listtoko/listtoko';


@IonicPage()
@Component({
  selector: 'page-edittoko',
  templateUrl: 'edittoko.html',
})
export class EdittokoPage {
  public note = {};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EdittokoPage');
  }

  updatenote(){
    // Pindahkan halaman ke halaman Home, dari tombol save ke tombol tambah data
    this.navCtrl.push(ListtokoPage);
    console.log("tombol edit di click : "+this.note);
  }

}
