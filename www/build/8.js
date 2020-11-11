webpackJsonp([8,18],{

/***/ 455:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileModalModule", function() { return FileModalModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__file_modal__ = __webpack_require__(485);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FileModalModule = /** @class */ (function () {
    function FileModalModule() {
    }
    FileModalModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__file_modal__["a" /* FileModalComponent */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_1__file_modal__["a" /* FileModalComponent */])
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_1__file_modal__["a" /* FileModalComponent */]]
        })
    ], FileModalModule);
    return FileModalModule;
}());

//# sourceMappingURL=file-modal.module.js.map

/***/ }),

/***/ 473:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoPageModule", function() { return PhotoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__photo__ = __webpack_require__(504);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_menu_sup_menu_sup_module__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_file_modal_file_modal_module__ = __webpack_require__(455);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var PhotoPageModule = /** @class */ (function () {
    function PhotoPageModule() {
    }
    PhotoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__photo__["a" /* PhotoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__photo__["a" /* PhotoPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_menu_sup_menu_sup_module__["a" /* MenuSupModule */],
                __WEBPACK_IMPORTED_MODULE_4__components_file_modal_file_modal_module__["FileModalModule"]
            ],
        })
    ], PhotoPageModule);
    return PhotoPageModule;
}());

//# sourceMappingURL=photo.module.js.map

/***/ }),

/***/ 476:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuSupModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__menu_sup__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(45);
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

/***/ 477:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuSupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(340);
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
            selector: 'menu-sup',template:/*ion-inline-start:"C:\Users\alanj\Desktop\ALAN\VISION\PROJETOS\BEC\INTEGRADO\PROJETO\EAD\src\components\menu-sup\menu-sup.html"*/'<ion-badge *ngIf="pendentChat" color="danger" round [ngClass]="version == \'01\' ? \'top-badge badge-margin-v1\' : version == \'02\' ? \'top-badge badge-margin-v2\' : \'top-badge badge-margin-v1\'">!</ion-badge>\n\n<!-- <a *ngIf="version == \'01\' || version == \'02\' && active != true" (click)="redirectToChatPage()" [ngClass]="version == \'01\' ? \'menu-top menu-height-v1\' : version == \'02\' ? \'menu-top menu-height-v2\' : \'menu-top menu-height-v1\'"></a> -->\n\n<button *ngIf="(version == \'01\' || version == \'02\') && active != true" outline (click)="redirectToChatPage()" [ngClass]="version == \'01\' ? \'menu-top menu-height-v1\' : version == \'02\' ? \'menu-top menu-height-v2\' : \'menu-top menu-height-v1\'" ion-button icon-only>\n\n  <ion-icon *ngIf="project == \'ead\'" [ngClass]="active == true ? \'vcc-custom-chat-active\' : \'vcc-custom-chat\'"></ion-icon>\n\n  <ion-icon *ngIf="project == \'edicom\'" [ngClass]="active == true ? \'edicom-custom-chat-active\' : \'edicom-custom-chat\'"></ion-icon>\n\n  <ion-icon *ngIf="project == \'marketing-house\'" [ngClass]="active == true ? \'mrkhouse-custom-chat-active\' : \'mrkhouse-custom-chat\'"></ion-icon>\n\n  <ion-icon *ngIf="project == \'know-house\'" [ngClass]="active == true ? \'knowh-custom-chat-active\' : \'knowh-custom-chat\'"></ion-icon>\n\n  <ion-icon *ngIf="project == \'hkt369\'" [ngClass]="active == true ? \'hkt369-custom-chat-active\' : \'hkt369-custom-chat\'"></ion-icon>\n\n</button>\n\n\n\n<button *ngIf="(version == \'01\' || version == \'02\')  && active == true" [disabled]="true" outline [ngClass]="version == \'01\' ? \'menu-top menu-height-v1\' : version == \'02\' ? \'menu-top menu-height-v2\' : \'menu-top menu-height-v1\'" ion-button icon-only>\n\n  <ion-icon *ngIf="project == \'ead\'" [ngClass]="active == true ? \'vcc-custom-chat-active\' : \'vcc-custom-chat\'"></ion-icon>\n\n  <ion-icon *ngIf="project == \'edicom\'" [ngClass]="active == true ? \'edicom-custom-chat-active\' : \'edicom-custom-chat\'"></ion-icon>\n\n  <ion-icon *ngIf="project == \'marketing-house\'" [ngClass]="active == true ? \'mrkhouse-custom-chat-active\' : \'mrkhouse-custom-chat\'"></ion-icon>\n\n  <ion-icon *ngIf="project == \'know-house\'" [ngClass]="active == true ? \'knowh-custom-chat-active\' : \'knowh-custom-chat\'"></ion-icon>\n\n  <ion-icon *ngIf="project == \'hkt369\'" [ngClass]="active == true ? \'hkt369-custom-chat-active\' : \'hkt369-custom-chat\'"></ion-icon>\n\n</button>\n\n'/*ion-inline-end:"C:\Users\alanj\Desktop\ALAN\VISION\PROJETOS\BEC\INTEGRADO\PROJETO\EAD\src\components\menu-sup\menu-sup.html"*/
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

/***/ 485:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FileModalComponent = /** @class */ (function () {
    function FileModalComponent(navParams, viewCtrl, storage) {
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.storage = storage;
        this.project = '';
        this.file = navParams.data.file;
    }
    FileModalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('Project').then(function (value) {
            _this.project = value;
        });
    };
    FileModalComponent.prototype.confirm = function () {
        var data = { sendFile: true };
        this.viewCtrl.dismiss(data);
    };
    FileModalComponent.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["n" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["n" /* Slides */])
    ], FileModalComponent.prototype, "slides", void 0);
    FileModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'file-modal',template:/*ion-inline-start:"C:\Users\alanj\Desktop\ALAN\VISION\PROJETOS\BEC\INTEGRADO\PROJETO\EAD\src\components\file-modal\file-modal.html"*/'<ion-content padding class="background">\n\n  <div>\n\n    <img src={{file}}>\n\n  </div>\n\n  <div>\n\n    <button [ngClass]="project == \'edicom\' ? \'button-edicom\' : project == \'know-house\' ? \'button-know-house\' : \'button-default\'" ion-button (click)="confirm()">Confirmar</button>\n\n    <button [ngClass]="project == \'edicom\' ? \'button-edicom\' : project == \'know-house\' ? \'button-know-house\' : \'button-default\'" ion-button (click)="cancel()">Cancelar</button>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\alanj\Desktop\ALAN\VISION\PROJETOS\BEC\INTEGRADO\PROJETO\EAD\src\components\file-modal\file-modal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["q" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], FileModalComponent);
    return FileModalComponent;
}());

//# sourceMappingURL=file-modal.js.map

/***/ }),

/***/ 504:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhotoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_http_service_http_service__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_animations__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_moment__);
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









var PhotoPage = /** @class */ (function () {
    function PhotoPage(storage, camera, modalCtrl, actionSheetCtrl, http, loadingCtrl, alertCtrl, toastCtrl, menu, DomSanitizer) {
        var _this = this;
        this.storage = storage;
        this.camera = camera;
        this.modalCtrl = modalCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.menu = menu;
        this.DomSanitizer = DomSanitizer;
        this.titleTesteira = 'Fotos';
        this.complementTitle = '';
        this.globalUrl = '';
        this.idiom = '';
        this.expanded = false;
        this.pics = [];
        this.picsOriginal = [];
        this.contestEnabled = false;
        this.items = [];
        this.cont = 0;
        this.userCategoriesInContest = [];
        this.showFilterV02 = false;
        this.categoryExpanded = false;
        this.iconTrofeu = '';
        this.iconProfile = '';
        this.iconFiltroFoto = '';
        this.iconAddFoto = '';
        this.iconUserProfile = '';
        storage.get('GlobalUrl').then(function (value) {
            _this.globalUrl = value;
        });
        menu.enable(true);
        this.storage.get('Platform').then(function (value) {
            switch (value) {
                case 'android':
                    _this.iconTrofeu = '../../assets/imgs/trofeu.png';
                    _this.iconProfile = '../../assets/imgs/user-profile.png';
                    _this.iconFiltroFoto = '../../assets/imgs/filtro-foto.png';
                    _this.iconAddFoto = '../../assets/imgs/inserir-foto.png';
                    _this.iconUserProfile = './assets/imgs/user-profile.png';
                    break;
                case 'ios':
                    _this.iconTrofeu = './assets/imgs/trofeu.png';
                    _this.iconProfile = './assets/imgs/user-profile.png';
                    _this.iconFiltroFoto = './assets/imgs/filtro-foto.png';
                    _this.iconAddFoto = './assets/imgs/inserir-foto.png';
                    _this.iconUserProfile = './assets/imgs/user-profile.png';
                    break;
            }
        });
    }
    PhotoPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('Idiom').then(function (value) {
            _this.idiom = value;
        });
        this.storage.get('Project').then(function (value) {
            _this.project = value;
            /*PROJETOS:
              marketing-house
              edicom
              vcc
            */
        });
        this.getProject();
        //this.getPics();
        this.storage.get('clienteId').then(function (clienteId) {
            _this.user_id = clienteId;
        });
        this.storage.get('clienteThumb').then(function (thumb) {
            _this.user_thumb = thumb ? thumb : _this.iconUserProfile;
        });
    };
    PhotoPage.prototype.getProject = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Espere...'
        });
        loading.present();
        this.storage.get('clienteCompanyId').then(function (companyId) {
            _this.storage.get('clienteId').then(function (clienteId) {
                _this.http.getAll('/api/conteudos', { company_id: companyId, user_id: clienteId, type: "ICON4" })
                    .subscribe(function (data) {
                    data.forEach(function (element, index) {
                        data[index].showAulas = false;
                        element.lessons.forEach(function (l) {
                            l['expanded'] = false;
                        });
                    });
                    data.map(function (d, idx) {
                        if (data.lessons) {
                            var lessons = d.lessons.filter(function (l) { return l && l.disponivel_em && new Date(l.disponivel_em) <= new Date() || !l.disponivel_em; }).sort(function (a, b) { return a.order - b.order; });
                            data[idx].lessons = lessons.map(function (lesson) {
                                var gotVideo = lesson.contents.filter(function (e) { return e.tipo == 'video'; }).length > 0 ? true : false;
                                return __assign({}, lesson, { gotVideo: gotVideo });
                            });
                        }
                    });
                    if (data.length > 0) {
                        _this.imageProject = data[0];
                        _this.categories = data[0].categories;
                        _this.contestEnabled = data[0].contest == 0 ? false : true;
                    }
                    loading.dismiss();
                });
            });
        });
    };
    PhotoPage.prototype.getPics = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Espere...'
        });
        loading.present();
        this.storage.get('clienteCompanyId').then(function (companyId) {
            _this.storage.get('clienteId').then(function (clienteId) {
                _this.http.getAll('/api/projeto/images', null).subscribe(function (data) {
                    _this.pics = data.length ? data.map(function (p) {
                        return __assign({}, p, { created_at: _this.idiom == '02' ? __WEBPACK_IMPORTED_MODULE_7_moment___default()(p.created_at).locale('es').format('lll') : __WEBPACK_IMPORTED_MODULE_7_moment___default()(p.created_at).locale('pt-br').format('lll'), user: __assign({}, p.user, { thumb: p.user.thumb != null ? p.user.thumb : _this.iconUserProfile }), category: _this.categories ?
                                _this.categories.filter(function (c) { return c.id == p.image_category_id; })[0]
                                : null, uploaded_time: _this.idiom == '02' ? p.uploaded_time.replace('há', 'hace') : p.uploaded_time, liked: p.likes.length > 0 ?
                                p.likes.filter(function (f) {
                                    return f.user_id == clienteId;
                                }).length > 0 ? true : false
                                : false, complained: p.complaints.length > 0 ?
                                p.complaints.filter(function (c) {
                                    return c.complainer_id == clienteId;
                                }).length > 0 ? true : false
                                : false, total_likes: p.likes.length });
                    }) : null;
                    _this.picsOriginal = _this.pics;
                    //verifica em qual categoria o usuario ja esta concorrendo 
                    _this.userCategoriesInContest = _this.pics && _this.categories ? _this.categories.map(function (c) {
                        return {
                            categoryId: c.id,
                            inContest: _this.pics.filter(function (p) {
                                return p.image_category_id == c.id && p.is_contest == 1 && p.user_id == clienteId;
                            }).length > 0 ? true : false
                        };
                    }) : null;
                    loading.dismiss();
                    if (_this.pics)
                        _this.doInfinite();
                });
            });
        });
    };
    PhotoPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        setTimeout(function () {
            var intCont = 0;
            for (var i = _this.cont; i < _this.pics.length; i++) {
                if (intCont < 4) {
                    _this.items.push(_this.pics[i]);
                    _this.cont = _this.cont + 1;
                }
                else {
                    break;
                }
                intCont++;
            }
            if (infiniteScroll)
                infiniteScroll.complete();
        }, 700);
    };
    PhotoPage.prototype.presentActionSheet = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: this.idiom == '01' ? 'Selecione a opção' : 'Seleccione una opción',
            buttons: [
                {
                    text: this.idiom == '01' ? 'Câmera' : 'Cámara',
                    role: 'destructive',
                    handler: function () {
                        _this.getPic(false, true);
                    }
                }, {
                    text: this.idiom == '01' ? 'Galeria' : 'Galería',
                    handler: function () {
                        _this.getPic(true, false);
                    }
                }, {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () {
                    }
                }
            ]
        });
        actionSheet.present();
    };
    PhotoPage.prototype.getPic = function (gallery, camera) {
        var _this = this;
        if (gallery === void 0) { gallery = false; }
        if (camera === void 0) { camera = false; }
        var options;
        if (gallery == true) {
            options = {
                quality: 50,
                destinationType: this.camera.DestinationType.DATA_URL,
                encodingType: this.camera.EncodingType.JPEG,
                mediaType: this.camera.MediaType.PICTURE,
                sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            };
        }
        else if (camera == true) {
            options = {
                quality: 50,
                destinationType: 0,
                /*         targetWidth: 300,
                        targetHeight: 400, */
                encodingType: this.camera.EncodingType.JPEG,
                mediaType: this.camera.MediaType.PICTURE,
                saveToPhotoAlbum: false,
                allowEdit: true,
            };
        }
        this.camera.getPicture(options).then(function (imageData) {
            _this.fileUpload = "data:image/jpeg;base64," + imageData;
            var photoModal = _this.modalCtrl.create('photo-modal', { photo: _this.fileUpload, categories: _this.categories, contestEnabled: _this.contestEnabled, userCategoriesInContest: _this.userCategoriesInContest });
            photoModal.onDidDismiss(function (data) {
                if (data.sendFile) {
                    var loading = _this.loadingCtrl.create({
                        content: 'Espere...'
                    });
                    loading.present();
                    _this.storage.get('clienteId').then(function (clienteId) {
                        var formData = new FormData();
                        formData.append('image', _this.getBlob(imageData, 'mimes:jpeg'));
                        formData.append('project_id', _this.imageProject.id);
                        formData.append('user_id', clienteId);
                        formData.append('image_category_id', data.categoryId);
                        formData.append('is_contest', data.contest == true ? '1' : '0');
                        _this.http.post('/api/projeto/upload', formData, "form-data").subscribe(function (result) {
                            _this.items = [];
                            _this.cont = 0;
                            _this.getPics();
                        });
                    });
                    loading.dismiss();
                }
            });
            photoModal.present();
        }, function (err) {
            // Handle error
        });
    };
    PhotoPage.prototype.disablePic = function (pic) {
        var _this = this;
        if (pic.is_contest == 1) {
            var toast = this.toastCtrl.create({
                message: this.idiom == '01' ? "Não é possível remover uma imagem de concurso." :
                    this.idiom == '02' ? "No puedes eliminar una imagen del concurso." : '',
                duration: 3000,
                position: 'top'
            });
            toast.present();
        }
        else {
            var actionSheet = this.actionSheetCtrl.create({
                title: this.idiom == '01' ? "Deseja realmente apagar a imagem?" :
                    this.idiom == '02' ? "¿De verdad quieres borrar la imagen?" : '',
                buttons: [
                    {
                        text: this.idiom == '01' ? "Sim" :
                            this.idiom == '02' ? "Si" : '',
                        role: 'destructive',
                        handler: function () {
                            _this.http.post('/api/projeto/set-inactive', { id: pic.id, user_id: pic.user_id }).subscribe(function (result) {
                                if (result) {
                                    var toast = _this.toastCtrl.create({
                                        message: _this.idiom == '01' ? "Foto removida com sucesso." :
                                            _this.idiom == '02' ? "Foto removida com sucesso." : '',
                                        duration: 3000,
                                        position: 'top'
                                    });
                                    toast.present();
                                    _this.items = [];
                                    _this.cont = 0;
                                    _this.getPics();
                                }
                                else {
                                    var toast = _this.toastCtrl.create({
                                        message: _this.idiom == '01' ? "Não foi possível remover a imagem." :
                                            _this.idiom == '02' ? "No se pudo eliminar la imagen." : '',
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
                        handler: function () {
                        }
                    }
                ]
            });
            actionSheet.present();
        }
    };
    PhotoPage.prototype.getBlob = function (b64Data, contentType, sliceSize) {
        if (sliceSize === void 0) { sliceSize = 512; }
        contentType = contentType || '';
        sliceSize = sliceSize || 512;
        var byteCharacters = atob(b64Data);
        var byteArrays = [];
        for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
            var slice = byteCharacters.slice(offset, offset + sliceSize);
            var byteNumbers = new Array(slice.length);
            for (var i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
            }
            var byteArray = new Uint8Array(byteNumbers);
            byteArrays.push(byteArray);
        }
        var blob = new Blob(byteArrays, { type: contentType });
        return blob;
    };
    PhotoPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.storage.get("AppConfig").then(function (config) {
            if (config.internoApp4 && config.internoApp4['text']) {
                _this.titleTesteira = config.internoApp4['text'];
            }
            else {
                _this.titleTesteira = _this.idiom == '01' ? 'Fotos' : 'Fotos';
            }
        });
        this.complementTitle = '';
        this.storage.get('LayoutVersion').then(function (value) {
            _this.version = value;
        });
        this.items = [];
        this.cont = 0;
        this.getPics();
    };
    PhotoPage.prototype.getDetails = function () {
        this.expanded = !this.expanded;
    };
    PhotoPage.prototype.setLiked = function (pic) {
        var _this = this;
        this.storage.get('clienteId').then(function (clienteId) {
            _this.http.post('/api/likes/save', { user_id: clienteId, image_id: pic.id }, '').subscribe(function (result) {
                _this.pics = _this.pics.map(function (p) {
                    var total = p.total_likes + 1;
                    return p.id == pic.id ? __assign({}, p, { liked: true, total_likes: total }) : p;
                });
                _this.picsOriginal = _this.pics;
                _this.items = _this.items.map(function (i) {
                    var total = i.total_likes + 1;
                    return i.id == pic.id ? __assign({}, i, { liked: true, total_likes: total }) : i;
                });
            });
        });
    };
    PhotoPage.prototype.alertMessage = function (type) {
        var message = "";
        if (type == 1)
            message = this.idiom == '01' ? "Você não pode curtir a própria imagem." :
                this.idiom == '02' ? "No puede le gusta a tu propia foto." : '';
        else if (type == 2)
            message = this.idiom == '01' ? "Não é possível descurtir uma imagem." :
                this.idiom == '02' ? "No es posible desmarcar una foto." : '';
        else if (type == 3)
            message = this.idiom == '01' ? "Sua denúncia já foi enviada e está em análise." :
                this.idiom == '02' ? "Tu denuncia ya has sido enviada y estás en revisión." : '';
        var alert = this.alertCtrl.create({
            title: this.idiom == '01' ? "Atenção!" :
                this.idiom == '02' ? "¡Atención!" : '',
            subTitle: message,
            buttons: ['OK']
        });
        alert.present();
    };
    PhotoPage.prototype.filterPics = function (category) {
        var _this = this;
        console.log("CATEGORIA -> ", category);
        var loading = this.loadingCtrl.create({
            content: 'Espere...'
        });
        loading.present();
        this.items = [];
        this.cont = 0;
        this.pics = this.picsOriginal;
        if (category != "all" && category != "contest" && category != "me") {
            this.pics = this.pics.filter(function (i) {
                return i.image_category_id == category.id;
            });
        }
        if (category == "contest") {
            this.pics = this.pics.filter(function (i) {
                return i.is_contest == 1;
            }).sort(function (a, b) {
                if (a.total_likes < b.total_likes) {
                    return 1;
                }
                if (a.total_likes > b.total_likes) {
                    return -1;
                }
                return 0;
            });
        }
        if (category == "me") {
            this.storage.get('clienteId').then(function (clienteId) {
                _this.pics = _this.pics.filter(function (i) {
                    return i.user_id == clienteId;
                });
            });
        }
        this.showFilterV02 = false;
        this.doInfinite();
        loading.dismiss();
        var filterTitle = '';
        if (category == "all")
            filterTitle = this.idiom == '02' ? 'Filtro eliminado' : 'Filtro removido';
        else if (category == "contest")
            filterTitle = this.idiom == '02' ? 'Filtro activo: fotos del concurso' : 'Filtro ativo: fotos de concurso';
        else if (category == 'me')
            filterTitle = this.idiom == '02' ? 'Filtro activo: fotos del concurso' : 'Filtro ativo: minhas fotos';
        else
            filterTitle = this.idiom == '02' ? "Filtro activo: " + category.title : "Filtro ativo: " + category.title;
        var toast = this.toastCtrl.create({
            message: filterTitle,
            duration: 2000,
            position: 'top'
        });
        toast.present();
    };
    PhotoPage.prototype.setComplaint = function (pic) {
        var _this = this;
        var prompt = this.alertCtrl.create({
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
                    handler: function (data) {
                        if (!data.text || data.text.trim() == '') {
                            var toast = _this.toastCtrl.create({
                                message: _this.idiom == '01' ? "É preciso inserir o motivo da denúncia." :
                                    _this.idiom == '02' ? "Debe ingresar el motivo de la queja." : '',
                                duration: 3000,
                                position: 'top'
                            });
                            toast.present();
                        }
                        else {
                            _this.sendComplaint(pic, data.text);
                        }
                    }
                }
            ]
        });
        prompt.present();
    };
    PhotoPage.prototype.sendComplaint = function (pic, description) {
        var _this = this;
        this.storage.get('clienteId').then(function (clienteId) {
            _this.http.post('/api/complaint/save', { complainer_id: clienteId, image_id: pic.id, description: description }, '').subscribe(function (result) {
                _this.picsOriginal = _this.picsOriginal.map(function (p) {
                    return p.id == pic.id ? __assign({}, p, { complained: true }) : p;
                });
                _this.filterPics('all');
                var toast = _this.toastCtrl.create({
                    message: _this.idiom == '01' ? "A sua denúncia foi enviada com sucesso." :
                        _this.idiom == '02' ? "Su queja ha sido enviado con éxito." : '',
                    duration: 3000,
                    position: 'top'
                });
                toast.present();
            });
        });
    };
    PhotoPage.prototype.filterPicsV02 = function () {
        this.showFilterV02 = !this.showFilterV02;
        this.categoryExpanded = false;
    };
    PhotoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-photo',template:/*ion-inline-start:"C:\Users\alanj\Desktop\ALAN\VISION\PROJETOS\BEC\INTEGRADO\PROJETO\EAD\src\pages\photo\photo.html"*/'<ion-header [ngClass]="version == \'01\' ? \'principalHeader\' : version == \'02\' ? \'principalHeaderV02\' : \'principalHeader\'">\n\n  <!-- <img [ngClass]="version == \'01\' ? \'testeira\' : version == \'02\' ? \'testeira-v02\' : \'testeira\'" \n\n  src="{{ globalUrl + \'/storage/uploads/configs/testeira1.png\' }}" > -->\n\n  <img [ngClass]="version == \'01\' ? \'principal-icon\' : version == \'02\' ? \'principal-icon-v02\' : \'principal-icon\'"\n\n  src="{{ globalUrl + \'/storage/uploads/configs/logoHeader.png\' }}" />\n\n  \n\n  <img *ngIf="version == \'01\'" class="testeira-v01" \n\n  src="{{ globalUrl + \'/storage/uploads/configs/testeira1.png\' }}" >\n\n\n\n  <img *ngIf="version == \'02\'" class="testeira-v02" \n\n  src="{{ globalUrl + \'/storage/uploads/configs/testeira2.png\' }}" >\n\n  \n\n  <!--  <img class=logo-header src="./assets/imgs/movera-logo.png" /> -->\n\n  <div *ngIf="version == \'02\' || version == \'01\'">\n\n    <p [ngClass]="project == \'know-house\' ?  \'font-style know-house-title-color\' : \'\'">{{titleTesteira}}  {{complementTitle? \'| \' + complementTitle : \'\'}}</p>\n\n  </div>\n\n  <menu-sup></menu-sup>\n\n</ion-header>\n\n\n\n<ion-content [ngClass]="version == \'01\' ? \'margin-content-l1\' : version == \'02\' ? \'margin-content-l2\' : \'margin-content-l1\'" style="position: relative;" [ngClass]="project == \'marketing-house\' ? \'content mrkhouse-custom-bg\' :\n\n project == \'ead\' ? \'content vcc-custom-bg\' :\n\n  project == \'edicom\' ? \'content edicom-custom-bg\' : \'\'">\n\n\n\n  <div [@inOutAnimation] *ngIf="expanded" style="transition: 2s;">\n\n    <img *ngIf="imageProject" style="text-align: center; width: 100% !important;" [src]="imageProject.thumb" />\n\n    <p style="text-align: center; padding: 20px 10%;">{{imageProject?.descricao}}</p>\n\n  </div>\n\n\n\n  <div>\n\n    <button  *ngIf="imageProject" detail-none (click)="getDetails()" ion-item style="text-align: center; background: none; color: rgb(0, 0, 0);">\n\n      <ion-icon *ngIf="!expanded" style="font-size: 2em !important;" class="arrow-color" name="ios-arrow-down-outline"></ion-icon>\n\n      <ion-icon *ngIf="expanded" style="font-size: 2em !important;" class="arrow-color" name="ios-arrow-up-outline"></ion-icon>\n\n    </button>\n\n    <h2 *ngIf="!imageProject && idiom == \'01\'"> Não existe projeto.</h2>\n\n    <h2 *ngIf="!imageProject && idiom == \'02\'"> No tiene proyecto.</h2>\n\n  </div>\n\n\n\n  \n\n  <div *ngIf="showFilterV02 == true" style="position: sticky; background-color: #f6f6f6; width: 60%; top: 0px; z-index: 100; padding-left: 10px; height: 100%;">\n\n    <ion-list class=\'filterV02\'>\n\n      <ion-item (click)="filterPics(\'me\')">\n\n        <ion-label style="font-weight: bold; font-size: 1.5rem;">Mis Fotos</ion-label>\n\n      </ion-item>\n\n      <ion-item (click)="filterPics(\'contest\')">\n\n        <ion-label style="font-weight: bold; font-size: 1.5rem;">Fotos Consurso</ion-label>\n\n      </ion-item>\n\n      <ion-item (click)="filterPics(\'all\')">\n\n        <ion-label style="font-weight: bold; font-size: 1.5rem;">Todas las Fotos</ion-label>\n\n      </ion-item>\n\n      <ion-item (click)="categoryExpanded = !categoryExpanded">\n\n        <ion-label style="font-weight: bold; font-size: 1.5rem;">Categorias <ion-icon name="ios-arrow-down-outline" style="vertical-align: middle;"></ion-icon></ion-label>\n\n      </ion-item>\n\n      <div *ngIf="categoryExpanded == true">\n\n        <ion-item *ngFor="let category of categories" >\n\n          <ion-label style="padding-left: 10px; font-size: 1.5rem;" (click)="filterPics(category)">{{category.title}}</ion-label>\n\n        </ion-item>\n\n      </div>\n\n    </ion-list>\n\n  </div>\n\n\n\n  <ion-card *ngFor="let pic of items" style="margin-top: 25px !important;">\n\n    <div style="padding: 0 15px;" [ngClass]="pic.is_contest == 1 && project != \'edicom\' ? \'bg-contest\' : \'\'">\n\n      <h2 *ngIf="pic.is_contest == 1 && idiom == \'01\' && project != \'edicom\'" style="text-align: center; padding: 5px; font-weight: bold;">Foto de concurso!</h2>\n\n      <h2 *ngIf="pic.is_contest == 1 && idiom == \'02\' && project != \'edicom\'" style="text-align: center; padding: 5px; font-weight: bold;">¡Foto del concurso!</h2>\n\n      <ion-item>\n\n        <ion-avatar item-start>\n\n          <img [src]="pic.user.thumb">\n\n        </ion-avatar>\n\n        <h2>{{ pic.user?.nome }}</h2>\n\n        <p>{{ pic.created_at }}</p>\n\n      </ion-item>\n\n      <div style="position: relative;">\n\n        <img style="position: absolute; height: 45px; width: 45px; right: 0;" *ngIf="project == \'edicom\' && pic.is_contest == 1" src={{iconTrofeu}}>\n\n        <img [src]="pic.path">   \n\n      </div>\n\n         \n\n      <ion-card-content style="height: 60px;">\n\n        <ion-grid>\n\n          <ion-row>\n\n            <ion-col col-2>\n\n              <ion-item>\n\n                <ion-avatar item-start>\n\n                  <img *ngIf="pic.category" src={{pic.category.thumb}}>\n\n                </ion-avatar>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col col-8 style="display: flex; align-items: center;">\n\n              <ion-avatar item-start>\n\n                <ion-label *ngIf="pic.category" style="text-align: initial ! important;">{{pic.category.title}}</ion-label>\n\n              </ion-avatar>\n\n            </ion-col>\n\n            <ion-col *ngIf="pic.user_id != user_id" col-2 style="display: flex; align-items: center;">\n\n                <button *ngIf="pic.complained == false" ion-button clear round icon-only (click)="setComplaint(pic)">\n\n                  <ion-icon name="ios-megaphone-outline"></ion-icon>\n\n                </button>\n\n                <button *ngIf="pic.complained == true" ion-button clear round icon-only color="danger" (click)="alertMessage(3)">\n\n                  <ion-icon name="ios-megaphone"></ion-icon>\n\n                </button>\n\n            </ion-col>\n\n            <ion-col *ngIf="pic.user_id == user_id" col-2 style="display: flex; align-items: center;">\n\n              <button ion-button clear round icon-only (click)="disablePic(pic)">\n\n                <ion-icon name="ios-trash-outline"></ion-icon>\n\n              </button>\n\n          </ion-col>            \n\n          </ion-row>\n\n        </ion-grid>\n\n      </ion-card-content>\n\n    \n\n      <ion-row>\n\n        <ion-col>\n\n          <button *ngIf="pic.user_id == user_id" ion-button icon-start clear small color="danger" (click)="alertMessage(1)">\n\n            <ion-icon name="md-heart-outline"></ion-icon>\n\n            <div>{{pic.total_likes}}</div>\n\n          </button>\n\n\n\n          <button *ngIf="pic.liked == false && pic.user_id != user_id" ion-button icon-start clear small color="danger" (click)="setLiked(pic)">\n\n            <ion-icon name="md-heart-outline"></ion-icon>\n\n            <div>{{pic.total_likes}}</div>\n\n          </button>\n\n          <button *ngIf="pic.liked == true && pic.user_id != user_id" ion-button icon-start clear small color="danger" (click)="alertMessage(2)">\n\n            <ion-icon name="md-heart"></ion-icon>\n\n            <div>{{pic.total_likes}}</div>\n\n          </button>\n\n        </ion-col>\n\n        <ion-col align-self-center text-center>\n\n          <ion-note>\n\n            {{pic.uploaded_time}}\n\n          </ion-note>\n\n        </ion-col>\n\n      </ion-row>\n\n    </div>\n\n  </ion-card>\n\n\n\n  <ion-infinite-scroll style="padding-bottom: 110px !important;" (ionInfinite)="doInfinite($event)">\n\n    <ion-infinite-scroll-content>\n\n      \n\n    </ion-infinite-scroll-content>\n\n  </ion-infinite-scroll> \n\n\n\n<!--   <ion-card *ngFor="let pic of pics">\n\n    <ion-card-header>\n\n      {{pic?.user_id}}\n\n    </ion-card-header>\n\n    <img [src]="pic.path" />\n\n  </ion-card> -->\n\n\n\n  <ion-fab left bottom *ngIf="imageProject && project == \'edicom\' && picsOriginal">\n\n    <ion-avatar mini ion-fab (click)="filterPicsV02()">\n\n      <img src={{iconFiltroFoto}}>\n\n    </ion-avatar>\n\n  </ion-fab>\n\n\n\n  <ion-fab left bottom *ngIf="imageProject && project != \'edicom\' && picsOriginal">\n\n    <button ion-fab mini color="light"><ion-icon name="md-search"></ion-icon></button>\n\n    <ion-fab-list side="top">\n\n      <ion-avatar ion-fab (click)="filterPics(\'all\')">\n\n        <ion-icon name="ios-undo"></ion-icon>\n\n      </ion-avatar>\n\n      <ion-avatar ion-fab (click)="filterPics(\'me\')">\n\n        <img [src]="DomSanitizer.bypassSecurityTrustUrl(user_thumb)">\n\n      </ion-avatar> \n\n      <ion-avatar ion-fab (click)="filterPics(\'contest\')">\n\n        <ion-icon name="md-trophy"></ion-icon>\n\n      </ion-avatar>\n\n      <ion-avatar ion-fab mini *ngFor="let category of categories" (click)="filterPics(category)">\n\n        <img src={{category.thumb}}>\n\n      </ion-avatar>     \n\n    </ion-fab-list>\n\n  </ion-fab>\n\n\n\n  <ion-fab right bottom *ngIf="imageProject">\n\n    <button *ngIf="project != \'edicom\'" ion-fab mini color="#7878ff" (click)="presentActionSheet()">\n\n      <ion-icon name="md-add"></ion-icon>\n\n    </button>\n\n\n\n    <ion-avatar *ngIf="project == \'edicom\'" mini ion-fab (click)="presentActionSheet()">\n\n      <img src={{iconAddFoto}}>\n\n    </ion-avatar>\n\n  </ion-fab>\n\n</ion-content>'/*ion-inline-end:"C:\Users\alanj\Desktop\ALAN\VISION\PROJETOS\BEC\INTEGRADO\PROJETO\EAD\src\pages\photo\photo.html"*/,
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["i" /* trigger */])('inOutAnimation', [
                    Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["h" /* transition */])(':enter', [
                        Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["g" /* style */])({ height: 0, opacity: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["e" /* animate */])('1s ease-out', Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["g" /* style */])({ height: 400, opacity: 1 }))
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["h" /* transition */])(':leave', [
                        Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["g" /* style */])({ height: 400, opacity: 1 }),
                        Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["e" /* animate */])('1s ease-in', Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["g" /* style */])({ height: 0, opacity: 0 }))
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_http_service_http_service__["a" /* HttpServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["c" /* DomSanitizer */]])
    ], PhotoPage);
    return PhotoPage;
}());

//# sourceMappingURL=photo.js.map

/***/ })

});
//# sourceMappingURL=8.js.map