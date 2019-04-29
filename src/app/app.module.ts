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
import { ListprovPage } from '../pages/listprov/listprov';
import { AddprovPage } from '../pages/addprov/addprov';
import { EditprovPage } from '../pages/editprov/editprov';
import { ListkabPage } from '../pages/listkab/listkab';
import { AddkabPage } from '../pages/addkab/addkab';
import { EditkabPage } from '../pages/editkab/editkab';
import { ListtransPage } from '../pages/listtrans/listtrans';
import { AddtransPage } from '../pages/addtrans/addtrans';
import { EdittransPage } from '../pages/edittrans/edittrans';
import { DashuserPage } from '../pages/dashuser/dashuser';
import { ListorderPage } from '../pages/listorder/listorder';
import { AddorderPage } from '../pages/addorder/addorder';
import { EditorderPage } from '../pages/editorder/editorder';

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
    EditprodukPage,
    ListprovPage,
    AddprovPage,
    EditprovPage,
    ListkabPage,
    AddkabPage,
    EditkabPage,
    ListtransPage,
    AddtransPage,
    EdittransPage,
    DashuserPage,
    ListorderPage,
    AddorderPage,
    EditorderPage
          
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
    EditprodukPage,
    ListprovPage,
    AddprovPage,
    EditprovPage,
    ListkabPage,
    AddkabPage,
    EditkabPage,
    ListtransPage,
    AddtransPage,
    EdittransPage,
    DashuserPage,
    ListorderPage,
    AddorderPage,
    EditorderPage
  
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
