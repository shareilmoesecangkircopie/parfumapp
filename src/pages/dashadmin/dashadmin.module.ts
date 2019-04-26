import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DashadminPage } from './dashadmin';

@NgModule({
  declarations: [
    DashadminPage,
  ],
  imports: [
    IonicPageModule.forChild(DashadminPage),
  ],
})
export class DashadminPageModule {}
