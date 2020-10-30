import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { AuthProvider } from '../../providers/auth/auth';
import { Storage } from '@ionic/storage';

@IonicPage({
  name: 'register-page'
})
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  tabBarElement: any;
  public tipoPessoa: string = "1"; // padrão PF
  public hide:boolean = false;
  public background : string;
  public idiom: string = '';
  public project: string;

  public credential: any = {
    documento:'',
    password:'',
    nome:'',
    email:'',
    nascimento:'',
    whatsapp:'',
    aceite:false,
    company_id : '1', // VALOR FIXO, 1 = EMPRESA PREVIAMENTE CADASTRADA
    profile_id : '3' //VALOR FIXO, 3  = USUARIO
  };

  public event = {
    month: '1990-02-19',
    timeStarts: '07:43',
    timeEnds: '1990-02-20'
  }

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public authService: AuthProvider,
    public toastCtrl: ToastController,
    public loadingCtrl : LoadingController,
    public storage: Storage
  ) {
    
  }

  /* OCULTA O CAMPO EMPRESA */
  ngIfCtrl(){
    this.hide = !this.hide;
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
  }

  ionViewWillEnter() {
    this.storage.get('Project').then((value) => {
      this.background = value;
    })
    this.storage.get('Idiom').then((value) => {
      this.idiom = value;
      if (value == '01')
        this.credential.documento = this.navParams.get('documento');
      else if(value == '02')
        this.credential.email = this.navParams.get('documento');
    })
  }

  goBack(){
    this.navCtrl.setRoot(LoginPage);
  }

  makeRegister(){
    var mensagemRetorno: string = '';
    if(!this.credential.nome)
      mensagemRetorno = this.idiom == '01' ? 'Favor preencher o campo nome' : this.idiom == '02' ?  'Por favor completa el campo nombre' : '';
    else if(this.credential.documento.length != 18 && this.credential.documento.length != 14)
      mensagemRetorno = this.idiom == '01' ? 'Favor preencher o campo CPF/CNPJ' : this.idiom == '02' ? 'Por favor completa el campo documento' : '' ;
    else if(!this.credential.email)
      mensagemRetorno = this.idiom == '01' ? 'Favor preencher o campo e-mail' : this.idiom == '02' ? 'Por favor completa el campo correo' : '' ;
    else if(!this.ValidaCPF(this.credential.documento) && this.credential.documento.length == 14)
      mensagemRetorno = this.idiom == '01' ? 'CPF Inválido' : this.idiom == '02' ? 'Documento inválido' : '' ;
    else if(!this.credential.whatsapp)
      mensagemRetorno = this.idiom == '01' ?  'Favor preencher o campo Whatsapp' : this.idiom == '02' ? 'Por favor completa el campo teléfono' : '';
    else if(!this.credential.nascimento && this.project != "edicom")
      mensagemRetorno = this.idiom == '01' ? 'Favor preencher o campo data de nascimento' : this.idiom == '02' ? 'Por favor completa el campo fecha de nacimiento' : '' ;
    else if(!this.credential.password)
      mensagemRetorno = this.idiom == '01' ? 'Favor preencher o campo senha' : this.idiom == '02' ? 'Por favor completa el campo de contraseña' : '' ;
    else if(!this.credential.aceite)
      mensagemRetorno = this.idiom == '01' ? 'Para efetuar o cadastro você deve aceitar os termos e políticas de privacidade' : this.idiom == '02' ? 'Para registrarse debe aceptar los términos y políticas de privacidad' : '' ;

    if(mensagemRetorno != ''){
      let toast = this.toastCtrl.create({
        message: mensagemRetorno,
        duration: 6000,
        position: 'top'
      });
      toast.present();
    }else{

      let loading = this.loadingCtrl.create({
        content: 'Espere...'
      });
      loading.present();

      this.authService.register(this.credential).then((result) => {
        loading.dismiss();
        if(result){
          if(result.status != 0){
            let toast = this.toastCtrl.create({
              message: this.idiom == '01' ? 'Cadastro realizado com sucesso!' : this.idiom == '02' ? '¡Registro exitoso!' : '',
              duration: 6000,
              position: 'top'
            });

            this.navCtrl.push('tab-page');

          }else{
              let toast = this.toastCtrl.create({
                message: result.msg,
                duration: 6000,
                position: 'top'
              });
              toast.present();
            }
          }
      });
      loading.dismiss();
    }
  }

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