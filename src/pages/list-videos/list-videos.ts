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

@IonicPage({
  name: 'list-videos-page'
})
@Component({
  selector: 'page-list-videos',
  templateUrl: 'list-videos.html',
})
export class ListVideosPage {
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
  private alertTitle: string = "";
  private alertSubtitle: string = "";

  public iconSuccess: string = '';
  public iconFailure: string = '';
  public iconTryAgain: string = '';
  public iconPlay: string = '';
  public iconConcluido: string = '';

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
    });

    this.storage.get('Idiom').then((value) => {
      this.idiom = value;
    })

    this.storage.get('Platform').then((value)=>{
      switch(value){
        case 'android':
          this.iconSuccess = '../../assets/imgs/emoji-success.png';
          this.iconTryAgain = '../../assets/imgs/emoji-wink.png';
          this.iconFailure = '../../assets/imgs/emoji-sad.png';
          this.iconPlay = '../../assets/imgs/icon-play.png';
          this.iconConcluido = '../../assets/imgs/icon-concluido.png';
          break;
        case 'ios':
          this.iconSuccess = './assets/imgs/emoji-success.png';
          this.iconTryAgain = './assets/imgs/emoji-wink.png';
          this.iconFailure = './assets/imgs/emoji-sad.png';
          this.iconPlay = './assets/imgs/icon-play.png';
          this.iconConcluido = './assets/imgs/icon-concluido.png';
          break;
      }
    });
  }
  
  presentModal(item) {
    let videoModal = this.modalCtrl.create('list-videos-modal', item);
/*     videoModal.onDidDismiss(data => {
    }); */
    videoModal.present();
  }

  openQuiz(lesson) {
    let profileModal = this.modalCtrl.create('quiz', { lesson_id: lesson.id });
    profileModal.onDidDismiss(data => {
      this.fazerQuiz(lesson, true);
    });
    profileModal.present();
  }

  sanitizer(vid) {
    return this.dom.bypassSecurityTrustResourceUrl(vid);
  }

  cleanTeste(){
    this.fazerTeste = true;
    this.exibirNota = false;
    this.nota = null;
    this.hasCertificado = false;
    this.urlCertificado = '';
  }

  fazerQuiz(lesson, showAlert?) {
    let lesson_id = lesson.id;
    let user_id = 0;
    this.storage.get('clienteId').then((valor) => {
      user_id = valor;
      let vars: any = {
        user_id: valor,
        lesson_id: lesson.id
      };

      this.authService.request('/api/testes/resultado', vars).then((result) => {
        if (result) {
          this.exibirNota = true;
          this.nota = result.pontuacao_final;
          this.notaMaxima = result.test.maxPontos;
          if (result.is_aprovado == '1') {
            this.checkFinishedProjects();

            this.alertTitle = "Parabéns!";
            this.alertSubtitle = "<p>Você passou no teste.</p><br/><img class=\"emoji\" src=\""+this.iconSuccess+"\" />";
            //ATINGIU E NÃO PRECISA MAIS FAZER O TESTE
            this.fazerTeste = false;

            //SE TEM CERRTIFICADO
            if (result.certificado && result.test.showCertificado == 1) {
              this.hasCertificado = true;
              this.urlCertificado = result.certificado['path'];
              this.showCertificado(lesson);
            }
          }else{
            if ( result.test.max_tentativas == 0 || result.totalTentativas < result.test.max_tentativas){
              this.alertTitle = "Você não passou no teste.";
              this.alertSubtitle = "<p>Não desista! Tente novamente.</p><br/><img class=\"emoji\" src=\""+this.iconTryAgain+"\" />";
            }else{
              this.alertTitle = "Você não passou no teste.";
              this.alertSubtitle = "<p>Entre em contato com um curador, ele estará à disposição para ajudar!</p><br/><img class=\"emoji\" src=\""+this.iconFailure+"\" />";
              this.fazerTeste = false;
            }
          }
        } else {
          /**NÃO FEZ O TESTE */
        }
        if ( showAlert && showAlert == true && lesson.showEmoji == 1 ) this.showAlert();

      });
    });
  }

  showAlert() {
    const alert = this.alertCtrl.create({
      title: this.alertTitle,
      subTitle: this.alertSubtitle,
      buttons: ['OK']
    });
    alert.present();
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
  
  existeTeste(lesson) {
    this.exibirBoxTeste = false;
    
    let vars: any = {
      lesson_id: ''
    };
    vars.lesson_id = lesson.id;
    this.authService.request('/api/testes/isExist', vars).then((result) => {
      if (result) {
        this.exibirBoxTeste = true;
        this.cleanTeste();
        this.fazerQuiz(lesson);
      }
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
     this.existeTeste(item);
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

  public downloadContent($attachment: Attachment) {
    $attachment.isDownloading = true;
    $attachment.downloadProgress = 0;
    const fileTransferObj: FileTransferObject = this.fileTransfer.create();
    const fileName: string = $attachment.onlineUrl.split('/').slice(-1)[0];
    fileTransferObj.onProgress((evt) => {
      $attachment.downloadProgress = Math.round((evt.loaded / evt.total) * 100);
      this.appRef.tick();
    });
    let documentDirectory = this._platform.is('android') ? this.file.dataDirectory : this.file.documentsDirectory;
    //fileTransferObj.download($attachment.onlineUrl, `${this.file.dataDirectory}${fileName}`)
    fileTransferObj.download($attachment.onlineUrl, `${documentDirectory}${fileName}`)
      .then((fe: FileEntry) => {
        fe.file((meta) => {
          $attachment.mimeType = meta.type;
          $attachment.isDownloading = false;
          $attachment.downloadProgress = 0;
          $attachment.isOffline = true;
          $attachment.localUrl = fe.nativeURL;
          $attachment.offlineFileName = fileName;
          this.appRef.tick();
          if (!this.offlineAttachments) {
            this.offlineAttachments = [];
          }
          this.offlineAttachments.push($attachment);
          this.storage.set(this._ATTACHMENT_STORAGE_KEY, this.offlineAttachments).then(() => {
            let toast = this.toastCtrl.create({
              duration: 6000,
              position: 'top',
              message: `${$attachment.name} foi baixado com sucesso.`
            });
            toast.present();
          });
        });
        this.openContent($attachment);
      })
      .catch((err: FileTransferError) => {
        $attachment.isDownloading = false;
        $attachment.downloadProgress = 0;
        $attachment.isOffline = false;
        let toast = this.toastCtrl.create({
          duration: 6000,
          position: 'top'
        });
        if (err.code == 3) {
          toast = toast.setMessage('Houve um erro ao baixar o arquivo. Verifique a conexão de rede.');
        } else {
          toast = toast.setMessage('Houve um erro desconhecido ao baixar o arquivo.');
        }
        toast.present();
      });


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
    this.storage.get("AppConfig").then((config) => {
      if (config.internoApp3 && config.internoApp3['text']){
        this.titleTesteira = config.internoApp3['text'];
      }else{
        this.titleTesteira = this.idiom == '01' ? 'Agenda' : 'Mi agenda';
      }
    })
    this.complementTitle = '';

    this.storage.get('LayoutVersion').then((value) => {
      this.version = value;
    });

    this.storage.get('AvailableDefaultProjects')
    .then((value)=>{
      if (value != null && value.length > 0){
        this.videos = value;
      }else{
        this.storage.get('clienteCompanyId').then((companyId) => {
          this.storage.get('clienteId').then((clienteId) => {
            this.videos = [];

            this.http.getAll('/api/projects-ids', { company_id: companyId, user_id: clienteId, type: "DEFAULT" })
            .subscribe(async (ids:any) => {
              ids.map( async(id) => {
              
                let loading = this.loadingCtrl.create({
                  content: 'Espere...'
                });
                loading.present();
                await new Promise((resolve, reject)=>{
                  this.http.getAll('/api/conteudos', { company_id: companyId, user_id: clienteId, type: "DEFAULT", project_id: id})
                  .subscribe((data:any) => {
                    
                    data.forEach((element, index) => {
                        data[index].showAulas = false;
                        element.lessons.forEach(l => {
                          l['expanded'] = false;
                        });
                    });
                    
                    data.map((d,idx) => {
                      //let lessons = d.lessons.filter((l) => l && l.disponivel_em && new Date(l.disponivel_em) <= new Date() || !l.disponivel_em).sort((a,b) => {return a.order - b.order});
                      /* let lessons = d.lessons.sort((a,b) => {return a.order - b.order}); */
                      data[idx].lessons = d.lessons.map((lesson) => {
                        let gotVideo = lesson.contents.filter((e) => e.tipo == 'video').length > 0 ? true : false;
                        let youtubeUrl =  "";
                        if (gotVideo == false) {
                          lesson.contents.map((e) => {if (e.path !== '' && e.tipo != 'appli'  && e.tipo != 'image') {youtubeUrl = e.path}});
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
                    });

                    this.videos.push(data[0]);
                    resolve();
                  });
                });
                this.storage.set('AvailableDefaultProjects',this.videos)
                loading.dismiss();
                this.checkFinishedProjects();
              });
            });
          });
        });
      }
    });
  }

  checkFinishedProjects(){
    if (this.videos.length > 0){
      this.storage.get('clienteId').then(async (valor) => {
        let pidx = 0;

        for(let projeto of this.videos){
          let projectConcluded = true;

          for(let lesson of projeto.lessons){
            if (lesson.forCertificate == false ){
              await new Promise((resolve,reject)=>{
                this.authService.request('/api/testes/resultado', {user_id: valor, lesson_id: lesson.id}).then((result) => {
                  if (result && result.is_aprovado == 0)
                  projectConcluded = false;
                  resolve();
                });
              });
            }
          }
          this.videos[pidx].projectConcluded = projectConcluded;
          pidx++;
        };
      });      
    }
  }

  makeSearch(event) {
    const val = event.target.value;
    this.http.getAll('/api/conteudos', { search: val })
      .subscribe((data:any) => {
        data.forEach((element, index) => {
            data[index].showAulas = false;
        });
        this.videos = data;
      })
  }

  presentLoadingDefault() {
    let loading = this.loadingCtrl.create({
      content: 'Espere...'
    });
    loading.present();
    setTimeout(() => {
      loading.dismiss();
    }, 3000);
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

      this.storage.get('clienteId').then((valor) => {
        item.lessons.forEach((lesson:any, index2) => {
          if (lesson.forCertificate == false) this.authService.request('/api/testes/resultado', {user_id: valor, lesson_id: lesson.id}).then((result) => {
            if (result) {
              if (result.is_aprovado == '1') {
                if (result.certificado && result.test.showCertificado == 1) {
                  this.showCertificado(lesson);
                }
              }
            }
          });
        });
      });
    });
  }

  showVideo(conteudo) {
    if(conteudo.url){
      this.exibirEmbed = true;
      this.exibirVideo = false;
    }else if(conteudo.path){
      this.exibirEmbed = false;
      this.exibirVideo = true;
    }

    this.playVideo = true;

    if (this.exibirVideo == true) {
      setTimeout(() => {
        let video = this.mVideoPlayer.nativeElement
        video.src = conteudo.path;
      }, 500);
    }else if (this.exibirEmbed == true){
      this.urlEmbed = conteudo.url;
    }
  }

  cleanVideo(){
    this.playVideo = false;
    this.exibirVideo = false;
    this.exibirEmbed = false;
  }

  openChat(){
    this.navCtrl.push('chat-page');
  }

  openContent($attachment: Attachment) {
    let actions: ActionSheetButton[] = [];
    
    if ($attachment.isVideo == false) {
      
      actions.push({
        icon: 'glasses',
        text: 'Ver',
        handler: () => {
          let documentDirectory = this._platform.is('android') ? this.file.dataDirectory : this.file.documentsDirectory;
          this.fileOpener.open(`${documentDirectory}${$attachment.offlineFileName}`, $attachment.mimeType).then(() => {
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
      const actionSheet: ActionSheet = this.actionSheetCtrl.create({
        title: 'O que deseja fazer?',
        subTitle: `${$attachment.name}`,
        buttons: actions
      });
      actionSheet.present();
    }
    
  }

  selectAction($attachment: Attachment) {
    let actions: ActionSheetButton[] = [];
    //if ($attachment.isVideo == false) {
      
      actions.push({
        icon: 'glasses',
        text: 'Ver',
        handler: () => {
          let documentDirectory = this._platform.is('android') ? this.file.dataDirectory : this.file.documentsDirectory;
          this.fileOpener.open(`${documentDirectory}${$attachment.offlineFileName}`, $attachment.mimeType).then(() => {
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

      actions.push({
        icon: 'trash',
        text: 'Apagar',
        handler: () => {
          this.removeContent($attachment)
        }
      });

      const actionSheet: ActionSheet = this.actionSheetCtrl.create({
        title: 'O que deseja fazer?',
        subTitle: `${$attachment.name}`,
        buttons: actions
      });
      actionSheet.present();
    //}
  }

  public removeContent($attachment: Attachment) {
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
        this.offlineAttachments = this.offlineAttachments.filter(f => f.id != $attachment.id);
        this.storage.set(this._ATTACHMENT_STORAGE_KEY, this.offlineAttachments).then(() => {
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
    })
  }

}
