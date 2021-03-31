import { IonicPage, Toast, ActionSheet, ActionSheetButton, ActionSheetController, LoadingController, NavController, NavParams, Slides, ToastController, ViewController} from 'ionic-angular';
import { ApplicationRef, Component, ViewChild } from '@angular/core';
import { Attachment } from '../../models/attachment.model';
import { File } from '@ionic-native/file';
import { FileOpener } from '@ionic-native/file-opener';
import { Storage } from '@ionic/storage';

import { Loading } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { environment as ENV } from '../../environments/environment';

@IonicPage({
  name: 'my-downloads'
})
@Component({
  selector: 'page-my-downloads',
  templateUrl: 'my-downloads.html',
})
export class MyDownloadsPage {
  private _attachments: Attachment[] = [];
  private readonly _ATTACHMENT_STORAGE_KEY: string = '__MOVERA_ATTACHMENT_STORAGE_KEY';

  public titleTesteira: string = 'Mis descargas';
  public complementTitle: string = '';
  public version : string;
  public globalUrl: string = '';
  public idiom: string = '';
  public project: string;
  public ENV = ENV;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    private storage: Storage,
    private toastCtrl: ToastController,
    private actionSheetCtrl: ActionSheetController,
    private file: File,
    private appRef: ApplicationRef,
    private fileOpener: FileOpener
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

    this.storage.get('Idiom').then((value) => {
      this.idiom = value;
    })
  }

  ionViewDidEnter() {
    this.storage.get("AppConfig").then((config) => {
      if (config.internoApp4 && config.internoApp4['text']){
        this.titleTesteira = config.internoApp4['text'];
      }else{
        this.titleTesteira = this.idiom == '01' ? 'Downloads' : 'Mis descargas';
      }
    })
    this.complementTitle = '';

    this.storage.get('LayoutVersion').then((value) => {
      this.version = value;
    });
    /*const loading: Loading = this.loadingCtrl.create({
      content: 'Espere...'
    });*/
    //loading.present();
    this.storage.get(this._ATTACHMENT_STORAGE_KEY).then((attachments) => {
      if (attachments) {
        this._attachments = attachments;
        //loading.dismiss();
      }
    }).catch((_) => {
      //loading.dismiss();
      const toast: Toast = this.toastCtrl.create({
        message: 'Houve um erro ao recuperar os itens baixados.',
        duration: 6000,
        position: 'top'
      });
      toast.present();
    });
  }

  openContent($attachment: Attachment) {
    let actions: ActionSheetButton[] = [];
    if ($attachment.isVideo) {
      actions.push({
        icon: 'play',
        text: 'Assistir',
        handler: () => {
          this.fileOpener.open(`${this.file.dataDirectory}${$attachment.offlineFileName}`, $attachment.mimeType).then(() => {
          //  this.fileOpener.open(`${$attachment.onlineUrl}`, $attachment.mimeType).then(() => {
            // TODO
          }).catch((err) => {
            let toast = this.toastCtrl.create({
              duration: 6000,
              position: 'top',
              message: this.idiom == '01' ? 'Não foi possível abrir o arquivo.' : this.idiom == '02' ? 'No es posible abrir el archivo.' : ''
            });
            toast.present();
          });
        }
      });
    } else {
      actions.push({
        icon: 'glasses',
        text: 'Ver',
        handler: () => {
          this.fileOpener.open(`${this.file.dataDirectory}${$attachment.offlineFileName}`, $attachment.mimeType).then(() => {
        //this.fileOpener.open(`${$attachment.onlineUrl}`, $attachment.mimeType).then(() => {
            // TODO
          }).catch((err) => {
            let toast = this.toastCtrl.create({
              duration: 6000,
              position: 'top',
              message: this.idiom == '01' ? 'Não foi possível abrir o arquivo.' : this.idiom == '02' ? 'No es posible abrir el archivo.' : ''
            });
            toast.present();
          });
        }
      });
    }
    actions.push({
      icon: 'trash',
      text: 'Apagar',
      handler: () => {
        $attachment.isDownloading = true;
        $attachment.downloadProgress = 0;
        this.file.removeFile(this.file.dataDirectory, $attachment.offlineFileName).then((removeResult) => {
          if (removeResult.success) {
            $attachment.isDownloading = false;
            $attachment.downloadProgress = 0;
            $attachment.isOffline = false;
            $attachment.localUrl = '';
            $attachment.mimeType = '';
            $attachment.offlineFileName = '';
            this.appRef.tick();
            this._attachments = this._attachments.filter(f => f.id != $attachment.id);
            this.storage.set(this._ATTACHMENT_STORAGE_KEY, this._attachments).then(() => {
              let toast = this.toastCtrl.create({
                duration: 6000,
                position: 'top',
                message: 'O arquivo foi removido.'
              });
              toast.present();
            });
          } else {
            let toast = this.toastCtrl.create({
              duration: 6000,
              position: 'top',
              message: this.idiom == '01' ? 'Não foi possível remover o arquivo.' : this.idiom == '02' ? 'No se pudo eliminar el archivo.' : ''
            });
            toast.present();
          }
        });
      }
    });
    const actionSheet: ActionSheet = this.actionSheetCtrl.create({
      title: 'O que deseja fazer?',
      subTitle: `${$attachment.name}`,
      buttons: actions
    });
    actionSheet.present();
  }

  returnToLogin() {
    this.navCtrl.setRoot(LoginPage, {}, { animate: true });
  }

}
