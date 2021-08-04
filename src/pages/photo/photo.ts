import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController  } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HttpServiceProvider } from '../../providers/http-service/http-service';
import { trigger, style, transition, animate } from '@angular/animations';
import { Camera, CameraOptions } from "@ionic-native/camera";
import { ModalController, ActionSheetController, LoadingController, MenuController } from "ionic-angular";
import { DomSanitizer } from '@angular/platform-browser';
import { environment as ENV } from '../../environments/environment';

import moment from 'moment';

@IonicPage({
  name: 'photo-page'
})
@Component({
  selector: 'page-photo',
  templateUrl: 'photo.html',
  animations: [
    trigger(
      'inOutAnimation', 
      [
        transition(
          ':enter', 
          [
            style({ height: 0, opacity: 0 }),
            animate('1s ease-out', 
                    style({ height: 400, opacity: 1 }))
          ]
        ),
        transition(
          ':leave', 
          [
            style({ height: 400, opacity: 1 }),
            animate('1s ease-in', 
                    style({ height: 0, opacity: 0 }))
          ]
        )
      ]
    )
  ]
})
export class PhotoPage {

  public ENV = ENV;
  public titleTesteira: string = 'Fotos';
  public complementTitle: string = '';
  public version : string;
  public globalUrl: string = '';
  public idiom: string = '';
  public expanded: boolean = false;
  public pics = [];
  public picsOriginal = [];
  public fileUpload: any;
  public categories: any;
  public subcategories: any;
  public imageProject: any;
  public contestEnabled: boolean = false;
  public items : any = [];
  public cont : number = 0;
  public userCategoriesInContest: any = [];
  public user_id: number;
  public user_thumb: string;
  public showFilterV02: boolean = false;
  public categoryExpanded: boolean = false;
  public project: any;

  public iconTrofeu: string = '';
  public iconProfile: string = '';
  public iconFiltroFoto: string = '';
  public iconAddFoto: string = '';
  public iconUserProfile: string = '';
  public observation: string = '';
  public clienteCompanyLogo: string = '/storage/uploads/configs/logoHeader.png';
  
  constructor(
    public storage: Storage,
    public camera: Camera,
    public modalCtrl: ModalController,
    public actionSheetCtrl: ActionSheetController,
    public http: HttpServiceProvider,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController,
    public menu: MenuController,
    public DomSanitizer: DomSanitizer,
  ) {
    storage.get('GlobalUrl').then((value) => {
      this.globalUrl = value;
    })
    menu.enable(true);

    this.storage.get('Platform').then((value)=>{
      switch(value){
        case 'android':
          this.iconTrofeu = '../../assets/imgs/trofeu.png';
          this.iconProfile = '../../assets/imgs/user-profile.png';
          this.iconFiltroFoto = '../../assets/imgs/filtro-foto.png';
          this.iconAddFoto = '../../assets/imgs/inserir-foto.png';
          this.iconUserProfile = './assets/imgs/user-profile.png';
          break;
        case 'ios':
          this.iconTrofeu = './assets/imgs/trofeu.png';
          this.iconProfile = './assets/imgs/user-profile.png';
          this.iconFiltroFoto = './assets/imgs/filtro-foto.png';
          this.iconAddFoto = './assets/imgs/inserir-foto.png';
          this.iconUserProfile = './assets/imgs/user-profile.png';
          break;
      }
    });
  }

  ngOnInit(){
    this.storage.get('Idiom').then((value) => {
      this.idiom = value;
    });

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

    this.getProject();
    //this.getPics();

    this.storage.get('clienteId').then((clienteId) => {
      this.user_id = clienteId;
    });
    this.storage.get('clienteThumb').then((thumb) => {
      this.user_thumb = thumb? thumb : this.iconUserProfile;
    });
  }

  ionViewDidEnter() {
    this.storage.get("AppConfig").then((config) => {
      if (config.internoApp4 && config.internoApp4['text']){
        this.titleTesteira = config.internoApp4['text'];
      }else{
        this.titleTesteira = this.idiom == '01' ? 'Fotos' : 'Fotos';
      }
      
    })
    this.complementTitle = '';

    this.storage.get('LayoutVersion').then((value) => {
      this.version = value;
    }); 
    
    this.items = [];
    this.cont = 0;

    setTimeout(()=>{
      this.getPics();
    },2000)

  }


  getProject(){
    let loading = this.loadingCtrl.create({
      content: 'Espere...'
    });
    loading.present();

    this.storage.get('clienteCompanyId').then((companyId) => {
      this.storage.get('clienteId').then((clienteId) => {
        this.http.getAll('/api/conteudos', { company_id: companyId, user_id: clienteId, type: "ICON4" })
          .subscribe((data:any) => {
            data.forEach((element, index) => {
                data[index].showAulas = false;
                element.lessons.forEach(l => {
                  l['expanded'] = false;
                });
            });

            data.map((d,idx) => {
              if(data.lessons){
                let lessons = d.lessons.filter((l) => l && l.disponivel_em && new Date(l.disponivel_em) <= new Date() || !l.disponivel_em).sort((a,b) => {return a.order - b.order});
                data[idx].lessons = lessons.map((lesson) => {
                  let gotVideo = lesson.contents.filter((e) => e.tipo == 'video').length > 0 ? true : false;
                  return {...lesson, gotVideo}
                });
              }
            })

            if (data.length > 0){
              this.imageProject = data[0];
              this.categories = data[0].categories;
              this.subcategories = data[0].subcategories;
              this.observation = data[0].observation;
              this.contestEnabled = data[0].contest == 0 ? false : true;
            }
            loading.dismiss();
          });
      });
    });
  }

  getPics(){
    let loading = this.loadingCtrl.create({
      content: 'Espere...'
    });
    loading.present();
    this.storage.get('clienteCompanyId').then((companyId) => {
      this.storage.get('clienteId').then((clienteId) => {
        this.http.getAll('/api/projeto/images', {project_id: this.imageProject.id}).subscribe((data:any) => {
          this.pics = data.length ? data.map((p) => {

            const subId = typeof(p.image_subcategory_id) == "object" ? p.image_subcategory_id : JSON.parse(p.image_subcategory_id);

            let subcategoriesArray = [];
            if (subId && this.subcategories && this.subcategories.length > 0  && subId != []){
              subId.map((id) => {
                subcategoriesArray.push(this.subcategories.filter((s) => s.id == id)[0]);
              });
            }
            return{
              ...p,
              created_at: this.idiom == '02' ? moment(p.created_at).locale('es').format('lll') : moment(p.created_at).locale('pt-br').format('lll'),
              user: {...p.user, thumb: p.user && p.user.thumb != null? p.user.thumb : this.iconUserProfile },
              category: this.categories ? 
                this.categories.filter((c) => c.id == p.image_category_id)[0] 
              : null,
              subcategories: subcategoriesArray.length > 0 ? subcategoriesArray : null,
              uploaded_time: this.idiom == '02' ? p.uploaded_time.replace('há','hace') : p.uploaded_time,
              liked: p.likes.length > 0 ? 
                p.likes.filter((f)=>{
                  return f.user_id == clienteId
                }).length > 0 ? true : false
              : false,
              complained: p.complaints.length > 0 ? 
                p.complaints.filter((c)=>{
                  return c.complainer_id == clienteId
                }).length > 0 ? true : false
              : false,
              total_likes: p.likes.length
            }
          }) : null;

          this.picsOriginal = this.pics;

          //verifica em qual categoria o usuario ja esta concorrendo 
          this.userCategoriesInContest = this.pics && this.categories ? this.categories.map((c) => {
            return {
              categoryId: c.id,
              inContest: this.pics.filter((p)=>{
                return p.image_category_id == c.id && p.is_contest == 1 && p.user_id == clienteId
              }).length > 0 ? true : false
            }
          }) : null;

          loading.dismiss();

          if (this.pics)  this.doInfinite();
        });
      });
    });
  }

  doInfinite(infiniteScroll?) {
    setTimeout(() => {
      let intCont = 0;
      for (let i = this.cont; i < this.pics.length; i++) {
        if (intCont < 4){ 
          this.items.push( this.pics[i] );
          this.cont = this.cont + 1;
        }else{
          break;
        }
        intCont ++;
      }

      if (infiniteScroll) infiniteScroll.complete();
    }, 700);
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

  getPic(gallery = false, camera = false){

    let options: CameraOptions;
    if (gallery == true){
      options = {
        quality: 50,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
        sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      }
    }else if(camera == true){
      options = {
        quality: 50,
        destinationType: 0,
/*         targetWidth: 300,
        targetHeight: 400, */
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
        saveToPhotoAlbum: false,
        allowEdit:true,
      }
    }

    this.camera.getPicture(options).then((imageData) => {
      this.fileUpload = "data:image/jpeg;base64," + imageData;

      let photoModal = this.modalCtrl.create('photo-modal', {photo: this.fileUpload, categories: this.categories, subcategories: this.subcategories, observation: this.observation, contestEnabled: this.contestEnabled, userCategoriesInContest: this.userCategoriesInContest });
      photoModal.onDidDismiss(data => {
          if (data.sendFile){
            let loading = this.loadingCtrl.create({
              content: 'Espere...'
            });
            loading.present();
            
            this.storage.get('clienteId').then((clienteId) => {
              
              let formData = new FormData();
              formData.append('image', this.getBlob(imageData, 'mimes:jpeg'));
              formData.append('project_id', this.imageProject.id);
              formData.append('user_id', clienteId);
              formData.append('image_category_id', data.categoryId);
              formData.append('is_contest', data.contest == true ? '1' : '0');
              formData.append('image_subcategory_id', JSON.stringify(data.subcategories));
              formData.append('observation', data.observation);

              this.http.post('/api/projeto/upload',formData, "form-data").subscribe((result:any) => {
                this.items = [];
                this.cont = 0;
                this.getPics();
              });

            });
            loading.dismiss();
          }
      });
      photoModal.present();
    }, (err) => {
      // Handle error
    });
  }

  disablePic(pic){

    if(pic.is_contest == 1){
      let toast = this.toastCtrl.create({
        message: this.idiom == '01' ? "Não é possível remover uma imagem de concurso." : 
        this.idiom == '02' ? "No puedes eliminar una imagen del concurso." : '',
        duration: 3000,
        position: 'top'
      });
      toast.present();
    }else{
      const actionSheet = this.actionSheetCtrl.create({
        title: this.idiom == '01' ? "Deseja realmente apagar a imagem?" : 
        this.idiom == '02' ? "¿De verdad quieres borrar la imagen?" : '',
        buttons: [
          {
            text: this.idiom == '01' ? "Sim" : 
            this.idiom == '02' ? "Si" : '',
            role: 'destructive',
            handler: () => {
              this.http.post('/api/projeto/set-inactive',{id: pic.id, user_id: pic.user_id }).subscribe((result:any) => {
                if (result){
                  let toast = this.toastCtrl.create({
                    message: this.idiom == '01' ? "Foto removida com sucesso." : 
                    this.idiom == '02' ? "Foto removida com sucesso." : '',
                    duration: 3000,
                    position: 'top'
                  });
                  toast.present();
                  this.items = [];
                  this.cont = 0;
                  this.getPics();
                }else{
                  let toast = this.toastCtrl.create({
                    message: this.idiom == '01' ? "Não foi possível remover a imagem." : 
                    this.idiom == '02' ? "No se pudo eliminar la imagen." : '',
                    duration: 3000,
                    position: 'top'
                  });
                  toast.present();
                }
              });
            }
          },
          {
            text: 'Cancelar',
            role: 'cancel',
            handler: () => {
            }
          }
        ]
      });
      actionSheet.present();
    }
  }

  private getBlob(b64Data:string, contentType:string, sliceSize:number= 512) {
    contentType = contentType || '';
    sliceSize = sliceSize || 512;

    let byteCharacters = atob(b64Data);
    let byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
        let slice = byteCharacters.slice(offset, offset + sliceSize);

        let byteNumbers = new Array(slice.length);
        for (let i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
        }

        let byteArray = new Uint8Array(byteNumbers);

        byteArrays.push(byteArray);
    }

    let blob = new Blob(byteArrays, {type: contentType});
    return blob;
  }

  getDetails(){
    this.expanded = !this.expanded;
  }

  setLiked(pic){
    this.storage.get('clienteId').then((clienteId) => {
      this.http.post('/api/likes/save',{user_id:  clienteId, image_id: pic.id},'').subscribe((result:any) => {
        this.pics = this.pics.map((p) => {
          let total = p.total_likes + 1;
          return p.id == pic.id? {...p, liked: true, total_likes: total} : p
        });
        this.picsOriginal = this.pics;
        this.items = this.items.map((i) => {
          let total = i.total_likes + 1;
          return i.id == pic.id? {...i, liked: true, total_likes: total} : i
        })
      });
    });
  }

  alertMessage(type){
    let message = "";
    if (type == 1) 
      message = this.idiom == '01' ? "Você não pode curtir a própria imagem." : 
      this.idiom == '02' ? "No puedes votar a tu propia foto." : '';
    else if(type == 2) 
      message =  this.idiom == '01' ? "Não é possível descurtir uma imagem." : 
      this.idiom == '02' ? "No es posible desmarcar una foto." : '';
    else if(type == 3)
      message = this.idiom == '01' ? "Sua denúncia já foi enviada e está em análise." : 
      this.idiom == '02' ? "Tu denuncia ya has sido enviada y estás en revisión." : '';

    const alert = this.alertCtrl.create({
      title: this.idiom == '01' ? "Atenção!" : 
      this.idiom == '02' ? "¡Atención!" : '',
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
  }

  filterPics(category){
    let loading = this.loadingCtrl.create({
      content: 'Espere...'
    });
    loading.present();

    this.items = [];
    this.cont = 0;
    this.pics = this.picsOriginal;
    if (category != "all" && category != "contest" && category != "me") {
      this.pics = this.pics.filter((i) => {
        return i.image_category_id == category.id
      });
    }
    if (category == "contest"){
      this.pics = this.pics.filter((i) => {
        return i.is_contest == 1
      }).sort((a, b) => {
        if (a.total_likes < b.total_likes) {
          return 1;
        }
        if (a.total_likes > b.total_likes) {
          return -1;
        }
        return 0;
      });
    }
    if (category == "me"){
      this.storage.get('clienteId').then((clienteId) => {
        this.pics = this.pics.filter((i) => {
          return i.user_id == clienteId
        });
      });
    }
    this.showFilterV02 = false;
    this.doInfinite();
    loading.dismiss();

    let filterTitle = '';
    if (category == "all" )
      filterTitle =  this.idiom == '02' ? 'Filtro eliminado' : 'Filtro removido';
    else if(category == "contest" )
      filterTitle = this.idiom == '02' ? 'Filtro activo: fotos del concurso' : 'Filtro ativo: fotos de concurso';
    else if(category == 'me')
      filterTitle = this.idiom == '02' ? 'Filtro activo: fotos del concurso' : 'Filtro ativo: minhas fotos';
    else
      filterTitle = this.idiom == '02' ? `Filtro activo: ${category.title}`: `Filtro ativo: ${category.title}`;


    let toast = this.toastCtrl.create({
      message:  filterTitle,
      duration: 2000,
      position: 'top'
    });
    toast.present();

  }

  setComplaint(pic) {
    const prompt = this.alertCtrl.create({
      title: this.idiom == '01' ? "Atenção!" : 
      this.idiom == '02' ? "¡Atención!" : '',
      message: this.idiom == '01' ? "Você realmente deseja fazer uma denúncia? Caso positivo, por favor, preencha o campo abaixo com os motivos e clique em 'enviar' que um de nossos curadores irá analisar a sua denúncia." : 
      this.idiom == '02' ? "¿De verdad quieres hacer una queja? Si es así, completa el campo con los motivos y haga clic en 'enviar' y uno de nuestros gerentes analizará su queja." : '',
      inputs: [
        {
          name: 'text',
          placeholder: this.idiom == '01' ? "Motivação" : 
          this.idiom == '02' ? "Motivación" : ''
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
        },
        {
          text: 'Enviar',
          handler: data => {
            if (!data.text || data.text.trim() == ''){
              let toast = this.toastCtrl.create({
                message: this.idiom == '01' ? "É preciso inserir o motivo da denúncia." : 
                this.idiom == '02' ? "Debe ingresar el motivo de la queja." : '',
                duration: 3000,
                position: 'top'
              });
              toast.present();
            }else{
              this.sendComplaint(pic, data.text)
            }
          }
        }
      ]
    });
    prompt.present();
  }


  sendComplaint(pic, description){
    this.storage.get('clienteId').then((clienteId) => {
      this.http.post('/api/complaint/save',{complainer_id: clienteId, image_id: pic.id, description: description},'').subscribe((result:any) => {
        
        this.picsOriginal = this.picsOriginal.map((p) => {
          return p.id == pic.id ? {...p, complained: true} : p
        })

        this.filterPics('all');
        
        let toast = this.toastCtrl.create({
          message: this.idiom == '01' ? "A sua denúncia foi enviada com sucesso." : 
          this.idiom == '02' ? "Su queja ha sido enviado con éxito." : '',
          duration: 3000,
          position: 'top'
        });
        toast.present();
      });
    });
  }

  filterPicsV02(){
    this.showFilterV02 = !this.showFilterV02;
    this.categoryExpanded = false;
  }
}
