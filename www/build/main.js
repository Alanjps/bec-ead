webpackJsonp([20],{

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(46);
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





var HttpServiceProvider = /** @class */ (function () {
    function HttpServiceProvider(http, _platform, storage) {
        var _this = this;
        this.http = http;
        this._platform = _platform;
        this.storage = storage;
        this.url = '';
        this.getUrl = function () { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new Promise(function (response, reject) {
                            _this.storage.get('Project').then(function (value) {
                                switch (value) {
                                    case 'marketing-house': {
                                        _this.url = '/mkh';
                                        if (_this._platform.is("cordova")) {
                                            _this.url = "https://homolog.marketinghouse.com.br";
                                        }
                                        break;
                                    }
                                    case 'edicom': {
                                        _this.url = '/edc';
                                        if (_this._platform.is("cordova")) {
                                            _this.url = "https://edicom.becinteligencia.com";
                                            //this.url = "https://homolog.marketinghouse.com.br";
                                        }
                                        break;
                                    }
                                    case 'hkt369': {
                                        _this.url = '/hkt369';
                                        if (_this._platform.is("cordova")) {
                                            _this.url = "https://descubre.hkt369.com";
                                        }
                                        break;
                                    }
                                    case 'know-house': {
                                        _this.url = '/knowh';
                                        if (_this._platform.is("cordova")) {
                                            _this.url = "https://knowhouse.marketinghouse.com.br";
                                        }
                                        break;
                                    }
                                    default: {
                                        _this.url = '/vcc';
                                        if (_this._platform.is("cordova")) {
                                            _this.url = "https://vcc.becinteligencia.com";
                                            //this.url = "https://homolog.marketinghouse.com.br";
                                        }
                                    }
                                }
                                response(_this.url);
                            });
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        }); };
        this.getAppVersion = function () { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            var url;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getUrl()];
                    case 1:
                        url = _a.sent();
                        return [4 /*yield*/, new Promise(function (response, reject) {
                                var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
                                headers.append('Content-Type', 'application/json');
                                var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({ headers: headers });
                                _this.http.get(url + '/confsapp', options).subscribe(function (res) { return response(res.json()); });
                            })];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        }); };
        this.getUrl();
    }
    HttpServiceProvider.prototype.getAll = function (endpoint, variables, type) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        if (!type) {
            var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({ headers: headers });
            return this.http.post(this.url + endpoint, variables, options)
                .map(function (res) { return res.json(); });
        }
        else if (type == 'get') {
            var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({ headers: headers, params: variables });
            return this.http.get(this.url + endpoint, options)
                .map(function (res) { return res.json(); });
        }
        else if (type == "put") {
            var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({ headers: headers, params: variables });
            return this.http.put(this.url + endpoint, variables, options)
                .map(function (res) { return res.json(); });
        }
        /*return this.http.get(this.url+endpoint)
        .map(res => {
          return res.json();
        })*/
    };
    HttpServiceProvider.prototype.post = function (endpoint, variables, type) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        if (!type) {
            headers.append('Content-Type', 'application/json');
        }
        else if (type == "form-data") {
            headers.append('enctype', 'multipart/form-data; boundary=----WebKitFormBoundaryuL67FWkv1CA');
        }
        var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.url + endpoint, variables, options);
    };
    HttpServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], HttpServiceProvider);
    return HttpServiceProvider;
}());

//# sourceMappingURL=http-service.js.map

/***/ }),

/***/ 123:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 123;

/***/ }),

/***/ 168:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../components/download-modal/download-modal.module": [
		454,
		19
	],
	"../components/file-modal/file-modal.module": [
		455,
		18
	],
	"../components/list-videos-modal/list-videos-modal.module": [
		456,
		17
	],
	"../components/photo-modal/photo-modal.module": [
		457,
		16
	],
	"../components/quiz/quiz.module": [
		458,
		15
	],
	"../components/user-form/user-form.module": [
		459,
		5
	],
	"../pages/chat/chat.module": [
		466,
		12
	],
	"../pages/edit-user-v02/edit-user-v02.module": [
		467,
		1
	],
	"../pages/edit-user/edit-user.module": [
		468,
		0
	],
	"../pages/list-videos-v02/list-videos-v02.module": [
		470,
		11
	],
	"../pages/list-videos-v03/list-videos-v03.module": [
		469,
		10
	],
	"../pages/list-videos-v04/list-videos-v04.module": [
		471,
		7
	],
	"../pages/list-videos/list-videos.module": [
		472,
		6
	],
	"../pages/login/login.module": [
		461,
		4
	],
	"../pages/my-downloads/my-downloads.module": [
		460,
		13
	],
	"../pages/notification/notification.module": [
		462,
		9
	],
	"../pages/photo/photo.module": [
		473,
		8
	],
	"../pages/recovery-password/recovery-password.module": [
		463,
		2
	],
	"../pages/register/register.module": [
		464,
		3
	],
	"../pages/tabs/tabs.module": [
		465,
		14
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 168;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_onesignal__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AuthProvider = /** @class */ (function () {
    //private url:string= '/edc';
    function AuthProvider(http, storage, toastCtrl, _platform, oneSignal) {
        var _this = this;
        this.http = http;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this._platform = _platform;
        this.oneSignal = oneSignal;
        this.msg = "Favor fazer o login";
        this.url = '/vcc';
        this.storage.get('Project').then(function (value) {
            switch (value) {
                case 'marketing-house': {
                    _this.url = '/mkh';
                    if (_this._platform.is("cordova")) {
                        _this.url = "https://homolog.marketinghouse.com.br";
                    }
                    break;
                }
                case 'edicom': {
                    _this.url = '/edc';
                    if (_this._platform.is("cordova")) {
                        _this.url = "https://edicom.becinteligencia.com";
                    }
                    break;
                }
                case 'hkt369': {
                    _this.url = '/hkt369';
                    if (_this._platform.is("cordova")) {
                        _this.url = "https://descubre.hkt369.com";
                    }
                    break;
                }
                case 'know-house': {
                    _this.url = '/knowh';
                    if (_this._platform.is("cordova")) {
                        _this.url = "https://knowhouse.marketinghouse.com.br";
                    }
                    break;
                }
                default: {
                    _this.url = '/vcc';
                    if (_this._platform.is("cordova")) {
                        _this.url = "https://vcc.becinteligencia.com";
                    }
                }
            }
        });
    }
    AuthProvider.prototype.request = function (url, vars) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        //'/api/usuarios/cadastrar'
        return this.http.post(this.url + url, vars, options)
            .map(function (res) { return res.json(); })
            .toPromise()
            .then(function (data) {
            return data;
        });
    };
    AuthProvider.prototype.login = function (credentials) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.url + '/api/usuarios/logar', credentials, options)
            .map(function (res) { return res.json(); })
            .toPromise()
            .then(function (data) {
            if (data.id > 0) {
                _this.storage.set('clienteId', data.id);
                _this.storage.set('clienteNome', data.nome);
                _this.storage.set('clienteEmail', data.email);
                _this.storage.set('clienteWhatsapp', data.whatsapp);
                _this.storage.set('clienteDocumento', data.documento);
                _this.storage.set('clienteProfileId', data.profile_id);
                _this.storage.set('clienteEmpresa', data.empresa);
                _this.storage.set('clienteNascimento', data.nascimento);
                _this.storage.set('clienteThumb', data.thumb);
                _this.storage.set('clienteCompanyId', data.company_id);
                //if(credentials.lembrar){
                //CLIENTE MARCOU PARA LEMBRAR DE FICAR LOGADO
                //2. REGRA ALTERADA, AGORA O SISTEMA SEMPRE VAI LEMBRAR O ACESSO
                _this.storage.set('clienteSavePassword', credentials.password);
                _this.storage.set('clienteSaveDocumento', data.documento);
                //}
                return true;
            }
            else {
                return false;
            }
        });
    };
    AuthProvider.prototype.firstAcess = function (credentials) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.url + '/api/usuarios/primeiro-acesso', credentials, options)
            .map(function (res) { return res.json(); })
            .toPromise()
            .then(function (data) {
            if (data.id > 0) {
                _this.storage.set('clienteId', data.id);
                _this.storage.set('clienteNome', data.nome);
                _this.storage.set('clienteEmail', data.email);
                _this.storage.set('clienteWhatsapp', data.whatsapp);
                _this.storage.set('clienteDocumento', data.documento);
                _this.storage.set('clienteProfileId', data.profile_id);
                _this.storage.set('clienteEmpresa', data.empresa);
                _this.storage.set('clienteNascimento', data.nascimento);
                _this.storage.set('clienteThumb', data.thumb);
                _this.storage.set('clienteCompanyId', data.company_id);
                _this.storage.set('clienteFirst', data.first);
                return true;
            }
            else {
                return false;
            }
        });
    };
    AuthProvider.prototype.register = function (credentials) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        //headers.append('Content-Type', 'multipart/form-data');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.url + '/api/usuarios/cadastrar', credentials, options)
            .map(function (res) { return res.json(); })
            .toPromise()
            .then(function (data) {
            data.nascimento = data.nascimento ? __WEBPACK_IMPORTED_MODULE_6_moment___default()(data.nascimento.date).format('DD/MM/YYYY') : '';
            if (data.id > 0) {
                _this.storage.set('clienteId', data.id);
                _this.storage.set('clienteNome', data.nome);
                _this.storage.set('clienteEmail', data.email);
                _this.storage.set('clienteWhatsapp', data.whatsapp);
                _this.storage.set('clienteDocumento', data.documento);
                _this.storage.set('clienteProfileId', data.profile_id);
                _this.storage.set('clienteEmpresa', data.empresa);
                _this.storage.set('clienteNascimento', data.nascimento);
                _this.storage.set('clienteThumb', data.thumb);
                _this.storage.set('clienteCompanyId', data.company_id);
                return data;
            }
            else {
                //return false;
                return data;
            }
        });
    };
    AuthProvider.prototype.recoveryPassword = function (credentials) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.url + '/api/usuarios/reset-senha', credentials, options)
            .map(function (res) { return res.json(); })
            .toPromise()
            .then(function (data) {
            //return data;
            if (data.id > 0) {
                _this.storage.set('clienteId', data.id);
                _this.storage.set('clienteNome', data.nome);
                _this.storage.set('clienteEmail', data.email);
                _this.storage.set('clienteWhatsapp', data.whatsapp);
                _this.storage.set('clienteDocumento', data.documento);
                _this.storage.set('clienteProfileId', data.profile_id);
                _this.storage.set('clienteEmpresa', data.empresa);
                _this.storage.set('clienteNascimento', data.nascimento);
                _this.storage.set('clienteThumb', data.thumb);
                _this.storage.set('clienteCompanyId', data.company_id);
                _this.storage.set('clienteFirst', data.first);
                return true;
            }
            else {
                return false;
            }
        });
        //ALTERADO 21/09. APARTIR DE AGORA O USUÁRIO RESETA NO PROPRIO APP
        /*let headers = new Headers();
        headers.append('Content-Type', 'application/json');
    
    
        let options = new RequestOptions({ headers : headers});
    
         return this.http.post(this.url+'/api/usuarios/recover', credentials, options)
          .map(res => res.json())
          .toPromise()
          .then(data => {
            return data;
          });*/
    };
    AuthProvider.prototype.getJob = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.url + '/api/usuarios/ocupacoes', options)
            .map(function (res) { return res.json(); })
            .toPromise()
            .then(function (data) {
            return data;
        });
    };
    AuthProvider.prototype.userIsLogged = function () {
        var _this = this;
        return this.storage.get('clienteId').then(function (val) {
            if (val) {
                return true;
            }
            else {
                var toast = _this.toastCtrl.create({
                    message: _this.msg,
                    duration: 3000
                });
                toast.present();
                return true; //MUDAR PARA FALSE
            }
        });
    };
    AuthProvider.prototype.logout = function () {
        var _this = this;
        this.storage.get('clienteId').then(function (clienteId) {
            _this.storage.get('clienteEmail').then(function (clienteEmail) {
                _this.oneSignal.getIds().then(function (state) {
                    //REMOVE O DEVICE ID DA WEB
                    //id, email, type, device_id
                    var parametros = {
                        id: clienteId,
                        email: clienteEmail,
                        device_id: state.userId,
                        type: 'android'
                    };
                    _this.http.post(_this.url + '/api/usuarios/remove-device', parametros)
                        .subscribe(function (data) {
                    });
                }).catch(function () { console.log("Erro ao obter os dados do Onesignal"); });
                _this.storage.remove('clientId');
                _this.storage.remove('clienteNome');
                _this.storage.remove('clienteEmail');
                _this.storage.remove('clienteWhatsapp');
                _this.storage.remove('clienteDocumento');
                _this.storage.remove('clienteProfileId');
                _this.storage.remove('clienteEmpresa');
                _this.storage.remove('clienteNascimento');
                _this.storage.remove('clienteThumb');
                _this.storage.remove('clienteCompanyId');
                _this.storage.remove('clienteId');
            });
        });
    };
    AuthProvider.prototype.logoutSave = function () {
        this.storage.remove('clienteSavePassword');
        this.storage.remove('clienteSaveDocumento');
    };
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["p" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_onesignal__["a" /* OneSignal */]])
    ], AuthProvider);
    return AuthProvider;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isCordovaAvailable; });
var isCordovaAvailable = function () {
    if (!window.cordova) {
        return false;
    }
    return true;
};
//# sourceMappingURL=is-cordova-available.js.map

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(369);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 369:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_opener__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_transfer__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_storage__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_auth_auth__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_http_service_http_service__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__app_component__ = __webpack_require__(448);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_call_number_ngx__ = __webpack_require__(449);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_onesignal__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ngx_qrcode2__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_ngx_pagination__ = __webpack_require__(450);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_platform_browser_animations__ = __webpack_require__(451);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_image_picker_ngx__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_angular_cropperjs__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_angular_cropperjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22_angular_cropperjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_15__app_component__["a" /* MyApp */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_12_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_15__app_component__["a" /* MyApp */], {
                    autocomplete: 'off',
                    cancelText: 'Cancelar',
                    okText: 'OK',
                    monthNames: ['Janeiro', 'Fevereiro', 'Mar\u00e7o', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubto', 'Novembro', 'Dezembro'],
                    monthShortNames: ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ'],
                    dayNames: ['Domingo', 'Segunda-feira', 'Ter\u00e7a-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sabado'],
                    dayShortNames: ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SAB'],
                    tabsHideOnSubPages: true,
                    mode: 'md'
                }, {
                    links: [
                        { loadChildren: '../components/download-modal/download-modal.module#DownloadModalModule', name: 'download-modal', segment: 'download-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/file-modal/file-modal.module#FileModalModule', name: 'file-modal', segment: 'file-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-videos-modal/list-videos-modal.module#ListVideosModalModule', name: 'list-videos-modal', segment: 'list-videos-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/photo-modal/photo-modal.module#PhotoModalModule', name: 'photo-modal', segment: 'photo-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/quiz/quiz.module#QuizModule', name: 'quiz', segment: 'quiz', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/user-form/user-form.module#UserFormModule', name: 'user-form-modal', segment: 'user-form', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/my-downloads/my-downloads.module#MyDownloadsPageModule', name: 'my-downloads', segment: 'my-downloads', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'login-page', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notification/notification.module#NotificationPageModule', name: 'notification-page', segment: 'notification', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/recovery-password/recovery-password.module#RecoveryPasswordPageModule', name: 'recovey-password-page', segment: 'recovery-password', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'register-page', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'tab-page', segment: 'tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/chat/chat.module#ChatPageModule', name: 'chat-page', segment: 'chat', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-user-v02/edit-user-v02.module#EditUserV02PageModule', name: 'edit-user-v02-page', segment: 'edit-user-v02', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-user/edit-user.module#EditUserPageModule', name: 'edit-user-page', segment: 'edit-user', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/list-videos-v03/list-videos-v03.module#ListVideosV03PageModule', name: 'list-videos-v03-page', segment: 'list-videos-v03', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/list-videos-v02/list-videos-v02.module#ListVideosV02PageModule', name: 'list-videos-v02-page', segment: 'list-videos-v02', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/list-videos-v04/list-videos-v04.module#ListVideosPageV04Module', name: 'list-videos-page-v04', segment: 'list-videos-v04', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/list-videos/list-videos.module#ListVideosPageModule', name: 'list-videos-page', segment: 'list-videos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/photo/photo.module#PhotoPageModule', name: 'photo-page', segment: 'photo', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_11__ionic_storage__["a" /* IonicStorageModule */].forRoot({ name: '__moveraDB' }),
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_18_ngx_qrcode2__["a" /* NgxQRCodeModule */],
                __WEBPACK_IMPORTED_MODULE_19_ngx_pagination__["a" /* NgxPaginationModule */],
                __WEBPACK_IMPORTED_MODULE_20__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_22_angular_cropperjs__["AngularCropperjsModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_12_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_12_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_13__providers_auth_auth__["a" /* AuthProvider */],
                __WEBPACK_IMPORTED_MODULE_14__providers_http_service_http_service__["a" /* HttpServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_0__angular_common__["DatePipe"],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_transfer__["a" /* FileTransfer */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_opener__["a" /* FileOpener */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_call_number_ngx__["a" /* CallNumber */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_onesignal__["a" /* OneSignal */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_image_picker_ngx__["a" /* ImagePicker */]
            ],
            exports: []
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 410:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 170,
	"./af.js": 170,
	"./ar": 171,
	"./ar-dz": 172,
	"./ar-dz.js": 172,
	"./ar-kw": 173,
	"./ar-kw.js": 173,
	"./ar-ly": 174,
	"./ar-ly.js": 174,
	"./ar-ma": 175,
	"./ar-ma.js": 175,
	"./ar-sa": 176,
	"./ar-sa.js": 176,
	"./ar-tn": 177,
	"./ar-tn.js": 177,
	"./ar.js": 171,
	"./az": 178,
	"./az.js": 178,
	"./be": 179,
	"./be.js": 179,
	"./bg": 180,
	"./bg.js": 180,
	"./bm": 181,
	"./bm.js": 181,
	"./bn": 182,
	"./bn.js": 182,
	"./bo": 183,
	"./bo.js": 183,
	"./br": 184,
	"./br.js": 184,
	"./bs": 185,
	"./bs.js": 185,
	"./ca": 186,
	"./ca.js": 186,
	"./cs": 187,
	"./cs.js": 187,
	"./cv": 188,
	"./cv.js": 188,
	"./cy": 189,
	"./cy.js": 189,
	"./da": 190,
	"./da.js": 190,
	"./de": 191,
	"./de-at": 192,
	"./de-at.js": 192,
	"./de-ch": 193,
	"./de-ch.js": 193,
	"./de.js": 191,
	"./dv": 194,
	"./dv.js": 194,
	"./el": 195,
	"./el.js": 195,
	"./en-SG": 196,
	"./en-SG.js": 196,
	"./en-au": 197,
	"./en-au.js": 197,
	"./en-ca": 198,
	"./en-ca.js": 198,
	"./en-gb": 199,
	"./en-gb.js": 199,
	"./en-ie": 200,
	"./en-ie.js": 200,
	"./en-il": 201,
	"./en-il.js": 201,
	"./en-nz": 202,
	"./en-nz.js": 202,
	"./eo": 203,
	"./eo.js": 203,
	"./es": 204,
	"./es-do": 205,
	"./es-do.js": 205,
	"./es-us": 206,
	"./es-us.js": 206,
	"./es.js": 204,
	"./et": 207,
	"./et.js": 207,
	"./eu": 208,
	"./eu.js": 208,
	"./fa": 209,
	"./fa.js": 209,
	"./fi": 210,
	"./fi.js": 210,
	"./fo": 211,
	"./fo.js": 211,
	"./fr": 212,
	"./fr-ca": 213,
	"./fr-ca.js": 213,
	"./fr-ch": 214,
	"./fr-ch.js": 214,
	"./fr.js": 212,
	"./fy": 215,
	"./fy.js": 215,
	"./ga": 216,
	"./ga.js": 216,
	"./gd": 217,
	"./gd.js": 217,
	"./gl": 218,
	"./gl.js": 218,
	"./gom-latn": 219,
	"./gom-latn.js": 219,
	"./gu": 220,
	"./gu.js": 220,
	"./he": 221,
	"./he.js": 221,
	"./hi": 222,
	"./hi.js": 222,
	"./hr": 223,
	"./hr.js": 223,
	"./hu": 224,
	"./hu.js": 224,
	"./hy-am": 225,
	"./hy-am.js": 225,
	"./id": 226,
	"./id.js": 226,
	"./is": 227,
	"./is.js": 227,
	"./it": 228,
	"./it-ch": 229,
	"./it-ch.js": 229,
	"./it.js": 228,
	"./ja": 230,
	"./ja.js": 230,
	"./jv": 231,
	"./jv.js": 231,
	"./ka": 232,
	"./ka.js": 232,
	"./kk": 233,
	"./kk.js": 233,
	"./km": 234,
	"./km.js": 234,
	"./kn": 235,
	"./kn.js": 235,
	"./ko": 236,
	"./ko.js": 236,
	"./ku": 237,
	"./ku.js": 237,
	"./ky": 238,
	"./ky.js": 238,
	"./lb": 239,
	"./lb.js": 239,
	"./lo": 240,
	"./lo.js": 240,
	"./lt": 241,
	"./lt.js": 241,
	"./lv": 242,
	"./lv.js": 242,
	"./me": 243,
	"./me.js": 243,
	"./mi": 244,
	"./mi.js": 244,
	"./mk": 245,
	"./mk.js": 245,
	"./ml": 246,
	"./ml.js": 246,
	"./mn": 247,
	"./mn.js": 247,
	"./mr": 248,
	"./mr.js": 248,
	"./ms": 249,
	"./ms-my": 250,
	"./ms-my.js": 250,
	"./ms.js": 249,
	"./mt": 251,
	"./mt.js": 251,
	"./my": 252,
	"./my.js": 252,
	"./nb": 253,
	"./nb.js": 253,
	"./ne": 254,
	"./ne.js": 254,
	"./nl": 255,
	"./nl-be": 256,
	"./nl-be.js": 256,
	"./nl.js": 255,
	"./nn": 257,
	"./nn.js": 257,
	"./pa-in": 258,
	"./pa-in.js": 258,
	"./pl": 259,
	"./pl.js": 259,
	"./pt": 260,
	"./pt-br": 261,
	"./pt-br.js": 261,
	"./pt.js": 260,
	"./ro": 262,
	"./ro.js": 262,
	"./ru": 263,
	"./ru.js": 263,
	"./sd": 264,
	"./sd.js": 264,
	"./se": 265,
	"./se.js": 265,
	"./si": 266,
	"./si.js": 266,
	"./sk": 267,
	"./sk.js": 267,
	"./sl": 268,
	"./sl.js": 268,
	"./sq": 269,
	"./sq.js": 269,
	"./sr": 270,
	"./sr-cyrl": 271,
	"./sr-cyrl.js": 271,
	"./sr.js": 270,
	"./ss": 272,
	"./ss.js": 272,
	"./sv": 273,
	"./sv.js": 273,
	"./sw": 274,
	"./sw.js": 274,
	"./ta": 275,
	"./ta.js": 275,
	"./te": 276,
	"./te.js": 276,
	"./tet": 277,
	"./tet.js": 277,
	"./tg": 278,
	"./tg.js": 278,
	"./th": 279,
	"./th.js": 279,
	"./tl-ph": 280,
	"./tl-ph.js": 280,
	"./tlh": 281,
	"./tlh.js": 281,
	"./tr": 282,
	"./tr.js": 282,
	"./tzl": 283,
	"./tzl.js": 283,
	"./tzm": 284,
	"./tzm-latn": 285,
	"./tzm-latn.js": 285,
	"./tzm.js": 284,
	"./ug-cn": 286,
	"./ug-cn.js": 286,
	"./uk": 287,
	"./uk.js": 287,
	"./ur": 288,
	"./ur.js": 288,
	"./uz": 289,
	"./uz-latn": 290,
	"./uz-latn.js": 290,
	"./uz.js": 289,
	"./vi": 291,
	"./vi.js": 291,
	"./x-pseudo": 292,
	"./x-pseudo.js": 292,
	"./yo": 293,
	"./yo.js": 293,
	"./zh-cn": 294,
	"./zh-cn.js": 294,
	"./zh-hk": 295,
	"./zh-hk.js": 295,
	"./zh-tw": 296,
	"./zh-tw.js": 296
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 410;

/***/ }),

/***/ 448:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_http_service_http_service__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_onesignal__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__common_is_cordova_available__ = __webpack_require__(345);
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








var MyApp = /** @class */ (function () {
    function MyApp(storage, platform, statusBar, splashScreen, oneSignal, http) {
        var _this = this;
        this.oneSignal = oneSignal;
        this.rootPage = '';
        this.projectNumber = null;
        this.projectName = null;
        this.onesignalAppId = '';
        this.firebaseSenderId = '';
        this.clearStorage(storage);
        if (platform.is('android')) {
            storage.set('Platform', 'android');
        }
        else if (platform.is('ios')) {
            storage.set('Platform', 'ios');
        }
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
            //IDIOMA -----------------------------------------
            //storage.set('Idiom','01'); //português
            //storage.set('Idiom','02'); //espanhol
            //1 -> ead
            //2 -> edicom
            //3 -> marketing-house
            //4 -> hkt369
            //5 -> know-house
            _this.projectNumber = 5;
            switch (_this.projectNumber) {
                case 1:
                    _this.onesignalAppId = '946eb156-716e-4000-853f-18f41cc2b193';
                    _this.firebaseSenderId = '23981024898';
                    _this.projectName = 'ead';
                    storage.set('Idiom', '01'); //português
                    break;
                case 2:
                    _this.onesignalAppId = 'c3765e9e-79b4-4dbc-b3ad-a31396017591';
                    _this.firebaseSenderId = '981777081301';
                    _this.projectName = 'edicom';
                    storage.set('Idiom', '02'); //espanhol
                    break;
                case 3:
                    _this.onesignalAppId = '883bb93e-4053-43f0-865c-a5d52ca89a80';
                    _this.firebaseSenderId = '1010203313691';
                    _this.projectName = 'marketing-house';
                    storage.set('Idiom', '01'); //português
                    break;
                case 4:
                    _this.onesignalAppId = 'abf814a3-a2bb-4ae4-9a63-422d37394e64';
                    _this.firebaseSenderId = '786704296447';
                    _this.projectName = 'hkt369';
                    storage.set('Idiom', '02'); //espanhol
                    break;
                case 5:
                    _this.onesignalAppId = 'd29cd1d1-3a5b-4774-b768-a1026101ea0a';
                    _this.firebaseSenderId = '823038736964';
                    _this.projectName = 'know-house';
                    storage.set('Idiom', '01'); //português
                    break;
            }
            // OneSignal Code start:
            // Enable to debug issues:
            // The following options are available with increasingly more information: 
            // 0 = NONE, 1 = FATAL, 2 = ERROR, 3 = WARN, 4 = INFO, 5 = DEBUG, 6 = VERBOSE
            // window["plugins"].OneSignal.setLogLevel({logLevel: 6, visualLevel: 6});
            // window["plugins"].OneSignal.setLogLevel({logLevel: 6, visualLevel: 0});
            if (Object(__WEBPACK_IMPORTED_MODULE_7__common_is_cordova_available__["a" /* isCordovaAvailable */])()) {
                /*
                var notificationOpenedCallback = function(jsonData) {
                  console.log("\n\nENTROU PUSH ----------------------------------\n");
                  console.log(jsonData);
                  console.log("\n----------------------------------\n\n");
                };
      
                window["plugins"].OneSignal
                  .startInit(this.onesignalAppId, this.firebaseSenderId)
                  .handleNotificationOpened(notificationOpenedCallback)
                  .endInit();
                */
                _this.oneSignal.startInit(_this.onesignalAppId, _this.firebaseSenderId);
                _this.oneSignal.handleNotificationReceived().subscribe(function (jsonData) {
                    console.log("\n\nNOTIFICAÇÃO RECEBIDA", jsonData);
                });
                _this.oneSignal.endInit();
            }
            storage.set('Project', _this.projectName).then(function (value) {
                var url = '';
                switch (value) {
                    case 'marketing-house': {
                        url = 'https://homolog.marketinghouse.com.br';
                        break;
                    }
                    case 'edicom': {
                        url = 'https://edicom.becinteligencia.com';
                        break;
                    }
                    case 'ead': {
                        url = 'https://vcc.becinteligencia.com';
                        break;
                    }
                    case 'hkt369': {
                        url = 'https://descubre.hkt369.com';
                        break;
                    }
                    case 'know-house': {
                        url = 'https://knowhouse.marketinghouse.com.br';
                        break;
                    }
                }
                storage.set('GlobalUrl', url).then(function (urlBase) { return __awaiter(_this, void 0, void 0, function () {
                    var _this = this;
                    var version;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                version = 0;
                                //BUG DA REQUISICAO
                                //ERROR Error: Uncaught (in promise): SyntaxError: Unexpected end of JSON input
                                //SyntaxError: Unexpected end of JSON input
                                //at JSON.parse (<anonymous>)
                                return [4 /*yield*/, new Promise(function (response, reject) { return __awaiter(_this, void 0, void 0, function () {
                                        return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0: return [4 /*yield*/, http.getAppVersion().then(function (res) {
                                                        storage.set('AppConfig', res);
                                                        version = res.version;
                                                        if (version == 1) {
                                                            storage.set('LayoutVersion', '01');
                                                        }
                                                        else if (version == 2) {
                                                            storage.set('LayoutVersion', '02');
                                                        }
                                                        else {
                                                            storage.set('LayoutVersion', '02');
                                                        }
                                                        response();
                                                    })];
                                                case 1: return [2 /*return*/, _a.sent()];
                                            }
                                        });
                                    }); })];
                            case 1:
                                //BUG DA REQUISICAO
                                //ERROR Error: Uncaught (in promise): SyntaxError: Unexpected end of JSON input
                                //SyntaxError: Unexpected end of JSON input
                                //at JSON.parse (<anonymous>)
                                _a.sent();
                                storage.get('LayoutVersion').then(function (value) {
                                    _this.rootPage = 'login-page';
                                    platform.ready().then(function () {
                                        statusBar.styleDefault();
                                        splashScreen.hide();
                                    });
                                });
                                return [2 /*return*/];
                        }
                    });
                }); });
            });
        });
    }
    MyApp.prototype.clearStorage = function (storage) {
        var vars = [
            'AvailableDefaultProjects'
        ];
        vars.map(function (v) {
            storage.remove(v);
        });
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\alanj\Desktop\ALAN\VISION\PROJETOS\BEC\INTEGRADO\PROJETO\EAD\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\alanj\Desktop\ALAN\VISION\PROJETOS\BEC\INTEGRADO\PROJETO\EAD\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_onesignal__["a" /* OneSignal */],
            __WEBPACK_IMPORTED_MODULE_5__providers_http_service_http_service__["a" /* HttpServiceProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[348]);
//# sourceMappingURL=main.js.map