import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AdduserPage } from '../../pages/adduser/adduser';
import { EdituserPage } from '../../pages/edituser/edituser';


@IonicPage()
@Component({
  selector: 'page-listuser',
  templateUrl: 'listuser.html',
})
export class ListuserPage {
  public note = {};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListuserPage');
  }

  adduser(){
    this.navCtrl.push(AdduserPage);
    console.log("Tombol Simpan di clik")
  }

  edituser(){
    this.navCtrl.push(EdituserPage);
    console.log("Tombol Simpan di clik")
  }

  deleteuser(){
    console.log("tombol di clik");
    alert("Note Terhapus"); 
  }
  

}
