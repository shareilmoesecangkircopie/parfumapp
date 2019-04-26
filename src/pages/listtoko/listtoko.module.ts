import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListtokoPage } from './listtoko';

@NgModule({
  declarations: [
    ListtokoPage,
  ],
  imports: [
    IonicPageModule.forChild(ListtokoPage),
  ],
})
export class ListtokoPageModule {}
