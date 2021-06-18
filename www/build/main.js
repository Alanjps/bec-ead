webpackJsonp([21],{

/***/ 160:
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
    //KNOW-HOUSE -----------------------------------
    PROJECT: 'know-house',
    TEXT_COLOR_V1: 'text-default-black',
    HEADER_TEXT: 'style-orange',
    PUSHER_APP_ID: "1059211",
    PUSHER_APP_KEY: "25af961ea9f2ef86b9aa",
    PUSHER_APP_SECRET: "c6060d1a53114a8365da",
    PUSHER_APP_CLUSTER: "us2",
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(49);
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
                                            _this.url = "http://192.168.0.11";
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
                                    case 'hability': {
                                        _this.url = '/hability';
                                        if (_this._platform.is("cordova")) {
                                            _this.url = "https://hability.becinteligencia.com";
                                        }
                                        break;
                                    }
                                    case 'full-promo': {
                                        _this.url = '/full-promo';
                                        if (_this._platform.is("cordova")) {
                                            _this.url = "https://homolog.fullpromo.com.br";
                                        }
                                        break;
                                    }
                                    case 'sehc': {
                                        _this.url = '/sehc';
                                        if (_this._platform.is("cordova")) {
                                            _this.url = "https://sehc.becinteligencia.com";
                                        }
                                        break;
                                    }
                                    case 'club-learn': {
                                        _this.url = '/sehc';
                                        if (_this._platform.is("cordova")) {
                                            _this.url = "https://app.clublearn.com.br";
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

/***/ 173:
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
webpackEmptyAsyncContext.id = 173;

/***/ }),

/***/ 226:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../components/download-modal/download-modal.module": [
		853,
		20
	],
	"../components/file-modal/file-modal.module": [
		854,
		19
	],
	"../components/holerite/holerite.module": [
		855,
		6
	],
	"../components/list-videos-modal/list-videos-modal.module": [
		856,
		18
	],
	"../components/photo-modal/photo-modal.module": [
		857,
		17
	],
	"../components/quiz/quiz.module": [
		858,
		16
	],
	"../components/user-form/user-form.module": [
		859,
		5
	],
	"../pages/chat/chat.module": [
		870,
		13
	],
	"../pages/edit-user-v02/edit-user-v02.module": [
		864,
		1
	],
	"../pages/edit-user/edit-user.module": [
		865,
		0
	],
	"../pages/list-videos-v02/list-videos-v02.module": [
		871,
		12
	],
	"../pages/list-videos-v03/list-videos-v03.module": [
		866,
		11
	],
	"../pages/list-videos-v04/list-videos-v04.module": [
		867,
		8
	],
	"../pages/list-videos/list-videos.module": [
		872,
		7
	],
	"../pages/login/login.module": [
		868,
		4
	],
	"../pages/my-downloads/my-downloads.module": [
		860,
		14
	],
	"../pages/notification/notification.module": [
		861,
		10
	],
	"../pages/photo/photo.module": [
		873,
		9
	],
	"../pages/recovery-password/recovery-password.module": [
		862,
		2
	],
	"../pages/register/register.module": [
		863,
		3
	],
	"../pages/tabs/tabs.module": [
		869,
		15
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
webpackAsyncContext.id = 226;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 488:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_onesignal__ = __webpack_require__(91);
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
                        _this.url = "http://192.168.0.11";
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
                case 'hability': {
                    _this.url = '/hability';
                    if (_this._platform.is("cordova")) {
                        _this.url = "https://hability.becinteligencia.com";
                    }
                    break;
                }
                case 'full-promo': {
                    _this.url = '/full-promo';
                    if (_this._platform.is("cordova")) {
                        _this.url = "https://homolog.fullpromo.com.br";
                    }
                    break;
                }
                case 'sehc': {
                    _this.url = '/sehc';
                    if (_this._platform.is("cordova")) {
                        _this.url = "https://sehc.becinteligencia.com";
                    }
                    break;
                }
                case 'club-learn': {
                    _this.url = '/club-learn';
                    if (_this._platform.is("cordova")) {
                        _this.url = "https://app.clublearn.com.br";
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

/***/ 493:
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

/***/ 497:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PusherServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(49);
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

/***/ 498:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(499);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(503);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 503:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(491);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__ = __webpack_require__(489);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_opener__ = __webpack_require__(490);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_transfer__ = __webpack_require__(492);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_storage__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ionic_angular__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_auth_auth__ = __webpack_require__(488);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_http_service_http_service__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__app_component__ = __webpack_require__(847);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_call_number_ngx__ = __webpack_require__(848);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_onesignal__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ngx_qrcode2__ = __webpack_require__(494);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_ngx_pagination__ = __webpack_require__(849);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_platform_browser_animations__ = __webpack_require__(850);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_image_picker_ngx__ = __webpack_require__(852);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_angular_cropperjs__ = __webpack_require__(495);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_angular_cropperjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22_angular_cropperjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_pusher_service_pusher_service__ = __webpack_require__(497);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_in_app_browser_ngx__ = __webpack_require__(496);
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
                        { loadChildren: '../components/holerite/holerite.module#HoleriteModule', name: 'holerite-modal', segment: 'holerite', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-videos-modal/list-videos-modal.module#ListVideosModalModule', name: 'list-videos-modal', segment: 'list-videos-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/photo-modal/photo-modal.module#PhotoModalModule', name: 'photo-modal', segment: 'photo-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/quiz/quiz.module#QuizModule', name: 'quiz', segment: 'quiz', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/user-form/user-form.module#UserFormModule', name: 'user-form-modal', segment: 'user-form', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/my-downloads/my-downloads.module#MyDownloadsPageModule', name: 'my-downloads', segment: 'my-downloads', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notification/notification.module#NotificationPageModule', name: 'notification-page', segment: 'notification', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/recovery-password/recovery-password.module#RecoveryPasswordPageModule', name: 'recovey-password-page', segment: 'recovery-password', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'register-page', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-user-v02/edit-user-v02.module#EditUserV02PageModule', name: 'edit-user-v02-page', segment: 'edit-user-v02', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-user/edit-user.module#EditUserPageModule', name: 'edit-user-page', segment: 'edit-user', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/list-videos-v03/list-videos-v03.module#ListVideosV03PageModule', name: 'list-videos-v03-page', segment: 'list-videos-v03', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/list-videos-v04/list-videos-v04.module#ListVideosPageV04Module', name: 'list-videos-page-v04', segment: 'list-videos-v04', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'login-page', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'tab-page', segment: 'tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/chat/chat.module#ChatPageModule', name: 'chat-page', segment: 'chat', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/list-videos-v02/list-videos-v02.module#ListVideosV02PageModule', name: 'list-videos-v02-page', segment: 'list-videos-v02', priority: 'low', defaultHistory: [] },
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
                __WEBPACK_IMPORTED_MODULE_23__providers_pusher_service_pusher_service__["a" /* PusherServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_in_app_browser_ngx__["a" /* InAppBrowser */]
            ],
            exports: []
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 530:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 227,
	"./af.js": 227,
	"./ar": 228,
	"./ar-dz": 229,
	"./ar-dz.js": 229,
	"./ar-kw": 230,
	"./ar-kw.js": 230,
	"./ar-ly": 231,
	"./ar-ly.js": 231,
	"./ar-ma": 232,
	"./ar-ma.js": 232,
	"./ar-sa": 233,
	"./ar-sa.js": 233,
	"./ar-tn": 234,
	"./ar-tn.js": 234,
	"./ar.js": 228,
	"./az": 235,
	"./az.js": 235,
	"./be": 236,
	"./be.js": 236,
	"./bg": 237,
	"./bg.js": 237,
	"./bm": 238,
	"./bm.js": 238,
	"./bn": 239,
	"./bn.js": 239,
	"./bo": 240,
	"./bo.js": 240,
	"./br": 241,
	"./br.js": 241,
	"./bs": 242,
	"./bs.js": 242,
	"./ca": 243,
	"./ca.js": 243,
	"./cs": 244,
	"./cs.js": 244,
	"./cv": 245,
	"./cv.js": 245,
	"./cy": 246,
	"./cy.js": 246,
	"./da": 247,
	"./da.js": 247,
	"./de": 248,
	"./de-at": 249,
	"./de-at.js": 249,
	"./de-ch": 250,
	"./de-ch.js": 250,
	"./de.js": 248,
	"./dv": 251,
	"./dv.js": 251,
	"./el": 252,
	"./el.js": 252,
	"./en-SG": 253,
	"./en-SG.js": 253,
	"./en-au": 254,
	"./en-au.js": 254,
	"./en-ca": 255,
	"./en-ca.js": 255,
	"./en-gb": 256,
	"./en-gb.js": 256,
	"./en-ie": 257,
	"./en-ie.js": 257,
	"./en-il": 258,
	"./en-il.js": 258,
	"./en-nz": 259,
	"./en-nz.js": 259,
	"./eo": 260,
	"./eo.js": 260,
	"./es": 261,
	"./es-do": 262,
	"./es-do.js": 262,
	"./es-us": 263,
	"./es-us.js": 263,
	"./es.js": 261,
	"./et": 264,
	"./et.js": 264,
	"./eu": 265,
	"./eu.js": 265,
	"./fa": 266,
	"./fa.js": 266,
	"./fi": 267,
	"./fi.js": 267,
	"./fo": 268,
	"./fo.js": 268,
	"./fr": 269,
	"./fr-ca": 270,
	"./fr-ca.js": 270,
	"./fr-ch": 271,
	"./fr-ch.js": 271,
	"./fr.js": 269,
	"./fy": 272,
	"./fy.js": 272,
	"./ga": 273,
	"./ga.js": 273,
	"./gd": 274,
	"./gd.js": 274,
	"./gl": 275,
	"./gl.js": 275,
	"./gom-latn": 276,
	"./gom-latn.js": 276,
	"./gu": 277,
	"./gu.js": 277,
	"./he": 278,
	"./he.js": 278,
	"./hi": 279,
	"./hi.js": 279,
	"./hr": 280,
	"./hr.js": 280,
	"./hu": 281,
	"./hu.js": 281,
	"./hy-am": 282,
	"./hy-am.js": 282,
	"./id": 283,
	"./id.js": 283,
	"./is": 284,
	"./is.js": 284,
	"./it": 285,
	"./it-ch": 286,
	"./it-ch.js": 286,
	"./it.js": 285,
	"./ja": 287,
	"./ja.js": 287,
	"./jv": 288,
	"./jv.js": 288,
	"./ka": 289,
	"./ka.js": 289,
	"./kk": 290,
	"./kk.js": 290,
	"./km": 291,
	"./km.js": 291,
	"./kn": 292,
	"./kn.js": 292,
	"./ko": 293,
	"./ko.js": 293,
	"./ku": 294,
	"./ku.js": 294,
	"./ky": 295,
	"./ky.js": 295,
	"./lb": 296,
	"./lb.js": 296,
	"./lo": 297,
	"./lo.js": 297,
	"./lt": 298,
	"./lt.js": 298,
	"./lv": 299,
	"./lv.js": 299,
	"./me": 300,
	"./me.js": 300,
	"./mi": 301,
	"./mi.js": 301,
	"./mk": 302,
	"./mk.js": 302,
	"./ml": 303,
	"./ml.js": 303,
	"./mn": 304,
	"./mn.js": 304,
	"./mr": 305,
	"./mr.js": 305,
	"./ms": 306,
	"./ms-my": 307,
	"./ms-my.js": 307,
	"./ms.js": 306,
	"./mt": 308,
	"./mt.js": 308,
	"./my": 309,
	"./my.js": 309,
	"./nb": 310,
	"./nb.js": 310,
	"./ne": 311,
	"./ne.js": 311,
	"./nl": 312,
	"./nl-be": 313,
	"./nl-be.js": 313,
	"./nl.js": 312,
	"./nn": 314,
	"./nn.js": 314,
	"./pa-in": 315,
	"./pa-in.js": 315,
	"./pl": 316,
	"./pl.js": 316,
	"./pt": 317,
	"./pt-br": 318,
	"./pt-br.js": 318,
	"./pt.js": 317,
	"./ro": 319,
	"./ro.js": 319,
	"./ru": 320,
	"./ru.js": 320,
	"./sd": 321,
	"./sd.js": 321,
	"./se": 322,
	"./se.js": 322,
	"./si": 323,
	"./si.js": 323,
	"./sk": 324,
	"./sk.js": 324,
	"./sl": 325,
	"./sl.js": 325,
	"./sq": 326,
	"./sq.js": 326,
	"./sr": 327,
	"./sr-cyrl": 328,
	"./sr-cyrl.js": 328,
	"./sr.js": 327,
	"./ss": 329,
	"./ss.js": 329,
	"./sv": 330,
	"./sv.js": 330,
	"./sw": 331,
	"./sw.js": 331,
	"./ta": 332,
	"./ta.js": 332,
	"./te": 333,
	"./te.js": 333,
	"./tet": 334,
	"./tet.js": 334,
	"./tg": 335,
	"./tg.js": 335,
	"./th": 336,
	"./th.js": 336,
	"./tl-ph": 337,
	"./tl-ph.js": 337,
	"./tlh": 338,
	"./tlh.js": 338,
	"./tr": 339,
	"./tr.js": 339,
	"./tzl": 340,
	"./tzl.js": 340,
	"./tzm": 341,
	"./tzm-latn": 342,
	"./tzm-latn.js": 342,
	"./tzm.js": 341,
	"./ug-cn": 343,
	"./ug-cn.js": 343,
	"./uk": 344,
	"./uk.js": 344,
	"./ur": 345,
	"./ur.js": 345,
	"./uz": 346,
	"./uz-latn": 347,
	"./uz-latn.js": 347,
	"./uz.js": 346,
	"./vi": 348,
	"./vi.js": 348,
	"./x-pseudo": 349,
	"./x-pseudo.js": 349,
	"./yo": 350,
	"./yo.js": 350,
	"./zh-cn": 351,
	"./zh-cn.js": 351,
	"./zh-hk": 352,
	"./zh-hk.js": 352,
	"./zh-tw": 353,
	"./zh-tw.js": 353
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
webpackContext.id = 530;

/***/ }),

/***/ 847:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_http_service_http_service__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_onesignal__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__common_is_cordova_available__ = __webpack_require__(493);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__environments_environment__ = __webpack_require__(160);
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
            //0  -> localhost
            //1  -> ead (vcc)
            //2  -> edicom
            //3  -> marketing-house
            //4  -> hkt369
            //5  -> know-house
            //6  -> simples-trade
            //7  -> r2m
            //8  -> ava
            //9  -> tmc
            //10 -> hability
            //11 -> full-promo
            //12 -> sehc
            //13 -> club-learn
            _this.projectNumber = 5;
            switch (_this.projectNumber) {
                case 0:
                    _this.onesignalAppId = '946eb156-716e-4000-853f-18f41cc2b193';
                    _this.firebaseSenderId = '23981024898';
                    _this.projectName = 'localhost';
                    storage.set('Idiom', '02'); //português
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
                case 10:
                    _this.onesignalAppId = 'fb347a8c-b214-4754-934b-b60e6772fd47';
                    _this.firebaseSenderId = '926995274326';
                    _this.projectName = 'hability';
                    storage.set('Idiom', '02'); //espanhol
                    break;
                case 11:
                    _this.onesignalAppId = '574a5c13-9a8e-46fb-85cf-3698d35cc750';
                    _this.firebaseSenderId = '1067216235696';
                    _this.projectName = 'full-promo';
                    storage.set('Idiom', '01'); //português
                    break;
                case 12:
                    _this.onesignalAppId = '41ad100c-898c-4a9f-99d9-277244f36858';
                    _this.firebaseSenderId = '159095755019';
                    _this.projectName = 'sehc';
                    storage.set('Idiom', '02'); //espanhol
                    break;
                case 13:
                    _this.onesignalAppId = '9844d205-8452-4e21-8128-45d424748be8';
                    _this.firebaseSenderId = '173961594534';
                    _this.projectName = 'club-learn';
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
                });
                _this.oneSignal.endInit();
            }
            storage.set('Project', _this.projectName).then(function (value) {
                var url = '';
                switch (value) {
                    case 'localhost': {
                        url = 'http://192.168.0.11';
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
                    case 'hability': {
                        url = 'https://hability.becinteligencia.com';
                        break;
                    }
                    case 'full-promo': {
                        url = 'https://homolog.fullpromo.com.br';
                        break;
                    }
                    case 'sehc': {
                        url = 'https://sehc.becinteligencia.com';
                        break;
                    }
                    case 'club-learn': {
                        url = 'https://app.clublearn.com.br';
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\Alan\Desktop\ALAN\TRABALHO\VISION\PROJETOS\BEC\EAD\IONIC\PROJETO\EAD\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\Alan\Desktop\ALAN\TRABALHO\VISION\PROJETOS\BEC\EAD\IONIC\PROJETO\EAD\src\app\app.html"*/
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

},[498]);
//# sourceMappingURL=main.js.map