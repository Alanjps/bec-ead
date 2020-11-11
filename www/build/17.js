webpackJsonp([17],{

/***/ 456:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListVideosModalModule", function() { return ListVideosModalModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__list_videos_modal__ = __webpack_require__(487);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ListVideosModalModule = /** @class */ (function () {
    function ListVideosModalModule() {
    }
    ListVideosModalModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__list_videos_modal__["a" /* ListVideosModalComponent */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_1__list_videos_modal__["a" /* ListVideosModalComponent */])
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_1__list_videos_modal__["a" /* ListVideosModalComponent */]]
        })
    ], ListVideosModalModule);
    return ListVideosModalModule;
}());

//# sourceMappingURL=list-videos-modal.module.js.map

/***/ }),

/***/ 487:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListVideosModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListVideosModalComponent = /** @class */ (function () {
    function ListVideosModalComponent(navCtrl, navParams, viewCtrl, dom, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.dom = dom;
        this.loadingCtrl = loadingCtrl;
        this.exibirEmbed = false;
        this.exibirVideo = false;
        this.exibirThumb = false;
        this.playVideo = false;
        this.showPrevious = false;
        this.showNext = false;
        this.selectIndex = 0;
        this.contents = navParams.data;
        this.getVideos(this.contents);
    }
    ListVideosModalComponent.prototype.getVideos = function (contents) {
        var _this = this;
        //separa somente os videos e seleciona o primeiro conteúdo de vídeo disponível.
        this.videos = [];
        contents.forEach(function (element) {
            if (element.tipo == 'video' || (element.url != null && element.tipo == "undefined"))
                _this.videos.push(element);
        });
        if (this.videos.length > 0) {
            this.showVideo(this.videos[0]);
            this.selectIndex = 0;
            if (this.videos.length > 1) {
                this.showNext = true;
            }
        }
        ;
    };
    ListVideosModalComponent.prototype.dismiss = function () {
        this.exibirEmbed = false;
        this.exibirVideo = false;
        this.playVideo = false;
        this.viewCtrl.dismiss();
    };
    ListVideosModalComponent.prototype.sanitizer = function (vid) {
        return this.dom.bypassSecurityTrustResourceUrl(vid);
    };
    ListVideosModalComponent.prototype.showVideo = function (conteudo) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Espere...'
        });
        loading.present();
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
                loading.dismiss();
            }, 500);
        }
        else if (this.exibirEmbed == true) {
            this.urlEmbed = this.sanitizer(conteudo.url);
            loading.dismiss();
        }
    };
    ListVideosModalComponent.prototype.selectNext = function () {
        var nextIndex = this.selectIndex + 1;
        if (this.videos.length - 1 >= nextIndex) {
            this.selectIndex = nextIndex;
            this.showVideo(this.videos[nextIndex]);
            if (nextIndex == this.videos.length - 1)
                this.showNext = false;
            this.showPrevious = true;
        }
    };
    ListVideosModalComponent.prototype.selectPrevious = function () {
        var previousIndex = this.selectIndex - 1;
        if (previousIndex >= 0) {
            this.selectIndex = previousIndex;
            this.showVideo(this.videos[previousIndex]);
            if (previousIndex == 0)
                this.showPrevious = false;
            this.showNext = true;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["n" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["n" /* Slides */])
    ], ListVideosModalComponent.prototype, "slides", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])('videoPlayer'),
        __metadata("design:type", Object)
    ], ListVideosModalComponent.prototype, "mVideoPlayer", void 0);
    ListVideosModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'list-videos-modal',template:/*ion-inline-start:"C:\Users\alanj\Desktop\ALAN\VISION\PROJETOS\BEC\INTEGRADO\PROJETO\EAD\src\components\list-videos-modal\list-videos-modal.html"*/'<ion-content padding class="background">\n\n  <div *ngIf="playVideo" style="\n\n    height: 100%;\n\n    display: flex;\n\n    justify-content: center;\n\n    flex-direction: column;\n\n  ">\n\n    <div style="display: flex; justify-content: space-between; height: auto;">\n\n      <div>\n\n        <button ion-button icon-only round small *ngIf="showPrevious == true" (click)="selectPrevious()" style="\n\n        align-self: flex-start;\n\n        margin: 0 0 12px 0;\n\n        padding: 0;" >\n\n          <ion-icon name="md-arrow-back"></ion-icon>\n\n        </button>\n\n\n\n        <button ion-button icon-only round small *ngIf="showNext == true"  (click)="selectNext()" style="\n\n          align-self: flex-start;\n\n          margin: 0 0 12px 0;\n\n          padding-left: 0;" >\n\n          <ion-icon name="md-arrow-forward"></ion-icon>\n\n        </button>\n\n      </div>\n\n\n\n      <button  ion-button icon-only round small (click)="dismiss()" style="\n\n        align-self: flex-end;\n\n        margin: 0 0 12px 0;\n\n        padding: 0;" >\n\n        <ion-icon name="md-close"></ion-icon>\n\n      </button>\n\n    </div>\n\n\n\n    <div *ngIf="exibirVideo">\n\n      <video #videoPlayer class="video-player" autoplay="true" controls controlsList="nodownload" style="max-width: 100%; max-height: 100%;"></video>\n\n    </div>\n\n    \n\n    <div *ngIf="exibirEmbed && urlEmbed">\n\n      <iframe  [src]="urlEmbed" style="width:100%" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\n\n    </div>\n\n    \n\n<!--     <button ion-button float-right class="cancel-button" (click)="cleanVideo()">Voltar</button> -->  \n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\alanj\Desktop\ALAN\VISION\PROJETOS\BEC\INTEGRADO\PROJETO\EAD\src\components\list-videos-modal\list-videos-modal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["q" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["g" /* LoadingController */]])
    ], ListVideosModalComponent);
    return ListVideosModalComponent;
}());

//# sourceMappingURL=list-videos-modal.js.map

/***/ })

});
//# sourceMappingURL=17.js.map