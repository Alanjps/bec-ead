webpackJsonp([20],{

/***/ 853:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadModalModule", function() { return DownloadModalModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__download_modal__ = __webpack_require__(883);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(68);
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

/***/ 883:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DownloadModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_file__ = __webpack_require__(489);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_opener__ = __webpack_require__(490);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__(160);
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
            selector: 'page-download-modal',template:/*ion-inline-start:"C:\Users\alanj\Desktop\ALAN\VISION\PROJETOS\BEC\EAD\IONIC\PROJETO\EAD\src\components\download-modal\download-modal.html"*/'<ion-content padding class="background">\n\n  <div style="padding-top: 80px;">\n\n    <p *ngIf="_attachments.length == 0 && idiom ==\'01\'" style="color: white;">Você ainda não baixou conteúdo offline. Acesse o sistema e baixe seu conteúdo.</p>\n\n    <p *ngIf="_attachments.length == 0 && idiom ==\'02\'" style="color: white;">Aún no ha descargado contenido sin conexión. Accede al sistema y descarga su contenido.</p>\n\n    <ion-list>\n\n      <button ion-item no-padding *ngFor="let attachment of _attachments; trackBy: attachment?.id"\n\n        (click)="openContent(attachment)">\n\n        <ion-row>\n\n          <ion-col col-2 style="justify-content: center; display: flex; align-items: center;">\n\n            <ion-icon name="clipboard" *ngIf="!attachment.isVideo"></ion-icon>\n\n            <ion-icon name="play" *ngIf="attachment.isVideo"></ion-icon>\n\n          </ion-col>\n\n          <ion-col col-10><span class=titleContent>{{attachment.name}}</span></ion-col>\n\n        </ion-row>\n\n      </button>\n\n    </ion-list>\n\n\n\n    <div class="grid-style">\n\n      <button class="button-style button-style-{{ENV.PROJECT}}" *ngIf="idiom ==\'01\'" ion-button (click)="close()"><p>Voltar</p></button>\n\n      <button class="button-style button-style-{{ENV.PROJECT}}" *ngIf="idiom ==\'02\'" ion-button (click)="close()"><p>Volver</p></button>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n\n\n\n\n'/*ion-inline-end:"C:\Users\alanj\Desktop\ALAN\VISION\PROJETOS\BEC\EAD\IONIC\PROJETO\EAD\src\components\download-modal\download-modal.html"*/,
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

/***/ })

});
//# sourceMappingURL=20.js.map