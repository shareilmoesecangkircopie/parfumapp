import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListprovPage } from '../../pages/listprov/listprov';

@IonicPage()
@Component({
  selector: 'page-addprov',
  templateUrl: 'addprov.html',
})
export class AddprovPage {
  public note = {};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddprovPage');
  }

  savenote(){
    // Pindahkan halaman ke halaman Home, dari tombol save ke tombol tambah data
    this.navCtrl.push(ListprovPage);
    console.log("tombol simpan di click : "+this.note);
  }

}
