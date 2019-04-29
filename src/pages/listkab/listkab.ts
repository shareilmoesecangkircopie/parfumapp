import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddkabPage } from '../../pages/addkab/addkab';
import { EditkabPage } from '../../pages/editkab/editkab';

@IonicPage()
@Component({
  selector: 'page-listkab',
  templateUrl: 'listkab.html',
})
export class ListkabPage {
  public note = {};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListkabPage');
  }

  addkab(){
    this.navCtrl.push(AddkabPage); /*Pindah halaman*/
    console.log("tombol Simpan di clik");
  }

  editkab(){
    this.navCtrl.push(EditkabPage); /*Pindah halaman*/
    console.log("tombol Edit di clik");
  }

  deletekab(){
    console.log("tombol di clik");
    alert("Note Terhapus"); 
  }


}
