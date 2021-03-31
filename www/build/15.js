webpackJsonp([15],{

/***/ 458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoModalModule", function() { return PhotoModalModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__photo_modal__ = __webpack_require__(488);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PhotoModalModule = /** @class */ (function () {
    function PhotoModalModule() {
    }
    PhotoModalModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__photo_modal__["a" /* PhotoModalComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_1__photo_modal__["a" /* PhotoModalComponent */])],
            exports: [__WEBPACK_IMPORTED_MODULE_1__photo_modal__["a" /* PhotoModalComponent */]]
        })
    ], PhotoModalModule);
    return PhotoModalModule;
}());

//# sourceMappingURL=photo-modal.module.js.map

/***/ }),

/***/ 488:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhotoModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(111);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PhotoModalComponent = /** @class */ (function () {
    function PhotoModalComponent(navParams, viewCtrl, alertCtrl, storage) {
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.ENV = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */];
        this.data = false;
        this.selectedCategory = null;
        this.contester = false;
        this.contestEnabled = false;
        this.idiom = '';
        this.photo = navParams.data.photo;
        this.categories = navParams.data.categories;
        this.contestEnabled = navParams.data.contestEnabled;
        this.userCategoriesInContest = navParams.data.userCategoriesInContest;
    }
    PhotoModalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('Idiom').then(function (value) {
            _this.idiom = value;
        });
    };
    PhotoModalComponent.prototype.categoryChanged = function () {
        this.contester = false;
    };
    PhotoModalComponent.prototype.signContest = function () {
        var _this = this;
        if (this.contester == true) {
            this.contester = false;
        }
        else if (this.selectedCategory == null) {
            var alertText = this.idiom == '01' ? 'Selecione uma categoria primeiramente.' : this.idiom == '02' ? 'Por favor, seleccione una categoría primero.' : '';
            this.showAlert(alertText);
        }
        else {
            var alreadyInContest = this.userCategoriesInContest.filter(function (ucc) {
                return ucc.inContest == true && ucc.categoryId == _this.selectedCategory;
            }).length > 0 ? true : false;
            if (alreadyInContest == true) {
                var alertText = this.idiom == '01' ? 'Você já possui 1 foto concorrendo nessa categoria.' : this.idiom == '02' ? 'Ya tienes 1 foto compitiendo en esa categoría' : '';
                this.showAlert(alertText);
                this.contester = false;
            }
            else {
                this.contester = true;
            }
        }
    };
    PhotoModalComponent.prototype.showAlert = function (subTitle) {
        var alert = this.alertCtrl.create({
            title: this.idiom == '01' ? 'Atenção!' : this.idiom == '02' ? '¡Atención!' : '',
            subTitle: subTitle,
            buttons: ['OK']
        });
        alert.present();
    };
    PhotoModalComponent.prototype.confirm = function () {
        if (this.selectedCategory == null) {
            var alertText = this.idiom == '01' ? 'Selecione uma categoria primeiramente.' : this.idiom == '02' ? 'Por favor, seleccione una categoría primero.' : '';
            this.showAlert(alertText);
        }
        else {
            var data = { sendFile: true, contest: this.contester, categoryId: this.selectedCategory };
            this.viewCtrl.dismiss(data);
        }
    };
    PhotoModalComponent.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["n" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["n" /* Slides */])
    ], PhotoModalComponent.prototype, "slides", void 0);
    PhotoModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'photo-modal',template:/*ion-inline-start:"C:\Users\alanj\Desktop\ALAN\VISION\PROJETOS\BEC\EAD\IONIC\PROJETO\EAD\src\components\photo-modal\photo-modal.html"*/'<ion-content padding>\n\n  <div style="text-align: center; padding: 0 10px 10px 10px;">\n\n    <img src={{photo}}>\n\n  </div>\n\n\n\n  <div *ngIf="contestEnabled == true" style="padding: 5px 0;">\n\n    <p *ngIf="idiom == \'01\'">Participar do concurso?</p>\n\n    <p *ngIf="idiom == \'02\'">¿Participa en el concurso?</p>\n\n    <button *ngIf="contester == false" ion-button color="light" (click)="signContest()" [ngClass]="contester == true ? contest-blue : contest-gray">\n\n      <ion-icon *ngIf="photo" name="md-trophy" style="padding-right: 10px;"></ion-icon> \n\n      <p *ngIf="idiom == \'01\'">Não</p>\n\n      <p *ngIf="idiom == \'02\'">No</p>\n\n    </button>\n\n    <button *ngIf="contester == true" ion-button (click)="signContest()" [ngClass]="contester == true ? contest-blue : contest-gray">\n\n      <ion-icon *ngIf="photo" name="md-trophy" style="padding-right: 10px;"></ion-icon>\n\n      <p *ngIf="idiom == \'01\'">Sim</p> \n\n      <p *ngIf="idiom == \'02\'">Si</p> \n\n    </button>\n\n  </div>\n\n\n\n  <ion-list radio-group [(ngModel)]="selectedCategory" (ionChange)="categoryChanged()">\n\n    <p *ngIf="idiom == \'01\'">Selecione uma das categorias:</p> \n\n    <p *ngIf="idiom == \'02\'">Seleccione una de las categorías:</p> \n\n    \n\n    <ion-item *ngFor="let category of categories">\n\n      <ion-avatar item-start>\n\n        <img src={{category.thumb}}>\n\n      </ion-avatar>\n\n      <ion-label>{{category.title}}</ion-label>\n\n      <ion-radio checked="false" [value]="category.id"></ion-radio>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n  <div>\n\n    <button class="button-style button-style-{{ENV.PROJECT}}" ion-button (click)="confirm()">\n\n      <p>Confirmar</p>\n\n    </button>\n\n    <button class="button-style button-cancel-style-{{ENV.PROJECT}}" ion-button (click)="cancel()">\n\n      <p>Cancelar</p>\n\n    </button>\n\n  </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\alanj\Desktop\ALAN\VISION\PROJETOS\BEC\EAD\IONIC\PROJETO\EAD\src\components\photo-modal\photo-modal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["q" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], PhotoModalComponent);
    return PhotoModalComponent;
}());

//# sourceMappingURL=photo-modal.js.map

/***/ })

});
//# sourceMappingURL=15.js.map