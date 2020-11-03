import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, LoadingController, ToastController, Select } from 'ionic-angular';
import { FormBuilder } from '@angular/forms';
import { AuthProvider } from '../../providers/auth/auth';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Storage } from '@ionic/storage';

@IonicPage({
  name: 'quiz'
})

@Component({
  selector: 'quiz',
  templateUrl: 'quiz.html'
})
export class QuizComponent {

  public galleryFile: boolean;
  public indexFile:any;
  public formulario: any = [];
  public fileUpload:any;
  public idiom : string = '';

  @ViewChild('selectFile') selectFile: Select;

  public version : string;
  public globalUrl: string = '';
  public project;

  constructor(    
    public navCtrl: NavController, 
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public viewCtrl: ViewController,
    public toastCtrl : ToastController,
    public loadingCtrl : LoadingController,
    public authService: AuthProvider,
    public storage: Storage,
    public camera: Camera
  ) {

    storage.get('GlobalUrl').then((value) => {
      this.globalUrl = value;
    });
    
    this.loadQuiz();
  }

  loadQuiz(){

    let vars: any = {
      tipo:'',
      lesson_id:''
    };

    let loading = this.loadingCtrl.create({
      content: 'Espere...'
    });
    loading.present();

    vars.lesson_id = this.navParams.get('lesson_id');

    this.authService.request('/api/testes/get', vars).then((result) => {
      loading.dismiss();
      if(result){
        this.formulario = result;
      }else{
        this.viewCtrl.dismiss();
      }
    });
  }

  ionViewDidLoad() {
    this.storage.get('LayoutVersion').then((value) => {
      this.version = value;
    });
    this.storage.get('Idiom').then((value) => {
      this.idiom = value;
    })
    this.storage.get('Project').then((value)=>{
      this.project = value;
    });
  }

  salva(){
    let mensagem='';
    let chave = 0;
    this.formulario.forEach((element, key) => {
      if(element.respostas == ''){
        chave = key +1;
        mensagem = 'Favor responder a questão '+ chave;
      }
    });

    if(mensagem){

      let toast = this.toastCtrl.create({
        message: mensagem,
        duration: 3000,
        position: 'top'
      });
      toast.present();

    }else{
      let loading = this.loadingCtrl.create({
        content: 'Espere...'
      });

      loading.present();

      let vars: any = {
        user_id:'',
        teste: this.formulario
      };

      this.storage.get('clienteId').then((valor) => {
          vars.user_id = valor;
          this.authService.request('/api/testes/responder', vars).then((result) => {
            loading.dismiss();

            if(result){
              let toast = this.toastCtrl.create({
                message: 'Resposta salva com sucesso!',
                duration: 3000,
                position: 'top'
              });
              toast.present();

              toast.onDidDismiss(() => {
                this.fechar();
              });
            }else{
              this.viewCtrl.dismiss();
            }
          });
      });
    }
  }
  fechar(){
    this.viewCtrl.dismiss();
  }

  /****GALERIA E CAMERA */
  async openCamera(index:any) {
    this.indexFile = index;
    const options: CameraOptions = {
      quality: 10,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.CAMERA,
      allowEdit: false
    };
    this.camera.getPicture(options).then(imageData => {
      this.formulario[this.indexFile].respostas = imageData;
      this.fileUpload = "data:image/jpeg;base64," + imageData;
    });
  }

  openSelect(index:any) {
    this.indexFile = index;
    this.selectFile.open();
  }

  openGallery() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    };
    this.camera.getPicture(options).then(imageData => {
        this.formulario[this.indexFile].respostas = "data:image/jpeg;base64," + imageData;
        this.fileUpload = "data:image/jpeg;base64," + imageData;
    });
  }

  openGaleryOrCamera() {
    if (this.galleryFile) {
      this.openGallery();
    } else {
      this.openCamera(1);
    }
  }

}
