import { ApplicationRef, Component, ViewChild } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { IonicPage, ModalController, LoadingController, NavController, NavParams, Slides, Platform, ToastController, ActionSheetButton, ActionSheet, ActionSheetController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { HttpServiceProvider } from '../../providers/http-service/http-service';
import { Attachment } from '../../models/attachment.model';
import { FileTransfer, FileTransferError, FileTransferObject } from '@ionic-native/file-transfer';
import { File, FileEntry } from '@ionic-native/file';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { FileOpener } from '@ionic-native/file-opener';
import { environment as ENV } from '../../environments/environment';

@IonicPage({
  name: 'list-videos-page-v04'
})
@Component({
  selector: 'page-list-videos-v04',
  templateUrl: 'list-videos-v04.html',
})
export class ListVideosV04Page {
  public ENV = ENV;
  public videos: Array<any>;
  @ViewChild(Slides) slides: Slides;
  @ViewChild('videoPlayer') mVideoPlayer: any;

  public tipoCliente;

  expItems: any = [];
  public titleTesteira: string = '';
  public complementTitle: string = '';

  // ***
  public attachments: Attachment[] = [];
  public offlineAttachments: Attachment[] = [];
  private readonly _ATTACHMENT_STORAGE_KEY: string = '__MOVERA_ATTACHMENT_STORAGE_KEY';
  // ***

  public exibirEmbed: boolean = false;
  public urlEmbed: SafeResourceUrl;
  public exibirVideo: boolean = false;
  public exibirThumb: boolean = false;
  public playVideo: boolean = false;

  public globalUrl: string = '';
  public version : string;
  public exibirNota: boolean = false;
  public nota: any;
  public fazerTeste: boolean = true;
  public hasCertificado: boolean = false;
  public urlCertificado: string;
  public exibirBoxTeste: boolean = false;
  public idiom: string = '';
  public project: string;
  public notaMaxima: any = null;

  public iconSuccess: string = '';
  public iconFailure: string = '';
  public iconTryAgain: string = '';
  public iconPlay: string = '';
  public iconConcluido: string = '';
  public clienteCompanyLogo: string = '/storage/uploads/configs/logoHeader.png';

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private dom: DomSanitizer,
    public authService: AuthProvider,
    public http: HttpServiceProvider,
    public loadingCtrl: LoadingController,
    public storage: Storage,
    private fileTransfer: FileTransfer,
    private appRef: ApplicationRef,
    public _platform: Platform,
    private file: File,
    public toastCtrl: ToastController,
    public modalCtrl: ModalController,
    private fileOpener: FileOpener,
    private actionSheetCtrl: ActionSheetController,
    public alertCtrl: AlertController  
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
  
  presentModal(item) {
    let videoModal = this.modalCtrl.create('list-videos-modal', item);
/*     videoModal.onDidDismiss(data => {
    }); */
    videoModal.present();
  }

  sanitizer(vid) {
    return this.dom.bypassSecurityTrustResourceUrl(vid);
  }

  showCertificado(lesson){
    this.videos = this.videos.map((projeto,idx)=>{
      if (lesson.projectId == projeto.id){
        let lesson
        projeto.lessons = projeto.lessons.map((lesson) => {
          let licao = lesson;
          if (lesson.gotCertified == false && lesson.forCertificate == true)
            licao.gotCertified = true
          return licao;            
        });

      }
      return projeto;
    });
  }
  
  expandItem(item){
     this.videos.map((video) => {
      video.lessons.map((listItem) => {
        if(item == listItem){
            listItem.expanded = !listItem.expanded;
        } else {
            listItem.expanded = false;
        }
        return listItem;
      });
     });
     this.openVideo(item);
  }

  public hasAnyAditionalContent() {
    return this.attachments.some(a => !a.isVideo);
  }

  openVideo(lesson){
    this.attachments = [];
    this.storage.get(this._ATTACHMENT_STORAGE_KEY).then((attachments) => {
      this.offlineAttachments = attachments;
      //let hasVideo = false;

      for (var i in lesson.contents) {
        let hasVideo = false;

        if (lesson.contents[i].tipo == 'video') {
          hasVideo = true;
          this.exibirVideo = true; 
        }
        if (lesson.contents[i].url) {
          this.exibirEmbed = true;
          this.exibirVideo = false;
        }
        
        const anexo: any = lesson.contents[i];
        let attachment: Attachment = {
          id: anexo.id,
          isDownloading: false,
          isOffline: false,
          localUrl: '',
          onlineUrl: anexo.path,
          name: anexo.titulo,
          mimeType: '',
          downloadProgress: 0,
          offlineFileName: '',
          isVideo: anexo.tipo == 'video',
          downloadPermission: anexo.publicado ? anexo.publicado : 0,
        };
        if (this.offlineAttachments && this.offlineAttachments.some(a => a.id == attachment.id)) {
          let originalAttachment: Attachment = this.offlineAttachments.find(f => f.id == attachment.id);
          attachment.isOffline = true;
          attachment.localUrl = originalAttachment.localUrl;
          attachment.mimeType = originalAttachment.mimeType;
          attachment.offlineFileName = originalAttachment.offlineFileName;
        }
        this.attachments.push(attachment);
        //
        if (hasVideo == false)
        this.exibirVideo = false; 
      }
    });
  }

  ionViewDidEnter(){
    this.storage.get('Project').then((value)=>{
      this.project = value;
      if (value == 'full-promo'){
        this.storage.get('clienteCompanyLogo').then((logo) => {
          if(logo) this.clienteCompanyLogo = "/storage/"+logo;
        });
      }
    });

    this.storage.get("AppConfig").then((config) => {
      if (config.internoApp5 && config.internoApp5['text']){
        this.titleTesteira = config.internoApp5['text'];
      }else{
        this.titleTesteira = this.idiom == '01' ? 'Agenda' : 'Mi agenda';
      }
    })
    this.complementTitle = '';

    this.storage.get('LayoutVersion').then((value) => {
      this.version = value;
    });

    let loading = this.loadingCtrl.create({
      content: 'Espere...'
    });
    loading.present();
    this.storage.get('clienteCompanyId').then((companyId) => {
      this.storage.get('clienteId').then((clienteId) => {
        this.http.getAll('/api/conteudos', { company_id: companyId, user_id: clienteId, type: "ICON5" })
          .subscribe((data:any) => {
            loading.dismiss();
            data.forEach((element, index) => {
              if (element.content_only != 1){
                data[index].showAulas = false;

                if(element.content_only != 1 )element.lessons.forEach(l => {
                  l['expanded'] = false;
                });
              }
            });
            
            data.map((d,idx) => {
              if (d.content_only != 1){
                //let lessons = d.lessons.filter((l) => l && l.disponivel_em && new Date(l.disponivel_em) <= new Date() || !l.disponivel_em).sort((a,b) => {return a.order - b.order});
                /* let lessons = d.lessons.sort((a,b) => {return a.order - b.order}); */
                data[idx].lessons = d.lessons.map((lesson) => {
                  let gotVideo = lesson.contents.filter((e) => e.tipo == 'video').length > 0 ? true : false;
                  let youtubeUrl =  "";
                  if (gotVideo == false) {
                    lesson.contents.map((e) => {if (e.path !== '' && e.tipo != 'appli') {youtubeUrl = e.path}});
                  }
                  return {...lesson, gotVideo, youtubeUrl, forCertificate: false, projectId: data[idx].id}
                });
  
                 data[idx].lessons.push({
                  titulo: "Certificado",
                  forCertificate: true,
                  gotCertified: false,
                  expanded: false,
                  contents: [],
                  projectId: data[idx].id
                });
              }
              
            });
            this.videos = data;
            this.videos = this.videos.sort((a,b) => {
              if (a.titulo > b.titulo) {
                return 1;
              }
              if (a.titulo < b.titulo) {
                return -1;
              }
              // a must be equal to b
              return 0;
            })
          });
      });
    });
  }

  goToPrevSlide() {
    this.slides.slidePrev();
  }

  goToNextSlide() {
    this.slides.slideNext();
  }

  openProject(projeto){

    this.videos.forEach((item:any, index) => {
      if(item.id == projeto.id){
        if(this.videos[index].showAulas) {
          this.videos[index].showAulas = false;
          this.complementTitle = '';
        }else{
          this.videos[index].showAulas = true;
          this.complementTitle = projeto.tituloApp? projeto.tituloApp : projeto.titulo;
        }
      }
    });
  }

  cleanVideo(){
    this.playVideo = false;
    this.exibirVideo = false;
    this.exibirEmbed = false;
  }

  openChat(){
    this.navCtrl.push('chat-page');
  }
 
}
