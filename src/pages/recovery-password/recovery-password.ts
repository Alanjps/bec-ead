import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import {Storage} from '@ionic/storage';
import { TabsPage } from '../tabs/tabs';
import { environment as ENV } from '../../environments/environment';

@IonicPage({
  name:'recovey-password-page'
})
@Component({
  selector: 'page-recovery-password',
  templateUrl: 'recovery-password.html',
})
export class RecoveryPasswordPage {
  
  public ENV = ENV;
  private credential: any = {
    email:'',
    senha:'',
    nascimento:''
  };
  public project: string;
  public idiom: string = '';
  public version : string;
  public globalUrl: string = '';

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public authService: AuthProvider,
    public toastCtrl : ToastController,
    public loadingCtrl : LoadingController,
    public storage : Storage  
  ) {
    storage.get('GlobalUrl').then((value) => {
      this.globalUrl = value;
    })
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

    this.storage.get('LayoutVersion').then((value) => {
      this.version = value;
    });

    this.storage.get('Idiom').then((value) => {
      this.idiom = value;
    })
  }

  cancelar(){
    this.navCtrl.push('login-page');
  }

  resetPassword(){
    var mensagemRetorno: string = '';
    if(!this.credential.email)
      mensagemRetorno = 'Favor preencher o campo e-mail';
    else if(!this.credential.nascimento)
      mensagemRetorno = 'Favor preencher o campo Data de nascimento';
    else if(!this.credential.senha)
      mensagemRetorno = 'Favor preencher o campo senha';

    if(mensagemRetorno != ''){
      let toast = this.toastCtrl.create({
        message: mensagemRetorno,
        duration: 6000,
        position: 'top'
      });
      toast.present();
    }else{

      let loading = this.loadingCtrl.create({
        content: 'Espere...'
      });
      loading.present();

      this.authService.recoveryPassword(this.credential).then((result) => {
        loading.dismiss();
        if(result){
          this.navCtrl.push(TabsPage);
        }else{
          let toast = this.toastCtrl.create({
            message: 'Dados inválidos. Favor confirmar.',
            duration: 6000,
            position: 'top'
          });
          toast.present();
        }
      });
    }
  }
}
