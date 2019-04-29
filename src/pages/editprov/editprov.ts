import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListprovPage } from '../../pages/listprov/listprov';

@IonicPage()
@Component({
  selector: 'page-editprov',
  templateUrl: 'editprov.html',
})
export class EditprovPage {
  public note = {};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditprovPage');
  }

  updatenote(){
    // Pindahkan halaman ke halaman Home, dari tombol save ke tombol tambah data
    this.navCtrl.push(ListprovPage);
    console.log("tombol edit di click : "+this.note);
  }

}
