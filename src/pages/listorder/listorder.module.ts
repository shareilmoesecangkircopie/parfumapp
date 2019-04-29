import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListorderPage } from './listorder';

@NgModule({
  declarations: [
    ListorderPage,
  ],
  imports: [
    IonicPageModule.forChild(ListorderPage),
  ],
})
export class ListorderPageModule {}
