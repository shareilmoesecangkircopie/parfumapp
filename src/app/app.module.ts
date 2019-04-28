import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DashadminPage } from '../pages/dashadmin/dashadmin';
import { ListlokasiPage } from '../pages/listlokasi/listlokasi';
import { AddlokasiPage } from '../pages/addlokasi/addlokasi';
import { EditlokasiPage } from '../pages/editlokasi/editlokasi';
import { ListuserPage } from '../pages/listuser/listuser';
import { AdduserPage } from '../pages/adduser/adduser';
import { EdituserPage } from '../pages/edituser/edituser';
import { ListmerekPage } from '../pages/listmerek/listmerek';
import { AddmerekPage } from '../pages/addmerek/addmerek';
import { EditmerekPage } from '../pages/editmerek/editmerek';
import { ListtokoPage } from '../pages/listtoko/listtoko';
import { AddtokoPage } from '../pages/addtoko/addtoko';
import { EdittokoPage } from '../pages/edittoko/edittoko';
import { ListprodukPage } from '../pages/listproduk/listproduk';
import { AddprodukPage } from '../pages/addproduk/addproduk';
import { EditprodukPage } from '../pages/editproduk/editproduk';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DashadminPage,
    ListlokasiPage,
    AddlokasiPage,
    EditlokasiPage,
    ListuserPage,
    AdduserPage,
    EdituserPage,
    ListmerekPage,
    AddmerekPage,
    EditmerekPage,
    ListtokoPage,
    AddtokoPage,
    EdittokoPage,
    ListprodukPage,
    AddprodukPage,
    EditprodukPage
      
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DashadminPage,
    ListlokasiPage,
    AddlokasiPage,
    EditlokasiPage,
    ListuserPage,
    AdduserPage,
    EdituserPage,
    ListmerekPage,
    AddmerekPage,
    EditmerekPage,
    ListtokoPage,
    AddtokoPage,
    EdittokoPage,
    ListprodukPage,
    AddprodukPage,
    EditprodukPage
  
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
