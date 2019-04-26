import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListmerekPage } from './listmerek';

@NgModule({
  declarations: [
    ListmerekPage,
  ],
  imports: [
    IonicPageModule.forChild(ListmerekPage),
  ],
})
export class ListmerekPageModule {}
