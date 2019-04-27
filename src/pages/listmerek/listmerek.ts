import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddmerekPage } from '../../pages/addmerek/addmerek';
import { EditmerekPage } from '../../pages/editmerek/editmerek';

@IonicPage()
@Component({
  selector: 'page-listmerek',
  templateUrl: 'listmerek.html',
})
export class ListmerekPage {
  public note = {};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListmerekPage');
  }

  addmerek(){
    this.navCtrl.push(AddmerekPage); /*Pindah halaman*/
    console.log("tombol Simpan di clik");
  }

  editmerek(){
    this.navCtrl.push(EditmerekPage); /*Pindah halaman*/
    console.log("tombol Simpan di clik");
  }

  deletemerek(){
    console.log("tombol di clik");
    alert("Note Terhapus"); 
  }

}
