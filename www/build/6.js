webpackJsonp([6],{

/***/ 474:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListVideosPageModule", function() { return ListVideosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__list_videos__ = __webpack_require__(504);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_menu_sup_menu_sup_module__ = __webpack_require__(478);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_search_search__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_expandable_expandable_module__ = __webpack_require__(483);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ListVideosPageModule = /** @class */ (function () {
    function ListVideosPageModule() {
    }
    ListVideosPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__list_videos__["a" /* ListVideosPage */],
                __WEBPACK_IMPORTED_MODULE_4__pipes_search_search__["a" /* SearchPipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__list_videos__["a" /* ListVideosPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_menu_sup_menu_sup_module__["a" /* MenuSupModule */],
                __WEBPACK_IMPORTED_MODULE_5__components_expandable_expandable_module__["a" /* ExpandableModule */]
            ],
        })
    ], ListVideosPageModule);
    return ListVideosPageModule;
}());

//# sourceMappingURL=list-videos.module.js.map

/***/ }),

/***/ 478:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuSupModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__menu_sup__ = __webpack_require__(479);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MenuSupModule = /** @class */ (function () {
    function MenuSupModule() {
    }
    MenuSupModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__menu_sup__["a" /* MenuSupComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_1__menu_sup__["a" /* MenuSupComponent */]]
        })
    ], MenuSupModule);
    return MenuSupModule;
}());

//# sourceMappingURL=menu-sup.module.js.map

/***/ }),

/***/ 479:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuSupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_http_service_http_service__ = __webpack_require__(111);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MenuSupComponent = /** @class */ (function () {
    function MenuSupComponent(navCtrl, navParams, authService, toastCtrl, loadingCtrl, storage, http, modalCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.http = http;
        this.modalCtrl = modalCtrl;
        this.pendentChat = null;
        this.intervalHandle = null;
        this.getUnreadChats();
        if (this.intervalHandle != null)
            clearInterval(this.intervalHandle);
        this.intervalHandle = setInterval(function () {
            _this.getUnreadChats();
        }, 5000);
    }
    MenuSupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('Project').then(function (value) {
            _this.project = value;
            /*PROJETOS:
              marketing-house
              edicom
              vcc
            */
        });
        this.storage.get('LayoutVersion').then(function (value) {
            _this.version = value;
        });
    };
    MenuSupComponent.prototype.redirectToChatPage = function () {
        var userModal = this.modalCtrl.create('chat-page', { pendentChat: this.pendentChat });
        userModal.onDidDismiss(function (data) {
            /* if (data){
              let loading = this.loadingCtrl.create({
                content: 'Espere...'
              });
              loading.present();
              this.storage.set('first', false);
              if (this.credential.firstAccess == true)
                this.navCtrl.push('tab-page');
              loading.dismiss();
            } */
        });
        userModal.present();
        /*     if (this.navCtrl.getActive().component !== ChatPage) {
              this.navCtrl.setRoot('chat-page');
            } */
    };
    MenuSupComponent.prototype.getUnreadChats = function () {
        var _this = this;
        this.storage.get('clienteId').then(function (id) {
            _this.http.getAll('/mensagens/remetentes', { user_id: id }, 'get')
                .subscribe(function (data) {
                if (data && data.length > 0) {
                    _this.pendentChat = data;
                }
                else {
                    _this.pendentChat = null;
                }
                _this.storage.set('remetentes', data);
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], MenuSupComponent.prototype, "active", void 0);
    MenuSupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'menu-sup',template:/*ion-inline-start:"C:\Users\alanj\Desktop\ALAN\VISION\PROJETOS\BEC\INTEGRADO\PROJETO\EAD\src\components\menu-sup\menu-sup.html"*/'<ion-badge *ngIf="pendentChat" color="danger" round [ngClass]="version == \'01\' ? \'top-badge badge-margin-v1\' : version == \'02\' ? \'top-badge badge-margin-v2\' : \'top-badge badge-margin-v1\'">!</ion-badge>\n\n<!-- <a *ngIf="version == \'01\' || version == \'02\' && active != true" (click)="redirectToChatPage()" [ngClass]="version == \'01\' ? \'menu-top menu-height-v1\' : version == \'02\' ? \'menu-top menu-height-v2\' : \'menu-top menu-height-v1\'"></a> -->\n\n<button *ngIf="(version == \'01\' || version == \'02\') && active != true" outline (click)="redirectToChatPage()" [ngClass]="version == \'01\' ? \'menu-top menu-height-v1\' : version == \'02\' ? \'menu-top menu-height-v2\' : \'menu-top menu-height-v1\'" ion-button icon-only>\n\n  <ion-icon *ngIf="project == \'ead\'" [ngClass]="active == true ? \'vcc-custom-chat-active\' : \'vcc-custom-chat\'"></ion-icon>\n\n  <ion-icon *ngIf="project == \'edicom\'" [ngClass]="active == true ? \'edicom-custom-chat-active\' : \'edicom-custom-chat\'"></ion-icon>\n\n  <ion-icon *ngIf="project == \'marketing-house\'" [ngClass]="active == true ? \'mrkhouse-custom-chat-active\' : \'mrkhouse-custom-chat\'"></ion-icon>\n\n  <ion-icon *ngIf="project == \'know-house\'" [ngClass]="active == true ? \'knowh-custom-chat-active\' : \'knowh-custom-chat\'"></ion-icon>\n\n  <ion-icon *ngIf="project == \'hkt369\'" [ngClass]="active == true ? \'hkt369-custom-chat-active\' : \'hkt369-custom-chat\'"></ion-icon>\n\n  <ion-icon *ngIf="project == \'simples-trade\'" [ngClass]="active == true ? \'strade-custom-chat-active\' : \'strade-custom-chat\'"></ion-icon>\n\n  <ion-icon *ngIf="project == \'r2m\'" [ngClass]="active == true ? \'r2m-custom-chat-active\' : \'r2m-custom-chat\'"></ion-icon>\n\n</button>\n\n\n\n<button *ngIf="(version == \'01\' || version == \'02\')  && active == true" [disabled]="true" outline [ngClass]="version == \'01\' ? \'menu-top menu-height-v1\' : version == \'02\' ? \'menu-top menu-height-v2\' : \'menu-top menu-height-v1\'" ion-button icon-only>\n\n  <ion-icon *ngIf="project == \'ead\'" [ngClass]="active == true ? \'vcc-custom-chat-active\' : \'vcc-custom-chat\'"></ion-icon>\n\n  <ion-icon *ngIf="project == \'edicom\'" [ngClass]="active == true ? \'edicom-custom-chat-active\' : \'edicom-custom-chat\'"></ion-icon>\n\n  <ion-icon *ngIf="project == \'marketing-house\'" [ngClass]="active == true ? \'mrkhouse-custom-chat-active\' : \'mrkhouse-custom-chat\'"></ion-icon>\n\n  <ion-icon *ngIf="project == \'know-house\'" [ngClass]="active == true ? \'knowh-custom-chat-active\' : \'knowh-custom-chat\'"></ion-icon>\n\n  <ion-icon *ngIf="project == \'hkt369\'" [ngClass]="active == true ? \'hkt369-custom-chat-active\' : \'hkt369-custom-chat\'"></ion-icon>\n\n  <ion-icon *ngIf="project == \'simples-trade\'" [ngClass]="active == true ? \'strade-custom-chat-active\' : \'strade-custom-chat\'"></ion-icon>\n\n  <ion-icon *ngIf="project == \'r2m\'" [ngClass]="active == true ? \'r2m-custom-chat-active\' : \'r2m-custom-chat\'"></ion-icon>\n\n</button>\n\n'/*ion-inline-end:"C:\Users\alanj\Desktop\ALAN\VISION\PROJETOS\BEC\INTEGRADO\PROJETO\EAD\src\components\menu-sup\menu-sup.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_4__providers_http_service_http_service__["a" /* HttpServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]])
    ], MenuSupComponent);
    return MenuSupComponent;
}());

//# sourceMappingURL=menu-sup.js.map

/***/ }),

/***/ 483:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExpandableModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__expandable__ = __webpack_require__(484);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ExpandableModule = /** @class */ (function () {
    function ExpandableModule() {
    }
    ExpandableModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__expandable__["a" /* ExpandableComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_1__expandable__["a" /* ExpandableComponent */]]
        })
    ], ExpandableModule);
    return ExpandableModule;
}());

//# sourceMappingURL=expandable.module.js.map

/***/ }),

/***/ 484:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExpandableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ExpandableComponent = /** @class */ (function () {
    function ExpandableComponent(renderer) {
        this.renderer = renderer;
    }
    ExpandableComponent.prototype.ngAfterViewInit = function () {
        this.renderer.setElementStyle(this.expandWrapper.nativeElement, 'height', this.expandHeight + 'px');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('expandWrapper', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] }),
        __metadata("design:type", Object)
    ], ExpandableComponent.prototype, "expandWrapper", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('expanded'),
        __metadata("design:type", Object)
    ], ExpandableComponent.prototype, "expanded", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('expandHeight'),
        __metadata("design:type", Object)
    ], ExpandableComponent.prototype, "expandHeight", void 0);
    ExpandableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'expandable',template:/*ion-inline-start:"C:\Users\alanj\Desktop\ALAN\VISION\PROJETOS\BEC\INTEGRADO\PROJETO\EAD\src\components\expandable\expandable.html"*/'<div #expandWrapper class=\'expand-wrapper\' [class.collapsed]="!expanded">\n\n  <ng-content></ng-content>\n\n</div>'/*ion-inline-end:"C:\Users\alanj\Desktop\ALAN\VISION\PROJETOS\BEC\INTEGRADO\PROJETO\EAD\src\components\expandable\expandable.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]])
    ], ExpandableComponent);
    return ExpandableComponent;
}());

//# sourceMappingURL=expandable.js.map

/***/ }),

/***/ 504:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListVideosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_http_service_http_service__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_transfer__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_opener__ = __webpack_require__(343);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
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










var ListVideosPage = /** @class */ (function () {
    function ListVideosPage(navCtrl, navParams, dom, authService, http, loadingCtrl, storage, fileTransfer, appRef, _platform, file, toastCtrl, modalCtrl, fileOpener, actionSheetCtrl, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dom = dom;
        this.authService = authService;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.fileTransfer = fileTransfer;
        this.appRef = appRef;
        this._platform = _platform;
        this.file = file;
        this.toastCtrl = toastCtrl;
        this.modalCtrl = modalCtrl;
        this.fileOpener = fileOpener;
        this.actionSheetCtrl = actionSheetCtrl;
        this.alertCtrl = alertCtrl;
        this.expItems = [];
        this.titleTesteira = '';
        this.complementTitle = '';
        // ***
        this.attachments = [];
        this.offlineAttachments = [];
        this._ATTACHMENT_STORAGE_KEY = '__MOVERA_ATTACHMENT_STORAGE_KEY';
        // ***
        this.exibirEmbed = false;
        this.exibirVideo = false;
        this.exibirThumb = false;
        this.playVideo = false;
        this.globalUrl = '';
        this.exibirNota = false;
        this.fazerTeste = true;
        this.hasCertificado = false;
        this.exibirBoxTeste = false;
        this.idiom = '';
        this.notaMaxima = null;
        this.alertTitle = "";
        this.alertSubtitle = "";
        this.iconSuccess = '';
        this.iconFailure = '';
        this.iconTryAgain = '';
        this.iconPlay = '';
        this.iconConcluido = '';
        storage.get('GlobalUrl').then(function (value) {
            _this.globalUrl = value;
        });
    }
    ListVideosPage.prototype.ngOnInit = function () {
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
        this.storage.get('Platform').then(function (value) {
            switch (value) {
                case 'android':
                    _this.iconSuccess = '../../assets/imgs/emoji-success.png';
                    _this.iconTryAgain = '../../assets/imgs/emoji-wink.png';
                    _this.iconFailure = '../../assets/imgs/emoji-sad.png';
                    _this.iconPlay = '../../assets/imgs/icon-play.png';
                    _this.iconConcluido = '../../assets/imgs/icon-concluido.png';
                    break;
                case 'ios':
                    _this.iconSuccess = './assets/imgs/emoji-success.png';
                    _this.iconTryAgain = './assets/imgs/emoji-wink.png';
                    _this.iconFailure = './assets/imgs/emoji-sad.png';
                    _this.iconPlay = './assets/imgs/icon-play.png';
                    _this.iconConcluido = './assets/imgs/icon-concluido.png';
                    break;
            }
        });
    };
    ListVideosPage.prototype.presentModal = function (item) {
        var videoModal = this.modalCtrl.create('list-videos-modal', item);
        /*     videoModal.onDidDismiss(data => {
            }); */
        videoModal.present();
    };
    ListVideosPage.prototype.openQuiz = function (lesson) {
        var _this = this;
        var profileModal = this.modalCtrl.create('quiz', { lesson_id: lesson.id });
        profileModal.onDidDismiss(function (data) {
            _this.fazerQuiz(lesson, true);
        });
        profileModal.present();
    };
    ListVideosPage.prototype.sanitizer = function (vid) {
        return this.dom.bypassSecurityTrustResourceUrl(vid);
    };
    ListVideosPage.prototype.cleanTeste = function () {
        this.fazerTeste = true;
        this.exibirNota = false;
        this.nota = null;
        this.hasCertificado = false;
        this.urlCertificado = '';
    };
    ListVideosPage.prototype.fazerQuiz = function (lesson, showAlert) {
        var _this = this;
        var lesson_id = lesson.id;
        var user_id = 0;
        this.storage.get('clienteId').then(function (valor) {
            user_id = valor;
            var vars = {
                user_id: valor,
                lesson_id: lesson.id
            };
            _this.authService.request('/api/testes/resultado', vars).then(function (result) {
                if (result) {
                    _this.nota = result.pontuacao_final;
                    _this.notaMaxima = result.test.maxPontos;
                    if (result.is_aprovado == '1') {
                        _this.checkFinishedProjects();
                        _this.alertTitle = "Parabéns!";
                        _this.alertSubtitle = "<p>Você passou no teste.</p><br/><img class=\"emoji\" src=\"" + _this.iconSuccess + "\" />";
                        //ATINGIU E NÃO PRECISA MAIS FAZER O TESTE
                        _this.fazerTeste = false;
                        //SE TEM CERRTIFICADO
                        if (result.certificado && result.test.showCertificado == 1) {
                            _this.hasCertificado = true;
                            _this.urlCertificado = result.certificado['path'];
                            _this.showCertificado(lesson);
                        }
                    }
                    else {
                        if (result.test.max_tentativas == 0 || result.totalTentativas < result.test.max_tentativas) {
                            _this.alertTitle = "Você não passou no teste.";
                            _this.alertSubtitle = "<p>Não desista! Tente novamente.</p><br/><img class=\"emoji\" src=\"" + _this.iconTryAgain + "\" />";
                        }
                        else {
                            _this.alertTitle = "Você não passou no teste.";
                            _this.alertSubtitle = "<p>Entre em contato com um curador, ele estará à disposição para ajudar!</p><br/><img class=\"emoji\" src=\"" + _this.iconFailure + "\" />";
                            _this.fazerTeste = false;
                        }
                    }
                }
                else {
                    /**NÃO FEZ O TESTE */
                }
                if (showAlert && showAlert == true && lesson.isScoreable == 1) {
                    _this.exibirNota = true;
                    _this.showAlert();
                }
            });
        });
    };
    ListVideosPage.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: this.alertTitle,
            subTitle: this.alertSubtitle,
            buttons: ['OK']
        });
        alert.present();
    };
    ListVideosPage.prototype.showCertificado = function (lesson) {
        this.videos = this.videos.map(function (projeto, idx) {
            if (lesson.projectId == projeto.id) {
                var lesson_1;
                projeto.lessons = projeto.lessons.map(function (lesson) {
                    var licao = lesson;
                    if (lesson.gotCertified == false && lesson.forCertificate == true)
                        licao.gotCertified = true;
                    return licao;
                });
            }
            return projeto;
        });
    };
    ListVideosPage.prototype.existeTeste = function (lesson) {
        var _this = this;
        this.exibirBoxTeste = false;
        var vars = {
            lesson_id: ''
        };
        vars.lesson_id = lesson.id;
        this.authService.request('/api/testes/isExist', vars).then(function (result) {
            if (result) {
                _this.cleanTeste();
                _this.fazerQuiz(lesson);
                setTimeout(function () {
                    _this.exibirBoxTeste = true;
                }, 500);
            }
        });
    };
    ListVideosPage.prototype.expandItem = function (item) {
        this.videos.map(function (video) {
            video.lessons.map(function (listItem) {
                if (item == listItem) {
                    listItem.expanded = !listItem.expanded;
                }
                else {
                    listItem.expanded = false;
                }
                return listItem;
            });
        });
        this.openVideo(item);
        this.existeTeste(item);
    };
    ListVideosPage.prototype.hasAnyAditionalContent = function () {
        return this.attachments.some(function (a) { return !a.isVideo; });
    };
    ListVideosPage.prototype.openVideo = function (lesson) {
        var _this = this;
        this.attachments = [];
        this.storage.get(this._ATTACHMENT_STORAGE_KEY).then(function (attachments) {
            _this.offlineAttachments = attachments;
            var _loop_1 = function () {
                var hasVideo = false;
                if (lesson.contents[i].tipo == 'video') {
                    hasVideo = true;
                    _this.exibirVideo = true;
                }
                if (lesson.contents[i].url) {
                    _this.exibirEmbed = true;
                    _this.exibirVideo = false;
                }
                var anexo = lesson.contents[i];
                var attachment = {
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
                if (_this.offlineAttachments && _this.offlineAttachments.some(function (a) { return a.id == attachment.id; })) {
                    var originalAttachment = _this.offlineAttachments.find(function (f) { return f.id == attachment.id; });
                    attachment.isOffline = true;
                    attachment.localUrl = originalAttachment.localUrl;
                    attachment.mimeType = originalAttachment.mimeType;
                    attachment.offlineFileName = originalAttachment.offlineFileName;
                }
                _this.attachments.push(attachment);
                //
                if (hasVideo == false)
                    _this.exibirVideo = false;
            };
            //let hasVideo = false;
            for (var i in lesson.contents) {
                _loop_1();
            }
        });
    };
    ListVideosPage.prototype.downloadContent = function ($attachment) {
        var _this = this;
        $attachment.isDownloading = true;
        $attachment.downloadProgress = 0;
        var fileTransferObj = this.fileTransfer.create();
        var fileName = $attachment.onlineUrl.split('/').slice(-1)[0];
        fileTransferObj.onProgress(function (evt) {
            $attachment.downloadProgress = Math.round((evt.loaded / evt.total) * 100);
            _this.appRef.tick();
        });
        var documentDirectory = this._platform.is('android') ? this.file.dataDirectory : this.file.documentsDirectory;
        //fileTransferObj.download($attachment.onlineUrl, `${this.file.dataDirectory}${fileName}`)
        fileTransferObj.download($attachment.onlineUrl, "" + documentDirectory + fileName)
            .then(function (fe) {
            fe.file(function (meta) {
                $attachment.mimeType = meta.type;
                $attachment.isDownloading = false;
                $attachment.downloadProgress = 0;
                $attachment.isOffline = true;
                $attachment.localUrl = fe.nativeURL;
                $attachment.offlineFileName = fileName;
                _this.appRef.tick();
                if (!_this.offlineAttachments) {
                    _this.offlineAttachments = [];
                }
                _this.offlineAttachments.push($attachment);
                _this.storage.set(_this._ATTACHMENT_STORAGE_KEY, _this.offlineAttachments).then(function () {
                    var toast = _this.toastCtrl.create({
                        duration: 6000,
                        position: 'top',
                        message: $attachment.name + " foi baixado com sucesso."
                    });
                    toast.present();
                });
            });
            _this.openContent($attachment);
        })
            .catch(function (err) {
            $attachment.isDownloading = false;
            $attachment.downloadProgress = 0;
            $attachment.isOffline = false;
            var toast = _this.toastCtrl.create({
                duration: 6000,
                position: 'top'
            });
            if (err.code == 3) {
                toast = toast.setMessage('Houve um erro ao baixar o arquivo. Verifique a conexão de rede.');
            }
            else {
                toast = toast.setMessage('Houve um erro desconhecido ao baixar o arquivo.');
            }
            toast.present();
        });
    };
    ListVideosPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.storage.get('Project').then(function (value) {
            _this.project = value;
            /*PROJETOS:
              marketing-house
              edicom
              vcc
            */
        });
        this.storage.get("AppConfig").then(function (config) {
            if (config.internoApp3 && config.internoApp3['text']) {
                _this.titleTesteira = config.internoApp3['text'];
            }
            else {
                _this.titleTesteira = _this.idiom == '01' ? 'Agenda' : 'Mi agenda';
            }
        });
        this.complementTitle = '';
        this.storage.get('LayoutVersion').then(function (value) {
            _this.version = value;
        });
        this.storage.get('AvailableDefaultProjects')
            .then(function (value) {
            if (value != null && value.length > 0) {
                _this.videos = value;
            }
            else {
                _this.storage.get('clienteCompanyId').then(function (companyId) {
                    _this.storage.get('clienteId').then(function (clienteId) {
                        _this.videos = [];
                        _this.http.getAll('/api/projects-ids', { company_id: companyId, user_id: clienteId, type: "DEFAULT" })
                            .subscribe(function (ids) { return __awaiter(_this, void 0, void 0, function () {
                            var _this = this;
                            return __generator(this, function (_a) {
                                ids.map(function (id) { return __awaiter(_this, void 0, void 0, function () {
                                    var _this = this;
                                    var loading;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0:
                                                loading = this.loadingCtrl.create({
                                                    content: 'Espere...'
                                                });
                                                loading.present();
                                                return [4 /*yield*/, new Promise(function (resolve, reject) {
                                                        _this.http.getAll('/api/conteudos', { company_id: companyId, user_id: clienteId, type: "DEFAULT", project_id: id })
                                                            .subscribe(function (data) {
                                                            data.forEach(function (element, index) {
                                                                data[index].showAulas = false;
                                                                element.lessons.forEach(function (l) {
                                                                    l['expanded'] = false;
                                                                });
                                                            });
                                                            data.map(function (d, idx) {
                                                                //let lessons = d.lessons.filter((l) => l && l.disponivel_em && new Date(l.disponivel_em) <= new Date() || !l.disponivel_em).sort((a,b) => {return a.order - b.order});
                                                                /* let lessons = d.lessons.sort((a,b) => {return a.order - b.order}); */
                                                                data[idx].lessons = d.lessons.map(function (lesson) {
                                                                    var gotVideo = lesson.contents.filter(function (e) { return e.tipo == 'video'; }).length > 0 ? true : false;
                                                                    var youtubeUrl = "";
                                                                    if (gotVideo == false) {
                                                                        lesson.contents.map(function (e) { if (e.path !== '' && e.tipo != 'appli' && e.tipo != 'image') {
                                                                            youtubeUrl = e.path;
                                                                        } });
                                                                    }
                                                                    return __assign({}, lesson, { gotVideo: gotVideo, youtubeUrl: youtubeUrl, forCertificate: false, projectId: data[idx].id });
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
                                                            _this.videos.push(data[0]);
                                                            resolve();
                                                        });
                                                    })];
                                            case 1:
                                                _a.sent();
                                                this.videos = this.videos.sort(function (a, b) {
                                                    if (a.titulo > b.titulo) {
                                                        return 1;
                                                    }
                                                    if (a.titulo < b.titulo) {
                                                        return -1;
                                                    }
                                                    // a must be equal to b
                                                    return 0;
                                                });
                                                this.storage.set('AvailableDefaultProjects', this.videos);
                                                loading.dismiss();
                                                this.checkFinishedProjects();
                                                return [2 /*return*/];
                                        }
                                    });
                                }); });
                                return [2 /*return*/];
                            });
                        }); });
                    });
                });
            }
        });
    };
    ListVideosPage.prototype.checkFinishedProjects = function () {
        var _this = this;
        if (this.videos.length > 0) {
            this.storage.get('clienteId').then(function (valor) { return __awaiter(_this, void 0, void 0, function () {
                var _this = this;
                var pidx, _loop_2, this_1, _i, _a, projeto;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            pidx = 0;
                            _loop_2 = function (projeto) {
                                var projectConcluded, _loop_3, _i, _a, lesson;
                                return __generator(this, function (_b) {
                                    switch (_b.label) {
                                        case 0:
                                            projectConcluded = true;
                                            _loop_3 = function (lesson) {
                                                return __generator(this, function (_a) {
                                                    switch (_a.label) {
                                                        case 0:
                                                            if (!(lesson.forCertificate == false)) return [3 /*break*/, 2];
                                                            return [4 /*yield*/, new Promise(function (resolve, reject) {
                                                                    _this.authService.request('/api/testes/resultado', { user_id: valor, lesson_id: lesson.id }).then(function (result) {
                                                                        if (result && result.is_aprovado == 0)
                                                                            projectConcluded = false;
                                                                        resolve();
                                                                    });
                                                                })];
                                                        case 1:
                                                            _a.sent();
                                                            _a.label = 2;
                                                        case 2: return [2 /*return*/];
                                                    }
                                                });
                                            };
                                            _i = 0, _a = projeto.lessons;
                                            _b.label = 1;
                                        case 1:
                                            if (!(_i < _a.length)) return [3 /*break*/, 4];
                                            lesson = _a[_i];
                                            return [5 /*yield**/, _loop_3(lesson)];
                                        case 2:
                                            _b.sent();
                                            _b.label = 3;
                                        case 3:
                                            _i++;
                                            return [3 /*break*/, 1];
                                        case 4:
                                            this_1.videos[pidx].projectConcluded = projectConcluded;
                                            pidx++;
                                            return [2 /*return*/];
                                    }
                                });
                            };
                            this_1 = this;
                            _i = 0, _a = this.videos;
                            _b.label = 1;
                        case 1:
                            if (!(_i < _a.length)) return [3 /*break*/, 4];
                            projeto = _a[_i];
                            return [5 /*yield**/, _loop_2(projeto)];
                        case 2:
                            _b.sent();
                            _b.label = 3;
                        case 3:
                            _i++;
                            return [3 /*break*/, 1];
                        case 4:
                            ;
                            return [2 /*return*/];
                    }
                });
            }); });
        }
    };
    ListVideosPage.prototype.makeSearch = function (event) {
        var _this = this;
        var val = event.target.value;
        this.http.getAll('/api/conteudos', { search: val })
            .subscribe(function (data) {
            data.forEach(function (element, index) {
                data[index].showAulas = false;
            });
            _this.videos = data;
        });
    };
    ListVideosPage.prototype.presentLoadingDefault = function () {
        var loading = this.loadingCtrl.create({
            content: 'Espere...'
        });
        loading.present();
        setTimeout(function () {
            loading.dismiss();
        }, 3000);
    };
    ListVideosPage.prototype.goToPrevSlide = function () {
        this.slides.slidePrev();
    };
    ListVideosPage.prototype.goToNextSlide = function () {
        this.slides.slideNext();
    };
    ListVideosPage.prototype.openProject = function (projeto) {
        var _this = this;
        this.videos.forEach(function (item, index) {
            if (item.id == projeto.id) {
                if (_this.videos[index].showAulas) {
                    _this.videos[index].showAulas = false;
                    _this.complementTitle = '';
                }
                else {
                    _this.videos[index].showAulas = true;
                    _this.complementTitle = projeto.tituloApp ? projeto.tituloApp : projeto.titulo;
                }
            }
            _this.storage.get('clienteId').then(function (valor) {
                item.lessons.forEach(function (lesson, index2) {
                    if (lesson.forCertificate == false)
                        _this.authService.request('/api/testes/resultado', { user_id: valor, lesson_id: lesson.id }).then(function (result) {
                            if (result) {
                                if (result.is_aprovado == '1') {
                                    if (result.certificado && result.test.showCertificado == 1) {
                                        _this.showCertificado(lesson);
                                    }
                                }
                            }
                        });
                });
            });
        });
    };
    ListVideosPage.prototype.showVideo = function (conteudo) {
        var _this = this;
        if (conteudo.url) {
            this.exibirEmbed = true;
            this.exibirVideo = false;
        }
        else if (conteudo.path) {
            this.exibirEmbed = false;
            this.exibirVideo = true;
        }
        this.playVideo = true;
        if (this.exibirVideo == true) {
            setTimeout(function () {
                var video = _this.mVideoPlayer.nativeElement;
                video.src = conteudo.path;
            }, 500);
        }
        else if (this.exibirEmbed == true) {
            this.urlEmbed = conteudo.url;
        }
    };
    ListVideosPage.prototype.cleanVideo = function () {
        this.playVideo = false;
        this.exibirVideo = false;
        this.exibirEmbed = false;
    };
    ListVideosPage.prototype.openChat = function () {
        this.navCtrl.push('chat-page');
    };
    ListVideosPage.prototype.openContent = function ($attachment) {
        var _this = this;
        var actions = [];
        if ($attachment.isVideo == false) {
            actions.push({
                icon: 'glasses',
                text: 'Ver',
                handler: function () {
                    var documentDirectory = _this._platform.is('android') ? _this.file.dataDirectory : _this.file.documentsDirectory;
                    _this.fileOpener.open("" + documentDirectory + $attachment.offlineFileName, $attachment.mimeType).then(function () {
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
            var actionSheet = this.actionSheetCtrl.create({
                title: 'O que deseja fazer?',
                subTitle: "" + $attachment.name,
                buttons: actions
            });
            actionSheet.present();
        }
    };
    ListVideosPage.prototype.selectAction = function ($attachment) {
        var _this = this;
        var actions = [];
        //if ($attachment.isVideo == false) {
        actions.push({
            icon: 'glasses',
            text: 'Ver',
            handler: function () {
                var documentDirectory = _this._platform.is('android') ? _this.file.dataDirectory : _this.file.documentsDirectory;
                _this.fileOpener.open("" + documentDirectory + $attachment.offlineFileName, $attachment.mimeType).then(function () {
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
        actions.push({
            icon: 'trash',
            text: 'Apagar',
            handler: function () {
                _this.removeContent($attachment);
            }
        });
        var actionSheet = this.actionSheetCtrl.create({
            title: 'O que deseja fazer?',
            subTitle: "" + $attachment.name,
            buttons: actions
        });
        actionSheet.present();
        //}
    };
    ListVideosPage.prototype.removeContent = function ($attachment) {
        var _this = this;
        $attachment.isDownloading = true;
        $attachment.downloadProgress = 0;
        var documentDirectory = this._platform.is('android') ? this.file.dataDirectory : this.file.documentsDirectory;
        this.file.removeFile(documentDirectory, $attachment.offlineFileName).then(function (removeResult) {
            if (removeResult.success) {
                $attachment.isDownloading = false;
                $attachment.downloadProgress = 0;
                $attachment.isOffline = false;
                $attachment.localUrl = '';
                $attachment.mimeType = '';
                $attachment.offlineFileName = '';
                _this.appRef.tick();
                _this.offlineAttachments = _this.offlineAttachments.filter(function (f) { return f.id != $attachment.id; });
                _this.storage.set(_this._ATTACHMENT_STORAGE_KEY, _this.offlineAttachments).then(function () {
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
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Slides */])
    ], ListVideosPage.prototype, "slides", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('videoPlayer'),
        __metadata("design:type", Object)
    ], ListVideosPage.prototype, "mVideoPlayer", void 0);
    ListVideosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-list-videos',template:/*ion-inline-start:"C:\Users\alanj\Desktop\ALAN\VISION\PROJETOS\BEC\INTEGRADO\PROJETO\EAD\src\pages\list-videos\list-videos.html"*/'<ion-header [ngClass]="version == \'01\' ? \'principalHeader\' : version == \'02\' ? \'principalHeaderV02\' : \'principalHeader\'">\n\n  <div>\n\n    <img [ngClass]="version == \'01\' ? \'principal-icon\' : version == \'02\' ? \'principal-icon-v02\' : \'principal-icon\'"\n\n     src="{{ globalUrl + \'/storage/uploads/configs/logoHeader.png\' }}" />\n\n<!--     <img [ngClass]="version == \'01\' ? \'testeira\' : version == \'02\' ? \'testeira-v02\' : \'testeira\'" \n\n    src="{{ globalUrl + \'/storage/uploads/configs/testeira2.png\' }}" >\n\n -->\n\n    <img *ngIf="version == \'01\'" class="testeira-v01" \n\n    src="{{ globalUrl + \'/storage/uploads/configs/testeira1.png\' }}" >\n\n\n\n    <img *ngIf="version == \'02\'" class="testeira-v02" \n\n    src="{{ globalUrl + \'/storage/uploads/configs/testeira2.png\' }}" >\n\n    <!-- <img class=logo-header src="./assets/imgs/movera-logo.png" /> -->\n\n    <p [ngClass]="project == \'know-house\' ?  \'font-style know-house-title-color\' : \'\'">{{titleTesteira}}  {{complementTitle? \'| \' + complementTitle : \'\'}}</p>\n\n  </div>\n\n  <menu-sup></menu-sup>\n\n</ion-header>\n\n\n\n<ion-content padding style="margin-top: 20px; position: relative;" [ngClass]="version == \'01\' ? \'margin-content-l1\' : version == \'02\' ? \'margin-content-l2\' : \'margin-content-l1\'"\n\n[ngClass]="project == \'marketing-house\' ? \'content mrkhouse-custom-bg\' : \n\nproject == \'ead\' ? \'content vcc-custom-bg\' : \n\n  project == \'edicom\' ? \'content edicom-custom-bg\' : \n\n    project == \'hkt369\' ? \'content hkt369-custom-bg\' : \n\n      project == \'know-house\' ? \'content knowh-custom-bg\' :\n\n        project == \'simples-trade\' ? \'content strade-custom-bg\' : \n\n          project == \'r2m\' ? \'content r2m-custom-bg\' :\'\'">\n\n  \n\n  <ion-searchbar [ngClass]="project == \'know-house\' ?  \'font-style know-house\' : \'\'" [(ngModel)]="terms" [showCancelButton]="shouldShowCancel" placeholder="O que está buscando?">\n\n  </ion-searchbar>\n\n\n\n  <ion-list no-lines class="lessons-container" *ngIf="playVideo == false">\n\n    <ion-grid>\n\n      <ion-item *ngFor="let projeto of videos | search : terms">\n\n        <div  (click)="openProject(projeto)">\n\n          <ion-row>\n\n            <ion-row>          \n\n              <ion-thumbnail style="position: relative;">\n\n                <img *ngIf="projeto.projectConcluded && projeto.projectConcluded == true" style="position: absolute; right: 0; top: 0; left: auto; bottom: auto; height: 60px !important; width: auto;" src={{iconConcluido}}>\n\n                <img src="{{ projeto.thumb }}">\n\n              </ion-thumbnail>\n\n            </ion-row>\n\n            <ion-row>\n\n              <ion-row style="width: 100%; padding: 10px 0;">\n\n                <h2 [ngClass]="project == \'know-house\' ?  \'font-style know-house-title\' : \'\'">{{ projeto.tituloApp? projeto.tituloApp : projeto.titulo }}</h2>\n\n              </ion-row>\n\n              <ion-row>\n\n                <p>{{ projeto.descricao }}</p>\n\n              </ion-row>\n\n            </ion-row>\n\n          </ion-row>\n\n        </div>\n\n\n\n\n\n        <ion-list no-lines [ngClass]="projeto.showAulas ? \'listAulas show\' : \'listAulas\'">\n\n          <ion-item *ngFor="let item of projeto.lessons " [ngClass]="item.expanded == true ? \'expanded\' : \'\'" >\n\n            <button detail-none (click)="expandItem(item)" ion-item class="bg-transparent" \n\n            *ngIf="item.forCertificate == true &&  item.gotCertified == true || item.forCertificate == false">\n\n              <ion-buttons end>\n\n                <ion-item>\n\n                  <div col-9 style="display: inline-block; vertical-align: middle;">\n\n                    <h2 [ngClass]="project == \'know-house\' ?  \'font-style know-house\' : \'\'">{{ item.titulo }}</h2>\n\n                  </div>\n\n                  <div col-1 style="display: inline-block; vertical-align: middle;">\n\n                    <button ion-button clear item-end icon-only class="bg-transparent">\n\n                      <ion-icon *ngIf="item.expanded == false && project == \'know-house\'" name="md-arrow-dropright" style="color: #FC5A16; padding: 0 10px 0 0; vertical-align: middle;"></ion-icon>\n\n                      <ion-icon *ngIf="item.expanded == true && project == \'know-house\'" name="md-arrow-dropdown" style="color: #FC5A16; padding: 0 10px 0 0; vertical-align: middle;"></ion-icon>                    \n\n\n\n                      <ion-icon *ngIf="item.expanded == false && project != \'know-house\'" name="ios-arrow-forward" style="color: black; padding: 0 10px 0 0; vertical-align: middle;"></ion-icon>\n\n                      <ion-icon *ngIf="item.expanded == true && project != \'know-house\'" name="ios-arrow-down" style="color: black; padding: 0 10px 0 0; vertical-align: middle;"></ion-icon>                    \n\n                    </button>\n\n                  </div>\n\n                  <div col-1 style="display: inline-block; vertical-align: middle;">\n\n                    <ion-icon *ngIf="item.important == 1" name="ios-information-circle-outline" style="color: black; padding: 0 0 0 10px;"></ion-icon>\n\n                  </div>\n\n                </ion-item>\n\n              </ion-buttons>\n\n            </button>\n\n            <expandable [expanded]="item.expanded" [ngClass]="item.expanded == true ? \'expanded\' : \'\'" >\n\n              <div class=slideVideo style="overflow: auto;">\n\n\n\n\n\n                <div *ngIf="item.contents.length > 0" style="position: relative;">\n\n\n\n                    <div *ngIf="item.gotVideo == true || item.youtubeUrl != \'\'" style="margin-top: 20px;">\n\n                      <div style="position: relative;">\n\n                        <img style="width: 100%; margin: auto; display: flex;" src={{item.thumb}}>\n\n                        <div style="position: absolute; top: 0; right: 0; bottom: 0; left: 0; display: flex; justify-content: center; align-items: center;">\n\n                          <img (click)="presentModal(item.contents)" style="width: 70px; margin: auto; display: flex;" src={{iconPlay}}>\n\n                        </div>\n\n                      </div>\n\n                      <p style="text-align: center;" *ngIf="idiom == \'01\'">Clique no play para executar o vídeo</p>\n\n                      <p style="text-align: center;" *ngIf="idiom == \'02\'">Haz a clic en el play para ver la película.</p>\n\n                    </div>\n\n                </div>\n\n\n\n                <div *ngIf="item.gotVideo == false && item.youtubeUrl == \'\' && item.thumb != \'https://edicom.becinteligencia.com/storage/\'" style="margin-top: 20px;">\n\n                  <div style="position: relative;">\n\n                    <img style="width: 100%; margin: auto; display: flex;" src={{item.thumb}}>\n\n                  </div>\n\n                </div>\n\n            \n\n                <div [innerHTML]="item.descricao">{{ item.descricao }} </div>\n\n\n\n                <div *ngIf="exibirBoxTeste" id=boxQuiz>\n\n                  <!-- <p *ngIf="!exibirNota">AVALIAÇÃO DO CURSO – clique para acessar o questionário.</p> -->\n\n              \n\n<!--                   <p *ngIf="!exibirNota && idiom == \'01\'">AVALIAÇÃO DO CURSO – clique para acessar o questionário.</p>\n\n                  <p *ngIf="!exibirNota && idiom == \'02\'">EVALUACIÓN DEL CURSO – haz clic para acceder la encuesta.</p> -->\n\n              \n\n                  <p *ngIf="exibirNota && idiom == \'01\'">Sua nota foi: <span>{{nota}}</span> de um total de {{notaMaxima}}.</p>\n\n                  <p *ngIf="exibirNota && idiom == \'02\'">Calificación fue: <span>{{nota}}</span> de un total de {{notaMaxima}}.</p>\n\n              \n\n                  <button *ngIf="fazerTeste" (click)=openQuiz(item) id=buttonQuiz ion-button full color="light" icon-start>\n\n                    <ion-icon name="md-bulb"></ion-icon>\n\n                    <p *ngIf="idiom == \'01\'">RESPONDER QUESTIONÁRIO</p>\n\n                    <p *ngIf="idiom == \'02\'">RESPONDER ENCUESTA</p>\n\n                  </button>\n\n              \n\n                  <button *ngIf="!fazerTeste" ion-button full color="light" icon-start>\n\n                    <ion-icon name="md-bulb"></ion-icon>\n\n                    <p *ngIf="idiom == \'01\'">QUESTIONÁRIO RESPONDIDO</p>\n\n                    <p *ngIf="idiom == \'02\'">ENCUESTA RESPONDIDO</p>\n\n                  </button>      \n\n              \n\n                </div>\n\n\n\n                <ion-grid class=relatedContent>\n\n              \n\n                  <ion-row *ngFor="let attachment of attachments">\n\n                    <ion-col col-1 style="justify-content: center; display: flex; align-items: center;">\n\n                      <ion-icon name="clipboard" *ngIf="!attachment.isVideo && attachment.onlineUrl.indexOf(\'youtu\') == -1"></ion-icon>\n\n                      <ion-icon name="play" *ngIf="attachment.isVideo "></ion-icon>\n\n                      <ion-icon name="logo-youtube" *ngIf="attachment.onlineUrl != \'\' && attachment.onlineUrl.indexOf(\'youtu\') > 0"></ion-icon>\n\n                    </ion-col>\n\n                    <ion-col col-8><span class=titleContent>{{attachment.name}}</span></ion-col>\n\n                    <ion-col col-3 style="text-align: center;">\n\n                      <button ion-button color="secondary" *ngIf="!attachment.isOffline && !attachment.isDownloading && attachment.downloadPermission == 1" outline\n\n                        style="width: 100%; font-size: 1rem; white-space: nowrap;" (click)="downloadContent(attachment)">\n\n                        <p *ngIf="idiom == \'01\'">BAIXAR</p>\n\n                        <p style="font-size: 0.8rem !important;" *ngIf="idiom == \'02\'">DESCARGAR</p>\n\n                      </button>\n\n                      <button ion-button color="danger" *ngIf="attachment.isOffline && !attachment.isDownloading && attachment.isVideo == false" outline\n\n                        style="width: 100%" (click)="selectAction(attachment)">\n\n                        <p>ABRIR</p>\n\n                      </button>\n\n\n\n                      <button ion-button outline style="width: 100%" *ngIf="attachment.isVideo == false && attachment.downloadPermission == 0" color="secondary">\n\n                        <a style="color: #666; text-decoration:none;" href="{{attachment.onlineUrl}}">ABRIR</a>\n\n                      </button>\n\n                    \n\n                      <button ion-button color="danger" *ngIf="attachment.isOffline && !attachment.isDownloading && attachment.isVideo" outline\n\n                        style="width: 100%" (click)="selectAction(attachment)">\n\n                        <p *ngIf="idiom == \'01\'">ABRIR</p>\n\n                        <p *ngIf="idiom == \'02\'">ABRIR</p>                      \n\n                      </button>\n\n                      <p *ngIf="attachment.isDownloading" style="margin: 0px; margin-top: 8px; padding: 0px;">\n\n                        {{ attachment.downloadProgress }}%\n\n                      </p>\n\n                      <p *ngIf="attachment.isDownloading" style="margin: 0px; padding: 0px; height: 20px;">\n\n                        <ion-spinner name="dots"></ion-spinner>\n\n                      </p>\n\n                    </ion-col>\n\n                  </ion-row>\n\n                </ion-grid>\n\n              </div>\n\n              <div style="padding: 15px" *ngIf="item.gotCertified">\n\n                <a style="margin-bottom:20px;" href="{{urlCertificado}}"  ion-button full\n\n                  large color="secondary" icon-start>\n\n                  <ion-icon name="md-school"></ion-icon>\n\n                  <p *ngIf="idiom == \'01\'">BAIXE SEU CERTIFICADO</p>\n\n                  <p *ngIf="idiom == \'02\'">DESCARGUE SU CERTIFICADO</p>\n\n                </a>\n\n              </div>\n\n            </expandable>\n\n          </ion-item>\n\n        </ion-list>\n\n      </ion-item>\n\n    </ion-grid>\n\n  </ion-list>\n\n  \n\n  <div *ngIf="playVideo">\n\n    <div *ngIf="exibirVideo">\n\n      <video #videoPlayer class="video-player" autoplay="true" controls controlsList="nodownload" style="max-width: 100%; max-height: 100%;"></video>\n\n    </div>\n\n    <iframe *ngIf="exibirEmbed" [src]="sanitizer(urlEmbed)" style="width:100%" frameborder="0" height="300" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\n\n    <button ion-button float-right class="cancel-button" (click)="cleanVideo()">\n\n      <p *ngIf="idiom == \'01\'">Voltar</p>\n\n      <p *ngIf="idiom == \'02\'">Volver</p>\n\n    </button>\n\n  </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\alanj\Desktop\ALAN\VISION\PROJETOS\BEC\INTEGRADO\PROJETO\EAD\src\pages\list-videos\list-videos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_http_service_http_service__["a" /* HttpServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ApplicationRef"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_opener__["a" /* FileOpener */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], ListVideosPage);
    return ListVideosPage;
}());

//# sourceMappingURL=list-videos.js.map

/***/ }),

/***/ 505:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SearchPipe = /** @class */ (function () {
    function SearchPipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    /*transform(value: string, ...args) {
      return value.toLowerCase();
    }*/
    SearchPipe.prototype.transform = function (items, terms) {
        if (!items)
            return [];
        if (!terms)
            return items;
        terms = terms.toLowerCase();
        return items.filter(function (it) {
            return it.titulo.toLowerCase().includes(terms); // only filter country name
        });
    };
    SearchPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'search',
        })
    ], SearchPipe);
    return SearchPipe;
}());

//# sourceMappingURL=search.js.map

/***/ })

});
//# sourceMappingURL=6.js.map