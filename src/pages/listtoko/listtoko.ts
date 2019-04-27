import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddtokoPage } from '../../pages/addtoko/addtoko';
import { EdittokoPage } from '../../pages/edittoko/edittoko';

@IonicPage()
@Component({
  selector: 'page-listtoko',
  templateUrl: 'listtoko.html',
})
export class ListtokoPage {
  public note = {};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListtokoPage');
  }

  addtoko(){
    this.navCtrl.push(AddtokoPage); /*Pindah halaman*/
    console.log("tombol Simpan di clik");
  }

  edittoko(){
    this.navCtrl.push(EdittokoPage); /*Pindah halaman*/
    console.log("tombol Simpan di clik");
  }

  deletetoko(){
    console.log("tombol di clik");
    alert("Note Terhapus"); 
  }

}
