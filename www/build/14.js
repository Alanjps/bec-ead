webpackJsonp([14],{

/***/ 465:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs__ = __webpack_require__(486);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TabsPageModule = /** @class */ (function () {
    function TabsPageModule() {
    }
    TabsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__tabs__["a" /* TabsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tabs__["a" /* TabsPage */]),
            ],
        })
    ], TabsPageModule);
    return TabsPageModule;
}());

//# sourceMappingURL=tabs.module.js.map

/***/ }),

/***/ 486:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_onesignal__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_is_cordova_available__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_http_service_http_service__ = __webpack_require__(111);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TabsPage = /** @class */ (function () {
    function TabsPage(navCtrl, navParams, storage, oneSignal, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.oneSignal = oneSignal;
        this.http = http;
        this.tab1 = '';
        this.tab7 = 'notification-page';
        /* tab8 = 'edit-user-v02-page'; */
        this.tab8 = 'edit-user-page';
        this.tab9 = 'photo-page';
        this.tab10 = '';
        this.showTab5 = true;
        this.showTabSair = true;
        this.renderRoot = false;
        this.chatAtTop = true;
        this.notificationEnabled = false;
        this.version = '01';
        this.totalNotification = null;
        this.showTab04 = false;
        this.showTab05 = false;
        this.goToDeafultPage();
    }
    TabsPage_1 = TabsPage;
    TabsPage.prototype.goToDeafultPage = function () {
        var _this = this;
        this.storage.get('LayoutVersion').then(function (value) {
            _this.chatAtTop = false;
            switch (value) {
                case '02': {
                    _this.version = '02';
                    _this.tab1 = 'list-videos-v02-page';
                    _this.tab10 = 'list-videos-v03-page';
                    _this.chatAtTop = true;
                    _this.notificationEnabled = true;
                    break;
                }
                default: {
                    _this.version = '01';
                    _this.tab1 = 'list-videos-page';
                    _this.tab10 = 'list-videos-page-v04';
                    _this.chatAtTop = true;
                    _this.notificationEnabled = false;
                }
            }
            _this.storage.get('clienteCompanyId').then(function (companyId) {
                _this.storage.get('clienteId').then(function (clienteId) {
                    _this.http.getAll('/api/conteudos', { company_id: companyId, user_id: clienteId, type: "ICON4" })
                        .subscribe(function (data) {
                        if (data.length > 0)
                            _this.showTab04 = true;
                        _this.http.getAll('/api/conteudos', { company_id: companyId, user_id: clienteId, type: "ICON5" })
                            .subscribe(function (data) {
                            if (data.length > 0)
                                _this.showTab05 = true;
                            _this.getTotalNotifications(true);
                            setTimeout(function () {
                                setInterval(function () {
                                    _this.getTotalNotifications();
                                }, 5000);
                            }, 5000);
                            _this.renderRoot = true;
                        });
                    });
                });
            });
        });
    };
    TabsPage.prototype.getTotalNotifications = function (goToNotification) {
        var _this = this;
        if (goToNotification === void 0) { goToNotification = false; }
        this.storage.get('clienteId').then(function (id) {
            _this.http.getAll('/mensagens/getNotifications', { lido: false, user_id: id }, 'get')
                .subscribe(function (data) {
                _this.totalNotification = data.length > 0 ? data.length : null;
                if (data.length > 0 && goToNotification == true) {
                    _this.appTabs.select(1, { animate: true });
                }
            });
        });
    };
    TabsPage.prototype.checkOneSignal = function () {
        var _this = this;
        if (Object(__WEBPACK_IMPORTED_MODULE_4__common_is_cordova_available__["a" /* isCordovaAvailable */])()) {
            //this.storage.get('Project').then((project)=>{
            //this.project = project;
            var firebaseKey = '';
            var firebaseSenderId = '';
            var onesignalAppId = '';
            switch (this.project) {
                case 'marketing-house': {
                    onesignalAppId = '883bb93e-4053-43f0-865c-a5d52ca89a80';
                    firebaseKey = 'AAAA6zTPRhs:APA91bFAjdg13h1oQ_3LDNBbRd03TbWEkMTSpbXMc1lz4sToQ9VjcX4LYF5mC0Kh31aLfdMVISXnK4FTZV23hbiZqoFDFPpmXqF2Ijynuql5rlSGmyA-Ojy6e4Qu_ANDMR0LiByu9BkS';
                    firebaseSenderId = '1010203313691';
                    break;
                }
                case 'edicom': {
                    onesignalAppId = 'c3765e9e-79b4-4dbc-b3ad-a31396017591';
                    firebaseKey = 'AAAA5JZ5Y9U:APA91bHSACC_j1IijWyCoCpCojFln7TtQK14oNcUIi_PxXjvciAFR4L6xgYcuJpMFxR33pVrRg49Gw646jQmrKmvYe9X570IRZNVn-pu9pm3Ok0z39bd0r9T1W8geO5HJ56pF6tqF6GB';
                    firebaseSenderId = '981777081301';
                    break;
                }
                case 'ead': {
                    onesignalAppId = '946eb156-716e-4000-853f-18f41cc2b193';
                    //firebaseKey='AAAAHNSgMm4:APA91bFf84ZghEqCHXgqBNV5tC076OmSYnqUurpu4wDKW6WNjyLbJ3TXNxn6iIpPBT6gskXroMG45lB13l4ZhfLsw9rYzhKWv10wb-iMc2OjKCJkFYdHz3Crsk3TPQ9oh7DGDLFicLsj';
                    firebaseKey = 'AAAABZVhZoI:APA91bFUtPdBDTVN-NHZc7Wk53Tn9wZiz1qjHTVKtyssQfur2F1t509yEe95CMOf6M0mkdQZYXBp6xBEhozI8J274GU6JHmLBSGrFWIAUxFk4w4Le3UdrjdvzdQyptkULVkuHPBohGND';
                    firebaseSenderId = '23981024898';
                    break;
                }
                case 'hkt369': {
                    onesignalAppId = 'abf814a3-a2bb-4ae4-9a63-422d37394e64';
                    firebaseKey = 'AAAAtys66f8:APA91bGBdecST10j3dG5AbL8-dRt0uMgYcS_zGutn-md8ZTi_0A-D-PLlXdoY0E5Akuwo9DUaWMxbv6vCXpHePJ2M4UeneYVlrUcuHUFIsXmiLbx4xXGZyMuLw0AsUCWM4IP3j7YdcsG';
                    firebaseSenderId = '786704296447';
                    break;
                }
                case 'know-house': {
                    onesignalAppId = 'd29cd1d1-3a5b-4774-b768-a1026101ea0a';
                    firebaseKey = 'AAAAv6DuekQ:APA91bEWy0U4-HL8f12hbNMEvDKQ1LMr8eA1gP-0gy4Y319eUpljpqwjNrQBrCoCXcl-IWHshA-I__MNi9WeKQfEUVSNDd_sTWI2AkmnAwXjHgUFsFaiyAYbUUyCYUYldoB8vgzLI7Cn';
                    firebaseSenderId = '823038736964';
                    break;
                }
            }
            /*
              ANTIGO---------------------------------------------
              this.oneSignal.startInit(
              'AAAAHNSgMm4:APA91bFf84ZghEqCHXgqBNV5tC076OmSYnqUurpu4wDKW6WNjyLbJ3TXNxn6iIpPBT6gskXroMG45lB13l4ZhfLsw9rYzhKWv10wb-iMc2OjKCJkFYdHz3Crsk3TPQ9oh7DGDLFicLsj',
              '123826352750'
            ); */
            this.oneSignal.startInit(onesignalAppId, firebaseSenderId);
            this.oneSignal.getIds().then(function (state) {
                //FAZ O ENVIO DO DEVICE ID PRA WEB
                //id, email, type, device_id
                _this.storage.get('clienteId').then(function (clienteId) {
                    _this.storage.get('clienteEmail').then(function (clienteEmail) {
                        var parametros = {
                            id: clienteId,
                            email: clienteEmail,
                            device_id: state.userId,
                            type: 'android'
                        };
                        _this.http.post('/api/usuarios/set-device', parametros)
                            .subscribe(function (data) {
                        });
                    });
                });
                //});
            }).catch(function (error) { console.log('error no GET IDS', error); });
            this.oneSignal.endInit();
        }
    };
    TabsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.get('Project').then(function (project) {
            _this.project = project;
            _this.checkOneSignal();
        });
    };
    TabsPage.prototype.redirectToListPage = function () {
        if (this.navCtrl.getActive().component !== TabsPage_1) {
            this.appTabs.select(2, { animate: true });
            this.navCtrl.setRoot('tab-page', { logout: true });
        }
    };
    TabsPage.prototype.doLogout = function () {
        this.navCtrl.setRoot('login-page', { logout: true });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('appTabs'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Tabs */])
    ], TabsPage.prototype, "appTabs", void 0);
    TabsPage = TabsPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-tabs',template:/*ion-inline-start:"C:\Users\alanj\Desktop\ALAN\VISION\PROJETOS\BEC\INTEGRADO\PROJETO\EAD\src\pages\tabs\tabs.html"*/'<ion-tabs #appTabs selectedIndex="2" *ngIf="project == \'marketing-house\' && (version == \'02\' || version == \'01\') && renderRoot == true" [ngClass]="chatAtTop == true ? \'ion-tabs\' : \'\'">\n\n  <ion-tab [root]="tab8" tabIcon="tab-mrkhouse-perfil"></ion-tab>\n\n  <ion-tab [root]="tab7" tabIcon="tab-mrkhouse-notificacao" tabBadge="{{totalNotification}}" tabBadgeStyle="danger"></ion-tab>\n\n  <ion-tab [root]="tab1" tabIcon="tab-mrkhouse-agenda" (ionSelect)="redirectToListPage()"></ion-tab>\n\n  <ion-tab *ngIf="showTab04 == true" [root]="tab9" tabIcon="tab-mrkhouse-foto"></ion-tab>\n\n  <ion-tab *ngIf="showTab05 == true" [root]="tab10" tabIcon="tab-mrkhouse-news"></ion-tab>\n\n</ion-tabs>\n\n\n\n<ion-tabs #appTabs selectedIndex="2" *ngIf="project == \'edicom\' && (version == \'02\' || version == \'01\') && renderRoot == true" [ngClass]="chatAtTop == true ? \'ion-tabs\' : \'\'">\n\n  <ion-tab [root]="tab8" tabIcon="tab-edicom-perfil"></ion-tab>\n\n  <ion-tab [root]="tab7" tabIcon="tab-edicom-notificacao" tabBadge="{{totalNotification}}" tabBadgeStyle="danger"></ion-tab>\n\n  <ion-tab [root]="tab1" tabIcon="tab-edicom-agenda" (ionSelect)="redirectToListPage()"></ion-tab>\n\n  <ion-tab *ngIf="showTab04 == true" [root]="tab9" tabIcon="tab-edicom-foto"></ion-tab>\n\n  <ion-tab *ngIf="showTab05 == true" [root]="tab10" tabIcon="tab-edicom-news"></ion-tab>\n\n</ion-tabs>\n\n \n\n\n\n<ion-tabs #appTabs selectedIndex="2" *ngIf="project == \'ead\' && (version == \'02\' || version == \'01\') && renderRoot == true" [ngClass]="chatAtTop == true ? \'ion-tabs\' : \'\'">\n\n  <ion-tab [root]="tab8" tabIcon="tab-vcc-perfil"></ion-tab>\n\n  <ion-tab [root]="tab7" tabIcon="tab-vcc-notificacao" tabBadge="{{totalNotification}}" tabBadgeStyle="danger"></ion-tab>\n\n  <ion-tab [root]="tab1" tabIcon="tab-vcc-agenda" (ionSelect)="redirectToListPage()"></ion-tab>\n\n  <ion-tab *ngIf="showTab04 == true" [root]="tab9" tabIcon="tab-vcc-foto"></ion-tab>\n\n  <ion-tab *ngIf="showTab05 == true" [root]="tab10" tabIcon="tab-vcc-news"></ion-tab>\n\n</ion-tabs>\n\n\n\n<ion-tabs #appTabs selectedIndex="2" *ngIf="project == \'hkt369\' && (version == \'02\' || version == \'01\') && renderRoot == true" [ngClass]="chatAtTop == true ? \'ion-tabs\' : \'\'">\n\n  <ion-tab [root]="tab8" tabIcon="tab-hkt369-perfil"></ion-tab>\n\n  <ion-tab [root]="tab7" tabIcon="tab-hkt369-notificacao" tabBadge="{{totalNotification}}" tabBadgeStyle="danger"></ion-tab>\n\n  <ion-tab [root]="tab1" tabIcon="tab-hkt369-agenda" (ionSelect)="redirectToListPage()"></ion-tab>\n\n  <ion-tab *ngIf="showTab04 == true" [root]="tab9" tabIcon="tab-hkt369-foto"></ion-tab>\n\n  <ion-tab *ngIf="showTab05 == true" [root]="tab10" tabIcon="tab-hkt369-news"></ion-tab>\n\n</ion-tabs>\n\n\n\n<ion-tabs #appTabs selectedIndex="2" *ngIf="project == \'know-house\' && (version == \'02\' || version == \'01\') && renderRoot == true" [ngClass]="chatAtTop == true ? \'ion-tabs\' : \'\'">\n\n  <ion-tab [root]="tab8" tabIcon="tab-knowh-perfil"></ion-tab>\n\n  <ion-tab [root]="tab7" tabIcon="tab-knowh-notificacao" tabBadge="{{totalNotification}}" tabBadgeStyle="danger"></ion-tab>\n\n  <ion-tab [root]="tab1" tabIcon="tab-knowh-agenda" (ionSelect)="redirectToListPage()"></ion-tab>\n\n  <ion-tab *ngIf="showTab04 == true" [root]="tab9" tabIcon="tab-knowh-foto"></ion-tab>\n\n  <ion-tab *ngIf="showTab05 == true" [root]="tab10" tabIcon="tab-knowh-news"></ion-tab>\n\n</ion-tabs>'/*ion-inline-end:"C:\Users\alanj\Desktop\ALAN\VISION\PROJETOS\BEC\INTEGRADO\PROJETO\EAD\src\pages\tabs\tabs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_onesignal__["a" /* OneSignal */],
            __WEBPACK_IMPORTED_MODULE_5__providers_http_service_http_service__["a" /* HttpServiceProvider */]])
    ], TabsPage);
    return TabsPage;
    var TabsPage_1;
}());

//# sourceMappingURL=tabs.js.map

/***/ })

});
//# sourceMappingURL=14.js.map