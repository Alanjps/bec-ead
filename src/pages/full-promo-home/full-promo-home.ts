import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController, ActionSheetController, ModalController, Tabs } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';
import { Storage } from '@ionic/storage';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { AuthProvider } from '../../providers/auth/auth';
import { HttpServiceProvider } from '../../providers/http-service/http-service';
import { DatePipe } from '@angular/common';
import moment from 'moment';
import { AngularCropperjsComponent } from 'angular-cropperjs';
import { environment as ENV } from '../../environments/environment' ;

@IonicPage({
  name: 'full-promo-home-page'
})

@Component({
  selector: 'full-promo-home',
  templateUrl: 'full-promo-home.html',
})
export class FullPromoHomePage {

  public credential: any = {
    id:'',
    documento:'',
    password:'',
    confirmPassword:'',
    nome:'',
    email:'',
    nascimento:'',
    whatsapp:'',
    empresa:'',
    thumb:'',
    profile_id:'',
    company_id:''
  };

  public ENV = ENV;
  public version : String;

  public titleTesteira: string = '';
  public complementTitle: string = '';
  public globalUrl: string = '';
  public idiom: string = '';
  public project: string;
  public clienteCompanyLogo: string = '/storage/uploads/configs/logoHeader.png';


  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public toastCtrl: ToastController,
    public authService: AuthProvider,
    public httpService: HttpServiceProvider,
    public storage : Storage,
    public DomSanitizer: DomSanitizer,
    public loadingCtrl : LoadingController,
    public actionSheetCtrl: ActionSheetController,
    public modalCtrl: ModalController,
  ) {
    storage.get('GlobalUrl').then((value) => {
      this.globalUrl = value;
      console.log("value -> ",value);
    })
   
  }

  ngOnInit(){
    this.storage.get('Idiom').then((value) => {
      this.idiom = value;
    });

    this.storage.get('Project').then((value)=>{
      this.project = value;
      /*PROJETOS:
        marketing-house
        edicom
        ead
        know-house
      */
      if (value == 'full-promo'){
        this.storage.get('clienteCompanyLogo').then((logo) => {
          if(logo) this.clienteCompanyLogo = "/storage/"+logo;
        });
      }
    });

  }


  ionViewDidLoad() {

    this.storage.get('clienteNome').then((valor) => {
      this.titleTesteira = this.idiom == '01' ? 'Olá '+valor : 'Hola '+valor ;
    });
    
    this.complementTitle = '';
    this.storage.get('LayoutVersion').then((value) => {
      this.version = value;
    });

  }

  goTo(page){

    switch (page) {
      case 'administrativo':

          let holeriteModal = this.modalCtrl.create('holerite-modal',this.credential);
          holeriteModal.onDidDismiss(data => {
            /* if (data){
              let loading = this.loadingCtrl.create({
                content: 'Espere...'
              });
              loading.present();
              this.makeRegister();
              this.storage.set('first', false);
              if (this.credential.firstAccess == true)
                this.navCtrl.push('tab-page');
              loading.dismiss();
            } */
          });
          holeriteModal.present();
          
        break;
      case 'treinamento':
        let projectModal = this.modalCtrl.create('list-videos-page');
        projectModal.onDidDismiss(data => {
          /* if (data){
            let loading = this.loadingCtrl.create({
              content: 'Espere...'
            });
            loading.present();
            this.makeRegister();
            this.storage.set('first', false);
            if (this.credential.firstAccess == true)
              this.navCtrl.push('tab-page');
            loading.dismiss();
          } */
        });
        projectModal.present();
        break;
      case 'beneficio':
    
        break;   
      default:
        break;
    }
    
  }

}
