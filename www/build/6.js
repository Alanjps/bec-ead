webpackJsonp([6],{

/***/ 856:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HoleriteModule", function() { return HoleriteModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__holerite__ = __webpack_require__(888);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_brmasker_ionic_3__ = __webpack_require__(878);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var HoleriteModule = /** @class */ (function () {
    function HoleriteModule() {
    }
    HoleriteModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__holerite__["a" /* HoleriteComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_1__holerite__["a" /* HoleriteComponent */]), __WEBPACK_IMPORTED_MODULE_3_brmasker_ionic_3__["a" /* BrMaskerModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_1__holerite__["a" /* HoleriteComponent */]]
        })
    ], HoleriteModule);
    return HoleriteModule;
}());

//# sourceMappingURL=holerite.module.js.map

/***/ }),

/***/ 874:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export BrMaskModel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrMaskerIonic3; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(27);


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

/***/ 875:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export BrMaskServicesModel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrMaskerIonicServices3; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);

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

/***/ 878:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_module__ = __webpack_require__(879);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__app_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__directives__ = __webpack_require__(880);
/* unused harmony namespace reexport */


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 879:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrMaskerModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__directives_brmasker_ionic_3__ = __webpack_require__(874);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__directives_brmasker_ionic_services__ = __webpack_require__(875);




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

/***/ 880:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__brmasker_ionic_3__ = __webpack_require__(874);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__brmasker_ionic_services__ = __webpack_require__(875);
/* unused harmony namespace reexport */


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 888:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HoleriteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_http_service_http_service__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_in_app_browser_ngx__ = __webpack_require__(496);
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








var HoleriteComponent = /** @class */ (function () {
    function HoleriteComponent(navParams, storage, viewCtrl, toastCtrl, httpService, loadingCtrl, dom, iab) {
        var _this = this;
        this.navParams = navParams;
        this.storage = storage;
        this.viewCtrl = viewCtrl;
        this.toastCtrl = toastCtrl;
        this.httpService = httpService;
        this.loadingCtrl = loadingCtrl;
        this.dom = dom;
        this.iab = iab;
        this.ENV = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */];
        this.selectedDate = __WEBPACK_IMPORTED_MODULE_3_moment___default()().format('YYYY');
        this.holerites = [];
        this.holeriteURL = '';
        this.getHolerite = function (id) { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this.httpService.getAll("/api/holerite/get-url/" + id, {}, 'get').subscribe(function (result) {
                            if (result.success) {
                                resolve(result.url);
                            }
                        });
                    })];
            });
        }); };
        this.credential = navParams.data;
    }
    HoleriteComponent.prototype.ionViewDidLoad = function () {
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
        this.listarHolerites();
    };
    HoleriteComponent.prototype.openHolerite = function (link) {
        var browser = this.iab.create(link, '_system');
    };
    HoleriteComponent.prototype.limparFiltro = function () {
        this.selectedDate = null;
        this.selectedDate = __WEBPACK_IMPORTED_MODULE_3_moment___default()().format("YYYY");
        this.listarHolerites();
    };
    HoleriteComponent.prototype.listarHolerites = function () {
        var _this = this;
        this.storage.get('clienteId').then(function (user_id) {
            var data = {
                user_id: user_id,
                year: _this.selectedDate,
            };
            _this.holerites = [];
            var loading = _this.loadingCtrl.create({
                content: 'Espere...'
            });
            loading.present();
            _this.httpService.getAll('/api/holerite/listar', data, 'get').subscribe(function (result) {
                result.forEach(function (val) { return __awaiter(_this, void 0, void 0, function () {
                    var _a, _b, _c, _d;
                    return __generator(this, function (_e) {
                        switch (_e.label) {
                            case 0:
                                _b = (_a = this.holerites).push;
                                _c = [{}, val];
                                _d = { mes: __WEBPACK_IMPORTED_MODULE_3_moment___default()(val.date).locale('pt-br').format('MMM'), ano: __WEBPACK_IMPORTED_MODULE_3_moment___default()(val.date).format('YYYY') };
                                return [4 /*yield*/, this.getHolerite(val.id)];
                            case 1:
                                _b.apply(_a, [__assign.apply(void 0, _c.concat([(_d.urlLink = _e.sent(), _d)]))]);
                                return [2 /*return*/];
                        }
                    });
                }); });
                loading.dismiss();
            });
        });
    };
    HoleriteComponent.prototype.visualizarHolerite = function (id) {
        this.getHolerite(id);
    };
    HoleriteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('Idiom').then(function (value) {
            _this.idiom = value;
        });
    };
    HoleriteComponent.prototype.confirm = function () {
        this.viewCtrl.dismiss(this.credential);
    };
    HoleriteComponent.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    HoleriteComponent.prototype.sanitizer = function (url) {
        return this.dom.bypassSecurityTrustResourceUrl(url);
    };
    HoleriteComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'holerite',template:/*ion-inline-start:"C:\Users\alanj\Desktop\ALAN\VISION\PROJETOS\BEC\EAD\IONIC\PROJETO\EAD\src\components\holerite\holerite.html"*/'\n\n<ion-header [ngClass]="version == \'01\' ? \'principalHeader\' : version == \'02\' ? \'principalHeaderV02\' : \'principalHeader\'">\n\n  <div>\n\n    <img [ngClass]="version == \'01\' ? \'principal-icon\' : version == \'02\' ? \'principal-icon-v02\' : \'principal-icon\'"\n\n     src="{{ globalUrl + \'/storage/uploads/configs/logoHeader.png\' }}" />\n\n\n\n    <img *ngIf="version == \'01\'" class="testeira-v01" \n\n    src="{{ globalUrl + \'/storage/uploads/configs/testeira1.png\' }}" >\n\n\n\n    <img *ngIf="version == \'02\'" class="testeira-v02" \n\n    src="{{ globalUrl + \'/storage/uploads/configs/testeira2.png\' }}" >\n\n\n\n  </div>\n\n</ion-header>\n\n<ion-content style="background-color: #fff;" class="content {{ENV.PROJECT}}-custom-bg" [ngClass]="version == \'01\' ? \'margin-content-l1\' : version == \'02\' ? \'margin-content-l2\' : \'margin-content-l1\'" padding>\n\n  \n\n  <ion-list>\n\n    <ion-grid class="grid-style">\n\n      <ion-row>\n\n        <h5>Filtrar por data:</h5>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col style="width: 40%;">\n\n          <ion-item>\n\n            <ion-label floating>Ano</ion-label>\n\n            <ion-datetime displayFormat="YYYY" [(ngModel)]="selectedDate"></ion-datetime>\n\n          </ion-item>\n\n        </ion-col>\n\n        <ion-col style="width: 20%;">\n\n          <div padding  style="width: auto;">\n\n            <button class="button-style button-style-{{ENV.PROJECT}}"  ion-button icon-only (click)="listarHolerites()"><ion-icon name="ios-search"></ion-icon></button>\n\n          </div>\n\n        </ion-col>\n\n        <ion-col style="width: 20%;">\n\n          <div padding style="width: auto;">\n\n            <button class="button-style button-style-{{ENV.PROJECT}}"  ion-button (click)="limparFiltro()">limpar</button>\n\n          </div>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n    \n\n\n\n  </ion-list>\n\n    \n\n  <ion-list *ngIf="holerites.length > 0">\n\n    <ion-grid class="grid-style" style="text-align: center;">\n\n      <ion-row>\n\n        <ion-col style="width: 40%;"><b>Ano</b></ion-col>\n\n        <ion-col style="width: 40%;"><b>Mês</b></ion-col>\n\n        <ion-col style="width: 20%;"><b>Ver</b></ion-col>\n\n      </ion-row>\n\n\n\n      <ion-row *ngFor="let holerite of holerites" style="line-height: 50px;">\n\n        <ion-col style="width: 40%;">\n\n          {{holerite.ano}}\n\n        </ion-col>\n\n        <ion-col style="width: 40%;">\n\n          {{holerite.mes}}\n\n        </ion-col>\n\n        <ion-col style="width: 20%;">\n\n          <button  style="width: auto;" ion-button (click)="openHolerite(holerite.urlLink)"><ion-icon name="eye"></ion-icon></button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n      \n\n  </ion-list>\n\n\n\n  <iframe *ngIf="holeriteURL != \'\'" data-tap-disabled="true" [src]="sanitizer(holeriteURL)"></iframe>\n\n\n\n  <div padding class="grid-style">\n\n    <button class="button-style button-style-{{ENV.PROJECT}}" *ngIf="idiom ==\'01\'" ion-button (click)="confirm()"><p>Voltar</p></button>\n\n    <button class="button-style button-style-{{ENV.PROJECT}}" *ngIf="idiom ==\'02\'" ion-button (click)="confirm()"><p>Volver</p></button>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\alanj\Desktop\ALAN\VISION\PROJETOS\BEC\EAD\IONIC\PROJETO\EAD\src\components\holerite\holerite.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_http_service_http_service__["a" /* HttpServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_in_app_browser_ngx__["a" /* InAppBrowser */]])
    ], HoleriteComponent);
    return HoleriteComponent;
}());

//# sourceMappingURL=holerite.js.map

/***/ })

});
//# sourceMappingURL=6.js.map