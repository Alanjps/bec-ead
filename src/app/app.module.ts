import { DatePipe, CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { Camera } from '@ionic-native/camera';
import { File } from '@ionic-native/file';
import { FileOpener } from '@ionic-native/file-opener';
import { FileTransfer } from '@ionic-native/file-transfer';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { AuthProvider } from '../providers/auth/auth';
import { HttpServiceProvider } from '../providers/http-service/http-service';
import { MyApp } from './app.component';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { OneSignal } from '@ionic-native/onesignal';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { NgxPaginationModule } from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { AngularCropperjsModule } from 'angular-cropperjs';
import { PusherServiceProvider } from '../providers/pusher-service/pusher-service';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      autocomplete: 'off',
      cancelText: 'Cancelar',
      okText: 'OK',
      monthNames: ['Janeiro', 'Fevereiro', 'Mar\u00e7o', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubto', 'Novembro', 'Dezembro'],
      monthShortNames: ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ'],
      dayNames: ['Domingo', 'Segunda-feira', 'Ter\u00e7a-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sabado'],
      dayShortNames: ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SAB'],
      tabsHideOnSubPages: true,
      mode: 'md'
    }),
    IonicStorageModule.forRoot({ name: '__moveraDB' }),
    HttpModule,
    HttpClientModule,
    NgxQRCodeModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    AngularCropperjsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AuthProvider,
    HttpServiceProvider,
    Camera,
    DatePipe,
    File,
    FileTransfer,
    FileOpener,
    CallNumber,
    OneSignal,
    ImagePicker,
    PusherServiceProvider
  ],
  exports:[
  ]
})
export class AppModule { }


