import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { IonicPage, ModalController, LoadingController, NavController, NavParams, Slides, Platform, ToastController, ActionSheetButton, ActionSheet, ActionSheetController, ViewController } from 'ionic-angular';
import { HttpServiceProvider } from '../../providers/http-service/http-service';
import { environment as ENV } from '../../environments/environment';
import moment from 'moment'

@IonicPage({
  name: 'results-page'
})
@Component({
  selector: 'page-results',
  templateUrl: 'results.html',
})
export class ResultsPage {
  public ENV = ENV;
  public titleTesteira: string = '';
  public complementTitle: string = '';
  public globalUrl: string = '';
  public clienteCompanyLogo: string = '/storage/uploads/configs/logoHeader.png';
  public version : string;
  public idiom: string = '';
  public project = '';
  public tests = [];
  public testType : string = 'scoreable';
  public questionaries = [];
  public mediaPontos: any = '-';
  public posicaoRanking: any = '-';
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public storage: Storage,
    public toastCtrl: ToastController,
    public modalCtrl: ModalController,
    public http: HttpServiceProvider
  ) {
    storage.get('GlobalUrl').then((value) => {
      this.globalUrl = value;
    });
  }
  ngOnInit(){
    this.storage.get('Project').then((value)=>{
      this.project = value;
      /*PROJETOS:
        marketing-house
        edicom
        vcc
      */
    });

    this.storage.get('Idiom').then((value) => {
      this.idiom = value;
    })
  }
  
  
  ionViewDidEnter(){
    this.storage.get('Project').then((value)=>{
      this.project = value;
      /*PROJETOS:
        marketing-house
        edicom
        vcc
      */
    });

    this.tests = [];
    this.questionaries = [];

    this.storage.get("AppConfig").then((config) => {
      if (config.internoApp6 && config.internoApp6['text']){
        this.titleTesteira = config.internoApp6['text'];
      }else{
        this.titleTesteira = this.idiom == '01' ? 'Agenda' : 'Mi agenda';
      }
    })
    this.complementTitle = '';

    this.storage.get('LayoutVersion').then((value) => {
      this.version = value;
    });

    this.storage.get('clienteCompanyId').then((companyId) => {
      this.storage.get('clienteId').then((clienteId) => {
        
        let loading = this.loadingCtrl.create({
          content: 'Espere...'
        });

        loading.present();



          
          this.http.getAll('/api/testes/get-test-informations',{ company_id: companyId, user_id: clienteId },'get')
          .subscribe((data)=>{
            data = data.map((d) =>{
              return {
                ...d,
                created_at: d.created_at ? moment(d.created_at).locale('pt-br').format('DD/MMM') : null
              }
            })
  
            this.tests = data.filter(d => d.isScoreable == 1)
            this.questionaries = data.filter(d => d.isScoreable == 0)

            this.http.getAll('/api/testes/get-score-ranking',{ company_id: companyId},'get')
            .subscribe((rank)=>{
              console.log("RANK -> ",rank)
    
              if (rank && this.tests && this.tests.length > 0){
                const myScore = rank.find(r => r.user_id == clienteId) ? rank.find(r => r.user_id == clienteId) : '-'
                this.mediaPontos = myScore ?  parseFloat(myScore.media_pontuacao).toFixed(1) : ''
                this.posicaoRanking = myScore ? `${(rank.map(d => d.user_id).indexOf(myScore.user_id)+1)}°` : '-'
              }
              loading.dismiss();
            })
          })
        
      })
    })
    
  }
  openModal(test){

    let provaModal = this.modalCtrl.create('prova-modal',{test});
    provaModal.onDidDismiss(data => {
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
    provaModal.present();
  }

}
