(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["free-event-free-event-module"],{

/***/ "5sH1":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/free-event/free-event.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>FreeEvent</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "iqTf":
/*!*************************************************!*\
  !*** ./src/app/free-event/free-event.module.ts ***!
  \*************************************************/
/*! exports provided: FreeEventPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FreeEventPageModule", function() { return FreeEventPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _free_event_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./free-event-routing.module */ "kvQx");
/* harmony import */ var _free_event_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./free-event.page */ "znm5");







let FreeEventPageModule = class FreeEventPageModule {
};
FreeEventPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _free_event_routing_module__WEBPACK_IMPORTED_MODULE_5__["FreeEventPageRoutingModule"]
        ],
        declarations: [_free_event_page__WEBPACK_IMPORTED_MODULE_6__["FreeEventPage"]]
    })
], FreeEventPageModule);



/***/ }),

/***/ "kvQx":
/*!*********************************************************!*\
  !*** ./src/app/free-event/free-event-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: FreeEventPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FreeEventPageRoutingModule", function() { return FreeEventPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _free_event_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./free-event.page */ "znm5");




const routes = [
    {
        path: '',
        component: _free_event_page__WEBPACK_IMPORTED_MODULE_3__["FreeEventPage"]
    }
];
let FreeEventPageRoutingModule = class FreeEventPageRoutingModule {
};
FreeEventPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FreeEventPageRoutingModule);



/***/ }),

/***/ "xOx4":
/*!*************************************************!*\
  !*** ./src/app/free-event/free-event.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmcmVlLWV2ZW50LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "znm5":
/*!***********************************************!*\
  !*** ./src/app/free-event/free-event.page.ts ***!
  \***********************************************/
/*! exports provided: FreeEventPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FreeEventPage", function() { return FreeEventPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_free_event_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./free-event.page.html */ "5sH1");
/* harmony import */ var _free_event_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./free-event.page.scss */ "xOx4");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let FreeEventPage = class FreeEventPage {
    constructor() { }
    ngOnInit() {
    }
};
FreeEventPage.ctorParameters = () => [];
FreeEventPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-free-event',
        template: _raw_loader_free_event_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_free_event_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], FreeEventPage);



/***/ })

}]);
//# sourceMappingURL=free-event-free-event-module.js.map