(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<h1>angielski test</h1>\n\n<div *ngIf=\"afAuth.user | async as user; else showLogin\">\n    <h1>Hello {{ user.displayName }}!</h1>\n    <app-menu></app-menu>\n    <button (click)=\"logout()\">Logout</button>\n  </div>\n\n<div *ngIf=\"pokaz\">\n  <div class=\"form-group\" >\n    <div class=\"form-group\">\n      <label for=\"exampleInputEmail1\" >Email address</label>\n      <input type=\"email\" class=\"form-control\" [(ngModel)]=\"user.email\" placeholder=\"Email\" required>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"exampleInputPassword1\">Password</label>\n      <input type=\"password\" class=\"form-control\" [(ngModel)]=\"user.password\" placeholder=\"Password\" required>\n    </div>\n   <button type=\"buton\" class=\"btn btn-primary btn-block\" style=\"margin-bottom: 20px\" (click)=\"signInWithEmail()\" [disabled]=\"formCtrl.form.invalid\">\n\n   Login with Email\n\n     </button>\n  </div>\n</div>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(afAuth) {
        this.afAuth = afAuth;
        this.title = 'app';
        this.user = {
            email: '',
            password: ''
        };
        this.logout();
        this.pokaz = true;
    }
    AppComponent.prototype.logout = function () {
        this.afAuth.auth.signOut();
        this.pokaz = true;
    };
    AppComponent.prototype.signInWithEmail = function () {
        var _this = this;
        this.afAuth
            .auth
            .signInWithEmailAndPassword(this.user.email, this.user.password)
            .then(function (value) {
            console.log('Nice, it worked!');
            _this.pokaz = false;
        })
            .catch(function (err) {
            console.log('Something went wrong:', err.message);
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"]])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_youtube_player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-youtube-player */ "./node_modules/ngx-youtube-player/esm5/ngx-youtube-player.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _comp_youtube_youtube_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./comp/youtube/youtube.component */ "./src/app/comp/youtube/youtube.component.ts");
/* harmony import */ var _comp_dbtest_dbtest_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./comp/dbtest/dbtest.component */ "./src/app/comp/dbtest/dbtest.component.ts");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angularfire2/storage */ "./node_modules/angularfire2/storage/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _comp_auth_auth_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./comp/auth/auth.component */ "./src/app/comp/auth/auth.component.ts");
/* harmony import */ var _comp_quiz_quiz_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./comp/quiz/quiz.component */ "./src/app/comp/quiz/quiz.component.ts");
/* harmony import */ var _comp_menu_menu_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./comp/menu/menu.component */ "./src/app/comp/menu/menu.component.ts");
/* harmony import */ var _comp_slowka_slowka_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./comp/slowka/slowka.component */ "./src/app/comp/slowka/slowka.component.ts");
/* harmony import */ var _comp_film_menu_film_menu_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./comp/film-menu/film-menu.component */ "./src/app/comp/film-menu/film-menu.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// youtube



//firebases











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _comp_youtube_youtube_component__WEBPACK_IMPORTED_MODULE_6__["YoutubeComponent"],
                _comp_dbtest_dbtest_component__WEBPACK_IMPORTED_MODULE_7__["DbtestComponent"],
                _comp_auth_auth_component__WEBPACK_IMPORTED_MODULE_14__["AuthComponent"],
                _comp_quiz_quiz_component__WEBPACK_IMPORTED_MODULE_15__["QuizComponent"],
                _comp_menu_menu_component__WEBPACK_IMPORTED_MODULE_16__["MenuComponent"],
                _comp_slowka_slowka_component__WEBPACK_IMPORTED_MODULE_17__["SlowkaComponent"],
                _comp_film_menu_film_menu_component__WEBPACK_IMPORTED_MODULE_18__["FilmMenuComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                ngx_youtube_player__WEBPACK_IMPORTED_MODULE_3__["YoutubePlayerModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_9__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].firebase),
                angularfire2_firestore__WEBPACK_IMPORTED_MODULE_10__["AngularFirestoreModule"],
                angularfire2_auth__WEBPACK_IMPORTED_MODULE_12__["AngularFireAuthModule"],
                angularfire2_storage__WEBPACK_IMPORTED_MODULE_11__["AngularFireStorageModule"],
                angularfire2_database__WEBPACK_IMPORTED_MODULE_8__["AngularFireDatabaseModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());

Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_4__["platformBrowserDynamic"])().bootstrapModule(AppModule);


/***/ }),

/***/ "./src/app/comp/auth/auth.component.css":
/*!**********************************************!*\
  !*** ./src/app/comp/auth/auth.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/comp/auth/auth.component.html":
/*!***********************************************!*\
  !*** ./src/app/comp/auth/auth.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  auth works!\n</p>\n<div *ngIf=\"afAuth.user | async as user; else showLogin\">\n    <h1>Hello {{ user.displayName }}!</h1>\n    \n    <button (click)=\"logout()\">Logout</button>\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"exampleInputEmail1\">Email address</label>\n    <input type=\"email\" class=\"form-control\" [(ngModel)]=\"user.email\" placeholder=\"Email\" required>\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"exampleInputPassword1\">Password</label>\n    <input type=\"password\" class=\"form-control\" [(ngModel)]=\"user.password\" placeholder=\"Password\" required>\n  </div>\n  <div class=\"form-group\">\n   <button type=\"buton\" class=\"btn btn-primary btn-block\" style=\"margin-bottom: 20px\" (click)=\"signInWithEmail()\" [disabled]=\"formCtrl.form.invalid\">\n\n   Login with Email\n\n   </button>\n</div>\n"

/***/ }),

/***/ "./src/app/comp/auth/auth.component.ts":
/*!*********************************************!*\
  !*** ./src/app/comp/auth/auth.component.ts ***!
  \*********************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _service_test_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/test.service */ "./src/app/service/test.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthComponent = /** @class */ (function () {
    function AuthComponent(afAuth, test) {
        this.afAuth = afAuth;
        this.test = test;
        this.user = {
            email: '',
            password: ''
        };
    }
    AuthComponent.prototype.doGoogleLogin = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var provider = new firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"].GoogleAuthProvider();
            provider.addScope('profile');
            provider.addScope('email');
            _this.afAuth.auth
                .signInWithPopup(provider)
                .then(function (res) {
                resolve(res);
                _this.isLogin = true;
                console.log(_this.isLogin);
            });
        });
    };
    AuthComponent.prototype.logout = function () {
        this.afAuth.auth.signOut();
        this.isLogin = false;
    };
    AuthComponent.prototype.signInWithEmail = function () {
        var _this = this;
        this.afAuth
            .auth
            .signInWithEmailAndPassword(this.user.email, this.user.password)
            .then(function (value) {
            console.log('Nice, it worked!');
            _this.test.czyZalogowany = true;
        })
            .catch(function (err) {
            console.log('Something went wrong:', err.message);
        });
    };
    AuthComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-auth',
            template: __webpack_require__(/*! ./auth.component.html */ "./src/app/comp/auth/auth.component.html"),
            styles: [__webpack_require__(/*! ./auth.component.css */ "./src/app/comp/auth/auth.component.css")]
        }),
        __metadata("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"], _service_test_service__WEBPACK_IMPORTED_MODULE_3__["TestService"]])
    ], AuthComponent);
    return AuthComponent;
}());



/***/ }),

/***/ "./src/app/comp/dbtest/dbtest.component.css":
/*!**************************************************!*\
  !*** ./src/app/comp/dbtest/dbtest.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/comp/dbtest/dbtest.component.html":
/*!***************************************************!*\
  !*** ./src/app/comp/dbtest/dbtest.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul>\n    <li *ngFor=\"let item of items | async\">\n      <input type=\"text\" #updatetext [value]=\"item.text\" />\n      <button (click)=\"updateItem(item.key, updatetext.value)\">Update</button>\n      <button (click)=\"deleteItem(item.key)\">Delete</button>\n    </li>\n  </ul>\n  <input type=\"text\" #newitem />\n  <button (click)=\"addItem(newitem.value)\">Add</button>\n  <button (click)=\"deleteEverything()\">Delete All</button>\n"

/***/ }),

/***/ "./src/app/comp/dbtest/dbtest.component.ts":
/*!*************************************************!*\
  !*** ./src/app/comp/dbtest/dbtest.component.ts ***!
  \*************************************************/
/*! exports provided: DbtestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DbtestComponent", function() { return DbtestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DbtestComponent = /** @class */ (function () {
    function DbtestComponent(db) {
        this.itemsRef = db.list('messages');
        // Use snapshotChanges().map() to store the key
        this.items = this.itemsRef.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        }));
    }
    DbtestComponent.prototype.addItem = function (newName) {
        this.itemsRef.push({ text: newName });
    };
    DbtestComponent.prototype.updateItem = function (key, newText) {
        this.itemsRef.update(key, { text: newText });
    };
    DbtestComponent.prototype.deleteItem = function (key) {
        this.itemsRef.remove(key);
    };
    DbtestComponent.prototype.deleteEverything = function () {
        this.itemsRef.remove();
    };
    DbtestComponent.prototype.OnInit = function () {
    };
    DbtestComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dbtest',
            template: __webpack_require__(/*! ./dbtest.component.html */ "./src/app/comp/dbtest/dbtest.component.html"),
            styles: [__webpack_require__(/*! ./dbtest.component.css */ "./src/app/comp/dbtest/dbtest.component.css")]
        }),
        __metadata("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]])
    ], DbtestComponent);
    return DbtestComponent;
}());



/***/ }),

/***/ "./src/app/comp/film-menu/film-menu.component.css":
/*!********************************************************!*\
  !*** ./src/app/comp/film-menu/film-menu.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/comp/film-menu/film-menu.component.html":
/*!*********************************************************!*\
  !*** ./src/app/comp/film-menu/film-menu.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"menu\" *ngIf=\"menuFilm\">\n  <div><button type=\"button\" name=\"button\" (click)=\"pierwszyMenu()\">pierwszy</button></div>\n  <div><button type=\"button\" name=\"button\" (click)=\"drugiMenu()\">drugi</button></div>\n  <div><button type=\"button\" name=\"button\" (click)=\"trzeciMenu()\">trzeci</button></div>\n  <div><button type=\"button\" name=\"button\" (click)=\"czwartyMenu()\">czwarty</button></div>\n</div>\n\n<div *ngIf=\"pierwszy\">\n  <app-youtube id=\"sKTHh08KuXk\" (voted)=\"onVoted($event)\"></app-youtube>\n  <div><button type=\"button\" name=\"button\" (click)=\"pokazMenu()\">pokaz menu filmu</button></div>\n</div>\n<div *ngIf=\"drugi\">\n  drugi\n  <div><button type=\"button\" name=\"button\" (click)=\"pokazMenu()\">pokaz menu filmu</button></div>\n</div>\n<div *ngIf=\"trzeci\">\n  trzeci\n  <div><button type=\"button\" name=\"button\" (click)=\"pokazMenu()\">pokaz menu filmu</button></div>\n</div>\n<div *ngIf=\"czwarty\">\n  pierwszy\n  <div><button type=\"button\" name=\"button\" (click)=\"pokazMenu()\">pokaz menu filmu</button></div>\n</div>\n"

/***/ }),

/***/ "./src/app/comp/film-menu/film-menu.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/comp/film-menu/film-menu.component.ts ***!
  \*******************************************************/
/*! exports provided: FilmMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilmMenuComponent", function() { return FilmMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FilmMenuComponent = /** @class */ (function () {
    function FilmMenuComponent() {
        this.menuFilm = true;
        this.pierwszy = false;
        this.drugi = false;
        this.trzeci = false;
        this.czwarty = false;
    }
    FilmMenuComponent.prototype.pierwszyMenu = function () {
        this.menuFilm = false;
        this.pierwszy = true;
        this.drugi = false;
        this.trzeci = false;
        this.czwarty = false;
    };
    FilmMenuComponent.prototype.drugiMenu = function () {
        this.menuFilm = false;
        this.pierwszy = false;
        this.drugi = true;
        this.trzeci = false;
        this.czwarty = false;
    };
    FilmMenuComponent.prototype.trzeciMenu = function () {
        this.menuFilm = false;
        this.pierwszy = false;
        this.drugi = false;
        this.trzeci = true;
        this.czwarty = false;
    };
    FilmMenuComponent.prototype.czwartyMenu = function () {
        this.menuFilm = false;
        this.pierwszy = false;
        this.drugi = false;
        this.trzeci = false;
        this.czwarty = true;
    };
    FilmMenuComponent.prototype.pokazMenu = function () {
        this.menuFilm = true;
        this.pierwszy = false;
        this.drugi = false;
        this.trzeci = false;
        this.czwarty = false;
    };
    FilmMenuComponent.prototype.onVoted = function (agreed) {
        alert("konice");
    };
    FilmMenuComponent.prototype.ngOnInit = function () {
    };
    FilmMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-film-menu',
            template: __webpack_require__(/*! ./film-menu.component.html */ "./src/app/comp/film-menu/film-menu.component.html"),
            styles: [__webpack_require__(/*! ./film-menu.component.css */ "./src/app/comp/film-menu/film-menu.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FilmMenuComponent);
    return FilmMenuComponent;
}());



/***/ }),

/***/ "./src/app/comp/menu/menu.component.css":
/*!**********************************************!*\
  !*** ./src/app/comp/menu/menu.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/comp/menu/menu.component.html":
/*!***********************************************!*\
  !*** ./src/app/comp/menu/menu.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"menu\" *ngIf=\"Menu\">\n  <div><button type=\"button\" name=\"button\" (click)=\"podakazSlowka()\">slowka</button></div>\n  <div><button type=\"button\" name=\"button\" (click)=\"pokazYoutube()\">youtube menu</button></div>\n  <div><button type=\"button\" name=\"button\">audi</button></div>\n  <div><button type=\"button\" name=\"button\">bmw</button></div>\n</div>\n\n<div *ngIf=\"Slowka\">\n  <app-slowka></app-slowka>\n  <div>\n    <button type=\"button\" name=\"button\" (click)=\"pokazMenu()\">menu</button>\n  </div>\n\n</div>\n<div *ngIf=\"filmMenu\">\n  <app-film-menu></app-film-menu>\n\n  <div>\n    <button type=\"button\" name=\"button\" (click)=\"pokazMenu()\">menu</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/comp/menu/menu.component.ts":
/*!*********************************************!*\
  !*** ./src/app/comp/menu/menu.component.ts ***!
  \*********************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
        this.Menu = true;
        this.Slowka = false;
        this.filmMenu = false;
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent.prototype.pokazMenu = function () {
        this.Menu = true;
        this.Slowka = false;
        this.filmMenu = false;
    };
    MenuComponent.prototype.podakazSlowka = function () {
        this.Slowka = true;
        this.Menu = false;
        this.filmMenu = false;
    };
    MenuComponent.prototype.pokazYoutube = function () {
        this.Slowka = false;
        this.Menu = false;
        this.filmMenu = true;
    };
    MenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/comp/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/comp/menu/menu.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/comp/quiz/quiz.component.css":
/*!**********************************************!*\
  !*** ./src/app/comp/quiz/quiz.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/comp/quiz/quiz.component.html":
/*!***********************************************!*\
  !*** ./src/app/comp/quiz/quiz.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  quiz works!\n</p>\n<button (click)=\"testLog()\">pokaz tekst</button>\n"

/***/ }),

/***/ "./src/app/comp/quiz/quiz.component.ts":
/*!*********************************************!*\
  !*** ./src/app/comp/quiz/quiz.component.ts ***!
  \*********************************************/
/*! exports provided: QuizComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizComponent", function() { return QuizComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_test_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/test.service */ "./src/app/service/test.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QuizComponent = /** @class */ (function () {
    function QuizComponent(test) {
        this.test = test;
    }
    QuizComponent.prototype.testLog = function () {
        alert(this.test.czyZalogowany);
    };
    QuizComponent.prototype.ngOnInit = function () {
    };
    QuizComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-quiz',
            template: __webpack_require__(/*! ./quiz.component.html */ "./src/app/comp/quiz/quiz.component.html"),
            styles: [__webpack_require__(/*! ./quiz.component.css */ "./src/app/comp/quiz/quiz.component.css")]
        }),
        __metadata("design:paramtypes", [_service_test_service__WEBPACK_IMPORTED_MODULE_1__["TestService"]])
    ], QuizComponent);
    return QuizComponent;
}());



/***/ }),

/***/ "./src/app/comp/slowka/slowka.component.css":
/*!**************************************************!*\
  !*** ./src/app/comp/slowka/slowka.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/comp/slowka/slowka.component.html":
/*!***************************************************!*\
  !*** ./src/app/comp/slowka/slowka.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>MASTER OF WORDS </h1>\n\n<button id=\"btnSerch\" type=\"button\">Szukaj</button>\n\n\n<div id=\"wraper\"></div>\n<input type=\"text\" id=\"szukaj\"><span>Wprowadz szukane slowo</span>\n\n\n\n\n<div id=\"wynik\"></div>\n<br>\n<div id=\"odp\"></div>\n\n<br>\n<div id=\"image\"></div>\n"

/***/ }),

/***/ "./src/app/comp/slowka/slowka.component.ts":
/*!*************************************************!*\
  !*** ./src/app/comp/slowka/slowka.component.ts ***!
  \*************************************************/
/*! exports provided: SlowkaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlowkaComponent", function() { return SlowkaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SlowkaComponent = /** @class */ (function () {
    function SlowkaComponent() {
        var tabZnakow;
        var szukaneSlowo = "";
        var corectSound = new Audio();
        corectSound.src = "../../../assets/Correct-answer.mp3";
        var wrongSound = new Audio();
        wrongSound.src = "../../../assets/bed.mp3";
        var btnSound = new Audio();
        btnSound.src = "../../../assets/btn.mp3";
        var text;
        var btnTab = [];
        var temp2 = jquery__WEBPACK_IMPORTED_MODULE_1__("#odp").empty();
        var divAnser = [];
        var btnTab = [];
        function drawTable(aTab) {
            var temp1 = jquery__WEBPACK_IMPORTED_MODULE_1__("#wynik").empty();
            var len = aTab.length;
            for (var i = 0; i < len; i++) {
                var btn = document.createElement("BUTTON");
                jquery__WEBPACK_IMPORTED_MODULE_1__(btn).html(aTab[i]);
                btn.style.width = "60px";
                btn.style.height = "60px";
                btn.style.display = "inline";
                btn.style.padding = "12px 12px";
                btn.style.borderWidth = "1px";
                btn.style.borderStyle = "outset";
                btn.style.fontSize = "40px";
                btn.style.margin = "10px";
                btn.style.borderRadius = "5px";
                btnTab.push(btn);
                temp1.append(btn);
            }
        }
        /**
         * Shuffles array in place.
         * @param {Array} a items An array containing the items.
         */
        function shuffle(a) {
            var j, x, i;
            for (i = a.length - 1; i > 0; i--) {
                j = Math.floor(Math.random() * (i + 1));
                x = a[i];
                a[i] = a[j];
                a[j] = x;
            }
            return a;
        }
        function klik(vAl) {
        }
        function chek(word, anseer) {
            if (word === anseer) {
                return true;
            }
            if (word !== anseer) {
                return false;
            }
        }
        var pelneZapytanie = "";
        function loadDoc() {
            var aWord;
            aWord = jquery__WEBPACK_IMPORTED_MODULE_1__("#szukaj").val();
            if (typeof aWord !== "string" || aWord === undefined || aWord === null) {
                return "nieprwidlowy argument, podany argument musi byc typu string";
            }
            console.log(aWord);
            var szukaneSlowo = aWord;
            var szablonZapytan = "https://sjp.pwn.pl/szukaj/";
            pelneZapytanie = szablonZapytan + szukaneSlowo;
            console.log(pelneZapytanie);
            var Imageurl = "https://www.google.pl/search?q=" + szukaneSlowo + "&source=lnms&tbm=isch&sa=X&ved=0ahUKEwipj7_ysd3aAhXFKCwKHQ9eCCIQ_AUICigB&biw=1680&bih=870";
            jquery__WEBPACK_IMPORTED_MODULE_1__["get"](Imageurl, function (data) {
                jquery__WEBPACK_IMPORTED_MODULE_1__("#image").html(data);
            });
            jquery__WEBPACK_IMPORTED_MODULE_1__("#image").html(Imageurl);
            var url = "https://translate.googleapis.com/translate_a/single?client=gtx&sl="
                + "pl" + "&tl=" + "en" + "&dt=t&q=" + szukaneSlowo;
            jquery__WEBPACK_IMPORTED_MODULE_1__["get"](url, function (data) {
                text = data;
                tabZnakow = text[0][0][0].toString();
                var testIstnienia = text[0][0][1];
                console.log("Słowo  " + tabZnakow + " istnieje ? : " + (testIstnienia !== tabZnakow));
                var tab = tabZnakow.split('');
                console.log(tab);
                var rantab = shuffle(tab);
                console.log(rantab);
                drawTable(rantab);
                btnTab.forEach(function (element) {
                    jquery__WEBPACK_IMPORTED_MODULE_1__(element).on("click", function () {
                        var t = jquery__WEBPACK_IMPORTED_MODULE_1__(element).html();
                        var ans = document.createElement("div");
                        ans.style.width = "60px";
                        ans.style.height = "60px";
                        ans.style.display = "inline";
                        ans.style.padding = "12px 12px";
                        ans.style.borderWidth = "1px";
                        ans.style.borderStyle = "outset";
                        jquery__WEBPACK_IMPORTED_MODULE_1__(ans).html(t);
                        divAnser.push(t);
                        temp2.append(ans);
                        jquery__WEBPACK_IMPORTED_MODULE_1__(element).off();
                        jquery__WEBPACK_IMPORTED_MODULE_1__(element).attr("disabled", true);
                        btnSound.play();
                        var dlugoscBtnTab = btnTab.length;
                        var licznik = 0;
                        for (var index = 0; index < dlugoscBtnTab; index++) {
                            var element_1 = btnTab[index];
                            if (jquery__WEBPACK_IMPORTED_MODULE_1__(element_1).attr("disabled")) {
                                licznik = licznik + 1;
                            }
                        }
                        if (licznik === dlugoscBtnTab) {
                            console.log("koniec ");
                            console.log(divAnser.join("") + "  DIV ANSER JOIN REZULTAT ");
                            if (chek(divAnser.join(""), tabZnakow)) {
                                console.log("BRAAAAWO WYGRLES");
                                corectSound.play();
                                jquery__WEBPACK_IMPORTED_MODULE_1__("#odp").children().css("background-color", "green");
                            }
                            else {
                                jquery__WEBPACK_IMPORTED_MODULE_1__("#odp").children().css("background-color", "red");
                                navigator.vibrate(1000);
                                wrongSound.play();
                                setTimeout(function () {
                                    zerujOdpowiedz();
                                    loadDoc();
                                }, 4000);
                            }
                        }
                    });
                });
            });
        }
        function zerujOdpowiedz() {
            jquery__WEBPACK_IMPORTED_MODULE_1__("#odp").empty();
        }
        jquery__WEBPACK_IMPORTED_MODULE_1__(document).ready(function () {
            jquery__WEBPACK_IMPORTED_MODULE_1__("#btnSerch").click(function () {
                loadDoc();
                zerujOdpowiedz();
            });
        });
    }
    SlowkaComponent.prototype.ngOnInit = function () {
    };
    SlowkaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-slowka',
            template: __webpack_require__(/*! ./slowka.component.html */ "./src/app/comp/slowka/slowka.component.html"),
            styles: [__webpack_require__(/*! ./slowka.component.css */ "./src/app/comp/slowka/slowka.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SlowkaComponent);
    return SlowkaComponent;
}());



/***/ }),

/***/ "./src/app/comp/youtube/youtube.component.css":
/*!****************************************************!*\
  !*** ./src/app/comp/youtube/youtube.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/comp/youtube/youtube.component.html":
/*!*****************************************************!*\
  !*** ./src/app/comp/youtube/youtube.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>dzialam youtube</h3>\n<youtube-player\n     [videoId]=\"id\"\n     (ready)=\"savePlayer($event)\"\n     (change)=\"onStateChange($event)\"\n   ></youtube-player>\n"

/***/ }),

/***/ "./src/app/comp/youtube/youtube.component.ts":
/*!***************************************************!*\
  !*** ./src/app/comp/youtube/youtube.component.ts ***!
  \***************************************************/
/*! exports provided: YoutubeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YoutubeComponent", function() { return YoutubeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var YoutubeComponent = /** @class */ (function () {
    function YoutubeComponent() {
        this.id = null;
        this.voted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    YoutubeComponent.prototype.ngOnInit = function () {
    };
    YoutubeComponent.prototype.vote = function (agreed) {
        this.voted.emit(agreed);
    };
    YoutubeComponent.prototype.savePlayer = function (player) {
        this.player = player;
        console.log('player instance', player);
    };
    YoutubeComponent.prototype.onStateChange = function (event) {
        console.log('player state', event.data);
        if (event.data == 0) {
            this.vote(true);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], YoutubeComponent.prototype, "id", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], YoutubeComponent.prototype, "voted", void 0);
    YoutubeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-youtube',
            template: __webpack_require__(/*! ./youtube.component.html */ "./src/app/comp/youtube/youtube.component.html"),
            styles: [__webpack_require__(/*! ./youtube.component.css */ "./src/app/comp/youtube/youtube.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], YoutubeComponent);
    return YoutubeComponent;
}());



/***/ }),

/***/ "./src/app/service/test.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/test.service.ts ***!
  \*****************************************/
/*! exports provided: TestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestService", function() { return TestService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TestService = /** @class */ (function () {
    function TestService(afAuth) {
        this.afAuth = afAuth;
        this.czyZalogowany = false;
    }
    TestService.prototype.pokazTekst = function () {
        console.log(this.tekst);
    };
    TestService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"]])
    ], TestService);
    return TestService;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyB2XmlljqSkXt98SUgTqFtjrAvYyC6Eqwg",
        authDomain: "angielski-32159.firebaseapp.com",
        databaseURL: "https://angielski-32159.firebaseio.com",
        projectId: "angielski-32159",
        storageBucket: "angielski-32159.appspot.com",
        messagingSenderId: "1047939767386"
    }
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/k/angular/start/yu/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map