import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DashuserPage } from './dashuser';

@NgModule({
  declarations: [
    DashuserPage,
  ],
  imports: [
    IonicPageModule.forChild(DashuserPage),
  ],
})
export class DashuserPageModule {}
