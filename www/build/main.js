webpackJsonp([19],{

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    //TEXT_COLOR_V1: 'text-default-black',  
    //text-default-black
    //text-default-white
    //HEADER_TEXT: 'style-white', 
    //style-white
    //style-black
    //style-orange
    /*
     //KNOW-HOUSE -----------------------------------
      PROJECT: 'know-house',
      TEXT_COLOR_V1: 'text-default-black',
      HEADER_TEXT: 'style-orange',
    
      PUSHER_APP_ID: "1059211",
      PUSHER_APP_KEY: "25af961ea9f2ef86b9aa",
      PUSHER_APP_SECRET: "c6060d1a53114a8365da",
      PUSHER_APP_CLUSTER: "us2",
     */
    /*
    //EDICOM -----------------------------------
      PROJECT: 'edicom',
      TEXT_COLOR_V1: 'text-default-black',
      HEADER_TEXT: 'style-orange',
    
      PUSHER_APP_ID: "1156523",
        PUSHER_APP_KEY: "7b8b5ea20f7a185be995",
        PUSHER_APP_SECRET: "789567e75724f82b17dc",
      PUSHER_APP_CLUSTER: "us2",
    */
    /*
    //R2M -----------------------------------
      PROJECT: 'r2m',
      TEXT_COLOR_V1: 'text-default-black',
      HEADER_TEXT: 'style-white',
    
      PUSHER_APP_ID: "1114376",
        PUSHER_APP_KEY: "fcc53e52875706a30801",
        PUSHER_APP_SECRET: "742c5c14207ece897af8",
      PUSHER_APP_CLUSTER: "us2",
    */
    /*
    //SIMPLE TRAINING ------------------------
      PROJECT: 'simples-trade',
      TEXT_COLOR_V1: 'text-default-black',
      HEADER_TEXT: 'style-white',
    
      PUSHER_APP_ID: "1124925",
        PUSHER_APP_KEY: "ae4e465cb80d72743dc8",
        PUSHER_APP_SECRET: "580c135664656f851c52",
      PUSHER_APP_CLUSTER: "us2",
     */
    //VCC -----------------------------------
    PROJECT: 'ead',
    TEXT_COLOR_V1: 'text-default-black',
    HEADER_TEXT: 'style-white',
    PUSHER_APP_ID: "1165623",
    PUSHER_APP_KEY: "458631d9d874e22b5c16",
    PUSHER_APP_SECRET: "ceac567fed3ab7dd2dd1",
    PUSHER_APP_CLUSTER: "us2",
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(171);
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
                                    case 'localhost': {
                                        _this.url = '/lch';
                                        if (_this._platform.is("cordova")) {
                                            _this.url = "http://ead.localhost";
                                        }
                                        break;
                                    }
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
                                    case 'ava': {
                                        _this.url = '/ava';
                                        if (_this._platform.is("cordova")) {
                                            _this.url = "https://ava.insighttech.com.br";
                                        }
                                        break;
                                    }
                                    case 'tmc': {
                                        _this.url = '/tmc';
                                        if (_this._platform.is("cordova")) {
                                            _this.url = "https://tmc.becinteligencia.com";
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

/***/ 124:
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
webpackEmptyAsyncContext.id = 124;

/***/ }),

/***/ 170:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../components/download-modal/download-modal.module": [
		456,
		18
	],
	"../components/file-modal/file-modal.module": [
		457,
		17
	],
	"../components/list-videos-modal/list-videos-modal.module": [
		458,
		16
	],
	"../components/photo-modal/photo-modal.module": [
		459,
		15
	],
	"../components/quiz/quiz.module": [
		460,
		14
	],
	"../components/user-form/user-form.module": [
		461,
		4
	],
	"../pages/chat/chat.module": [
		470,
		11
	],
	"../pages/edit-user/edit-user.module": [
		466,
		0
	],
	"../pages/list-videos-v02/list-videos-v02.module": [
		471,
		10
	],
	"../pages/list-videos-v03/list-videos-v03.module": [
		472,
		9
	],
	"../pages/list-videos-v04/list-videos-v04.module": [
		467,
		6
	],
	"../pages/list-videos/list-videos.module": [
		473,
		5
	],
	"../pages/login/login.module": [
		468,
		3
	],
	"../pages/my-downloads/my-downloads.module": [
		462,
		12
	],
	"../pages/notification/notification.module": [
		463,
		8
	],
	"../pages/photo/photo.module": [
		474,
		7
	],
	"../pages/recovery-password/recovery-password.module": [
		464,
		1
	],
	"../pages/register/register.module": [
		465,
		2
	],
	"../pages/tabs/tabs.module": [
		469,
		13
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
webpackAsyncContext.id = 170;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__ = __webpack_require__(410);
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
                case 'localhost': {
                    _this.url = '/lch';
                    if (_this._platform.is("cordova")) {
                        _this.url = "http://ead.localhost";
                    }
                    break;
                }
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
                case 'ava': {
                    _this.url = '/ava';
                    if (_this._platform.is("cordova")) {
                        _this.url = "https://ava.insighttech.com.br/";
                    }
                    break;
                }
                case 'tmc': {
                    _this.url = '/tmc';
                    if (_this._platform.is("cordova")) {
                        _this.url = "https://tmc.becinteligencia.com";
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

/***/ 347:
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

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PusherServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(111);
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

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(372);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 372:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_opener__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_transfer__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_storage__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_auth_auth__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_http_service_http_service__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__app_component__ = __webpack_require__(450);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_call_number_ngx__ = __webpack_require__(451);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_onesignal__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ngx_qrcode2__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_ngx_pagination__ = __webpack_require__(452);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_platform_browser_animations__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_image_picker_ngx__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_angular_cropperjs__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_angular_cropperjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22_angular_cropperjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_pusher_service_pusher_service__ = __webpack_require__(350);
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
                        { loadChildren: '../pages/recovery-password/recovery-password.module#RecoveryPasswordPageModule', name: 'recovey-password-page', segment: 'recovery-password', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'register-page', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-user/edit-user.module#EditUserPageModule', name: 'edit-user-page', segment: 'edit-user', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/list-videos-v04/list-videos-v04.module#ListVideosPageV04Module', name: 'list-videos-page-v04', segment: 'list-videos-v04', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'login-page', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'tab-page', segment: 'tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/chat/chat.module#ChatPageModule', name: 'chat-page', segment: 'chat', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/list-videos-v02/list-videos-v02.module#ListVideosV02PageModule', name: 'list-videos-v02-page', segment: 'list-videos-v02', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/list-videos-v03/list-videos-v03.module#ListVideosV03PageModule', name: 'list-videos-v03-page', segment: 'list-videos-v03', priority: 'low', defaultHistory: [] },
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

/***/ 412:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 172,
	"./af.js": 172,
	"./ar": 173,
	"./ar-dz": 174,
	"./ar-dz.js": 174,
	"./ar-kw": 175,
	"./ar-kw.js": 175,
	"./ar-ly": 176,
	"./ar-ly.js": 176,
	"./ar-ma": 177,
	"./ar-ma.js": 177,
	"./ar-sa": 178,
	"./ar-sa.js": 178,
	"./ar-tn": 179,
	"./ar-tn.js": 179,
	"./ar.js": 173,
	"./az": 180,
	"./az.js": 180,
	"./be": 181,
	"./be.js": 181,
	"./bg": 182,
	"./bg.js": 182,
	"./bm": 183,
	"./bm.js": 183,
	"./bn": 184,
	"./bn.js": 184,
	"./bo": 185,
	"./bo.js": 185,
	"./br": 186,
	"./br.js": 186,
	"./bs": 187,
	"./bs.js": 187,
	"./ca": 188,
	"./ca.js": 188,
	"./cs": 189,
	"./cs.js": 189,
	"./cv": 190,
	"./cv.js": 190,
	"./cy": 191,
	"./cy.js": 191,
	"./da": 192,
	"./da.js": 192,
	"./de": 193,
	"./de-at": 194,
	"./de-at.js": 194,
	"./de-ch": 195,
	"./de-ch.js": 195,
	"./de.js": 193,
	"./dv": 196,
	"./dv.js": 196,
	"./el": 197,
	"./el.js": 197,
	"./en-SG": 198,
	"./en-SG.js": 198,
	"./en-au": 199,
	"./en-au.js": 199,
	"./en-ca": 200,
	"./en-ca.js": 200,
	"./en-gb": 201,
	"./en-gb.js": 201,
	"./en-ie": 202,
	"./en-ie.js": 202,
	"./en-il": 203,
	"./en-il.js": 203,
	"./en-nz": 204,
	"./en-nz.js": 204,
	"./eo": 205,
	"./eo.js": 205,
	"./es": 206,
	"./es-do": 207,
	"./es-do.js": 207,
	"./es-us": 208,
	"./es-us.js": 208,
	"./es.js": 206,
	"./et": 209,
	"./et.js": 209,
	"./eu": 210,
	"./eu.js": 210,
	"./fa": 211,
	"./fa.js": 211,
	"./fi": 212,
	"./fi.js": 212,
	"./fo": 213,
	"./fo.js": 213,
	"./fr": 214,
	"./fr-ca": 215,
	"./fr-ca.js": 215,
	"./fr-ch": 216,
	"./fr-ch.js": 216,
	"./fr.js": 214,
	"./fy": 217,
	"./fy.js": 217,
	"./ga": 218,
	"./ga.js": 218,
	"./gd": 219,
	"./gd.js": 219,
	"./gl": 220,
	"./gl.js": 220,
	"./gom-latn": 221,
	"./gom-latn.js": 221,
	"./gu": 222,
	"./gu.js": 222,
	"./he": 223,
	"./he.js": 223,
	"./hi": 224,
	"./hi.js": 224,
	"./hr": 225,
	"./hr.js": 225,
	"./hu": 226,
	"./hu.js": 226,
	"./hy-am": 227,
	"./hy-am.js": 227,
	"./id": 228,
	"./id.js": 228,
	"./is": 229,
	"./is.js": 229,
	"./it": 230,
	"./it-ch": 231,
	"./it-ch.js": 231,
	"./it.js": 230,
	"./ja": 232,
	"./ja.js": 232,
	"./jv": 233,
	"./jv.js": 233,
	"./ka": 234,
	"./ka.js": 234,
	"./kk": 235,
	"./kk.js": 235,
	"./km": 236,
	"./km.js": 236,
	"./kn": 237,
	"./kn.js": 237,
	"./ko": 238,
	"./ko.js": 238,
	"./ku": 239,
	"./ku.js": 239,
	"./ky": 240,
	"./ky.js": 240,
	"./lb": 241,
	"./lb.js": 241,
	"./lo": 242,
	"./lo.js": 242,
	"./lt": 243,
	"./lt.js": 243,
	"./lv": 244,
	"./lv.js": 244,
	"./me": 245,
	"./me.js": 245,
	"./mi": 246,
	"./mi.js": 246,
	"./mk": 247,
	"./mk.js": 247,
	"./ml": 248,
	"./ml.js": 248,
	"./mn": 249,
	"./mn.js": 249,
	"./mr": 250,
	"./mr.js": 250,
	"./ms": 251,
	"./ms-my": 252,
	"./ms-my.js": 252,
	"./ms.js": 251,
	"./mt": 253,
	"./mt.js": 253,
	"./my": 254,
	"./my.js": 254,
	"./nb": 255,
	"./nb.js": 255,
	"./ne": 256,
	"./ne.js": 256,
	"./nl": 257,
	"./nl-be": 258,
	"./nl-be.js": 258,
	"./nl.js": 257,
	"./nn": 259,
	"./nn.js": 259,
	"./pa-in": 260,
	"./pa-in.js": 260,
	"./pl": 261,
	"./pl.js": 261,
	"./pt": 262,
	"./pt-br": 263,
	"./pt-br.js": 263,
	"./pt.js": 262,
	"./ro": 264,
	"./ro.js": 264,
	"./ru": 265,
	"./ru.js": 265,
	"./sd": 266,
	"./sd.js": 266,
	"./se": 267,
	"./se.js": 267,
	"./si": 268,
	"./si.js": 268,
	"./sk": 269,
	"./sk.js": 269,
	"./sl": 270,
	"./sl.js": 270,
	"./sq": 271,
	"./sq.js": 271,
	"./sr": 272,
	"./sr-cyrl": 273,
	"./sr-cyrl.js": 273,
	"./sr.js": 272,
	"./ss": 274,
	"./ss.js": 274,
	"./sv": 275,
	"./sv.js": 275,
	"./sw": 276,
	"./sw.js": 276,
	"./ta": 277,
	"./ta.js": 277,
	"./te": 278,
	"./te.js": 278,
	"./tet": 279,
	"./tet.js": 279,
	"./tg": 280,
	"./tg.js": 280,
	"./th": 281,
	"./th.js": 281,
	"./tl-ph": 282,
	"./tl-ph.js": 282,
	"./tlh": 283,
	"./tlh.js": 283,
	"./tr": 284,
	"./tr.js": 284,
	"./tzl": 285,
	"./tzl.js": 285,
	"./tzm": 286,
	"./tzm-latn": 287,
	"./tzm-latn.js": 287,
	"./tzm.js": 286,
	"./ug-cn": 288,
	"./ug-cn.js": 288,
	"./uk": 289,
	"./uk.js": 289,
	"./ur": 290,
	"./ur.js": 290,
	"./uz": 291,
	"./uz-latn": 292,
	"./uz-latn.js": 292,
	"./uz.js": 291,
	"./vi": 293,
	"./vi.js": 293,
	"./x-pseudo": 294,
	"./x-pseudo.js": 294,
	"./yo": 295,
	"./yo.js": 295,
	"./zh-cn": 296,
	"./zh-cn.js": 296,
	"./zh-hk": 297,
	"./zh-hk.js": 297,
	"./zh-tw": 298,
	"./zh-tw.js": 298
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
webpackContext.id = 412;

/***/ }),

/***/ 450:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_http_service_http_service__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_onesignal__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__common_is_cordova_available__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__environments_environment__ = __webpack_require__(111);
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
        this.ENV = __WEBPACK_IMPORTED_MODULE_8__environments_environment__["a" /* environment */];
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
            //0 -> localhost
            //1 -> ead (vcc)
            //2 -> edicom
            //3 -> marketing-house
            //4 -> hkt369
            //5 -> know-house
            //6 -> simples-trade
            //7 -> r2m
            //8 -> ava
            //9 -> tmc
            _this.projectNumber = 1;
            switch (_this.projectNumber) {
                case 0:
                    _this.onesignalAppId = '946eb156-716e-4000-853f-18f41cc2b193';
                    _this.firebaseSenderId = '23981024898';
                    _this.projectName = 'localhost';
                    storage.set('Idiom', '01'); //português
                    storage.set('TextColor', 'black'); //português
                    break;
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
                case 8:
                    _this.onesignalAppId = '6b8f443d-da09-4ccc-b629-f1e21476c6b2';
                    _this.firebaseSenderId = '575583616149';
                    _this.projectName = 'ava';
                    storage.set('Idiom', '01'); //português
                    break;
                case 9:
                    _this.onesignalAppId = 'c4a92409-ba2f-4001-bd59-af1b24ae58a1';
                    _this.firebaseSenderId = '732312096020';
                    _this.projectName = 'tmc';
                    storage.set('Idiom', '02'); //espanhol
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
                });
                _this.oneSignal.endInit();
            }
            storage.set('Project', _this.projectName).then(function (value) {
                var url = '';
                switch (value) {
                    case 'localhost': {
                        url = 'http://ead.localhost';
                        break;
                    }
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
                    case 'ava': {
                        url = 'https://ava.insighttech.com.br';
                        break;
                    }
                    case 'tmc': {
                        url = 'https://tmc.becinteligencia.com';
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\alanj\Desktop\ALAN\VISION\PROJETOS\BEC\EAD\IONIC\PROJETO\EAD\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\alanj\Desktop\ALAN\VISION\PROJETOS\BEC\EAD\IONIC\PROJETO\EAD\src\app\app.html"*/
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

},[351]);
//# sourceMappingURL=main.js.map