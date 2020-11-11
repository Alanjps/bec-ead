webpackJsonp([12],{

/***/ 466:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatPageModule", function() { return ChatPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chat__ = __webpack_require__(495);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_menu_sup_menu_sup_module__ = __webpack_require__(476);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ChatPageModule = /** @class */ (function () {
    function ChatPageModule() {
    }
    ChatPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__chat__["a" /* ChatPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__chat__["a" /* ChatPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_menu_sup_menu_sup_module__["a" /* MenuSupModule */]
            ],
        })
    ], ChatPageModule);
    return ChatPageModule;
}());

//# sourceMappingURL=chat.module.js.map

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

/***/ 495:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_http_service_http_service__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(343);
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







var ChatPage = /** @class */ (function () {
    function ChatPage(navCtrl, navParams, authService, http, loadingCtrl, storage, camera, modalCtrl, viewCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.camera = camera;
        this.modalCtrl = modalCtrl;
        this.viewCtrl = viewCtrl;
        this.selectedProject = null;
        this.selectedProjectId = null;
        this.selectedUser = null;
        this.selectedUserId = null;
        this.recents = [];
        this.showMessageAllBox = false;
        this.sendAll = false;
        this.search = '';
        this.recentUser = null;
        this.firstAccess = true;
        this.titleTesteira = '';
        this.complementTitle = '';
        this.globalUrl = '';
        this.perfilType = 3;
        this.idiom = '';
        this.intervalHandle = null;
        this.recentIntervalHandle = null;
        this.showContacts = false;
        this.showChat = false;
        this.motivos = [];
        //---------------------------------------------------
        this.showMotivosContainer = false;
        this.showRecentUserContainer = false;
        this.showChatContainer = false;
        this.lastMessageId = null;
        this.iconProfile = '';
        this.iconDefaultMotivos = '';
        this.pendentChat = null;
        this.sendMessage = function (all, notification, isFile) {
            if (all === void 0) { all = false; }
            if (notification === void 0) { notification = false; }
            return __awaiter(_this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, new Promise(function (resolve, reject) {
                                var data = {};
                                _this.storage.get('clienteId').then(function (user_id) {
                                    var mensagem = isFile ? _this.fileUpload : _this.newMessage && _this.newMessage.length > 0 ? _this.newMessage.trim() : "";
                                    var destinatario_id = all == true ?
                                        null :
                                        _this.selectedUserId == null ?
                                            null :
                                            _this.selectedUserId;
                                    var project_id = _this.selectedProjectId == null ? null : _this.selectedProjectId;
                                    if (mensagem.length > 0) {
                                        data = {
                                            mensagem: mensagem,
                                            user_id: user_id,
                                            notificacao: notification
                                        };
                                        _this.sendAll === true ? data['project_id'] = project_id : data['destinatario_id'] = destinatario_id;
                                        _this.http.post('/mensagens/store', data)
                                            .subscribe(function (result) {
                                            if (_this.selectedUserId) {
                                                _this.getUserMessages(_this.selectedUserId);
                                            }
                                            resolve();
                                        });
                                        _this.newMessage = '';
                                    }
                                });
                            })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        this.sendMessageAll = function (all, notification, isFile) {
            if (all === void 0) { all = false; }
            if (notification === void 0) { notification = false; }
            return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.sendAll = true;
                            return [4 /*yield*/, this.sendMessage(all, notification, isFile)];
                        case 1:
                            _a.sent();
                            this.sendAll = false;
                            return [2 /*return*/];
                    }
                });
            });
        };
        clearInterval(this.lastMessageIdInterval);
        this.storage.get('Platform').then(function (value) {
            switch (value) {
                case 'android':
                    _this.iconProfile = '../../assets/imgs/user-profile.png';
                    _this.iconDefaultMotivos = '../../assets/imgs/default-motivo.png';
                    break;
                case 'ios':
                    _this.iconProfile = './assets/imgs/user-profile.png';
                    _this.iconDefaultMotivos = './assets/imgs/default-motivo.png';
                    break;
            }
        });
        storage.get('GlobalUrl').then(function (value) {
            _this.globalUrl = value;
        });
        this.getMotivos();
        this.pendentChat = navParams.get('pendentChat');
        if (this.pendentChat) {
            if (this.pendentChat.length > 1) {
                this.getConversasAtivas();
                this.showRecentUsersPage();
            }
            else {
                this.getConversasAtivas();
                this.goDirectlyToUserMessage(this.pendentChat[0]);
            }
        }
        else {
            this.showMotivosPage();
        }
    }
    ChatPage.prototype.openGallery = function (all) {
        var _this = this;
        if (all === void 0) { all = false; }
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.fileUpload = "data:image/jpeg;base64," + imageData;
            var fileModal = _this.modalCtrl.create('file-modal', { file: _this.fileUpload });
            fileModal.onDidDismiss(function (data) {
                if (data.sendFile == true) {
                    if (all == true) {
                        _this.sendMessageAll(all, false, true);
                    }
                    else {
                        _this.sendMessage(all, false, true);
                    }
                }
                else {
                    _this.fileUpload = null;
                }
            });
            fileModal.present();
        });
    };
    ChatPage.prototype.cleanVariables = function (tipo) {
        if (tipo == 0 || tipo == 1) {
            this.users = null;
            this.selectedUser = "";
            this.selectedUserId = null;
        }
        else if (tipo == 0 || tipo == 2) {
            this.selectedProject = null;
        }
        this.messages = null;
        this.newMessage = null;
    };
    ChatPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.storage.get('Project').then(function (value) {
            _this.project = value;
        });
        this.storage.get('Idiom').then(function (value) {
            _this.idiom = value;
            _this.titleTesteira = _this.idiom == '01' ? 'Chat' : 'Asistencia';
            _this.complementTitle = '';
        });
        this.storage.get('clienteProfileId').then(function (value) {
            _this.perfilType = value;
        });
        this.storage.get('LayoutVersion').then(function (value) {
            _this.version = value;
        });
    };
    ChatPage.prototype.ionViewDidLeave = function () {
        this.firstAccess = true;
        if (this.recents && this.recents.length > 0)
            this.recentUser = this.recents[0]['id'];
        clearInterval(this.intervalHandle);
    };
    ChatPage.prototype.getUsers = function () {
        var _this = this;
        this.cleanVariables(1);
        this.storage.get('clienteId').then(function (valor) {
            if (typeof valor != "undefined") {
                _this.userId = valor;
                var data = { user_id: _this.userId };
                if (_this.selectedProjectId != null)
                    data["project_id"] = _this.selectedProjectId;
                _this.http.getAll('/mensagens/app/getUsuarios', data, 'get')
                    .subscribe(function (users) {
                    _this.users = users.map(function (u) {
                        return {
                            id: u.id,
                            nome: u.nome,
                            thumb: u.thumb ? u.thumb : '',
                        };
                    });
                });
            }
        });
    };
    ChatPage.prototype.getRecentUsers = function () {
        var _this = this;
        this.storage.get('clienteId').then(function (id) {
            _this.userId = id;
            var loading = _this.loadingCtrl.create({
                content: 'Espere...'
            });
            _this.recents = null;
            loading.present();
            _this.http.getAll('/mensagens/getData', { remetente: null, user_id: _this.userId }, 'get')
                .subscribe(function (data) {
                _this.recents = data.remetentes.map(function (r) {
                    var recent = r['destinatario'].id == _this.userId ? r['remetente'] : r['destinatario'];
                    return {
                        id: recent.id,
                        nome: recent.nome,
                        thumb: recent.thumb ? recent.thumb : _this.iconProfile,
                        lido: r.lido == 0 ? false : true,
                        mensagem: r.mensagem_formatada,
                        destacar: _this.pendentChat && _this.pendentChat.filter(function (p) { return recent.id == p.remetente_id; }).length > 0 ? true : false
                    };
                });
                loading.dismiss();
            });
        });
    };
    ChatPage.prototype.getUserMessages = function (remetente, loop) {
        var _this = this;
        if (remetente === void 0) { remetente = null; }
        this.storage.get('clienteId').then(function (id) {
            _this.userId = id;
            var loading = _this.loadingCtrl.create({
                content: 'Espere...'
            });
            loading.present();
            if (_this.pendentChat && _this.pendentChat.length > 0 && remetente) {
                _this.pendentChat = _this.pendentChat.filter(function (p) { return p.remetente_id !== remetente; });
            }
            _this.http.getAll('/mensagens/getData', { remetente: remetente, user_id: _this.userId }, 'get')
                .subscribe(function (data) {
                var mensagem = '';
                if (remetente != null) {
                    _this.messages = data.mensagens.map(function (m) {
                        return __assign({}, m, { type: m.mensagem.substring(0, 11) == 'data:image/' ? 'file' : null, created_at: __WEBPACK_IMPORTED_MODULE_5_moment___default()(m.created_at).locale('pt-br').format('lll') });
                    });
                    if (_this.perfilType == 3) {
                        _this.messages = _this.messages.filter(function (d, idx) {
                            return d.notification == 0;
                        });
                    }
                    _this.lastMessageId = _this.messages[_this.messages.length - 1].id;
                    mensagem = _this.messages[0];
                    if (remetente && _this.messages.length > 0) {
                        _this.ativo = mensagem['remetente'].id == _this.userId ? mensagem['remetente'] : mensagem['destinatario'];
                        _this.receptivo = mensagem['remetente'].id == _this.userId ? mensagem['destinatario'] : mensagem['remetente'];
                        _this.ativo['thumb'] = _this.ativo['thumb'] ? _this.ativo['thumb'] : _this.iconProfile;
                        _this.receptivo['thumb'] = _this.receptivo['thumb'] ? _this.receptivo['thumb'] : _this.iconProfile;
                    }
                    _this.scrollToBottom();
                }
                loading.dismiss();
            });
        });
    };
    ChatPage.prototype.getLastMessageId = function (user_id, remetente_id) {
        var _this = this;
        this.http.getAll('/mensagens/last-message-id', { remetente_id: remetente_id, user_id: user_id }, 'get')
            .subscribe(function (data) {
            var lastId = data;
            if (_this.lastMessageId != null && lastId > _this.lastMessageId) {
                _this.lastMessageId = lastId;
                _this.getUserMessages(remetente_id);
            }
        });
    };
    ChatPage.prototype.goDirectlyToUserMessage = function (userDirectly) {
        var user = {
            id: userDirectly.remetente_id,
            nome: userDirectly.remetente.nome
        };
        this.selectRecentUser(user);
    };
    ChatPage.prototype.getConversasAtivas = function () {
        this.getRecentUsers();
        this.showMotivosContainer = false;
        this.showRecentUserContainer = true;
    };
    ChatPage.prototype.cancelMessageAll = function () {
        this.showMessageAllBox = false;
        this.newMessage = null;
        this.getConversasAtivas();
        this.getRecentUsers();
    };
    ChatPage.prototype.selectRecentUser = function (user) {
        this.selectedUserId = user.id;
        this.selectedUser = user;
        this.recentUser = user.id;
        this.getUserMessages(user.id);
        this.showChatContainer = true;
        this.showRecentUserContainer = false;
        this.lastMessageId = null;
        /*     setTimeout(()=>{
              this.lastMessageIdInterval = setInterval(()=>{
                this.storage.get('clienteId').then((user_id) => {
                  if (this.lastMessageId != null){
                    this.storage.get('clienteId').then((user_id) => {
                      this.getLastMessageId(user_id, this.selectedUserId);
                    });
                   }
                })
              },3000);
            },3000); */
    };
    ChatPage.prototype.scrollToBottom = function () {
        setTimeout(function () {
            var objDiv = document.getElementById("cards");
            if (objDiv)
                objDiv.scrollTop = objDiv.scrollHeight;
        }, 100);
    };
    ChatPage.prototype.cancelMotivos = function () {
        this.showMotivosContainer = false;
        this.viewCtrl.dismiss();
    };
    ChatPage.prototype.getMotivos = function () {
        var _this = this;
        this.showMotivosContainer = true;
        var loading = this.loadingCtrl.create({
            content: 'Espere...'
        });
        loading.present();
        this.storage.get('clienteId').then(function (userId) {
            _this.http.getAll('/api/get-motivos', { user_id: userId }, 'get')
                .subscribe(function (data) {
                _this.motivos = data.map(function (m) {
                    return __assign({}, m, { thumb: m.thumb ? m.thumb : _this.iconDefaultMotivos });
                });
                loading.dismiss();
            });
        });
    };
    ChatPage.prototype.selectMotivo = function (motivo) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Espere...'
        });
        loading.present();
        this.storage.get('clienteId').then(function (userId) {
            _this.http.getAll('/api/send-motivo', { user_id: userId, motivo_id: motivo.id })
                .subscribe(function (data) {
                loading.dismiss();
                _this.getRecentUsers();
                if (motivo && motivo.curadores.length == 1) {
                    _this.selectRecentUser(motivo.curadores[0]);
                }
                else {
                    _this.showRecentUsersPage();
                }
            });
        });
    };
    ChatPage.prototype.showMotivosPage = function () {
        this.showMotivosContainer = true;
    };
    ChatPage.prototype.showRecentUsersPage = function () {
        this.showMotivosContainer = false;
        this.showRecentUserContainer = true;
    };
    ChatPage.prototype.showChatPage = function () {
        this.showChatContainer = true;
        this.showChat = true;
    };
    ChatPage.prototype.cancelRecentUsers = function () {
        this.showRecentUserContainer = false;
        this.showMotivosContainer = true;
    };
    ChatPage.prototype.cancelChat = function () {
        this.getConversasAtivas();
        this.showChatContainer = false;
        this.showRecentUserContainer = true;
        clearInterval(this.lastMessageIdInterval);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* Slides */])
    ], ChatPage.prototype, "slides", void 0);
    ChatPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-chat',template:/*ion-inline-start:"C:\Users\alanj\Desktop\ALAN\VISION\PROJETOS\BEC\INTEGRADO\PROJETO\EAD\src\pages\chat\chat.html"*/'<ion-header [ngClass]="version == \'01\' ? \'principalHeader\' : version == \'02\' ? \'principalHeaderV02\' : \'principalHeader\'">\n\n  <img [ngClass]="version == \'01\' ? \'principal-icon\' : version == \'02\' ? \'principal-icon-v02\' : \'principal-icon\'"\n\n  src="{{ globalUrl + \'/storage/uploads/configs/logoHeader.png\' }}" />\n\n  \n\n  <img *ngIf="version == \'01\'" class="testeira-v01" \n\n  src="{{ globalUrl + \'/storage/uploads/configs/testeira1.png\' }}" >\n\n\n\n  <img *ngIf="version == \'02\'" class="testeira-v02" \n\n  src="{{ globalUrl + \'/storage/uploads/configs/testeira2.png\' }}" >\n\n\n\n  <div *ngIf="version == \'01\' || version == \'02\'">\n\n    <p [ngClass]="project == \'know-house\' ?  \'font-style know-house-title-color\' : \'\'">{{titleTesteira}}  {{complementTitle? \'| \' + complementTitle : \'\'}}</p>\n\n  </div>\n\n  <menu-sup [active]="true" ></menu-sup>\n\n</ion-header>\n\n\n\n<!-- <ion-content class="background margin-content" > -->\n\n\n\n  <ion-content *ngIf="showMotivosContainer" class="background" [ngClass]="version == \'01\' ? \'margin-content-l1\' : version == \'02\' ? \'margin-content-l2\' : \'margin-content-l1\'">\n\n    <ion-header padding>\n\n      <button [ngClass]="project == \'edicom\' ? \'button-edicom\' : project == \'know-house\' ? \'button-know-house\' : \'button-default\'" ion-button small (click)="cancelMotivos()">\n\n        <p *ngIf="idiom == \'01\'">Sair</p>\n\n        <p *ngIf="idiom == \'02\'">Salir</p>\n\n      </button>\n\n  \n\n      <button [ngClass]="project == \'edicom\' ? \'button-edicom\' : project == \'know-house\' ? \'button-know-house\' : \'button-default\'" ion-button small (click)="getConversasAtivas()">\n\n        <p *ngIf="idiom == \'01\'">Conversas Ativas</p>\n\n        <p *ngIf="idiom == \'02\'">Conversaciones Activas</p>\n\n      </button>\n\n    </ion-header>\n\n  \n\n    <ion-content padding>\n\n      <ion-card style="padding-top: 80px;" padding-top *ngIf="motivos && motivos.length > 0">\n\n        <ion-label *ngIf="idiom == \'01\'">Selecione um motivo.</ion-label>\n\n        <ion-label *ngIf="idiom == \'02\'">Seleccione una asitencia</ion-label>\n\n        <ion-list>\n\n          <ion-item *ngFor="let motivo of motivos" (click)="selectMotivo(motivo)">\n\n            <ion-avatar item-start>\n\n              <img src={{motivo.thumb}}>\n\n            </ion-avatar>\n\n            <ion-label>{{motivo.title}}</ion-label>\n\n          </ion-item>\n\n        </ion-list>\n\n      </ion-card>\n\n  \n\n      <ion-card  style="padding-top: 80px;" *ngIf="motivos && motivos.length <= 0">\n\n        <h1 *ngIf="idiom == \'01\'">Não há motivos cadastrados.</h1>\n\n        <h1 *ngIf="idiom == \'02\'">No hay razones registradas.</h1>\n\n      </ion-card>\n\n    </ion-content>\n\n  </ion-content>\n\n\n\n  <!---------------------------------------------------------------------------------->\n\n\n\n  <ion-content *ngIf="showRecentUserContainer" style="background-color: #ffffff;"  class="background" [ngClass]="version == \'01\' ? \'margin-content-l1\' : version == \'02\' ? \'margin-content-l2\' : \'margin-content-l1\'">\n\n    <ion-header padding style="position: relative;">\n\n      <button [ngClass]="project == \'edicom\' ? \'button-edicom\' : project == \'know-house\' ? \'button-know-house\' : \'button-default\'" ion-button small (click)="cancelMotivos()">\n\n        <p *ngIf="idiom == \'01\'">Sair</p>\n\n        <p *ngIf="idiom == \'02\'">Salir</p>\n\n      </button>\n\n      <button [ngClass]="project == \'edicom\' ? \'button-edicom\' : project == \'know-house\' ? \'button-know-house\' : \'button-default\'" ion-button small (click)="cancelRecentUsers()">\n\n        <p *ngIf="idiom == \'01\'">Voltar</p>\n\n        <p *ngIf="idiom == \'02\'">Volver</p>\n\n      </button>\n\n    </ion-header>\n\n  \n\n    <ion-content padding *ngIf="recents && recents.length > 0">\n\n      <p *ngIf="idiom == \'01\'">Abaixo a lista dos últimos usuários que você conversou</p>\n\n      <p *ngIf="idiom == \'02\'">Abajo el listado de los ultimos contactos hechos</p>\n\n      \n\n      <ion-list>\n\n        <ion-item href="#chat-anchor" *ngFor="let recent of recents" (click)="selectRecentUser(recent)" [ngClass]="recent.destacar == true ? \'bg-destaque\' : \'\'">              \n\n          <a href="#chat-anchor" style="text-decoration: none; display: flex; align-items: center;">\n\n            <ion-grid>\n\n              <ion-row>\n\n                <ion-col col-3>\n\n                  <ion-avatar item-start>\n\n                    <img src={{recent.thumb}}>\n\n                  </ion-avatar>\n\n                </ion-col>\n\n                <ion-col col-7 style="margin-top: auto; margin-bottom: auto;">\n\n                  <ion-row>\n\n                    <p *ngIf="recent.lido == true"> {{recent.nome}}</p>\n\n                    <p *ngIf="recent.lido == false"> <b>{{recent.nome}}</b></p>\n\n                  </ion-row>\n\n                  <ion-row>\n\n<!--                     \n\n                    <p *ngIf="recent.lido == true">{{recent.mensagem.substr(0,25)}}</p><p *ngIf="recent.lido == true && recent.mensagem.length > 25"> ...</p>\n\n                    <p *ngIf="recent.lido == false"><b>{{recent.mensagem.substr(0,25)}}</b></p><p *ngIf="recent.lido == false && recent.mensagem.length > 25"> <b>...</b></p>\n\n -->\n\n                  </ion-row>\n\n                </ion-col>\n\n              </ion-row>\n\n            </ion-grid>\n\n          </a>\n\n        </ion-item>\n\n      </ion-list>\n\n    </ion-content>\n\n  </ion-content>\n\n\n\n  <!---------------------------------------------------------------------------------->\n\n\n\n  <ion-content  *ngIf="showChatContainer"  style="background-color: #ffffff;" class="background" [ngClass]="version == \'01\' ? \'margin-content-l1\' : version == \'02\' ? \'margin-content-l2\' : \'margin-content-l1\'">\n\n    <ion-header padding *ngIf="showMessageAllBox == false" class="message-container" style="position: relative;">\n\n      <button [ngClass]="project == \'edicom\' ? \'button-edicom\' : project == \'know-house\' ? \'button-know-house\' : \'button-default\'" ion-button small (click)="cancelMotivos()">\n\n        <p *ngIf="idiom == \'01\'">Sair</p>\n\n        <p *ngIf="idiom == \'02\'">Salir</p>\n\n      </button>\n\n      <button [ngClass]="project == \'edicom\' ? \'button-edicom\' : project == \'know-house\' ? \'button-know-house\' : \'button-default\'" ion-button small (click)="cancelChat()">\n\n        <p *ngIf="idiom == \'01\'">Voltar</p>\n\n        <p *ngIf="idiom == \'02\'">Volver</p>\n\n      </button>\n\n    </ion-header>\n\n  \n\n    <ion-content padding *ngIf="showMessageAllBox == false" class="message-container" style="height: 90%;">\n\n      <ion-list>\n\n        <div id="chat-anchor"></div>\n\n        <div *ngIf="selectedUserId != null">\n\n          <p *ngIf="idiom == \'01\'" style="font-size: 1.4rem;">Você está falando com: {{selectedUser.nome}}</p>\n\n          <p *ngIf="idiom == \'02\'" style="font-size: 1.4rem;">Usted está hablando con: {{selectedUser.nome}}</p>\n\n        </div>\n\n        <div  id="cards">\n\n          <ion-card class="card-container">\n\n            <ion-card-content *ngFor="let message of messages">\n\n              <!-- receptivo -->\n\n              <ion-item *ngIf="userId !== message.remetente.id && (perfilType == 3 && message.notification == 0 || perfilType != 3)">\n\n                <ion-avatar item-start>\n\n                  <img src={{receptivo.thumb}}>\n\n                </ion-avatar>\n\n                <span *ngIf="message.notification == 1" class="circle_notification--receptive"><ion-icon name="ios-notifications-outline"></ion-icon></span>\n\n                <img *ngIf="message.type == \'file\'" src={{message.mensagem}} >\n\n                <h3 *ngIf="message.type != \'file\'" [innerHTML]="message.mensagem_formatada" class="message-receptive--default"></h3>\n\n                <h2 class="date">{{ message.created_at }}</h2>\n\n              </ion-item>\n\n  \n\n              <!-- ativo -->\n\n              <ion-item *ngIf="userId == message.remetente.id  && (perfilType == 3 && message.notification == 0 || perfilType != 3)">\n\n                <ion-avatar item-end>\n\n                  <img src={{ativo.thumb}}>\n\n                </ion-avatar>\n\n                <span *ngIf="message.notification == 1" class="circle_notification--active"><ion-icon name="ios-notifications-outline"></ion-icon></span>\n\n                <img *ngIf="message.type == \'file\'" src={{message.mensagem}} />\n\n                <h3 *ngIf="message.type != \'file\'" [innerHTML]="message.mensagem_formatada" [ngClass]="project == \'know-house\' ? \'message-active--know-house\' : \'message-active--default\'"></h3>\n\n                <h2 class="date">{{ message.created_at }}</h2>\n\n              </ion-item>\n\n            </ion-card-content>\n\n          </ion-card>\n\n        </div>\n\n      </ion-list>\n\n  \n\n      <ion-textarea [disabled]="selectedUserId == null" class="message-input"  *ngIf="idiom == \'01\'" rows="3" placeholder="Enviar nova mensagem" [(ngModel)]="newMessage" ></ion-textarea>\n\n      <ion-textarea [disabled]="selectedUserId == null" class="message-input"  *ngIf="idiom == \'02\'" rows="3" placeholder="Enviar nueva mensaje" [(ngModel)]="newMessage" ></ion-textarea>\n\n      \n\n      <button [ngClass]="project == \'edicom\' ? \'button-edicom\' : project == \'know-house\' ? \'button-know-house\' : \'button-default\'" [disabled]="selectedUserId == null" float-right ion-button icon-start (click)="sendMessage()"><ion-icon name="ios-text-outline"></ion-icon>Enviar</button>\n\n      <button [ngClass]="project == \'edicom\' ? \'button-edicom\' : project == \'know-house\' ? \'button-know-house\' : \'button-default\'" *ngIf="perfilType == 2" [disabled]="selectedUserId == null" float-right ion-button icon-start (click)="sendMessage(false, true)" style="margin-right: 10px;"><ion-icon name="ios-notifications-outline"></ion-icon>Notificar</button>     \n\n      <button [ngClass]="project == \'edicom\' ? \'button-edicom\' : project == \'know-house\' ? \'button-know-house\' : \'button-default\'" [disabled]="selectedUserId == null" float-right ion-button icon-start (click)="openGallery()" style="margin-right: 10px;"><ion-icon name="ios-document-outline"></ion-icon></button>     \n\n    </ion-content>\n\n  \n\n    <div *ngIf="showMessageAllBox == true">\n\n      <h2>Enviar Mensagem para todos do projeto {{ selectedProject[\'titulo\'] }}?</h2>\n\n  \n\n      <ion-textarea class="message-input" [(ngModel)]="newMessage" autofocus="true" rows="5" placeholder="Insira sua mensagem..."></ion-textarea>\n\n  \n\n      <button [ngClass]="project == \'edicom\' ? \'button-edicom\' : project == \'know-house\' ? \'button-know-house\' : \'button-default\'" ion-button float-right icon-start (click)="sendMessageAll()"><ion-icon name="ios-text-outline"></ion-icon>Enviar</button>\n\n      <button [ngClass]="project == \'edicom\' ? \'button-edicom\' : project == \'know-house\' ? \'button-know-house\' : \'button-default\'" float-right ion-button icon-start (click)="sendMessageAll(true, true)" style="margin-right: 10px;"><ion-icon name="ios-notifications-outline"></ion-icon>Notificar</button>     \n\n      <button [ngClass]="project == \'edicom\' ? \'button-edicom\' : project == \'know-house\' ? \'button-know-house\' : \'button-default\'" float-right ion-button icon-start (click)="openGallery(true)" style="margin-right: 10px;"><ion-icon name="ios-document-outline"></ion-icon></button>     \n\n      <button [ngClass]="project == \'edicom\' ? \'button-edicom\' : project == \'know-house\' ? \'button-know-house\' : \'button-default\'" ion-button float-right class="cancel-button" (click)="cancelMessageAll()">\n\n        <p *ngIf="idiom == \'01\'">Voltar</p>\n\n        <p *ngIf="idiom == \'02\'">Volver</p>\n\n      </button>\n\n  \n\n    </div>\n\n  </ion-content>\n\n\n\n<!-- </ion-content> -->\n\n\n\n\n\n'/*ion-inline-end:"C:\Users\alanj\Desktop\ALAN\VISION\PROJETOS\BEC\INTEGRADO\PROJETO\EAD\src\pages\chat\chat.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_http_service_http_service__["a" /* HttpServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["q" /* ViewController */]])
    ], ChatPage);
    return ChatPage;
}());

//# sourceMappingURL=chat.js.map

/***/ })

});
//# sourceMappingURL=12.js.map