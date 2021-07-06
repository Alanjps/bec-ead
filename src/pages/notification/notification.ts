import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, IonicPage } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HttpServiceProvider } from '../../providers/http-service/http-service';
import moment from 'moment';
import { environment as ENV } from '../../environments/environment';

@IonicPage({
  name: 'notification-page'
})

@Component({
  selector: 'page-notification',
  templateUrl: 'notification.html',
})
export class NotificationPage {
  public ENV = ENV;
  private notifications : any | null;
  public titleTesteira: string = '';
  public complementTitle: string = '';
  public lida: boolean = false;
  public pendentes: any = [];
  public lidos: any = [];

  public globalUrl: string = '';
  public version : string;
  public items : any = [];
  public cont : number = 0;
  public idiom: string = '';
  public project: string;

  public totalNewNotification: number = 0;
  public interval: any;
  public clienteCompanyLogo: string = '/storage/uploads/configs/logoHeader.png';

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public storage: Storage,
    public http: HttpServiceProvider
  ){
      storage.get('GlobalUrl').then((value) => {
        this.globalUrl = value;
      });

      this.interval = setInterval(()=>{
        this.checkForNewUserNotifications();
      },5000)
  }

  ngOnInit(){
    this.storage.get('Idiom').then((value) => {
      this.idiom = value;
    });
  }

  ionViewWillLeave(){
    clearInterval(this.interval);
  }

  doInfinite(infiniteScroll?) {
    setTimeout(() => {
      let intCont = 0;
      for (let i = this.cont; i < this.notifications.length; i++) {
        if (intCont < 6){ 

          this.items.push( this.notifications[i] );
          this.cont = this.cont + 1;
        }else{
          break;
        }
        intCont ++;
      }

      if (infiniteScroll) infiniteScroll.complete();
    }, 700);
  }
  
  expandItem(item){
    if (item.lido == 0) this.markAsRead(item);

    this.items.map((listItem) => {
      if(item == listItem){
        listItem.expanded = !listItem.expanded;
      } else {
        listItem.expanded = false;
      }
      return listItem;
    });
  }

  markAsRead(notificacao){
    this.http.getAll('/mensagens/readNotification', { id: notificacao.id },'get')
    .subscribe((data: any) => {
      this.items = this.items.map((notification) => {
        return notification.id == notificacao.id ? {...notification, lido: 1} : notification;
      });
    });


  }
 
  ionViewDidEnter () {
    this.storage.get('Project').then((value)=>{
      this.project = value;
      /*PROJETOS:
        marketing-house
        edicom
        vcc
      */
      if (value == 'full-promo'){
        this.storage.get('clienteCompanyLogo').then((logo) => {
          if(logo) this.clienteCompanyLogo = "/storage/"+logo;
        });
      }
    });
    this.storage.get('LayoutVersion').then((value) => {
      this.version = value;
    });
    
    this.storage.get("AppConfig").then((config) => {
      if (config.internoApp2 && config.internoApp2['text']){
        this.titleTesteira = config.internoApp2['text'];
      }else{
        this.titleTesteira = this.idiom == '01' ? 'Notificações' : 'Notificaciones';
      }
    })
    
    this.complementTitle = '';

    this.items = [];
    this.cont = 0;
    this.getUserNotifications();
  }

  checkForNewUserNotifications(remetente = null, lido?){
    this.storage.get('clienteId').then((id) => {    
      this.http.getAll('/mensagens/getNotifications', { user_id: id, lido: false }, 'get')
        .subscribe(async (lido: any) => {
          let total = lido.length;
          if (total > 0 && this.totalNewNotification < total) {
            this.cont = 0;
            this.items = [];
            this.getUserNotifications();
          }
        });
    });
  };

  getUserNotifications(remetente = null, lido?){
    this.storage.get('clienteId').then((id) => {
      
      let loading = this.loadingCtrl.create({
        content: 'Espere...'
      });
      loading.present();
      
      this.http.getAll('/mensagens/getNotifications', { user_id: id, lido: false }, 'get')
        .subscribe(async (lido: any) => {
         
          let total = lido.length;
          this.totalNewNotification = total;

          this.notifications = lido.map((r) => {
            return {...r, expanded: false, created_at: moment(r.created_at).subtract(3,'hours').format('DD/MM/YYYY')}
          });

          await new Promise((response, reject) => {
            return this.http.getAll('/mensagens/getNotifications', { user_id: id, lido: true }, 'get')
            .subscribe((pendente: any) => {

              this.notifications = this.notifications.concat(pendente.map((r) => {
                return {...r, expanded: false, created_at: moment(r.created_at).subtract(3,'hours').format('DD/MM/YYYY')}
              })).sort((a,b)=> {
                return a.id < b.id ? 1 : 
                  a.id > b.id ? -1 : 0;
              })

              loading.dismiss();
              response (this.notifications)
            });
          });
          this.doInfinite();
        });
    });
  };
}
