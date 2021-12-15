(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "A3+G":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "zpKS");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"],
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HomePageRoutingModule);



/***/ }),

/***/ "WcN3":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\r\n  <ion-toolbar color=\"primary\" no-border>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button>\r\n        <img src=\"../../assets/menu.svg\" />\r\n      </ion-button>\r\n    </ion-buttons>\r\n\r\n    <ion-title>\r\n      Event\r\n    </ion-title>\r\n\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button>\r\n        <img src=\"../../assets/notification.svg\" />\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <div class=\"banner\">\r\n    <img src=\"../../assets/banner.svg\" />\r\n\r\n    <div class=\"caption ion-padding\">\r\n      Join with <br>\r\n      upcoming events\r\n    </div>\r\n\r\n    <div class=\"search\">\r\n      <ion-item lines=\"none\" class=\"ion-no-padding\">\r\n        <ion-icon slot=\"start\" name=\"search-outline\"></ion-icon>\r\n        <ion-input placeholder=\"Search events\"></ion-input>\r\n        <ion-button slot='end'>\r\n          <img src=\"../../assets/filter.svg\" />\r\n        </ion-button>\r\n      </ion-item>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"title\">\r\n    <h2>Popular Events</h2>\r\n\r\n    <p>See all</p>\r\n  </div>\r\n\r\n  <div class=\"event-slider\">\r\n    <ion-slides [options]=\"{ slidesPerView: 'auto', zoom: false, grabCursor: true }\" class=\"default-left-padding\">\r\n      <ion-slide>\r\n        <ion-col class=\"ion-text-left\">\r\n          <ion-card>\r\n            <ion-card-header class=\"ion-no-padding\">\r\n              <img src=\"../../assets/events/event1.svg\" />\r\n            </ion-card-header>\r\n\r\n            <ion-card-content>\r\n              <p class=\"date\">17th July, 2021</p>\r\n              <h2 class=\"eventname\">International Jazz Festival</h2>\r\n              <p class=\"location\"><ion-icon name=\"location\"></ion-icon>Caracas, Venezuela</p>\r\n\r\n              <div class=\"additional-info\">\r\n                <div class=\"attendees\">\r\n                  <img src=\"../../assets/persons/person1.svg\" />\r\n                  <img src=\"../../assets/persons/person2.svg\" />\r\n                  <img src=\"../../assets/persons/person3.svg\" />\r\n                  <img src=\"../../assets/persons/person4.svg\" />\r\n                  <div class=\"count\">\r\n                    <img src=\"../../assets/persons/person-placeholder.svg\" />\r\n\r\n                    <p>+7</p>\r\n                  </div>\r\n                </div>\r\n\r\n                <p class=\"time\">10:00pm</p>\r\n              </div>\r\n            </ion-card-content>\r\n          </ion-card>\r\n        </ion-col>\r\n      </ion-slide>\r\n      <ion-slide>\r\n        <ion-col class=\"ion-text-left\">\r\n          <ion-card>\r\n            <ion-card-header class=\"ion-no-padding\">\r\n              <img src=\"../../assets/events/event2.svg\" />\r\n            </ion-card-header>\r\n\r\n            <ion-card-content>\r\n              <p class=\"date\">23th July, 2021</p>\r\n              <h2 class=\"eventname\">Contemporary Dance</h2>\r\n              <p class=\"location\"><ion-icon name=\"location\"></ion-icon>Caracas, Venezuela</p>\r\n\r\n              <div class=\"additional-info\">\r\n                <div class=\"attendees\">\r\n                  <img src=\"../../assets/persons/person1.svg\" />\r\n                  <img src=\"../../assets/persons/person2.svg\" />\r\n                  <img src=\"../../assets/persons/person3.svg\" />\r\n                  <img src=\"../../assets/persons/person4.svg\" />\r\n                  <div class=\"count\">\r\n                    <img src=\"../../assets/persons/person-placeholder.svg\" />\r\n\r\n                    <p>+3</p>\r\n                  </div>\r\n                </div>\r\n\r\n                <p class=\"time\">10:00pm</p>\r\n              </div>\r\n            </ion-card-content>\r\n          </ion-card>\r\n        </ion-col>\r\n      </ion-slide>\r\n    </ion-slides>\r\n  </div>\r\n\r\n  <div class=\"default-top-padding title\">\r\n    <h2>Live right now</h2>\r\n\r\n    <p>See all</p>\r\n  </div>\r\n\r\n  <div class=\"live-event\">\r\n    <img src=\"../../assets/events/event3.svg\" />\r\n\r\n    <div class=\"info\">\r\n      <div class=\"content\">\r\n        <h6>World Art Day</h6>\r\n\r\n        <p class=\"stats\">\r\n          <span><ion-icon name=\"eye\"></ion-icon>&nbsp;2.3K</span><span><ion-icon name=\"heart\"></ion-icon>&nbsp;3758</span>\r\n        </p>\r\n\r\n        <p class=\"location\"><ion-icon name='location'></ion-icon>Caracas, Venezuela</p>\r\n\r\n        <div class=\"additional-info\">\r\n          <div class=\"attendees\">\r\n            <img src=\"../../assets/persons/person1.svg\" />\r\n            <img src=\"../../assets/persons/person2.svg\" />\r\n            <img src=\"../../assets/persons/person3.svg\" />\r\n            <img src=\"../../assets/persons/person4.svg\" />\r\n            <div class=\"count\">\r\n              <img src=\"../../assets/persons/person-placeholder.svg\" />\r\n\r\n              <p>+3</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"indicator\">\r\n        <div>Live</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "ct+p":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.page */ "zpKS");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-routing.module */ "A3+G");







let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomePageRoutingModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "f6od":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header {\n  position: absolute;\n}\nion-header ion-toolbar {\n  padding-left: 14px;\n  padding-right: 14px;\n}\nion-header ion-toolbar ion-title {\n  --color: white;\n  font-size: 18px;\n}\n.default-left-padding {\n  padding-left: 26px;\n}\n.default-top-padding {\n  padding-top: 26px !important;\n}\nion-content .banner {\n  position: relative;\n}\nion-content .banner img {\n  width: 100%;\n}\nion-content .banner .caption {\n  position: absolute;\n  width: 100%;\n  bottom: 55px;\n  font-size: 26px;\n  color: white;\n  padding-left: 26px;\n  padding-right: 26px;\n}\nion-content .banner .search {\n  position: absolute;\n  bottom: -40px;\n  width: calc(100% - 52px);\n  background: white;\n  margin: 16px 26px 16px 26px;\n  padding: 5px 16px 5px 16px;\n  border-radius: 10px;\n  box-shadow: 0px 3px 12px 2px rgba(0, 0, 0, 0.16);\n}\nion-content .banner .search ion-item {\n  --inner-padding-end: 0 !important;\n}\nion-content .banner .search ion-item ion-input {\n  --placeholder-color: #212121 !important;\n  --placeholder-opacity: 0.5;\n  --color: #21212150 !important;\n}\nion-content .banner .search ion-item ion-icon {\n  color: #21212150 !important;\n  margin-right: 10px;\n}\nion-content .banner .search ion-item ion-button {\n  height: 35px;\n  margin-right: 0 !important;\n  --box-shadow: none;\n}\nion-content .banner .search ion-item ion-button img {\n  transform: rotateZ(90deg);\n}\nion-content .title {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 42px 26px 16px 26px;\n}\nion-content .title h2 {\n  margin: 0;\n  font-size: 20px;\n  font-weight: bold;\n  color: #364F6B;\n}\nion-content .title p {\n  margin: 0;\n  font-size: 14px;\n  color: var(--ion-color-primary);\n}\nion-content .event-slider ion-slide {\n  width: 60%;\n  margin-right: 30px;\n}\nion-content .event-slider ion-slide ion-col {\n  padding-left: 0;\n}\nion-content .event-slider ion-slide ion-col ion-card {\n  width: 100%;\n  border-radius: 12px;\n  box-shadow: 0px 4px 12px 2px rgba(0, 0, 0, 0.16);\n  margin-left: 0;\n  margin-top: 0;\n}\nion-content .event-slider ion-slide ion-col ion-card ion-card-header img {\n  width: 100%;\n}\nion-content .event-slider ion-slide ion-col ion-card ion-card-content {\n  padding-top: 13px;\n}\nion-content .event-slider ion-slide ion-col ion-card ion-card-content .date {\n  color: #364F6B;\n  font-size: 10px;\n  margin-bottom: 5px;\n}\nion-content .event-slider ion-slide ion-col ion-card ion-card-content .eventname {\n  color: #364F6B;\n  font-size: 14px;\n  font-weight: bold;\n  margin-bottom: 5px;\n}\nion-content .event-slider ion-slide ion-col ion-card ion-card-content .location {\n  display: flex;\n  align-items: center;\n  color: var(--ion-color-primary);\n  font-size: 10px;\n  margin-bottom: 5px;\n}\nion-content .live-event {\n  border-radius: 10px;\n  box-shadow: 0px 3px 12px 2px rgba(0, 0, 0, 0.16);\n  margin: 0 26px 26px 26px;\n  display: flex;\n  justify-content: space-between;\n}\nion-content .live-event img {\n  border-radius: 10px 0 0 10px;\n  object-fit: cover;\n}\nion-content .live-event .info {\n  padding: 10px;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n}\nion-content .live-event .info .content h6 {\n  color: #364F6B;\n  font-size: 14px;\n  font-weight: bold;\n  margin-bottom: 5px;\n  margin-top: 0px;\n}\nion-content .live-event .info .content .location {\n  display: flex;\n  align-items: center;\n  color: var(--ion-color-primary);\n  font-size: 10px;\n  margin-bottom: 5px;\n  margin-top: 0;\n}\nion-content .live-event .info .content .stats {\n  display: flex;\n  margin-bottom: 5px;\n  margin-top: 0;\n}\nion-content .live-event .info .content .stats span {\n  display: flex;\n  align-items: center;\n  color: #364F6B80;\n  font-size: 10px;\n  margin-right: 10px;\n}\nion-content .live-event .info .indicator {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nion-content .live-event .info .indicator div {\n  background: #FFE6E6;\n  border-radius: 12px;\n  padding: 15px;\n  color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUFDRjtBQUNFO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQUNKO0FBQ0k7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQUNOO0FBSUE7RUFDRSxrQkFBQTtBQURGO0FBSUE7RUFDRSw0QkFBQTtBQURGO0FBS0U7RUFDRSxrQkFBQTtBQUZKO0FBSUk7RUFDRSxXQUFBO0FBRk47QUFLSTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFITjtBQU1JO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0Esd0JBQUE7RUFDQSxpQkFBQTtFQUNBLDJCQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQkFBQTtFQUNBLGdEQUFBO0FBSk47QUFNTTtFQUNFLGlDQUFBO0FBSlI7QUFNUTtFQUNFLHVDQUFBO0VBQ0EsMEJBQUE7RUFDQSw2QkFBQTtBQUpWO0FBT1E7RUFDRSwyQkFBQTtFQUNBLGtCQUFBO0FBTFY7QUFRUTtFQUNFLFlBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0FBTlY7QUFRVTtFQUNFLHlCQUFBO0FBTlo7QUFhRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7QUFYSjtBQWFJO0VBQ0UsU0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFYTjtBQWNJO0VBQ0UsU0FBQTtFQUNBLGVBQUE7RUFDQSwrQkFBQTtBQVpOO0FBaUJJO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0FBZk47QUFpQk07RUFDRSxlQUFBO0FBZlI7QUFpQlE7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxnREFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0FBZlY7QUFrQlk7RUFDRSxXQUFBO0FBaEJkO0FBb0JVO0VBQ0UsaUJBQUE7QUFsQlo7QUFvQlk7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBbEJkO0FBcUJZO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBbkJkO0FBc0JZO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsK0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFwQmQ7QUE0QkU7RUFDRSxtQkFBQTtFQUNBLGdEQUFBO0VBQ0Esd0JBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7QUExQko7QUE0Qkk7RUFDRSw0QkFBQTtFQUNBLGlCQUFBO0FBMUJOO0FBNkJJO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7QUEzQk47QUE4QlE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBNUJWO0FBK0JRO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsK0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FBN0JWO0FBZ0NRO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQTlCVjtBQWdDVTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBOUJaO0FBbUNNO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFqQ1I7QUFtQ1E7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLCtCQUFBO0FBakNWIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG5cclxuICBpb24tdG9vbGJhciB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE0cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNHB4O1xyXG5cclxuICAgIGlvbi10aXRsZSB7XHJcbiAgICAgIC0tY29sb3I6IHdoaXRlO1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uZGVmYXVsdC1sZWZ0LXBhZGRpbmcge1xyXG4gIHBhZGRpbmctbGVmdDogMjZweDtcclxufVxyXG5cclxuLmRlZmF1bHQtdG9wLXBhZGRpbmcge1xyXG4gIHBhZGRpbmctdG9wOiAyNnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi1jb250ZW50IHtcclxuICAuYmFubmVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICBpbWcge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAuY2FwdGlvbiB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGJvdHRvbTogNTVweDtcclxuICAgICAgZm9udC1zaXplOiAyNnB4O1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMjZweDtcclxuICAgICAgcGFkZGluZy1yaWdodDogMjZweDtcclxuICAgIH1cclxuXHJcbiAgICAuc2VhcmNoIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBib3R0b206IC00MHB4O1xyXG4gICAgICB3aWR0aDogY2FsYygxMDAlIC0gNTJweCk7XHJcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICBtYXJnaW46IDE2cHggMjZweCAxNnB4IDI2cHg7XHJcbiAgICAgIHBhZGRpbmc6IDVweCAxNnB4IDVweCAxNnB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICBib3gtc2hhZG93OiAwcHggM3B4IDEycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XHJcblxyXG4gICAgICBpb24taXRlbSB7XHJcbiAgICAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMCAhaW1wb3J0YW50O1xyXG5cclxuICAgICAgICBpb24taW5wdXQge1xyXG4gICAgICAgICAgLS1wbGFjZWhvbGRlci1jb2xvcjogIzIxMjEyMSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAwLjU7XHJcbiAgICAgICAgICAtLWNvbG9yOiAjMjEyMTIxNTAgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgIGNvbG9yOiAjMjEyMTIxNTAgIWltcG9ydGFudDtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAgICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAtLWJveC1zaGFkb3c6IG5vbmU7XHJcblxyXG4gICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVaKDkwZGVnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC50aXRsZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDQycHggMjZweCAxNnB4IDI2cHg7XHJcblxyXG4gICAgaDIge1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGNvbG9yOiAjMzY0RjZCO1xyXG4gICAgfVxyXG5cclxuICAgIHAge1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5ldmVudC1zbGlkZXIge1xyXG4gICAgaW9uLXNsaWRlIHtcclxuICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG5cclxuICAgICAgaW9uLWNvbCB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xyXG5cclxuICAgICAgICBpb24tY2FyZCB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICAgICAgICBib3gtc2hhZG93OiAwcHggNHB4IDEycHggMnB4IHJnYmEoMCwwLDAsMC4xNik7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDA7XHJcblxyXG4gICAgICAgICAgaW9uLWNhcmQtaGVhZGVyIHtcclxuICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGlvbi1jYXJkLWNvbnRlbnQge1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMTNweDtcclxuXHJcbiAgICAgICAgICAgIC5kYXRlIHtcclxuICAgICAgICAgICAgICBjb2xvcjogIzM2NEY2QjtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuZXZlbnRuYW1lIHtcclxuICAgICAgICAgICAgICBjb2xvcjogIzM2NEY2QjtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAubG9jYXRpb24ge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5saXZlLWV2ZW50IHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggM3B4IDEycHggMnB4IHJnYmEoMCwwLDAsMC4xNik7XHJcbiAgICBtYXJnaW46IDAgMjZweCAyNnB4IDI2cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAgIGltZyB7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMCAwIDEwcHg7XHJcbiAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5pbmZvIHtcclxuICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgICAgIC5jb250ZW50IHtcclxuICAgICAgICBoNiB7XHJcbiAgICAgICAgICBjb2xvcjogIzM2NEY2QjtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmxvY2F0aW9uIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc3RhdHMge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDA7XHJcblxyXG4gICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMzY0RjZCODA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLmluZGljYXRvciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICBkaXYge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogI0ZGRTZFNjtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "zpKS":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home.page.html */ "WcN3");
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.page.scss */ "f6od");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let HomePage = class HomePage {
    constructor() { }
};
HomePage.ctorParameters = () => [];
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map