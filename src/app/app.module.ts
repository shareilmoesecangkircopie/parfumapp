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


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DashadminPage,
    ListlokasiPage,
    AddlokasiPage,
    EditlokasiPage
      
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
    EditlokasiPage
  
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
