import {Http, RequestOptions, Headers} from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Platform } from 'ionic-angular';
import {Storage} from '@ionic/storage';

@Injectable()
export class HttpServiceProvider {

  private url:string= '';

  constructor(
    public http: Http,
    public _platform: Platform,
    public storage: Storage
  ) {
    this.getUrl();
    
  }

  getUrl = async() => {
    return await new Promise((response,reject)=>{
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
              //this.url = "https://homolog.marketinghouse.com.br";
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
              //this.url = "https://homolog.marketinghouse.com.br";
            }
          }
        }

        response(this.url);
      });
    });
    
  }

  getAppVersion  = async() =>{
    let url = await this.getUrl();
    return await new Promise((response,reject) => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      let options = new RequestOptions({ headers : headers});     
      this.http.get(url+'/confsapp', options).subscribe(res => response(res.json()));
    });

  }

  getAll(endpoint, variables, type?){
    let headers = new Headers();
    if (!type){
      let options = new RequestOptions({ headers : headers});
      return this.http.post(this.url+endpoint, variables, options)
        .map(res => res.json());

    }else if(type == 'get'){
      let options = new RequestOptions({ headers : headers, params: variables});
      return this.http.get(this.url+endpoint, options)
        .map(res => res.json());
        
    }else if (type == "put"){
      let options = new RequestOptions({ headers : headers, params: variables});
      return this.http.put(this.url+endpoint, variables, options)
      .map(res => res.json());
    }
      /*return this.http.get(this.url+endpoint)
      .map(res => {
        return res.json();
      })*/
  }

  post(endpoint, variables, type?){
    let headers = new Headers();

    if (!type){
      headers.append('Content-Type', 'application/json'); 
    }else if(type == "form-data"){
      headers.append('enctype', 'multipart/form-data; boundary=----WebKitFormBoundaryuL67FWkv1CA');
    }

    let options = new RequestOptions({ headers : headers});
    return this.http.post(this.url+endpoint, variables, options)
  }
  
}
