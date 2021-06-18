webpackJsonp([11],{

/***/ 866:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListVideosV03PageModule", function() { return ListVideosV03PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__list_videos_v03__ = __webpack_require__(898);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_menu_sup_menu_sup_module__ = __webpack_require__(876);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_expandable_expandable_module__ = __webpack_require__(881);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ListVideosV03PageModule = /** @class */ (function () {
    function ListVideosV03PageModule() {
    }
    ListVideosV03PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__list_videos_v03__["a" /* ListVideosV03Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__list_videos_v03__["a" /* ListVideosV03Page */]),
                __WEBPACK_IMPORTED_MODULE_3__components_menu_sup_menu_sup_module__["a" /* MenuSupModule */],
                __WEBPACK_IMPORTED_MODULE_4__components_expandable_expandable_module__["a" /* ExpandableModule */]
            ],
        })
    ], ListVideosV03PageModule);
    return ListVideosV03PageModule;
}());

//# sourceMappingURL=list-videos-v03.module.js.map

/***/ }),

/***/ 876:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuSupModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__menu_sup__ = __webpack_require__(877);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(68);
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

/***/ 877:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuSupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(488);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_http_service_http_service__ = __webpack_require__(161);
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
            selector: 'menu-sup',template:/*ion-inline-start:"C:\Users\Alan\Desktop\ALAN\TRABALHO\VISION\PROJETOS\BEC\EAD\IONIC\PROJETO\EAD\src\components\menu-sup\menu-sup.html"*/'<ion-badge *ngIf="pendentChat" color="danger" round [ngClass]="version == \'01\' ? \'top-badge badge-margin-v1\' : version == \'02\' ? \'top-badge badge-margin-v2\' : \'top-badge badge-margin-v1\'">!</ion-badge>\n\n<!-- <a *ngIf="version == \'01\' || version == \'02\' && active != true" (click)="redirectToChatPage()" [ngClass]="version == \'01\' ? \'menu-top menu-height-v1\' : version == \'02\' ? \'menu-top menu-height-v2\' : \'menu-top menu-height-v1\'"></a> -->\n\n<button *ngIf="(version == \'01\' || version == \'02\') && active != true" outline (click)="redirectToChatPage()" [ngClass]="version == \'01\' ? \'menu-top menu-height-v1\' : version == \'02\' ? \'menu-top menu-height-v2\' : \'menu-top menu-height-v1\'" ion-button icon-only>\n\n  <ion-icon *ngIf="project == \'ead\'" [ngClass]="active == true ? \'vcc-custom-chat-active\' : \'vcc-custom-chat\'"></ion-icon>\n\n  <ion-icon *ngIf="project == \'edicom\'" [ngClass]="active == true ? \'edicom-custom-chat-active\' : \'edicom-custom-chat\'"></ion-icon>\n\n  <ion-icon *ngIf="project == \'marketing-house\'" [ngClass]="active == true ? \'mrkhouse-custom-chat-active\' : \'mrkhouse-custom-chat\'"></ion-icon>\n\n  <ion-icon *ngIf="project == \'know-house\'" [ngClass]="active == true ? \'knowh-custom-chat-active\' : \'knowh-custom-chat\'"></ion-icon>\n\n  <ion-icon *ngIf="project == \'hkt369\'" [ngClass]="active == true ? \'hkt369-custom-chat-active\' : \'hkt369-custom-chat\'"></ion-icon>\n\n  <ion-icon *ngIf="project == \'simples-trade\'" [ngClass]="active == true ? \'strade-custom-chat-active\' : \'strade-custom-chat\'"></ion-icon>\n\n  <ion-icon *ngIf="project == \'r2m\'" [ngClass]="active == true ? \'r2m-custom-chat-active\' : \'r2m-custom-chat\'"></ion-icon>\n\n  <ion-icon *ngIf="project == \'ava\'" [ngClass]="active == true ? \'ava-custom-chat-active\' : \'ava-custom-chat\'"></ion-icon>\n\n  <ion-icon *ngIf="project == \'tmc\'" [ngClass]="active == true ? \'tmc-custom-chat-active\' : \'tmc-custom-chat\'"></ion-icon>\n\n  <ion-icon *ngIf="project == \'hability\'" [ngClass]="active == true ? \'hability-custom-chat-active\' : \'hability-custom-chat\'"></ion-icon>\n\n  <ion-icon *ngIf="project == \'full-promo\'" [ngClass]="active == true ? \'full-promo-custom-chat-active\' : \'full-promo-custom-chat\'"></ion-icon>\n\n  <ion-icon *ngIf="project == \'sehc\'" [ngClass]="active == true ? \'sehc-custom-chat-active\' : \'sehc-custom-chat\'"></ion-icon>\n\n  <ion-icon *ngIf="project == \'club-learn\'" [ngClass]="active == true ? \'club-learn-custom-chat-active\' : \'club-learn-custom-chat\'"></ion-icon>\n\n  <ion-icon *ngIf="project == \'localhost\'" [ngClass]="active == true ? \'localhost-custom-chat-active\' : \'localhost-custom-chat\'"></ion-icon>\n\n</button>\n\n\n\n<button *ngIf="(version == \'01\' || version == \'02\')  && active == true" [disabled]="true" outline [ngClass]="version == \'01\' ? \'menu-top menu-height-v1\' : version == \'02\' ? \'menu-top menu-height-v2\' : \'menu-top menu-height-v1\'" ion-button icon-only>\n\n  <ion-icon *ngIf="project == \'ead\'" [ngClass]="active == true ? \'vcc-custom-chat-active\' : \'vcc-custom-chat\'"></ion-icon>\n\n  <ion-icon *ngIf="project == \'edicom\'" [ngClass]="active == true ? \'edicom-custom-chat-active\' : \'edicom-custom-chat\'"></ion-icon>\n\n  <ion-icon *ngIf="project == \'marketing-house\'" [ngClass]="active == true ? \'mrkhouse-custom-chat-active\' : \'mrkhouse-custom-chat\'"></ion-icon>\n\n  <ion-icon *ngIf="project == \'know-house\'" [ngClass]="active == true ? \'knowh-custom-chat-active\' : \'knowh-custom-chat\'"></ion-icon>\n\n  <ion-icon *ngIf="project == \'hkt369\'" [ngClass]="active == true ? \'hkt369-custom-chat-active\' : \'hkt369-custom-chat\'"></ion-icon>\n\n  <ion-icon *ngIf="project == \'simples-trade\'" [ngClass]="active == true ? \'strade-custom-chat-active\' : \'strade-custom-chat\'"></ion-icon>\n\n  <ion-icon *ngIf="project == \'r2m\'" [ngClass]="active == true ? \'r2m-custom-chat-active\' : \'r2m-custom-chat\'"></ion-icon>\n\n  <ion-icon *ngIf="project == \'ava\'" [ngClass]="active == true ? \'ava-custom-chat-active\' : \'ava-custom-chat\'"></ion-icon>\n\n  <ion-icon *ngIf="project == \'tmc\'" [ngClass]="active == true ? \'tmc-custom-chat-active\' : \'tmc-custom-chat\'"></ion-icon>\n\n  <ion-icon *ngIf="project == \'hability\'" [ngClass]="active == true ? \'hability-custom-chat-active\' : \'hability-custom-chat\'"></ion-icon>\n\n  <ion-icon *ngIf="project == \'full-promo\'" [ngClass]="active == true ? \'full-promo-custom-chat-active\' : \'full-promo-custom-chat\'"></ion-icon>\n\n  <ion-icon *ngIf="project == \'sehc\'" [ngClass]="active == true ? \'sehc-custom-chat-active\' : \'sehc-custom-chat\'"></ion-icon>\n\n  <ion-icon *ngIf="project == \'club-learn\'" [ngClass]="active == true ? \'club-learn-custom-chat-active\' : \'club-learn-custom-chat\'"></ion-icon>\n\n  <ion-icon *ngIf="project == \'localhost\'" [ngClass]="active == true ? \'localhost-custom-chat-active\' : \'localhost-custom-chat\'"></ion-icon>\n\n</button>\n\n'/*ion-inline-end:"C:\Users\Alan\Desktop\ALAN\TRABALHO\VISION\PROJETOS\BEC\EAD\IONIC\PROJETO\EAD\src\components\menu-sup\menu-sup.html"*/
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

/***/ 881:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExpandableModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__expandable__ = __webpack_require__(882);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(68);
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

/***/ 882:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExpandableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
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
            selector: 'expandable',template:/*ion-inline-start:"C:\Users\Alan\Desktop\ALAN\TRABALHO\VISION\PROJETOS\BEC\EAD\IONIC\PROJETO\EAD\src\components\expandable\expandable.html"*/'<div #expandWrapper class=\'expand-wrapper\' [class.collapsed]="!expanded">\n\n  <ng-content></ng-content>\n\n</div>'/*ion-inline-end:"C:\Users\Alan\Desktop\ALAN\TRABALHO\VISION\PROJETOS\BEC\EAD\IONIC\PROJETO\EAD\src\components\expandable\expandable.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]])
    ], ExpandableComponent);
    return ExpandableComponent;
}());

//# sourceMappingURL=expandable.js.map

/***/ }),

/***/ 898:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListVideosV03Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(488);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_http_service_http_service__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_transfer__ = __webpack_require__(492);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__ = __webpack_require__(489);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_opener__ = __webpack_require__(490);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__environments_environment__ = __webpack_require__(160);
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











var ListVideosV03Page = /** @class */ (function () {
    function ListVideosV03Page(navCtrl, navParams, dom, authService, http, loadingCtrl, storage, fileTransfer, appRef, _platform, file, toastCtrl, modalCtrl, fileOpener, actionSheetCtrl, alertCtrl) {
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
        this.ENV = __WEBPACK_IMPORTED_MODULE_9__environments_environment__["a" /* environment */];
        this.expItems = [];
        this.titleTesteira = 'Mi agenda';
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
    ListVideosV03Page.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('Idiom').then(function (value) {
            _this.idiom = value;
        });
    };
    ListVideosV03Page.prototype.presentModal = function (item) {
        var videoModal = this.modalCtrl.create('list-videos-modal', item);
        /*     videoModal.onDidDismiss(data => {
            }); */
        videoModal.present();
    };
    ListVideosV03Page.prototype.sanitizer = function (vid) {
        return this.dom.bypassSecurityTrustResourceUrl(vid);
    };
    ListVideosV03Page.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: this.alertTitle,
            subTitle: this.alertSubtitle,
            buttons: ['OK']
        });
        alert.present();
    };
    ListVideosV03Page.prototype.expandItem = function (item) {
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
    };
    ListVideosV03Page.prototype.hasAnyAditionalContent = function () {
        return this.attachments.some(function (a) { return !a.isVideo; });
    };
    ListVideosV03Page.prototype.openVideo = function (lesson) {
        var _this = this;
        this.attachments = [];
        this.storage.get(this._ATTACHMENT_STORAGE_KEY).then(function (attachments) {
            _this.offlineAttachments = attachments;
            var _loop_1 = function () {
                var hasVideo = false;
                if (lesson.contents[i].tipo == 'video') {
                    hasVideo = true;
                    _this.exibirVideo = true;
                    /*           setTimeout(() => {
                                let video = this.mVideoPlayer.nativeElement
                                video.src = lesson.contents[i].path;
                              }, 2000); */
                }
                if (lesson.contents[i].url) {
                    _this.exibirEmbed = true;
                    _this.exibirVideo = false;
                    /*           this.urlEmbed = lesson.contents[i].url; */
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
                    downloadPermission: anexo.publicado ? anexo.publicado : 0
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
    ListVideosV03Page.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.storage.get('Project').then(function (value) {
            _this.project = value;
        });
        this.storage.get("AppConfig").then(function (config) {
            if (config.internoApp3 && config.internoApp5['text']) {
                _this.titleTesteira = config.internoApp5['text'];
            }
            else {
                _this.titleTesteira = _this.idiom == '01' ? 'Agenda' : 'Mi agenda';
            }
        });
        this.complementTitle = '';
        this.storage.get('LayoutVersion').then(function (value) {
            _this.version = value;
        });
        var loading = this.loadingCtrl.create({
            content: 'Espere...'
        });
        loading.present();
        this.storage.get('clienteCompanyId').then(function (companyId) {
            _this.storage.get('clienteId').then(function (clienteId) {
                _this.http.getAll('/api/conteudos', { company_id: companyId, user_id: clienteId, type: "ICON5" })
                    .subscribe(function (data) {
                    loading.dismiss();
                    data.forEach(function (element, index) {
                        if (element.content_only != 1) {
                            data[index].showAulas = false;
                            element.lessons.forEach(function (l) {
                                l['expanded'] = false;
                            });
                        }
                    });
                    data.map(function (d, idx) {
                        if (d.content_only != 1) {
                            //let lessons = d.lessons.filter((l) => l && l.disponivel_em && new Date(l.disponivel_em) <= new Date() || !l.disponivel_em).sort((a,b) => {return a.order - b.order});
                            data[idx].lessons = d.lessons.map(function (lesson) {
                                var gotVideo = lesson.contents.filter(function (e) { return e.tipo == 'video'; }).length > 0 ? true : false;
                                var youtubeUrl = "";
                                if (gotVideo == false) {
                                    lesson.contents.map(function (e) { if (e.path !== '' && e.tipo != 'appli') {
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
                        }
                    });
                    /*             data.map((d,idx) => {
                                  let lessons = d.lessons.sort((a,b) => {return a.order - b.order});
                                  data[idx].lessons = lessons.map((lesson) => {
                                    let gotVideo = lesson.contents.filter((e) => e.tipo == 'video').length > 0 ? true : false;
                                    let youtubeUrl =  "";
                                    if (gotVideo == false) {
                                      lesson.contents.map((e) => {if (e.path !== '') {youtubeUrl = e.path}});
                                    }
                                    return {...lesson, gotVideo, youtubeUrl}
                                  });
                                }) */
                    _this.videos = data;
                    _this.videos = _this.videos.sort(function (a, b) {
                        if (a.titulo > b.titulo) {
                            return 1;
                        }
                        if (a.titulo < b.titulo) {
                            return -1;
                        }
                        // a must be equal to b
                        return 0;
                    });
                });
            });
        });
    };
    ListVideosV03Page.prototype.presentLoadingDefault = function () {
        var loading = this.loadingCtrl.create({
            content: 'Espere...'
        });
        loading.present();
        setTimeout(function () {
            loading.dismiss();
        }, 3000);
    };
    ListVideosV03Page.prototype.goToPrevSlide = function () {
        this.slides.slidePrev();
    };
    ListVideosV03Page.prototype.goToNextSlide = function () {
        this.slides.slideNext();
    };
    ListVideosV03Page.prototype.openProject = function (projeto) {
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
        });
    };
    ListVideosV03Page.prototype.showVideo = function (conteudo) {
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
    ListVideosV03Page.prototype.cleanVideo = function () {
        this.playVideo = false;
        this.exibirVideo = false;
        this.exibirEmbed = false;
    };
    ListVideosV03Page.prototype.openChat = function () {
        this.navCtrl.push('chat-page');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Slides */])
    ], ListVideosV03Page.prototype, "slides", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('videoPlayer'),
        __metadata("design:type", Object)
    ], ListVideosV03Page.prototype, "mVideoPlayer", void 0);
    ListVideosV03Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-list-videos-v03',template:/*ion-inline-start:"C:\Users\Alan\Desktop\ALAN\TRABALHO\VISION\PROJETOS\BEC\EAD\IONIC\PROJETO\EAD\src\pages\list-videos-v03\list-videos-v03.html"*/'<ion-header [ngClass]="version == \'01\' ? \'principalHeader\' : version == \'02\' ? \'principalHeaderV02\' : \'principalHeader\'">\n\n  <div>\n\n    <img [ngClass]="version == \'01\' ? \'principal-icon\' : version == \'02\' ? \'principal-icon-v02\' : \'principal-icon\'"\n\n     src="{{ globalUrl + \'/storage/uploads/configs/logoHeader.png\' }}" />\n\n\n\n    <img *ngIf="version == \'01\'" class="testeira-v01" \n\n    src="{{ globalUrl + \'/storage/uploads/configs/testeira1.png\' }}" >\n\n\n\n    <img *ngIf="version == \'02\'" class="testeira-v02" \n\n    src="{{ globalUrl + \'/storage/uploads/configs/testeira2.png\' }}" >\n\n\n\n    <p class="header-title header-title-{{ENV.HEADER_TEXT}}">{{titleTesteira}}  {{complementTitle? \'| \' + complementTitle : \'\'}}</p>\n\n  </div>\n\n  <menu-sup></menu-sup>\n\n</ion-header>\n\n\n\n<ion-content class="content {{ENV.PROJECT}}-custom-bg" [ngClass]="version == \'01\' ? \'margin-content-l1\' : version == \'02\' ? \'margin-content-l2\' : \'margin-content-l1\'" padding style="top: 20px; position: relative;" >\n\n\n\n  <ion-list no-lines class="lessons-container" *ngIf="playVideo == false">\n\n    <ion-grid>\n\n      <ion-item *ngFor="let projeto of videos">       \n\n        \n\n        <div *ngIf="projeto.content_only == 1" (click)="presentModal(projeto.contents)">\n\n\n\n          <ion-row>\n\n            <ion-col col-4>          \n\n              <ion-thumbnail>\n\n                <img *ngIf="projeto.projectConcluded && projeto.projectConcluded == true" style="position: absolute; right: 0; top: 0; left: auto; bottom: auto; height: 60px !important;" src={{iconConcluido}}>\n\n                <img src="{{ projeto.thumb }}">\n\n              </ion-thumbnail></ion-col>\n\n            <ion-col col-8>\n\n              <h2 [ngClass]="project == \'know-house\' ?  \'font-style know-house-title\' : \'\'">{{ projeto.tituloApp? projeto.tituloApp : projeto.titulo }}</h2>\n\n              <p>{{ projeto.descricao }}</p>\n\n              <p style="font-size: 1rem;" *ngIf="idiom == \'01\' && projeto.content_only == 1 ">Clique aqui</p>\n\n              <p style="font-size: 1.3rem;" *ngIf="idiom == \'02\' && projeto.content_only == 1 && project == \'edicom\'" style="color: #49a6c9;">Haz clic aquí.</p>\n\n              <p style="font-size: 1.3rem;" *ngIf="idiom == \'02\' && projeto.content_only == 1 && project != \'edicom\'">Haz clic aquí.</p>\n\n            </ion-col>\n\n          </ion-row>\n\n        </div>\n\n\n\n      </ion-item>\n\n    </ion-grid>\n\n  </ion-list>\n\n  \n\n  <div *ngIf="playVideo">\n\n    <div *ngIf="exibirVideo">\n\n      <video #videoPlayer class="video-player" autoplay="true" controls controlsList="nodownload" style="max-width: 100%; max-height: 100%;"></video>\n\n    </div>\n\n    <iframe *ngIf="exibirEmbed" [src]="sanitizer(urlEmbed)" style="width:100%" frameborder="0" height="300" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\n\n    <button ion-button float-right class="cancel-button" (click)="cleanVideo()">Voltar</button>\n\n  </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Alan\Desktop\ALAN\TRABALHO\VISION\PROJETOS\BEC\EAD\IONIC\PROJETO\EAD\src\pages\list-videos-v03\list-videos-v03.html"*/,
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
    ], ListVideosV03Page);
    return ListVideosV03Page;
}());

//# sourceMappingURL=list-videos-v03.js.map

/***/ })

});
//# sourceMappingURL=11.js.map