webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".box{\n  padding-top: 2%;\n  padding-bottom: 2%;\n  margin: 2%;\n\n}\n\n.greenBack{\n  background-color: rgb(102, 255, 102);\n\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1>\n    {{ title }}!\n  </h1>\n</div>\n<div class=\"container\">\n  <div class=\"row \">\n    <div class=\"col-md-4\">wybierz typ procesora</div>\n    <div class=\"col-md-4\">\n        <button mat-button (click) = \"procesorFiltruj(1)\">intel</button>\n    </div>\n    <div class=\"col-md-4\">\n      <button mat-button (click) = \"procesorFiltruj(2)\">amd</button>\n    </div>\n\n  </div>\n\n  <div class=\"row \">\n    <div class=\"col-md-4\">wybierz grafike</div>\n    <div class=\"col-md-4\">\n        <button mat-button (click) = \"kartaGraficznaFiltruj(1)\">amd</button>\n    </div>\n    <div class=\"col-md-4\">\n      <button mat-button (click) = \"kartaGraficznaFiltruj(2)\">nivida</button>\n    </div>\n  </div>\n\n  <div class=\"row box greenBack\">\n    <div class=\"col-md-4\">Wybierz procesor</div>\n    <div class=\"col-md-4\">\n      <mat-select placeholder=\"CPU\" >\n          <ng-container *ngFor=\"let cpu of procesor\">\n          <mat-option *ngIf=\"procesorWybrany == '1' && cpu.marka == 'intel' \">\n                    <p (click)=\"procesorWybierz(cpu.marka , cpu.model , cpu.cena)\">  {{cpu.marka}} - {{cpu.model}} </p>\n          </mat-option>\n        </ng-container>\n\n        <ng-container *ngFor=\"let cpu of procesor\">\n        <mat-option *ngIf=\"procesorWybrany == '2' && cpu.marka == 'amd' \">\n                  <p (click)=\"procesorWybierz(cpu.marka , cpu.model , cpu.cena)\">  {{cpu.marka}} - {{cpu.model}} </p>\n        </mat-option>\n      </ng-container>\n        </mat-select>\n    </div>\n    <div class=\"col-md-4\">Marka :{{procesorMarka}}/{{procesorMarka}} cena-{{procesorCena}}zł</div>\n  </div>\n\n  <div class=\"row box\">\n    <div class=\"col-md-4\">Wybierz płyte glowna</div>\n    <div class=\"col-md-4\">\n      <mat-select placeholder=\"Plyta Główna\" >\n        <ng-container *ngFor=\"let plyta of plytaGlowna\">\n        <mat-option *ngIf=\"procesorWybrany == '1' && plyta.Socket == 'intel' \">\n                  <p (click)=\"plytaGlownaWybierz(plyta.model , plyta.Socket , plyta.Chipset ,plyta.cena)\">   {{plyta.model}} gniazdo= {{plyta.socket}} cena= {{plyta.cena}}zł </p>\n        </mat-option>\n      </ng-container>\n\n      <ng-container *ngFor=\"let plyta of plytaGlowna\">\n      <mat-option *ngIf=\"procesorWybrany == '2' && plyta.Socket == 'amd' \">\n                <p (click)=\"plytaGlownaWybierz(plyta.model , plyta.Socket , plyta.Chipset ,plyta.cena)\">   {{plyta.model}} gniazdo= {{plyta.socket}} cena= {{plyta.cena}}zł </p>\n      </mat-option>\n    </ng-container>\n  </mat-select>\n    </div>\n    <div class=\"col-md-4\">\n      {{plytaGlownaModel}} socket={{plytaGlownaSocket}} cena={{plytaGlownaCena}}\n    </div>\n  </div>\n\n  <div class=\"row box greenBack\">\n    <div class=\"col-md-4\">Wybierz karte graficzna</div>\n    <div class=\"col-md-4\">\n      <mat-select placeholder=\"GPU\" >\n            <ng-container *ngFor=\"let gpu of kartaGraficzna\">\n            <mat-option *ngIf=\"kartaGraficznaWybrana == '1' && gpu.Chipset == 'amd' \">\n                        <p (click)=\"kartaGraficznaWybierz(gpu.model, gpu.kartaGraficznaChipset, gpu.ram , gpu.cena)\"> {{gpu.model}} pamieć={{gpu.ram}}Mb cena={{gpu.cena}}   </p>\n              </mat-option>\n            </ng-container>\n\n            <ng-container *ngFor=\"let gpu of kartaGraficzna\">\n            <mat-option *ngIf=\"kartaGraficznaWybrana == '2' && gpu.Chipset == 'nivida' \">\n                        <p (click)=\"kartaGraficznaWybierz(gpu.model, gpu.kartaGraficznaChipset, gpu.ram , gpu.cena)\"> {{gpu.model}} pamieć={{gpu.ram}}Mb cena={{gpu.cena}}   </p>\n            </mat-option>\n            </ng-container>\n\n\n\n        </mat-select>\n    </div>\n    <div class=\"col-md-4\">\n      {{kartaGraficznaModel}} pamieć={{kartaGraficznaRAM}}MB cena={{kartaGraficznaCena}}zł\n    </div>\n  </div>\n\n  <div class=\"row box\">\n    <div class=\"col-md-4\">Wybierz Ram</div>\n    <div class=\"col-md-4\">\n      <mat-select placeholder=\"ram\" >\n          <mat-option *ngFor=\"let ram of pamiecRam\">\n          <p (click)=\"pamiecRamWybierz(ram.model , ram.marka ,ram.Mb, ram.zegar , ram.cena)\">{{ram.model}}  cena={{ram.cena}}zł </p>\n          </mat-option>\n        </mat-select>\n    </div>\n    <div class=\"col-md-4\">\n  {{PamiecRamModel}} cena = {{pamiecRamCena}}\n    </div>\n  </div>\n\n\n  <div class=\"row box greenBack\">\n    <div class=\"col-md-4\">Wybierz Dysk Twardy</div>\n    <div class=\"col-md-4\">\n      <mat-select placeholder=\"HDD\" >\n          <mat-option *ngFor=\"let hdd of dyskTwardy\">\n          <p (click)=\"dyskTwardyWybierz(hdd.model , hdd.cache , hdd.ObrMin , hdd.interfejs , hdd.interfejs , hdd.pojemnosc , hdd.cena)\">{{hdd.model}}  cena={{hdd.cena}}zł </p>\n          </mat-option>\n        </mat-select>\n    </div>\n    <div class=\"col-md-4\">\n  {{dyskTwardyModel}} cena = {{dyskTwardyCena}}\n    </div>\n  </div>\n\n  <div class=\"row box\">\n    <div class=\"col-md-4\">Wybierz Zasilacz</div>\n    <div class=\"col-md-4\">\n      <mat-select placeholder=\"Zasilacz\" >\n          <mat-option *ngFor=\"let zas of Zasilacz\">\n          <p (click)=\"ZasilaczWybierz(zas.model , zas.marka , zas.moc , zas.wentylator , zas.cena)\">{{zas.model}}  cena={{zas.cena}}zł </p>\n          </mat-option>\n        </mat-select>\n    </div>\n    <div class=\"col-md-4\">\n  {{ZasilaczModel}} cena = {{ZasilaczCena}}zł\n    </div>\n  </div>\n\n\n\n\n    <div class=\"row box greenBack\">\n      <div class=\"col-md-4\">Suma</div>\n      <div class=\"col-md-4\">\n        {{suma}}\n      </div>\n      <div class=\"col-md-4\">\n\n      </div>\n    </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Pc kreator';
        this.procesor = [
            { marka: 'amd', Socket: ' am4 ', model: ' AMD Ryzen 5 1600 3.2GHz ', cena: 755 },
            { marka: 'amd', Socket: ' am4 ', model: ' AMD Ryzen 5 2400G 3,6GHz', cena: 649 },
            { marka: 'amd', Socket: ' am4 ', model: ' AMD Ryzen 3 2200G 3,5GHz ', cena: 415 },
            { marka: 'amd', Socket: ' am4 ', model: '  AMD Ryzen 5 1600X 3.6GHz', cena: 879 },
            { marka: 'amd', Socket: ' am4 ', model: ' AMD Ryzen 7 1800X 3.6GHz', cena: 1339 },
            { marka: 'amd', Socket: ' am4 ', model: ' AMD Ryzen 3 1200 3.1GHz', cena: 395 },
            { marka: 'amd', Socket: ' am4 ', model: ' AMD Ryzen 5 1500X 3.5GHz', cena: 659 },
            { marka: 'amd', Socket: ' am4 ', model: ' AMD Ryzen 7 1700X 3.4GHz', cena: 1279 },
            { marka: 'amd', Socket: ' am4 ', model: ' AMD Ryzen Threadripper 1950X', cena: 4099 },
            { marka: 'amd', Socket: ' am4 ', model: ' AMD Ryzen 5 1400 3.2GHz ', cena: 599 },
            { marka: 'amd', Socket: ' am4 ', model: ' AMD Ryzen 3 1300X 3.5GHz', cena: 499 },
            { marka: 'amd', Socket: ' am4 ', model: ' AMD Ryzen Threadripper 1900X ', cena: 1819 },
            { marka: 'amd', Socket: ' am4 ', model: ' AMD Ryzen Threadripper 1920X', cena: 3199 },
            { marka: 'intel', Socket: ' Socket 1151 ', model: ' Intel i5-7400 3.00GHz 6MB BOX', cena: 689 },
            { marka: 'intel', Socket: ' Socket 1151 ', model: ' Intel i5-8600K 3.60GHz 9MB', cena: 1059 },
            { marka: 'intel', Socket: ' Socket 1151 ', model: ' Intel i5-8400 2.80GHz 9MB BOX', cena: 749 },
            { marka: 'intel', Socket: ' Socket 1151 ', model: ' Intel i5-7500 3.40GHz 6MB BOX', cena: 779 },
            { marka: 'intel', Socket: ' Socket 1151 ', model: ' Intel i5-7600K 3.80GHz 6MB BOX ', cena: 879 },
            { marka: 'intel', Socket: ' Socket 1151 ', model: ' Intel i5-7600 3.50GHz 6MB BOX', cena: 879 },
            { marka: 'intel', Socket: ' Socket 1151 ', model: ' Intel i5-6500 3.20GHz 6MB BOX', cena: 799 },
            { marka: 'intel', Socket: ' Socket 1151 ', model: ' Intel i5-4670K 3.40GHz 6MB BOX', cena: 948 },
            { marka: 'intel', Socket: ' Socket 1151 ', model: ' Intel i5-7640X 4.00GHz 6MB BOX', cena: 948 },
            { marka: 'intel', Socket: ' Socket 1151 ', model: ' Intel i5-6600 3.30GHz 6MB BOX', cena: 929 },
            { marka: 'intel', Socket: ' Socket 1151 ', model: ' Intel i7-8700K 3.70GHz 12MB', cena: 1489 },
            { marka: 'intel', Socket: ' Socket 1151 ', model: ' Intel i7-8700 3.20GHz 12MB BOX ', cena: 1199 },
            { marka: 'intel', Socket: ' Socket 1151 ', model: ' Intel i7-7700K 4.20GHz 8MB BOX', cena: 1229 },
            { marka: 'intel', Socket: ' Socket 1151 ', model: ' Intel i7-7820X 3.6GHz 11MB BOX ', cena: 2299 },
            { marka: 'intel', Socket: ' Socket 1151 ', model: ' Intel i7-6900K 3.20GHz 20MB BOX', cena: 4172 }
        ];
        this.plytaGlowna = [
            { model: 'ASUS STRIX X99 GAMING ROG ', Socket: 'intel', Chipset: ' Intel X99', cena: 1317 },
            { model: 'ASUS X99-A II (X99 4xPCI-E DDR4)', Socket: 'intel', Chipset: ' Intel X99', cena: 1099 },
            { model: 'MSI X99A SLI (X99 3xPCI-E DDR4)', Socket: 'intel', Chipset: ' Intel X99', cena: 901 },
            { model: 'MSI X99A XPOWER GAMING TITANIUM', Socket: 'intel', Chipset: ' Intel X99', cena: 1699 },
            { model: 'ASUS STRIX X99 GAMING ROG ', Socket: 'amd', Chipset: ' Intel X99', cena: 1317 },
            { model: 'ASUS X99-A II (X99 4xPCI-E DDR4)', Socket: 'amd', Chipset: ' Intel X99', cena: 1099 },
            { model: 'MSI X99A SLI (X99 3xPCI-E DDR4)', Socket: 'amd', Chipset: ' Intel X99', cena: 901 },
            { model: 'MSI X99A XPOWER GAMING TITANIUM', Socket: 'amd', Chipset: ' Intel X99', cena: 1699 }
        ];
        this.kartaGraficzna = [
            { model: 'Palit GTX 1050 Ti Dual', Chipset: 'nivida', kartaGraficznaChipset: 'Nivida', ram: 2048, cena: 900 },
            { model: 'Palit GTX 1060 Ti Dual', Chipset: 'nivida', kartaGraficznaChipset: 'Nivida', ram: 4048, cena: 1500 },
            { model: 'Palit GTX 1070 Ti Dual', Chipset: 'nivida', kartaGraficznaChipset: 'Nivida', ram: 6070, cena: 3000 },
            { model: 'Palit GTX 1050 Ti Dual', Chipset: 'nivida', kartaGraficznaChipset: 'Nivida', ram: 2048, cena: 900 },
            { model: 'Palit GTX 1060 Ti Dual', Chipset: 'nivida', kartaGraficznaChipset: 'Nivida', ram: 4048, cena: 1500 },
            { model: 'Palit GTX 1070 Ti Dual', Chipset: 'nivida', kartaGraficznaChipset: 'amd', ram: 6070, cena: 3000 },
            { model: 'Palit GTX 1050 Ti Dual', Chipset: 'nivida', kartaGraficznaChipset: 'amd', ram: 2048, cena: 900 },
            { model: 'Palit GTX 1060 Ti Dual', Chipset: 'nivida', kartaGraficznaChipset: 'amd', ram: 4048, cena: 1500 },
            { model: 'Palit GTX 1070 Ti Dual', Chipset: 'nivida', kartaGraficznaChipset: 'amd', ram: 6070, cena: 3000 },
            { model: 'Palit GTX 1050 Ti Dual', Chipset: 'nivida', kartaGraficznaChipset: 'Nivida', ram: 2048, cena: 900 },
            { model: 'Palit GTX 1060 Ti Dual', Chipset: 'nivida', kartaGraficznaChipset: 'Nivida', ram: 4048, cena: 1500 },
            { model: 'Palit GTX 1070 Ti Dual', Chipset: 'nivida', kartaGraficznaChipset: 'Nivida', ram: 6070, cena: 3000 },
            { model: 'Palit GTX 1050 Ti Dual', Chipset: 'nivida', kartaGraficznaChipset: 'Nivida', ram: 2048, cena: 900 },
            { model: 'Palit GTX 1060 Ti Dual', Chipset: 'nivida', kartaGraficznaChipset: 'Nivida', ram: 4048, cena: 1500 },
            { model: 'Palit GTX 1070 Ti Dual', Chipset: 'nivida', kartaGraficznaChipset: 'amd', ram: 6070, cena: 3000 },
            { model: 'Palit GTX 1050 Ti Dual', Chipset: 'nivida', kartaGraficznaChipset: 'amd', ram: 2048, cena: 900 },
            { model: 'Palit GTX 1060 Ti Dual', Chipset: 'nivida', kartaGraficznaChipset: 'amd', ram: 4048, cena: 1500 },
            { model: 'Palit GTX 1070 Ti Dual', Chipset: 'nivida', kartaGraficznaChipset: 'amd', ram: 6070, cena: 3000 }
        ];
        this.pamiecRam = [
            { model: '2x 4GB Patriot 2666 MHz CL15', marka: 'Patriot', Mb: 8192, zegar: '2666', cena: 300 },
            { model: '2x 4GB Patriot 2666 MHz CL15', marka: 'Patriot', Mb: 8192, zegar: '2666', cena: 300 },
            { model: '2x 4GB Patriot 2666 MHz CL15', marka: 'Patriot', Mb: 8192, zegar: '2666', cena: 300 },
            { model: '2x 4GB Patriot 2666 MHz CL15', marka: 'Patriot', Mb: 8192, zegar: '2666', cena: 300 },
            { model: '2x 4GB Patriot 2666 MHz CL15', marka: 'Patriot', Mb: 8192, zegar: '2666', cena: 300 },
            { model: '2x 4GB Patriot 2666 MHz CL15', marka: 'Patriot', Mb: 8192, zegar: '2666', cena: 300 },
            { model: '2x 4GB Patriot 2666 MHz CL15', marka: 'Patriot', Mb: 8192, zegar: '2666', cena: 300 },
            { model: '2x 4GB Patriot 2666 MHz CL15', marka: 'Patriot', Mb: 8192, zegar: '2666', cena: 300 },
            { model: '2x 4GB Patriot 2666 MHz CL15', marka: 'Patriot', Mb: 8192, zegar: '2666', cena: 300 },
            { model: '2x 4GB Patriot 2666 MHz CL15', marka: 'Patriot', Mb: 8192, zegar: '2666', cena: 300 }
        ];
        this.dyskTwardy = [
            { model: 'Seagate Barracuda 1 TB', cache: 64, ObrMin: 7200, interfejs: 'SATA', pojemnosc: 1024, cena: 230 },
            { model: 'Seagate Barracuda 1 TB', cache: 64, ObrMin: 7200, interfejs: 'SATA', pojemnosc: 1024, cena: 230 },
            { model: 'Seagate Barracuda 1 TB', cache: 64, ObrMin: 7200, interfejs: 'SATA', pojemnosc: 1024, cena: 230 },
            { model: 'Seagate Barracuda 1 TB', cache: 64, ObrMin: 7200, interfejs: 'SATA', pojemnosc: 1024, cena: 230 },
            { model: 'Seagate Barracuda 1 TB', cache: 64, ObrMin: 7200, interfejs: 'SATA', pojemnosc: 1024, cena: 230 },
            { model: 'Seagate Barracuda 1 TB', cache: 64, ObrMin: 7200, interfejs: 'SATA', pojemnosc: 1024, cena: 230 },
            { model: 'Seagate Barracuda 1 TB', cache: 64, ObrMin: 7200, interfejs: 'SATA', pojemnosc: 1024, cena: 230 },
            { model: 'Seagate Barracuda 1 TB', cache: 64, ObrMin: 7200, interfejs: 'SATA', pojemnosc: 1024, cena: 230 },
            { model: 'Seagate Barracuda 1 TB', cache: 64, ObrMin: 7200, interfejs: 'SATA', pojemnosc: 1024, cena: 230 }
        ];
        this.Zasilacz = [
            { model: 'Thermaltake Smart SE 430W', marka: 'Thermaltake', moc: 430, wentylator: 140, cena: 230 },
            { model: 'Thermaltake Smart SE 430W', marka: 'Thermaltake', moc: 430, wentylator: 140, cena: 230 },
            { model: 'Thermaltake Smart SE 430W', marka: 'Thermaltake', moc: 430, wentylator: 140, cena: 230 },
            { model: 'Thermaltake Smart SE 430W', marka: 'Thermaltake', moc: 430, wentylator: 140, cena: 230 },
            { model: 'Thermaltake Smart SE 430W', marka: 'Thermaltake', moc: 430, wentylator: 140, cena: 230 },
            { model: 'Thermaltake Smart SE 430W', marka: 'Thermaltake', moc: 430, wentylator: 140, cena: 230 },
            { model: 'Thermaltake Smart SE 430W', marka: 'Thermaltake', moc: 430, wentylator: 140, cena: 230 },
            { model: 'Thermaltake Smart SE 430W', marka: 'Thermaltake', moc: 430, wentylator: 140, cena: 230 },
            { model: 'Thermaltake Smart SE 430W', marka: 'Thermaltake', moc: 430, wentylator: 140, cena: 230 }
        ];
        this.procesorCena = 0;
        this.plytaGlownaCena = 0;
        this.kartaGraficznaCena = 0;
        this.pamiecRamCena = 0;
        this.dyskTwardyCena = 0;
        this.ZasilaczCena = 0;
        this.procesorWybrany = 0;
        this.kartaGraficznaWybrana = 0;
    }
    AppComponent.prototype.procesorWybierz = function (procesorModel, procesorMarka, procesorCena) {
        this.procesorModel = procesorModel;
        this.procesorMarka = procesorMarka;
        this.procesorCena = procesorCena;
        this.sumuj();
    };
    AppComponent.prototype.plytaGlownaWybierz = function (model, socket, Chipset, cena) {
        this.plytaGlownaModel = model;
        this.plytaGlownaSocket = socket;
        this.plytaGlownaChipset = Chipset;
        this.plytaGlownaCena = cena;
        this.sumuj();
    };
    AppComponent.prototype.kartaGraficznaWybierz = function (model, Chipset, ram, cena) {
        this.kartaGraficznaModel = model;
        this.kartaGraficznaChipset = Chipset;
        this.kartaGraficznaRAM = ram;
        this.kartaGraficznaCena = cena;
        this.sumuj();
    };
    AppComponent.prototype.pamiecRamWybierz = function (model, marka, Mb, zegar, cena) {
        this.PamiecRamModel = model;
        this.PamiecRamMarka = marka;
        this.PamiecRamMb = Mb;
        this.PamiecRamZegar = zegar;
        this.pamiecRamCena = cena;
        this.sumuj();
    };
    AppComponent.prototype.dyskTwardyWybierz = function (model, cache, ObrMin, Interfejs, pojemnosc, cena) {
        this.dyskTwardyModel = model;
        this.dyskTwardyCache = cache;
        this.dyskTwardyObrMin = ObrMin;
        this.dyskTwardyInterfejs = Interfejs;
        this.dyskTwardyPojemnosc = pojemnosc;
        this.dyskTwardyCena = cena;
        this.sumuj();
    };
    AppComponent.prototype.ZasilaczWybierz = function (model, marka, moc, wentylator, cena) {
        this.ZasilaczModel = model;
        this.ZasilaczMarka = marka;
        this.ZasilaczMoc = moc;
        this.ZasilaczWentylator = wentylator;
        this.ZasilaczCena = cena;
        this.sumuj();
    };
    AppComponent.prototype.sumuj = function () {
        this.suma = this.procesorCena + this.plytaGlownaCena + this.kartaGraficznaCena + this.pamiecRamCena + this.dyskTwardyCena + this.ZasilaczCena;
        console.log("suma");
    };
    AppComponent.prototype.procesorFiltruj = function (opcja) {
        this.procesorWybrany = opcja;
        console.log(this.procesorWybrany);
    };
    AppComponent.prototype.kartaGraficznaFiltruj = function (opcja) {
        this.kartaGraficznaWybrana = opcja;
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material_select__ = __webpack_require__("../../../material/esm5/select.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["H" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material_select__["a" /* MatSelectModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map