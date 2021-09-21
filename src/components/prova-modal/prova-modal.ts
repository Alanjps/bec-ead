import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController, ToastController, LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import moment from 'moment';
import { environment as ENV } from '../../environments/environment';
import { HttpServiceProvider } from '../../providers/http-service/http-service';
import { DomSanitizer } from '@angular/platform-browser';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@IonicPage({
  name: 'prova-modal'
})

@Component({
  selector: 'prova-modal',
  templateUrl: 'prova-modal.html'
})
export class ProvaModalComponent {
  public ENV = ENV;
  public idiom: any;
  public project: string;
  public version : string;
  public clienteCompanyLogo: string = '/storage/uploads/configs/logoHeader.png';
  public globalUrl: string = '';
  public test: any = '';
  public testOverview: any = ''


  constructor(
    public navParams: NavParams,
    public storage : Storage,
    public viewCtrl: ViewController,
    public toastCtrl: ToastController,
    public httpService: HttpServiceProvider,
    public loadingCtrl: LoadingController,
    private dom: DomSanitizer,
    private iab: InAppBrowser
  ) {

    this.test = this.navParams.get('test')

    storage.get('GlobalUrl').then((value) => {
      this.globalUrl = value;
    })
  }

  ionViewDidLoad() {
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

  getProva(response_id, test_id){
    this.storage.get('clienteId').then((user_id) => {
      const data = {
        user_id,
        response_id,
        test_id
      }

      let loading = this.loadingCtrl.create({
        content: 'Espere...'
      });

      loading.present();
      this.httpService.getAll('/api/testes/get-answers', data, 'get').subscribe((result: any)=>{
        this.testOverview = result.map((teste) => {
          return {...teste, 
            user_answer: teste.tipo == 'UPLOAD' ? `${this.globalUrl}/storage/${teste.user_answer[0]}` : teste.user_answer
          }
        })
        loading.dismiss();
      })
    });
  }

  ngOnInit(){
    this.storage.get('Idiom').then((value) => {
      this.idiom = value;
    });
    this.getProva(this.test.response_id, this.test.test_id)
  }

  confirm(){
    this.viewCtrl.dismiss();
  }
  
  cancel(){
    this.viewCtrl.dismiss();
  }

  sanitizer(url) {
    return this.dom.bypassSecurityTrustResourceUrl(url);
  }
}
