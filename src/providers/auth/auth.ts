import { Injectable } from '@angular/core';
import {Storage} from '@ionic/storage';
import {Http, RequestOptions, Headers} from '@angular/http';
import { ToastController, Platform } from 'ionic-angular';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import moment from 'moment';
import { OneSignal } from "@ionic-native/onesignal";

@Injectable()
export class AuthProvider {

private msg: string = "Favor fazer o login";
private url:string= '/vcc';
//private url:string= '/edc';
  constructor
  (
    public http: Http,
    public storage: Storage,
    public toastCtrl: ToastController,
    public _platform: Platform,
    private oneSignal: OneSignal,
  ) {

    this.storage.get('Project').then((value) => {
      switch(value){
        case 'marketing-house': {
          this.url = '/mkh';
          if(this._platform.is("cordova")){
            this.url = "https://homolog.marketinghouse.com.br";
          }
          break;
        }
        case 'edicom': {
          this.url = '/edc';
          if(this._platform.is("cordova")){
            this.url = "https://edicom.becinteligencia.com";
          }
          break;
        }
        case 'hkt369': {
          this.url = '/hkt369';
          if(this._platform.is("cordova")){
            this.url = "https://descubre.hkt369.com";
          }
          break;
        }
        case 'know-house': {
          this.url = '/knowh';
          if(this._platform.is("cordova")){
            this.url = "https://knowhouse.marketinghouse.com.br";
          }
          break;
        }
        default:{
          this.url = '/vcc';
          if(this._platform.is("cordova")){
            this.url = "https://vcc.becinteligencia.com";
          }
        }
      }
    });
  }


  request(url, vars){

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers : headers});

    //'/api/usuarios/cadastrar'
    return this.http.post(this.url+url, vars, options)
      .map(res => res.json())
      .toPromise()
      .then(data => {
          return data;
      });
  }


  login(credentials): Promise<boolean>{

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let options = new RequestOptions({ headers : headers});

    return this.http.post(this.url+'/api/usuarios/logar', credentials, options)
      .map(res => res.json())
      .toPromise()
      .then(data => {
          if(data.id > 0){
              this.storage.set('clienteId', data.id);
              this.storage.set('clienteNome', data.nome);
              this.storage.set('clienteEmail', data.email);
              this.storage.set('clienteWhatsapp', data.whatsapp);
              this.storage.set('clienteDocumento', data.documento);
              this.storage.set('clienteProfileId', data.profile_id);
              this.storage.set('clienteEmpresa', data.empresa);
              this.storage.set('clienteNascimento', data.nascimento);
              this.storage.set('clienteThumb', data.thumb);
              this.storage.set('clienteCompanyId', data.company_id);

              //if(credentials.lembrar){
                //CLIENTE MARCOU PARA LEMBRAR DE FICAR LOGADO
                //2. REGRA ALTERADA, AGORA O SISTEMA SEMPRE VAI LEMBRAR O ACESSO
                this.storage.set('clienteSavePassword', credentials.password);
                this.storage.set('clienteSaveDocumento', data.documento);

              //}

              return true;
          }else{
            return false;
          }
      });
  }

  firstAcess(credentials): Promise<boolean>{

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');


    let options = new RequestOptions({ headers : headers});

     return this.http.post(this.url+'/api/usuarios/primeiro-acesso', credentials, options)
      .map(res => res.json())
      .toPromise()
      .then(data => {
          if(data.id > 0){
            this.storage.set('clienteId', data.id);
            this.storage.set('clienteNome', data.nome);
            this.storage.set('clienteEmail', data.email);
            this.storage.set('clienteWhatsapp', data.whatsapp);
            this.storage.set('clienteDocumento', data.documento);
            this.storage.set('clienteProfileId', data.profile_id);
            this.storage.set('clienteEmpresa', data.empresa);
            this.storage.set('clienteNascimento', data.nascimento);
            this.storage.set('clienteThumb', data.thumb);
            this.storage.set('clienteCompanyId', data.company_id);
            this.storage.set('clienteFirst', data.first);
              return true;
          }else{
            return false;
          }
      });

  }

  register(credentials){

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    //headers.append('Content-Type', 'multipart/form-data');
    let options = new RequestOptions({ headers : headers});
     return this.http.post(this.url+'/api/usuarios/cadastrar', credentials, options)
      .map(res => res.json())
      .toPromise()
      .then(data => {
          data.nascimento = data.nascimento ? moment(data.nascimento.date).format('DD/MM/YYYY') : '';
          if(data.id > 0){
            this.storage.set('clienteId', data.id);
            this.storage.set('clienteNome', data.nome);
            this.storage.set('clienteEmail', data.email);
            this.storage.set('clienteWhatsapp', data.whatsapp);
            this.storage.set('clienteDocumento', data.documento);
            this.storage.set('clienteProfileId', data.profile_id);
            this.storage.set('clienteEmpresa', data.empresa);
            this.storage.set('clienteNascimento', data.nascimento);
            this.storage.set('clienteThumb', data.thumb);
            this.storage.set('clienteCompanyId', data.company_id);
              return data;
          }else{
            //return false;
            return data;
          }
      });
  }


  recoveryPassword(credentials): Promise<boolean>{

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let options = new RequestOptions({ headers : headers});

     return this.http.post(this.url+'/api/usuarios/reset-senha', credentials, options)
      .map(res => res.json())
      .toPromise()
      .then(data => {
        //return data;

        if(data.id > 0){
          this.storage.set('clienteId', data.id);
          this.storage.set('clienteNome', data.nome);
          this.storage.set('clienteEmail', data.email);
          this.storage.set('clienteWhatsapp', data.whatsapp);
          this.storage.set('clienteDocumento', data.documento);
          this.storage.set('clienteProfileId', data.profile_id);
          this.storage.set('clienteEmpresa', data.empresa);
          this.storage.set('clienteNascimento', data.nascimento);
          this.storage.set('clienteThumb', data.thumb);
          this.storage.set('clienteCompanyId', data.company_id);
          this.storage.set('clienteFirst', data.first);
            return true;
        }else{
          return false;
        }

      });

    //ALTERADO 21/09. APARTIR DE AGORA O USUÁRIO RESETA NO PROPRIO APP
    /*let headers = new Headers();
    headers.append('Content-Type', 'application/json');


    let options = new RequestOptions({ headers : headers});

     return this.http.post(this.url+'/api/usuarios/recover', credentials, options)
      .map(res => res.json())
      .toPromise()
      .then(data => {
        return data;
      });*/

  }

  getJob(): Promise<boolean>{

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let options = new RequestOptions({ headers : headers});

     return this.http.post(this.url+'/api/usuarios/ocupacoes', options)
      .map(res => res.json())
      .toPromise()
      .then(data => {
        return data;
      });
  }

  userIsLogged(){
    return this.storage.get('clienteId').then(val => {
      if(val){
        return true;
      }else{

        let toast = this.toastCtrl.create({
          message: this.msg,
          duration: 3000
        });
        toast.present();

        return true;//MUDAR PARA FALSE
      }
    })
  }

  logout(){

    this.storage.get('clienteId').then((clienteId) => {
      this.storage.get('clienteEmail').then((clienteEmail) => {
      
        this.oneSignal.getIds().then(state => {
          //REMOVE O DEVICE ID DA WEB
          //id, email, type, device_id
          let parametros = {
            id : clienteId,
            email: clienteEmail,
            device_id : state.userId,
            type: 'android'
          }

          this.http.post(this.url+'/api/usuarios/remove-device', parametros)
          .subscribe((data:any) => {
          });
        }).catch(() =>{ console.log("Erro ao obter os dados do Onesignal")  });

        this.storage.remove('clientId');
        this.storage.remove('clienteNome');
        this.storage.remove('clienteEmail');
        this.storage.remove('clienteWhatsapp');
        this.storage.remove('clienteDocumento');
        this.storage.remove('clienteProfileId');
        this.storage.remove('clienteEmpresa');
        this.storage.remove('clienteNascimento');
        this.storage.remove('clienteThumb');
        this.storage.remove('clienteCompanyId');
        this.storage.remove('clienteId');
      });
    });    
  }

  logoutSave(){
    this.storage.remove('clienteSavePassword');
    this.storage.remove('clienteSaveDocumento');
  }

}
