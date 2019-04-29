import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddorderPage } from '../../pages/addorder/addorder';
import { EditorderPage } from '../../pages/editorder/editorder';


@IonicPage()
@Component({
  selector: 'page-listorder',
  templateUrl: 'listorder.html',
})
export class ListorderPage {
  public note = {};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListorderPage');
  }

  addorder(){
    this.navCtrl.push(AddorderPage); /*Pindah halaman*/
    console.log("tombol Simpan di clik");
  }

  editorder(){
    this.navCtrl.push(EditorderPage); /*Pindah halaman*/
    console.log("tombol Edit di clik");
  }

  deleteorder(){
    console.log("tombol di clik");
    alert("Note Terhapus"); 
  }

}
