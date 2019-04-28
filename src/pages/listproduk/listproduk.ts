import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddprodukPage } from '../../pages/addproduk/addproduk';
import { EditprodukPage } from '../../pages/editproduk/editproduk';


@IonicPage()
@Component({
  selector: 'page-listproduk',
  templateUrl: 'listproduk.html',
})
export class ListprodukPage {
  public note = {};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListprodukPage');
  }

  addproduk(){
    this.navCtrl.push(AddprodukPage); /*Pindah halaman*/
    console.log("tombol Simpan di clik");
  }

  editproduk(){
    this.navCtrl.push(EditprodukPage); /*Pindah halaman*/
    console.log("tombol Simpan di clik");
  }

  deleteproduk(){
    console.log("tombol di clik");
    alert("Note Terhapus"); 
  }


}
