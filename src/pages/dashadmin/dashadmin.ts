import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListlokasiPage } from '../../pages/listlokasi/listlokasi';
import { ListuserPage } from '../../pages/listuser/listuser';
import { ListmerekPage } from '../../pages/listmerek/listmerek';
import { ListtokoPage } from '../../pages/listtoko/listtoko';
import { ListprodukPage } from '../../pages/listproduk/listproduk';
import { ListprovPage } from '../../pages/listprov/listprov';
import { ListkabPage } from '../../pages/listkab/listkab';
import { ListtransPage } from '../../pages/listtrans/listtrans';
import { ListorderPage } from '../../pages/listorder/listorder';
 

@IonicPage()
@Component({
  selector: 'page-dashadmin',
  templateUrl: 'dashadmin.html',
})
export class DashadminPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashadminPage');
  }

  listlokasi(){
    this.navCtrl.push(ListlokasiPage); /*Pindah halaman*/
    console.log("tombol di clik");
  }

  listuser(){
    this.navCtrl.push(ListuserPage); /*Pindah halaman*/
    console.log("tombol di clik");
  }

  listmerek(){
    this.navCtrl.push(ListmerekPage); /*Pindah halaman*/
    console.log("tombol di clik");
  }

  listtoko(){
    this.navCtrl.push(ListtokoPage); /*Pindah halaman*/
    console.log("tombol di clik");
  }

  listproduk(){
    this.navCtrl.push(ListprodukPage); /*Pindah halaman*/
    console.log("tombol di clik");
  }

  listprov(){
    this.navCtrl.push(ListprovPage); /*Pindah halaman*/
    console.log("tombol di clik");
  }

  listkab(){
    this.navCtrl.push(ListkabPage); /*Pindah halaman*/
    console.log("tombol di clik");
  }
  
  listtrans(){
    this.navCtrl.push(ListtransPage); /*Pindah halaman*/
    console.log("tombol di clik");
  }

  listorder(){
    this.navCtrl.push(ListorderPage); /*Pindah halaman*/
    console.log("tombol di clik");
  }

}
