webpackJsonp([3],{

/***/ 465:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register__ = __webpack_require__(496);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_brmasker_ionic_3__ = __webpack_require__(480);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var RegisterPageModule = /** @class */ (function () {
    function RegisterPageModule() {
    }
    RegisterPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__register__["a" /* RegisterPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__register__["a" /* RegisterPage */]),
                __WEBPACK_IMPORTED_MODULE_3_brmasker_ionic_3__["a" /* BrMaskerModule */]
            ],
        })
    ], RegisterPageModule);
    return RegisterPageModule;
}());

//# sourceMappingURL=register.module.js.map

/***/ }),

/***/ 476:
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

/***/ 477:
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

/***/ 480:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_module__ = __webpack_require__(481);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__app_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__directives__ = __webpack_require__(482);
/* unused harmony namespace reexport */


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 481:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrMaskerModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__directives_brmasker_ionic_3__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__directives_brmasker_ionic_services__ = __webpack_require__(477);




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

/***/ 482:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__brmasker_ionic_3__ = __webpack_require__(476);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__brmasker_ionic_services__ = __webpack_require__(477);
/* unused harmony namespace reexport */


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 486:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(341);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, authService, toastCtrl, loadingCtrl, storage, modalCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.modalCtrl = modalCtrl;
        this.credential = {
            documento: '',
            password: '',
            isDevice: '1',
            lembrar: false
        };
        this.lembrar = 'nao';
        this.globalUrl = '';
        this.idiom = '';
        this.project = '';
        /* OCULTA O CAMPO SENHA */
        this.hide = true;
        this.authService.logout();
        this.hide = false;
        if (this.navParams.get('logout')) {
            this.navCtrl.push('login-page');
            this.authService.logoutSave();
        }
        storage.get('GlobalUrl').then(function (value) {
            _this.globalUrl = value;
        });
        this.storage.get('clienteSaveDocumento').then(function (valorDoc) {
            if (valorDoc) {
                var loading_1 = _this.loadingCtrl.create({
                    content: 'Espere...'
                });
                loading_1.present();
                _this.storage.get('clienteSavePassword').then(function (valorPass) {
                    if (valorPass) {
                        _this.credential.documento = valorDoc;
                        _this.credential.password = valorPass;
                        _this.authService.login(_this.credential).then(function (result) {
                            if (result) {
                                loading_1.dismiss();
                                _this.navCtrl.push('tab-page');
                            }
                            else {
                                loading_1.dismiss();
                            }
                        });
                    }
                    else {
                        loading_1.dismiss();
                    }
                });
            }
        });
    }
    LoginPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('LayoutVersion').then(function (value) {
            _this.version = value;
        });
        this.storage.get('Project').then(function (value) {
            _this.background = value;
            _this.project = value;
        });
        this.storage.get('Idiom').then(function (value) {
            _this.idiom = value;
        });
    };
    LoginPage.prototype.ngIfCtrl = function () {
        this.hide = !this.hide;
    };
    LoginPage.prototype.openPage = function (page) {
        if (page == 'downloads') {
            var fileModal = this.modalCtrl.create('download-modal');
            fileModal.present();
        }
    };
    LoginPage.prototype.login = function () {
        //14 CPF
        // 18 CNPJ
        var _this = this;
        this.prosseguir = false;
        if (this.version == '01') {
            if (this.credential.documento.length == 14) {
                //CPF
                if (this.ValidaCPF(this.credential.documento)) {
                    this.prosseguir = true;
                }
            }
            else if (this.credential.documento.length == 18) {
                //CNPJ
                this.prosseguir = true;
            }
        }
        else {
            if (this.credential.documento.length > 0)
                this.prosseguir = true;
        }
        if (this.prosseguir) {
            this.authService.logout();
            var loading_2 = this.loadingCtrl.create({
                content: 'Espere...'
            });
            loading_2.present();
            if (this.hide) {
                // SE JÁ ESTIVER SENDO EXIBIDO, SIGNIFICA QUE O USUÁRIO JÁ INSERIOU O CPF E O SISTEMA IDENTIFICOU QUE NÃO É PRIMEIRO ACESSO NEM CADASTRO
                // ENTÃO TENTA FAZER O LOGIN
                this.authService.login(this.credential).then(function (result) {
                    loading_2.dismiss();
                    if (result) {
                        _this.navCtrl.push('tab-page');
                    }
                    else {
                        var toast = _this.toastCtrl.create({
                            message: _this.idiom == '02' ? 'Correo o Contraseña inválidos' : 'CPF e/ou Senha inválidos',
                            duration: 6000,
                            position: 'top'
                        });
                        toast.present();
                    }
                });
            }
            else {
                this.authService.firstAcess(this.credential).then(function (result) {
                    loading_2.dismiss();
                    if (result) {
                        _this.storage.get('clienteFirst').then(function (valor) {
                            if (valor != '1') {
                                /**NÃO É O PRIMEIRO ACESSO, ENTÃO HABILITA O CAMPO SENHA */
                                var toast = _this.toastCtrl.create({
                                    message: _this.idiom == '02' ? 'Por favor, entrar con tu contraseña' : 'Favor entrar com sua senha de acesso',
                                    duration: 2000,
                                    position: 'top'
                                });
                                toast.present();
                                _this.ngIfCtrl();
                            }
                            else {
                                /**PRIMEIRO ACESSO, ENTÃO LEVA PARA A TELA DE PREENCHER OS DADOS */
                                var toast = _this.toastCtrl.create({
                                    message: _this.idiom == '02' ? 'Bienvenido, ponga tus datos para acesar la palicación' : 'Seja bem vindo(a)! Preencha seus dados para acesso',
                                    duration: 2000,
                                    position: 'top'
                                });
                                toast.onDidDismiss(function () {
                                    _this.navCtrl.setRoot('edit-user-v02-page', { first: 'true' });
                                });
                                toast.present();
                            }
                        });
                    }
                    else {
                        /** LEVA PARA A TELA DE CADASTRO */
                        /**NÃO É O PRIMEIRO ACESSO, ENTÃO HABILITA O CAMPO SENHA */
                        var toast = _this.toastCtrl.create({
                            message: _this.project == 'edicom' ? 'Correo electrónico no registrado' : _this.idiom == '02' ? 'Haga tu registro' : 'Para acesso, faça seu cadastro',
                            duration: 2000,
                            position: 'top'
                        });
                        if (_this.project != 'edicom') {
                            toast.onDidDismiss(function () {
                                _this.navCtrl.setRoot('register-page', { documento: _this.credential.documento });
                            });
                        }
                        toast.present();
                    }
                });
            }
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'CPF/CNPJ inválido',
                duration: 2000,
                position: 'top'
            });
            toast.present();
        }
    };
    LoginPage.prototype.recoveryPassword = function () {
        this.navCtrl.push('recovey-password-page');
    };
    LoginPage.prototype.ValidaCPF = function (cpf) {
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
    LoginPage.prototype.selectIdiom = function (id) {
        this.idiom = id;
        this.storage.set('idiom', id);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\alanj\Desktop\ALAN\VISION\PROJETOS\BEC\INTEGRADO\PROJETO\EAD\src\pages\login\login.html"*/'\n\n<ion-content \n\n[ngClass]="background == \'marketing-house\' ? \'body background-marketing-house\' : \n\n  background == \'edicom\' ? \'body background-edicom\' : \n\n    background == \'ead\' ? \'body background-ead\' : \n\n      background == \'hkt369\' ? \'body background-hkt369\' : \n\n        background == \'know-house\' ? \'body background-knowh\' : \n\n          background == \'simples-trade\' ? \'body background-strade\' : \n\n            background == \'r2m\' ? \'body background-r2m\' : \'\'" padding>\n\n<!--   <img class="background" src="https://homolog.marketinghouse.com.br/storage/uploads/configs/loginMobile.png">\n\n -->  \n\n  <!-- <img class="background" object-fit: cover src="{{ globalUrl + \'/storage/uploads/configs/loginMobile.png\' }}"> -->\n\n<!--   <div class="flags-container">\n\n    <img (click)="selectIdiom(1)" class="flags" src="../../assets/imgs/flag-spain.png">\n\n    <img (click)="selectIdiom(2)" class="flags" src="../../assets/imgs/flag-brazil.png">\n\n    <img (click)="selectIdiom(3)" class="flags" src="../../assets/imgs/flag-united-kingdom.png">\n\n  </div> -->\n\n  <!-- <img id="logo-header"/> -->\n\n<!--   <div *ngIf="version == \'01\'">\n\n    <h1  style="text-align:center; color:#FFF; font-weight: 100;">Seja bem-vindo(a)! <br/><br/>Para acessar os conteúdos, informe seu CPF.</h1>\n\n  </div> -->\n\n \n\n<!--   <div *ngIf="version != \'01\'">\n\n    \n\n  </div> -->\n\n<!--   <br/><br/><br/><br/><br/><br/><br/><br/>\n\n  <div style="min-height: 40%;"></div> -->\n\n\n\n  <div class="min-height"></div>\n\n\n\n  <ion-list>\n\n\n\n      <ion-item *ngIf="version == \'01\'" class="fieldElement">\n\n        <ion-label [ngClass]="project == \'know-house\' ? \'label--know-house\' : \'label--default\'" floating>CPF/CNPJ</ion-label>\n\n        <ion-input [ngClass]="project == \'know-house\' ? \'label--know-house\' : \'label--default\'" type="text" autocomplete="off" [brmasker]="{person: true}" [(ngModel)]="credential.documento"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item *ngIf="version == \'02\'"  class="fieldElement">\n\n        <ion-label [ngClass]="project == \'know-house\' ? \'label--know-house\' : \'label--default\'" floating>E-MAIL</ion-label>\n\n        <ion-input [ngClass]="project == \'know-house\' ? \'label--know-house\' : \'label--default\'" type="text" autocomplete="off" [(ngModel)]="credential.documento"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item *ngIf="hide"  class="fieldElement">\n\n        <ion-label [ngClass]="project == \'know-house\' ? \'label--know-house\' : \'label--default\'" floating>\n\n          <p *ngIf="idiom == \'01\'">SENHA</p>\n\n          <p *ngIf="idiom == \'02\'">CONTRASEÑA</p> \n\n        </ion-label>\n\n        <ion-input [ngClass]="project == \'know-house\' ? \'label--know-house\' : \'label--default\'" type="password" [(ngModel)]="credential.password"></ion-input>\n\n      </ion-item>\n\n\n\n    </ion-list>\n\n    <a *ngIf="hide" (click)="recoveryPassword()" [ngClass]="project == \'know-house\' ? \'label--know-house recovery-link--know-house\' : \'label--default recovery-link--default\'">\n\n      <div *ngIf="idiom == \'01\'">Esqueci minha senha</div>\n\n      <div *ngIf="idiom == \'02\'">He olvidado mi contraseña</div>\n\n    </a>\n\n\n\n<!--<ion-list>\n\n  <ion-item class="fieldElement right" *ngIf="hide">\n\n    <ion-label>Manter logado</ion-label>\n\n    <ion-toggle [(ngModel)]="credential.lembrar"></ion-toggle>\n\n  </ion-item>\n\n</ion-list>-->\n\n    <button [ngStyle]="{\'background-color\': project == \'edicom\'? \'orange\' : \'primary\'}"  ion-button full icon-start [ngClass]="project == \'edicom\' ? \'button-edicom\' : project == \'know-house\' ? \'button-know-house\' : \'buttonMedium buttonLogin\'" (click)="login()">\n\n        <!--<ion-icon name="key"></ion-icon>-->\n\n        <div *ngIf="idiom == \'01\'">Entrar</div>\n\n        <div *ngIf="idiom == \'02\'">Iniciar sesión</div>\n\n    </button>\n\n\n\n\n\n    <button *ngIf="project != \'edicom\'" ion-button full icon-start [ngClass]="project == \'edicom\' ? \'button-edicom\' : project == \'know-house\' ? \'button-know-house\' : \'buttonMedium buttonLogin\'" (click)="openPage(\'downloads\')">\n\n      <div *ngIf="idiom == \'01\'">Meus Downloads</div>\n\n      <div *ngIf="idiom == \'02\'">Mis Archivos</div>\n\n    </button>\n\n\n\n\n\n    <div class="version">v. 1.0.0</div>\n\n\n\n\n\n    <!--<a (click)="firstAccess()" class="recovery-link">É seu primeiro acesso? Clique aqui</a>\n\n\n\n\n\n    <button ion-button full icon-start  class="buttonMedium"  color="light" (click)="registerNew()">\n\n      <!--<ion-icon name="arrow-back"></ion-icon>\n\n      Registre-se\n\n  </button>-->\n\n\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\alanj\Desktop\ALAN\VISION\PROJETOS\BEC\INTEGRADO\PROJETO\EAD\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 496:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(486);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(341);
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





var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, navParams, authService, toastCtrl, loadingCtrl, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.tipoPessoa = "1"; // padrão PF
        this.hide = false;
        this.idiom = '';
        this.credential = {
            documento: '',
            password: '',
            nome: '',
            email: '',
            nascimento: '',
            whatsapp: '',
            aceite: false,
            company_id: '1',
            profile_id: '3' //VALOR FIXO, 3  = USUARIO
        };
        this.event = {
            month: '1990-02-19',
            timeStarts: '07:43',
            timeEnds: '1990-02-20'
        };
    }
    /* OCULTA O CAMPO EMPRESA */
    RegisterPage.prototype.ngIfCtrl = function () {
        this.hide = !this.hide;
    };
    RegisterPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('Project').then(function (value) {
            _this.project = value;
            /*PROJETOS:
              marketing-house
              edicom
              vcc
            */
        });
    };
    RegisterPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.get('Project').then(function (value) {
            _this.background = value;
        });
        this.storage.get('Idiom').then(function (value) {
            _this.idiom = value;
            if (value == '01')
                _this.credential.documento = _this.navParams.get('documento');
            else if (value == '02')
                _this.credential.email = _this.navParams.get('documento');
        });
    };
    RegisterPage.prototype.goBack = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    RegisterPage.prototype.makeRegister = function () {
        var _this = this;
        var mensagemRetorno = '';
        if (!this.credential.nome)
            mensagemRetorno = this.idiom == '01' ? 'Favor preencher o campo nome' : this.idiom == '02' ? 'Por favor completa el campo nombre' : '';
        else if (this.credential.documento.length != 18 && this.credential.documento.length != 14)
            mensagemRetorno = this.idiom == '01' ? 'Favor preencher o campo CPF/CNPJ' : this.idiom == '02' ? 'Por favor completa el campo documento' : '';
        else if (!this.credential.email)
            mensagemRetorno = this.idiom == '01' ? 'Favor preencher o campo e-mail' : this.idiom == '02' ? 'Por favor completa el campo correo' : '';
        else if (!this.ValidaCPF(this.credential.documento) && this.credential.documento.length == 14)
            mensagemRetorno = this.idiom == '01' ? 'CPF Inválido' : this.idiom == '02' ? 'Documento inválido' : '';
        else if (!this.credential.whatsapp)
            mensagemRetorno = this.idiom == '01' ? 'Favor preencher o campo Whatsapp' : this.idiom == '02' ? 'Por favor completa el campo teléfono' : '';
        else if (!this.credential.nascimento && this.project != "edicom")
            mensagemRetorno = this.idiom == '01' ? 'Favor preencher o campo data de nascimento' : this.idiom == '02' ? 'Por favor completa el campo fecha de nacimiento' : '';
        else if (!this.credential.password)
            mensagemRetorno = this.idiom == '01' ? 'Favor preencher o campo senha' : this.idiom == '02' ? 'Por favor completa el campo de contraseña' : '';
        else if (!this.credential.aceite)
            mensagemRetorno = this.idiom == '01' ? 'Para efetuar o cadastro você deve aceitar os termos e políticas de privacidade' : this.idiom == '02' ? 'Para registrarse debe aceptar los términos y políticas de privacidad' : '';
        if (mensagemRetorno != '') {
            var toast = this.toastCtrl.create({
                message: mensagemRetorno,
                duration: 6000,
                position: 'top'
            });
            toast.present();
        }
        else {
            var loading_1 = this.loadingCtrl.create({
                content: 'Espere...'
            });
            loading_1.present();
            this.authService.register(this.credential).then(function (result) {
                loading_1.dismiss();
                if (result) {
                    if (result.status != 0) {
                        var toast = _this.toastCtrl.create({
                            message: _this.idiom == '01' ? 'Cadastro realizado com sucesso!' : _this.idiom == '02' ? '¡Registro exitoso!' : '',
                            duration: 6000,
                            position: 'top'
                        });
                        _this.navCtrl.push('tab-page');
                    }
                    else {
                        var toast = _this.toastCtrl.create({
                            message: result.msg,
                            duration: 6000,
                            position: 'top'
                        });
                        toast.present();
                    }
                }
            });
            loading_1.dismiss();
        }
    };
    RegisterPage.prototype.ValidaCPF = function (cpf) {
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
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-register',template:/*ion-inline-start:"C:\Users\alanj\Desktop\ALAN\VISION\PROJETOS\BEC\INTEGRADO\PROJETO\EAD\src\pages\register\register.html"*/'<ion-content padding [ngClass]="\n\nbackground == \'marketing-house\' ? \'body background-marketing-house\' : \n\n  background == \'edicom\' ? \'body background-edicom\' : \n\n    background == \'ead\' ? \'body background-ead\' :\n\n      background == \'hkt369\' ? \'body background-hkt369\' :\n\n        background == \'know-house\' ? \'body background-knowh\' : \'\'">\n\n\n\n  <ion-list style="margin-top: 20%;">\n\n    <ion-item class="fieldElement">\n\n      <ion-label stacked *ngIf="idiom == \'01\'">Nome *</ion-label>\n\n      <ion-label stacked *ngIf="idiom == \'02\'">Nombre *</ion-label>\n\n      <ion-input type="text" [(ngModel)]="credential.nome"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item class="fieldElement">\n\n      <ion-label stacked>CPF *</ion-label>\n\n      <ion-input type="text" [(ngModel)]="credential.documento" [brmasker]="{person: true}"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item class="fieldElement" *ngIf="hide">\n\n      <ion-label stacked *ngIf="idiom == \'01\'">Nome da Empresa *</ion-label>\n\n      <ion-label stacked *ngIf="idiom == \'02\'">Nombre de la empresa *</ion-label>\n\n      <ion-input type="text" [(ngModel)]="credential.empresa"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item class="fieldElement">\n\n      <ion-label stacked>Whatsapp *</ion-label>\n\n      <ion-input type="text"  [(ngModel)]="credential.whatsapp" [brmasker]="{mask:\'(00) 00000-0000\', len:15, type:\'num\'}"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item class="fieldElement" *ngIf="project != \'edicom\'">\n\n      <ion-label stacked *ngIf="idiom == \'01\'">Data de Nascimento *</ion-label>\n\n      <ion-label stacked *ngIf="idiom == \'02\'">Fecha de Nacimiento *</ion-label>\n\n      <ion-input type="text"  [(ngModel)]="credential.nascimento" [brmasker]="{mask:\'00/00/0000\', len:10, type:\'num\'}"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item class="fieldElement">\n\n      <ion-label stacked *ngIf="idiom == \'01\'">E-mail *</ion-label>\n\n      <ion-label stacked *ngIf="idiom == \'02\'">Correo *</ion-label>\n\n      <ion-input type="text" [(ngModel)]="credential.email"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item class="fieldElement">\n\n      <ion-label stacked *ngIf="idiom == \'01\'">Senha *</ion-label>\n\n      <ion-label stacked *ngIf="idiom == \'02\'">Contraseña *</ion-label>\n\n      <ion-input type="password" [(ngModel)]="credential.password"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item class="fieldElement">\n\n      <ion-checkbox [(ngModel)]="credential.aceite"></ion-checkbox>\n\n      <ion-label style="color: white;" *ngIf="idiom == \'01\'">Aceito os <a href="https://becinteligencia.com/politica-de-privacidade" target=_blank>termos e políticas de privacidade</a>.</ion-label>\n\n      <ion-label style="color: white;" *ngIf="idiom == \'02\'">Acepto los <a href="https://becinteligencia.com/politica-de-privacidade" target=_blank>términos y políticas de privacidad</a>.</ion-label>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n  <p class=requiredInfo *ngIf="idiom == \'01\'">* Campos obrigatórios</p>\n\n  <p class=requiredInfo *ngIf="idiom == \'02\'">* Campos obligatórios</p>\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col col-6>\n\n        <button ion-button full color="secondary"  class="buttonMedium" (click)="makeRegister()" >\n\n          <p *ngIf="idiom == \'01\'">Cadastrar</p>\n\n          <p *ngIf="idiom == \'02\'">Registrar</p>\n\n        </button>\n\n    </ion-col>\n\n      <ion-col col-6>\n\n        <button ion-button full  class="buttonMedium"  color="light" (click)="goBack()" >\n\n          <p>Cancelar</p>\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\alanj\Desktop\ALAN\VISION\PROJETOS\BEC\INTEGRADO\PROJETO\EAD\src\pages\register\register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ })

});
//# sourceMappingURL=3.js.map