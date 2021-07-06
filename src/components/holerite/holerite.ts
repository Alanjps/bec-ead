import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController, ToastController, LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import moment from 'moment';
import { environment as ENV } from '../../environments/environment';
import { HttpServiceProvider } from '../../providers/http-service/http-service';
import { DomSanitizer } from '@angular/platform-browser';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@IonicPage({
  name: 'holerite-modal'
})

@Component({
  selector: 'holerite',
  templateUrl: 'holerite.html'
})
export class HoleriteComponent {
  public ENV = ENV;
  public credential: any;
  public idiom: any;
  public project: string;
  public version : string;
  public selectedDate : string = moment().format('YYYY');
  public holerites: any = [];
  public holeriteURL: string = '';
  public clienteCompanyLogo: string = '/storage/uploads/configs/logoHeader.png';
  public globalUrl: string = '';


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
    this.credential = navParams.data;

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

    this.listarHolerites();
  }

  openHolerite(link){
    const browser = this.iab.create(link, '_system');
  }

  limparFiltro(){
    this.selectedDate = null;
    this.selectedDate = moment().format("YYYY")
    this.listarHolerites();
  }

  listarHolerites(){
    this.storage.get('clienteId').then((user_id) => {
      const data = {
        user_id,
        year : this.selectedDate,
      }

      this.holerites = [];

      let loading = this.loadingCtrl.create({
        content: 'Espere...'
      });

      loading.present();
      this.httpService.getAll('/api/holerite/listar', data, 'get').subscribe((result: any)=>{
        result.forEach(async(val) => {
          this.holerites.push(
            {
              ...val, 
              mes: moment(val.date).locale('pt-br').format('MMM'), 
              ano: moment(val.date).format('YYYY'),
              urlLink: await this.getHolerite(val.id)
            }
          );
        });
        loading.dismiss();
      })
    });
  }

  getHolerite = async(id) => {
    return new Promise((resolve, reject)=>{
      this.httpService.getAll(`/api/holerite/get-url/${id}`,{},'get').subscribe((result: any)=>{
        if (result.success){
          resolve(result.url);
        }
      })
    })



  }

  visualizarHolerite(id){
    this.getHolerite(id);
  }

  ngOnInit(){
    this.storage.get('Idiom').then((value) => {
      this.idiom = value;
    });
  }

  confirm(){
    this.viewCtrl.dismiss(this.credential);
  }
  
  cancel(){
    this.viewCtrl.dismiss();
  }

  sanitizer(url) {
    return this.dom.bypassSecurityTrustResourceUrl(url);
  }
}
