webpackJsonp([0,18],{

/***/ 456:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadModalModule", function() { return DownloadModalModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__download_modal__ = __webpack_require__(485);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DownloadModalModule = /** @class */ (function () {
    function DownloadModalModule() {
    }
    DownloadModalModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__download_modal__["a" /* DownloadModal */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_1__download_modal__["a" /* DownloadModal */])
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_1__download_modal__["a" /* DownloadModal */]]
        })
    ], DownloadModalModule);
    return DownloadModalModule;
}());

//# sourceMappingURL=download-modal.module.js.map

/***/ }),

/***/ 467:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditUserPageModule", function() { return EditUserPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_user__ = __webpack_require__(498);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_brmasker_ionic_3__ = __webpack_require__(479);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_qrcode2__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_menu_sup_menu_sup_module__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_download_modal_download_modal_module__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular_cropperjs__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular_cropperjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular_cropperjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var EditUserPageModule = /** @class */ (function () {
    function EditUserPageModule() {
    }
    EditUserPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__edit_user__["a" /* EditUserPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__edit_user__["a" /* EditUserPage */]),
                __WEBPACK_IMPORTED_MODULE_3_brmasker_ionic_3__["a" /* BrMaskerModule */],
                __WEBPACK_IMPORTED_MODULE_4_ngx_qrcode2__["a" /* NgxQRCodeModule */],
                __WEBPACK_IMPORTED_MODULE_5__components_menu_sup_menu_sup_module__["a" /* MenuSupModule */],
                __WEBPACK_IMPORTED_MODULE_6__components_download_modal_download_modal_module__["DownloadModalModule"],
                __WEBPACK_IMPORTED_MODULE_7_angular_cropperjs__["AngularCropperjsModule"]
            ],
        })
    ], EditUserPageModule);
    return EditUserPageModule;
}());

//# sourceMappingURL=edit-user.module.js.map

/***/ }),

/***/ 475:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuSupModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__menu_sup__ = __webpack_require__(476);
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

/***/ 476:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuSupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_http_service_http_service__ = __webpack_require__(112);
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
            selector: 'menu-sup',template:/*ion-inline-start:"C:\Users\alanj\Desktop\ALAN\VISION\PROJETOS\BEC\EAD\IONIC\PROJETO\EAD\src\components\menu-sup\menu-sup.html"*/'<ion-badge *ngIf="pendentChat" color="danger" round [ngClass]="version == \'01\' ? \'top-badge badge-margin-v1\' : version == \'02\' ? \'top-badge badge-margin-v2\' : \'top-badge badge-margin-v1\'">!</ion-badge>\n\n<!-- <a *ngIf="version == \'01\' || version == \'02\' && active != true" (click)="redirectToChatPage()" [ngClass]="version == \'01\' ? \'menu-top menu-height-v1\' : version == \'02\' ? \'menu-top menu-height-v2\' : \'menu-top menu-height-v1\'"></a> -->\n\n<button *ngIf="(version == \'01\' || version == \'02\') && active != true" outline (click)="redirectToChatPage()" [ngClass]="version == \'01\' ? \'menu-top menu-height-v1\' : version == \'02\' ? \'menu-top menu-height-v2\' : \'menu-top menu-height-v1\'" ion-button icon-only>\n\n  <ion-icon *ngIf="project == \'ead\'" [ngClass]="active == true ? \'vcc-custom-chat-active\' : \'vcc-custom-chat\'"></ion-icon>\n\n  <ion-icon *ngIf="project == \'edicom\'" [ngClass]="active == true ? \'edicom-custom-chat-active\' : \'edicom-custom-chat\'"></ion-icon>\n\n  <ion-icon *ngIf="project == \'marketing-house\'" [ngClass]="active == true ? \'mrkhouse-custom-chat-active\' : \'mrkhouse-custom-chat\'"></ion-icon>\n\n  <ion-icon *ngIf="project == \'know-house\'" [ngClass]="active == true ? \'knowh-custom-chat-active\' : \'knowh-custom-chat\'"></ion-icon>\n\n  <ion-icon *ngIf="project == \'hkt369\'" [ngClass]="active == true ? \'hkt369-custom-chat-active\' : \'hkt369-custom-chat\'"></ion-icon>\n\n  <ion-icon *ngIf="project == \'simples-trade\'" [ngClass]="active == true ? \'strade-custom-chat-active\' : \'strade-custom-chat\'"></ion-icon>\n\n  <ion-icon *ngIf="project == \'r2m\'" [ngClass]="active == true ? \'r2m-custom-chat-active\' : \'r2m-custom-chat\'"></ion-icon>\n\n  <ion-icon *ngIf="project == \'ava\'" [ngClass]="active == true ? \'ava-custom-chat-active\' : \'ava-custom-chat\'"></ion-icon>\n\n  <ion-icon *ngIf="project == \'tmc\'" [ngClass]="active == true ? \'tmc-custom-chat-active\' : \'tmc-custom-chat\'"></ion-icon>\n\n</button>\n\n\n\n<button *ngIf="(version == \'01\' || version == \'02\')  && active == true" [disabled]="true" outline [ngClass]="version == \'01\' ? \'menu-top menu-height-v1\' : version == \'02\' ? \'menu-top menu-height-v2\' : \'menu-top menu-height-v1\'" ion-button icon-only>\n\n  <ion-icon *ngIf="project == \'ead\'" [ngClass]="active == true ? \'vcc-custom-chat-active\' : \'vcc-custom-chat\'"></ion-icon>\n\n  <ion-icon *ngIf="project == \'edicom\'" [ngClass]="active == true ? \'edicom-custom-chat-active\' : \'edicom-custom-chat\'"></ion-icon>\n\n  <ion-icon *ngIf="project == \'marketing-house\'" [ngClass]="active == true ? \'mrkhouse-custom-chat-active\' : \'mrkhouse-custom-chat\'"></ion-icon>\n\n  <ion-icon *ngIf="project == \'know-house\'" [ngClass]="active == true ? \'knowh-custom-chat-active\' : \'knowh-custom-chat\'"></ion-icon>\n\n  <ion-icon *ngIf="project == \'hkt369\'" [ngClass]="active == true ? \'hkt369-custom-chat-active\' : \'hkt369-custom-chat\'"></ion-icon>\n\n  <ion-icon *ngIf="project == \'simples-trade\'" [ngClass]="active == true ? \'strade-custom-chat-active\' : \'strade-custom-chat\'"></ion-icon>\n\n  <ion-icon *ngIf="project == \'r2m\'" [ngClass]="active == true ? \'r2m-custom-chat-active\' : \'r2m-custom-chat\'"></ion-icon>\n\n  <ion-icon *ngIf="project == \'ava\'" [ngClass]="active == true ? \'ava-custom-chat-active\' : \'ava-custom-chat\'"></ion-icon>\n\n  <ion-icon *ngIf="project == \'tmc\'" [ngClass]="active == true ? \'tmc-custom-chat-active\' : \'tmc-custom-chat\'"></ion-icon>\n\n</button>\n\n'/*ion-inline-end:"C:\Users\alanj\Desktop\ALAN\VISION\PROJETOS\BEC\EAD\IONIC\PROJETO\EAD\src\components\menu-sup\menu-sup.html"*/
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

/***/ 477:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export BrMaskModel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrMaskerIonic3; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(17);


var BrMaskModel = (function () {
    function BrMaskModel() {
        this.type = 'alfa';
        this.decimal = 2;
        this.decimalCaracter = ",";
        this.userCaracters = false;
        this.numberAndTousand = false;
    }
    return BrMaskModel;
}());

var BrMaskerIonic3 = (function () {
    function BrMaskerIonic3(_renderer, _elementRef) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this.brmasker = new BrMaskModel();
    }
    BrMaskerIonic3.prototype.inputKeyup = function (event) {
        var value = this.returnValue(event.target.value);
        this.writeValue(value);
        event.target.value = value;
    };
    BrMaskerIonic3.prototype.inputOnblur = function (event) {
        var value = this.returnValue(event.value);
        this.writeValue(value);
        event.value = value;
    };
    BrMaskerIonic3.prototype.inputFocus = function (event) {
        var value = this.returnValue(event.value);
        this.writeValue(value);
        event.value = value;
    };
    BrMaskerIonic3.prototype.ngOnInit = function () {
        if (!this.brmasker.type) {
            this.brmasker.type = 'all';
        }
        if (!this.brmasker.decimal) {
            this.brmasker.decimal = 2;
        }
        if (!this.brmasker.decimalCaracter) {
            this.brmasker.decimalCaracter = ',';
        }
    };
    BrMaskerIonic3.prototype.writeValue = function (fn) {
        this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', fn);
    };
    BrMaskerIonic3.prototype.registerOnChange = function (fn) {
        return;
    };
    BrMaskerIonic3.prototype.registerOnTouched = function (fn) {
        return;
    };
    BrMaskerIonic3.prototype.setDisabledState = function (isDisabled) {
        if (isDisabled) {
            this._renderer.setElementAttribute(this._elementRef.nativeElement, 'disabled', 'true');
        }
        else {
            this._renderer.setElementAttribute(this._elementRef.nativeElement, 'disabled', 'false');
        }
    };
    BrMaskerIonic3.prototype.writeCreateValue = function (value, config) {
        if (config === void 0) { config = new BrMaskModel(); }
        if (value && config.phone) {
            return value.replace(/^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/gi, '$1 ($2) $3-$4');
        }
        if (value && config.money) {
            return this.writeValueMoney(value, config);
        }
        if (value && config.person) {
            return this.writeValuePerson(value);
        }
        if (value && config.percent) {
            return this.writeValuePercent(value);
        }
        if (value && config.mask) {
            this.brmasker.mask = config.mask;
            if (config.len) {
                this.brmasker.len = config.len;
            }
            return this.onInput(value);
        }
        return value;
    };
    BrMaskerIonic3.prototype.writeValuePercent = function (value) {
        value.replace(/\D/gi, '');
        value.replace(/%/gi, '');
        return value.replace(/([0-9]{0})$/gi, '%$1');
    };
    BrMaskerIonic3.prototype.writeValuePerson = function (value) {
        if (value.length <= 11) {
            return value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/gi, '\$1.\$2.\$3\-\$4');
        }
        else {
            return value.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/gi, '\$1.\$2.\$3\/\$4\-\$5');
        }
    };
    BrMaskerIonic3.prototype.writeValueMoney = function (value, config) {
        if (config === void 0) { config = new BrMaskModel(); }
        return this.moneyMask(value, config);
    };
    BrMaskerIonic3.prototype.returnValue = function (value) {
        if (!this.brmasker.mask) {
            this.brmasker.mask = '';
        }
        if (value) {
            var v = value;
            if (this.brmasker.type == 'alfa') {
                v = v.replace(/\d/gi, '');
            }
            if (this.brmasker.type == 'num') {
                v = v.replace(/\D/gi, '');
            }
            if (this.brmasker.money) {
                return this.moneyMask(this.onInput(v), this.brmasker);
            }
            if (this.brmasker.phone) {
                return this.phoneMask(v);
            }
            if (this.brmasker.phoneNotDDD) {
                return this.phoneNotDDDMask(v);
            }
            if (this.brmasker.person) {
                return this.peapollMask(v);
            }
            if (this.brmasker.percent) {
                return this.percentMask(v);
            }
            if (this.brmasker.numberAndTousand) {
                return this.thousand(v);
            }
            if (this.brmasker.userCaracters) {
                return this.usingSpecialCharacters(v, this.brmasker.mask, this.brmasker.len);
            }
            return this.onInput(v);
        }
        else {
            return '';
        }
    };
    BrMaskerIonic3.prototype.percentMask = function (v) {
        var tmp = v;
        tmp = tmp.replace(/\D/gi, '');
        tmp = tmp.replace(/%/gi, '');
        tmp = tmp.replace(/([0-9]{0})$/gi, '%$1');
        return tmp;
    };
    BrMaskerIonic3.prototype.phoneMask = function (v) {
        var n = v;
        if (n.length > 14) {
            this.brmasker.len = 15;
            this.brmasker.mask = '(99) 99999-9999';
            n = n.replace(/\D/gi, '');
            n = n.replace(/(\d{2})(\d)/gi, '$1 $2');
            n = n.replace(/(\d{5})(\d)/gi, '$1-$2');
            n = n.replace(/(\d{4})(\d)/gi, '$1$2');
        }
        else {
            this.brmasker.len = 14;
            this.brmasker.mask = '(99) 9999-9999';
            n = n.replace(/\D/gi, '');
            n = n.replace(/(\d{2})(\d)/gi, '$1 $2');
            n = n.replace(/(\d{4})(\d)/gi, '$1-$2');
            n = n.replace(/(\d{4})(\d)/gi, '$1$2');
        }
        return this.onInput(n);
    };
    BrMaskerIonic3.prototype.phoneNotDDDMask = function (v) {
        var n = v;
        if (n.length > 9) {
            this.brmasker.len = 10;
            this.brmasker.mask = '99999-9999';
            n = n.replace(/\D/gi, '');
            n = n.replace(/(\d{5})(\d)/gi, '$1-$2');
            n = n.replace(/(\d{4})(\d)/gi, '$1$2');
        }
        else {
            this.brmasker.len = 9;
            this.brmasker.mask = '9999-9999';
            n = n.replace(/\D/gi, '');
            n = n.replace(/(\d{4})(\d)/gi, '$1-$2');
            n = n.replace(/(\d{4})(\d)/gi, '$1$2');
        }
        return this.onInput(n);
    };
    BrMaskerIonic3.prototype.peapollMask = function (v) {
        var n = v;
        if (n.length > 14) {
            this.brmasker.len = 18;
            this.brmasker.mask = '99.999.999/9999-99';
            n = n.replace(/\D/gi, '');
            n = n.replace(/(\d{2})(\d)/gi, '$1.$2');
            n = n.replace(/(\d{3})(\d)/gi, '$1.$2');
            n = n.replace(/(\d{3})(\d)/gi, '$1/$2');
            n = n.replace(/(\d{4})(\d{1,4})$/gi, '$1-$2');
            n = n.replace(/(\d{2})(\d{1,2})$/gi, '$1$2');
        }
        else {
            this.brmasker.len = 14;
            this.brmasker.mask = '999.999.999-99';
            n = n.replace(/\D/gi, '');
            n = n.replace(/(\d{3})(\d)/gi, '$1.$2');
            n = n.replace(/(\d{3})(\d)/gi, '$1.$2');
            n = n.replace(/(\d{3})(\d{1,2})$/gi, '$1-$2');
        }
        return this.onInput(n);
    };
    BrMaskerIonic3.prototype.moneyMask = function (value, config) {
        var decimal = config.decimal || this.brmasker.decimal;
        value = value
            .replace(/\D/gi, '')
            .replace(new RegExp("([0-9]{" + decimal + "})$", "g"), config.decimalCaracter + '$1');
        if (value.length === decimal + 1) {
            return "0" + value; // leading 0 so we're not left with something weird like ",50"
        }
        else if (value.length > decimal + 2 && value.charAt(0) === '0') {
            return value.substr(1); // remove leading 0 when we don't need it anymore
        }
        if (config.thousand && value.length > (Number(4) + Number(config.decimal))) {
            value = value.replace(new RegExp("([0-9]{3})" + config.decimalCaracter + "([0-9]{" + config.decimal + "}$)", "g"), config.thousand + "$1" + config.decimalCaracter + "$2");
        }
        if (config.thousand && value.length > (Number(8) + Number(config.decimal))) {
            value = value.replace(new RegExp("([0-9]{3})" + config.thousand + "([0-9]{3})" + config.decimalCaracter + "([0-9]{" + config.decimal + "}$)", "g"), config.thousand + "$1" + config.thousand + "$2" + config.decimalCaracter + "$3");
        }
        return value;
    };
    BrMaskerIonic3.prototype.onInput = function (value) {
        var ret = this.formatField(value, this.brmasker.mask, this.brmasker.len);
        return ret;
        // if (ret) {
        //   this.element.nativeElement.value = ret;
        // }
    };
    BrMaskerIonic3.prototype.thousand = function (value) {
        var val = value.replace(/\D/gi, '');
        var reverse = val.toString().split('').reverse().join('');
        var thousands = reverse.match(/\d{1,3}/g);
        if (thousands) {
            return thousands.join("" + (this.brmasker.thousand || '.')).split('').reverse().join('');
        }
        return val;
    };
    BrMaskerIonic3.prototype.usingSpecialCharacters = function (campo, Mascara, tamanho) {
        if (!tamanho) {
            tamanho = 99999999999;
        }
        var boleanoMascara;
        var exp = /\-|\.|\,| /gi;
        var campoSoNumeros = campo.toString().replace(exp, '');
        var posicaoCampo = 0;
        var NovoValorCampo = '';
        var TamanhoMascara = campoSoNumeros.length;
        for (var i = 0; i < TamanhoMascara; i++) {
            if (i < tamanho) {
                boleanoMascara = ((Mascara.charAt(i) === '-') || (Mascara.charAt(i) === '.') || (Mascara.charAt(i) === ','));
                if (boleanoMascara) {
                    NovoValorCampo += Mascara.charAt(i);
                    TamanhoMascara++;
                }
                else {
                    NovoValorCampo += campoSoNumeros.charAt(posicaoCampo);
                    posicaoCampo++;
                }
            }
        }
        return NovoValorCampo;
    };
    BrMaskerIonic3.prototype.formatField = function (campo, Mascara, tamanho) {
        if (!tamanho) {
            tamanho = 99999999999;
        }
        var boleanoMascara;
        var exp = /\-|\.|\/|\(|\)|\,|\*|\+|\@|\#|\$|\&|\%|\:| /gi;
        var campoSoNumeros = campo.toString().replace(exp, '');
        var posicaoCampo = 0;
        var NovoValorCampo = '';
        var TamanhoMascara = campoSoNumeros.length;
        for (var i = 0; i < TamanhoMascara; i++) {
            if (i < tamanho) {
                boleanoMascara = ((Mascara.charAt(i) === '-') || (Mascara.charAt(i) === '.') || (Mascara.charAt(i) === '/'));
                boleanoMascara = boleanoMascara || ((Mascara.charAt(i) === '(') || (Mascara.charAt(i) === ')') || (Mascara.charAt(i) === ' '));
                boleanoMascara = boleanoMascara || ((Mascara.charAt(i) === ',') || (Mascara.charAt(i) === '*') || (Mascara.charAt(i) === '+'));
                boleanoMascara = boleanoMascara || ((Mascara.charAt(i) === '@') || (Mascara.charAt(i) === '#') || (Mascara.charAt(i) === ':'));
                boleanoMascara = boleanoMascara || ((Mascara.charAt(i) === '$') || (Mascara.charAt(i) === '&') || (Mascara.charAt(i) === '%'));
                if (boleanoMascara) {
                    NovoValorCampo += Mascara.charAt(i);
                    TamanhoMascara++;
                }
                else {
                    NovoValorCampo += campoSoNumeros.charAt(posicaoCampo);
                    posicaoCampo++;
                }
            }
        }
        return NovoValorCampo;
    };
    return BrMaskerIonic3;
}());

BrMaskerIonic3.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: '[brmasker]',
                providers: [
                    {
                        provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NG_VALUE_ACCESSOR */],
                        useExisting: BrMaskerIonic3,
                        multi: true
                    }
                ]
            },] },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/** @nocollapse */
BrMaskerIonic3.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
]; };
BrMaskerIonic3.propDecorators = {
    'brmasker': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'inputKeyup': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['keyup', ['$event'],] },],
    'inputOnblur': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['ionBlur', ['$event'],] },],
    'inputFocus': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['ionFocus', ['$event'],] },],
};
//# sourceMappingURL=brmasker-ionic-3.js.map

/***/ }),

/***/ 478:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export BrMaskServicesModel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrMaskerIonicServices3; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);

var BrMaskServicesModel = (function () {
    function BrMaskServicesModel() {
        this.type = 'alfa';
        this.decimal = 2;
        this.decimalCaracter = ",";
        this.userCaracters = false;
        this.numberAndTousand = false;
    }
    return BrMaskServicesModel;
}());

var BrMaskerIonicServices3 = (function () {
    function BrMaskerIonicServices3() {
        this.brmasker = new BrMaskServicesModel();
    }
    BrMaskerIonicServices3.prototype.ngOnInit = function () {
        if (!this.brmasker.type) {
            this.brmasker.type = 'all';
        }
        if (!this.brmasker.decimal) {
            this.brmasker.decimal = 2;
        }
        if (!this.brmasker.decimalCaracter) {
            this.brmasker.decimalCaracter = ',';
        }
    };
    BrMaskerIonicServices3.prototype.writeCreateValue = function (value, config) {
        if (config === void 0) { config = new BrMaskServicesModel(); }
        if (value && config.phone) {
            return value.replace(/^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/gi, '$1 ($2) $3-$4');
        }
        if (value && config.money) {
            return this.writeValueMoney(value, config);
        }
        if (value && config.person) {
            return this.writeValuePerson(value);
        }
        if (value && config.percent) {
            return this.writeValuePercent(value);
        }
        if (value && config.numberAndTousand) {
            return this.writeValueNumberAndThousand(value);
        }
        if (value && config.userCaracters) {
            return this.writeValueusingSpecialCharacters(value);
        }
        if (value && config.mask) {
            this.brmasker.mask = config.mask;
            if (config.len) {
                this.brmasker.len = config.len;
            }
            return this.onInput(value);
        }
        return value;
    };
    BrMaskerIonicServices3.prototype.writeValuePercent = function (value) {
        value.replace(/\D/gi, '');
        value.replace(/%/gi, '');
        return value.replace(/([0-9]{0})$/gi, '%$1');
    };
    BrMaskerIonicServices3.prototype.writeValuePerson = function (value) {
        if (value.length <= 11) {
            return value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/gi, '\$1.\$2.\$3\-\$4');
        }
        else {
            return value.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/gi, '\$1.\$2.\$3\/\$4\-\$5');
        }
    };
    BrMaskerIonicServices3.prototype.writeValueMoney = function (value, config) {
        if (config === void 0) { config = new BrMaskServicesModel(); }
        return this.moneyMask(value, config);
    };
    BrMaskerIonicServices3.prototype.writeValueNumberAndThousand = function (value, config) {
        if (config === void 0) { config = new BrMaskServicesModel(); }
        return this.thousand(value);
    };
    BrMaskerIonicServices3.prototype.writeValueusingSpecialCharacters = function (value, config) {
        if (config === void 0) { config = new BrMaskServicesModel(); }
        return this.usingSpecialCharacters(value, config.mask, config.len);
    };
    BrMaskerIonicServices3.prototype.moneyMask = function (value, config) {
        var decimal = config.decimal || this.brmasker.decimal;
        value = value
            .replace(/\D/gi, '')
            .replace(new RegExp("([0-9]{" + decimal + "})$", "g"), config.decimalCaracter + '$1');
        if (value.length === decimal + 1) {
            return "0" + value; // leading 0 so we're not left with something weird like ",50"
        }
        else if (value.length > decimal + 2 && value.charAt(0) === '0') {
            return value.substr(1); // remove leading 0 when we don't need it anymore
        }
        if (config.thousand && value.length > (Number(4) + Number(config.decimal))) {
            value = value.replace(new RegExp("([0-9]{3})" + config.decimalCaracter + "([0-9]{" + config.decimal + "}$)", "g"), config.thousand + "$1" + config.decimalCaracter + "$2");
        }
        if (config.thousand && value.length > (Number(8) + Number(config.decimal))) {
            value = value.replace(new RegExp("([0-9]{3})" + config.thousand + "([0-9]{3})" + config.decimalCaracter + "([0-9]{" + config.decimal + "}$)", "g"), config.thousand + "$1" + config.thousand + "$2" + config.decimalCaracter + "$3");
        }
        return value;
    };
    BrMaskerIonicServices3.prototype.onInput = function (value) {
        var ret = this.formatField(value, this.brmasker.mask, this.brmasker.len);
        return ret;
    };
    BrMaskerIonicServices3.prototype.thousand = function (value) {
        var val = value.replace(/\D/gi, '');
        var reverse = val.toString().split('').reverse().join('');
        var thousands = reverse.match(/\d{1,3}/g);
        val = thousands.join("" + (this.brmasker.thousand || '.')).split('').reverse().join('');
        return val;
    };
    BrMaskerIonicServices3.prototype.usingSpecialCharacters = function (campo, Mascara, tamanho) {
        if (!tamanho) {
            tamanho = 99999999999;
        }
        var boleanoMascara;
        var exp = /\-|\.|\,| /gi;
        var campoSoNumeros = campo.toString().replace(exp, '');
        var posicaoCampo = 0;
        var NovoValorCampo = '';
        var TamanhoMascara = campoSoNumeros.length;
        for (var i = 0; i < TamanhoMascara; i++) {
            if (i < tamanho) {
                boleanoMascara = ((Mascara.charAt(i) === '-') || (Mascara.charAt(i) === '.') || (Mascara.charAt(i) === ','));
                if (boleanoMascara) {
                    NovoValorCampo += Mascara.charAt(i);
                    TamanhoMascara++;
                }
                else {
                    NovoValorCampo += campoSoNumeros.charAt(posicaoCampo);
                    posicaoCampo++;
                }
            }
        }
        return NovoValorCampo;
    };
    BrMaskerIonicServices3.prototype.formatField = function (campo, Mascara, tamanho) {
        if (!tamanho) {
            tamanho = 99999999999;
        }
        var boleanoMascara;
        var exp = /\-|\.|\/|\(|\)|\,|\*|\+|\@|\#|\$|\&|\%|\:| /gi;
        var campoSoNumeros = campo.toString().replace(exp, '');
        var posicaoCampo = 0;
        var NovoValorCampo = '';
        var TamanhoMascara = campoSoNumeros.length;
        for (var i = 0; i < TamanhoMascara; i++) {
            if (i < tamanho) {
                boleanoMascara = ((Mascara.charAt(i) === '-') || (Mascara.charAt(i) === '.') || (Mascara.charAt(i) === '/'));
                boleanoMascara = boleanoMascara || ((Mascara.charAt(i) === '(') || (Mascara.charAt(i) === ')') || (Mascara.charAt(i) === ' '));
                boleanoMascara = boleanoMascara || ((Mascara.charAt(i) === ',') || (Mascara.charAt(i) === '*') || (Mascara.charAt(i) === '+'));
                boleanoMascara = boleanoMascara || ((Mascara.charAt(i) === '@') || (Mascara.charAt(i) === '#') || (Mascara.charAt(i) === ':'));
                boleanoMascara = boleanoMascara || ((Mascara.charAt(i) === '$') || (Mascara.charAt(i) === '&') || (Mascara.charAt(i) === '%'));
                if (boleanoMascara) {
                    NovoValorCampo += Mascara.charAt(i);
                    TamanhoMascara++;
                }
                else {
                    NovoValorCampo += campoSoNumeros.charAt(posicaoCampo);
                    posicaoCampo++;
                }
            }
        }
        return NovoValorCampo;
    };
    return BrMaskerIonicServices3;
}());

BrMaskerIonicServices3.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: '[brmasker]',
            },] },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/** @nocollapse */
BrMaskerIonicServices3.ctorParameters = function () { return []; };
//# sourceMappingURL=brmasker-ionic-services.js.map

/***/ }),

/***/ 479:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_module__ = __webpack_require__(480);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__app_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__directives__ = __webpack_require__(481);
/* unused harmony namespace reexport */


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 480:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrMaskerModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__directives_brmasker_ionic_3__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__directives_brmasker_ionic_services__ = __webpack_require__(478);




var BrMaskerModule = (function () {
    function BrMaskerModule() {
    }
    return BrMaskerModule;
}());

BrMaskerModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"], args: [{
                declarations: [
                    __WEBPACK_IMPORTED_MODULE_2__directives_brmasker_ionic_3__["a" /* BrMaskerIonic3 */],
                    __WEBPACK_IMPORTED_MODULE_3__directives_brmasker_ionic_services__["a" /* BrMaskerIonicServices3 */]
                ],
                exports: [
                    __WEBPACK_IMPORTED_MODULE_2__directives_brmasker_ionic_3__["a" /* BrMaskerIonic3 */],
                    __WEBPACK_IMPORTED_MODULE_3__directives_brmasker_ionic_services__["a" /* BrMaskerIonicServices3 */]
                ],
                imports: [
                    __WEBPACK_IMPORTED_MODULE_0__angular_common__["CommonModule"]
                ],
                schemas: [
                    __WEBPACK_IMPORTED_MODULE_1__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]
                ],
                providers: [__WEBPACK_IMPORTED_MODULE_3__directives_brmasker_ionic_services__["a" /* BrMaskerIonicServices3 */]]
            },] },
];
/** @nocollapse */
BrMaskerModule.ctorParameters = function () { return []; };
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 481:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__brmasker_ionic_3__ = __webpack_require__(477);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__brmasker_ionic_services__ = __webpack_require__(478);
/* unused harmony namespace reexport */


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 485:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DownloadModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_file__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_opener__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__(111);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DownloadModal = /** @class */ (function () {
    function DownloadModal(navCtrl, navParams, viewCtrl, loadingCtrl, storage, toastCtrl, actionSheetCtrl, file, appRef, fileOpener, _platform) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.file = file;
        this.appRef = appRef;
        this.fileOpener = fileOpener;
        this._platform = _platform;
        this.ENV = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */];
        this._attachments = [];
        this._ATTACHMENT_STORAGE_KEY = '__MOVERA_ATTACHMENT_STORAGE_KEY';
        this.idiom = '';
    }
    DownloadModal.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('Project').then(function (value) {
            _this.project = value;
        });
        this.storage.get('Idiom').then(function (value) {
            _this.idiom = value;
        });
    };
    DownloadModal.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    DownloadModal.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.storage.get(this._ATTACHMENT_STORAGE_KEY).then(function (attachments) {
            if (attachments) {
                _this._attachments = attachments;
            }
        }).catch(function (_) {
            var toast = _this.toastCtrl.create({
                message: 'Houve um erro ao recuperar os itens baixados.',
                duration: 6000,
                position: 'top'
            });
            toast.present();
        });
    };
    DownloadModal.prototype.openContent = function ($attachment) {
        var _this = this;
        var actions = [];
        if ($attachment.isVideo) {
            actions.push({
                icon: 'play',
                text: 'Assistir',
                handler: function () {
                    var documentDirectory = _this._platform.is('android') ? _this.file.dataDirectory : _this.file.documentsDirectory;
                    _this.fileOpener.open("" + documentDirectory + $attachment.offlineFileName, $attachment.mimeType).then(function () {
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
                    var documentDirectory = _this._platform.is('android') ? _this.file.dataDirectory : _this.file.documentsDirectory;
                    _this.fileOpener.open("" + documentDirectory + $attachment.offlineFileName, $attachment.mimeType).then(function () {
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
                var documentDirectory = _this._platform.is('android') ? _this.file.dataDirectory : _this.file.documentsDirectory;
                _this.file.removeFile(documentDirectory, $attachment.offlineFileName).then(function (removeResult) {
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
    DownloadModal = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-download-modal',template:/*ion-inline-start:"C:\Users\alanj\Desktop\ALAN\VISION\PROJETOS\BEC\EAD\IONIC\PROJETO\EAD\src\components\download-modal\download-modal.html"*/'<ion-content padding class="background">\n\n  <div style="padding-top: 80px;">\n\n    <p *ngIf="_attachments.length == 0 && idiom ==\'01\'" style="color: white;">Você ainda não baixou conteúdo offline. Acesse o sistema e baixe seu conteúdo.</p>\n\n    <p *ngIf="_attachments.length == 0 && idiom ==\'02\'" style="color: white;">Aún no ha descargado contenido sin conexión. Accede al sistema y descarga su contenido.</p>\n\n    <ion-list>\n\n      <button ion-item no-padding *ngFor="let attachment of _attachments; trackBy: attachment?.id"\n\n        (click)="openContent(attachment)">\n\n        <ion-row>\n\n          <ion-col col-2 style="justify-content: center; display: flex; align-items: center;">\n\n            <ion-icon name="clipboard" *ngIf="!attachment.isVideo"></ion-icon>\n\n            <ion-icon name="play" *ngIf="attachment.isVideo"></ion-icon>\n\n          </ion-col>\n\n          <ion-col col-10><span class=titleContent>{{attachment.name}}</span></ion-col>\n\n        </ion-row>\n\n      </button>\n\n    </ion-list>\n\n\n\n    <div>\n\n      <button class="button-style button-style-{{ENV.PROJECT}}" *ngIf="idiom ==\'01\'" ion-button (click)="close()"><p>Voltar</p></button>\n\n      <button class="button-style button-style-{{ENV.PROJECT}}" *ngIf="idiom ==\'02\'" ion-button (click)="close()"><p>Volver</p></button>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n\n\n\n\n'/*ion-inline-end:"C:\Users\alanj\Desktop\ALAN\VISION\PROJETOS\BEC\EAD\IONIC\PROJETO\EAD\src\components\download-modal\download-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["q" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["p" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["ApplicationRef"],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_opener__["a" /* FileOpener */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["l" /* Platform */]])
    ], DownloadModal);
    return DownloadModal;
}());

//# sourceMappingURL=download-modal.js.map

/***/ }),

/***/ 498:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditUserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_http_service_http_service__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular_cropperjs__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular_cropperjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_angular_cropperjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__environments_environment__ = __webpack_require__(111);
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










var EditUserPage = /** @class */ (function () {
    function EditUserPage(navCtrl, navParams, toastCtrl, authService, httpService, camera, storage, DomSanitizer, datePipe, loadingCtrl, actionSheetCtrl, modalCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.authService = authService;
        this.httpService = httpService;
        this.camera = camera;
        this.storage = storage;
        this.DomSanitizer = DomSanitizer;
        this.datePipe = datePipe;
        this.loadingCtrl = loadingCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.modalCtrl = modalCtrl;
        this.credential = {
            id: '',
            documento: '',
            password: '',
            confirmPassword: '',
            nome: '',
            email: '',
            nascimento: '',
            whatsapp: '',
            empresa: '',
            thumb: '',
            profile_id: '',
            company_id: ''
        };
        this.ENV = __WEBPACK_IMPORTED_MODULE_9__environments_environment__["a" /* environment */];
        this.habilitaCampos = true;
        this.clienteThumb = "";
        this.foto = "";
        this.fotoTmp = true;
        this.base64Image = "";
        this.hide = false;
        this.hideEmpresa = true;
        this.titleTesteira = '';
        this.complementTitle = '';
        this.createdCode = null;
        this.globalUrl = '';
        this.idiom = '';
        this.showQRCode = false;
        this.showQRCodeBox = false;
        this.cropperOptions = null;
        this.originalBase64 = null;
        this.croppedImage = null;
        this.myImage = null;
        this.scaleValX = 1;
        this.scaleValY = 1;
        this.showCroppedImage = false;
        this.additionalFields = null;
        storage.get('GlobalUrl').then(function (value) {
            _this.globalUrl = value;
        });
        if (this.navParams.get('first') == 'true') {
            this.habilitaCampos = false;
        }
        this.storage.get('clienteNome').then(function (valor) {
            _this.credential.nome = valor;
        });
        this.storage.get('clienteId').then(function (valor) {
            _this.credential.id = valor;
        });
        this.storage.get('clienteDocumento').then(function (valor) {
            _this.credential.documento = valor;
        });
        this.storage.get('clienteCompanyId').then(function (valor) {
            _this.credential.company_id = valor;
        });
        this.storage.get('clienteProfileId').then(function (valor) {
            _this.credential.profile_id = valor;
        });
        this.storage.get('clienteEmail').then(function (valor) {
            _this.credential.email = valor;
        });
        this.storage.get('clienteNascimento').then(function (valor) {
            _this.credential.nascimento = valor;
            //if (valor) this.dateToShow = moment(valor).format("DD/MM/YYYY");
        });
        this.storage.get('clienteSavePassword').then(function (valor) {
            _this.credential.password = valor;
        });
        this.storage.get('clienteThumb').then(function (valor) {
            if (valor) {
                _this.credential.thumb = valor;
                _this.clienteThumb = valor;
                _this.fotoTmp = false;
            }
        });
        this.storage.get('clienteWhatsapp').then(function (valor) {
            _this.credential.whatsapp = valor;
        });
        this.storage.get('clienteDocumento').then(function (valor) {
            _this.credential.documento = valor;
            _this.updateType();
        });
        this.gerarQrCode();
        this.cropperOptions = {
            dragMode: 'crop',
            autoCrop: true,
            movable: true,
            zoomable: true,
            scalable: false,
            autoCropArea: 1,
            viewMode: 2,
            cropBoxResizable: false,
            minContainerWidth: 360,
            minContainerHeight: 360,
            minCanvasWidth: 360,
            minCanvasHeight: 360,
            minCropBoxWidth: 360,
            minCropBoxHeight: 360,
        };
    }
    EditUserPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('Idiom').then(function (value) {
            _this.idiom = value;
        });
        this.storage.get('clienteId').then(function (valor) {
            _this.httpService.getAll('/api/usuarios/get-info', { id: valor }).subscribe(function (result) {
                if (result.success == true) {
                    _this.clienteThumb = result.user[0].thumb;
                }
            });
        });
        this.getAdditionalFields();
    };
    EditUserPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.storage.get('clienteId').then(function (valor) {
            _this.httpService.getAll('/api/usuarios/get-info', { id: valor }).subscribe(function (result) {
                if (result.success == true) {
                    _this.clienteThumb = result.user[0].thumb;
                }
            });
        });
    };
    EditUserPage.prototype.getAdditionalFields = function () {
        var _this = this;
        this.httpService.getAll('/api/usuarios/get-additional-fields', null, 'get').subscribe(function (result) {
            if (result) {
                _this.additionalFields = result;
            }
            else {
                _this.additionalFields = null;
            }
        });
    };
    EditUserPage.prototype.edit = function (firstAccess) {
        var _this = this;
        if (firstAccess == true) {
            this.credential.firstAccess = true;
        }
        else {
            this.credential.firstAccess = false;
        }
        var userModal = this.modalCtrl.create('user-form-modal', this.credential);
        userModal.onDidDismiss(function (data) {
            if (data) {
                var loading = _this.loadingCtrl.create({
                    content: 'Espere...'
                });
                loading.present();
                _this.makeRegister();
                _this.storage.set('first', false);
                if (_this.credential.firstAccess == true)
                    _this.navCtrl.push('tab-page');
                loading.dismiss();
            }
        });
        userModal.present();
    };
    EditUserPage.prototype.presentActionSheet = function () {
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
    EditUserPage.prototype.gerarQrCode = function () {
        var _this = this;
        this.storage.get('clienteNome').then(function (nome) {
            _this.storage.get('clienteEmail').then(function (email) {
                var qrNome = nome == _this.credential.nome ? nome : _this.credential.nome;
                var qrEmail = email == _this.credential.email ? email : _this.credential.email;
                _this.createdCode = "nome:" + qrNome + ";e-mail:" + qrEmail;
            });
        });
    };
    EditUserPage.prototype.doLogout = function () {
        var _this = this;
        this.storage.get('LayoutVersion').then(function (value) {
            switch (value) {
                default: {
                    _this.navCtrl.setRoot('login-page', { logout: true });
                    _this.navCtrl.popToRoot();
                }
            }
        });
    };
    /* OCULTA O CAMPO OCUPACAO */
    EditUserPage.prototype.ngIfCtrl = function () {
        this.hide = !this.hide;
    };
    EditUserPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.storage.get('Project').then(function (value) {
            _this.project = value;
            /*PROJETOS:
              marketing-house
              edicom
              ead
              know-house
            */
            if (value == 'edicom' || value == 'hkt369')
                _this.showQRCode = true;
        });
        this.storage.get('clienteNome').then(function (valor) {
            _this.titleTesteira = _this.idiom == '01' ? 'Olá ' + valor : 'Hola ' + valor;
        });
        this.complementTitle = '';
        this.storage.get('LayoutVersion').then(function (value) {
            _this.version = value;
        });
        if (this.navParams.get('first') == 'true') {
            this.edit(true);
        }
    };
    EditUserPage.prototype.goBack = function () {
        var _this = this;
        this.storage.get('LayoutVersion').then(function (value) {
            switch (value) {
                case '02': {
                    _this.navCtrl.setRoot('list-videos-v02-page');
                    break;
                }
                default: {
                    _this.navCtrl.setRoot('list-videos-page');
                }
            }
        });
    };
    EditUserPage.prototype.updateType = function () {
        if (this.credential.documento.length == 18) {
            this.hideEmpresa = true;
        }
        else {
            this.hideEmpresa = false;
        }
    };
    EditUserPage.prototype.makeRegister = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Espere...'
        });
        loading.present();
        this.authService.register(this.credential).then(function (result) {
            loading.dismiss();
            if (result) {
                _this.credential = result;
                var toast = _this.toastCtrl.create({
                    message: _this.idiom == '01' ? 'Dados salvos com sucesso!' :
                        _this.idiom == '02' ? 'Datos guardados con éxito!' : '',
                    duration: 3000,
                    position: 'top'
                });
                _this.gerarQrCode();
                toast.onDidDismiss(function () {
                    if (_this.navParams.get('first') == 'true') {
                        _this.navCtrl.push('tab-page');
                    }
                });
                toast.present();
            }
        });
    };
    EditUserPage.prototype.showDownloads = function () {
        var fileModal = this.modalCtrl.create('download-modal');
        fileModal.present();
    };
    EditUserPage.prototype.getPic = function (gallery, camera) {
        var _this = this;
        if (gallery === void 0) { gallery = false; }
        if (camera === void 0) { camera = false; }
        var options;
        if (gallery == true) {
            options = {
                quality: 100,
                destinationType: this.camera.DestinationType.DATA_URL,
                encodingType: this.camera.EncodingType.JPEG,
                mediaType: this.camera.MediaType.PICTURE,
                sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            };
        }
        else if (camera == true) {
            options = {
                quality: 100,
                //destinationType: this.camera.DestinationType.FILE_URI,
                destinationType: 0,
                targetWidth: 360,
                targetHeight: 360,
                encodingType: this.camera.EncodingType.JPEG,
                mediaType: this.camera.MediaType.PICTURE,
                saveToPhotoAlbum: false,
                allowEdit: false,
            };
        }
        this.camera.getPicture(options).then(function (imageData) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                //let newDataURI = gallery == true ? await this.resizedataURL('data:image/png;base64,' + imageData, 120, 100) : 'data:image/png;base64,' + imageData;
                //let newDataURI = 'data:image/png;base64,' + imageData;
                this.originalBase64 = 'data:image/png;base64,' + imageData;
                this.showCroppedImage = true;
                //this.credential.thumb = newDataURI.replace('data:image/png;base64,','');
                //this.clienteThumb = newDataURI;
                //this.makeRegister();
                this.fotoTmp = false;
                return [2 /*return*/];
            });
        }); }, function (err) {
            // Handle error
        });
    };
    EditUserPage.prototype.saveCropped = function () {
        var croppedImgB64String = this.angularCropper.cropper.getCroppedCanvas().toDataURL('image/jpeg', (100 / 100));
        this.credential.thumb = croppedImgB64String;
        this.clienteThumb = croppedImgB64String;
        this.showCroppedImage = false;
        this.fotoTmp = false;
        this.makeRegister();
    };
    EditUserPage.prototype.resetCropped = function () {
        this.angularCropper.cropper.reset();
    };
    EditUserPage.prototype.clearCropped = function () {
        this.angularCropper.cropper.clear();
        this.showCroppedImage = false;
        this.fotoTmp = false;
    };
    EditUserPage.prototype.moveCropped = function (x, y) {
        this.angularCropper.cropper.move(x, y);
    };
    EditUserPage.prototype.rotateCropped = function () {
        this.angularCropper.cropper.rotate(90);
    };
    EditUserPage.prototype.zoomCropped = function (zoomIn) {
        var factor = zoomIn ? 0.1 : -0.1;
        this.angularCropper.cropper.zoom(factor);
    };
    EditUserPage.prototype.scaleXCropped = function () {
        this.scaleValX = this.scaleValX * -1;
        this.angularCropper.cropper.scaleX(this.scaleValX);
    };
    EditUserPage.prototype.scaleYCropped = function () {
        this.scaleValY = this.scaleValY * -1;
        this.angularCropper.cropper.scaleY(this.scaleValY);
    };
    /* resizedataURL(base64, wantedWidth, wantedHeight) : any{
      return new Promise(async function(resolve,reject){
          // We create an image to receive the Data URI
          var img = new Image;
  
          // When the event "onload" is triggered we can resize the image.
          img.onload = function()
          {
              // We create a canvas and get its context.
              var canvas = document.createElement('canvas');
              var ctx = canvas.getContext('2d');
  
              // We set the dimensions at the wanted size.
              canvas.width = wantedWidth;
              canvas.height = wantedHeight;
  
              // We resize the image with the canvas method drawImage();
              ctx.drawImage(img, 0, 0, wantedWidth, wantedHeight);
              var dataURI = canvas.toDataURL();
  
              // This is the return of the Promise
              resolve(dataURI);
          };
  
          // We put the Data URI in the image's src attribute
          img.src = base64;
      });
    }*/
    EditUserPage.prototype.ValidaCPF = function (cpf) {
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
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('angularCropper'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_8_angular_cropperjs__["AngularCropperjsComponent"])
    ], EditUserPage.prototype, "angularCropper", void 0);
    EditUserPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-edit-user',template:/*ion-inline-start:"C:\Users\alanj\Desktop\ALAN\VISION\PROJETOS\BEC\EAD\IONIC\PROJETO\EAD\src\pages\edit-user\edit-user.html"*/'<ion-header [ngClass]="version == \'01\' ? \'principalHeader\' : version == \'02\' ? \'principalHeaderV02\' : \'principalHeader\'"  class=principalHeader>\n\n  <img [ngClass]="version == \'01\' ? \'principal-icon\' : version == \'02\' ? \'principal-icon-v02\' : \'principal-icon\'"\n\n     src="{{ globalUrl + \'/storage/uploads/configs/logoHeader.png\' }}" />\n\n     \n\n  <img *ngIf="version == \'01\'" class="testeira-v01" \n\n  src="{{ globalUrl + \'/storage/uploads/configs/testeira1.png\' }}" >\n\n\n\n  <img *ngIf="version == \'02\'" class="testeira-v02" \n\n  src="{{ globalUrl + \'/storage/uploads/configs/testeira2.png\' }}" >\n\n  <p class="header-title header-title-{{ENV.HEADER_TEXT}}">{{titleTesteira}}  {{complementTitle? \'| \' + complementTitle : \'\'}}</p>\n\n  <menu-sup></menu-sup>\n\n</ion-header>\n\n\n\n<ion-content id="body" class="content {{ENV.PROJECT}}-custom-bg" [ngClass]="version == \'01\' ? \'margin-content-l1\' : version == \'02\' ? \'margin-content-l2\' : \'margin-content-l1\'">\n\n\n\n  <ion-list style="margin: 0 !important; margin-bottom: 300px;">\n\n    <div style="text-align: center;">\n\n      \n\n        <button (click)="presentActionSheet()" *ngIf="fotoTmp" style="margin: 20px 0px;" ion-button class="button-style button-style-{{ENV.PROJECT}}" icon-only>\n\n          <p><ion-icon name="camera"></ion-icon></p>\n\n        </button>\n\n        \n\n        <button (click)="presentActionSheet()" *ngIf="!fotoTmp && !showCroppedImage" style="padding: 0px; width: 100%; background: transparent;">\n\n          <img [src]="DomSanitizer.bypassSecurityTrustUrl(clienteThumb)" alt=""\n\n          style="max-width: 360px;\n\n            margin: auto;\n\n            width: 100%;\n\n            max-height: 360px;">\n\n        </button>\n\n\n\n        <div *ngIf="showCroppedImage">\n\n          <ion-header>\n\n            <ion-toolbar>\n\n              <ion-buttons start>\n\n                <button ion-button color="danger" (click)="resetCropped()">\n\n                  <p *ngIf="idiom ==\'01\'">Resetar</p>\n\n                  <p *ngIf="idiom ==\'02\'">Reiniciar</p>\n\n                </button>\n\n              </ion-buttons>\n\n              <ion-title></ion-title>\n\n              <ion-buttons end>\n\n                <button ion-button icon-only color="danger" (click)="clearCropped()">\n\n                  <ion-icon name="close"></ion-icon>\n\n                </button>\n\n                <button ion-button icon-only color="secondary" (click)="saveCropped()">\n\n                  <ion-icon name="checkmark"></ion-icon>\n\n                </button>\n\n              </ion-buttons>\n\n            </ion-toolbar>\n\n          </ion-header>\n\n  \n\n          <angular-cropper   #angularCropper \n\n          [cropperOptions]="cropperOptions" \n\n          [imageUrl]="originalBase64 "\n\n          style="max-width: 420px;\n\n            margin: auto;\n\n            width: 100%;\n\n            max-height: 360px;">\n\n          </angular-cropper>\n\n          <ion-row >\n\n            <ion-col>\n\n              <button ion-button outline icon-left color="primary" (click)="zoomCropped(true)">\n\n                <ion-icon name="add"></ion-icon> Zoom\n\n              </button>\n\n              <button ion-button outline icon-left color="primary" (click)="zoomCropped(false)">\n\n                <ion-icon name="remove"></ion-icon> Zoom\n\n              </button>\n\n              <button ion-button outline icon-left (click)="rotateCropped()">\n\n                <ion-icon name="refresh"></ion-icon> \n\n                <p *ngIf="idiom ==\'01\'">90 graus</p>\n\n                <p *ngIf="idiom ==\'02\'">90 grados</p>\n\n                \n\n              </button>\n\n            </ion-col>\n\n          </ion-row>\n\n\n\n          <ion-row>\n\n            <button ion-button clear (click)="scaleXCropped()">\n\n              Girar X\n\n            </button>\n\n            <button ion-button clear (click)="scaleYCropped()">\n\n              Girar Y\n\n            </button>\n\n      \n\n            <button ion-button clear icon-only (click)="moveCropped(0, -10)">\n\n              <ion-icon name="arrow-round-up"></ion-icon>\n\n            </button>\n\n            <button ion-button clear icon-only (click)="moveCropped(0, 10)">\n\n              <ion-icon name="arrow-round-down"></ion-icon>\n\n            </button>\n\n            <button ion-button clear icon-only (click)="moveCropped(-10, 0)">\n\n              <ion-icon name="arrow-round-back"></ion-icon>\n\n            </button>\n\n            <button ion-button clear icon-only (click)="moveCropped(10, 0)">\n\n              <ion-icon name="arrow-round-forward"></ion-icon>\n\n            </button>\n\n          </ion-row>\n\n        </div>\n\n    </div>\n\n\n\n    <ion-row>\n\n      <ion-col col-12 text-center >\n\n        <div style="white-space: nowrap;  height: 2.5rem;">\n\n          <ion-label *ngIf="idiom ==\'01\'" inline class="perfil perfil-title">Nome: </ion-label>\n\n          <ion-label *ngIf="idiom ==\'02\'" inline class="perfil perfil-title">Nombre: </ion-label>\n\n          <p class="perfil perfil-input">{{credential.nome}}</p>\n\n        </div>\n\n\n\n        <div style="white-space: nowrap;  height: 2.5rem;">\n\n          <ion-label *ngIf="idiom ==\'01\'" inline class="perfil perfil-title">Tel: </ion-label>\n\n          <ion-label *ngIf="idiom ==\'02\'" inline class="perfil perfil-title">Tel: </ion-label>\n\n          <p class="perfil perfil-input" [brmasker]="{mask:\'(00) 00000-0000\', len:15, type:\'num\'}">{{credential.whatsapp}}</p>\n\n        </div>\n\n\n\n        <div *ngIf="project != \'edicom\'" style="white-space: nowrap;  height: 2.5rem;">\n\n          <ion-label *ngIf="idiom ==\'01\'" inline class="perfil perfil-title">Data de Nasc: </ion-label>\n\n          <ion-label *ngIf="idiom ==\'02\'" inline class="perfil perfil-title">Fecha de Nasc: </ion-label>\n\n           <p class="perfil perfil-input">{{credential.nascimento}}</p>\n\n        </div>\n\n\n\n        <div style="white-space: nowrap;  height: 2.5rem;">\n\n          <ion-label *ngIf="idiom ==\'01\'" inline class="perfil perfil-title">E-mail: </ion-label>\n\n          <ion-label *ngIf="idiom ==\'02\'" inline class="perfil perfil-title">Correo: </ion-label>\n\n          <p class="perfil perfil-input">{{credential.email}}</p>\n\n        </div>\n\n        \n\n        <div *ngIf="additionalFields" padding-bottom>\n\n          <div *ngFor="let field of additionalFields" style="white-space: nowrap;  height: 2.5rem;">\n\n            <ion-label inline class="perfil perfil-title">{{field.nome}}: </ion-label>\n\n            <p class="perfil perfil-input">{{field.descricao}}</p>\n\n          </div>\n\n        </div>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-list>\n\n  <div style="padding-bottom: 125px;">\n\n    <ion-grid>\n\n      <ion-row style="display: flex; flex-wrap: wrap;">\n\n        <ion-col *ngIf="showQRCode" style="text-align: center;">\n\n          <button full style="font-size: 1rem;" class="button-style button-style-{{ENV.PROJECT}}" ion-button icon-start (click)="showQRCodeBox = !showQRCodeBox">\n\n             <p *ngIf="idiom ==\'01\'">ID Digital</p>\n\n            <p *ngIf="idiom ==\'02\'">ID Digital</p>\n\n          </button>\n\n        </ion-col>      \n\n        <ion-col style="flex-grow: 2; text-align: center;">\n\n          <button ion-button full icon-start class="button-style button-style-{{ENV.PROJECT}}" (click)="showDownloads()">\n\n            <p *ngIf="idiom ==\'01\'">Meus Downloads</p>\n\n            <p *ngIf="idiom ==\'02\'">Mis Descargas</p>\n\n          </button>\n\n        </ion-col>\n\n        <ion-col style="text-align: center;">\n\n          <button ion-button class="button-style button-style-{{ENV.PROJECT}}" full icon-start (click)="edit()">\n\n            <p *ngIf="idiom ==\'01\'">Editar</p>\n\n            <p *ngIf="idiom ==\'02\'">Editar</p>\n\n          </button>\n\n        </ion-col>\n\n        <ion-col *ngIf="habilitaCampos" style="text-align: center;">\n\n          <button ion-button full  class="button-style button-style-{{ENV.PROJECT}}" (click)="doLogout()">\n\n            <p *ngIf="idiom ==\'01\'">Sair</p>\n\n            <p *ngIf="idiom ==\'02\'">Salir</p>\n\n          </button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  \n\n  \n\n    <ion-card *ngIf="createdCode && showQRCode && showQRCodeBox">\n\n      <ngx-qrcode qrc-element-type="url" [qrc-value]="createdCode"></ngx-qrcode>\n\n    </ion-card>\n\n  </div>\n\n\n\n  <ion-grid *ngIf="!habilitaCampos">\n\n    <ion-row>\n\n      <ion-col col-12>\n\n        <button ion-button full color="secondary" class="button-style button-style-{{ENV.PROJECT}}" class="buttonMedium" (click)="makeRegister()">\n\n          <p *ngIf="idiom ==\'01\'">Salvar</p>\n\n          <p *ngIf="idiom ==\'02\'">Guardar</p>\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\alanj\Desktop\ALAN\VISION\PROJETOS\BEC\EAD\IONIC\PROJETO\EAD\src\pages\edit-user\edit-user.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_http_service_http_service__["a" /* HttpServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_7__angular_common__["DatePipe"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]])
    ], EditUserPage);
    return EditUserPage;
}());

//# sourceMappingURL=edit-user.js.map

/***/ })

});
//# sourceMappingURL=0.js.map