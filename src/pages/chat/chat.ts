import { Component, ViewChild } from '@angular/core';
import { Storage } from '@ionic/storage';
import { IonicPage, LoadingController, NavController, NavParams, Slides, ModalController, ViewController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { HttpServiceProvider } from '../../providers/http-service/http-service';
import moment from 'moment';
import { Camera, CameraOptions } from "@ionic-native/camera";
import { v } from '@angular/core/src/render3';
import { PusherServiceProvider } from '../../providers/pusher-service/pusher-service';

@IonicPage({
  name: 'chat-page'
})
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {
  private projects : [any];
  private selectedProject : {} | null = null;
  private selectedProjectId : number | null = null;

  private users : [any] | null;
  private selectedUser : {} | null = null;
  private selectedUserId : number | null = null;
  private userId? : string;

  private messages : any | null;
  private newMessage : string;

  private recents = [];
  private showMessageAllBox : boolean = false;
  private sendAll : boolean = false;
  private search : string = '';

  private ativo : {}; //usuario logado
  private receptivo : {}; //usuario contactado

  private recentUser : number | null = null;
  private firstAccess : boolean = true;

  public titleTesteira: string = '';
  public complementTitle: string = '';

  private version: string;
  public globalUrl: string = '';
  public fileUpload:any;
  public perfilType: number = 3;
  public idiom: string = '';
  public remetentesUnread: any;
  public project: string;

  public showContacts: boolean = false;
  public showChat: boolean = false;

  public motivos: any = [];

  //---------------------------------------------------
  public showMotivosContainer: boolean = false;
  public showRecentUserContainer: boolean = false;
  public showChatContainer: boolean = false;
  public lastMessageId: number = null;
  public lastMessageIdInterval: any;
  public iconProfile: string  = '';
  public iconDefaultMotivos: string = '';

  public pendentChat: any = null;

  @ViewChild(Slides) slides: Slides;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public authService: AuthProvider,
    public http: HttpServiceProvider,
    public loadingCtrl: LoadingController,
    public storage: Storage,
    public camera: Camera,
    public modalCtrl: ModalController,
    public viewCtrl: ViewController,
    private pusher: PusherServiceProvider
  ) {
    clearInterval(this.lastMessageIdInterval);
    
    this.storage.get('Platform').then((value)=>{
      switch(value){
        case 'android':
          this.iconProfile = '../../assets/imgs/user-profile.png';
          this.iconDefaultMotivos = '../../assets/imgs/default-motivo.png';
          break;

        case 'ios':
          this.iconProfile = './assets/imgs/user-profile.png';
          this.iconDefaultMotivos = './assets/imgs/default-motivo.png';
          break;
      }
    });

    storage.get('GlobalUrl').then((value) => {
      this.globalUrl = value;
    });

    this.getMotivos();

    this.pendentChat = navParams.get('pendentChat');

    if (this.pendentChat){
      if(this.pendentChat.length > 1){
        this.getConversasAtivas()
        this.showRecentUsersPage()
      }else{
        this.getConversasAtivas()
        this.goDirectlyToUserMessage(this.pendentChat[0]);
      }

    }else{
      this.showMotivosPage();
    }

  }

  ionViewDidLoad(){

    this.storage.get('clienteId').then((valor) => {
      const channel = this.pusher.init();
      channel.bind('App\\Events\\MessageSent', (data) => {
        if (data && data.message && data.message.remetente_id == this.selectedUserId){
          if (this.perfilType == 3 && data.message.notification == false){

            let newMessageReceived = {
              remetente:{
                id: data.message.remetente_id
              },
              notification: data.message.notification == false ? 0 : 1,
              type:  data.message.mensagem.substring(0, 11) == 'data:image/' ? 'file' : null,
              mensagem_formatada: data.message.mensagem_formatada,
              created_at: moment(data.message.created_at).locale('pt-br').format('lll'),
            } 
            this.messages.push(newMessageReceived);
            this.scrollToBottom();
          }
        }
      });
    });
  }

  openGallery(all = false) {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    };
    this.camera.getPicture(options).then(imageData => {
        this.fileUpload = "data:image/jpeg;base64," + imageData;

        let fileModal = this.modalCtrl.create('file-modal', {file: this.fileUpload});
        fileModal.onDidDismiss(data => {
              if (data.sendFile == true){
                if (all == true){
                  this.sendMessageAll(all, false, true);
                }else{
                  this.sendMessage(all, false, true)
                }
              }else {
                this.fileUpload = null;
              }
        });
        fileModal.present();
    });
  }

  cleanVariables (tipo: number) {
    if (tipo == 0 || tipo == 1){
      this.users = null;
      this.selectedUser = "";
      this.selectedUserId = null;
    } else if (tipo == 0 || tipo == 2){
      this.selectedProject = null;
    }
    this.messages = null;
    this.newMessage = null;
  }

  ionViewDidEnter () {
    this.storage.get('Project').then((value)=>{
        this.project = value;
    });

    this.storage.get('Idiom').then((value) => {
      this.idiom = value;

      this.titleTesteira = this.idiom == '01' ? 'Chat' : 'Asistencia';
      this.complementTitle = '';
    })

    this.storage.get('clienteProfileId').then((value) => {
      this.perfilType = value;
    })

    this.storage.get('LayoutVersion').then((value) => {
      this.version = value;
    });

  }

  ionViewDidLeave(){
    this.firstAccess = true;
    if (this.recents && this.recents.length > 0) this.recentUser = this.recents[0]['id']; 
  }

  getUsers(){
    this.cleanVariables(1);

    this.storage.get('clienteId').then((valor) => {
      if(typeof valor != "undefined"){
        this.userId = valor;
        
        let data = { user_id: this.userId }

        if (this.selectedProjectId != null) data["project_id"] = this.selectedProjectId;
        this.http.getAll('/mensagens/app/getUsuarios', data , 'get')
        .subscribe((users: any) => {
          this.users = users.map((u) => {
            return {
              id: u.id,
              nome: u.nome,
              thumb: u.thumb? u.thumb : '',
            }
          });
        })
      }
    });
  }

  getRecentUsers(){
    this.storage.get('clienteId').then((id) => {
      this.userId = id;

      let loading = this.loadingCtrl.create({
        content: 'Espere...'
      });
      this.recents = null;
      loading.present();      
      this.http.getAll('/mensagens/getData', { remetente : null, user_id: this.userId }, 'get')
        .subscribe((data: any) => {
          this.recents = data.remetentes.map((r) => {
            const recent = r['destinatario'].id == this.userId ? r['remetente'] : r['destinatario'];

            return {
              id: recent.id,
              nome: recent.nome,
              thumb: recent.thumb? recent.thumb : this.iconProfile,
              lido: r.lido == 0 ? false : true,
              mensagem: r.mensagem_formatada,
              destacar: this.pendentChat && this.pendentChat.filter((p)=>recent.id == p.remetente_id).length > 0 ? true : false
            }
          });
          loading.dismiss();
        })
    });
  }
  
  getUserMessages(remetente = null, loop?){
    this.storage.get('clienteId').then((id) => {
      this.userId = id;

      let loading = this.loadingCtrl.create({
        content: 'Espere...'
      });
      loading.present();

      if ( this.pendentChat && this.pendentChat.length > 0 && remetente){
        this.pendentChat = this.pendentChat.filter((p)=>p.remetente_id !== remetente);
      }

      this.http.getAll('/mensagens/getData', { remetente : remetente, user_id: this.userId }, 'get')
        .subscribe((data: any) => {
          let mensagem = '';

          if (remetente != null){
            this.messages = data.mensagens.map((m) => {        
                return {
                  ...m, 
                  type: m.mensagem.substring(0, 11) == 'data:image/' ? 'file' : null,
                  created_at: moment(m.created_at).locale('pt-br').format('lll'),
                }
            });
            if (this.perfilType == 3){
              this.messages = this.messages.filter((d,idx) => {
                return d.notification == 0;
              })
            }

            this.lastMessageId = this.messages[this.messages.length - 1].id;
            mensagem = this.messages[0];
            if (remetente && this.messages.length > 0){
              this.ativo = mensagem['remetente'].id == this.userId ? mensagem['remetente'] : mensagem['destinatario'];
              this.receptivo = mensagem['remetente'].id == this.userId ? mensagem['destinatario'] : mensagem['remetente'];

              this.ativo['thumb'] = this.ativo['thumb'] ? this.ativo['thumb'] : this.iconProfile;
              this.receptivo['thumb'] = this.receptivo['thumb'] ? this.receptivo['thumb'] : this.iconProfile;
            }
            this.scrollToBottom();
          }
          loading.dismiss();
        })
    });
  }

  getLastMessageId( user_id, remetente_id){
    this.http.getAll('/mensagens/last-message-id', { remetente_id, user_id }, 'get')
      .subscribe((data: any) => {
        let lastId = data;

        if (this.lastMessageId != null && lastId > this.lastMessageId){
            this.lastMessageId = lastId;
            this.getUserMessages(remetente_id);
          }
      });
  }

  goDirectlyToUserMessage(userDirectly){
    let user = {
      id: userDirectly.remetente_id,
      nome: userDirectly.remetente.nome
    }
    this.selectRecentUser(user);
  }

  getConversasAtivas(){
    this.getRecentUsers();
    this.showMotivosContainer = false;
    this.showRecentUserContainer = true;
  }
  
  sendMessage = async (all = false, notification = false, isFile?) => {

    console.log("\n\nisFile -> ",isFile);
    return await new Promise((resolve, reject) => {
      let data = {};
    
      this.storage.get('clienteId').then((user_id) => {
  
        const mensagem = isFile ? this.fileUpload : this.newMessage && this.newMessage.length > 0 ? this.newMessage.trim() : "";
        const destinatario_id = all == true ?
          null : 
            this.selectedUserId == null ? 
              null : 
              this.selectedUserId;

        const project_id = this.selectedProjectId == null ? null : this.selectedProjectId;

        if (mensagem.length > 0){
          data = {
            mensagem: mensagem,
            user_id: user_id,
            notificacao: notification
          };
          this.sendAll === true ? data['project_id'] = project_id : data['destinatario_id'] = destinatario_id;

          this.http.post('/mensagens/store', data)
            .subscribe((result : any) => {
              if (this.selectedUserId) {

                if (isFile != true){

                  let newMessageSend = {
                    remetente:{
                      id: user_id
                    },
                    notification: notification == false ? 0 : 1,
                    type: null,
                    mensagem_formatada: mensagem,
                    created_at: moment().locale('pt-br').format('lll'),
                  }

                  console.log("\n\nnewMessageSend -> ",user_id);
                  console.log("\n\nuser_id -> ",user_id);

                  this.messages.push(newMessageSend);
                  this.scrollToBottom();
                }else{
                  this.getUserMessages(this.selectedUserId);

                }
              }
              resolve(); 
            })
          this.newMessage = '';
        }  
      });
    });
  }

  sendMessageAll = async (all = false, notification = false, isFile?) => {
    this.sendAll = true;
    await this.sendMessage(all, notification, isFile);
    this.sendAll = false;
  }

  cancelMessageAll(){
    this.showMessageAllBox = false;
    this.newMessage = null;
    this.getConversasAtivas();
    this.getRecentUsers();
  }

  selectRecentUser(user){
    this.selectedUserId = user.id;
    this.selectedUser = user;
    this.recentUser = user.id;
    this.getUserMessages(user.id);
        
    this.showChatContainer = true;
    this.showRecentUserContainer = false;

    this.lastMessageId = null;
/*     setTimeout(()=>{
      this.lastMessageIdInterval = setInterval(()=>{
        this.storage.get('clienteId').then((user_id) => {
          if (this.lastMessageId != null){
            this.storage.get('clienteId').then((user_id) => {
              this.getLastMessageId(user_id, this.selectedUserId);
            });
           }
        })
      },3000);
    },3000); */
  }


  scrollToBottom() {
    setTimeout(() => {
      var objDiv = document.getElementById("cards");
        if (objDiv) objDiv.scrollTop = objDiv.scrollHeight;
    }, 100);

  }

  cancelMotivos(){
    this.showMotivosContainer = false;
    this.viewCtrl.dismiss();
  }

  getMotivos(){
    this.showMotivosContainer = true;
    let loading = this.loadingCtrl.create({
      content: 'Espere...'
    });
    loading.present();
    this.storage.get('clienteId').then((userId) => {
      this.http.getAll('/api/get-motivos', { user_id: userId }, 'get')
      .subscribe((data:any) => {
        this.motivos = data.map((m) => {
          return {...m, thumb: m.thumb ? m.thumb : this.iconDefaultMotivos}
        });
        loading.dismiss();
      });
    });
  }

  selectMotivo(motivo){
    let loading = this.loadingCtrl.create({
      content: 'Espere...'
    });
    loading.present();
    this.storage.get('clienteId').then((userId) => {
      this.http.getAll('/api/send-motivo', { user_id: userId, motivo_id: motivo.id })
      .subscribe((data:any) => {
        loading.dismiss();
        this.getRecentUsers();

        if (motivo && motivo.curadores.length == 1){
          this.selectRecentUser(motivo.curadores[0]);
        }else{
          this.showRecentUsersPage()
        }
      });
    });
  }

  showMotivosPage(){
    this.showMotivosContainer = true;
  }

  showRecentUsersPage(){
    this.showMotivosContainer = false;
    this.showRecentUserContainer = true;
  }

  showChatPage(){
    this.showChatContainer = true;
    this.showChat = true;
  }

  cancelRecentUsers(){
    this.showRecentUserContainer = false;
    this.showMotivosContainer = true;
  }

  cancelChat(){
    this.getConversasAtivas();
    this.showChatContainer = false;
    this.showRecentUserContainer = true;
    clearInterval(this.lastMessageIdInterval);
  }
}
