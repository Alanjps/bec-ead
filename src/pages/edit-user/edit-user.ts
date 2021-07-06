import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController, ActionSheetController, ModalController } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';
import { Storage } from '@ionic/storage';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { AuthProvider } from '../../providers/auth/auth';
import { HttpServiceProvider } from '../../providers/http-service/http-service';
import { DatePipe } from '@angular/common';
import moment from 'moment';
import { AngularCropperjsComponent } from 'angular-cropperjs';
import { environment as ENV } from '../../environments/environment' ;

@IonicPage({
  name: 'edit-user-page'
})

@Component({
  selector: 'page-edit-user',
  templateUrl: 'edit-user.html',
})
export class EditUserPage {
  public credential: any = {
    id:'',
    documento:'',
    password:'',
    confirmPassword:'',
    nome:'',
    email:'',
    nascimento:'',
    whatsapp:'',
    empresa:'',
    thumb:'',
    profile_id:'',
    company_id:''
  };

  public ENV = ENV;
  public habilitaCampos:boolean = true;
  public clienteThumb:string = "";
  public foto:string="";
  public fotoTmp:boolean = true;
  public base64Image:string="";

  public dataNascimento: Date;

  hide:boolean = false;
  hideEmpresa:boolean = true;
  public version : String;

  public titleTesteira: string = '';
  public complementTitle: string = '';
  public createdCode: string = null;
  public globalUrl: string = '';
  public idiom: string = '';
  public project: string;
  public dateToShow: string;
  public showQRCode: boolean = false;
  public showQRCodeBox: boolean = false;

  @ViewChild('angularCropper') public angularCropper: AngularCropperjsComponent;

  public cropperOptions = null;
  public originalBase64 = null;
  public croppedImage = null;
  public myImage = null;
  public scaleValX = 1;
  public scaleValY = 1;
  public showCroppedImage = false;
  public additionalFields = null;
  public clienteCompanyLogo: string = '/storage/uploads/configs/logoHeader.png';

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public toastCtrl: ToastController,
    public authService: AuthProvider,
    public httpService: HttpServiceProvider,
    public camera: Camera,
    public storage : Storage,
    public DomSanitizer: DomSanitizer,
    public datePipe : DatePipe,
    public loadingCtrl : LoadingController,
    public actionSheetCtrl: ActionSheetController,
    public modalCtrl: ModalController,
  ) {
    storage.get('GlobalUrl').then((value) => {
      this.globalUrl = value;
    })
    if(this.navParams.get('first') == 'true' ){
      this.habilitaCampos = false;
    }
    this.storage.get('clienteNome').then((valor) => {
     this.credential.nome = valor;
    });
    this.storage.get('clienteId').then((valor) => {
      this.credential.id = valor;
    });
    this.storage.get('clienteDocumento').then((valor) => {
      this.credential.documento = valor;
    });
    this.storage.get('clienteCompanyId').then((valor) => {
      this.credential.company_id = valor;
    });
    this.storage.get('clienteProfileId').then((valor) => {
      this.credential.profile_id = valor;
    });
    this.storage.get('clienteEmail').then((valor) => {
      this.credential.email = valor;
    });
    this.storage.get('clienteNascimento').then((valor) => {
      this.credential.nascimento = valor;
      //if (valor) this.dateToShow = moment(valor).format("DD/MM/YYYY");
    });
    this.storage.get('clienteSavePassword').then((valor) => {
      this.credential.password = valor;
    });

    this.storage.get('clienteThumb').then((valor) => {
      if (valor){
        this.credential.thumb = valor;
        this.clienteThumb = valor;
        this.fotoTmp = false;
      }
    });

    this.storage.get('clienteWhatsapp').then((valor) => {
      this.credential.whatsapp = valor;
    });

    this.storage.get('clienteDocumento').then((valor) => {
      this.credential.documento = valor;
      this.updateType();
    });

    this.gerarQrCode();

    this.cropperOptions = {
      dragMode: 'crop',
      autoCrop: true,
      movable: true,
      zoomable: true,
      scalable: false,
      autoCropArea: 1,
      viewMode: 2,
      cropBoxResizable: false,
      minContainerWidth: 360,
      minContainerHeight: 360,
      minCanvasWidth:360,
      minCanvasHeight:360,
      minCropBoxWidth:360,
      minCropBoxHeight:360,
    };
  }

  ngOnInit(){
    this.storage.get('Idiom').then((value) => {
      this.idiom = value;
    });

    this.storage.get('clienteId').then((valor) => {
      this.httpService.getAll('/api/usuarios/get-info',{id: valor}).subscribe((result: any) => {
        if(result.success == true){
          this.clienteThumb = result.user[0].thumb
        }
      });
    });

    this.getAdditionalFields();
  }

  ionViewDidEnter(){
    this.storage.get('clienteId').then((valor) => {
      this.httpService.getAll('/api/usuarios/get-info',{id: valor}).subscribe((result: any) => {
        if(result.success == true){
          this.clienteThumb = result.user[0].thumb
        }
      });
    });
  }

  getAdditionalFields(){
    this.httpService.getAll('/api/usuarios/get-additional-fields',null,'get').subscribe((result: any) => {
      if(result){
        this.additionalFields = result;
      }else{
        this.additionalFields = null;
      }
    });
  }

  edit(firstAccess){
    if (firstAccess == true){
      this.credential.firstAccess = true;
    }else{
      this.credential.firstAccess = false;
    }
    let userModal = this.modalCtrl.create('user-form-modal',this.credential);
    userModal.onDidDismiss(data => {
      if (data){
        let loading = this.loadingCtrl.create({
          content: 'Espere...'
        });
        loading.present();
        this.makeRegister();
        this.storage.set('first', false);
        if (this.credential.firstAccess == true)
          this.navCtrl.push('tab-page');
        loading.dismiss();
      }
    });
    userModal.present();
  }

  openHolerite(){

    let holeriteModal = this.modalCtrl.create('holerite-modal',this.credential);
    holeriteModal.onDidDismiss(data => {
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
    holeriteModal.present();
  }

  presentActionSheet() {
    const actionSheet = this.actionSheetCtrl.create({
      title: this.idiom == '01' ? 'Selecione a opção' : 'Seleccione una opción',
      buttons: [
        {
          text: this.idiom == '01' ? 'Câmera' : 'Cámara',
          role: 'destructive',
          handler: () => {
            this.getPic(false, true);
          }
        },{
          text: this.idiom == '01' ? 'Galeria' : 'Galería',
          handler: () => {
            this.getPic(true, false);
          }
        },{
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
          }
        }
      ]
    });
    actionSheet.present();
  }

  gerarQrCode(){
    this.storage.get('clienteNome').then((nome) => {
      this.storage.get('clienteEmail').then((email) => {

        let qrNome = nome == this.credential.nome ? nome : this.credential.nome;
        let qrEmail = email == this.credential.email ? email : this.credential.email;

        this.createdCode = `nome:${qrNome};e-mail:${qrEmail}`
      });
     });
  }

  doLogout() {
    this.storage.get('LayoutVersion').then((value) => {      
      switch(value){
        default:{
          this.navCtrl.setRoot('login-page', { logout: true });
          this.navCtrl.popToRoot();
        }
      }
    });
  }
  /* OCULTA O CAMPO OCUPACAO */
  ngIfCtrl(){
    this.hide = !this.hide;
  }

  ionViewDidLoad() {
    this.storage.get('Project').then((value)=>{
      this.project = value;
      /*PROJETOS:
        marketing-house
        edicom
        ead
        know-house
      */
      if (value == 'full-promo'){
        this.storage.get('clienteCompanyLogo').then((logo) => {
          if(logo) this.clienteCompanyLogo = "/storage/"+logo;
        });
      }
      if (value == 'edicom' || value == 'hkt369') this.showQRCode = true;
    });
    this.storage.get('clienteNome').then((valor) => {
      this.titleTesteira = this.idiom == '01' ? 'Olá '+valor : 'Hola '+valor ;
    });
    
    this.complementTitle = '';
    this.storage.get('LayoutVersion').then((value) => {
      this.version = value;
    });

    if(this.navParams.get('first') == 'true'){
      this.edit(true);
    }
  }

  goBack(){
    this.storage.get('LayoutVersion').then((value)=> {
      switch(value){
        case '02': {
          this.navCtrl.setRoot('list-videos-v02-page');
          break;
        }
        default:{
          this.navCtrl.setRoot('list-videos-page');
        }
      }
    });
  }

  updateType(){
    if(this.credential.documento.length == 18){
      this.hideEmpresa=true;
    }else{
      this.hideEmpresa=false;
    }
  }

  makeRegister(){
    let loading = this.loadingCtrl.create({
      content: 'Espere...'
    });
    loading.present();

    this.authService.register(this.credential).then((result) => {
      loading.dismiss();
      if(result){
        this.credential = result;
        let toast = this.toastCtrl.create({
          message:  this.idiom == '01' ?  'Dados salvos com sucesso!' : 
            this.idiom == '02' ? 'Datos guardados con éxito!' : '',
          duration: 3000,
          position: 'top'
        });

        this.gerarQrCode();
        
        toast.onDidDismiss(() => {
          if(this.navParams.get('first') == 'true'){
            this.navCtrl.push('tab-page');
          }
        });

        toast.present();
      }
    });
  }

  showDownloads(){
    let fileModal = this.modalCtrl.create('download-modal');
    fileModal.present();
  }

  getPic(gallery = false, camera = false){
    let options: CameraOptions;
    if (gallery == true){
      options = {
        quality: 100,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
        sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      }
    }else if(camera == true){
      options = {
        quality: 100,
        //destinationType: this.camera.DestinationType.FILE_URI,
        destinationType: 0,
        targetWidth: 360,
        targetHeight: 360,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
        saveToPhotoAlbum: false,
        allowEdit:false,
      }
    }

    this.camera.getPicture(options).then(async (imageData) => {
      //let newDataURI = gallery == true ? await this.resizedataURL('data:image/png;base64,' + imageData, 120, 100) : 'data:image/png;base64,' + imageData;
      //let newDataURI = 'data:image/png;base64,' + imageData;
      this.originalBase64 = 'data:image/png;base64,' + imageData;

      this.showCroppedImage = true;
      //this.credential.thumb = newDataURI.replace('data:image/png;base64,','');
      //this.clienteThumb = newDataURI;
      //this.makeRegister();
      this.fotoTmp = false;
    }, (err) => {
     // Handle error
    });
  }

  saveCropped(){
    let croppedImgB64String: string = this.angularCropper.cropper.getCroppedCanvas().toDataURL('image/jpeg', (100 / 100));
    this.credential.thumb = croppedImgB64String;
    this.clienteThumb = croppedImgB64String;
    this.showCroppedImage = false;
    this.fotoTmp = false;
    this.makeRegister();
  }

  resetCropped() {
    this.angularCropper.cropper.reset();
  }

  clearCropped() {
    this.angularCropper.cropper.clear();
    this.showCroppedImage = false;
    this.fotoTmp = false;
  }

  moveCropped(x, y) {
    this.angularCropper.cropper.move(x, y);
  }

  rotateCropped() {
    this.angularCropper.cropper.rotate(90);
  }

  zoomCropped(zoomIn: boolean) {
    let factor = zoomIn ? 0.1 : -0.1;
    this.angularCropper.cropper.zoom(factor);
  }

  scaleXCropped() {
    this.scaleValX = this.scaleValX * -1;
    this.angularCropper.cropper.scaleX(this.scaleValX);
  }

  scaleYCropped() {
    this.scaleValY = this.scaleValY * -1;
    this.angularCropper.cropper.scaleY(this.scaleValY);
  }


  /* resizedataURL(base64, wantedWidth, wantedHeight) : any{
    return new Promise(async function(resolve,reject){
        // We create an image to receive the Data URI
        var img = new Image;

        // When the event "onload" is triggered we can resize the image.
        img.onload = function()
        {        
            // We create a canvas and get its context.
            var canvas = document.createElement('canvas');
            var ctx = canvas.getContext('2d');

            // We set the dimensions at the wanted size.
            canvas.width = wantedWidth;
            canvas.height = wantedHeight;

            // We resize the image with the canvas method drawImage();
            ctx.drawImage(img, 0, 0, wantedWidth, wantedHeight);
            var dataURI = canvas.toDataURL();

            // This is the return of the Promise
            resolve(dataURI);
        };

        // We put the Data URI in the image's src attribute
        img.src = base64;
    }); 
  }*/

  ValidaCPF(cpf: string): boolean {

    cpf = cpf.replace('.','').replace('.','').replace('-','');;

    if (cpf == null) {
      return false;
    }
    if (cpf.length != 11) {
      return false;
    }

    if ((cpf == '00000000000') || (cpf == '11111111111') || (cpf == '22222222222') || (cpf == '33333333333') || (cpf == '44444444444') || (cpf == '55555555555') || (cpf == '66666666666') || (cpf == '77777777777') || (cpf == '88888888888') || (cpf == '99999999999')) {
      return false;
    }

    let numero: number = 0;
    let caracter: string = '';
    let numeros: string = '0123456789';
    let j: number = 10;
    let somatorio: number = 0;
    let resto: number = 0;
    let digito1: number = 0;
    let digito2: number = 0;
    let cpfAux: string = '';
    cpfAux = cpf.substring(0, 9);

    for (let i: number = 0; i < 9; i++) {
      caracter = cpfAux.charAt(i);
      if (numeros.search(caracter) == -1) {
          return false;
      }
      numero = Number(caracter);
      somatorio = somatorio + (numero * j);
      j--;
    }

    resto = somatorio % 11;
    digito1 = 11 - resto;
    if (digito1 > 9) {
      digito1 = 0;
    }

    j = 11;
    somatorio = 0;
    cpfAux = cpfAux + digito1;

    for (let i: number = 0; i < 10; i++) {
      caracter = cpfAux.charAt(i);
      numero = Number(caracter);
      somatorio = somatorio + (numero * j);
      j--;
    }

    resto = somatorio % 11;
    digito2 = 11 - resto;

    if (digito2 > 9) {
      digito2 = 0;
    }

    cpfAux = cpfAux + digito2;

    if (cpf != cpfAux) {
      return false;
    }
    else {
      return true;
    }
  }


}
