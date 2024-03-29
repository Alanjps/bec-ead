import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Tabs } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { OneSignal } from "@ionic-native/onesignal";
import { isCordovaAvailable } from "../../common/is-cordova-available";
import { HttpServiceProvider } from '../../providers/http-service/http-service';

@IonicPage({
  name: 'tab-page'
})
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  @ViewChild('appTabs') appTabs: Tabs;

  tab1 = 'list-videos-page';
  tab7 = 'notification-page';
  tab8 = 'edit-user-page';
  tab9 = 'photo-page';
  tab10 = 'list-videos-page';
  tab11 = 'results-page'

  public renderRoot: boolean = false;
  public chatAtTop: boolean = true;
  public notificationEnabled: boolean = false;
  public version: string = '01';
  public totalNotification: number | null = null;
  public project: string;
  public showTab04: boolean = false;
  public showTab05: boolean = false;
  public showTab06: boolean = false;

  param01 = {
    type: "DEFAULT"
  }
  
  param02 = {
    type: "ICON5"
  }

  constructor(
    public navCtrl: NavController,
     public navParams: NavParams,
     public storage: Storage,
     private oneSignal: OneSignal,
     public http: HttpServiceProvider
  ){
    this.goToDeafultPage();
  }


  goToDeafultPage(){
    this.storage.get('LayoutVersion').then((value)=> {
      this.chatAtTop = false;

      this.storage.get('Project').then((project)=>{
        this.project = project;

        if (this.project == "full-promo"){
          switch(value){
            case '02': {
              this.version = '02';
              this.tab1 = 'full-promo-home-page';
              //this.tab10 = 'list-videos-v03-page';
              this.chatAtTop = true;
              this.notificationEnabled = true;
              break;
            }
            default:{
              this.version = '01';
              this.tab1 = 'full-promo-home-page';
              //this.tab10 = 'list-videos-page-v04';
              this.chatAtTop = true;
              this.notificationEnabled = false;
            }
          } 

        }else{
          switch(value){
            case '02': {
              this.version = '02';
              //this.tab1 = 'list-videos-v02-page';
              //this.tab10 = 'list-videos-v03-page';
              this.chatAtTop = true;
              this.notificationEnabled = true;
              break;
            }
            default:{
              this.version = '01';
              //this.tab1 = 'list-videos-page';
              //this.tab10 = 'list-videos-page-v04';
              this.chatAtTop = true;
              this.notificationEnabled = false;
            }
          }
        }
      });
      this.storage.get('clienteCompanyId').then((companyId) => {
        this.storage.get('clienteId').then((clienteId) => {
          this.http.getAll('/api/conteudos', { company_id: companyId, user_id: clienteId, type: "ICON4" })
          .subscribe((data1:any) => {
            
            if (data1.length > 0) this.showTab04 = true;
            this.http.getAll('/api/conteudos', { company_id: companyId, user_id: clienteId, type: "ICON5" })
            .subscribe((data2:any) => {
              if (data2.length > 0) this.showTab05 = true;
              this.http.getAll('/api/testes/get-test-informations',{ company_id: companyId, user_id: clienteId },'get')
              .subscribe((data3)=>{
                if (data3.length > 0) this.showTab06 = true;
              })
            })
          })
          this.getTotalNotifications(true);

          setTimeout(()=>{
            setInterval(()=>{
              this.getTotalNotifications();
            },5000);
          },5000);

          this.renderRoot = true;
        });
      });
    });
  }

  getTotalNotifications(goToNotification = false){
    this.storage.get('clienteId').then((id) => {
      this.http.getAll('/mensagens/getNotifications', { lido : false, user_id: id}, 'get')
        .subscribe((data: any) => {
          this.totalNotification = data.length > 0 ? data.length : null;
          if (data.length > 0 && goToNotification == true){
            this.appTabs.select(1, { animate: true });
          }
        })
    });
  }

  checkOneSignal() {
    if (isCordovaAvailable()) {
      //this.storage.get('Project').then((project)=>{
        //this.project = project;
      let firebaseKey = '';
      let firebaseSenderId = '';
      let onesignalAppId = '';

      switch(this.project){
        case 'marketing-house': {
          onesignalAppId='883bb93e-4053-43f0-865c-a5d52ca89a80';
          firebaseKey='AAAA6zTPRhs:APA91bFAjdg13h1oQ_3LDNBbRd03TbWEkMTSpbXMc1lz4sToQ9VjcX4LYF5mC0Kh31aLfdMVISXnK4FTZV23hbiZqoFDFPpmXqF2Ijynuql5rlSGmyA-Ojy6e4Qu_ANDMR0LiByu9BkS';
          firebaseSenderId = '1010203313691';
          break;
        }
        case 'edicom': {
          onesignalAppId='c3765e9e-79b4-4dbc-b3ad-a31396017591';
          firebaseKey='AAAA5JZ5Y9U:APA91bHSACC_j1IijWyCoCpCojFln7TtQK14oNcUIi_PxXjvciAFR4L6xgYcuJpMFxR33pVrRg49Gw646jQmrKmvYe9X570IRZNVn-pu9pm3Ok0z39bd0r9T1W8geO5HJ56pF6tqF6GB';
          firebaseSenderId = '981777081301';
          break;
        }
        case 'ead':{
          onesignalAppId='946eb156-716e-4000-853f-18f41cc2b193';
          //firebaseKey='AAAAHNSgMm4:APA91bFf84ZghEqCHXgqBNV5tC076OmSYnqUurpu4wDKW6WNjyLbJ3TXNxn6iIpPBT6gskXroMG45lB13l4ZhfLsw9rYzhKWv10wb-iMc2OjKCJkFYdHz3Crsk3TPQ9oh7DGDLFicLsj';
          firebaseKey='AAAABZVhZoI:APA91bFUtPdBDTVN-NHZc7Wk53Tn9wZiz1qjHTVKtyssQfur2F1t509yEe95CMOf6M0mkdQZYXBp6xBEhozI8J274GU6JHmLBSGrFWIAUxFk4w4Le3UdrjdvzdQyptkULVkuHPBohGND';
          firebaseSenderId = '23981024898';  
          break;
        }
        case 'hkt369':{
          onesignalAppId='abf814a3-a2bb-4ae4-9a63-422d37394e64';
          firebaseKey='AAAAtys66f8:APA91bGBdecST10j3dG5AbL8-dRt0uMgYcS_zGutn-md8ZTi_0A-D-PLlXdoY0E5Akuwo9DUaWMxbv6vCXpHePJ2M4UeneYVlrUcuHUFIsXmiLbx4xXGZyMuLw0AsUCWM4IP3j7YdcsG';
          firebaseSenderId = '786704296447';  
          break;
        }
        case 'know-house':{
          onesignalAppId='d29cd1d1-3a5b-4774-b768-a1026101ea0a';
          firebaseKey='AAAAv6DuekQ:APA91bEWy0U4-HL8f12hbNMEvDKQ1LMr8eA1gP-0gy4Y319eUpljpqwjNrQBrCoCXcl-IWHshA-I__MNi9WeKQfEUVSNDd_sTWI2AkmnAwXjHgUFsFaiyAYbUUyCYUYldoB8vgzLI7Cn';
          firebaseSenderId = '823038736964';  
          break;
        }
        case 'simples-trade':{
          onesignalAppId='d6e18971-f2cc-41d8-aed7-28384cb957e0';
          firebaseKey='AAAAsWwKIKs:APA91bGvbUnOUFFYPGEY_rUolZNcgDnhjy1eBuEHM4nWnbpg03Ie8ky09eISCfqh2WmDt9ZnSBrsQebOFb85LPckqOQnMoDYA4RNmQZ5PqulyeAaMT2nqGfksSvU8QFqQR7sY7vTV2ix';
          firebaseSenderId = '762021814443';  
          break;
        }
        case 'r2m':{
          onesignalAppId='a7bbe9ca-2e79-4f10-8f68-365da3e09fd5';
          firebaseKey='AAAAjrxUeko:APA91bEwsLDPKZJkIAnBNMcxrsxEYrGgi49TF7Pg37DQwpvwX9QtWgGojRzSiePJpLwt-qWe08onYfdsqjeUTxeFTz8aYDwS95uoI5ruThJGtz2r9kLxcBAXwzwNavPVHDTOYEw0DmUW';
          firebaseSenderId = '613045008970';  
          break;
        }
        case 'ava':{
          onesignalAppId='6b8f443d-da09-4ccc-b629-f1e21476c6b2';
          firebaseKey='AAAAhgN0_JU:APA91bEMiPSZM22P9MkPreN0zjwXbuz23N2wuSKifKN2or8Vt-YCzkYiGxC1p1SJA6OSCiTOaj3DKSLfgw_UcTU1J8ZSxqYzxcUAApNz3UjzTtrYSSNAhybm3NBzLOTSOBlqs4ks1Niz';
          firebaseSenderId = '575583616149';  
          break;
        }
        case 'tmc':{
          onesignalAppId='c4a92409-ba2f-4001-bd59-af1b24ae58a1';
          firebaseKey='AAAAqoEzzRQ:APA91bGT0v5hAXduloaX57YR4XMSXnf3JVgM1ExmRAqP76jQkVilZR0DIRkv3Ninf9OlXsCUO-qPDpITPKtJpZHMBrjN_8OkD0WsO6Di041JTog_XpdCULtLE-Cj6fonzYaCDqIGbQxN';
          firebaseSenderId = '732312096020';  
          break;
        }
        case 'hability':{
          onesignalAppId='fb347a8c-b214-4754-934b-b60e6772fd47';
          firebaseKey='AAAA19U5WlY:APA91bFfFyWmWJ7mz5oZn8Mj_pXFIjK82TTJCaC679XRZXdKCM3zLc36n7YJ1BwRACoa7Qx-JH2X76GANdVCHWrpkMmO271lBpUpOQDtb5kXtqPFRtdKpKAeVra4XCBC-_1_CuXAmHF3';
          firebaseSenderId = '926995274326';  
          break;
        }
        case 'full-promo':{
          onesignalAppId='574a5c13-9a8e-46fb-85cf-3698d35cc750';
          firebaseKey='AAAA-HsLbLA:APA91bE7dRADuz2EZ67knO3JqdBik6l99LOyM1I709WKFRVDCKqlYItxwln3B1S6s6JziLUvxGfDLfCVCOFZgYU0JuXwbHkuN2nxtX7CUUBHYQYKoHm3u0mP-drYb7UCyNgLb7Dr7gkA';
          firebaseSenderId = '1067216235696';  
          break;
        }
        case 'sehc':{
          onesignalAppId='41ad100c-898c-4a9f-99d9-277244f36858';
          firebaseKey='AAAAJQrYkQs:APA91bEoNaXdvAmr3avjoKujIMeWSUAcWAOqSPN2XZblWGZzih7xZbaaA7BX9PDEuDHwRdnr5fZTCMqiertxoyAb6hfzFFHp9X4GVk1DDf0b0aaQmAeSaCT6CUsHK2-Bce2mRiZQztxz';
          firebaseSenderId = '159095755019';  
          break;
        }
        case 'club-learn':{
          onesignalAppId='9844d205-8452-4e21-8128-45d424748be8';
          firebaseKey='AAAAKIDrRqY:APA91bHEBCtKLzrQQ-aBBKMR8nbwrBaGSOQr3vQF-UmdKW_4KH53ITrd8pYlrIDYSVeFxwTCECrJOniLR-AITnASsriO5Q_Y2AxSbvBiINK9JQcph5pRzIV2ceVGJo_aBqNJb4wJuY0O';
          firebaseSenderId = '173961594534';  
          break;
        }
      }
      /*
        ANTIGO---------------------------------------------       
        this.oneSignal.startInit(
        'AAAAHNSgMm4:APA91bFf84ZghEqCHXgqBNV5tC076OmSYnqUurpu4wDKW6WNjyLbJ3TXNxn6iIpPBT6gskXroMG45lB13l4ZhfLsw9rYzhKWv10wb-iMc2OjKCJkFYdHz3Crsk3TPQ9oh7DGDLFicLsj',
        '123826352750'
      ); */

      this.oneSignal.startInit(onesignalAppId, firebaseSenderId);
      this.oneSignal.getIds().then(state => {

        //FAZ O ENVIO DO DEVICE ID PRA WEB
        //id, email, type, device_id
        this.storage.get('clienteId').then((clienteId) => {
          this.storage.get('clienteEmail').then((clienteEmail) => {
            let parametros = {
              id : clienteId,
              email: clienteEmail,
              device_id : state.userId,
              type: 'android'
            }
            this.http.post('/api/usuarios/set-device', parametros)
              .subscribe((data:any) => {
              });
          });
        });

      //});

      }).catch(error => { console.log('error no GET IDS', error);});

      this.oneSignal.endInit();

    }
  }

  ionViewWillEnter(){
    this.storage.get('Project').then((project)=>{
      this.project = project;
      this.checkOneSignal();
    });
  }

  redirectToListPage() {
    if (this.navCtrl.getActive().component !== TabsPage) {
      this.appTabs.select(2, { animate: true });
      this.navCtrl.setRoot('tab-page', { logout: true });
    }
  }

  doLogout() {
    this.navCtrl.setRoot('login-page', { logout: true });
  }

}
