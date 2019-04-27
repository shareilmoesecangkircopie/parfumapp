import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddlokasiPage } from '../../pages/addlokasi/addlokasi';
import { EditlokasiPage } from '../../pages/editlokasi/editlokasi';

@IonicPage()
@Component({
  selector: 'page-listlokasi',
  templateUrl: 'listlokasi.html',
})
export class ListlokasiPage {
  public note = {};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListlokasiPage');
  }

 addlokasi(){
    this.navCtrl.push(AddlokasiPage); /*Pindah halaman*/
    console.log("tombol Simpan di clik");
  }

  editlokasi(){
    this.navCtrl.push(EditlokasiPage); /*Pindah halaman*/
    console.log("tombol Edit di clik");
  }

  deletelokasi(){
    console.log("tombol di clik");
    alert("Note Terhapus"); 
  }



}
