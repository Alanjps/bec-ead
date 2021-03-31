import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import moment from 'moment';
import { environment as ENV } from '../../environments/environment';

@IonicPage({
  name: 'user-form-modal'
})

@Component({
  selector: 'user-form',
  templateUrl: 'user-form.html'
})
export class UserFormComponent {
  public ENV = ENV;
  public credential: any;
  public idiom: any;
  public password2: string;
  public project: string;
  public version : string;
  public globalUrl: string = '';

  constructor(
    public navParams: NavParams,
    public storage : Storage,
    public viewCtrl: ViewController,
    public toastCtrl: ToastController,
  ) {
    this.credential = navParams.data;
    if (this.credential.password)
      this.password2 = this.credential.password;

    storage.get('GlobalUrl').then((value) => {
      this.globalUrl = value;
    });
  }

  ionViewDidLoad() {
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
  }

  ngOnInit(){
    this.storage.get('Idiom').then((value) => {
      this.idiom = value;
    });
  }

  confirm(){
    var mensagemRetorno: string = '';
    if(!this.credential.nome)
      mensagemRetorno = 'Favor preencher o campo nome';
    else if(!this.credential.whatsapp)
      mensagemRetorno = 'Favor preencher o campo Telefone';
    else if(!this.credential.nascimento && this.project != "edicom")
      mensagemRetorno = 'Favor preencher o campo Data de nascimento';
    else if(!this.credential.email)
      mensagemRetorno = 'Favor preencher o campo e-mail';
    else if(!this.credential.password)
      mensagemRetorno = 'Favor preencher o campo senha';
    else if (!this.password2)
      mensagemRetorno = 'Favor preencher o campo de confirmação de senha';
    else if (this.password2 != this.credential.password)
      mensagemRetorno = 'Senha e senha de confirmação precisam ser iguais';

    if(mensagemRetorno != ''){
      let toast = this.toastCtrl.create({
        message: mensagemRetorno,
        duration: 3000,
        position: 'top'
      });
      toast.present();
    }else{
      this.viewCtrl.dismiss(this.credential);
    }
  }
  
  cancel(){
    this.viewCtrl.dismiss();
  }
}
