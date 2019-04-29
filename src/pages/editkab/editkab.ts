import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListkabPage } from '../../pages/listkab/listkab';


@IonicPage()
@Component({
  selector: 'page-editkab',
  templateUrl: 'editkab.html',
})
export class EditkabPage {
  public note = {};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditkabPage');
  }

  updatenote(){
    // Pindahkan halaman ke halaman Home, dari tombol save ke tombol tambah data
    this.navCtrl.push(ListkabPage);
    console.log("tombol edit di click : "+this.note);
  }

}
