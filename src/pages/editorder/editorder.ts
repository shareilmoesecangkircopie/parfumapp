import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListorderPage } from '../../pages/listorder/listorder';

@IonicPage()
@Component({
  selector: 'page-editorder',
  templateUrl: 'editorder.html',
})
export class EditorderPage {
  public note = {};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditorderPage');
  }

  updatenote(){
    // Pindahkan halaman ke halaman Home, dari tombol save ke tombol tambah data
    this.navCtrl.push(ListorderPage);
    console.log("tombol edit di click : "+this.note);
  }

}
