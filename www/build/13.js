webpackJsonp([13],{

/***/ 462:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyDownloadsPageModule", function() { return MyDownloadsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my_downloads__ = __webpack_require__(493);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MyDownloadsPageModule = /** @class */ (function () {
    function MyDownloadsPageModule() {
    }
    MyDownloadsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__my_downloads__["a" /* MyDownloadsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__my_downloads__["a" /* MyDownloadsPage */]),
            ],
        })
    ], MyDownloadsPageModule);
    return MyDownloadsPageModule;
}());

//# sourceMappingURL=my-downloads.module.js.map

/***/ }),

/***/ 486:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(341);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, authService, toastCtrl, loadingCtrl, storage, modalCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.modalCtrl = modalCtrl;
        this.credential = {
            documento: '',
            password: '',
            isDevice: '1',
            lembrar: false
        };
        this.lembrar = 'nao';
        this.globalUrl = '';
        this.idiom = '';
        this.project = '';
        /* OCULTA O CAMPO SENHA */
        this.hide = true;
        this.authService.logout();
        this.hide = false;
        if (this.navParams.get('logout')) {
            this.navCtrl.push('login-page');
            this.authService.logoutSave();
        }
        storage.get('GlobalUrl').then(function (value) {
            _this.globalUrl = value;
        });
        this.storage.get('clienteSaveDocumento').then(function (valorDoc) {
            if (valorDoc) {
                var loading_1 = _this.loadingCtrl.create({
                    content: 'Espere...'
                });
                loading_1.present();
                _this.storage.get('clienteSavePassword').then(function (valorPass) {
                    if (valorPass) {
                        _this.credential.documento = valorDoc;
                        _this.credential.password = valorPass;
                        _this.authService.login(_this.credential).then(function (result) {
                            if (result) {
                                loading_1.dismiss();
                                _this.navCtrl.push('tab-page');
                            }
                            else {
                                loading_1.dismiss();
                            }
                        });
                    }
                    else {
                        loading_1.dismiss();
                    }
                });
            }
        });
    }
    LoginPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('LayoutVersion').then(function (value) {
            _this.version = value;
        });
        this.storage.get('Project').then(function (value) {
            _this.background = value;
            _this.project = value;
        });
        this.storage.get('Idiom').then(function (value) {
            _this.idiom = value;
        });
    };
    LoginPage.prototype.ngIfCtrl = function () {
        this.hide = !this.hide;
    };
    LoginPage.prototype.openPage = function (page) {
        if (page == 'downloads') {
            var fileModal = this.modalCtrl.create('download-modal');
            fileModal.present();
        }
    };
    LoginPage.prototype.login = function () {
        //14 CPF
        // 18 CNPJ
        var _this = this;
        this.prosseguir = false;
        if (this.version == '01') {
            if (this.credential.documento.length == 14) {
                //CPF
                if (this.ValidaCPF(this.credential.documento)) {
                    this.prosseguir = true;
                }
            }
            else if (this.credential.documento.length == 18) {
                //CNPJ
                this.prosseguir = true;
            }
        }
        else {
            if (this.credential.documento.length > 0)
                this.prosseguir = true;
        }
        if (this.prosseguir) {
            this.authService.logout();
            var loading_2 = this.loadingCtrl.create({
                content: 'Espere...'
            });
            loading_2.present();
            if (this.hide) {
                // SE JÁ ESTIVER SENDO EXIBIDO, SIGNIFICA QUE O USUÁRIO JÁ INSERIOU O CPF E O SISTEMA IDENTIFICOU QUE NÃO É PRIMEIRO ACESSO NEM CADASTRO
                // ENTÃO TENTA FAZER O LOGIN
                this.authService.login(this.credential).then(function (result) {
                    loading_2.dismiss();
                    if (result) {
                        _this.navCtrl.push('tab-page');
                    }
                    else {
                        var toast = _this.toastCtrl.create({
                            message: _this.idiom == '02' ? 'Correo o Contraseña inválidos' : 'CPF e/ou Senha inválidos',
                            duration: 6000,
                            position: 'top'
                        });
                        toast.present();
                    }
                });
            }
            else {
                this.authService.firstAcess(this.credential).then(function (result) {
                    loading_2.dismiss();
                    if (result) {
                        _this.storage.get('clienteFirst').then(function (valor) {
                            if (valor != '1') {
                                /**NÃO É O PRIMEIRO ACESSO, ENTÃO HABILITA O CAMPO SENHA */
                                var toast = _this.toastCtrl.create({
                                    message: _this.idiom == '02' ? 'Por favor, entrar con tu contraseña' : 'Favor entrar com sua senha de acesso',
                                    duration: 2000,
                                    position: 'top'
                                });
                                toast.present();
                                _this.ngIfCtrl();
                            }
                            else {
                                /**PRIMEIRO ACESSO, ENTÃO LEVA PARA A TELA DE PREENCHER OS DADOS */
                                var toast = _this.toastCtrl.create({
                                    message: _this.idiom == '02' ? 'Bienvenido, ponga tus datos para acesar la palicación' : 'Seja bem vindo(a)! Preencha seus dados para acesso',
                                    duration: 2000,
                                    position: 'top'
                                });
                                toast.onDidDismiss(function () {
                                    _this.navCtrl.setRoot('edit-user-v02-page', { first: 'true' });
                                });
                                toast.present();
                            }
                        });
                    }
                    else {
                        /** LEVA PARA A TELA DE CADASTRO */
                        /**NÃO É O PRIMEIRO ACESSO, ENTÃO HABILITA O CAMPO SENHA */
                        var toast = _this.toastCtrl.create({
                            message: _this.project == 'edicom' ? 'Correo electrónico no registrado' : _this.idiom == '02' ? 'Haga tu registro' : 'Para acesso, faça seu cadastro',
                            duration: 2000,
                            position: 'top'
                        });
                        if (_this.project != 'edicom') {
                            toast.onDidDismiss(function () {
                                _this.navCtrl.setRoot('register-page', { documento: _this.credential.documento });
                            });
                        }
                        toast.present();
                    }
                });
            }
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'CPF/CNPJ inválido',
                duration: 2000,
                position: 'top'
            });
            toast.present();
        }
    };
    LoginPage.prototype.recoveryPassword = function () {
        this.navCtrl.push('recovey-password-page');
    };
    LoginPage.prototype.ValidaCPF = function (cpf) {
        cpf = cpf.replace('.', '').replace('.', '').replace('-', '');
        ;
        if (cpf == null) {
            return false;
        }
        if (cpf.length != 11) {
            return false;
        }
        if ((cpf == '00000000000') || (cpf == '11111111111') || (cpf == '22222222222') || (cpf == '33333333333') || (cpf == '44444444444') || (cpf == '55555555555') || (cpf == '66666666666') || (cpf == '77777777777') || (cpf == '88888888888') || (cpf == '99999999999')) {
            return false;
        }
        var numero = 0;
        var caracter = '';
        var numeros = '0123456789';
        var j = 10;
        var somatorio = 0;
        var resto = 0;
        var digito1 = 0;
        var digito2 = 0;
        var cpfAux = '';
        cpfAux = cpf.substring(0, 9);
        for (var i = 0; i < 9; i++) {
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
        for (var i = 0; i < 10; i++) {
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
    };
    LoginPage.prototype.selectIdiom = function (id) {
        this.idiom = id;
        this.storage.set('idiom', id);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\alanj\Desktop\ALAN\VISION\PROJETOS\BEC\EAD\IONIC\PROJETO\EAD\src\pages\login\login.html"*/'\n\n<ion-content \n\n[ngClass]="background == \'marketing-house\' ? \'body background-marketing-house\' : \n\n  background == \'edicom\' ? \'body background-edicom\' : \n\n    background == \'ead\' ? \'body background-ead\' : \n\n      background == \'hkt369\' ? \'body background-hkt369\' : \n\n        background == \'know-house\' ? \'body background-knowh\' : \n\n          background == \'simples-trade\' ? \'body background-strade\' : \n\n            background == \'r2m\' ? \'body background-r2m\' : \n\n              background == \'ava\' ? \'body background-ava\' : \'\' " padding>\n\n<!--   <img class="background" src="https://homolog.marketinghouse.com.br/storage/uploads/configs/loginMobile.png">\n\n -->  \n\n  <!-- <img class="background" object-fit: cover src="{{ globalUrl + \'/storage/uploads/configs/loginMobile.png\' }}"> -->\n\n<!--   <div class="flags-container">\n\n    <img (click)="selectIdiom(1)" class="flags" src="../../assets/imgs/flag-spain.png">\n\n    <img (click)="selectIdiom(2)" class="flags" src="../../assets/imgs/flag-brazil.png">\n\n    <img (click)="selectIdiom(3)" class="flags" src="../../assets/imgs/flag-united-kingdom.png">\n\n  </div> -->\n\n  <!-- <img id="logo-header"/> -->\n\n<!--   <div *ngIf="version == \'01\'">\n\n    <h1  style="text-align:center; color:#FFF; font-weight: 100;">Seja bem-vindo(a)! <br/><br/>Para acessar os conteúdos, informe seu CPF.</h1>\n\n  </div> -->\n\n \n\n<!--   <div *ngIf="version != \'01\'">\n\n    \n\n  </div> -->\n\n<!--   <br/><br/><br/><br/><br/><br/><br/><br/>\n\n  <div style="min-height: 40%;"></div> -->\n\n\n\n  <div class="min-height"></div>\n\n\n\n  <ion-list>\n\n\n\n      <ion-item *ngIf="version == \'01\'" class="fieldElement">\n\n        <ion-label [ngClass]="project == \'know-house\' ? \'label--know-house\' : project == \'r2m\' ? \'label--default-black\' : \'label--default-white\'" floating>CPF/CNPJ</ion-label>\n\n        <ion-input [ngClass]="project == \'know-house\' ? \'label--know-house\' : \'label--default\'" type="text" autocomplete="off" [brmasker]="{person: true}" [(ngModel)]="credential.documento"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item *ngIf="version == \'02\'"  class="fieldElement">\n\n        <ion-label [ngClass]="project == \'know-house\' ? \'label--know-house\' : project == \'r2m\' ? \'label--default-black\' : \'label--default-white\'" floating>E-MAIL</ion-label>\n\n        <ion-input [ngClass]="project == \'know-house\' ? \'label--know-house\' : project == \'r2m\' ? \'label--default-black\' : \'label--default-white\'" type="text" autocomplete="off" [(ngModel)]="credential.documento"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item *ngIf="hide"  class="fieldElement">\n\n        <ion-label [ngClass]="project == \'know-house\' ? \'label--know-house\' : project == \'r2m\' ? \'label--default-black\' : \'label--default-white\'" floating>\n\n          <p *ngIf="idiom == \'01\'">SENHA</p>\n\n          <p *ngIf="idiom == \'02\'">CONTRASEÑA</p> \n\n        </ion-label>\n\n        <ion-input [ngClass]="project == \'know-house\' ? \'label--know-house\' : project == \'r2m\' ? \'label--default-black\' : \'label--default-white\'" type="password" [(ngModel)]="credential.password"></ion-input>\n\n      </ion-item>\n\n\n\n    </ion-list>\n\n    <a *ngIf="hide" (click)="recoveryPassword()" [ngClass]="project == \'know-house\' ? \'label--know-house recovery-link--know-house\' : \'label--default recovery-link--default\'">\n\n      <div *ngIf="idiom == \'01\'">Esqueci minha senha</div>\n\n      <div *ngIf="idiom == \'02\'">He olvidado mi contraseña</div>\n\n    </a>\n\n\n\n<!--<ion-list>\n\n  <ion-item class="fieldElement right" *ngIf="hide">\n\n    <ion-label>Manter logado</ion-label>\n\n    <ion-toggle [(ngModel)]="credential.lembrar"></ion-toggle>\n\n  </ion-item>\n\n</ion-list>-->\n\n    <button [ngStyle]="{\'background-color\': project == \'edicom\'? \'orange\' : \'primary\'}"  ion-button full icon-start [ngClass]="project == \'edicom\' ? \'button-edicom\' : project == \'know-house\' ? \'button-know-house\' : \'buttonMedium buttonLogin\'" (click)="login()">\n\n        <!--<ion-icon name="key"></ion-icon>-->\n\n        <div *ngIf="idiom == \'01\'">Entrar</div>\n\n        <div *ngIf="idiom == \'02\'">Iniciar sesión</div>\n\n    </button>\n\n\n\n\n\n    <button *ngIf="project != \'edicom\'" ion-button full icon-start [ngClass]="project == \'edicom\' ? \'button-edicom\' : project == \'know-house\' ? \'button-know-house\' : \'buttonMedium buttonLogin\'" (click)="openPage(\'downloads\')">\n\n      <div *ngIf="idiom == \'01\'">Meus Downloads</div>\n\n      <div *ngIf="idiom == \'02\'">Mis Archivos</div>\n\n    </button>\n\n\n\n\n\n    <div class="version">v. 1.0.0</div>\n\n\n\n\n\n    <!--<a (click)="firstAccess()" class="recovery-link">É seu primeiro acesso? Clique aqui</a>\n\n\n\n\n\n    <button ion-button full icon-start  class="buttonMedium"  color="light" (click)="registerNew()">\n\n      <!--<ion-icon name="arrow-back"></ion-icon>\n\n      Registre-se\n\n  </button>-->\n\n\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\alanj\Desktop\ALAN\VISION\PROJETOS\BEC\EAD\IONIC\PROJETO\EAD\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 493:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyDownloadsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_file__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_opener__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(486);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyDownloadsPage = /** @class */ (function () {
    function MyDownloadsPage(navCtrl, navParams, loadingCtrl, storage, toastCtrl, actionSheetCtrl, file, appRef, fileOpener) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.file = file;
        this.appRef = appRef;
        this.fileOpener = fileOpener;
        this._attachments = [];
        this._ATTACHMENT_STORAGE_KEY = '__MOVERA_ATTACHMENT_STORAGE_KEY';
        this.titleTesteira = 'Mis descargas';
        this.complementTitle = '';
        this.globalUrl = '';
        this.idiom = '';
        storage.get('GlobalUrl').then(function (value) {
            _this.globalUrl = value;
        });
    }
    MyDownloadsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('Project').then(function (value) {
            _this.project = value;
            /*PROJETOS:
              marketing-house
              edicom
              vcc
            */
        });
        this.storage.get('Idiom').then(function (value) {
            _this.idiom = value;
        });
    };
    MyDownloadsPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.storage.get("AppConfig").then(function (config) {
            if (config.internoApp4 && config.internoApp4['text']) {
                _this.titleTesteira = config.internoApp4['text'];
            }
            else {
                _this.titleTesteira = _this.idiom == '01' ? 'Downloads' : 'Mis descargas';
            }
        });
        this.complementTitle = '';
        this.storage.get('LayoutVersion').then(function (value) {
            _this.version = value;
        });
        /*const loading: Loading = this.loadingCtrl.create({
          content: 'Espere...'
        });*/
        //loading.present();
        this.storage.get(this._ATTACHMENT_STORAGE_KEY).then(function (attachments) {
            if (attachments) {
                _this._attachments = attachments;
                //loading.dismiss();
            }
        }).catch(function (_) {
            //loading.dismiss();
            var toast = _this.toastCtrl.create({
                message: 'Houve um erro ao recuperar os itens baixados.',
                duration: 6000,
                position: 'top'
            });
            toast.present();
        });
    };
    MyDownloadsPage.prototype.openContent = function ($attachment) {
        var _this = this;
        var actions = [];
        if ($attachment.isVideo) {
            actions.push({
                icon: 'play',
                text: 'Assistir',
                handler: function () {
                    _this.fileOpener.open("" + _this.file.dataDirectory + $attachment.offlineFileName, $attachment.mimeType).then(function () {
                        //  this.fileOpener.open(`${$attachment.onlineUrl}`, $attachment.mimeType).then(() => {
                        // TODO
                    }).catch(function (err) {
                        var toast = _this.toastCtrl.create({
                            duration: 6000,
                            position: 'top',
                            message: _this.idiom == '01' ? 'Não foi possível abrir o arquivo.' : _this.idiom == '02' ? 'No es posible abrir el archivo.' : ''
                        });
                        toast.present();
                    });
                }
            });
        }
        else {
            actions.push({
                icon: 'glasses',
                text: 'Ver',
                handler: function () {
                    _this.fileOpener.open("" + _this.file.dataDirectory + $attachment.offlineFileName, $attachment.mimeType).then(function () {
                        //this.fileOpener.open(`${$attachment.onlineUrl}`, $attachment.mimeType).then(() => {
                        // TODO
                    }).catch(function (err) {
                        var toast = _this.toastCtrl.create({
                            duration: 6000,
                            position: 'top',
                            message: _this.idiom == '01' ? 'Não foi possível abrir o arquivo.' : _this.idiom == '02' ? 'No es posible abrir el archivo.' : ''
                        });
                        toast.present();
                    });
                }
            });
        }
        actions.push({
            icon: 'trash',
            text: 'Apagar',
            handler: function () {
                $attachment.isDownloading = true;
                $attachment.downloadProgress = 0;
                _this.file.removeFile(_this.file.dataDirectory, $attachment.offlineFileName).then(function (removeResult) {
                    if (removeResult.success) {
                        $attachment.isDownloading = false;
                        $attachment.downloadProgress = 0;
                        $attachment.isOffline = false;
                        $attachment.localUrl = '';
                        $attachment.mimeType = '';
                        $attachment.offlineFileName = '';
                        _this.appRef.tick();
                        _this._attachments = _this._attachments.filter(function (f) { return f.id != $attachment.id; });
                        _this.storage.set(_this._ATTACHMENT_STORAGE_KEY, _this._attachments).then(function () {
                            var toast = _this.toastCtrl.create({
                                duration: 6000,
                                position: 'top',
                                message: 'O arquivo foi removido.'
                            });
                            toast.present();
                        });
                    }
                    else {
                        var toast = _this.toastCtrl.create({
                            duration: 6000,
                            position: 'top',
                            message: _this.idiom == '01' ? 'Não foi possível remover o arquivo.' : _this.idiom == '02' ? 'No se pudo eliminar el archivo.' : ''
                        });
                        toast.present();
                    }
                });
            }
        });
        var actionSheet = this.actionSheetCtrl.create({
            title: 'O que deseja fazer?',
            subTitle: "" + $attachment.name,
            buttons: actions
        });
        actionSheet.present();
    };
    MyDownloadsPage.prototype.returnToLogin = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */], {}, { animate: true });
    };
    MyDownloadsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-my-downloads',template:/*ion-inline-start:"C:\Users\alanj\Desktop\ALAN\VISION\PROJETOS\BEC\EAD\IONIC\PROJETO\EAD\src\pages\my-downloads\my-downloads.html"*/'<ion-header [ngClass]="version == \'01\' ? \'principalHeader\' : version == \'02\' ? \'principalHeaderV02\' : \'principalHeader\'">\n\n  <!-- <img [ngClass]="version == \'01\' ? \'testeira\' : version == \'02\' ? \'testeira-v02\' : \'testeira\'" \n\n  src="{{ globalUrl + \'/storage/uploads/configs/testeira1.png\' }}" > -->\n\n  <img [ngClass]="version == \'01\' ? \'principal-icon\' : version == \'02\' ? \'principal-icon-v02\' : \'principal-icon\'"\n\n  src="{{ globalUrl + \'/storage/uploads/configs/logoHeader.png\' }}" />\n\n  \n\n  <img *ngIf="version == \'01\'" class="testeira-v01" \n\n  src="{{ globalUrl + \'/storage/uploads/configs/testeira1.png\' }}" >\n\n\n\n  <img *ngIf="version == \'02\'" class="testeira-v02" \n\n  src="{{ globalUrl + \'/storage/uploads/configs/testeira2.png\' }}" >\n\n  \n\n  <!--  <img class=logo-header src="./assets/imgs/movera-logo.png" /> -->\n\n  <div *ngIf="version == \'02\' || version == \'01\'">\n\n    <p [ngClass]="project == \'know-house\' ?  \'font-style know-house-title-color\' : \'\'">{{titleTesteira}}  {{complementTitle? \'| \' + complementTitle : \'\'}}</p>\n\n  </div>\n\n</ion-header>\n\n\n\n<ion-content padding [ngClass]="project == \'marketing-house\' ? \'content mrkhouse-custom-bg\' : project == \'ead\' ? \'content vcc-custom-bg\' : project == \'edicom\' ? \'content edicom-custom-bg\' : \'\'">\n\n  <!-- <h2 *ngIf="version == \'01\'">Meus Downloads</h2> -->\n\n  <p *ngIf="_attachments.length == 0 && exibirNota && idiom == \'01\'">Nenhum conteúdo disponível.</p>\n\n  <p *ngIf="_attachments.length == 0 && exibirNota && idiom == \'02\'">No hay contenido disponible.</p>\n\n  <ion-list>\n\n    <button ion-item no-padding *ngFor="let attachment of _attachments; trackBy: attachment?.id"\n\n      (click)="openContent(attachment)">\n\n      <ion-row>\n\n        <ion-col col-2 style="justify-content: center; display: flex; align-items: center;">\n\n          <ion-icon name="clipboard" *ngIf="!attachment.isVideo"></ion-icon>\n\n          <ion-icon name="play" *ngIf="attachment.isVideo"></ion-icon>\n\n        </ion-col>\n\n        <ion-col col-10><span class=titleContent>{{attachment.name}}</span></ion-col>\n\n      </ion-row>\n\n    </button>\n\n  </ion-list>\n\n  <!--<button ion-button full icon-start class="buttonMedium" (click)="returnToLogin()">\n\n    Voltar\n\n  </button>-->\n\n</ion-content>'/*ion-inline-end:"C:\Users\alanj\Desktop\ALAN\VISION\PROJETOS\BEC\EAD\IONIC\PROJETO\EAD\src\pages\my-downloads\my-downloads.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["p" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["ApplicationRef"],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_opener__["a" /* FileOpener */]])
    ], MyDownloadsPage);
    return MyDownloadsPage;
}());

//# sourceMappingURL=my-downloads.js.map

/***/ })

});
//# sourceMappingURL=13.js.map