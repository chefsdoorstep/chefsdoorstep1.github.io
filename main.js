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

/***/ "./src/app/Homepage/Services/chef-service.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/Homepage/Services/chef-service.service.ts ***!
  \***********************************************************/
/*! exports provided: ChefService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChefService", function() { return ChefService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class ChefService {
    constructor(http) {
        this.http = http;
        this.status = ['OUTOFSTOCK', 'INSTOCK', 'LOWSTOCK'];
        this.productNames = [
            "Bamboo Watch",
            "Black Watch",
            "Blue Band",
            "Blue T-Shirt",
            "Bracelet",
            "Brown Purse",
            "Chakra Bracelet",
            "Galaxy Earrings",
            "Game Controller",
            "Gaming Set",
            "Gold Phone Case",
            "Green Earbuds",
            "Green T-Shirt",
            "Grey T-Shirt",
            "Headphones",
            "Light Green T-Shirt",
            "Lime Band",
            "Mini Speakers",
            "Painted Phone Case",
            "Pink Band",
            "Pink Purse",
            "Purple Band",
            "Purple Gemstone Necklace",
            "Purple T-Shirt",
            "Shoes",
            "Sneakers",
            "Teal T-Shirt",
            "Yellow Earbuds",
            "Yoga Mat",
            "Yoga Set",
        ];
    }
    getProductsSmall() {
        return this.http.get('assets/products-small.json')
            .toPromise()
            .then(res => res.data)
            .then(data => { return data; });
    }
    getChefs() {
        return this.http.get('assets/chefs.json')
            .toPromise()
            .then(res => res.data)
            .then(data => { return data; });
    }
    getProductsWithOrdersSmall() {
        return this.http.get('assets/products-orders-small.json')
            .toPromise()
            .then(res => res.data)
            .then(data => { return data; });
    }
    generatePrduct() {
        const product = {
            id: this.generateId(),
            name: this.generateName(),
            description: "Product Description",
            price: this.generatePrice(),
            quantity: this.generateQuantity(),
            category: "Product Category",
            inventoryStatus: this.generateStatus(),
            rating: this.generateRating()
        };
        product.image = product.name.toLocaleLowerCase().split(/[ ,]+/).join('-') + ".jpg";
        ;
        return product;
    }
    generateId() {
        let text = "";
        let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < 5; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    }
    generateName() {
        return this.productNames[Math.floor(Math.random() * Math.floor(30))];
    }
    generatePrice() {
        return Math.floor(Math.random() * Math.floor(299) + 1);
    }
    generateQuantity() {
        return Math.floor(Math.random() * Math.floor(75) + 1);
    }
    generateStatus() {
        return this.status[Math.floor(Math.random() * Math.floor(3))];
    }
    generateRating() {
        return Math.floor(Math.random() * Math.floor(5) + 1);
    }
}
ChefService.ɵfac = function ChefService_Factory(t) { return new (t || ChefService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ChefService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ChefService, factory: ChefService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChefService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/Homepage/download-app/download-app.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/Homepage/download-app/download-app.component.ts ***!
  \*****************************************************************/
/*! exports provided: DownloadAppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadAppComponent", function() { return DownloadAppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class DownloadAppComponent {
    constructor() { }
    ngOnInit() {
    }
}
DownloadAppComponent.ɵfac = function DownloadAppComponent_Factory(t) { return new (t || DownloadAppComponent)(); };
DownloadAppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DownloadAppComponent, selectors: [["app-download-app"]], decls: 0, vars: 0, template: function DownloadAppComponent_Template(rf, ctx) { }, styles: ["section[_ngcontent-%COMP%] {\n  background: #000;\n  color: #fff;\n  \n  overflow: hidden;\n  flex-direction: column;\n}\nsection[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  display: none;\n}\ndiv[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin: 2em auto;\n}\n.download[_ngcontent-%COMP%] {\n  flex-basis: 25%;\n  align-self: center;\n  margin: 1em 3em;\n}\n@media screen and (min-width: 1024px) {\n  section[_ngcontent-%COMP%] {\n    flex-direction: row;\n    max-height: 50vh;\n  }\n  section[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n    display: flex;\n    height: -webkit-fit-content;\n    height: -moz-fit-content;\n    height: fit-content;\n  }\n\n  .download[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: 3em;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvSG9tZXBhZ2UvZG93bmxvYWQtYXBwL2Rvd25sb2FkLWFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjtBQUNBO0VBQ0U7SUFDRSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxhQUFhO0lBQ2IsMkJBQW1CO0lBQW5CLHdCQUFtQjtJQUFuQixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSx5Q0FBeUM7SUFDekMsY0FBYztFQUNoQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvSG9tZXBhZ2UvZG93bmxvYWQtYXBwL2Rvd25sb2FkLWFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsic2VjdGlvbiB7XG4gIGJhY2tncm91bmQ6ICMwMDA7XG4gIGNvbG9yOiAjZmZmO1xuICAvKiBwYWRkaW5nOiAyZW0gMTVlbTsgKi9cbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbnNlY3Rpb24gPiBpbWcge1xuICBkaXNwbGF5OiBub25lO1xufVxuZGl2IGltZyB7XG4gIG1hcmdpbjogMmVtIGF1dG87XG59XG4uZG93bmxvYWQge1xuICBmbGV4LWJhc2lzOiAyNSU7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgbWFyZ2luOiAxZW0gM2VtO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gIHNlY3Rpb24ge1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgbWF4LWhlaWdodDogNTB2aDtcbiAgfVxuICBzZWN0aW9uID4gaW1nIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gIH1cblxuICAuZG93bmxvYWQgaDEge1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogM2VtO1xuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DownloadAppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-download-app',
                templateUrl: './download-app.component.html',
                styleUrls: ['./download-app.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/Homepage/header/header.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/Homepage/header/header.component.ts ***!
  \*****************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 32, vars: 0, consts: [["role", "banner"], [1, "toolbar"], [1, "flex-row"], ["alt", "Delivery Van Logo", "src", "../../assets/food-van.png"], [2, "align-self", "center"], ["routerLink", "/delivery", "routerLinkActive", "active"], ["routerLink", "/signin", "routerLinkActive", "active"], [1, "last"], ["routerLink", "/becomechef", "routerLinkActive", "active"], [1, "flex-row", "sec-head", 2, "justify-content", "space-between"], [1, "flex-row", "second-header"], ["routerLink", "/home", "routerLinkActive", "active"], ["routerLink", "/paymentmethods", "routerLinkActive", "active"], ["routerLink", "/myorders", "routerLinkActive", "active"], ["routerLink", "/cart", "routerLinkActive", "active"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Order your favourite food");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Food Delivery");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Sign In");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Become a Chef");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ul", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Payment Methods");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "My Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "My Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], styles: ["header[_ngcontent-%COMP%] {\n  font-size: 0.7em;\n}\nnav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{\n  color: white;\n  text-decoration: none;\n}\n.sec-head[_ngcontent-%COMP%]{\n  justify-content: space-between;\n  position: relative;\n  top: 32px;\n  width: 100%;\n  bottom: 30px;\n  margin-bottom: 18px;\n\n}\n.toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  color: #ffffffc7;\n  align-items: center;\n  justify-content: space-between;\n  background-color: #2853f2cf;\n  position: fixed;\n  width: 100%;\n}\nimg[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n}\nli[_ngcontent-%COMP%] {\n  list-style-type: none;\n  padding: 0.5em 0.3em;\n}\n\n@media screen and (min-width: 768px) and (max-width: 1024px) {\n  header[_ngcontent-%COMP%] {\n    font-size: 0.7em;\n  }\n  li[_ngcontent-%COMP%] {\n    padding: 1em 1em;\n  }\n}\n@media screen and (min-width: 1024px) {\n  header[_ngcontent-%COMP%] {\n    font-size: 1em;\n  }\n  .toolbar[_ngcontent-%COMP%] {\n    height: 60px;\n    margin: -8px;\n    font-weight: 600;\n  }\n  img[_ngcontent-%COMP%] {\n    width: 40px;\n    height:40px\n  }\n  .toolbar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin: 0 16px;\n  }\n  li[_ngcontent-%COMP%] {\n    padding: 1em 2em;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvSG9tZXBhZ2UvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxZQUFZO0VBQ1oscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSw4QkFBOEI7RUFDOUIsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjs7QUFFckI7QUFDQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QiwyQkFBMkI7RUFDM0IsZUFBZTtFQUNmLFdBQVc7QUFDYjtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDtBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLG9CQUFvQjtBQUN0QjtBQUVBLHVDQUF1QztBQUN2QztFQUNFO0lBQ0UsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxnQkFBZ0I7RUFDbEI7QUFDRjtBQUVBO0VBQ0U7SUFDRSxjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxZQUFZO0lBQ1osWUFBWTtJQUNaLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsV0FBVztJQUNYO0VBQ0Y7RUFDQTtJQUNFLGNBQWM7RUFDaEI7RUFDQTtJQUNFLGdCQUFnQjtFQUNsQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvSG9tZXBhZ2UvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaGVhZGVyIHtcbiAgZm9udC1zaXplOiAwLjdlbTtcbn1cbm5hdiBsaT5he1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5zZWMtaGVhZHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMzJweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvdHRvbTogMzBweDtcbiAgbWFyZ2luLWJvdHRvbTogMThweDtcblxufVxuLnRvb2xiYXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBjb2xvcjogI2ZmZmZmZmM3O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJhY2tncm91bmQtY29sb3I6ICMyODUzZjJjZjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbn1cbmltZyB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG59XG5cbmxpIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBwYWRkaW5nOiAwLjVlbSAwLjNlbTtcbn1cblxuLyogRm9yIFNjcmVlbnMgQmlnZ2VyIHRoYW4gNzAwIHBpeGVscyAqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgaGVhZGVyIHtcbiAgICBmb250LXNpemU6IDAuN2VtO1xuICB9XG4gIGxpIHtcbiAgICBwYWRkaW5nOiAxZW0gMWVtO1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xuICBoZWFkZXIge1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICB9XG4gIC50b29sYmFyIHtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgbWFyZ2luOiAtOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIH1cbiAgaW1nIHtcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6NDBweFxuICB9XG4gIC50b29sYmFyIGltZyB7XG4gICAgbWFyZ2luOiAwIDE2cHg7XG4gIH1cbiAgbGkge1xuICAgIHBhZGRpbmc6IDFlbSAyZW07XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/Homepage/home.component.ts":
/*!********************************************!*\
  !*** ./src/app/Homepage/home.component.ts ***!
  \********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ "./src/app/Homepage/header/header.component.ts");
/* harmony import */ var _jumbotron_jumbotron_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./jumbotron/jumbotron.component */ "./src/app/Homepage/jumbotron/jumbotron.component.ts");
/* harmony import */ var _recommended_recommended_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./recommended/recommended.component */ "./src/app/Homepage/recommended/recommended.component.ts");
/* harmony import */ var _how_it_works_how_it_works_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./how-it-works/how-it-works.component */ "./src/app/Homepage/how-it-works/how-it-works.component.ts");
/* harmony import */ var _popular_resturants_popular_resturants_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./popular-resturants/popular-resturants.component */ "./src/app/Homepage/popular-resturants/popular-resturants.component.ts");
/* harmony import */ var _download_app_download_app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./download-app/download-app.component */ "./src/app/Homepage/download-app/download-app.component.ts");
/* harmony import */ var _testimonies_testimonies_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./testimonies/testimonies.component */ "./src/app/Homepage/testimonies/testimonies.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../footer/footer.component */ "./src/app/footer/footer.component.ts");










class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 8, vars: 0, template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-jumbotron");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-recommended");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-how-it-works");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-popular-resturants");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-download-app");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-testimonies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-footer");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _jumbotron_jumbotron_component__WEBPACK_IMPORTED_MODULE_2__["JumbotronComponent"], _recommended_recommended_component__WEBPACK_IMPORTED_MODULE_3__["RecommendedComponent"], _how_it_works_how_it_works_component__WEBPACK_IMPORTED_MODULE_4__["HowItWorksComponent"], _popular_resturants_popular_resturants_component__WEBPACK_IMPORTED_MODULE_5__["PopularResturantsComponent"], _download_app_download_app_component__WEBPACK_IMPORTED_MODULE_6__["DownloadAppComponent"], _testimonies_testimonies_component__WEBPACK_IMPORTED_MODULE_7__["TestimoniesComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0hvbWVwYWdlL2hvbWUuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/Homepage/how-it-works/how-it-works.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/Homepage/how-it-works/how-it-works.component.ts ***!
  \*****************************************************************/
/*! exports provided: HowItWorksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HowItWorksComponent", function() { return HowItWorksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _cards_how_it_works_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../cards/how-it-works/card.component */ "./src/app/cards/how-it-works/card.component.ts");




function HowItWorksComponent_app_how_card_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-how-card", 2);
} if (rf & 2) {
    const guide_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("guideDetail", guide_r1);
} }
class HowItWorksComponent {
    constructor() {
        this.guides = [
            {
                title: 'Select Your Desired Chef',
                content: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum '
            },
            {
                title: 'Select Your Desired Meal',
                content: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum '
            },
            {
                title: 'Get It Delivered Fast',
                content: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum '
            }
        ];
    }
    ngOnInit() { }
}
HowItWorksComponent.ɵfac = function HowItWorksComponent_Factory(t) { return new (t || HowItWorksComponent)(); };
HowItWorksComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HowItWorksComponent, selectors: [["app-how-it-works"]], decls: 5, vars: 1, consts: [[1, "flex-row", "card-container"], [3, "guideDetail", 4, "ngFor", "ngForOf"], [3, "guideDetail"]], template: function HowItWorksComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "How it Works");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HowItWorksComponent_app_how_card_4_Template, 1, 1, "app-how-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.guides);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _cards_how_it_works_card_component__WEBPACK_IMPORTED_MODULE_2__["HowItWorksCardComponent"]], styles: ["section[_ngcontent-%COMP%] {\n  background: #630f24;\n  padding: 2em 1em;\n}\nh1[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #fff;\n}\n.card-container[_ngcontent-%COMP%] {\n  width: 70%;\n  margin: 1em auto;\n}\n@media screen and (max-width:768px){\n  .card-container[_ngcontent-%COMP%]{\n    flex-direction: column;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvSG9tZXBhZ2UvaG93LWl0LXdvcmtzL2hvdy1pdC13b3Jrcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjtBQUNBO0VBQ0UsVUFBVTtFQUNWLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0U7SUFDRSxzQkFBc0I7RUFDeEI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL0hvbWVwYWdlL2hvdy1pdC13b3Jrcy9ob3ctaXQtd29ya3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInNlY3Rpb24ge1xuICBiYWNrZ3JvdW5kOiAjNjMwZjI0O1xuICBwYWRkaW5nOiAyZW0gMWVtO1xufVxuaDEge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZmZmO1xufVxuLmNhcmQtY29udGFpbmVyIHtcbiAgd2lkdGg6IDcwJTtcbiAgbWFyZ2luOiAxZW0gYXV0bztcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzY4cHgpe1xuICAuY2FyZC1jb250YWluZXJ7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HowItWorksComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-how-it-works',
                templateUrl: './how-it-works.component.html',
                styleUrls: ['./how-it-works.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/Homepage/jumbotron/jumbotron.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/Homepage/jumbotron/jumbotron.component.ts ***!
  \***********************************************************/
/*! exports provided: JumbotronComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JumbotronComponent", function() { return JumbotronComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function JumbotronComponent_option_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const city_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", city_r2.city, " ");
} }
function JumbotronComponent_option_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const area_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", area_r3, " ");
} }
class JumbotronComponent {
    constructor() {
        this.cities = [
            {
                city: 'Lagos',
                area: ['Ikorodu', 'Badagry', 'Lekki', 'Victoria Island', 'Ajah']
            },
            { city: 'Osun', area: ['Aagba', 'Ada', 'Ikirun', 'Ilesa ', 'Ibokun'] },
            {
                city: 'Ekiti',
                area: ['Ado-Ekiti', 'Oye-Ekiti', 'Ido', 'Aramoko ', 'Erio-Ekiti']
            }
        ];
        this.areas = [];
        this.city = '';
        this.area = '';
    }
    processIt() {
        this.areas = this.cities.find(city => city.city == this.city)
            ? this.cities.find(city => city.city == this.city).area
            : [];
    }
    ngOnInit() { }
}
JumbotronComponent.ɵfac = function JumbotronComponent_Factory(t) { return new (t || JumbotronComponent)(); };
JumbotronComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: JumbotronComponent, selectors: [["app-jumbotron"]], decls: 16, vars: 4, consts: [[1, "flex-column", "main-center", "cross-center"], [1, "flex-row"], ["name", "city", "required", "", 1, "city", 3, "ngModel", "ngModelChange", "change"], ["value", ""], [4, "ngFor", "ngForOf"], ["name", "area", 3, "ngModel", "ngModelChange"]], template: function JumbotronComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Food Delivery Directly ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " To Your Door Step ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "select", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function JumbotronComponent_Template_select_ngModelChange_6_listener($event) { return ctx.city = $event; })("change", function JumbotronComponent_Template_select_change_6_listener() { return ctx.processIt(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Select City");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, JumbotronComponent_option_9_Template, 2, 1, "option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "select", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function JumbotronComponent_Template_select_ngModelChange_10_listener($event) { return ctx.area = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Select Area");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, JumbotronComponent_option_13_Template, 2, 1, "option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Find Chefs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.city);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cities);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.area);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.areas);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["section[_ngcontent-%COMP%] {\n  background-image: url('Mask Group 4.png');\n  min-height: 50vh;\n  background-size: cover;\n  background-repeat: round;\n}\nh2[_ngcontent-%COMP%] {\n  color: #420000;\n  font-family: 'Arial';\n  text-align: center;\n  font-weight: 800;\n  margin: 1em;\n}\n\nselect[_ngcontent-%COMP%], button[_ngcontent-%COMP%] {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  border: none;\n  border-radius: 0px;\n  padding: 1em;\n  background: #fff;\n}\n.city[_ngcontent-%COMP%] {\n  border-right: #420000 solid 1px;\n  border-radius: 2.5em 0em 0em 2.5em;\n}\nbutton[_ngcontent-%COMP%] {\n  border-radius: 0em 2.5em 2.5em 0em;\n  background: #420000;\n  color: #fff;\n}\n@media screen and (min-width: 1024px) {\n  section[_ngcontent-%COMP%] {\n    background-size: contain;\n    background-repeat: round;\n  }\n  h2[_ngcontent-%COMP%] {\n    font-size: 2em;\n  }\n\n  \n  select[_ngcontent-%COMP%], button[_ngcontent-%COMP%] {\n    flex-basis: 33%;\n    font-size: 1.3em;\n  }\n\n  form[_ngcontent-%COMP%] {\n    width: 60%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvSG9tZXBhZ2UvanVtYm90cm9uL2p1bWJvdHJvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUNBQXlEO0VBQ3pELGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsd0JBQXdCO0FBQzFCO0FBQ0E7RUFDRSxjQUFjO0VBQ2Qsb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsV0FBVztBQUNiO0FBRUEsaUJBQWlCO0FBQ2pCOztFQUVFLHdCQUFnQjtLQUFoQixxQkFBZ0I7VUFBaEIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLGtDQUFrQztBQUNwQztBQUNBO0VBQ0Usa0NBQWtDO0VBQ2xDLG1CQUFtQjtFQUNuQixXQUFXO0FBQ2I7QUFFQTtFQUNFO0lBQ0Usd0JBQXdCO0lBQ3hCLHdCQUF3QjtFQUMxQjtFQUNBO0lBQ0UsY0FBYztFQUNoQjs7RUFFQSxpQkFBaUI7RUFDakI7O0lBRUUsZUFBZTtJQUNmLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLFVBQVU7RUFDWjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvSG9tZXBhZ2UvanVtYm90cm9uL2p1bWJvdHJvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsic2VjdGlvbiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL01hc2sgR3JvdXAgNC5wbmcnKTtcbiAgbWluLWhlaWdodDogNTB2aDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJvdW5kO1xufVxuaDIge1xuICBjb2xvcjogIzQyMDAwMDtcbiAgZm9udC1mYW1pbHk6ICdBcmlhbCc7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgbWFyZ2luOiAxZW07XG59XG5cbi8qKkZvcm0gU3R5bGluZyoqL1xuc2VsZWN0LFxuYnV0dG9uIHtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG4gIHBhZGRpbmc6IDFlbTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cblxuLmNpdHkge1xuICBib3JkZXItcmlnaHQ6ICM0MjAwMDAgc29saWQgMXB4O1xuICBib3JkZXItcmFkaXVzOiAyLjVlbSAwZW0gMGVtIDIuNWVtO1xufVxuYnV0dG9uIHtcbiAgYm9yZGVyLXJhZGl1czogMGVtIDIuNWVtIDIuNWVtIDBlbTtcbiAgYmFja2dyb3VuZDogIzQyMDAwMDtcbiAgY29sb3I6ICNmZmY7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xuICBzZWN0aW9uIHtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJvdW5kO1xuICB9XG4gIGgyIHtcbiAgICBmb250LXNpemU6IDJlbTtcbiAgfVxuXG4gIC8qKkZvcm0gU3R5bGluZyoqL1xuICBzZWxlY3QsXG4gIGJ1dHRvbiB7XG4gICAgZmxleC1iYXNpczogMzMlO1xuICAgIGZvbnQtc2l6ZTogMS4zZW07XG4gIH1cblxuICBmb3JtIHtcbiAgICB3aWR0aDogNjAlO1xuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JumbotronComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-jumbotron',
                templateUrl: './jumbotron.component.html',
                styleUrls: ['./jumbotron.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/Homepage/popular-resturants/popular-resturants.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/Homepage/popular-resturants/popular-resturants.component.ts ***!
  \*****************************************************************************/
/*! exports provided: PopularResturantsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopularResturantsComponent", function() { return PopularResturantsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class PopularResturantsComponent {
    constructor() {
        this.foods = [
            { name: 'Jollof Rice', rating: 4 },
            { name: 'Jollof Rice', rating: 4 },
            { name: 'Jollof Rice', rating: 4 },
            { name: 'Jollof Rice', rating: 4 }
        ];
    }
    ngOnInit() { }
}
PopularResturantsComponent.ɵfac = function PopularResturantsComponent_Factory(t) { return new (t || PopularResturantsComponent)(); };
PopularResturantsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PopularResturantsComponent, selectors: [["app-popular-resturants"]], decls: 0, vars: 0, template: function PopularResturantsComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0hvbWVwYWdlL3BvcHVsYXItcmVzdHVyYW50cy9wb3B1bGFyLXJlc3R1cmFudHMuY29tcG9uZW50LmNzcyJ9 */", "[_nghost-%COMP%]     .p-dropdown {\n  width: 14rem;\n  font-weight: normal;\n}\n[_nghost-%COMP%]     .product-name {\n  font-size: 1.5rem;\n  font-weight: 700;\n}\n[_nghost-%COMP%]     .product-description {\n  margin: 0 0 1rem 0;\n}\n[_nghost-%COMP%]     .product-category-icon {\n  vertical-align: middle;\n  margin-right: 0.5rem;\n}\n[_nghost-%COMP%]     .product-category {\n  font-weight: 600;\n  vertical-align: middle;\n}\n[_nghost-%COMP%]     .product-list-item {\n  display: flex;\n  align-items: center;\n  padding: 1rem;\n  width: 100%;\n}\n[_nghost-%COMP%]     .product-list-item img {\n  width: 150px;\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n  margin-right: 2rem;\n}\n[_nghost-%COMP%]     .product-list-item .product-list-detail {\n  flex: 1 1 0;\n}\n[_nghost-%COMP%]     .product-list-item .p-rating {\n  margin: 0 0 0.5rem 0;\n}\n[_nghost-%COMP%]     .product-list-item .product-price {\n  font-size: 1.5rem;\n  font-weight: 600;\n  margin-bottom: 0.5rem;\n  align-self: flex-end;\n}\n[_nghost-%COMP%]     .product-list-item .product-list-action {\n  display: flex;\n  flex-direction: column;\n}\n[_nghost-%COMP%]     .product-list-item .p-button {\n  margin-bottom: 0.5rem;\n}\n[_nghost-%COMP%]     .product-grid-item {\n  margin: 0.5em;\n  border: 1px solid #dee2e6;\n}\n[_nghost-%COMP%]     .product-grid-item .product-grid-item-top, [_nghost-%COMP%]     .product-grid-item .product-grid-item-bottom {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n[_nghost-%COMP%]     .product-grid-item img {\n  width: 75%;\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n  margin: 2rem 0;\n}\n[_nghost-%COMP%]     .product-grid-item .product-grid-item-content {\n  text-align: center;\n}\n[_nghost-%COMP%]     .product-grid-item .product-price {\n  font-size: 1.5rem;\n  font-weight: 600;\n}\n.card[_ngcontent-%COMP%] {\n  padding: 2rem;\n  box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12);\n  border-radius: 4px;\n  margin-bottom: 2rem;\n}\n@media screen and (max-width: 576px) {\n  [_nghost-%COMP%]     .product-list-item {\n    flex-direction: column;\n    align-items: center;\n  }\n  [_nghost-%COMP%]     .product-list-item img {\n    width: 75%;\n    margin: 2rem 0;\n  }\n  [_nghost-%COMP%]     .product-list-item .product-list-detail {\n    text-align: center;\n  }\n  [_nghost-%COMP%]     .product-list-item .product-price {\n    align-self: center;\n  }\n  [_nghost-%COMP%]     .product-list-item .product-list-action {\n    display: flex;\n    flex-direction: column;\n  }\n  [_nghost-%COMP%]     .product-list-item .product-list-action {\n    margin-top: 2rem;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvSG9tZXBhZ2UvcmVjb21tZW5kZWQvcmVjb21tZW5kZWQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7QUFBTjtBQUdFO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtBQUROO0FBSUU7RUFDSSxrQkFBQTtBQUZOO0FBS0U7RUFDSSxzQkFBQTtFQUNBLG9CQUFBO0FBSE47QUFNRTtFQUNJLGdCQUFBO0VBQ0Esc0JBQUE7QUFKTjtBQU9FO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUFMTjtBQU9NO0VBQ0ksWUFBQTtFQUNBLHdFQUFBO0VBQ0Esa0JBQUE7QUFMVjtBQVFNO0VBQ0ksV0FBQTtBQU5WO0FBU007RUFDSSxvQkFBQTtBQVBWO0FBVU07RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtBQVJWO0FBV007RUFDSSxhQUFBO0VBQ0Esc0JBQUE7QUFUVjtBQVlNO0VBQ0kscUJBQUE7QUFWVjtBQWNFO0VBQ0ksYUFBQTtFQUNBLHlCQUFBO0FBWk47QUFjTTs7RUFFSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQVpWO0FBZU07RUFDSSxVQUFBO0VBQ0Esd0VBQUE7RUFDQSxjQUFBO0FBYlY7QUFnQk07RUFDSSxrQkFBQTtBQWRWO0FBaUJNO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtBQWZWO0FBb0JBO0VBQ0UsYUFBQTtFQUNBLCtHQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQWpCRjtBQW9CQTtFQUNBO0lBQ0Usc0JBQUE7SUFDQSxtQkFBQTtFQWpCQTtFQW1CQTtJQUNFLFVBQUE7SUFDQSxjQUFBO0VBakJGO0VBb0JBO0lBQ0Usa0JBQUE7RUFsQkY7RUFxQkE7SUFDRSxrQkFBQTtFQW5CRjtFQXNCQTtJQUNFLGFBQUE7SUFDQSxzQkFBQTtFQXBCRjtFQXVCQTtJQUNFLGdCQUFBO0lBQ0EsbUJBQUE7SUFDQSw4QkFBQTtJQUNBLG1CQUFBO0lBQ0EsV0FBQTtFQXJCRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvSG9tZXBhZ2UvcmVjb21tZW5kZWQvcmVjb21tZW5kZWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCA6Om5nLWRlZXAge1xuICAucC1kcm9wZG93biB7XG4gICAgICB3aWR0aDogMTRyZW07XG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICB9XG4gIFxuICAucHJvZHVjdC1uYW1lIHtcbiAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgfVxuICBcbiAgLnByb2R1Y3QtZGVzY3JpcHRpb24ge1xuICAgICAgbWFyZ2luOiAwIDAgMXJlbSAwO1xuICB9XG4gIFxuICAucHJvZHVjdC1jYXRlZ29yeS1pY29uIHtcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICBtYXJnaW4tcmlnaHQ6IC41cmVtO1xuICB9XG4gIFxuICAucHJvZHVjdC1jYXRlZ29yeSB7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgfVxuICBcbiAgLnByb2R1Y3QtbGlzdC1pdGVtIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgcGFkZGluZzogMXJlbTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICBcbiAgICAgIGltZyB7XG4gICAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICAgIGJveC1zaGFkb3c6IDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTYpLCAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjIzKTtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDJyZW07XG4gICAgICB9XG4gIFxuICAgICAgLnByb2R1Y3QtbGlzdC1kZXRhaWwge1xuICAgICAgICAgIGZsZXg6IDEgMSAwO1xuICAgICAgfVxuICBcbiAgICAgIC5wLXJhdGluZyB7XG4gICAgICAgICAgbWFyZ2luOiAwIDAgLjVyZW0gMDtcbiAgICAgIH1cbiAgXG4gICAgICAucHJvZHVjdC1wcmljZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcbiAgICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgICAgIH1cbiAgXG4gICAgICAucHJvZHVjdC1saXN0LWFjdGlvbiB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgfVxuICBcbiAgICAgIC5wLWJ1dHRvbiB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogLjVyZW07XG4gICAgICB9XG4gIH1cbiAgXG4gIC5wcm9kdWN0LWdyaWQtaXRlbSB7XG4gICAgICBtYXJnaW46IC41ZW07XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGVlMmU2O1xuICBcbiAgICAgIC5wcm9kdWN0LWdyaWQtaXRlbS10b3AsXG4gICAgICAucHJvZHVjdC1ncmlkLWl0ZW0tYm90dG9tIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgfVxuICBcbiAgICAgIGltZyB7XG4gICAgICAgICAgd2lkdGg6IDc1JTtcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE2KSwgMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yMyk7XG4gICAgICAgICAgbWFyZ2luOiAycmVtIDA7XG4gICAgICB9XG4gIFxuICAgICAgLnByb2R1Y3QtZ3JpZC1pdGVtLWNvbnRlbnQge1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cbiAgXG4gICAgICAucHJvZHVjdC1wcmljZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIH1cbiAgfVxufVxuXG4uY2FyZCB7XG4gIHBhZGRpbmc6IDJyZW07XG4gIGJveC1zaGFkb3c6IDAgMnB4IDFweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAxcHggMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAxcHggM3B4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xuOmhvc3QgOjpuZy1kZWVwIC5wcm9kdWN0LWxpc3QtaXRlbSB7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgaW1nIHtcbiAgICB3aWR0aDogNzUlO1xuICAgIG1hcmdpbjogMnJlbSAwO1xuICB9XG5cbiAgLnByb2R1Y3QtbGlzdC1kZXRhaWwge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIC5wcm9kdWN0LXByaWNlIHtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIH1cblxuICAucHJvZHVjdC1saXN0LWFjdGlvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG5cbiAgLnByb2R1Y3QtbGlzdC1hY3Rpb24ge1xuICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PopularResturantsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-popular-resturants',
                templateUrl: './popular-resturants.component.html',
                styleUrls: ['./popular-resturants.component.css', '../recommended/recommended.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/Homepage/recommended/recommended.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/Homepage/recommended/recommended.component.ts ***!
  \***************************************************************/
/*! exports provided: RecommendedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecommendedComponent", function() { return RecommendedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _Services_chef_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Services/chef-service.service */ "./src/app/Homepage/Services/chef-service.service.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-api.js");
/* harmony import */ var primeng_dataview__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/dataview */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-dataview.js");
/* harmony import */ var primeng_rating__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/rating */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-rating.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-button.js");








function RecommendedComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "p-dataViewLayoutOptions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RecommendedComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "p-rating", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "p-button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r4.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", product_r4.rating)("readonly", true)("cancel", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r4.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", product_r4.price, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", product_r4.inventoryStatus === "OUTOFSTOCK");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("product-badge status-" + product_r4.inventoryStatus.toLowerCase());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r4.inventoryStatus);
} }
function RecommendedComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "p-rating", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "p-button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r5.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("product-badge status-" + product_r5.inventoryStatus.toLowerCase());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r5.inventoryStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "assets/showcase/images/demo/product/" + product_r5.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", product_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r5.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", product_r5.rating)("readonly", true)("cancel", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", product_r5.price, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", product_r5.inventoryStatus === "OUTOFSTOCK");
} }
class RecommendedComponent {
    constructor(chefService, primengConfig) {
        this.chefService = chefService;
        this.primengConfig = primengConfig;
        this.foods = [
            { name: 'Jollof Rice', rating: 4 },
            { name: 'Jollof Rice', rating: 4 },
            { name: 'Jollof Rice', rating: 4 },
            { name: 'Jollof Rice', rating: 4 }
        ];
    }
    ngOnInit() {
        this.chefService.getChefs().then(data => this.chefs = data);
        this.sortOptions = [
            { label: 'Price High to Low', value: '!price' },
            { label: 'Price Low to High', value: 'price' }
        ];
        this.primengConfig.ripple = true;
    }
}
RecommendedComponent.ɵfac = function RecommendedComponent_Factory(t) { return new (t || RecommendedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_chef_service_service__WEBPACK_IMPORTED_MODULE_1__["ChefService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_2__["PrimeNGConfig"])); };
RecommendedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RecommendedComponent, selectors: [["app-recommended"]], decls: 6, vars: 3, consts: [[1, "card"], ["layout", "grid", 3, "value", "paginator", "rows"], ["dv", ""], ["pTemplate", "header"], ["pTemplate", "listItem"], ["pTemplate", "gridItem"], [1, "p-d-flex", "p-flex-column", "p-flex-md-row", "p-jc-md-between"], [1, "p-col-12"], [1, "product-list-item"], [1, "product-list-detail"], [1, "product-name"], [1, "product-description"], [3, "ngModel", "readonly", "cancel"], [1, "pi", "pi-tag", "product-category-icon"], [1, "product-category"], [1, "product-list-action"], [1, "product-price"], ["icon", "pi pi-shopping-cart", "label", "Add to Cart", 3, "disabled"], [1, "p-col-12", "p-md-4"], [1, "product-grid-item", "card"], [1, "product-grid-item-top"], [1, "product-grid-item-content"], [3, "src", "alt"], [1, "product-grid-item-bottom"], ["icon", "pi pi-shopping-cart", 3, "disabled"]], template: function RecommendedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p-dataView", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RecommendedComponent_ng_template_3_Template, 2, 0, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, RecommendedComponent_ng_template_4_Template, 17, 11, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, RecommendedComponent_ng_template_5_Template, 20, 13, "ng-template", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.chefs)("paginator", true)("rows", 9);
    } }, directives: [primeng_dataview__WEBPACK_IMPORTED_MODULE_3__["DataView"], primeng_api__WEBPACK_IMPORTED_MODULE_2__["PrimeTemplate"], primeng_dataview__WEBPACK_IMPORTED_MODULE_3__["DataViewLayoutOptions"], primeng_rating__WEBPACK_IMPORTED_MODULE_4__["Rating"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], primeng_button__WEBPACK_IMPORTED_MODULE_6__["Button"]], styles: ["[_nghost-%COMP%]     .p-dropdown {\n  width: 14rem;\n  font-weight: normal;\n}\n[_nghost-%COMP%]     .product-name {\n  font-size: 1.5rem;\n  font-weight: 700;\n}\n[_nghost-%COMP%]     .product-description {\n  margin: 0 0 1rem 0;\n}\n[_nghost-%COMP%]     .product-category-icon {\n  vertical-align: middle;\n  margin-right: 0.5rem;\n}\n[_nghost-%COMP%]     .product-category {\n  font-weight: 600;\n  vertical-align: middle;\n}\n[_nghost-%COMP%]     .product-list-item {\n  display: flex;\n  align-items: center;\n  padding: 1rem;\n  width: 100%;\n}\n[_nghost-%COMP%]     .product-list-item img {\n  width: 150px;\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n  margin-right: 2rem;\n}\n[_nghost-%COMP%]     .product-list-item .product-list-detail {\n  flex: 1 1 0;\n}\n[_nghost-%COMP%]     .product-list-item .p-rating {\n  margin: 0 0 0.5rem 0;\n}\n[_nghost-%COMP%]     .product-list-item .product-price {\n  font-size: 1.5rem;\n  font-weight: 600;\n  margin-bottom: 0.5rem;\n  align-self: flex-end;\n}\n[_nghost-%COMP%]     .product-list-item .product-list-action {\n  display: flex;\n  flex-direction: column;\n}\n[_nghost-%COMP%]     .product-list-item .p-button {\n  margin-bottom: 0.5rem;\n}\n[_nghost-%COMP%]     .product-grid-item {\n  margin: 0.5em;\n  border: 1px solid #dee2e6;\n}\n[_nghost-%COMP%]     .product-grid-item .product-grid-item-top, [_nghost-%COMP%]     .product-grid-item .product-grid-item-bottom {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n[_nghost-%COMP%]     .product-grid-item img {\n  width: 75%;\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n  margin: 2rem 0;\n}\n[_nghost-%COMP%]     .product-grid-item .product-grid-item-content {\n  text-align: center;\n}\n[_nghost-%COMP%]     .product-grid-item .product-price {\n  font-size: 1.5rem;\n  font-weight: 600;\n}\n.card[_ngcontent-%COMP%] {\n  padding: 2rem;\n  box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12);\n  border-radius: 4px;\n  margin-bottom: 2rem;\n}\n@media screen and (max-width: 576px) {\n  [_nghost-%COMP%]     .product-list-item {\n    flex-direction: column;\n    align-items: center;\n  }\n  [_nghost-%COMP%]     .product-list-item img {\n    width: 75%;\n    margin: 2rem 0;\n  }\n  [_nghost-%COMP%]     .product-list-item .product-list-detail {\n    text-align: center;\n  }\n  [_nghost-%COMP%]     .product-list-item .product-price {\n    align-self: center;\n  }\n  [_nghost-%COMP%]     .product-list-item .product-list-action {\n    display: flex;\n    flex-direction: column;\n  }\n  [_nghost-%COMP%]     .product-list-item .product-list-action {\n    margin-top: 2rem;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvSG9tZXBhZ2UvcmVjb21tZW5kZWQvcmVjb21tZW5kZWQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7QUFBTjtBQUdFO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtBQUROO0FBSUU7RUFDSSxrQkFBQTtBQUZOO0FBS0U7RUFDSSxzQkFBQTtFQUNBLG9CQUFBO0FBSE47QUFNRTtFQUNJLGdCQUFBO0VBQ0Esc0JBQUE7QUFKTjtBQU9FO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUFMTjtBQU9NO0VBQ0ksWUFBQTtFQUNBLHdFQUFBO0VBQ0Esa0JBQUE7QUFMVjtBQVFNO0VBQ0ksV0FBQTtBQU5WO0FBU007RUFDSSxvQkFBQTtBQVBWO0FBVU07RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtBQVJWO0FBV007RUFDSSxhQUFBO0VBQ0Esc0JBQUE7QUFUVjtBQVlNO0VBQ0kscUJBQUE7QUFWVjtBQWNFO0VBQ0ksYUFBQTtFQUNBLHlCQUFBO0FBWk47QUFjTTs7RUFFSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQVpWO0FBZU07RUFDSSxVQUFBO0VBQ0Esd0VBQUE7RUFDQSxjQUFBO0FBYlY7QUFnQk07RUFDSSxrQkFBQTtBQWRWO0FBaUJNO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtBQWZWO0FBb0JBO0VBQ0UsYUFBQTtFQUNBLCtHQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQWpCRjtBQW9CQTtFQUNBO0lBQ0Usc0JBQUE7SUFDQSxtQkFBQTtFQWpCQTtFQW1CQTtJQUNFLFVBQUE7SUFDQSxjQUFBO0VBakJGO0VBb0JBO0lBQ0Usa0JBQUE7RUFsQkY7RUFxQkE7SUFDRSxrQkFBQTtFQW5CRjtFQXNCQTtJQUNFLGFBQUE7SUFDQSxzQkFBQTtFQXBCRjtFQXVCQTtJQUNFLGdCQUFBO0lBQ0EsbUJBQUE7SUFDQSw4QkFBQTtJQUNBLG1CQUFBO0lBQ0EsV0FBQTtFQXJCRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvSG9tZXBhZ2UvcmVjb21tZW5kZWQvcmVjb21tZW5kZWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCA6Om5nLWRlZXAge1xuICAucC1kcm9wZG93biB7XG4gICAgICB3aWR0aDogMTRyZW07XG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICB9XG4gIFxuICAucHJvZHVjdC1uYW1lIHtcbiAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgfVxuICBcbiAgLnByb2R1Y3QtZGVzY3JpcHRpb24ge1xuICAgICAgbWFyZ2luOiAwIDAgMXJlbSAwO1xuICB9XG4gIFxuICAucHJvZHVjdC1jYXRlZ29yeS1pY29uIHtcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICBtYXJnaW4tcmlnaHQ6IC41cmVtO1xuICB9XG4gIFxuICAucHJvZHVjdC1jYXRlZ29yeSB7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgfVxuICBcbiAgLnByb2R1Y3QtbGlzdC1pdGVtIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgcGFkZGluZzogMXJlbTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICBcbiAgICAgIGltZyB7XG4gICAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICAgIGJveC1zaGFkb3c6IDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTYpLCAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjIzKTtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDJyZW07XG4gICAgICB9XG4gIFxuICAgICAgLnByb2R1Y3QtbGlzdC1kZXRhaWwge1xuICAgICAgICAgIGZsZXg6IDEgMSAwO1xuICAgICAgfVxuICBcbiAgICAgIC5wLXJhdGluZyB7XG4gICAgICAgICAgbWFyZ2luOiAwIDAgLjVyZW0gMDtcbiAgICAgIH1cbiAgXG4gICAgICAucHJvZHVjdC1wcmljZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcbiAgICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgICAgIH1cbiAgXG4gICAgICAucHJvZHVjdC1saXN0LWFjdGlvbiB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgfVxuICBcbiAgICAgIC5wLWJ1dHRvbiB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogLjVyZW07XG4gICAgICB9XG4gIH1cbiAgXG4gIC5wcm9kdWN0LWdyaWQtaXRlbSB7XG4gICAgICBtYXJnaW46IC41ZW07XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGVlMmU2O1xuICBcbiAgICAgIC5wcm9kdWN0LWdyaWQtaXRlbS10b3AsXG4gICAgICAucHJvZHVjdC1ncmlkLWl0ZW0tYm90dG9tIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgfVxuICBcbiAgICAgIGltZyB7XG4gICAgICAgICAgd2lkdGg6IDc1JTtcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE2KSwgMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yMyk7XG4gICAgICAgICAgbWFyZ2luOiAycmVtIDA7XG4gICAgICB9XG4gIFxuICAgICAgLnByb2R1Y3QtZ3JpZC1pdGVtLWNvbnRlbnQge1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cbiAgXG4gICAgICAucHJvZHVjdC1wcmljZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIH1cbiAgfVxufVxuXG4uY2FyZCB7XG4gIHBhZGRpbmc6IDJyZW07XG4gIGJveC1zaGFkb3c6IDAgMnB4IDFweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAxcHggMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAxcHggM3B4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xuOmhvc3QgOjpuZy1kZWVwIC5wcm9kdWN0LWxpc3QtaXRlbSB7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgaW1nIHtcbiAgICB3aWR0aDogNzUlO1xuICAgIG1hcmdpbjogMnJlbSAwO1xuICB9XG5cbiAgLnByb2R1Y3QtbGlzdC1kZXRhaWwge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIC5wcm9kdWN0LXByaWNlIHtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIH1cblxuICAucHJvZHVjdC1saXN0LWFjdGlvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG5cbiAgLnByb2R1Y3QtbGlzdC1hY3Rpb24ge1xuICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecommendedComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-recommended',
                templateUrl: './recommended.component.html',
                styleUrls: ['./recommended.component.scss']
            }]
    }], function () { return [{ type: _Services_chef_service_service__WEBPACK_IMPORTED_MODULE_1__["ChefService"] }, { type: primeng_api__WEBPACK_IMPORTED_MODULE_2__["PrimeNGConfig"] }]; }, null); })();


/***/ }),

/***/ "./src/app/Homepage/testimonies/testimonies.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/Homepage/testimonies/testimonies.component.ts ***!
  \***************************************************************/
/*! exports provided: TestimoniesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestimoniesComponent", function() { return TestimoniesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class TestimoniesComponent {
    constructor() {
        this.testimonies = [
            {
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam harum optio sint, perferendis vero deserunt mollitia quos nostrum eveniet nisi est saepe excepturi distinctio ipsam, tempora voluptas perspiciatis, repellat ad?',
                name: 'Customer Name'
            },
            {
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam harum optio sint, perferendis vero deserunt mollitia quos nostrum eveniet nisi est saepe excepturi distinctio ipsam, tempora voluptas perspiciatis, repellat ad?',
                name: 'Customer Name'
            }
        ];
    }
    ngOnInit() { }
}
TestimoniesComponent.ɵfac = function TestimoniesComponent_Factory(t) { return new (t || TestimoniesComponent)(); };
TestimoniesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TestimoniesComponent, selectors: [["app-testimonies"]], decls: 0, vars: 0, template: function TestimoniesComponent_Template(rf, ctx) { }, styles: ["section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin-top: 1em;\n  color: #630f24;\n  text-align: center;\n}\n\n@media screen and (max-width: 1023px) {\n  .testimonies[_ngcontent-%COMP%] {\n    flex-direction: column;\n    text-align: justify;\n  }\n}\n\n@media screen and (min-width: 1024px) {\n  section[_ngcontent-%COMP%] {\n    margin-top: 3em;\n  }\n  .testimonies[_ngcontent-%COMP%] {\n    width: 70%;\n    margin: 3em auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvSG9tZXBhZ2UvdGVzdGltb25pZXMvdGVzdGltb25pZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0U7SUFDRSxzQkFBc0I7SUFDdEIsbUJBQW1CO0VBQ3JCO0FBQ0Y7O0FBQ0E7RUFDRTtJQUNFLGVBQWU7RUFDakI7RUFDQTtJQUNFLFVBQVU7SUFDVixnQkFBZ0I7RUFDbEI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL0hvbWVwYWdlL3Rlc3RpbW9uaWVzL3Rlc3RpbW9uaWVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzZWN0aW9uIGgxIHtcbiAgbWFyZ2luLXRvcDogMWVtO1xuICBjb2xvcjogIzYzMGYyNDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDIzcHgpIHtcbiAgLnRlc3RpbW9uaWVzIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xuICBzZWN0aW9uIHtcbiAgICBtYXJnaW4tdG9wOiAzZW07XG4gIH1cbiAgLnRlc3RpbW9uaWVzIHtcbiAgICB3aWR0aDogNzAlO1xuICAgIG1hcmdpbjogM2VtIGF1dG87XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TestimoniesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-testimonies',
                templateUrl: './testimonies.component.html',
                styleUrls: ['./testimonies.component.css']
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _Homepage_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Homepage/home.component */ "./src/app/Homepage/home.component.ts");





const routes = [
    { path: 'home', component: _Homepage_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'Get foods at your doorstep';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _Homepage_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Homepage/header/header.component */ "./src/app/Homepage/header/header.component.ts");
/* harmony import */ var _Homepage_jumbotron_jumbotron_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Homepage/jumbotron/jumbotron.component */ "./src/app/Homepage/jumbotron/jumbotron.component.ts");
/* harmony import */ var _Homepage_recommended_recommended_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Homepage/recommended/recommended.component */ "./src/app/Homepage/recommended/recommended.component.ts");
/* harmony import */ var _cards_resturants_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cards/resturants/card.component */ "./src/app/cards/resturants/card.component.ts");
/* harmony import */ var _Homepage_how_it_works_how_it_works_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Homepage/how-it-works/how-it-works.component */ "./src/app/Homepage/how-it-works/how-it-works.component.ts");
/* harmony import */ var _cards_how_it_works_card_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./cards/how-it-works/card.component */ "./src/app/cards/how-it-works/card.component.ts");
/* harmony import */ var _Homepage_popular_resturants_popular_resturants_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Homepage/popular-resturants/popular-resturants.component */ "./src/app/Homepage/popular-resturants/popular-resturants.component.ts");
/* harmony import */ var _Homepage_download_app_download_app_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Homepage/download-app/download-app.component */ "./src/app/Homepage/download-app/download-app.component.ts");
/* harmony import */ var _Homepage_testimonies_testimonies_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Homepage/testimonies/testimonies.component */ "./src/app/Homepage/testimonies/testimonies.component.ts");
/* harmony import */ var _cards_testimonies_card_testimonies_card_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./cards/testimonies-card/testimonies-card.component */ "./src/app/cards/testimonies-card/testimonies-card.component.ts");
/* harmony import */ var _Homepage_home_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Homepage/home.component */ "./src/app/Homepage/home.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _Homepage_Services_chef_service_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Homepage/Services/chef-service.service */ "./src/app/Homepage/Services/chef-service.service.ts");
/* harmony import */ var primeng_dataview__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/dataview */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-dataview.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-button.js");
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/panel */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-panel.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-dropdown.js");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/dialog */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-dialog.js");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! primeng/inputtext */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-inputtext.js");
/* harmony import */ var primeng_rating__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! primeng/rating */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-rating.js");
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! primeng/ripple */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-ripple.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");





























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_Homepage_Services_chef_service_service__WEBPACK_IMPORTED_MODULE_17__["ChefService"]], imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_26__["BrowserAnimationsModule"],
            primeng_dataview__WEBPACK_IMPORTED_MODULE_18__["DataViewModule"],
            primeng_panel__WEBPACK_IMPORTED_MODULE_20__["PanelModule"],
            primeng_dialog__WEBPACK_IMPORTED_MODULE_22__["DialogModule"],
            primeng_dropdown__WEBPACK_IMPORTED_MODULE_21__["DropdownModule"],
            primeng_inputtext__WEBPACK_IMPORTED_MODULE_23__["InputTextModule"],
            primeng_button__WEBPACK_IMPORTED_MODULE_19__["ButtonModule"],
            primeng_ripple__WEBPACK_IMPORTED_MODULE_25__["RippleModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_27__["HttpClientModule"],
            primeng_rating__WEBPACK_IMPORTED_MODULE_24__["RatingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _Homepage_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
        _Homepage_jumbotron_jumbotron_component__WEBPACK_IMPORTED_MODULE_6__["JumbotronComponent"],
        _Homepage_recommended_recommended_component__WEBPACK_IMPORTED_MODULE_7__["RecommendedComponent"],
        _cards_resturants_card_component__WEBPACK_IMPORTED_MODULE_8__["CardComponent"],
        _Homepage_how_it_works_how_it_works_component__WEBPACK_IMPORTED_MODULE_9__["HowItWorksComponent"],
        _cards_how_it_works_card_component__WEBPACK_IMPORTED_MODULE_10__["HowItWorksCardComponent"],
        _Homepage_popular_resturants_popular_resturants_component__WEBPACK_IMPORTED_MODULE_11__["PopularResturantsComponent"],
        _Homepage_download_app_download_app_component__WEBPACK_IMPORTED_MODULE_12__["DownloadAppComponent"],
        _Homepage_testimonies_testimonies_component__WEBPACK_IMPORTED_MODULE_13__["TestimoniesComponent"],
        _cards_testimonies_card_testimonies_card_component__WEBPACK_IMPORTED_MODULE_14__["TestimoniesCardComponent"],
        _Homepage_home_component__WEBPACK_IMPORTED_MODULE_15__["HomeComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_16__["FooterComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_26__["BrowserAnimationsModule"],
        primeng_dataview__WEBPACK_IMPORTED_MODULE_18__["DataViewModule"],
        primeng_panel__WEBPACK_IMPORTED_MODULE_20__["PanelModule"],
        primeng_dialog__WEBPACK_IMPORTED_MODULE_22__["DialogModule"],
        primeng_dropdown__WEBPACK_IMPORTED_MODULE_21__["DropdownModule"],
        primeng_inputtext__WEBPACK_IMPORTED_MODULE_23__["InputTextModule"],
        primeng_button__WEBPACK_IMPORTED_MODULE_19__["ButtonModule"],
        primeng_ripple__WEBPACK_IMPORTED_MODULE_25__["RippleModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_27__["HttpClientModule"],
        primeng_rating__WEBPACK_IMPORTED_MODULE_24__["RatingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _Homepage_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                    _Homepage_jumbotron_jumbotron_component__WEBPACK_IMPORTED_MODULE_6__["JumbotronComponent"],
                    _Homepage_recommended_recommended_component__WEBPACK_IMPORTED_MODULE_7__["RecommendedComponent"],
                    _cards_resturants_card_component__WEBPACK_IMPORTED_MODULE_8__["CardComponent"],
                    _Homepage_how_it_works_how_it_works_component__WEBPACK_IMPORTED_MODULE_9__["HowItWorksComponent"],
                    _cards_how_it_works_card_component__WEBPACK_IMPORTED_MODULE_10__["HowItWorksCardComponent"],
                    _Homepage_popular_resturants_popular_resturants_component__WEBPACK_IMPORTED_MODULE_11__["PopularResturantsComponent"],
                    _Homepage_download_app_download_app_component__WEBPACK_IMPORTED_MODULE_12__["DownloadAppComponent"],
                    _Homepage_testimonies_testimonies_component__WEBPACK_IMPORTED_MODULE_13__["TestimoniesComponent"],
                    _cards_testimonies_card_testimonies_card_component__WEBPACK_IMPORTED_MODULE_14__["TestimoniesCardComponent"],
                    _Homepage_home_component__WEBPACK_IMPORTED_MODULE_15__["HomeComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_16__["FooterComponent"]
                ],
                imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_26__["BrowserAnimationsModule"],
                    primeng_dataview__WEBPACK_IMPORTED_MODULE_18__["DataViewModule"],
                    primeng_panel__WEBPACK_IMPORTED_MODULE_20__["PanelModule"],
                    primeng_dialog__WEBPACK_IMPORTED_MODULE_22__["DialogModule"],
                    primeng_dropdown__WEBPACK_IMPORTED_MODULE_21__["DropdownModule"],
                    primeng_inputtext__WEBPACK_IMPORTED_MODULE_23__["InputTextModule"],
                    primeng_button__WEBPACK_IMPORTED_MODULE_19__["ButtonModule"],
                    primeng_ripple__WEBPACK_IMPORTED_MODULE_25__["RippleModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_27__["HttpClientModule"],
                    primeng_rating__WEBPACK_IMPORTED_MODULE_24__["RatingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
                ],
                providers: [_Homepage_Services_chef_service_service__WEBPACK_IMPORTED_MODULE_17__["ChefService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/cards/how-it-works/card.component.ts":
/*!******************************************************!*\
  !*** ./src/app/cards/how-it-works/card.component.ts ***!
  \******************************************************/
/*! exports provided: HowItWorksCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HowItWorksCardComponent", function() { return HowItWorksCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class HowItWorksCardComponent {
    constructor() { }
    ngOnInit() { }
}
HowItWorksCardComponent.ɵfac = function HowItWorksCardComponent_Factory(t) { return new (t || HowItWorksCardComponent)(); };
HowItWorksCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HowItWorksCardComponent, selectors: [["app-how-card"]], inputs: { guideDetail: "guideDetail" }, decls: 6, vars: 2, consts: [[1, "container", "flex-column", "cross-center"], [1, "rounded-circle"]], template: function HowItWorksCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.guideDetail.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.guideDetail.content);
    } }, styles: [".container[_ngcontent-%COMP%] {\n  flex-basis: 33%;\n  color: #fff;\n  margin: 1em auto;\n}\n.rounded-circle[_ngcontent-%COMP%] {\n  height: 7em;\n  width: 7em;\n  background: #fff;\n  border-radius: 100%;\n}\np[_ngcontent-%COMP%] {\n  width: 80%;\n  text-align: center;\n}\n@media screen and (max-width: 768px) {\n  p[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FyZHMvaG93LWl0LXdvcmtzL2NhcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLFVBQVU7RUFDVixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFO0lBQ0UsV0FBVztFQUNiO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jYXJkcy9ob3ctaXQtd29ya3MvY2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIGZsZXgtYmFzaXM6IDMzJTtcbiAgY29sb3I6ICNmZmY7XG4gIG1hcmdpbjogMWVtIGF1dG87XG59XG4ucm91bmRlZC1jaXJjbGUge1xuICBoZWlnaHQ6IDdlbTtcbiAgd2lkdGg6IDdlbTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbn1cbnAge1xuICB3aWR0aDogODAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIHAge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HowItWorksCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-how-card',
                templateUrl: './card.component.html',
                styleUrls: ['./card.component.css']
            }]
    }], function () { return []; }, { guideDetail: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/cards/resturants/card.component.ts":
/*!****************************************************!*\
  !*** ./src/app/cards/resturants/card.component.ts ***!
  \****************************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class CardComponent {
    constructor() { }
    ngOnInit() { }
}
CardComponent.ɵfac = function CardComponent_Factory(t) { return new (t || CardComponent)(); };
CardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardComponent, selectors: [["app-card"]], inputs: { food: "food" }, decls: 7, vars: 2, consts: [[1, "card"], ["src", "../../../assets/jollof.png"], [1, "card-detail"]], template: function CardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.food.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.food.rating, " Stars");
    } }, styles: ["img[_ngcontent-%COMP%]{\n    width:100%\n}\n.card[_ngcontent-%COMP%]{\n    \n    margin: 1em \n}\n.card-detail[_ngcontent-%COMP%]{\n    padding: 2em;\n    box-shadow: lavender 0.2em 0.3em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FyZHMvcmVzdHVyYW50cy9jYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTtBQUNKO0FBQ0E7SUFDSSw4QkFBOEI7SUFDOUI7QUFDSjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGdDQUFnQztBQUNwQyIsImZpbGUiOiJzcmMvYXBwL2NhcmRzL3Jlc3R1cmFudHMvY2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1ne1xuICAgIHdpZHRoOjEwMCVcbn1cbi5jYXJke1xuICAgIC8qIGJvcmRlcjpzb2xpZCAxcHggIzBlZjMyZDsgKi9cbiAgICBtYXJnaW46IDFlbSBcbn1cbi5jYXJkLWRldGFpbHtcbiAgICBwYWRkaW5nOiAyZW07XG4gICAgYm94LXNoYWRvdzogbGF2ZW5kZXIgMC4yZW0gMC4zZW07XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-card',
                templateUrl: './card.component.html',
                styleUrls: ['./card.component.css']
            }]
    }], function () { return []; }, { food: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/cards/testimonies-card/testimonies-card.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/cards/testimonies-card/testimonies-card.component.ts ***!
  \**********************************************************************/
/*! exports provided: TestimoniesCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestimoniesCardComponent", function() { return TestimoniesCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class TestimoniesCardComponent {
    constructor() { }
    ngOnInit() { }
}
TestimoniesCardComponent.ɵfac = function TestimoniesCardComponent_Factory(t) { return new (t || TestimoniesCardComponent)(); };
TestimoniesCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TestimoniesCardComponent, selectors: [["app-testimonies-card"]], inputs: { testimony: "testimony" }, decls: 8, vars: 2, consts: [[1, "flex-column", "cross-center"], ["src", "../../../assets/customer.png", 1, "rounded-circle"]], template: function TestimoniesCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.testimony.content);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.testimony.name, " ");
    } }, styles: ["div[_ngcontent-%COMP%] {\n  margin: 2em;\n}\nimg[_ngcontent-%COMP%], h3[_ngcontent-%COMP%] {\n  margin: 1em;\n}\nspan[_ngcontent-%COMP%] {\n  font-size: 5em;\n  padding: 0px;\n  margin: 0px;\n  display: inline-block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FyZHMvdGVzdGltb25pZXMtY2FyZC90ZXN0aW1vbmllcy1jYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0FBQ2I7QUFDQTs7RUFFRSxXQUFXO0FBQ2I7QUFDQTtFQUNFLGNBQWM7RUFDZCxZQUFZO0VBQ1osV0FBVztFQUNYLHFCQUFxQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL2NhcmRzL3Rlc3RpbW9uaWVzLWNhcmQvdGVzdGltb25pZXMtY2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2IHtcbiAgbWFyZ2luOiAyZW07XG59XG5pbWcsXG5oMyB7XG4gIG1hcmdpbjogMWVtO1xufVxuc3BhbiB7XG4gIGZvbnQtc2l6ZTogNWVtO1xuICBwYWRkaW5nOiAwcHg7XG4gIG1hcmdpbjogMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4iXX0= */", ".container[_ngcontent-%COMP%] {\n  flex-basis: 33%;\n  color: #fff;\n  margin: 1em auto;\n}\n.rounded-circle[_ngcontent-%COMP%] {\n  height: 7em;\n  width: 7em;\n  background: #fff;\n  border-radius: 100%;\n}\np[_ngcontent-%COMP%] {\n  width: 80%;\n  text-align: center;\n}\n@media screen and (max-width: 768px) {\n  p[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FyZHMvaG93LWl0LXdvcmtzL2NhcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLFVBQVU7RUFDVixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFO0lBQ0UsV0FBVztFQUNiO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jYXJkcy9ob3ctaXQtd29ya3MvY2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIGZsZXgtYmFzaXM6IDMzJTtcbiAgY29sb3I6ICNmZmY7XG4gIG1hcmdpbjogMWVtIGF1dG87XG59XG4ucm91bmRlZC1jaXJjbGUge1xuICBoZWlnaHQ6IDdlbTtcbiAgd2lkdGg6IDdlbTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbn1cbnAge1xuICB3aWR0aDogODAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIHAge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TestimoniesCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-testimonies-card',
                templateUrl: './testimonies-card.component.html',
                styleUrls: [
                    './testimonies-card.component.css',
                    '../how-it-works/card.component.css'
                ]
            }]
    }], function () { return []; }, { testimony: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 23, vars: 0, consts: [[1, "flex-row", "cross-center", "main-center", "main"], ["src", "../../assets/food-van.png", 1, "van"], [1, "links"], [1, "first"], ["src", "../../assets/google-play-badge-en.png", 1, "google"], [1, "below-footer"], [1, "flex-row", "main-end"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nav", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "About Doorstep Chef");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nav", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Be A Chef");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Sign Up to Be A Chef");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Requirements");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Accessibility");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Terms & Conditions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".main[_ngcontent-%COMP%] {\n  flex-direction: column;\n}\n\nsection[_ngcontent-%COMP%] {\n  background: #121212;\n  color: #fff;\n}\n\nli[_ngcontent-%COMP%] {\n  list-style-type: none;\n  text-align: left;\n  color: rgb(224, 224, 214);\n}\n\n.first[_ngcontent-%COMP%] {\n  color: #fff;\n  font-weight: bolder;\n}\n\n.below-footer[_ngcontent-%COMP%] {\n  background: #000;\n}\n\n.links[_ngcontent-%COMP%] {\n  width: 98%;\n  align-self: flex-start;\n  padding: 0.5em 2em;\n  border-top: oldlace 1px solid;\n}\n\n.flex-row[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  margin: 2em;\n}\n\n.main-end[_ngcontent-%COMP%] {\n  margin: 1em 2em;\n}\n\n.van[_ngcontent-%COMP%], .google[_ngcontent-%COMP%] {\n  max-width: 10em;\n  max-height: 10em;\n  padding: 1em 5em;\n}\n\n@media screen and (min-width: 1023px) {\n  .main[_ngcontent-%COMP%] {\n    flex-direction: row;\n  }\n\n  .links[_ngcontent-%COMP%] {\n    flex-basis: 15%;\n    padding: 2em 0.5em;\n    border: none;\n  }\n  .van[_ngcontent-%COMP%], .google[_ngcontent-%COMP%] {\n    flex-basis: 25%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFdBQVc7QUFDYjs7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIseUJBQXlCO0FBQzNCOztBQUNBO0VBQ0UsV0FBVztFQUNYLG1CQUFtQjtBQUNyQjs7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLDZCQUE2QjtBQUMvQjs7QUFDQTtFQUNFLFdBQVc7QUFDYjs7QUFDQTtFQUNFLGVBQWU7QUFDakI7O0FBQ0E7O0VBRUUsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRTtJQUNFLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsWUFBWTtFQUNkO0VBQ0E7O0lBRUUsZUFBZTtFQUNqQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4ge1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG5zZWN0aW9uIHtcbiAgYmFja2dyb3VuZDogIzEyMTIxMjtcbiAgY29sb3I6ICNmZmY7XG59XG5saSB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6IHJnYigyMjQsIDIyNCwgMjE0KTtcbn1cbi5maXJzdCB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuLmJlbG93LWZvb3RlciB7XG4gIGJhY2tncm91bmQ6ICMwMDA7XG59XG5cbi5saW5rcyB7XG4gIHdpZHRoOiA5OCU7XG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG4gIHBhZGRpbmc6IDAuNWVtIDJlbTtcbiAgYm9yZGVyLXRvcDogb2xkbGFjZSAxcHggc29saWQ7XG59XG4uZmxleC1yb3cgPiBsaSB7XG4gIG1hcmdpbjogMmVtO1xufVxuLm1haW4tZW5kIHtcbiAgbWFyZ2luOiAxZW0gMmVtO1xufVxuLnZhbixcbi5nb29nbGUge1xuICBtYXgtd2lkdGg6IDEwZW07XG4gIG1heC1oZWlnaHQ6IDEwZW07XG4gIHBhZGRpbmc6IDFlbSA1ZW07XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDIzcHgpIHtcbiAgLm1haW4ge1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIH1cblxuICAubGlua3Mge1xuICAgIGZsZXgtYmFzaXM6IDE1JTtcbiAgICBwYWRkaW5nOiAyZW0gMC41ZW07XG4gICAgYm9yZGVyOiBub25lO1xuICB9XG4gIC52YW4sXG4gIC5nb29nbGUge1xuICAgIGZsZXgtYmFzaXM6IDI1JTtcbiAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Projects\NGDoorstep\DoorstepChef\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map