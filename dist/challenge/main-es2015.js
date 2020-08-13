(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/generator/generator.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/generator/generator.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"grid\">\n  <div class=\"top-bar\">\n    <label for=\"char\"> Character\n      <input type=\"text\" maxlength=\"1\" #char id=\"char\" (input)=\"updateChar(char.value, $event)\">\n    </label>\n    <img alt=\"clock\" src=\"../../assets/clock.png\" class=\"clock-img\" />\n    <button class=\"main-btn\" (click)=\"genRandomgrid()\">GENERATE 2D GRID</button>\n  </div>\n\n  <table>\n    <tr>\n      <th></th>\n      <th *ngFor=\"let number of numbers\">{{number}}</th>\n    </tr>\n    <tr *ngFor=\"let numberc of numbers\">\n      <th>{{numberc}}</th>\n      <td *ngFor=\"let number of numbers\" [class]=\"'row_' + numberc + 'c' + number\"> </td>\n    </tr>\n  </table>\n</div>\n\n<div class=\"bottom-area\">\n  <div class=\"live\"><span class=\"live-dot\"></span><p>live</p></div>\n  <div class=\"code\">\n    <p>Your code:</p>\n    <p>{{code}}</p>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-title\">\n  <h1>Altar.io Challenge</h1>\n  <h5>Gustavo Passos</h5>\n</div>\n\n<div class=\"menu\">\n  <div class=\"menu-item\" (click)=\"goTo('generator')\" (mouseenter)=\"addClass($event)\" (mouseleave)=\"removeClass($event)\">\n    <p>Generator</p>\n  </div>\n  <hr>\n  <div class=\"menu-item\" (click)=\"goTo('payments')\">\n    <p>Payments</p>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/payments/payments.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/payments/payments.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"top-area\">\n  <div class=\"live\"><span class=\"live-dot\"></span><p>live</p></div>\n  <div class=\"code\">\n    <p>Your code now:</p>\n    <p>{{code}}</p>\n  </div>\n</div>\n\n\n<div class=\"grid\">\n  <div class=\"form-area\">\n    <label for=\"payment\"> Payment\n      <input placeholder=\"Payment\" type=\"text\" maxlength=\"100\" #payment id=\"payment\" (input)=\"paymentValue = payment.value\">\n    </label>\n    <label for=\"ammount\"> Ammount\n      <input placeholder=\"Ammount\" type=\"text\" maxlength=\"100\" #ammount id=\"ammount\" (input)=\"ammountValue = ammount.value\">\n    </label>\n    <button class=\"small-btn\" (click)=\"addPaymentValue()\">+ add</button>\n\n  </div>\n\n  <table>\n    <tr>\n      <th>Name</th>\n      <th>Ammount</th>\n      <th>code</th>\n      <th>grid</th>\n    </tr>\n    <tr *ngFor=\"let res of result\">\n      <td>{{res.name}}</td>\n      <td>{{res.ammount}}</td>\n      <td>{{res.code}}</td>\n      <td>{{res.grid}}</td>\n    </tr>\n  </table>\n</div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _generator_generator_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./generator/generator.component */ "./src/app/generator/generator.component.ts");
/* harmony import */ var _payments_payments_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./payments/payments.component */ "./src/app/payments/payments.component.ts");






const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'generator', component: _generator_generator_component__WEBPACK_IMPORTED_MODULE_4__["GeneratorComponent"] },
    { path: 'payments', component: _payments_payments_component__WEBPACK_IMPORTED_MODULE_5__["PaymentsComponent"] },
    { path: '**', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'challenge';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _generator_generator_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./generator/generator.component */ "./src/app/generator/generator.component.ts");
/* harmony import */ var _payments_payments_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./payments/payments.component */ "./src/app/payments/payments.component.ts");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");










let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
            _generator_generator_component__WEBPACK_IMPORTED_MODULE_6__["GeneratorComponent"],
            _payments_payments_component__WEBPACK_IMPORTED_MODULE_7__["PaymentsComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"]
        ],
        providers: [_services_common_service__WEBPACK_IMPORTED_MODULE_8__["CommonService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/generator/generator.component.scss":
/*!****************************************************!*\
  !*** ./src/app/generator/generator.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* You can add global styles to this file, and also import other style files */\n* {\n  margin: 0;\n  padding: 0;\n  font-family: Helvetica, sans-serif;\n}\nlabel {\n  display: flex;\n  flex-flow: column nowrap;\n  color: #8a9da4;\n  text-transform: uppercase;\n  font-size: 12px;\n}\nlabel input {\n  color: #8a9da4;\n  border: 1px solid #8a9da4;\n  border-radius: 4px;\n  width: 82px;\n  height: 25px;\n  text-align: center;\n}\nlabel input:disabled {\n  background-color: #cecece;\n}\n.top-bar {\n  display: flex;\n  justify-content: space-between;\n  margin: 50px 0 20px 0;\n}\n.grid {\n  display: flex;\n  justify-content: center;\n  flex-flow: column nowrap;\n  margin: 0 20%;\n}\n.grid table td, .grid table th {\n  border: 1px solid #ddd;\n  padding: 8px;\n  text-align: center;\n}\n.grid table tr:nth-child(even) {\n  background-color: #f2f2f2;\n}\n.grid table tr:hover {\n  background-color: #ddd;\n}\n.grid table th {\n  padding-top: 12px;\n  padding-bottom: 12px;\n}\n.main-btn {\n  background-color: #8a9da4;\n  color: white;\n  font-weight: bold;\n  border: 1px solid #8a9da4;\n  border-radius: 4px;\n  height: 30px;\n  width: 150px;\n}\n.main-btn:hover {\n  background-color: #97aab1;\n  cursor: pointer;\n}\n.bottom-area {\n  display: flex;\n  align-items: center;\n  flex-flow: column nowrap;\n}\n.live {\n  display: flex;\n  align-items: center;\n  margin-top: 10px;\n}\n.live p {\n  font-size: 13px;\n  text-transform: uppercase;\n}\n.live-dot {\n  background-color: red;\n  width: 10px;\n  height: 10px;\n  border-radius: 100px;\n  margin: 2px 4px 2px 0;\n}\n.code {\n  border: 1px solid black;\n  border-radius: 4px;\n  padding: 7px 78px;\n  margin-top: 10px;\n  display: flex;\n}\n.code p {\n  margin: 0 4px;\n  text-transform: uppercase;\n}\n.code p:nth-child(2) {\n  font-weight: bold;\n}\n.clock-img {\n  width: 70px;\n  margin-top: -24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ndXN0YXZvcGFzc29zL1dlYnN0b3JtUHJvamVjdHMvZ2lnLW5nLXB1YmxpYy9jaGFsbGVuZ2Uvc3JjL3N0eWxlcy5zY3NzIiwic3JjL2FwcC9nZW5lcmF0b3IvZ2VuZXJhdG9yLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2d1c3Rhdm9wYXNzb3MvV2Vic3Rvcm1Qcm9qZWN0cy9naWctbmctcHVibGljL2NoYWxsZW5nZS9zcmMvYXBwL2dlbmVyYXRvci9nZW5lcmF0b3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEVBQUE7QUFDQTtFQUNFLFNBQUE7RUFDQSxVQUFBO0VBQ0Esa0NBQUE7QUNDRjtBQ0hBO0VBQ0UsYUFBQTtFQUNBLHdCQUFBO0VBQ0EsY0ZHVztFRUZYLHlCQUFBO0VBQ0EsZUFBQTtBRE1GO0FDTEU7RUFDRSxjRkRTO0VFRVQseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QURPSjtBQ0xJO0VBQ0UseUJGUEs7QUNjWDtBQ0hBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EscUJBQUE7QURNRjtBQ0pBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0Esd0JBQUE7RUFDQSxhQUFBO0FET0Y7QUNORTtFQUNFLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FEUUo7QUNMRTtFQUF5Qix5QkFBQTtBRFEzQjtBQ05FO0VBQWdCLHNCQUFBO0FEU2xCO0FDUEU7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0FEU0o7QUNOQTtFQUNFLHlCRnZDVztFRXdDWCxZQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QURTRjtBQ1JFO0VBQ0UseUJGOUNjO0VFK0NkLGVBQUE7QURVSjtBQ1BBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7QURVRjtBQ1JBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QURXRjtBQ1ZFO0VBQ0UsZUFBQTtFQUNBLHlCQUFBO0FEWUo7QUNUQTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0FEWUY7QUNWQTtFQUNFLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBRGFGO0FDWkU7RUFDRSxhQUFBO0VBQ0EseUJBQUE7QURjSjtBQ1pFO0VBQ0UsaUJBQUE7QURjSjtBQ1hBO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0FEY0YiLCJmaWxlIjoic3JjL2FwcC9nZW5lcmF0b3IvZ2VuZXJhdG9yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbn1cblxuJG1haW5Db2xvcjogIzIzZWFlMjtcbiRtYWluQnV0dG9uOiAjOGE5ZGE0O1xuJG1haW5CdXR0b25MaWdodDogIzk3YWFiMTtcbiRtYWluR3JleTogI2NlY2VjZVxuIiwiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbn1cblxubGFiZWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XG4gIGNvbG9yOiAjOGE5ZGE0O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDEycHg7XG59XG5sYWJlbCBpbnB1dCB7XG4gIGNvbG9yOiAjOGE5ZGE0O1xuICBib3JkZXI6IDFweCBzb2xpZCAjOGE5ZGE0O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHdpZHRoOiA4MnB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmxhYmVsIGlucHV0OmRpc2FibGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NlY2VjZTtcbn1cblxuLnRvcC1iYXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbjogNTBweCAwIDIwcHggMDtcbn1cblxuLmdyaWQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xuICBtYXJnaW46IDAgMjAlO1xufVxuLmdyaWQgdGFibGUgdGQsIC5ncmlkIHRhYmxlIHRoIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgcGFkZGluZzogOHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZ3JpZCB0YWJsZSB0cjpudGgtY2hpbGQoZXZlbikge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xufVxuLmdyaWQgdGFibGUgdHI6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xufVxuLmdyaWQgdGFibGUgdGgge1xuICBwYWRkaW5nLXRvcDogMTJweDtcbiAgcGFkZGluZy1ib3R0b206IDEycHg7XG59XG5cbi5tYWluLWJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4YTlkYTQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM4YTlkYTQ7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogMTUwcHg7XG59XG4ubWFpbi1idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTdhYWIxO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5ib3R0b20tYXJlYSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcbn1cblxuLmxpdmUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLmxpdmUgcCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmxpdmUtZG90IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICB3aWR0aDogMTBweDtcbiAgaGVpZ2h0OiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgbWFyZ2luOiAycHggNHB4IDJweCAwO1xufVxuXG4uY29kZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHBhZGRpbmc6IDdweCA3OHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmNvZGUgcCB7XG4gIG1hcmdpbjogMCA0cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG4uY29kZSBwOm50aC1jaGlsZCgyKSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uY2xvY2staW1nIHtcbiAgd2lkdGg6IDcwcHg7XG4gIG1hcmdpbi10b3A6IC0yNHB4O1xufSIsIkBpbXBvcnQgXCJzcmMvc3R5bGVzXCI7XG5cbmxhYmVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xuICBjb2xvcjogJG1haW5CdXR0b247XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgaW5wdXQge1xuICAgIGNvbG9yOiAkbWFpbkJ1dHRvbjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkbWFpbkJ1dHRvbjtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgd2lkdGg6IDgycHg7XG4gICAgaGVpZ2h0OiAyNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgICY6ZGlzYWJsZWQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG1haW5HcmV5O1xuICAgIH1cbiAgfVxufVxuLnRvcC1iYXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbjogNTBweCAwIDIwcHggMDtcbn1cbi5ncmlkIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcbiAgbWFyZ2luOiAwIDIwJTtcbiAgdGFibGUgdGQsIHRhYmxlIHRoIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICB0YWJsZSB0cjpudGgtY2hpbGQoZXZlbil7YmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjt9XG5cbiAgdGFibGUgdHI6aG92ZXIge2JhY2tncm91bmQtY29sb3I6ICNkZGQ7fVxuXG4gIHRhYmxlIHRoIHtcbiAgICBwYWRkaW5nLXRvcDogMTJweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTJweDtcbiAgfVxufVxuLm1haW4tYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJG1haW5CdXR0b247XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICRtYWluQnV0dG9uO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGhlaWdodDogMzBweDtcbiAgd2lkdGg6IDE1MHB4O1xuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWFpbkJ1dHRvbkxpZ2h0O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxufVxuLmJvdHRvbS1hcmVhIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xufVxuLmxpdmUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBwIHtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgfVxufVxuLmxpdmUtZG90IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICB3aWR0aDogMTBweDtcbiAgaGVpZ2h0OiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgbWFyZ2luOiAycHggNHB4IDJweCAwO1xufVxuLmNvZGUge1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBwYWRkaW5nOiA3cHggNzhweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgcCB7XG4gICAgbWFyZ2luOiAwIDRweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB9XG4gIHA6bnRoLWNoaWxkKDIpIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxufVxuLmNsb2NrLWltZyB7XG4gIHdpZHRoOiA3MHB4O1xuICBtYXJnaW4tdG9wOiAtMjRweDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/generator/generator.component.ts":
/*!**************************************************!*\
  !*** ./src/app/generator/generator.component.ts ***!
  \**************************************************/
/*! exports provided: GeneratorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneratorComponent", function() { return GeneratorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/common.service */ "./src/app/services/common.service.ts");



let GeneratorComponent = class GeneratorComponent {
    constructor(service) {
        this.service = service;
        this.char = '';
        this.usedIndex = [];
        this.hundredArray = [];
        this.code = '';
        this.interval = 0;
        this.paymentNumber = 1;
        this.numbers = Array(10).fill(0).map((x, i) => i);
    }
    ngOnInit() {
    }
    updateChar(customChar, event) {
        if (event.key === 8 || event.key === 46) {
            return;
        }
        this.char = customChar;
        const input = document.querySelector("#char");
        input.disabled = true;
        setTimeout(() => {
            input.disabled = false;
            input.value = '';
            this.char = '';
        }, 4000);
    }
    genRandomgrid() {
        let withCustomChar = this.char !== '';
        this.hundredArray = Array(100).fill(0).map((x, i) => i);
        const defaultLib = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        const allCells = Array.from(document.querySelectorAll("[class^=row_]"));
        allCells.forEach(cell => cell.innerHTML = '');
        const randIndexCell = this.shuffle(this.hundredArray);
        this.usedIndex = [];
        if (withCustomChar) {
            for (let i = 0; i < 20; i++) {
                const index = randIndexCell[0];
                allCells[index].innerHTML = this.char;
                randIndexCell.splice(0, 1);
            }
            for (let j = 0; j < 80; j++) {
                const index = randIndexCell[0];
                const indexChar = this.getRandNumber(26);
                allCells[index].innerHTML = defaultLib[indexChar];
                randIndexCell.splice(0, 1);
            }
        }
        else {
            for (let j = 0; j < 100; j++) {
                const index = randIndexCell[0];
                const indexChar = this.getRandNumber(26);
                allCells[index].innerHTML = defaultLib[indexChar];
                randIndexCell.splice(0, 1);
            }
        }
        this.updateCode();
        if (this.interval === 0) {
            this.interval = setInterval(() => {
                this.genRandomgrid();
            }, 2000);
        }
    }
    getRandNumber(max) {
        const rand = Math.floor(Math.random() * max);
        if (this.usedIndex.indexOf(rand) === -1) {
            return rand;
        }
        else {
            return this.getRandNumber(max);
        }
    }
    shuffle(array) {
        let currentIndex = array.length, temporaryValue, randomIndex;
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }
    updateCode() {
        const allCells = Array.from(document.querySelectorAll("[class^=row_]"));
        const date = new Date();
        const seconds = date.toString().split(' ')[4].split(':')[2];
        const number1 = seconds.split('')[0];
        const number2 = seconds.split('')[1];
        const codeLetter1 = allCells.find(x => x.className === 'row_' + number1 + 'c' + number2).innerHTML;
        const codeLetter2 = allCells.find(x => x.className === 'row_' + number2 + 'c' + number1).innerHTML;
        const count1 = this.getLowestNumber(allCells.filter(x => x.innerHTML === codeLetter1).length);
        const count2 = this.getLowestNumber(allCells.filter(x => x.innerHTML === codeLetter2).length);
        this.code = count1.toString() + count2.toString();
        const paymentObj = { name: 'payment' + this.paymentNumber, ammount: '', code: this.code, grid: '' };
        this.service.postPayment(paymentObj).subscribe();
        this.paymentNumber++;
    }
    getLowestNumber(number) {
        let divider = 2;
        while (number > 9) {
            number = number / divider;
            divider++;
        }
        return Math.ceil(number);
    }
};
GeneratorComponent.ctorParameters = () => [
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"] }
];
GeneratorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-generator',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./generator.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/generator/generator.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./generator.component.scss */ "./src/app/generator/generator.component.scss")).default]
    })
], GeneratorComponent);



/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* You can add global styles to this file, and also import other style files */\n* {\n  margin: 0;\n  padding: 0;\n  font-family: Helvetica, sans-serif;\n}\n.main-title {\n  text-align: center;\n  margin: 40px 0;\n}\n.menu {\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: center;\n  padding: 0 33%;\n}\n.menu-item {\n  border: 1px solid #23eae2;\n  border-radius: 4px;\n  padding: 12px 120px;\n  margin: 70px 70px;\n  width: 80px;\n}\n.menu-item:hover {\n  background-color: #23eae2;\n  color: white;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ndXN0YXZvcGFzc29zL1dlYnN0b3JtUHJvamVjdHMvZ2lnLW5nLXB1YmxpYy9jaGFsbGVuZ2Uvc3JjL3N0eWxlcy5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvZ3VzdGF2b3Bhc3Nvcy9XZWJzdG9ybVByb2plY3RzL2dpZy1uZy1wdWJsaWMvY2hhbGxlbmdlL3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUFBO0FBQ0E7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGtDQUFBO0FDQ0Y7QUNIQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtBRE1GO0FDSkE7RUFDRSxhQUFBO0VBQ0Esd0JBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7QURPRjtBQ0xBO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FEUUY7QUNQRTtFQUNFLHlCRlpRO0VFYVIsWUFBQTtFQUNBLGVBQUE7QURTSiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbioge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG59XG5cbiRtYWluQ29sb3I6ICMyM2VhZTI7XG4kbWFpbkJ1dHRvbjogIzhhOWRhNDtcbiRtYWluQnV0dG9uTGlnaHQ6ICM5N2FhYjE7XG4kbWFpbkdyZXk6ICNjZWNlY2VcbiIsIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbioge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG59XG5cbi5tYWluLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDQwcHggMDtcbn1cblxuLm1lbnUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAwIDMzJTtcbn1cblxuLm1lbnUtaXRlbSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMyM2VhZTI7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgcGFkZGluZzogMTJweCAxMjBweDtcbiAgbWFyZ2luOiA3MHB4IDcwcHg7XG4gIHdpZHRoOiA4MHB4O1xufVxuLm1lbnUtaXRlbTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyM2VhZTI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufSIsIkBpbXBvcnQgXCJzcmMvc3R5bGVzXCI7XG5cbi5tYWluLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDQwcHggMDtcbn1cbi5tZW51IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogMCAzMyU7XG59XG4ubWVudS1pdGVtIHtcbiAgYm9yZGVyOiAxcHggc29saWQgJG1haW5Db2xvcjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBwYWRkaW5nOiAxMnB4IDEyMHB4O1xuICBtYXJnaW46IDcwcHggNzBweDtcbiAgd2lkdGg6IDgwcHg7XG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRtYWluQ29sb3I7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxufVxuIl19 */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let HomeComponent = class HomeComponent {
    constructor(route) {
        this.route = route;
    }
    ngOnInit() {
    }
    goTo(path) {
        this.route.navigate([path]);
    }
    addClass(event) {
        document.querySelector('.gen').classList.add('slide');
    }
    removeClass(event) {
        document.querySelector('.gen').classList.remove('slide');
    }
};
HomeComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/payments/payments.component.scss":
/*!**************************************************!*\
  !*** ./src/app/payments/payments.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* You can add global styles to this file, and also import other style files */\n* {\n  margin: 0;\n  padding: 0;\n  font-family: Helvetica, sans-serif;\n}\n.live {\n  display: flex;\n  align-items: center;\n  margin-top: 10px;\n}\n.live p {\n  font-size: 13px;\n  text-transform: uppercase;\n}\n.live-dot {\n  background-color: red;\n  width: 10px;\n  height: 10px;\n  border-radius: 100px;\n  margin: 2px 4px 2px 0;\n}\n.code {\n  border: 1px solid black;\n  border-radius: 4px;\n  padding: 7px 78px;\n  margin-top: 10px;\n  display: flex;\n}\n.code p {\n  margin: 0 4px;\n  text-transform: uppercase;\n}\n.code p:nth-child(2) {\n  font-weight: bold;\n}\n.top-area {\n  display: flex;\n  align-items: center;\n  flex-flow: column nowrap;\n}\n.grid {\n  display: flex;\n  justify-content: center;\n  flex-flow: column nowrap;\n  margin: 20px 20%;\n}\n.grid table td, .grid table th {\n  padding: 8px;\n  text-align: center;\n}\n.grid table tr:nth-child(even) {\n  background-color: #f2f2f2;\n}\n.grid table tr:hover {\n  background-color: #ddd;\n}\n.grid table th {\n  padding-top: 12px;\n  padding-bottom: 12px;\n}\nlabel {\n  display: flex;\n  flex-flow: column nowrap;\n  color: #8a9da4;\n  margin: 0 5px;\n  text-transform: uppercase;\n  font-size: 12px;\n}\nlabel input {\n  color: #8a9da4;\n  border: 1px solid #8a9da4;\n  border-radius: 4px;\n  width: 82px;\n  height: 25px;\n  text-align: center;\n}\nlabel input:disabled {\n  background-color: #cecece;\n}\n.form-area {\n  display: flex;\n  margin: 0 0 10px 0;\n  align-items: flex-end;\n}\n.small-btn {\n  background-color: #8a9da4;\n  color: white;\n  font-weight: bold;\n  border: 1px solid #8a9da4;\n  border-radius: 4px;\n  height: 30px;\n  width: 50px;\n}\n.small-btn:hover {\n  background-color: #97aab1;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ndXN0YXZvcGFzc29zL1dlYnN0b3JtUHJvamVjdHMvZ2lnLW5nLXB1YmxpYy9jaGFsbGVuZ2Uvc3JjL3N0eWxlcy5zY3NzIiwic3JjL2FwcC9wYXltZW50cy9wYXltZW50cy5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9ndXN0YXZvcGFzc29zL1dlYnN0b3JtUHJvamVjdHMvZ2lnLW5nLXB1YmxpYy9jaGFsbGVuZ2Uvc3JjL2FwcC9wYXltZW50cy9wYXltZW50cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4RUFBQTtBQUNBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxrQ0FBQTtBQ0NGO0FDSEE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBRE1GO0FDTEU7RUFDRSxlQUFBO0VBQ0EseUJBQUE7QURPSjtBQ0pBO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7QURPRjtBQ0xBO0VBQ0UsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FEUUY7QUNQRTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtBRFNKO0FDUEU7RUFDRSxpQkFBQTtBRFNKO0FDTkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtBRFNGO0FDUEE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0FEVUY7QUNURTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtBRFdKO0FDUkU7RUFBeUIseUJBQUE7QURXM0I7QUNURTtFQUFnQixzQkFBQTtBRFlsQjtBQ1ZFO0VBQ0UsaUJBQUE7RUFDQSxvQkFBQTtBRFlKO0FDVEE7RUFDRSxhQUFBO0VBQ0Esd0JBQUE7RUFDQSxjRm5EVztFRW9EWCxhQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0FEWUY7QUNYRTtFQUNFLGNGeERTO0VFeURULHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FEYUo7QUNYSTtFQUNFLHlCRjlESztBQzJFWDtBQ1RBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QURZRjtBQ1ZBO0VBQ0UseUJGMUVXO0VFMkVYLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBRGFGO0FDWkU7RUFDRSx5QkZqRmM7RUVrRmQsZUFBQTtBRGNKIiwiZmlsZSI6InNyYy9hcHAvcGF5bWVudHMvcGF5bWVudHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG4qIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xufVxuXG4kbWFpbkNvbG9yOiAjMjNlYWUyO1xuJG1haW5CdXR0b246ICM4YTlkYTQ7XG4kbWFpbkJ1dHRvbkxpZ2h0OiAjOTdhYWIxO1xuJG1haW5HcmV5OiAjY2VjZWNlXG4iLCIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG4qIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xufVxuXG4ubGl2ZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4ubGl2ZSBwIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4ubGl2ZS1kb3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gIHdpZHRoOiAxMHB4O1xuICBoZWlnaHQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICBtYXJnaW46IDJweCA0cHggMnB4IDA7XG59XG5cbi5jb2RlIHtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgcGFkZGluZzogN3B4IDc4cHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uY29kZSBwIHtcbiAgbWFyZ2luOiAwIDRweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbi5jb2RlIHA6bnRoLWNoaWxkKDIpIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi50b3AtYXJlYSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcbn1cblxuLmdyaWQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xuICBtYXJnaW46IDIwcHggMjAlO1xufVxuLmdyaWQgdGFibGUgdGQsIC5ncmlkIHRhYmxlIHRoIHtcbiAgcGFkZGluZzogOHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZ3JpZCB0YWJsZSB0cjpudGgtY2hpbGQoZXZlbikge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xufVxuLmdyaWQgdGFibGUgdHI6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xufVxuLmdyaWQgdGFibGUgdGgge1xuICBwYWRkaW5nLXRvcDogMTJweDtcbiAgcGFkZGluZy1ib3R0b206IDEycHg7XG59XG5cbmxhYmVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xuICBjb2xvcjogIzhhOWRhNDtcbiAgbWFyZ2luOiAwIDVweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxubGFiZWwgaW5wdXQge1xuICBjb2xvcjogIzhhOWRhNDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzhhOWRhNDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB3aWR0aDogODJweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5sYWJlbCBpbnB1dDpkaXNhYmxlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjZWNlY2U7XG59XG5cbi5mb3JtLWFyZWEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IDAgMCAxMHB4IDA7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbn1cblxuLnNtYWxsLWJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4YTlkYTQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM4YTlkYTQ7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogNTBweDtcbn1cbi5zbWFsbC1idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTdhYWIxO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59IiwiQGltcG9ydCBcInNyYy9zdHlsZXNcIjtcblxuLmxpdmUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBwIHtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgfVxufVxuLmxpdmUtZG90IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICB3aWR0aDogMTBweDtcbiAgaGVpZ2h0OiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgbWFyZ2luOiAycHggNHB4IDJweCAwO1xufVxuLmNvZGUge1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBwYWRkaW5nOiA3cHggNzhweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgcCB7XG4gICAgbWFyZ2luOiAwIDRweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB9XG4gIHA6bnRoLWNoaWxkKDIpIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxufVxuLnRvcC1hcmVhIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xufVxuLmdyaWQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xuICBtYXJnaW46IDIwcHggMjAlO1xuICB0YWJsZSB0ZCwgdGFibGUgdGgge1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICB0YWJsZSB0cjpudGgtY2hpbGQoZXZlbil7YmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjt9XG5cbiAgdGFibGUgdHI6aG92ZXIge2JhY2tncm91bmQtY29sb3I6ICNkZGQ7fVxuXG4gIHRhYmxlIHRoIHtcbiAgICBwYWRkaW5nLXRvcDogMTJweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTJweDtcbiAgfVxufVxubGFiZWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XG4gIGNvbG9yOiAkbWFpbkJ1dHRvbjtcbiAgbWFyZ2luOiAwIDVweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBpbnB1dCB7XG4gICAgY29sb3I6ICRtYWluQnV0dG9uO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICRtYWluQnV0dG9uO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICB3aWR0aDogODJweDtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgJjpkaXNhYmxlZCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWFpbkdyZXk7XG4gICAgfVxuICB9XG59XG4uZm9ybS1hcmVhIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiAwIDAgMTBweCAwO1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG59XG4uc21hbGwtYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJG1haW5CdXR0b247XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICRtYWluQnV0dG9uO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGhlaWdodDogMzBweDtcbiAgd2lkdGg6IDUwcHg7XG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRtYWluQnV0dG9uTGlnaHQ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/payments/payments.component.ts":
/*!************************************************!*\
  !*** ./src/app/payments/payments.component.ts ***!
  \************************************************/
/*! exports provided: PaymentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentsComponent", function() { return PaymentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/common.service */ "./src/app/services/common.service.ts");



let PaymentsComponent = class PaymentsComponent {
    constructor(service) {
        this.service = service;
        this.code = 0;
        this.result = [];
        this.paymentValue = '';
        this.ammountValue = '';
    }
    ngOnInit() {
        setInterval(() => {
            this.service.getData().subscribe(res => {
                if (this.result.length === 0) {
                    this.result = res;
                }
                else {
                }
                this.code = this.result[this.result.length - 1].code;
            });
        }, 2000);
    }
    addPaymentValue() {
        const selectedRes = this.result.find(x => x.name === this.paymentValue);
        selectedRes.ammount = this.ammountValue;
    }
};
PaymentsComponent.ctorParameters = () => [
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"] }
];
PaymentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-payments',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./payments.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/payments/payments.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./payments.component.scss */ "./src/app/payments/payments.component.scss")).default]
    })
], PaymentsComponent);



/***/ }),

/***/ "./src/app/services/common.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/common.service.ts ***!
  \********************************************/
/*! exports provided: CommonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonService", function() { return CommonService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



const headerOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
let CommonService = class CommonService {
    constructor(http) {
        this.http = http;
        this.mockurl = 'http://localhost:3000/posts';
    }
    getData() {
        return this.http.get(this.mockurl, headerOptions);
    }
    postPayment(payment) {
        return this.http.post(this.mockurl, payment, headerOptions);
    }
    updatePayment(payment) {
        return this.http.put(this.mockurl, payment, headerOptions);
    }
};
CommonService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
CommonService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], CommonService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/gustavopassos/WebstormProjects/gig-ng-public/challenge/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map