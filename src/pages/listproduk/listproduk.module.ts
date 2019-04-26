import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListprodukPage } from './listproduk';

@NgModule({
  declarations: [
    ListprodukPage,
  ],
  imports: [
    IonicPageModule.forChild(ListprodukPage),
  ],
})
export class ListprodukPageModule {}
