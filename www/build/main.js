webpackJsonp([20],{

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(38);
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
                                    case 'simples-trade': {
                                        _this.url = '/strade';
                                        if (_this._platform.is("cordova")) {
                                            _this.url = "https://simplestrade.becinteligencia.com";
                                        }
                                        break;
                                    }
                                    case 'r2m': {
                                        _this.url = '/r2m';
                                        if (_this._platform.is("cordova")) {
                                            _this.url = "https://readytomarket.becinteligencia.com";
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

/***/ 169:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../components/download-modal/download-modal.module": [
		456,
		19
	],
	"../components/file-modal/file-modal.module": [
		457,
		18
	],
	"../components/list-videos-modal/list-videos-modal.module": [
		458,
		17
	],
	"../components/photo-modal/photo-modal.module": [
		459,
		16
	],
	"../components/quiz/quiz.module": [
		460,
		15
	],
	"../components/user-form/user-form.module": [
		461,
		5
	],
	"../pages/chat/chat.module": [
		469,
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
		472,
		11
	],
	"../pages/list-videos-v03/list-videos-v03.module": [
		471,
		10
	],
	"../pages/list-videos-v04/list-videos-v04.module": [
		473,
		7
	],
	"../pages/list-videos/list-videos.module": [
		474,
		6
	],
	"../pages/login/login.module": [
		470,
		4
	],
	"../pages/my-downloads/my-downloads.module": [
		462,
		13
	],
	"../pages/notification/notification.module": [
		463,
		9
	],
	"../pages/photo/photo.module": [
		475,
		8
	],
	"../pages/recovery-password/recovery-password.module": [
		465,
		2
	],
	"../pages/register/register.module": [
		464,
		3
	],
	"../pages/tabs/tabs.module": [
		466,
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
webpackAsyncContext.id = 169;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__ = __webpack_require__(409);
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
                case 'simples-trade': {
                    _this.url = '/strade';
                    if (_this._platform.is("cordova")) {
                        _this.url = "https://simplestrade.becinteligencia.com";
                    }
                    break;
                }
                case 'r2m': {
                    _this.url = '/r2m';
                    if (_this._platform.is("cordova")) {
                        _this.url = "https://readytomarket.becinteligencia.com";
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
                console.log("\n01 -> ", data.company_id);
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
            console.log("\n02 -> " + _this.url + '/api/usuarios/primeiro-acesso  -> ', data);
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
            console.log("\n03 -> ", data.company_id);
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

/***/ 346:
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

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PusherServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PusherServiceProvider = /** @class */ (function () {
    function PusherServiceProvider(http, storage) {
        var _this = this;
        this.http = http;
        this.storage = storage;
        this.storage.get('clienteId').then(function (valor) {
            var pusher = new Pusher(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].PUSHER_APP_KEY, {
                cluster: __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].PUSHER_APP_CLUSTER,
                encrypted: true,
            });
            _this.channel = pusher.subscribe("chat." + valor);
        });
    }
    PusherServiceProvider.prototype.init = function () {
        return this.channel;
    };
    PusherServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], PusherServiceProvider);
    return PusherServiceProvider;
}());

//# sourceMappingURL=pusher-service.js.map

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(371);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 371:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_opener__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_transfer__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_storage__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_auth_auth__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_http_service_http_service__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__app_component__ = __webpack_require__(450);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_call_number_ngx__ = __webpack_require__(451);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_onesignal__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ngx_qrcode2__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_ngx_pagination__ = __webpack_require__(452);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_platform_browser_animations__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_image_picker_ngx__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_angular_cropperjs__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_angular_cropperjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22_angular_cropperjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_pusher_service_pusher_service__ = __webpack_require__(349);
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
                        { loadChildren: '../pages/notification/notification.module#NotificationPageModule', name: 'notification-page', segment: 'notification', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'register-page', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/recovery-password/recovery-password.module#RecoveryPasswordPageModule', name: 'recovey-password-page', segment: 'recovery-password', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'tab-page', segment: 'tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-user-v02/edit-user-v02.module#EditUserV02PageModule', name: 'edit-user-v02-page', segment: 'edit-user-v02', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-user/edit-user.module#EditUserPageModule', name: 'edit-user-page', segment: 'edit-user', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/chat/chat.module#ChatPageModule', name: 'chat-page', segment: 'chat', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'login-page', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/list-videos-v03/list-videos-v03.module#ListVideosV03PageModule', name: 'list-videos-v03-page', segment: 'list-videos-v03', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/list-videos-v02/list-videos-v02.module#ListVideosV02PageModule', name: 'list-videos-v02-page', segment: 'list-videos-v02', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/list-videos-v04/list-videos-v04.module#ListVideosPageV04Module', name: 'list-videos-page-v04', segment: 'list-videos-v04', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/list-videos/list-videos.module#ListVideosPageModule', name: 'list-videos-page', segment: 'list-videos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/photo/photo.module#PhotoPageModule', name: 'photo-page', segment: 'photo', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_11__ionic_storage__["a" /* IonicStorageModule */].forRoot({ name: '__moveraDB' }),
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClientModule */],
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
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_image_picker_ngx__["a" /* ImagePicker */],
                __WEBPACK_IMPORTED_MODULE_23__providers_pusher_service_pusher_service__["a" /* PusherServiceProvider */]
            ],
            exports: []
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 411:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 171,
	"./af.js": 171,
	"./ar": 172,
	"./ar-dz": 173,
	"./ar-dz.js": 173,
	"./ar-kw": 174,
	"./ar-kw.js": 174,
	"./ar-ly": 175,
	"./ar-ly.js": 175,
	"./ar-ma": 176,
	"./ar-ma.js": 176,
	"./ar-sa": 177,
	"./ar-sa.js": 177,
	"./ar-tn": 178,
	"./ar-tn.js": 178,
	"./ar.js": 172,
	"./az": 179,
	"./az.js": 179,
	"./be": 180,
	"./be.js": 180,
	"./bg": 181,
	"./bg.js": 181,
	"./bm": 182,
	"./bm.js": 182,
	"./bn": 183,
	"./bn.js": 183,
	"./bo": 184,
	"./bo.js": 184,
	"./br": 185,
	"./br.js": 185,
	"./bs": 186,
	"./bs.js": 186,
	"./ca": 187,
	"./ca.js": 187,
	"./cs": 188,
	"./cs.js": 188,
	"./cv": 189,
	"./cv.js": 189,
	"./cy": 190,
	"./cy.js": 190,
	"./da": 191,
	"./da.js": 191,
	"./de": 192,
	"./de-at": 193,
	"./de-at.js": 193,
	"./de-ch": 194,
	"./de-ch.js": 194,
	"./de.js": 192,
	"./dv": 195,
	"./dv.js": 195,
	"./el": 196,
	"./el.js": 196,
	"./en-SG": 197,
	"./en-SG.js": 197,
	"./en-au": 198,
	"./en-au.js": 198,
	"./en-ca": 199,
	"./en-ca.js": 199,
	"./en-gb": 200,
	"./en-gb.js": 200,
	"./en-ie": 201,
	"./en-ie.js": 201,
	"./en-il": 202,
	"./en-il.js": 202,
	"./en-nz": 203,
	"./en-nz.js": 203,
	"./eo": 204,
	"./eo.js": 204,
	"./es": 205,
	"./es-do": 206,
	"./es-do.js": 206,
	"./es-us": 207,
	"./es-us.js": 207,
	"./es.js": 205,
	"./et": 208,
	"./et.js": 208,
	"./eu": 209,
	"./eu.js": 209,
	"./fa": 210,
	"./fa.js": 210,
	"./fi": 211,
	"./fi.js": 211,
	"./fo": 212,
	"./fo.js": 212,
	"./fr": 213,
	"./fr-ca": 214,
	"./fr-ca.js": 214,
	"./fr-ch": 215,
	"./fr-ch.js": 215,
	"./fr.js": 213,
	"./fy": 216,
	"./fy.js": 216,
	"./ga": 217,
	"./ga.js": 217,
	"./gd": 218,
	"./gd.js": 218,
	"./gl": 219,
	"./gl.js": 219,
	"./gom-latn": 220,
	"./gom-latn.js": 220,
	"./gu": 221,
	"./gu.js": 221,
	"./he": 222,
	"./he.js": 222,
	"./hi": 223,
	"./hi.js": 223,
	"./hr": 224,
	"./hr.js": 224,
	"./hu": 225,
	"./hu.js": 225,
	"./hy-am": 226,
	"./hy-am.js": 226,
	"./id": 227,
	"./id.js": 227,
	"./is": 228,
	"./is.js": 228,
	"./it": 229,
	"./it-ch": 230,
	"./it-ch.js": 230,
	"./it.js": 229,
	"./ja": 231,
	"./ja.js": 231,
	"./jv": 232,
	"./jv.js": 232,
	"./ka": 233,
	"./ka.js": 233,
	"./kk": 234,
	"./kk.js": 234,
	"./km": 235,
	"./km.js": 235,
	"./kn": 236,
	"./kn.js": 236,
	"./ko": 237,
	"./ko.js": 237,
	"./ku": 238,
	"./ku.js": 238,
	"./ky": 239,
	"./ky.js": 239,
	"./lb": 240,
	"./lb.js": 240,
	"./lo": 241,
	"./lo.js": 241,
	"./lt": 242,
	"./lt.js": 242,
	"./lv": 243,
	"./lv.js": 243,
	"./me": 244,
	"./me.js": 244,
	"./mi": 245,
	"./mi.js": 245,
	"./mk": 246,
	"./mk.js": 246,
	"./ml": 247,
	"./ml.js": 247,
	"./mn": 248,
	"./mn.js": 248,
	"./mr": 249,
	"./mr.js": 249,
	"./ms": 250,
	"./ms-my": 251,
	"./ms-my.js": 251,
	"./ms.js": 250,
	"./mt": 252,
	"./mt.js": 252,
	"./my": 253,
	"./my.js": 253,
	"./nb": 254,
	"./nb.js": 254,
	"./ne": 255,
	"./ne.js": 255,
	"./nl": 256,
	"./nl-be": 257,
	"./nl-be.js": 257,
	"./nl.js": 256,
	"./nn": 258,
	"./nn.js": 258,
	"./pa-in": 259,
	"./pa-in.js": 259,
	"./pl": 260,
	"./pl.js": 260,
	"./pt": 261,
	"./pt-br": 262,
	"./pt-br.js": 262,
	"./pt.js": 261,
	"./ro": 263,
	"./ro.js": 263,
	"./ru": 264,
	"./ru.js": 264,
	"./sd": 265,
	"./sd.js": 265,
	"./se": 266,
	"./se.js": 266,
	"./si": 267,
	"./si.js": 267,
	"./sk": 268,
	"./sk.js": 268,
	"./sl": 269,
	"./sl.js": 269,
	"./sq": 270,
	"./sq.js": 270,
	"./sr": 271,
	"./sr-cyrl": 272,
	"./sr-cyrl.js": 272,
	"./sr.js": 271,
	"./ss": 273,
	"./ss.js": 273,
	"./sv": 274,
	"./sv.js": 274,
	"./sw": 275,
	"./sw.js": 275,
	"./ta": 276,
	"./ta.js": 276,
	"./te": 277,
	"./te.js": 277,
	"./tet": 278,
	"./tet.js": 278,
	"./tg": 279,
	"./tg.js": 279,
	"./th": 280,
	"./th.js": 280,
	"./tl-ph": 281,
	"./tl-ph.js": 281,
	"./tlh": 282,
	"./tlh.js": 282,
	"./tr": 283,
	"./tr.js": 283,
	"./tzl": 284,
	"./tzl.js": 284,
	"./tzm": 285,
	"./tzm-latn": 286,
	"./tzm-latn.js": 286,
	"./tzm.js": 285,
	"./ug-cn": 287,
	"./ug-cn.js": 287,
	"./uk": 288,
	"./uk.js": 288,
	"./ur": 289,
	"./ur.js": 289,
	"./uz": 290,
	"./uz-latn": 291,
	"./uz-latn.js": 291,
	"./uz.js": 290,
	"./vi": 292,
	"./vi.js": 292,
	"./x-pseudo": 293,
	"./x-pseudo.js": 293,
	"./yo": 294,
	"./yo.js": 294,
	"./zh-cn": 295,
	"./zh-cn.js": 295,
	"./zh-hk": 296,
	"./zh-hk.js": 296,
	"./zh-tw": 297,
	"./zh-tw.js": 297
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
webpackContext.id = 411;

/***/ }),

/***/ 432:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    /*   //KNOW-HOUSE -----------------------------------
      PUSHER_APP_ID: "1059211",
      PUSHER_APP_KEY: "25af961ea9f2ef86b9aa",
      PUSHER_APP_SECRET: "c6060d1a53114a8365da",
      PUSHER_APP_CLUSTER: "us2",
        */
    //EDICOM -----------------------------------
    PUSHER_APP_ID: "1016195",
    PUSHER_APP_KEY: "e9b4a92206140e9879bb",
    PUSHER_APP_SECRET: "92444667633283b9fb77",
    PUSHER_APP_CLUSTER: "us2",
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 450:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_http_service_http_service__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_onesignal__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__common_is_cordova_available__ = __webpack_require__(346);
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
            //6 -> simples-trade
            //7 -> r2m
            _this.projectNumber = 2;
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
                case 6:
                    _this.onesignalAppId = 'd6e18971-f2cc-41d8-aed7-28384cb957e0';
                    _this.firebaseSenderId = '823038736964';
                    _this.projectName = 'simples-trade';
                    storage.set('Idiom', '01'); //português
                    break;
                case 7:
                    _this.onesignalAppId = 'a7bbe9ca-2e79-4f10-8f68-365da3e09fd5';
                    _this.firebaseSenderId = '613045008970';
                    _this.projectName = 'r2m';
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
                    case 'simples-trade': {
                        url = 'https://simplestrade.becinteligencia.com';
                        break;
                    }
                    case 'r2m': {
                        url = 'https://readytomarket.becinteligencia.com';
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

},[350]);
//# sourceMappingURL=main.js.map