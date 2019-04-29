import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddprovPage } from '../../pages/addprov/addprov';
import { EditprovPage } from '../../pages/editprov/editprov';

@IonicPage()
@Component({
  selector: 'page-listprov',
  templateUrl: 'listprov.html',
})
export class ListprovPage {
  public note = {};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListprovPage');
  }

  addprov(){
    this.navCtrl.push(AddprovPage); /*Pindah halaman*/
    console.log("tombol Simpan di clik");
  }

  editprov(){
    this.navCtrl.push(EditprovPage); /*Pindah halaman*/
    console.log("tombol Edit di clik");
  }

  deleteprov(){
    console.log("tombol di clik");
    alert("Note Terhapus"); 
  }

}
