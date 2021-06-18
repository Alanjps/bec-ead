webpackJsonp([16],{

/***/ 858:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizModule", function() { return QuizModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__quiz__ = __webpack_require__(890);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(68);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var QuizModule = /** @class */ (function () {
    function QuizModule() {
    }
    QuizModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__quiz__["a" /* QuizComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_1__quiz__["a" /* QuizComponent */])],
            exports: [__WEBPACK_IMPORTED_MODULE_1__quiz__["a" /* QuizComponent */]]
        })
    ], QuizModule);
    return QuizModule;
}());

//# sourceMappingURL=quiz.module.js.map

/***/ }),

/***/ 890:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuizComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(488);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(491);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_environment__ = __webpack_require__(160);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var QuizComponent = /** @class */ (function () {
    function QuizComponent(navCtrl, navParams, formBuilder, viewCtrl, toastCtrl, loadingCtrl, authService, storage, camera) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.viewCtrl = viewCtrl;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.authService = authService;
        this.storage = storage;
        this.camera = camera;
        this.ENV = __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */];
        this.formulario = [];
        this.idiom = '';
        this.globalUrl = '';
        storage.get('GlobalUrl').then(function (value) {
            _this.globalUrl = value;
        });
        this.loadQuiz();
    }
    QuizComponent.prototype.loadQuiz = function () {
        var _this = this;
        var vars = {
            tipo: '',
            lesson_id: ''
        };
        var loading = this.loadingCtrl.create({
            content: 'Espere...'
        });
        loading.present();
        vars.lesson_id = this.navParams.get('lesson_id');
        this.authService.request('/api/testes/get', vars).then(function (result) {
            loading.dismiss();
            if (result) {
                _this.formulario = result;
            }
            else {
                _this.viewCtrl.dismiss();
            }
        });
    };
    QuizComponent.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.storage.get('LayoutVersion').then(function (value) {
            _this.version = value;
        });
        this.storage.get('Idiom').then(function (value) {
            _this.idiom = value;
        });
        this.storage.get('Project').then(function (value) {
            _this.project = value;
        });
    };
    QuizComponent.prototype.salva = function () {
        var _this = this;
        var mensagem = '';
        var chave = 0;
        this.formulario.forEach(function (element, key) {
            if (element.respostas == '') {
                chave = key + 1;
                mensagem = 'Favor responder a questão ' + chave;
            }
        });
        if (mensagem) {
            var toast = this.toastCtrl.create({
                message: mensagem,
                duration: 3000,
                position: 'top'
            });
            toast.present();
        }
        else {
            var loading_1 = this.loadingCtrl.create({
                content: 'Espere...'
            });
            loading_1.present();
            var vars_1 = {
                user_id: '',
                teste: this.formulario
            };
            this.storage.get('clienteId').then(function (valor) {
                vars_1.user_id = valor;
                _this.authService.request('/api/testes/responder', vars_1).then(function (result) {
                    loading_1.dismiss();
                    if (result) {
                        var toast = _this.toastCtrl.create({
                            message: 'Resposta salva com sucesso!',
                            duration: 3000,
                            position: 'top'
                        });
                        toast.present();
                        toast.onDidDismiss(function () {
                            _this.fechar();
                        });
                    }
                    else {
                        _this.viewCtrl.dismiss();
                    }
                });
            });
        }
    };
    QuizComponent.prototype.fechar = function () {
        this.viewCtrl.dismiss();
    };
    /****GALERIA E CAMERA */
    QuizComponent.prototype.openCamera = function (index) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var options;
            return __generator(this, function (_a) {
                this.indexFile = index;
                options = {
                    quality: 10,
                    destinationType: this.camera.DestinationType.DATA_URL,
                    encodingType: this.camera.EncodingType.JPEG,
                    mediaType: this.camera.MediaType.PICTURE,
                    sourceType: this.camera.PictureSourceType.CAMERA,
                    allowEdit: false
                };
                this.camera.getPicture(options).then(function (imageData) {
                    _this.formulario[_this.indexFile].respostas = imageData;
                    _this.fileUpload = "data:image/jpeg;base64," + imageData;
                });
                return [2 /*return*/];
            });
        });
    };
    QuizComponent.prototype.openSelect = function (index) {
        this.indexFile = index;
        this.selectFile.open();
    };
    QuizComponent.prototype.openGallery = function () {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.formulario[_this.indexFile].respostas = "data:image/jpeg;base64," + imageData;
            _this.fileUpload = "data:image/jpeg;base64," + imageData;
        });
    };
    QuizComponent.prototype.openGaleryOrCamera = function () {
        if (this.galleryFile) {
            this.openGallery();
        }
        else {
            this.openCamera(1);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('selectFile'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Select */])
    ], QuizComponent.prototype, "selectFile", void 0);
    QuizComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'quiz',template:/*ion-inline-start:"C:\Users\Alan\Desktop\ALAN\TRABALHO\VISION\PROJETOS\BEC\EAD\IONIC\PROJETO\EAD\src\components\quiz\quiz.html"*/'\n\n<ion-header [ngClass]="version == \'01\' ? \'principalHeader\' : version == \'02\' ? \'principalHeaderV02\' : \'principalHeader\'">\n\n  <div>\n\n\n\n    <img [ngClass]="version == \'01\' ? \'principal-icon\' : version == \'02\' ? \'principal-icon-v02\' : \'principal-icon\'"\n\n     src="{{ globalUrl + \'/storage/uploads/configs/logoHeader.png\' }}" />\n\n\n\n    <img *ngIf="version == \'01\'" class="testeira-v01" \n\n    src="{{ globalUrl + \'/storage/uploads/configs/testeira1.png\' }}" >\n\n\n\n    <img *ngIf="version == \'02\'" class="testeira-v02" \n\n    src="{{ globalUrl + \'/storage/uploads/configs/testeira2.png\' }}" >\n\n    <!-- <img class=logo-header src="./assets/imgs/movera-logo.png" /> -->\n\n    <p [ngClass]="project == \'know-house\' ?  \'font-style know-house-title-color\' : project == \'ava\' ?  \'font-style black-title-color\' : \'\'">{{titleTesteira}}  {{complementTitle? \'| \' + complementTitle : \'\'}}</p>\n\n  </div>\n\n  \n\n</ion-header>\n\n<ion-content padding [ngClass]="version == \'01\' ? \'margin-content-l1\' : version == \'02\' ? \'margin-content-l2\' : \'margin-content-l1\'">\n\n  <div style="margin-bottom: 110px !important;">\n\n    <h2 *ngIf="idiom == \'01\'">Questionário</h2>\n\n    <h2 *ngIf="idiom == \'02\'">Cuestionario</h2>\n\n    \n\n    <div class=singleQuestao *ngFor="let questao of formulario; let i = index">\n\n      <ion-label >{{i+1}} - {{questao[\'questao\']}}</ion-label>\n\n      <ion-input  *ngIf="questao[\'tipo\'] == \'TEXT\'"  [(ngModel)]="questao[\'respostas\']" type="text" value="" ></ion-input>\n\n      <ion-input  *ngIf="questao[\'tipo\'] == \'NUMBER\'"[(ngModel)]="questao[\'respostas\']" type="number" value="" ></ion-input>\n\n  \n\n      <ion-list *ngIf="questao[\'tipo\'] == \'CHECK\'">\n\n        <ion-item *ngFor="let opcao of questao[\'alternativas\'];  let o = index">\n\n          <ion-label >{{opcao.texto}}</ion-label>\n\n          <ion-checkbox [(ngModel)]="questao[\'respostas\'][o]" ></ion-checkbox >\n\n        </ion-item>\n\n      </ion-list>\n\n  \n\n      <ion-list  *ngIf="questao[\'tipo\'] == \'RADIO\'" radio-group [(ngModel)]="questao[\'respostas\']">\n\n        <ion-item *ngFor="let opcao of questao[\'alternativas\'];  let e = index">\n\n          <ion-label>{{opcao.texto}}</ion-label>\n\n          <ion-radio  value="{{e}}"></ion-radio>\n\n        </ion-item>\n\n      </ion-list>\n\n  \n\n      <ion-list *ngIf="questao[\'tipo\'] == \'UPLOAD\'">\n\n        <div *ngIf="fileUpload" class="camera" (click)="openCamera(i)">\n\n          <img src={{fileUpload}} alt="Upload">\n\n        </div>\n\n        <div  class="camera empty" (click)="openCamera(i)">\n\n          <span *ngIf="!fileUpload && idiom == \'01\'">Clique para tirar a foto</span>\n\n          <span *ngIf="!fileUpload && idiom == \'02\'">Haz clic para tomar una foto</span>\n\n          <span *ngIf="fileUpload && idiom == \'01\'">Trocar foto</span>\n\n          <span *ngIf="fileUpload && idiom == \'02\'">Cambiar foto</span>\n\n        </div>\n\n      </ion-list>\n\n    </div>\n\n  \n\n    <button ion-button full class="button-style button-style-{{ENV.PROJECT}}" (click)="salva()">\n\n      <p *ngIf="idiom == \'01\'">SALVAR RESPOSTAS</p>\n\n      <p *ngIf="idiom == \'02\'">GUARDAR RESPUESTA</p>\n\n    </button>\n\n    <button ion-button full icon-start color="light" class="button-style button-cancel-style-{{ENV.PROJECT}}" (click)="fechar()">\n\n      <p>CANCELAR</p>\n\n    </button>\n\n  \n\n    <ion-select class="hidden" #selectFile interface="action-sheet" [(ngModel)]="this.galleryFile"\n\n      (ionChange)="openGaleryOrCamera()">\n\n      <ion-option *ngIf="idiom == \'01\'" [value]="false">Câmera</ion-option>\n\n      <ion-option *ngIf="idiom == \'02\'" [value]="false">Cámara</ion-option>\n\n      <ion-option *ngIf="idiom == \'01\'" [value]="true">Galeria</ion-option>\n\n      <ion-option *ngIf="idiom == \'02\'" [value]="true">Galería</ion-option>\n\n    </ion-select>\n\n  </div>\n\n  \n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Alan\Desktop\ALAN\TRABALHO\VISION\PROJETOS\BEC\EAD\IONIC\PROJETO\EAD\src\components\quiz\quiz.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */]])
    ], QuizComponent);
    return QuizComponent;
}());

//# sourceMappingURL=quiz.js.map

/***/ })

});
//# sourceMappingURL=16.js.map