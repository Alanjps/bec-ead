import { Component, Input } from '@angular/core';
import { NavController, NavParams, LoadingController, ToastController, ModalController  } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AuthProvider } from '../../providers/auth/auth';
import { HttpServiceProvider } from '../../providers/http-service/http-service';
import { ChatPage } from '../../pages/chat/chat';

@Component({
  selector: 'menu-sup',
  templateUrl: 'menu-sup.html'
})
export class MenuSupComponent {

  @Input() active: boolean;
 
  public version : string;
  public pendentChat : any = null;
  public project: string;
  public intervalHandle: any = null;
  public clienteCompanyLogo: string = '/storage/uploads/configs/logoHeader.png';
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public authService: AuthProvider,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    public storage: Storage,
    public http: HttpServiceProvider,
    public modalCtrl: ModalController,
  ) {

    this.getUnreadChats();
    if (this.intervalHandle != null) clearInterval(this.intervalHandle);
    this.intervalHandle = setInterval(()=>{
      this.getUnreadChats();
    },5000);
  }

  ngOnInit(){
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
  }
  
  redirectToChatPage() {
    let userModal = this.modalCtrl.create('chat-page', { pendentChat: this.pendentChat });
    userModal.onDidDismiss(data => {
      /* if (data){
        let loading = this.loadingCtrl.create({
          content: 'Espere...'
        });
        loading.present();
        this.storage.set('first', false);
        if (this.credential.firstAccess == true)
          this.navCtrl.push('tab-page');
        loading.dismiss();
      } */
    });
    userModal.present();
/*     if (this.navCtrl.getActive().component !== ChatPage) {
      this.navCtrl.setRoot('chat-page');
    } */
  }

  getUnreadChats(){
    this.storage.get('clienteId').then((id) => {
      this.http.getAll('/mensagens/remetentes', { user_id: id }, 'get')
        .subscribe((data: any) => {
          if (data && data.length > 0){
            this.pendentChat = data;
          }else{
            this.pendentChat = null;
          }
          this.storage.set('remetentes', data);  
        })
    });
  }

}
