import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';
import { HttpServiceProvider } from '../providers/http-service/http-service';
import { OneSignal } from '@ionic-native/onesignal';
import { isCordovaAvailable } from '../common/is-cordova-available';
import { environment as ENV } from '../environments/environment';

@Component({
  templateUrl: 'app.html'
})

export class MyApp {

  public storage: Storage;
  rootPage:any = '';
  projectNumber: number = null;
  projectName: string = null;
  onesignalAppId: string = '';
  firebaseSenderId: string = '';
  public ENV = ENV;

  constructor(
    storage: Storage,
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    private oneSignal: OneSignal,
    http: HttpServiceProvider) {

      this.clearStorage(storage);
      
      if(platform.is('android')){
        storage.set('Platform', 'android');
      }else if(platform.is('ios')){
        storage.set('Platform', 'ios');
      }

      platform.ready().then(() => {
        statusBar.styleDefault();
        splashScreen.hide();
        
        //IDIOMA -----------------------------------------
        //storage.set('Idiom','01'); //português
        //storage.set('Idiom','02'); //espanhol

        //0  -> localhost
        //1  -> ead (vcc)
        //2  -> edicom
        //3  -> marketing-house
        //4  -> hkt369
        //5  -> know-house
        //6  -> simples-trade
        //7  -> r2m
        //8  -> ava
        //9  -> tmc
        //10 -> hability
        //11 -> full-promo
        //12 -> sehc
        
        this.projectNumber = 2;

        switch(this.projectNumber){
          case 0:
            this.onesignalAppId='946eb156-716e-4000-853f-18f41cc2b193';
            this.firebaseSenderId='23981024898';
            this.projectName = 'localhost';
            storage.set('Idiom','01'); //português
            storage.set('TextColor','black'); //português
            break;
          case 1:
            this.onesignalAppId='946eb156-716e-4000-853f-18f41cc2b193';
            this.firebaseSenderId='23981024898';
            this.projectName = 'ead';
            storage.set('Idiom','01'); //português
            break;
          case 2:
            this.onesignalAppId='c3765e9e-79b4-4dbc-b3ad-a31396017591';
            this.firebaseSenderId='981777081301';
            this.projectName = 'edicom';
            storage.set('Idiom','02'); //espanhol
            break;
          case 3:
            this.onesignalAppId='883bb93e-4053-43f0-865c-a5d52ca89a80';
            this.firebaseSenderId='1010203313691';
            this.projectName = 'marketing-house';
            storage.set('Idiom','01'); //português
            break;
          case 4:
            this.onesignalAppId='abf814a3-a2bb-4ae4-9a63-422d37394e64';
            this.firebaseSenderId='786704296447';
            this.projectName = 'hkt369';
            storage.set('Idiom','02'); //espanhol
            break;
          case 5:
            this.onesignalAppId='d29cd1d1-3a5b-4774-b768-a1026101ea0a';
            this.firebaseSenderId='823038736964';
            this.projectName = 'know-house';
            storage.set('Idiom','01'); //português
            break;
          case 6:
            this.onesignalAppId='d6e18971-f2cc-41d8-aed7-28384cb957e0';
            this.firebaseSenderId='823038736964';
            this.projectName = 'simples-trade';
            storage.set('Idiom','01'); //português
            break;
          case 7:
            this.onesignalAppId='a7bbe9ca-2e79-4f10-8f68-365da3e09fd5';
            this.firebaseSenderId='613045008970';
            this.projectName = 'r2m';
            storage.set('Idiom','01'); //português
            break;
          case 8:
            this.onesignalAppId='6b8f443d-da09-4ccc-b629-f1e21476c6b2';
            this.firebaseSenderId='575583616149';
            this.projectName = 'ava';
            storage.set('Idiom','01'); //português
            break;
          case 9:
            this.onesignalAppId='c4a92409-ba2f-4001-bd59-af1b24ae58a1';
            this.firebaseSenderId='732312096020';
            this.projectName = 'tmc';
            storage.set('Idiom','02'); //espanhol
            break;
          case 10:
            this.onesignalAppId='fb347a8c-b214-4754-934b-b60e6772fd47';
            this.firebaseSenderId='926995274326';
            this.projectName = 'hability';
            storage.set('Idiom','02'); //espanhol
            break;
          case 11:
            this.onesignalAppId='574a5c13-9a8e-46fb-85cf-3698d35cc750';
            this.firebaseSenderId='1067216235696';
            this.projectName = 'full-promo';
            storage.set('Idiom','01'); //português
            break;
          case 12:
            this.onesignalAppId='41ad100c-898c-4a9f-99d9-277244f36858';
            this.firebaseSenderId='159095755019';
            this.projectName = 'sehc';
            storage.set('Idiom','02'); //português
            break;
        }

        // OneSignal Code start:
        // Enable to debug issues:
        // The following options are available with increasingly more information: 
        // 0 = NONE, 1 = FATAL, 2 = ERROR, 3 = WARN, 4 = INFO, 5 = DEBUG, 6 = VERBOSE
        // window["plugins"].OneSignal.setLogLevel({logLevel: 6, visualLevel: 6});
        // window["plugins"].OneSignal.setLogLevel({logLevel: 6, visualLevel: 0});

        if (isCordovaAvailable()) {
          /*           
          var notificationOpenedCallback = function(jsonData) {
            console.log("\n\nENTROU PUSH ----------------------------------\n");
            console.log(jsonData);
            console.log("\n----------------------------------\n\n");
          };

          window["plugins"].OneSignal
            .startInit(this.onesignalAppId, this.firebaseSenderId)        
            .handleNotificationOpened(notificationOpenedCallback)
            .endInit(); 
          */

          this.oneSignal.startInit(this.onesignalAppId , this.firebaseSenderId);
          this.oneSignal.handleNotificationReceived().subscribe((jsonData) => {
          });
          this.oneSignal.endInit();

        }

        storage.set('Project',this.projectName).then((value) => {

          let url = '';
          switch(value){
            case 'localhost': {
              url = 'http://ead.localhost';
              break;
            }
            case 'marketing-house': {
              url = 'https://homolog.marketinghouse.com.br';
              break;
            }
            case 'edicom': {
              url = 'https://edicom.becinteligencia.com';
              break;
            }
            case 'ead': {
              url = 'https://vcc.becinteligencia.com';
              break;
            }
            case 'hkt369': {
              url = 'https://descubre.hkt369.com';
              break;
            }
            case 'know-house': {
              url = 'https://knowhouse.marketinghouse.com.br';
              break;
            }
            case 'simples-trade': {
              url = 'https://simplestrade.becinteligencia.com';
              break;
            }
            case 'r2m': {
              url = 'https://readytomarket.becinteligencia.com';
              break;
            }
            case 'ava': {
              url = 'https://ava.insighttech.com.br';
              break;
            }
            case 'tmc': {
              url = 'https://tmc.becinteligencia.com';
              break;
            }
            case 'hability': {
              url = 'https://hability.becinteligencia.com';
              break;
            }
            case 'full-promo': {
              url = 'https://homolog.fullpromo.com.br';
              break;
            }
            case 'sehc': {
              url = 'https://sehc.becinteligencia.com';
              break;
            }
          }

          storage.set('GlobalUrl',url).then(async (urlBase)=> {
            let version = 0;
            //BUG DA REQUISICAO
            //ERROR Error: Uncaught (in promise): SyntaxError: Unexpected end of JSON input
            //SyntaxError: Unexpected end of JSON input
            //at JSON.parse (<anonymous>)

            await new Promise(async (response, reject) => {
              return await http.getAppVersion().then((res:any) => {
                storage.set('AppConfig', res);
                version = res.version;  
                if (version == 1){
                  storage.set('LayoutVersion', '01');
                }else if(version == 2 ){
                  storage.set('LayoutVersion', '02');
                }else{
                  storage.set('LayoutVersion', '02');
                }
                response();
              });
            })

            storage.get('LayoutVersion').then((value)=>{
              this.rootPage = 'login-page';
              platform.ready().then(() => {
                statusBar.styleDefault();
                splashScreen.hide();
              });
            })
          });
        });
      });     
  }

  clearStorage(storage){
    let vars = [
      'AvailableDefaultProjects'
    ];
    vars.map((v)=>{
      storage.remove(v);
    });
  }
}
