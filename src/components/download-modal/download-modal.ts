import { Platform, IonicPage, Toast, ActionSheet, ActionSheetButton, ActionSheetController, LoadingController, NavController, NavParams, ToastController, ViewController} from 'ionic-angular';
import { ApplicationRef, Component } from '@angular/core';
import { Attachment } from '../../models/attachment.model';
import { File } from '@ionic-native/file';
import { FileOpener } from '@ionic-native/file-opener';
import { Storage } from '@ionic/storage';
import { environment as ENV } from '../../environments/environment';

@IonicPage({
  name: 'download-modal'
})
@Component({
  selector: 'page-download-modal',
  templateUrl: 'download-modal.html',
})
export class DownloadModal {
  public ENV = ENV;
  private _attachments: Attachment[] = [];
  private readonly _ATTACHMENT_STORAGE_KEY: string = '__MOVERA_ATTACHMENT_STORAGE_KEY';

  public videos: Array<any>;
  public idiom: string = '';
  public project: string;
  public clienteCompanyLogo: string = '/storage/uploads/configs/logoHeader.png';

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public loadingCtrl: LoadingController,
    private storage: Storage,
    private toastCtrl: ToastController,
    private actionSheetCtrl: ActionSheetController,
    private file: File,
    private appRef: ApplicationRef,
    private fileOpener: FileOpener,
    public _platform: Platform,

  ) {}

  ngOnInit(){
    this.storage.get('Project').then((value)=>{
      this.project = value;

      if (value == 'full-promo'){
        this.storage.get('clienteCompanyLogo').then((logo) => {
          if(logo) this.clienteCompanyLogo = "/storage/"+logo;
        });
      }
    });

    this.storage.get('Idiom').then((value) => {
      this.idiom = value;
    })
  }
  close(){
    this.viewCtrl.dismiss();
  }

  ionViewDidEnter() {
    this.storage.get(this._ATTACHMENT_STORAGE_KEY).then((attachments) => {
      if (attachments) {
        this._attachments = attachments;
      }
    }).catch((_) => {
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
          let documentDirectory = this._platform.is('android') ? this.file.dataDirectory : this.file.documentsDirectory;
          this.fileOpener.open(`${documentDirectory}${$attachment.offlineFileName}`, $attachment.mimeType).then(() => {
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
          let documentDirectory = this._platform.is('android') ? this.file.dataDirectory : this.file.documentsDirectory;
          this.fileOpener.open(`${documentDirectory}${$attachment.offlineFileName}`, $attachment.mimeType).then(() => {
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
        let documentDirectory = this._platform.is('android') ? this.file.dataDirectory : this.file.documentsDirectory;
        this.file.removeFile(documentDirectory, $attachment.offlineFileName).then((removeResult) => {
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
}
