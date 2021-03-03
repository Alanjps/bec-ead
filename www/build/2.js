webpackJsonp([2],{

/***/ 464:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecoveryPasswordPageModule", function() { return RecoveryPasswordPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__recovery_password__ = __webpack_require__(495);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_brmasker_ionic_3__ = __webpack_require__(480);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var RecoveryPasswordPageModule = /** @class */ (function () {
    function RecoveryPasswordPageModule() {
    }
    RecoveryPasswordPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__recovery_password__["a" /* RecoveryPasswordPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__recovery_password__["a" /* RecoveryPasswordPage */]),
                __WEBPACK_IMPORTED_MODULE_3_brmasker_ionic_3__["a" /* BrMaskerModule */]
            ],
        })
    ], RecoveryPasswordPageModule);
    return RecoveryPasswordPageModule;
}());

//# sourceMappingURL=recovery-password.module.js.map

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

/***/ 488:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_onesignal__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_is_cordova_available__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_http_service_http_service__ = __webpack_require__(111);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TabsPage = /** @class */ (function () {
    function TabsPage(navCtrl, navParams, storage, oneSignal, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.oneSignal = oneSignal;
        this.http = http;
        this.tab1 = '';
        this.tab7 = 'notification-page';
        /* tab8 = 'edit-user-v02-page'; */
        this.tab8 = 'edit-user-page';
        this.tab9 = 'photo-page';
        this.tab10 = '';
        this.showTab5 = true;
        this.showTabSair = true;
        this.renderRoot = false;
        this.chatAtTop = true;
        this.notificationEnabled = false;
        this.version = '01';
        this.totalNotification = null;
        this.showTab04 = false;
        this.showTab05 = false;
        this.goToDeafultPage();
    }
    TabsPage_1 = TabsPage;
    TabsPage.prototype.goToDeafultPage = function () {
        var _this = this;
        this.storage.get('LayoutVersion').then(function (value) {
            _this.chatAtTop = false;
            switch (value) {
                case '02': {
                    _this.version = '02';
                    _this.tab1 = 'list-videos-v02-page';
                    _this.tab10 = 'list-videos-v03-page';
                    _this.chatAtTop = true;
                    _this.notificationEnabled = true;
                    break;
                }
                default: {
                    _this.version = '01';
                    _this.tab1 = 'list-videos-page';
                    _this.tab10 = 'list-videos-page-v04';
                    _this.chatAtTop = true;
                    _this.notificationEnabled = false;
                }
            }
            _this.storage.get('clienteCompanyId').then(function (companyId) {
                _this.storage.get('clienteId').then(function (clienteId) {
                    _this.http.getAll('/api/conteudos', { company_id: companyId, user_id: clienteId, type: "ICON4" })
                        .subscribe(function (data) {
                        if (data.length > 0)
                            _this.showTab04 = true;
                        _this.http.getAll('/api/conteudos', { company_id: companyId, user_id: clienteId, type: "ICON5" })
                            .subscribe(function (data) {
                            if (data.length > 0)
                                _this.showTab05 = true;
                            _this.getTotalNotifications(true);
                            setTimeout(function () {
                                setInterval(function () {
                                    _this.getTotalNotifications();
                                }, 5000);
                            }, 5000);
                            _this.renderRoot = true;
                        });
                    });
                });
            });
        });
    };
    TabsPage.prototype.getTotalNotifications = function (goToNotification) {
        var _this = this;
        if (goToNotification === void 0) { goToNotification = false; }
        this.storage.get('clienteId').then(function (id) {
            _this.http.getAll('/mensagens/getNotifications', { lido: false, user_id: id }, 'get')
                .subscribe(function (data) {
                _this.totalNotification = data.length > 0 ? data.length : null;
                if (data.length > 0 && goToNotification == true) {
                    _this.appTabs.select(1, { animate: true });
                }
            });
        });
    };
    TabsPage.prototype.checkOneSignal = function () {
        var _this = this;
        if (Object(__WEBPACK_IMPORTED_MODULE_4__common_is_cordova_available__["a" /* isCordovaAvailable */])()) {
            //this.storage.get('Project').then((project)=>{
            //this.project = project;
            var firebaseKey = '';
            var firebaseSenderId = '';
            var onesignalAppId = '';
            switch (this.project) {
                case 'marketing-house': {
                    onesignalAppId = '883bb93e-4053-43f0-865c-a5d52ca89a80';
                    firebaseKey = 'AAAA6zTPRhs:APA91bFAjdg13h1oQ_3LDNBbRd03TbWEkMTSpbXMc1lz4sToQ9VjcX4LYF5mC0Kh31aLfdMVISXnK4FTZV23hbiZqoFDFPpmXqF2Ijynuql5rlSGmyA-Ojy6e4Qu_ANDMR0LiByu9BkS';
                    firebaseSenderId = '1010203313691';
                    break;
                }
                case 'edicom': {
                    onesignalAppId = 'c3765e9e-79b4-4dbc-b3ad-a31396017591';
                    firebaseKey = 'AAAA5JZ5Y9U:APA91bHSACC_j1IijWyCoCpCojFln7TtQK14oNcUIi_PxXjvciAFR4L6xgYcuJpMFxR33pVrRg49Gw646jQmrKmvYe9X570IRZNVn-pu9pm3Ok0z39bd0r9T1W8geO5HJ56pF6tqF6GB';
                    firebaseSenderId = '981777081301';
                    break;
                }
                case 'ead': {
                    onesignalAppId = '946eb156-716e-4000-853f-18f41cc2b193';
                    //firebaseKey='AAAAHNSgMm4:APA91bFf84ZghEqCHXgqBNV5tC076OmSYnqUurpu4wDKW6WNjyLbJ3TXNxn6iIpPBT6gskXroMG45lB13l4ZhfLsw9rYzhKWv10wb-iMc2OjKCJkFYdHz3Crsk3TPQ9oh7DGDLFicLsj';
                    firebaseKey = 'AAAABZVhZoI:APA91bFUtPdBDTVN-NHZc7Wk53Tn9wZiz1qjHTVKtyssQfur2F1t509yEe95CMOf6M0mkdQZYXBp6xBEhozI8J274GU6JHmLBSGrFWIAUxFk4w4Le3UdrjdvzdQyptkULVkuHPBohGND';
                    firebaseSenderId = '23981024898';
                    break;
                }
                case 'hkt369': {
                    onesignalAppId = 'abf814a3-a2bb-4ae4-9a63-422d37394e64';
                    firebaseKey = 'AAAAtys66f8:APA91bGBdecST10j3dG5AbL8-dRt0uMgYcS_zGutn-md8ZTi_0A-D-PLlXdoY0E5Akuwo9DUaWMxbv6vCXpHePJ2M4UeneYVlrUcuHUFIsXmiLbx4xXGZyMuLw0AsUCWM4IP3j7YdcsG';
                    firebaseSenderId = '786704296447';
                    break;
                }
                case 'know-house': {
                    onesignalAppId = 'd29cd1d1-3a5b-4774-b768-a1026101ea0a';
                    firebaseKey = 'AAAAv6DuekQ:APA91bEWy0U4-HL8f12hbNMEvDKQ1LMr8eA1gP-0gy4Y319eUpljpqwjNrQBrCoCXcl-IWHshA-I__MNi9WeKQfEUVSNDd_sTWI2AkmnAwXjHgUFsFaiyAYbUUyCYUYldoB8vgzLI7Cn';
                    firebaseSenderId = '823038736964';
                    break;
                }
                case 'simples-trade': {
                    onesignalAppId = 'd6e18971-f2cc-41d8-aed7-28384cb957e0';
                    firebaseKey = 'AAAAsWwKIKs:APA91bGvbUnOUFFYPGEY_rUolZNcgDnhjy1eBuEHM4nWnbpg03Ie8ky09eISCfqh2WmDt9ZnSBrsQebOFb85LPckqOQnMoDYA4RNmQZ5PqulyeAaMT2nqGfksSvU8QFqQR7sY7vTV2ix';
                    firebaseSenderId = '762021814443';
                    break;
                }
                case 'r2m': {
                    onesignalAppId = 'a7bbe9ca-2e79-4f10-8f68-365da3e09fd5';
                    firebaseKey = 'AAAAjrxUeko:APA91bEwsLDPKZJkIAnBNMcxrsxEYrGgi49TF7Pg37DQwpvwX9QtWgGojRzSiePJpLwt-qWe08onYfdsqjeUTxeFTz8aYDwS95uoI5ruThJGtz2r9kLxcBAXwzwNavPVHDTOYEw0DmUW';
                    firebaseSenderId = '613045008970';
                    break;
                }
                case 'ava': {
                    onesignalAppId = '6b8f443d-da09-4ccc-b629-f1e21476c6b2';
                    firebaseKey = 'AAAAhgN0_JU:APA91bEMiPSZM22P9MkPreN0zjwXbuz23N2wuSKifKN2or8Vt-YCzkYiGxC1p1SJA6OSCiTOaj3DKSLfgw_UcTU1J8ZSxqYzxcUAApNz3UjzTtrYSSNAhybm3NBzLOTSOBlqs4ks1Niz';
                    firebaseSenderId = '575583616149';
                    break;
                }
            }
            /*
              ANTIGO---------------------------------------------
              this.oneSignal.startInit(
              'AAAAHNSgMm4:APA91bFf84ZghEqCHXgqBNV5tC076OmSYnqUurpu4wDKW6WNjyLbJ3TXNxn6iIpPBT6gskXroMG45lB13l4ZhfLsw9rYzhKWv10wb-iMc2OjKCJkFYdHz3Crsk3TPQ9oh7DGDLFicLsj',
              '123826352750'
            ); */
            this.oneSignal.startInit(onesignalAppId, firebaseSenderId);
            this.oneSignal.getIds().then(function (state) {
                //FAZ O ENVIO DO DEVICE ID PRA WEB
                //id, email, type, device_id
                _this.storage.get('clienteId').then(function (clienteId) {
                    _this.storage.get('clienteEmail').then(function (clienteEmail) {
                        var parametros = {
                            id: clienteId,
                            email: clienteEmail,
                            device_id: state.userId,
                            type: 'android'
                        };
                        _this.http.post('/api/usuarios/set-device', parametros)
                            .subscribe(function (data) {
                        });
                    });
                });
                //});
            }).catch(function (error) { console.log('error no GET IDS', error); });
            this.oneSignal.endInit();
        }
    };
    TabsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.get('Project').then(function (project) {
            _this.project = project;
            _this.checkOneSignal();
        });
    };
    TabsPage.prototype.redirectToListPage = function () {
        if (this.navCtrl.getActive().component !== TabsPage_1) {
            this.appTabs.select(2, { animate: true });
            this.navCtrl.setRoot('tab-page', { logout: true });
        }
    };
    TabsPage.prototype.doLogout = function () {
        this.navCtrl.setRoot('login-page', { logout: true });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('appTabs'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Tabs */])
    ], TabsPage.prototype, "appTabs", void 0);
    TabsPage = TabsPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-tabs',template:/*ion-inline-start:"C:\Users\alanj\Desktop\ALAN\VISION\PROJETOS\BEC\EAD\IONIC\PROJETO\EAD\src\pages\tabs\tabs.html"*/'<ion-tabs #appTabs selectedIndex="2" *ngIf="project == \'marketing-house\' && (version == \'02\' || version == \'01\') && renderRoot == true" [ngClass]="chatAtTop == true ? \'ion-tabs\' : \'\'">\n\n  <ion-tab [root]="tab8" tabIcon="tab-mrkhouse-perfil"></ion-tab>\n\n  <ion-tab [root]="tab7" tabIcon="tab-mrkhouse-notificacao" tabBadge="{{totalNotification}}" tabBadgeStyle="danger"></ion-tab>\n\n  <ion-tab [root]="tab1" tabIcon="tab-mrkhouse-agenda" (ionSelect)="redirectToListPage()"></ion-tab>\n\n  <ion-tab *ngIf="showTab04 == true" [root]="tab9" tabIcon="tab-mrkhouse-foto"></ion-tab>\n\n  <ion-tab *ngIf="showTab05 == true" [root]="tab10" tabIcon="tab-mrkhouse-news"></ion-tab>\n\n</ion-tabs>\n\n\n\n<ion-tabs #appTabs selectedIndex="2" *ngIf="project == \'edicom\' && (version == \'02\' || version == \'01\') && renderRoot == true" [ngClass]="chatAtTop == true ? \'ion-tabs\' : \'\'">\n\n  <ion-tab [root]="tab8" tabIcon="tab-edicom-perfil"></ion-tab>\n\n  <ion-tab [root]="tab7" tabIcon="tab-edicom-notificacao" tabBadge="{{totalNotification}}" tabBadgeStyle="danger"></ion-tab>\n\n  <ion-tab [root]="tab1" tabIcon="tab-edicom-agenda" (ionSelect)="redirectToListPage()"></ion-tab>\n\n  <ion-tab *ngIf="showTab04 == true" [root]="tab9" tabIcon="tab-edicom-foto"></ion-tab>\n\n  <ion-tab *ngIf="showTab05 == true" [root]="tab10" tabIcon="tab-edicom-news"></ion-tab>\n\n</ion-tabs>\n\n \n\n\n\n<ion-tabs #appTabs selectedIndex="2" *ngIf="project == \'ead\' && (version == \'02\' || version == \'01\') && renderRoot == true" [ngClass]="chatAtTop == true ? \'ion-tabs\' : \'\'">\n\n  <ion-tab [root]="tab8" tabIcon="tab-vcc-perfil"></ion-tab>\n\n  <ion-tab [root]="tab7" tabIcon="tab-vcc-notificacao" tabBadge="{{totalNotification}}" tabBadgeStyle="danger"></ion-tab>\n\n  <ion-tab [root]="tab1" tabIcon="tab-vcc-agenda" (ionSelect)="redirectToListPage()"></ion-tab>\n\n  <ion-tab *ngIf="showTab04 == true" [root]="tab9" tabIcon="tab-vcc-foto"></ion-tab>\n\n  <ion-tab *ngIf="showTab05 == true" [root]="tab10" tabIcon="tab-vcc-news"></ion-tab>\n\n</ion-tabs>\n\n\n\n<ion-tabs #appTabs selectedIndex="2" *ngIf="project == \'hkt369\' && (version == \'02\' || version == \'01\') && renderRoot == true" [ngClass]="chatAtTop == true ? \'ion-tabs\' : \'\'">\n\n  <ion-tab [root]="tab8" tabIcon="tab-hkt369-perfil"></ion-tab>\n\n  <ion-tab [root]="tab7" tabIcon="tab-hkt369-notificacao" tabBadge="{{totalNotification}}" tabBadgeStyle="danger"></ion-tab>\n\n  <ion-tab [root]="tab1" tabIcon="tab-hkt369-agenda" (ionSelect)="redirectToListPage()"></ion-tab>\n\n  <ion-tab *ngIf="showTab04 == true" [root]="tab9" tabIcon="tab-hkt369-foto"></ion-tab>\n\n  <ion-tab *ngIf="showTab05 == true" [root]="tab10" tabIcon="tab-hkt369-news"></ion-tab>\n\n</ion-tabs>\n\n\n\n<ion-tabs #appTabs selectedIndex="2" *ngIf="project == \'know-house\' && (version == \'02\' || version == \'01\') && renderRoot == true" [ngClass]="chatAtTop == true ? \'ion-tabs\' : \'\'">\n\n  <ion-tab [root]="tab8" tabIcon="tab-knowh-perfil"></ion-tab>\n\n  <ion-tab [root]="tab7" tabIcon="tab-knowh-notificacao" tabBadge="{{totalNotification}}" tabBadgeStyle="danger"></ion-tab>\n\n  <ion-tab [root]="tab1" tabIcon="tab-knowh-agenda" (ionSelect)="redirectToListPage()"></ion-tab>\n\n  <ion-tab *ngIf="showTab04 == true" [root]="tab9" tabIcon="tab-knowh-foto"></ion-tab>\n\n  <ion-tab *ngIf="showTab05 == true" [root]="tab10" tabIcon="tab-knowh-news"></ion-tab>\n\n</ion-tabs>\n\n\n\n<ion-tabs #appTabs selectedIndex="2" *ngIf="project == \'simples-trade\' && (version == \'02\' || version == \'01\') && renderRoot == true" [ngClass]="chatAtTop == true ? \'ion-tabs\' : \'\'">\n\n  <ion-tab [root]="tab8" tabIcon="tab-strade-perfil"></ion-tab>\n\n  <ion-tab [root]="tab7" tabIcon="tab-strade-notificacao" tabBadge="{{totalNotification}}" tabBadgeStyle="danger"></ion-tab>\n\n  <ion-tab [root]="tab1" tabIcon="tab-strade-agenda" (ionSelect)="redirectToListPage()"></ion-tab>\n\n  <ion-tab *ngIf="showTab04 == true" [root]="tab9" tabIcon="tab-strade-foto"></ion-tab>\n\n  <ion-tab *ngIf="showTab05 == true" [root]="tab10" tabIcon="tab-strade-news"></ion-tab>\n\n</ion-tabs>\n\n\n\n<ion-tabs #appTabs selectedIndex="2" *ngIf="project == \'r2m\' && (version == \'02\' || version == \'01\') && renderRoot == true" [ngClass]="chatAtTop == true ? \'ion-tabs\' : \'\'">\n\n  <ion-tab [root]="tab8" tabIcon="tab-r2m-perfil"></ion-tab>\n\n  <ion-tab [root]="tab7" tabIcon="tab-r2m-notificacao" tabBadge="{{totalNotification}}" tabBadgeStyle="danger"></ion-tab>\n\n  <ion-tab [root]="tab1" tabIcon="tab-r2m-agenda" (ionSelect)="redirectToListPage()"></ion-tab>\n\n  <ion-tab *ngIf="showTab04 == true" [root]="tab9" tabIcon="tab-r2m-foto"></ion-tab>\n\n  <ion-tab *ngIf="showTab05 == true" [root]="tab10" tabIcon="tab-r2m-news"></ion-tab>\n\n</ion-tabs>\n\n\n\n<ion-tabs #appTabs selectedIndex="2" *ngIf="project == \'ava\' && (version == \'02\' || version == \'01\') && renderRoot == true" [ngClass]="chatAtTop == true ? \'ion-tabs\' : \'\'">\n\n  <ion-tab [root]="tab8" tabIcon="tab-ava-perfil"></ion-tab>\n\n  <ion-tab [root]="tab7" tabIcon="tab-ava-notificacao" tabBadge="{{totalNotification}}" tabBadgeStyle="danger"></ion-tab>\n\n  <ion-tab [root]="tab1" tabIcon="tab-ava-agenda" (ionSelect)="redirectToListPage()"></ion-tab>\n\n  <ion-tab *ngIf="showTab04 == true" [root]="tab9" tabIcon="tab-ava-foto"></ion-tab>\n\n  <ion-tab *ngIf="showTab05 == true" [root]="tab10" tabIcon="tab-ava-news"></ion-tab>\n\n</ion-tabs>'/*ion-inline-end:"C:\Users\alanj\Desktop\ALAN\VISION\PROJETOS\BEC\EAD\IONIC\PROJETO\EAD\src\pages\tabs\tabs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_onesignal__["a" /* OneSignal */],
            __WEBPACK_IMPORTED_MODULE_5__providers_http_service_http_service__["a" /* HttpServiceProvider */]])
    ], TabsPage);
    return TabsPage;
    var TabsPage_1;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 495:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecoveryPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs_tabs__ = __webpack_require__(488);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RecoveryPasswordPage = /** @class */ (function () {
    function RecoveryPasswordPage(navCtrl, navParams, authService, toastCtrl, loadingCtrl, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.credential = {
            email: '',
            senha: '',
            nascimento: ''
        };
        this.idiom = '';
        this.globalUrl = '';
        storage.get('GlobalUrl').then(function (value) {
            _this.globalUrl = value;
        });
    }
    RecoveryPasswordPage.prototype.ngOnInit = function () {
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
        this.storage.get('Idiom').then(function (value) {
            _this.idiom = value;
        });
    };
    RecoveryPasswordPage.prototype.cancelar = function () {
        this.navCtrl.push('login-page');
    };
    RecoveryPasswordPage.prototype.resetPassword = function () {
        var _this = this;
        var mensagemRetorno = '';
        if (!this.credential.email)
            mensagemRetorno = 'Favor preencher o campo e-mail';
        else if (!this.credential.nascimento)
            mensagemRetorno = 'Favor preencher o campo Data de nascimento';
        else if (!this.credential.senha)
            mensagemRetorno = 'Favor preencher o campo senha';
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
            this.authService.recoveryPassword(this.credential).then(function (result) {
                loading_1.dismiss();
                if (result) {
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */]);
                }
                else {
                    var toast = _this.toastCtrl.create({
                        message: 'Dados inválidos. Favor confirmar.',
                        duration: 6000,
                        position: 'top'
                    });
                    toast.present();
                }
            });
        }
    };
    RecoveryPasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-recovery-password',template:/*ion-inline-start:"C:\Users\alanj\Desktop\ALAN\VISION\PROJETOS\BEC\EAD\IONIC\PROJETO\EAD\src\pages\recovery-password\recovery-password.html"*/'\n\n<ion-header [ngClass]="version == \'01\' ? \'principalHeader\' : version == \'02\' ? \'principalHeaderV02\' : \'principalHeader\'">\n\n  <img [ngClass]="version == \'01\' ? \'principal-icon\' : version == \'02\' ? \'principal-icon-v02\' : \'principal-icon\'"\n\n  src="{{ globalUrl + \'/storage/uploads/configs/logoHeader.png\' }}" />\n\n  \n\n  <img *ngIf="version == \'01\'" class="testeira-v01" \n\n  src="{{ globalUrl + \'/storage/uploads/configs/testeira1.png\' }}" >\n\n\n\n  <img *ngIf="version == \'02\'" class="testeira-v02" \n\n  src="{{ globalUrl + \'/storage/uploads/configs/testeira2.png\' }}" >\n\n  \n\n\n\n</ion-header>\n\n<ion-content  [ngClass]="version == \'01\' ? \'margin-content-l1\' : version == \'02\' ? \'margin-content-l2\' : \'margin-content-l1\'" padding [ngClass]="project == \'marketing-house\' ? \'content mrkhouse-custom-bg\' : project == \'ead\' ? \'content vcc-custom-bg\' : project == \'edicom\' ? \'content edicom-custom-bg\' : \'\'">\n\n \n\n  <h1 style="text-align:center; color:#FFF; font-weight: 100;">Recuperar Senha</h1>\n\n  <p *ngIf="idiom == \'01\'">Informe seu e-mail de cadastro e data de nascimento para resetar sua senha.</p>\n\n  <p *ngIf="idiom == \'02\'">Informe tu correo electrónico registrado y fecha de nascimiento para el reset de tu contraseña.</p>\n\n\n\n  <ion-list>\n\n\n\n    <ion-item class="fieldElement">\n\n      <ion-label *ngIf="idiom == \'01\'" class="label" floating>E-MAIL</ion-label>\n\n      <ion-label *ngIf="idiom == \'02\'" class="label" floating>CORREO ELECTRÓNICO</ion-label>\n\n      <ion-input type="email" autocomplete="off"  [(ngModel)]="credential.email" ></ion-input>\n\n    </ion-item>\n\n    <ion-item class="fieldElement">\n\n      <ion-label *ngIf="idiom == \'01\'" class="label" floating>DATA DE NASCIMENTO</ion-label>\n\n      <ion-label *ngIf="idiom == \'02\'" class="label" floating>FECHA DE NASCIMIENTO</ion-label>\n\n      <ion-input type="text" autocomplete="off"  [(ngModel)]="credential.nascimento" [brmasker]="{mask:\'00/00/0000\', len:10, type:\'num\'}"></ion-input>\n\n    </ion-item>\n\n    \n\n    <ion-item class="fieldElement">\n\n      <ion-label *ngIf="idiom == \'01\'" class="label" floating>NOVA SENHA</ion-label>\n\n      <ion-label *ngIf="idiom == \'02\'" class="label" floating>NUEVA CONTRASEÑA</ion-label>\n\n      <ion-input type="password" [(ngModel)]="credential.senha"></ion-input>\n\n    </ion-item> \n\n    \n\n  </ion-list>\n\n\n\n  <button ion-button full icon-start  [ngClass]="project == \'edicom\' ? \'button-edicom\' : project == \'know-house\' ? \'button-know-house\' : \'buttonMedium buttonLogin\'" (click)="resetPassword()">\n\n    <p *ngIf="idiom == \'01\'">Resetar</p>\n\n    <p *ngIf="idiom == \'02\'">Reset</p>\n\n  </button> \n\n  <button ion-button full icon-start  [ngClass]="project == \'edicom\' ? \'button-edicom\' : project == \'know-house\' ? \'button-know-house\' : \'buttonMedium buttonLogin\'" (click)="cancelar()">\n\n    <p *ngIf="idiom == \'01\'">Voltar</p>\n\n    <p *ngIf="idiom == \'02\'">Volver</p>\n\n  </button> \n\n</ion-content>\n\n  '/*ion-inline-end:"C:\Users\alanj\Desktop\ALAN\VISION\PROJETOS\BEC\EAD\IONIC\PROJETO\EAD\src\pages\recovery-password\recovery-password.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], RecoveryPasswordPage);
    return RecoveryPasswordPage;
}());

//# sourceMappingURL=recovery-password.js.map

/***/ })

});
//# sourceMappingURL=2.js.map