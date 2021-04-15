import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, ModalController} from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AuthProvider } from '../../providers/auth/auth';
import { environment as ENV } from '../../environments/environment' ;

@IonicPage({
  name: 'login-page'
})

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public ENV = ENV;

  private credential: any = {
    documento: '',
    password: '',
    isDevice: '1',
    lembrar: false
  };
  public lembrar: string = 'nao';
  tabBarElement: any;
  prosseguir: any;
  public globalUrl: string = '';
  public version : string;
  public background : string;
  public oneSignalInfo: any;
  public idiom: string = '';
  public project: string = '';
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public authService: AuthProvider,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    public storage: Storage,
    public modalCtrl: ModalController
    ) {

    this.authService.logout();
    this.hide = false;


    if (this.navParams.get('logout')) {
      this.navCtrl.push('login-page');
      this.authService.logoutSave();
    }

    storage.get('GlobalUrl').then((value) => {
      this.globalUrl = value;
    })

    this.storage.get('clienteSaveDocumento').then((valorDoc) => {
      if (valorDoc) {
        let loading = this.loadingCtrl.create({
          content: 'Espere...'
        });
        loading.present();
        this.storage.get('clienteSavePassword').then((valorPass) => {
          if (valorPass) {
            this.credential.documento = valorDoc;
            this.credential.password = valorPass;
            this.authService.login(this.credential).then((result) => {
              if (result) {
                loading.dismiss();
                this.navCtrl.push('tab-page');
              } else {
                loading.dismiss();
              }
            });
          } else {
            loading.dismiss();
          }
        });
      }
    });
  }

  ngOnInit () {
    this.storage.get('LayoutVersion').then((value) => {
      this.version = value;
    });

    this.storage.get('Project').then((value) => {
      this.background = value;
      this.project = value;
    })

    this.storage.get('Idiom').then((value) => {
      this.idiom = value;
    })
  }

  /* OCULTA O CAMPO SENHA */
  hide: boolean = true;
  ngIfCtrl() {
    this.hide = !this.hide;
  }

  openPage(page) {
    if (page == 'downloads'){
      let fileModal = this.modalCtrl.create('download-modal');
      fileModal.present();
    }
  }

  login() {
    //14 CPF
    // 18 CNPJ

    this.prosseguir = false;

    if (this.idiom == '01'){
      if (this.credential.documento.length == 14) {
        //CPF
        if (this.ValidaCPF(this.credential.documento)) {
          this.prosseguir = true;
        }
      } else if (this.credential.documento.length == 18) {
        //CNPJ
        this.prosseguir = true;
      }
    }else{
      if (this.credential.documento.length > 0) this.prosseguir = true;
    }


    if (this.prosseguir) {

      this.authService.logout();

      let loading = this.loadingCtrl.create({
        content: 'Espere...'
      });
      loading.present();

      if (this.hide) {
        // SE JÁ ESTIVER SENDO EXIBIDO, SIGNIFICA QUE O USUÁRIO JÁ INSERIOU O CPF E O SISTEMA IDENTIFICOU QUE NÃO É PRIMEIRO ACESSO NEM CADASTRO
        // ENTÃO TENTA FAZER O LOGIN
        this.authService.login(this.credential).then((result) => {
          loading.dismiss();
          if (result) {
            this.navCtrl.push('tab-page');
          } else {
            let toast = this.toastCtrl.create({
              message: this.idiom == '02' ? 'Correo o Contraseña inválidos' : 'CPF e/ou Senha inválidos',
              duration: 6000,
              position: 'top'
            });
            toast.present();
          }
        });

      } else {
        this.authService.firstAcess(this.credential).then((result) => {
          loading.dismiss();
          if (result) {
            this.storage.get('clienteFirst').then((valor) => {
              if (valor != '1') {
                /**NÃO É O PRIMEIRO ACESSO, ENTÃO HABILITA O CAMPO SENHA */
                let toast = this.toastCtrl.create({
                  message: this.idiom == '02' ? 'Por favor, entrar con tu contraseña' : 'Favor entrar com sua senha de acesso',
                  duration: 2000,
                  position: 'top'
                });
                toast.present();
                this.ngIfCtrl();

              } else {
                /**PRIMEIRO ACESSO, ENTÃO LEVA PARA A TELA DE PREENCHER OS DADOS */
                let toast = this.toastCtrl.create({
                  message: this.idiom == '02' ? 'Bienvenido, ponga tus datos para acesar la palicación' : 'Seja bem vindo(a)! Preencha seus dados para acesso',
                  duration: 2000,
                  position: 'top'
                });

                toast.onDidDismiss(() => {
                  this.navCtrl.setRoot('edit-user-v02-page', { first: 'true' });
                });
                toast.present();
              }
            });
          } else {

            /** LEVA PARA A TELA DE CADASTRO */
            /**NÃO É O PRIMEIRO ACESSO, ENTÃO HABILITA O CAMPO SENHA */
            let toast = this.toastCtrl.create({
              message: this.project == 'edicom' ? 'Correo electrónico no registrado' : this.idiom == '02' ? 'Haga tu registro' : 'Para acesso, faça seu cadastro',
              duration: 2000,
              position: 'top'
            });

            if (this.project != 'edicom'){
              toast.onDidDismiss(() => {
                this.navCtrl.setRoot('register-page', { documento: this.credential.documento });
              });
            }
            toast.present();
          }
        });
      }
    } else {

      let toast = this.toastCtrl.create({
        message: this.idiom == '01' ? 'CPF/CNPJ inválido' : 'Email inválido',
        duration: 2000,
        position: 'top'
      });

      toast.present();
    }
  }

  recoveryPassword() {
    this.navCtrl.push('recovey-password-page');
  }


  ValidaCPF(cpf: string): boolean {
    cpf = cpf.replace('.', '').replace('.', '').replace('-', '');;

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

  selectIdiom(id){
    this.idiom = id;

    this.storage.set('idiom',id);

  }

}
