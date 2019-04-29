import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddtransPage } from '../../pages/addtrans/addtrans';
import { EdittransPage } from '../../pages/edittrans/edittrans';

@IonicPage()
@Component({
  selector: 'page-listtrans',
  templateUrl: 'listtrans.html',
})
export class ListtransPage {
  public note = {};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListtransPage');
  }

  addtrans(){
    this.navCtrl.push(AddtransPage); /*Pindah halaman*/
    console.log("tombol Simpan di clik");
  }

  edittrans(){
    this.navCtrl.push(EdittransPage); /*Pindah halaman*/
    console.log("tombol Simpan di clik");
  }

  deletetrans(){
    console.log("tombol di clik");
    alert("Note Terhapus"); 
  }

}
