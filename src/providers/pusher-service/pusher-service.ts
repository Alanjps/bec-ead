import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as ENV } from '../../environments/environment'
import { Storage } from '@ionic/storage';

declare const Pusher: any;
@Injectable()
export class PusherServiceProvider {
  channel;
  constructor(
    public http: HttpClient,
    public storage: Storage,
    ) {
    this.storage.get('clienteId').then((valor) => {

      var pusher = new Pusher(ENV.PUSHER_APP_KEY, { 
        cluster: ENV.PUSHER_APP_CLUSTER,
        encrypted: true,
      });
      this.channel = pusher.subscribe(`chat.${valor}`);
    });
  }

  public init(){
   return this.channel;
  }
}