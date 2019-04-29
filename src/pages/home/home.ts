import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DashadminPage } from '../../pages/dashadmin/dashadmin';
import { DashuserPage } from '../../pages/dashuser/dashuser'; 
 
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  dashadmin(){
    this.navCtrl.push(DashadminPage); /*Pindah halaman*/
    console.log("tombol di clik");
  }

  dashuser(){
    this.navCtrl.push(DashuserPage); /*Pindah halaman*/
    console.log("tombol di clik");
  }
   
    

}
