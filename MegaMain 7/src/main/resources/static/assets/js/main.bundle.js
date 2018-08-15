webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about-us/about-us.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/about-us/about-us.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"about-container\">\n  <div class=\"header-container\"></div>\n\n  <div class=\"about-content\">\n\n    <div class=\"gray-section\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-xs-12\">\n            <h1 class=\"h2 font-weight-normal form-heading\">{{'About Us' | translate}}</h1>\n            <div class=\"about-main text-block\">\n              {{'A group of ambitious engineers with multiple experience in all engineering disciplines with more than 15 years of experience in the Gulf region. The diversity of our expertise has enabled us to work from the innovation of the design idea to the final design of all the engineering departments with the preparation of technical specifications, bills of quantities and calculation of estimated costs, And conducting studies on safety systems as well as the executive and coordination drawings for all engineering departments. The diversity of our experience in the jobs that we have experienced during the early stages of our working life in different engineering departments, such as the work in the fields of design and supervision of the execution of the engineering consulting offices, as well as engineers in the technical office, project execution engineers and project management in the multi-class construction companies, Engineering fields, especially in the Gulf States and the Arab Republic of Egypt.' | translate}}\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/about-us/about-us.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutUsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutUsComponent = /** @class */ (function () {
    function AboutUsComponent() {
    }
    AboutUsComponent.prototype.ngOnInit = function () {
    };
    AboutUsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-about-us',
            template: __webpack_require__("./src/app/about-us/about-us.component.html"),
            styles: [__webpack_require__("./src/app/about-us/about-us.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutUsComponent);
    return AboutUsComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"rootContainer\">\n  <app-header></app-header>\n  <router-outlet></router-outlet>\n  <div class=\"clearfix\"></div>\n  <app-footer></app-footer>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__translate_translate_service__ = __webpack_require__("./src/app/translate/translate.service.ts");
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
    function AppComponent(_translate) {
        this._translate = _translate;
        this.currentLang = "";
    }
    AppComponent.prototype.ngOnInit = function () {
        this.setAppLanguage();
    };
    AppComponent.prototype.setAppLanguage = function () {
        if (this.getCurrentLang()) {
            this.currentLang = this.getCurrentLang();
            // if (this.currentLang == "ar") {
            //   this.setArCss();
            // } else {
            //   this.setEnCss();
            // }
        }
        else {
            this.currentLang = "en";
            localStorage.setItem("currentLang", "en");
        }
        this.selectLang(this.currentLang);
    };
    AppComponent.prototype.setEnCss = function () {
        window['changeCSS']('/assets/bootstrap/css/bootstrap.min.css', 2);
        window['changeCSS']('/assets/styles.css', 3);
    };
    AppComponent.prototype.setArCss = function () {
        window['changeCSS']('/assets/bootstrap/css/bootstrap-rtl.min.css', 2);
        window['changeCSS']('/assets/styles-rtl.css', 3);
    };
    AppComponent.prototype.selectLang = function (lang) {
        this._translate.use(lang);
    };
    AppComponent.prototype.getCurrentLang = function () {
        return localStorage.getItem('currentLang');
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")],
            providers: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__translate_translate_service__["a" /* TranslateService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__header_header_component__ = __webpack_require__("./src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_content_home_content_component__ = __webpack_require__("./src/app/home-content/home-content.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__service_tabs_service_tabs_component__ = __webpack_require__("./src/app/service-tabs/service-tabs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routing__ = __webpack_require__("./src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__service_details_service_details_component__ = __webpack_require__("./src/app/service-details/service-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__service_details_details_footer_details_footer_component__ = __webpack_require__("./src/app/service-details/details-footer/details-footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__service_details_details_content_details_content_component__ = __webpack_require__("./src/app/service-details/details-content/details-content.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__footer_footer_component__ = __webpack_require__("./src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__registeration_registeration_component__ = __webpack_require__("./src/app/registeration/registeration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__forms_forms_component__ = __webpack_require__("./src/app/forms/forms.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__about_us_about_us_component__ = __webpack_require__("./src/app/about-us/about-us.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__contact_us_contact_us_component__ = __webpack_require__("./src/app/contact-us/contact-us.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__faq_faq_component__ = __webpack_require__("./src/app/faq/faq.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__forms_workshop_drawing_workshop_drawing_component__ = __webpack_require__("./src/app/forms/workshop-drawing/workshop-drawing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__forms_mechanical_design_mechanical_design_component__ = __webpack_require__("./src/app/forms/mechanical-design/mechanical-design.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__forms_structural_design_structural_design_component__ = __webpack_require__("./src/app/forms/structural-design/structural-design.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__forms_3d_visualization_3d_visualization_component__ = __webpack_require__("./src/app/forms/3d-visualization/3d-visualization.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__my_orders_my_orders_component__ = __webpack_require__("./src/app/my-orders/my-orders.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__my_profile_my_profile_component__ = __webpack_require__("./src/app/my-profile/my-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_service_get_users__ = __webpack_require__("./src/app/services/service.get-users.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__forms_contest_cost_contest_cost_component__ = __webpack_require__("./src/app/forms/contest-cost/contest-cost.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__translate_translate_service__ = __webpack_require__("./src/app/translate/translate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__translate_translate_pipe__ = __webpack_require__("./src/app/translate/translate.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__translate_translation__ = __webpack_require__("./src/app/translate/translation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__what_we_do_what_we_do_component__ = __webpack_require__("./src/app/what-we-do/what-we-do.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__how_we_work_how_we_work_component__ = __webpack_require__("./src/app/how-we-work/how-we-work.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__our_projects_our_projects_component__ = __webpack_require__("./src/app/our-projects/our-projects.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__forms_safety_safety_report_safety_report_component__ = __webpack_require__("./src/app/forms/safety/safety-report/safety-report.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__forms_safety_evacuation_report_evacuation_report_component__ = __webpack_require__("./src/app/forms/safety/evacuation-report/evacuation-report.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__forms_safety_fire_systems_fire_systems_component__ = __webpack_require__("./src/app/forms/safety/fire-systems/fire-systems.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__forms_safety_safet_architect_safet_architect_component__ = __webpack_require__("./src/app/forms/safety/safet-architect/safet-architect.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__forms_building_design_complete_design_complete_design_component__ = __webpack_require__("./src/app/forms/building-design/complete-design/complete-design.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__forms_building_design_design_concept_design_concept_component__ = __webpack_require__("./src/app/forms/building-design/design-concept/design-concept.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__forms_building_design_facade_design_facade_design_component__ = __webpack_require__("./src/app/forms/building-design/facade-design/facade-design.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__forms_workshop_drawing_workshop_slabs_workshop_slabs_component__ = __webpack_require__("./src/app/forms/workshop-drawing/workshop-slabs/workshop-slabs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__forms_tenders_seperate_tenders_seperate_component__ = __webpack_require__("./src/app/forms/tenders-seperate/tenders-seperate.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__forms_tenders_revision_tenders_revision_component__ = __webpack_require__("./src/app/forms/tenders-revision/tenders-revision.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__forms_3d_visualization_external_view_external_view_component__ = __webpack_require__("./src/app/forms/3d-visualization/external-view/external-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__forms_3d_visualization_interior_design_interior_design_component__ = __webpack_require__("./src/app/forms/3d-visualization/interior-design/interior-design.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__forms_3d_visualization_3d_plans_3d_plans_component__ = __webpack_require__("./src/app/forms/3d-visualization/3d-plans/3d-plans.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__forms_building_design_design_consult_design_consult_component__ = __webpack_require__("./src/app/forms/building-design/design-consult/design-consult.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__forms_workshop_drawing_workshop_consult_workshop_consult_component__ = __webpack_require__("./src/app/forms/workshop-drawing/workshop-consult/workshop-consult.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__forms_tenders_consult_tenders_consult_component__ = __webpack_require__("./src/app/forms/tenders-consult/tenders-consult.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__forms_safety_safety_consult_safety_consult_component__ = __webpack_require__("./src/app/forms/safety/safety-consult/safety-consult.component.ts");
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_27__translate_translate_pipe__["a" /* TranslatePipe */],
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_6__home_content_home_content_component__["a" /* HomeContentComponent */],
                __WEBPACK_IMPORTED_MODULE_7__service_tabs_service_tabs_component__["a" /* ServiceTabsComponent */],
                __WEBPACK_IMPORTED_MODULE_9__service_details_service_details_component__["a" /* ServiceDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_10__service_details_details_footer_details_footer_component__["a" /* DetailsFooterComponent */],
                __WEBPACK_IMPORTED_MODULE_11__service_details_details_content_details_content_component__["a" /* DetailsContentComponent */],
                __WEBPACK_IMPORTED_MODULE_12__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_13__registeration_registeration_component__["a" /* RegisterationComponent */],
                __WEBPACK_IMPORTED_MODULE_14__forms_forms_component__["a" /* FormsComponent */],
                __WEBPACK_IMPORTED_MODULE_15__about_us_about_us_component__["a" /* AboutUsComponent */],
                __WEBPACK_IMPORTED_MODULE_16__contact_us_contact_us_component__["a" /* ContactUsComponent */],
                __WEBPACK_IMPORTED_MODULE_17__faq_faq_component__["a" /* FaqComponent */],
                __WEBPACK_IMPORTED_MODULE_18__forms_workshop_drawing_workshop_drawing_component__["a" /* WorkshopDrawingComponent */],
                __WEBPACK_IMPORTED_MODULE_19__forms_mechanical_design_mechanical_design_component__["a" /* MechanicalDesignComponent */],
                __WEBPACK_IMPORTED_MODULE_20__forms_structural_design_structural_design_component__["a" /* StructuralDesignComponent */],
                __WEBPACK_IMPORTED_MODULE_21__forms_3d_visualization_3d_visualization_component__["a" /* VisualizationComponent */],
                __WEBPACK_IMPORTED_MODULE_22__my_orders_my_orders_component__["a" /* MyOrdersComponent */],
                __WEBPACK_IMPORTED_MODULE_23__my_profile_my_profile_component__["a" /* MyProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_25__forms_contest_cost_contest_cost_component__["a" /* ContestCostComponent */],
                __WEBPACK_IMPORTED_MODULE_29__what_we_do_what_we_do_component__["a" /* WhatWeDoComponent */],
                __WEBPACK_IMPORTED_MODULE_30__how_we_work_how_we_work_component__["a" /* HowWeWorkComponent */],
                __WEBPACK_IMPORTED_MODULE_31__our_projects_our_projects_component__["a" /* OurProjectsComponent */],
                __WEBPACK_IMPORTED_MODULE_32__forms_safety_safety_report_safety_report_component__["a" /* SafetyReportComponent */],
                __WEBPACK_IMPORTED_MODULE_33__forms_safety_evacuation_report_evacuation_report_component__["a" /* EvacuationReportComponent */],
                __WEBPACK_IMPORTED_MODULE_34__forms_safety_fire_systems_fire_systems_component__["a" /* FireSystemsComponent */],
                __WEBPACK_IMPORTED_MODULE_35__forms_safety_safet_architect_safet_architect_component__["a" /* SafetArchitectComponent */],
                __WEBPACK_IMPORTED_MODULE_36__forms_building_design_complete_design_complete_design_component__["a" /* CompleteDesignComponent */],
                __WEBPACK_IMPORTED_MODULE_37__forms_building_design_design_concept_design_concept_component__["a" /* DesignConceptComponent */],
                __WEBPACK_IMPORTED_MODULE_38__forms_building_design_facade_design_facade_design_component__["a" /* FacadeDesignComponent */],
                __WEBPACK_IMPORTED_MODULE_39__forms_workshop_drawing_workshop_slabs_workshop_slabs_component__["a" /* WorkshopSlabsComponent */],
                __WEBPACK_IMPORTED_MODULE_40__forms_tenders_seperate_tenders_seperate_component__["a" /* TendersSeperateComponent */],
                __WEBPACK_IMPORTED_MODULE_41__forms_tenders_revision_tenders_revision_component__["a" /* TendersRevisionComponent */],
                __WEBPACK_IMPORTED_MODULE_42__forms_3d_visualization_external_view_external_view_component__["a" /* ExternalViewComponent */],
                __WEBPACK_IMPORTED_MODULE_43__forms_3d_visualization_interior_design_interior_design_component__["a" /* InteriorDesignComponent */],
                __WEBPACK_IMPORTED_MODULE_44__forms_3d_visualization_3d_plans_3d_plans_component__["a" /* PlansComponent */],
                __WEBPACK_IMPORTED_MODULE_45__forms_building_design_design_consult_design_consult_component__["a" /* DesignConsultComponent */],
                __WEBPACK_IMPORTED_MODULE_46__forms_workshop_drawing_workshop_consult_workshop_consult_component__["a" /* WorkshopConsultComponent */],
                __WEBPACK_IMPORTED_MODULE_47__forms_tenders_consult_tenders_consult_component__["a" /* TendersConsultComponent */],
                __WEBPACK_IMPORTED_MODULE_48__forms_safety_safety_consult_safety_consult_component__["a" /* SafetyConsultComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_8__app_routing__["a" /* routing */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */]
                // NgbModule.forRoot(),
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_24__services_service_get_users__["a" /* Users */], __WEBPACK_IMPORTED_MODULE_28__translate_translation__["b" /* TRANSLATION_PROVIDERS */], __WEBPACK_IMPORTED_MODULE_26__translate_translate_service__["a" /* TranslateService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_content_home_content_component__ = __webpack_require__("./src/app/home-content/home-content.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_details_service_details_component__ = __webpack_require__("./src/app/service-details/service-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__registeration_registeration_component__ = __webpack_require__("./src/app/registeration/registeration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__about_us_about_us_component__ = __webpack_require__("./src/app/about-us/about-us.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__contact_us_contact_us_component__ = __webpack_require__("./src/app/contact-us/contact-us.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__what_we_do_what_we_do_component__ = __webpack_require__("./src/app/what-we-do/what-we-do.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__how_we_work_how_we_work_component__ = __webpack_require__("./src/app/how-we-work/how-we-work.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__our_projects_our_projects_component__ = __webpack_require__("./src/app/our-projects/our-projects.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__forms_workshop_drawing_workshop_drawing_component__ = __webpack_require__("./src/app/forms/workshop-drawing/workshop-drawing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__forms_structural_design_structural_design_component__ = __webpack_require__("./src/app/forms/structural-design/structural-design.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__forms_3d_visualization_3d_visualization_component__ = __webpack_require__("./src/app/forms/3d-visualization/3d-visualization.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__my_profile_my_profile_component__ = __webpack_require__("./src/app/my-profile/my-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__my_orders_my_orders_component__ = __webpack_require__("./src/app/my-orders/my-orders.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__forms_mechanical_design_mechanical_design_component__ = __webpack_require__("./src/app/forms/mechanical-design/mechanical-design.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__forms_contest_cost_contest_cost_component__ = __webpack_require__("./src/app/forms/contest-cost/contest-cost.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__forms_safety_evacuation_report_evacuation_report_component__ = __webpack_require__("./src/app/forms/safety/evacuation-report/evacuation-report.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__forms_safety_fire_systems_fire_systems_component__ = __webpack_require__("./src/app/forms/safety/fire-systems/fire-systems.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__forms_safety_safet_architect_safet_architect_component__ = __webpack_require__("./src/app/forms/safety/safet-architect/safet-architect.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__forms_safety_safety_report_safety_report_component__ = __webpack_require__("./src/app/forms/safety/safety-report/safety-report.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__forms_building_design_complete_design_complete_design_component__ = __webpack_require__("./src/app/forms/building-design/complete-design/complete-design.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__forms_building_design_design_concept_design_concept_component__ = __webpack_require__("./src/app/forms/building-design/design-concept/design-concept.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__forms_building_design_facade_design_facade_design_component__ = __webpack_require__("./src/app/forms/building-design/facade-design/facade-design.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__forms_workshop_drawing_workshop_slabs_workshop_slabs_component__ = __webpack_require__("./src/app/forms/workshop-drawing/workshop-slabs/workshop-slabs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__forms_tenders_revision_tenders_revision_component__ = __webpack_require__("./src/app/forms/tenders-revision/tenders-revision.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__forms_tenders_seperate_tenders_seperate_component__ = __webpack_require__("./src/app/forms/tenders-seperate/tenders-seperate.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__forms_3d_visualization_external_view_external_view_component__ = __webpack_require__("./src/app/forms/3d-visualization/external-view/external-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__forms_tenders_consult_tenders_consult_component__ = __webpack_require__("./src/app/forms/tenders-consult/tenders-consult.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__forms_workshop_drawing_workshop_consult_workshop_consult_component__ = __webpack_require__("./src/app/forms/workshop-drawing/workshop-consult/workshop-consult.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__forms_building_design_design_consult_design_consult_component__ = __webpack_require__("./src/app/forms/building-design/design-consult/design-consult.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__forms_safety_safety_consult_safety_consult_component__ = __webpack_require__("./src/app/forms/safety/safety-consult/safety-consult.component.ts");































var appRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__home_content_home_content_component__["a" /* HomeContentComponent */],
    },
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_1__home_content_home_content_component__["a" /* HomeContentComponent */],
    },
    {
        path: 'service/:category',
        component: __WEBPACK_IMPORTED_MODULE_2__service_details_service_details_component__["a" /* ServiceDetailsComponent */],
    },
    {
        path: 'register',
        component: __WEBPACK_IMPORTED_MODULE_3__registeration_registeration_component__["a" /* RegisterationComponent */],
    },
    {
        path: 'forms/SHOP-DRAWINGS',
        component: __WEBPACK_IMPORTED_MODULE_9__forms_workshop_drawing_workshop_drawing_component__["a" /* WorkshopDrawingComponent */],
    },
    {
        path: 'forms/Workshop-drawings-for-pre-stressed',
        component: __WEBPACK_IMPORTED_MODULE_23__forms_workshop_drawing_workshop_slabs_workshop_slabs_component__["a" /* WorkshopSlabsComponent */],
    },
    {
        path: 'forms/structural-design',
        component: __WEBPACK_IMPORTED_MODULE_10__forms_structural_design_structural_design_component__["a" /* StructuralDesignComponent */],
    },
    {
        path: 'forms/3d-visualization',
        component: __WEBPACK_IMPORTED_MODULE_11__forms_3d_visualization_3d_visualization_component__["a" /* VisualizationComponent */],
    },
    {
        path: 'forms/mechanical-design',
        component: __WEBPACK_IMPORTED_MODULE_14__forms_mechanical_design_mechanical_design_component__["a" /* MechanicalDesignComponent */],
    },
    {
        path: 'forms/Bidding-price',
        component: __WEBPACK_IMPORTED_MODULE_15__forms_contest_cost_contest_cost_component__["a" /* ContestCostComponent */],
    },
    {
        path: 'forms/Review-and-check',
        component: __WEBPACK_IMPORTED_MODULE_24__forms_tenders_revision_tenders_revision_component__["a" /* TendersRevisionComponent */],
    },
    {
        path: 'forms/External-view',
        component: __WEBPACK_IMPORTED_MODULE_26__forms_3d_visualization_external_view_external_view_component__["a" /* ExternalViewComponent */],
    },
    {
        path: 'forms/Tenders-seperate',
        component: __WEBPACK_IMPORTED_MODULE_25__forms_tenders_seperate_tenders_seperate_component__["a" /* TendersSeperateComponent */],
    },
    {
        path: 'aboutUs',
        component: __WEBPACK_IMPORTED_MODULE_4__about_us_about_us_component__["a" /* AboutUsComponent */],
    },
    {
        path: 'contactUs',
        component: __WEBPACK_IMPORTED_MODULE_5__contact_us_contact_us_component__["a" /* ContactUsComponent */],
    },
    {
        path: 'what-we-do',
        component: __WEBPACK_IMPORTED_MODULE_6__what_we_do_what_we_do_component__["a" /* WhatWeDoComponent */],
    },
    {
        path: 'myProfile',
        component: __WEBPACK_IMPORTED_MODULE_12__my_profile_my_profile_component__["a" /* MyProfileComponent */],
    },
    {
        path: 'myOrders',
        component: __WEBPACK_IMPORTED_MODULE_13__my_orders_my_orders_component__["a" /* MyOrdersComponent */],
    },
    {
        path: 'how-we-work',
        component: __WEBPACK_IMPORTED_MODULE_7__how_we_work_how_we_work_component__["a" /* HowWeWorkComponent */],
    },
    {
        path: "our-projects",
        component: __WEBPACK_IMPORTED_MODULE_8__our_projects_our_projects_component__["a" /* OurProjectsComponent */]
    },
    {
        path: "forms/safety-report",
        component: __WEBPACK_IMPORTED_MODULE_19__forms_safety_safety_report_safety_report_component__["a" /* SafetyReportComponent */]
    },
    {
        path: "forms/safety-architectrual",
        component: __WEBPACK_IMPORTED_MODULE_18__forms_safety_safet_architect_safet_architect_component__["a" /* SafetArchitectComponent */]
    },
    {
        path: "forms/fire-systems",
        component: __WEBPACK_IMPORTED_MODULE_17__forms_safety_fire_systems_fire_systems_component__["a" /* FireSystemsComponent */]
    },
    {
        path: "forms/evacuation",
        component: __WEBPACK_IMPORTED_MODULE_16__forms_safety_evacuation_report_evacuation_report_component__["a" /* EvacuationReportComponent */]
    },
    {
        path: "forms/complete-design",
        component: __WEBPACK_IMPORTED_MODULE_20__forms_building_design_complete_design_complete_design_component__["a" /* CompleteDesignComponent */]
    },
    {
        path: "forms/design-concept",
        component: __WEBPACK_IMPORTED_MODULE_21__forms_building_design_design_concept_design_concept_component__["a" /* DesignConceptComponent */]
    },
    {
        path: "forms/facade-design",
        component: __WEBPACK_IMPORTED_MODULE_22__forms_building_design_facade_design_facade_design_component__["a" /* FacadeDesignComponent */]
    },
    {
        path: "forms/tenders-consult",
        component: __WEBPACK_IMPORTED_MODULE_27__forms_tenders_consult_tenders_consult_component__["a" /* TendersConsultComponent */]
    },
    {
        path: "forms/workshop-consult",
        component: __WEBPACK_IMPORTED_MODULE_28__forms_workshop_drawing_workshop_consult_workshop_consult_component__["a" /* WorkshopConsultComponent */]
    },
    {
        path: "forms/design-consult",
        component: __WEBPACK_IMPORTED_MODULE_29__forms_building_design_design_consult_design_consult_component__["a" /* DesignConsultComponent */]
    },
    {
        path: "forms/safety-consult",
        component: __WEBPACK_IMPORTED_MODULE_30__forms_safety_safety_consult_safety_consult_component__["a" /* SafetyConsultComponent */]
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/categories-mockup.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return categories; });
var categories = {
    categories: [
        {
            name: "Design",
            descriptionHeader: "DESIGN Your DREAM",
            description: "Create & develop a unique design from conceptial to final design drawings.",
            image: "buildingBg",
            path: "[/service, {'category':'Building Design'}]",
            sub_categories: [
                {
                    name: "complete design",
                    image: "completed-des",
                    description: "Preparation of drawings and design drawings for all engineering specialties",
                    sub_categories: [
                        {
                            name: "Residential buildings",
                            path: "/forms/complete-design",
                            description: "(Villas - condominiums - towers - residential complexes)"
                        },
                        {
                            name: "Commercial and office buildings",
                            path: "/forms/complete-design",
                            description: "(Malls - Administrative buildings - Multi-use towers)"
                        },
                        {
                            name: "Tourist and entertainment buildings",
                            path: "/forms/complete-design",
                            description: "(Hotels - resthouses - gardens and parks...)"
                        },
                        {
                            name: "Public utilities and service buildings",
                            path: "/forms/complete-design",
                            description: "(Mosques - schools - hospitals - clubs...)"
                        },
                        {
                            name: "Industrial Building",
                            path: "/forms/complete-design",
                            description: "(Factories - warehouses - workshops...)"
                        }
                    ]
                },
                {
                    name: "Architectural designs",
                    image: "arch-des",
                    description: "Preparing, developing and presenting ideas and architectural designs",
                    sub_categories: [
                        {
                            name: "Design concept",
                            path: "/forms/design-concept",
                            description: "Description here"
                        },
                        {
                            name: "Façade Design",
                            path: "/forms/facade-design",
                            description: "Description here"
                        },
                        {
                            name: "3D Visualization",
                            path: "/forms/3d-visualization",
                            description: "Description here"
                        }
                    ]
                },
                {
                    name: "Structural designs",
                    image: "build-des",
                    description: "Preparing and reviewing the cost of designs and construction plans",
                    sub_categories: [
                        {
                            name: "Concrete Structures",
                            path: "/forms/structural-design",
                            description: "Description here"
                        },
                        {
                            name: "Steel Structures",
                            path: "/forms/structural-design",
                            description: "Description here"
                        },
                        {
                            name: "Post Tension Buildings",
                            path: "/forms/structural-design",
                            description: "Description here"
                        },
                        {
                            name: "Value Engineering for Structural Buildings",
                            path: "/forms/structural-design",
                            description: "Description here"
                        }
                    ]
                },
                {
                    name: "Electro-Mechanical Design",
                    image: "elec-des",
                    description: "Preparation of electrical and mechanical drawings and drawings",
                    path: "/forms/mechanical-design",
                    sub_categories: []
                },
                {
                    name: "CONSULT OUR TEAM",
                    image: "ask-col",
                    path: "/forms/design-consult",
                    sub_categories: []
                }
            ]
        },
        {
            name: "Shop Drawings",
            descriptionHeader: "ACCURATE DETAILING for PERFECT EXECUTING",
            description: "Detailed drawings from the design drawings ensure working in site without any conflict between disciplines.",
            image: "workshopBg",
            sub_categories: [
                {
                    name: "WorkShop Drawings",
                    image: "completed-des",
                    path: "/forms/SHOP-DRAWINGS",
                    sub_categories: []
                },
                {
                    name: "Workshop drawings for pre-stressed slabs and bridges",
                    image: "arch-des",
                    path: "/forms/Workshop-drawings-for-pre-stressed",
                    sub_categories: []
                },
                {
                    name: "CONSULT OUR TEAM",
                    image: "ask-col",
                    path: "/forms/workshop-consult",
                    sub_categories: []
                }
            ]
        },
        {
            name: "Tenders Studies",
            descriptionHeader: "INNOVATIVE TECHNIQUE For ACCURATE PRICING",
            description: "Cost and pricing services for tendering & bidding with ability to study the cost of each separate item.",
            image: "biddingBg",
            sub_categories: [
                {
                    name: "Bidding Pricing",
                    image: "completed-des",
                    path: "/forms/Bidding-price",
                    sub_categories: []
                },
                {
                    name: "Pricing a separate department",
                    image: "arch-des",
                    path: "/forms/Tenders-seperate",
                    sub_categories: []
                },
                {
                    name: "Review and check the prices of tenders",
                    image: "build-des",
                    path: "/forms/Review-and-check",
                    sub_categories: []
                },
                {
                    name: "CONSULT OUR TEAM",
                    image: "ask-col",
                    path: "/forms/tenders-consult",
                    sub_categories: []
                }
            ]
        },
        {
            name: "Safety Studies",
            descriptionHeader: "SAFETY For BUILDING & OCCUPANTS",
            description: "Study and analysis the building efficiency and its ability to deal with emergency cases.",
            image: "safetyBg",
            sub_categories: [
                {
                    name: "Architectural Safety Study",
                    image: "completed-des",
                    sub_categories: [
                        {
                            name: "Preparation of life safety drawings",
                            path: "/forms/safety-architectrual",
                            description: "Description here"
                        },
                        {
                            name: "Prepare a life safety report",
                            path: "/forms/safety-report",
                            description: "Description here"
                        },
                        {
                            name: "Prepare Evacuation plans",
                            path: "/forms/evacuation",
                            description: "Description here"
                        }
                    ]
                },
                {
                    name: "Fire systems and alarm systems",
                    image: "arch-des",
                    path: "/forms/fire-systems",
                    sub_categories: []
                },
                {
                    name: "CONSULT OUR TEAM",
                    image: "ask-col",
                    path: "/forms/safety-consult",
                    sub_categories: []
                }
            ]
        },
        {
            name: "CONSULT OUR TEAM",
            descriptionHeader: "FREE ANSWERS TO YOU TECHNICAL QUERIES",
            description: "Send us your technical questions and our team will provide you with the proper response ASAP",
            image: "consultBg",
            sub_categories: []
        }
    ]
};


/***/ }),

/***/ "./src/app/contact-us/contact-us.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/contact-us/contact-us.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"contact-container\">\n  <div class=\"header-container\"></div>\n\n  <div class=\"gray-section\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"contacts\">\n\n          <div class=\"col-md-6\">\n\n            <div class=\"contact-item\">\n              <label> {{'Address:' | translate}}</label>\n              <span class=\"value\">4 A Maadi, Maadi, Cairo, Egypt.</span>\n              <span class=\"value\">4 A Maadi, Maadi, Cairo, Egypt.</span>\n            </div>\n\n            <div class=\"contact-item\">\n              <label>{{'Fax:' | translate}}</label>\n              <span class=\"value\">0097144170557</span>\n            </div>\n\n            <div class=\"contact-item\">\n              <label>{{'Postcode:' | translate}}</label>\n              <span class=\"value\">11431</span>\n            </div>\n\n          </div>\n\n          <div class=\"col-md-6\">\n\n            <div class=\"contact-item\">\n              <label>{{'Telephone:' | translate}}</label>\n              <span class=\"value\">(+202) 25550000 - 25555000</span>\n            </div>\n\n            <div class=\"contact-item\">\n              <label>{{'Mobile:' |translate}}</label>\n              <span class=\"value\">(+202) 01222222222</span>\n            </div>\n\n            <div class=\"contact-item\">\n              <label>{{'Email:' | translate}}</label>\n              <span class=\"value\">info@mega.com</span>\n            </div>\n\n          </div>\n\n          <div class=\"clearfix\"></div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"container\">\n    <div class=\"form-card contact-form\">\n      <div class=\"row\">\n\n        <h1 class=\"h3 font-weight-normal form-heading\">{{'Contact Us' | translate}}</h1>\n\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Name' | translate}}</label>\n            <input type=\"text\" class=\"form-control\" placeholder=\"{{'Name' | translate}}\" />\n          </div>\n        </div>\n\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Email' | translate}}</label>\n            <input type=\"email\" class=\"form-control\" placeholder=\"{{'Email' | translate}}\" />\n          </div>\n        </div>\n\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Phone' | translate}}</label>\n            <input type=\"text\" class=\"form-control\" placeholder=\"{{'Phone' | translate}}\" />\n          </div>\n        </div>\n\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Company' | translate}}</label>\n            <input type=\"text\" class=\"form-control\" placeholder=\"{{'Company' | translate}}\" />\n          </div>\n        </div>\n\n        <div class=\"col-xs-12\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Question' | translate}}</label>\n            <textarea class=\"form-control\" rows=\"4\" placeholder=\"{{'Leave a message' | translate}}\"></textarea>\n          </div>\n        </div>\n\n        <div class=\"col-xs-12\">\n          <button class=\"btn btn-orange\"> {{'Send' | translate}} </button>\n        </div>\n\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/contact-us/contact-us.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactUsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactUsComponent = /** @class */ (function () {
    function ContactUsComponent() {
    }
    ContactUsComponent.prototype.ngOnInit = function () {
    };
    ContactUsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-contact-us',
            template: __webpack_require__("./src/app/contact-us/contact-us.component.html"),
            styles: [__webpack_require__("./src/app/contact-us/contact-us.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactUsComponent);
    return ContactUsComponent;
}());



/***/ }),

/***/ "./src/app/drop-down-lists/workshop-drawings.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return RequiredDrawings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuildingTypes; });
var RequiredDrawings = ["Architectural", "Structural", "Electrical", "sanitary", "Air Conditioning", "Safety Systems", "All"];
var BuildingTypes = [
    {
        name: "Residential buildings",
        categories: ["Residential Villas", "Residential Buildings", "Residential complexs", "Residential Towers"]
    },
    {
        name: "Commercial and office buildings",
        categories: ["Malls", "Office buildings", "Mixed-use tower"]
    },
    {
        name: "Tourist and entertainment buildings",
        categories: ["Hotels", "Hostels & Boarding Houses", "Rests & Resorts", "Parks & Public Gardens"]
    },
    {
        name: "Public utilities and service buildings",
        categories: ["Mosques", "Schools & Educational buildings", "Hospitals and medical centers", "Parking Buildings", "Stadiums and sports clubs"]
    },
    {
        name: "Industrial buildings",
        categories: ["Warehouses", "Factories", "Workshops"]
    }
];


/***/ }),

/***/ "./src/app/faq/faq.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/faq/faq.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"faq-container\">\n  <div class=\"header-container\"></div>\n  <div class=\"faq-content\">\n\n    <div class=\"gray-section\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-xs-12\">\n            <h1 class=\"h2 font-weight-normal form-heading\">FAQ</h1>\n            <div class=\"faq-main text-block\">\n              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy\n              text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen\n              book. It has survived not only five centuries.\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"dark-section\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-xs-12\">\n            <h4 class=\"h4 font-weight-normal form-heading quiz\">Lorem Ipsum is simply dummy text of the printing ?</h4>\n            <div class=\"text-block\">\n              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy\n              text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen\n              book. It has survived not only five centuries.\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"gray-section\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-xs-12\">\n            <h4 class=\"h4 font-weight-normal form-heading quiz\">Lorem Ipsum is simply dummy text of the printing ?</h4>\n            <div class=\"text-block\">\n              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy\n              text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen\n              book. It has survived not only five centuries.\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"dark-section\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-xs-12\">\n            <h4 class=\"h4 font-weight-normal form-heading quiz\">Lorem Ipsum is simply dummy text of the printing ?</h4>\n            <div class=\"text-block\">\n              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy\n              text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen\n              book. It has survived not only five centuries.\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/faq/faq.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FaqComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FaqComponent = /** @class */ (function () {
    function FaqComponent() {
    }
    FaqComponent.prototype.ngOnInit = function () {
    };
    FaqComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-faq',
            template: __webpack_require__("./src/app/faq/faq.component.html"),
            styles: [__webpack_require__("./src/app/faq/faq.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FaqComponent);
    return FaqComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"text-center\">\n  <div class=\"container\">\n\n    <div class=\"social\">\n      <ul>\n        <li>\n          <a href=\"javascript:void(0)\"> <i class=\"icon-facebook\"></i> </a>\n        </li>\n        <li>\n          <a href=\"javascript:void(0)\"> <i class=\"icon-twitter\"></i> </a>\n        </li>\n        <li>\n          <a href=\"javascript:void(0)\"> <i class=\"icon-insta\"></i> </a>\n        </li>\n      </ul>\n    </div>\n    <div class=\"copyright\">\n        ©2018 <span [routerLink]='[\"/\"]'>{{'Mega Engineering' | translate}}</span> {{'All rights reserved' | translate}}\n    </div>\n  </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/footer/footer.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/forms/3d-visualization/3d-plans/3d-plans.component.html":
/***/ (function(module, exports) {

module.exports = "<form (submit)=\"submitForm()\" class=\"form-card\">\n  <div class=\"row\">\n    <h1 class=\"h3 font-weight-normal form-heading\">{{'3D Plan' | translate}}</h1>\n\n    <div class=\"col-sm-6\">\n      <div class=\"form-group\">\n        <label class=\"required\">{{'Required drawings' | translate}}</label>\n        <select [(ngModel)]=\"visualizationModel['drawings']\" name=\"drawing\" [disabled]=\"viewOnly\" class=\"form-control\">\n          <option selected>{{'3D Plan' | translate}}</option>\n        </select>\n      </div>\n    </div>\n\n    <div class=\"col-sm-6\">\n      <div class=\"form-group\">\n        <label class=\"required\">{{'Building Type' | translate}}</label>\n        <select [(ngModel)]=\"visualizationModel['buildingType']\" name=\"type\" (change)=\"selectBuildingType($event.target.value)\" [disabled]=\"viewOnly\"\n          class=\"form-control\">\n          <option selected disabled>{{'Select Field' | translate}}</option>\n          <option *ngFor=\"let building of buildingTypes\" [value]=\"building.categories\">{{building.name}}</option>\n          <option>{{'Other' | translate}}</option>\n        </select>\n        <label *ngIf=\"!visualizationModel['buildingTypeSub'] && !validForm\" name=\"typeValidation\">{{'Please Fill this field' | translate}}</label>\n      </div>\n    </div>\n\n    <div *ngIf=\"otherText\" class=\"col-sm-6\">\n      <div class=\"form-group\">\n        <label class=\"required\">{{'Other' | translate}}</label>\n        <input [(ngModel)]=\"visualizationModel['buildingTypeSub']\" type=\"text\" name=\"other\" [disabled]=\"viewOnly\" class=\"form-control\"\n          placeholder=\"\" />\n        <label *ngIf=\"!visualizationModel['buildingTypeSub'] && !validForm && otherText\" name=\"otherValidation\">{{'Please Fill this field' | translate}}</label>\n      </div>\n    </div>\n\n    <div *ngIf=\"buildingTypesSub.length>0\" class=\"col-sm-6\">\n      <div class=\"form-group\">\n        <label class=\"required\">{{'Building Types:' | translate}}</label>\n        <select [(ngModel)]=\"visualizationModel['buildingTypeSub']\" name=\"category\" [disabled]=\"viewOnly\" class=\"form-control\">\n          <option selected disabled> {{'Select Field' | translate}}</option>\n          <option *ngFor=\"let buildingSub of buildingTypesSub\">{{buildingSub | translate}}</option>\n        </select>\n        <label *ngIf=\"!visualizationModel['buildingTypeSub'] && !validForm && buildingTypesSub.length>0\" name=\"categoryValidation\">{{'Please Fill this field' | translate}}</label>\n      </div>\n    </div>\n\n    <div class=\"col-sm-6\">\n      <div class=\"form-group\">\n        <label>{{'Number of Layouts:' | translate}}</label>\n        <input [(ngModel)]=\"visualizationModel['noOfLayouts']\" type=\"text\" name=\"layouts\" [disabled]=\"viewOnly\" class=\"form-control\"\n          placeholder=\"\" />\n      </div>\n    </div>\n\n    <div class=\"col-sm-6\">\n      <div class=\"form-group\">\n        <label class=\"required\">{{'Average Area:' | translate}}</label>\n        <input [(ngModel)]=\"visualizationModel.avgArea\" type=\"text\" name=\"area\" [disabled]=\"viewOnly\" class=\"form-control\" placeholder=\"\"\n        />\n        <label *ngIf=\"!visualizationModel.avgArea && !validForm\">{{'Please Fill this field' | translate}}</label>\n      </div>\n    </div>\n\n    <div class=\"col-sm-6\">\n      <div class=\"form-group\">\n        <label class=\"required\">{{'Country' | translate}}</label>\n        <select [(ngModel)]=\"visualizationModel['country']\" name=\"countryy\" [disabled]=\"viewOnly\" class=\"form-control\">\n          <option selected disabled> {{'Select Field' | translate}}</option>\n          <option>{{'Egypt' | translate}}</option>\n          <option>{{'Saudi Arabia' | translate}}</option>\n        </select>\n        <label *ngIf=\"!visualizationModel['country'] && !validForm\" name=\"countryValidation\">{{'Please Fill this field' | translate}}</label>\n      </div>\n    </div>\n\n    <div class=\"col-sm-6\">\n      <div class=\"form-group\">\n        <label class=\"\">{{'City' | translate}}</label>\n        <input [(ngModel)]=\"visualizationModel['city']\" type=\"text\" name=\"city\" [disabled]=\"viewOnly\" class=\"form-control\" placeholder=\"\"\n        />\n        <label *ngIf=\"!visualizationModel['city'] && !validForm\" name=\"cityValidation\">{{'Please Fill this field' | translate}}</label>\n      </div>\n    </div>\n\n    <div class=\"col-sm-6\">\n      <div class=\"form-group\">\n        <label>{{'Attachments (architectural plans)' | translate}}</label>\n        <input type=\"file\" name=\"attachment\" id=\"file\" multiple (change)=\"getFiles($event)\" class=\"form-control\" />\n      </div>\n    </div>\n\n    <div class=\"col-sm-6\">\n      <div class=\"form-group\">\n        <label class=\"required\">{{'Prefered Language' | translate}}</label>\n        <select [(ngModel)]=\"visualizationModel['language']\" name=\"country\" [disabled]=\"viewOnly\" class=\"form-control\">\n          <option selected disabled>{{'Select Field' | translate}}</option>\n          <option>English</option>\n          <option>عربي</option>\n        </select>\n        <label *ngIf=\"!visualizationModel['language'] && !validForm\" name=\"countryValidation\">{{'Please Fill this field' | translate}}</label>\n      </div>\n    </div>\n\n    <div class=\"col-xs-12\">\n      <button *ngIf=\"!viewOnly\" class=\"btn btn-orange\" type=\"submit\"> {{'Send' | translate}} </button>\n    </div>\n  </div>\n</form>"

/***/ }),

/***/ "./src/app/forms/3d-visualization/3d-plans/3d-plans.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlansComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__drop_down_lists_workshop_drawings__ = __webpack_require__("./src/app/drop-down-lists/workshop-drawings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_model_visualization__ = __webpack_require__("./src/app/forms/models/model.visualization.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_service_submit_form__ = __webpack_require__("./src/app/forms/services/service.submit-form.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_urls__ = __webpack_require__("./src/app/service-urls.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_service_get_users__ = __webpack_require__("./src/app/services/service.get-users.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_service_file_upload__ = __webpack_require__("./src/app/forms/services/service.file-upload.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PlansComponent = /** @class */ (function () {
    function PlansComponent(_FormSubmit, _Users, _FileUpload) {
        this._FormSubmit = _FormSubmit;
        this._Users = _Users;
        this._FileUpload = _FileUpload;
        this.visualizationModel = new __WEBPACK_IMPORTED_MODULE_2__models_model_visualization__["a" /* Visualization */]();
        this.otherText = false;
        this.validForm = true;
        this.viewOnly = false;
        this.orderStatus = "pending";
        this.attachments = [];
        this.drawingsList = __WEBPACK_IMPORTED_MODULE_1__drop_down_lists_workshop_drawings__["b" /* RequiredDrawings */];
        this.buildingTypes = __WEBPACK_IMPORTED_MODULE_1__drop_down_lists_workshop_drawings__["a" /* BuildingTypes */];
        this.buildingTypesSub = [];
    }
    PlansComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('formData')) {
            this.orderStatus = localStorage.getItem('orderStatus');
            this.attachments = localStorage.getItem('attachments').split(",");
            this.visualizationModel = JSON.parse(localStorage.getItem('formData'));
            if (localStorage.getItem('orderStatus') != 'processed') {
                this.viewOnly = false;
            }
            else {
                this.viewOnly = true;
            }
            if (this.visualizationModel.buildingType == "Other") {
                this.otherText = true;
            }
            else {
                this.buildingTypesSub.push(this.visualizationModel.buildingTypeSub);
            }
        }
        this.getCurrentUserInfo();
    };
    PlansComponent.prototype.selectBuildingType = function (buildingSelected) {
        if (buildingSelected == "Other") {
            this.otherText = true;
            this.visualizationModel.buildingTypeSub = "";
            this.buildingTypesSub = [];
        }
        else {
            this.otherText = false;
            this.buildingTypesSub = buildingSelected.split(",");
        }
    };
    PlansComponent.prototype.getFiles = function (e) {
        this.uploadedFiles = e;
        this.attachments = [];
        for (var _i = 0, _a = e.target.files; _i < _a.length; _i++) {
            var file = _a[_i];
            this.attachments.push(file.name);
        }
        console.log(this.attachments.toString());
    };
    PlansComponent.prototype.submitForm = function () {
        this.validateData();
    };
    PlansComponent.prototype.validateData = function () {
        if (this.visualizationModel.buildingTypeSub
            && this.visualizationModel.city
            && this.visualizationModel.country
            && this.visualizationModel.avgArea
            && this.visualizationModel.language && this.attachments) {
            this.validForm = true;
            this.saveForm(JSON.stringify(this.visualizationModel));
        }
        else {
            this.validForm = false;
        }
    };
    PlansComponent.prototype.saveForm = function (formData) {
        var _this = this;
        this._FileUpload.uploadFiles(this.uploadedFiles).subscribe(function (data) {
            // SHOW A MESSAGE RECEIVED FROM THE WEB API.
            if (data) {
                _this._FormSubmit.saveFormDetails(__WEBPACK_IMPORTED_MODULE_4__service_urls__["a" /* serviceUrls */].addOrder, _this.currentUser['id'], _this.orderStatus, "3d-visualization", _this.attachments.toString(), formData).subscribe(function (data) {
                    window.location.href = "/myOrders";
                }, function (error) {
                    console.error(error);
                });
            }
        }, function (error) {
            console.log(error.MESSAGE); // SHOW ERRORS IF ANY.
        });
    };
    PlansComponent.prototype.ngOnDestroy = function () {
        localStorage.setItem('formData', "");
        localStorage.setItem('orderStatus', "");
        localStorage.setItem('attachments', "");
    };
    PlansComponent.prototype.getCurrentUserInfo = function () {
        var _this = this;
        this._Users.getCurrentUser(__WEBPACK_IMPORTED_MODULE_4__service_urls__["a" /* serviceUrls */].getCurrentUser).subscribe(function (data) {
            if (data["id"]) {
                _this.currentUser = data;
            }
        });
    };
    PlansComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-3d-plans',
            template: __webpack_require__("./src/app/forms/3d-visualization/3d-plans/3d-plans.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_3__services_service_submit_form__["a" /* FormSubmit */], __WEBPACK_IMPORTED_MODULE_6__services_service_file_upload__["a" /* FileUpload */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_service_submit_form__["a" /* FormSubmit */], __WEBPACK_IMPORTED_MODULE_5__services_service_get_users__["a" /* Users */], __WEBPACK_IMPORTED_MODULE_6__services_service_file_upload__["a" /* FileUpload */]])
    ], PlansComponent);
    return PlansComponent;
}());



/***/ }),

/***/ "./src/app/forms/3d-visualization/3d-visualization.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"forms-container\">\n  <div class=\"container\">\n    <form (submit)=\"submitForm()\" class=\"form-card\">\n      <div class=\"row\">\n        <h1 class=\"h3 font-weight-normal form-heading\">{{'3D Visualization' | translate}}</h1>\n\n        <div *ngIf=\"!disableRequiredDrawing\" class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Required drawings' | translate}}</label>\n            <select [(ngModel)]=\"subCatSelected\" (change)=\"selectSubCat()\" name=\"drawing\" [disabled]=\"viewOnly\" class=\"form-control\">\n              <option selected value=\"external-view\">{{'External view' | translate}}</option>\n              <option selected value=\"interior-design\">{{'interior design' | translate}}</option>\n              <option selected value=\"3D-plans\">{{'3D Plan' | translate}}</option>\n            </select>\n          </div>\n        </div>\n        <br>\n        <app-external-view *ngIf=\"externalView\"></app-external-view>\n        <app-3d-plans *ngIf=\"plansView\"></app-3d-plans>\n        <app-interior-design *ngIf=\"interorView\"></app-interior-design>\n      </div>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/forms/3d-visualization/3d-visualization.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisualizationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__drop_down_lists_workshop_drawings__ = __webpack_require__("./src/app/drop-down-lists/workshop-drawings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_model_visualization__ = __webpack_require__("./src/app/forms/models/model.visualization.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_service_submit_form__ = __webpack_require__("./src/app/forms/services/service.submit-form.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_urls__ = __webpack_require__("./src/app/service-urls.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_service_get_users__ = __webpack_require__("./src/app/services/service.get-users.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_service_file_upload__ = __webpack_require__("./src/app/forms/services/service.file-upload.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var VisualizationComponent = /** @class */ (function () {
    function VisualizationComponent(_FormSubmit, _Users, _FileUpload) {
        this._FormSubmit = _FormSubmit;
        this._Users = _Users;
        this._FileUpload = _FileUpload;
        this.visualizationModel = new __WEBPACK_IMPORTED_MODULE_2__models_model_visualization__["a" /* Visualization */]();
        this.subCatSelected = "";
        this.externalView = false;
        this.plansView = false;
        this.interorView = false;
        this.otherText = false;
        this.validForm = true;
        this.viewOnly = false;
        this.disableRequiredDrawing = false;
        this.orderStatus = "pending";
        this.attachments = [];
        this.drawingsList = __WEBPACK_IMPORTED_MODULE_1__drop_down_lists_workshop_drawings__["b" /* RequiredDrawings */];
        this.buildingTypes = __WEBPACK_IMPORTED_MODULE_1__drop_down_lists_workshop_drawings__["a" /* BuildingTypes */];
        this.buildingTypesSub = [];
    }
    VisualizationComponent.prototype.selectSubCat = function () {
        if (this.subCatSelected == "external-view") {
            this.externalView = true;
            this.interorView = false;
            this.plansView = false;
        }
        else if (this.subCatSelected == "interior-design") {
            this.externalView = false;
            this.interorView = true;
            this.plansView = false;
        }
        else {
            this.externalView = false;
            this.interorView = false;
            this.plansView = true;
        }
    };
    VisualizationComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('formData')) {
            this.disableRequiredDrawing = true;
            this.orderStatus = localStorage.getItem('orderStatus');
            this.attachments = localStorage.getItem('attachments').split(",");
            this.visualizationModel = JSON.parse(localStorage.getItem('formData'));
            this.checkForm();
            if (localStorage.getItem('orderStatus') != 'processed') {
                this.viewOnly = false;
            }
            else {
                this.viewOnly = true;
            }
            if (this.visualizationModel.buildingType == "Other") {
                this.otherText = true;
            }
            else {
                this.buildingTypesSub.push(this.visualizationModel.buildingTypeSub);
            }
        }
        this.getCurrentUserInfo();
    };
    VisualizationComponent.prototype.checkForm = function () {
        this.subCatSelected = this.visualizationModel['drawings'];
        if (this.subCatSelected == "external-view") {
            this.externalView = true;
            this.interorView = false;
            this.plansView = false;
        }
        else if (this.subCatSelected == "interior-design") {
            this.externalView = false;
            this.interorView = true;
            this.plansView = false;
        }
        else {
            this.externalView = false;
            this.interorView = false;
            this.plansView = true;
        }
    };
    VisualizationComponent.prototype.selectBuildingType = function (buildingSelected) {
        if (buildingSelected == "Other") {
            this.otherText = true;
            this.visualizationModel.buildingTypeSub = "";
            this.buildingTypesSub = [];
        }
        else {
            this.otherText = false;
            this.buildingTypesSub = buildingSelected.split(",");
        }
    };
    VisualizationComponent.prototype.getFiles = function (e) {
        this.uploadedFiles = e;
        this.attachments = [];
        for (var _i = 0, _a = e.target.files; _i < _a.length; _i++) {
            var file = _a[_i];
            this.attachments.push(file.name);
        }
        console.log(this.attachments.toString());
    };
    VisualizationComponent.prototype.submitForm = function () {
        this.validateData();
    };
    VisualizationComponent.prototype.validateData = function () {
        if (this.visualizationModel.buildingTypeSub
            && this.visualizationModel.city
            && this.visualizationModel.country
            && this.visualizationModel.avgArea
            && this.visualizationModel.language && this.attachments) {
            this.validForm = true;
            this.saveForm(JSON.stringify(this.visualizationModel));
        }
        else {
            this.validForm = false;
        }
    };
    VisualizationComponent.prototype.saveForm = function (formData) {
        var _this = this;
        this._FileUpload.uploadFiles(this.uploadedFiles).subscribe(function (data) {
            // SHOW A MESSAGE RECEIVED FROM THE WEB API.
            if (data) {
                _this._FormSubmit.saveFormDetails(__WEBPACK_IMPORTED_MODULE_4__service_urls__["a" /* serviceUrls */].addOrder, _this.currentUser['id'], _this.orderStatus, "3d-visualization", _this.attachments.toString(), formData).subscribe(function (data) {
                    window.location.href = "/myOrders";
                }, function (error) {
                    console.error(error);
                });
            }
        }, function (error) {
            console.log(error.MESSAGE); // SHOW ERRORS IF ANY.
        });
    };
    VisualizationComponent.prototype.ngOnDestroy = function () {
        localStorage.setItem('formData', "");
        localStorage.setItem('orderStatus', "");
        localStorage.setItem('attachments', "");
    };
    VisualizationComponent.prototype.getCurrentUserInfo = function () {
        var _this = this;
        this._Users.getCurrentUser(__WEBPACK_IMPORTED_MODULE_4__service_urls__["a" /* serviceUrls */].getCurrentUser).subscribe(function (data) {
            if (data["id"]) {
                _this.currentUser = data;
            }
        });
    };
    VisualizationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-3d-visualization',
            template: __webpack_require__("./src/app/forms/3d-visualization/3d-visualization.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_3__services_service_submit_form__["a" /* FormSubmit */], __WEBPACK_IMPORTED_MODULE_6__services_service_file_upload__["a" /* FileUpload */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_service_submit_form__["a" /* FormSubmit */], __WEBPACK_IMPORTED_MODULE_5__services_service_get_users__["a" /* Users */], __WEBPACK_IMPORTED_MODULE_6__services_service_file_upload__["a" /* FileUpload */]])
    ], VisualizationComponent);
    return VisualizationComponent;
}());



/***/ }),

/***/ "./src/app/forms/3d-visualization/external-view/external-view.component.html":
/***/ (function(module, exports) {

module.exports = "<form (submit)=\"submitForm()\" class=\"form-card\">\n  <div class=\"row\">\n    <h1 class=\"h3 font-weight-normal form-heading\">{{'External view' | translate}}</h1>\n\n    <div class=\"col-sm-6\">\n      <div class=\"form-group\">\n        <label class=\"required\">{{'Required drawings' | translate}}</label>\n        <select [(ngModel)]=\"visualizationModel['drawings']\" name=\"drawing\" [disabled]=\"viewOnly\" class=\"form-control\">\n          <option selected>{{'External view' | translate}}</option>\n        </select>\n      </div>\n    </div>\n\n    <div class=\"col-sm-6\">\n      <div class=\"form-group\">\n        <label class=\"required\">{{'Building Type' | translate}}</label>\n        <select [(ngModel)]=\"visualizationModel['buildingType']\" name=\"type\" (change)=\"selectBuildingType($event.target.value)\" [disabled]=\"viewOnly\" class=\"form-control\">\n          <option selected disabled>{{'Select Field' | translate}}</option>\n          <option *ngFor=\"let building of buildingTypes\" [value]=\"building.categories\">{{building.name}}</option>\n          <option>{{'Other' | translate}}</option>\n        </select>\n        <label *ngIf=\"!visualizationModel['buildingTypeSub'] && !validForm\" name=\"typeValidation\">{{'Please Fill this field' | translate}}</label>\n      </div>\n    </div>\n\n    <div *ngIf=\"otherText\" class=\"col-sm-6\">\n      <div class=\"form-group\">\n        <label class=\"required\">{{'Other' | translate}}</label>\n        <input [(ngModel)]=\"visualizationModel['buildingTypeSub']\" type=\"text\" name=\"other\" [disabled]=\"viewOnly\" class=\"form-control\" placeholder=\"\"\n        />\n        <label *ngIf=\"!visualizationModel['buildingTypeSub'] && !validForm && otherText\" name=\"otherValidation\">{{'Please Fill this field' | translate}}</label>\n      </div>\n    </div>\n\n    <div *ngIf=\"buildingTypesSub.length>0\" class=\"col-sm-6\">\n      <div class=\"form-group\">\n        <label class=\"required\">{{'Building Types:' | translate}}</label>\n        <select [(ngModel)]=\"visualizationModel['buildingTypeSub']\" name=\"category\" [disabled]=\"viewOnly\" class=\"form-control\">\n          <option selected disabled> {{'Select Field' | translate}}</option>\n          <option *ngFor=\"let buildingSub of buildingTypesSub\">{{buildingSub | translate}}</option>\n        </select>\n        <label *ngIf=\"!visualizationModel['buildingTypeSub'] && !validForm && buildingTypesSub.length>0\" name=\"categoryValidation\">{{'Please Fill this field' | translate}}</label>\n      </div>\n    </div>\n\n    <div class=\"col-sm-6\">\n      <div class=\"form-group\">\n        <label class=\"required\">{{'Country' | translate}}</label>\n        <select [(ngModel)]=\"visualizationModel['country']\" name=\"countryy\" [disabled]=\"viewOnly\" class=\"form-control\">\n          <option selected disabled> {{'Select Field' | translate}}</option>\n          <option>{{'Egypt' | translate}}</option>\n          <option>{{'Saudi Arabia' | translate}}</option>\n        </select>\n        <label *ngIf=\"!visualizationModel['country'] && !validForm\" name=\"countryValidation\">{{'Please Fill this field' | translate}}</label>\n      </div>\n    </div>\n\n    <div class=\"col-sm-6\">\n      <div class=\"form-group\">\n        <label class=\"\">{{'City' | translate}}</label>\n        <input [(ngModel)]=\"visualizationModel['city']\" type=\"text\" name=\"city\" [disabled]=\"viewOnly\" class=\"form-control\" placeholder=\"\" />\n        <label *ngIf=\"!visualizationModel['city'] && !validForm\" name=\"cityValidation\">{{'Please Fill this field' | translate}}</label>\n      </div>\n    </div>\n\n    <div class=\"col-sm-6\">\n      <div class=\"form-group\">\n        <label>{{'Attachments (plans) - (elevations) - (layout/site plan)' | translate}}</label>\n        <input type=\"file\" name=\"attachment\" id=\"file\" multiple (change)=\"getFiles($event)\" class=\"form-control\" />\n      </div>\n    </div>\n    \n    <div class=\"col-sm-6\">\n      <div class=\"form-group\">\n        <label class=\"required\">{{'Prefered Language' | translate}}</label>\n        <select [(ngModel)]=\"visualizationModel['language']\" name=\"country\" [disabled]=\"viewOnly\" class=\"form-control\">\n          <option selected disabled>{{'Select Field' | translate}}</option>\n          <option>English</option>\n          <option>عربي</option>\n        </select>\n        <label *ngIf=\"!visualizationModel['language'] && !validForm\" name=\"countryValidation\">{{'Please Fill this field' | translate}}</label>\n      </div>\n    </div>\n\n    <div class=\"col-xs-12\">\n      <button *ngIf=\"!viewOnly\" class=\"btn btn-orange\" type=\"submit\"> {{'Send' | translate}} </button>\n    </div>\n  </div>\n</form>"

/***/ }),

/***/ "./src/app/forms/3d-visualization/external-view/external-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExternalViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__drop_down_lists_workshop_drawings__ = __webpack_require__("./src/app/drop-down-lists/workshop-drawings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_model_external_view__ = __webpack_require__("./src/app/forms/models/model.external-view.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_service_submit_form__ = __webpack_require__("./src/app/forms/services/service.submit-form.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_urls__ = __webpack_require__("./src/app/service-urls.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_service_get_users__ = __webpack_require__("./src/app/services/service.get-users.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_service_file_upload__ = __webpack_require__("./src/app/forms/services/service.file-upload.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ExternalViewComponent = /** @class */ (function () {
    function ExternalViewComponent(_FormSubmit, _Users, _FileUpload) {
        this._FormSubmit = _FormSubmit;
        this._Users = _Users;
        this._FileUpload = _FileUpload;
        this.visualizationModel = new __WEBPACK_IMPORTED_MODULE_2__models_model_external_view__["a" /* ExternalView */]();
        this.otherText = false;
        this.validForm = true;
        this.viewOnly = false;
        this.orderStatus = "pending";
        this.attachments = [];
        this.drawingsList = __WEBPACK_IMPORTED_MODULE_1__drop_down_lists_workshop_drawings__["b" /* RequiredDrawings */];
        this.buildingTypes = __WEBPACK_IMPORTED_MODULE_1__drop_down_lists_workshop_drawings__["a" /* BuildingTypes */];
        this.buildingTypesSub = [];
    }
    ExternalViewComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('formData')) {
            this.orderStatus = localStorage.getItem('orderStatus');
            this.attachments = localStorage.getItem('attachments').split(",");
            this.visualizationModel = JSON.parse(localStorage.getItem('formData'));
            if (localStorage.getItem('orderStatus') != 'processed') {
                this.viewOnly = false;
            }
            else {
                this.viewOnly = true;
            }
            if (this.visualizationModel.buildingType == "Other") {
                this.otherText = true;
            }
            else {
                this.buildingTypesSub.push(this.visualizationModel.buildingTypeSub);
            }
        }
        this.getCurrentUserInfo();
    };
    ExternalViewComponent.prototype.selectBuildingType = function (buildingSelected) {
        if (buildingSelected == "Other") {
            this.otherText = true;
            this.visualizationModel.buildingTypeSub = "";
            this.buildingTypesSub = [];
        }
        else {
            this.otherText = false;
            this.buildingTypesSub = buildingSelected.split(",");
        }
    };
    ExternalViewComponent.prototype.getFiles = function (e) {
        console.log(e);
        this.uploadedFiles = e;
        this.attachments = [];
        for (var _i = 0, _a = e.target.files; _i < _a.length; _i++) {
            var file = _a[_i];
            this.attachments.push(file.name);
        }
        console.log(this.attachments.toString());
    };
    ExternalViewComponent.prototype.submitForm = function () {
        this.validateData();
    };
    ExternalViewComponent.prototype.validateData = function () {
        if (this.visualizationModel.buildingTypeSub
            && this.visualizationModel.city
            && this.visualizationModel.country
            && this.visualizationModel.language && this.attachments) {
            this.validForm = true;
            this.saveForm(JSON.stringify(this.visualizationModel));
        }
        else {
            this.validForm = false;
        }
    };
    ExternalViewComponent.prototype.saveForm = function (formData) {
        var _this = this;
        this._FileUpload.uploadFiles(this.uploadedFiles).subscribe(function (data) {
            // SHOW A MESSAGE RECEIVED FROM THE WEB API.
            if (data) {
                _this._FormSubmit.saveFormDetails(__WEBPACK_IMPORTED_MODULE_4__service_urls__["a" /* serviceUrls */].addOrder, _this.currentUser['id'], _this.orderStatus, "3d-visualization", _this.attachments.toString(), formData).subscribe(function (data) {
                    window.location.href = "/myOrders";
                }, function (error) {
                    console.error(error);
                });
            }
        }, function (error) {
            console.log(error.MESSAGE); // SHOW ERRORS IF ANY.
        });
    };
    ExternalViewComponent.prototype.ngOnDestroy = function () {
        localStorage.setItem('formData', "");
        localStorage.setItem('orderStatus', "");
        localStorage.setItem('attachments', "");
    };
    ExternalViewComponent.prototype.getCurrentUserInfo = function () {
        var _this = this;
        this._Users.getCurrentUser(__WEBPACK_IMPORTED_MODULE_4__service_urls__["a" /* serviceUrls */].getCurrentUser).subscribe(function (data) {
            if (data["id"]) {
                _this.currentUser = data;
            }
        });
    };
    ExternalViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-external-view',
            template: __webpack_require__("./src/app/forms/3d-visualization/external-view/external-view.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_3__services_service_submit_form__["a" /* FormSubmit */], __WEBPACK_IMPORTED_MODULE_6__services_service_file_upload__["a" /* FileUpload */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_service_submit_form__["a" /* FormSubmit */], __WEBPACK_IMPORTED_MODULE_5__services_service_get_users__["a" /* Users */], __WEBPACK_IMPORTED_MODULE_6__services_service_file_upload__["a" /* FileUpload */]])
    ], ExternalViewComponent);
    return ExternalViewComponent;
}());



/***/ }),

/***/ "./src/app/forms/3d-visualization/interior-design/interior-design.component.html":
/***/ (function(module, exports) {

module.exports = "<form (submit)=\"submitForm()\" class=\"form-card\">\n  <div class=\"row\">\n    <h1 class=\"h3 font-weight-normal form-heading\">{{'interior design' | translate}}</h1>\n\n    <div class=\"col-sm-6\">\n      <div class=\"form-group\">\n        <label class=\"required\">{{'Required drawings' | translate}}</label>\n        <select [(ngModel)]=\"visualizationModel['drawings']\" name=\"drawing\" [disabled]=\"viewOnly\" class=\"form-control\">\n          <option selected>{{'interior design' | translate}}</option>\n        </select>\n      </div>\n    </div>\n\n    <div class=\"col-sm-6\">\n      <div class=\"form-group\">\n        <label class=\"required\">{{'Building Type' | translate}}</label>\n        <select [(ngModel)]=\"visualizationModel['buildingType']\" name=\"type\" (change)=\"selectBuildingType($event.target.value)\" [disabled]=\"viewOnly\" class=\"form-control\">\n          <option selected disabled>{{'Select Field' | translate}}</option>\n          <option *ngFor=\"let building of buildingTypes\" [value]=\"building.categories\">{{building.name}}</option>\n          <option>{{'Other' | translate}}</option>\n        </select>\n        <label *ngIf=\"!visualizationModel['buildingTypeSub'] && !validForm\" name=\"typeValidation\">{{'Please Fill this field' | translate}}</label>\n      </div>\n    </div>\n\n    <div *ngIf=\"otherText\" class=\"col-sm-6\">\n      <div class=\"form-group\">\n        <label class=\"required\">{{'Other' | translate}}</label>\n        <input [(ngModel)]=\"visualizationModel['buildingTypeSub']\" type=\"text\" name=\"other\" [disabled]=\"viewOnly\" class=\"form-control\" placeholder=\"\"\n        />\n        <label *ngIf=\"!visualizationModel['buildingTypeSub'] && !validForm && otherText\" name=\"otherValidation\">{{'Please Fill this field' | translate}}</label>\n      </div>\n    </div>\n\n    <div *ngIf=\"buildingTypesSub.length>0\" class=\"col-sm-6\">\n      <div class=\"form-group\">\n        <label class=\"required\">{{'Building Types:' | translate}}</label>\n        <select [(ngModel)]=\"visualizationModel['buildingTypeSub']\" name=\"category\" [disabled]=\"viewOnly\" class=\"form-control\">\n          <option selected disabled> {{'Select Field' | translate}}</option>\n          <option *ngFor=\"let buildingSub of buildingTypesSub\">{{buildingSub | translate}}</option>\n        </select>\n        <label *ngIf=\"!visualizationModel['buildingTypeSub'] && !validForm && buildingTypesSub.length>0\" name=\"categoryValidation\">{{'Please Fill this field' | translate}}</label>\n      </div>\n    </div>\n\n    <div class=\"col-sm-6\">\n      <div class=\"form-group\">\n        <label class=\"required\">{{'Number of Floors' | translate}}</label>\n        <input [(ngModel)]=\"visualizationModel['noOfFloors']\" type=\"text\" name=\"floors\" [disabled]=\"viewOnly\" class=\"form-control\" placeholder=\"\"\n        />\n        <label *ngIf=\"!visualizationModel['noOfFloors'] && !validForm\">{{'Please Fill this field' | translate}}</label>\n      </div>\n    </div>\n\n    <div class=\"col-sm-6\">\n      <div class=\"form-group\">\n        <label class=\"required\">{{'Country' | translate}}</label>\n        <select [(ngModel)]=\"visualizationModel['country']\" name=\"countryy\" [disabled]=\"viewOnly\" class=\"form-control\">\n          <option selected disabled> {{'Select Field' | translate}}</option>\n          <option>{{'Egypt' | translate}}</option>\n          <option>{{'Saudi Arabia' | translate}}</option>\n        </select>\n        <label *ngIf=\"!visualizationModel['country'] && !validForm\" name=\"countryValidation\">{{'Please Fill this field' | translate}}</label>\n      </div>\n    </div>\n\n    <div class=\"col-sm-6\">\n      <div class=\"form-group\">\n        <label class=\"\">{{'City' | translate}}</label>\n        <input [(ngModel)]=\"visualizationModel['city']\" type=\"text\" name=\"city\" [disabled]=\"viewOnly\" class=\"form-control\" placeholder=\"\" />\n        <label *ngIf=\"!visualizationModel['city'] && !validForm\" name=\"cityValidation\">{{'Please Fill this field' | translate}}</label>\n      </div>\n    </div>\n\n    <div class=\"col-sm-6\">\n      <div class=\"form-group\">\n        <label>{{'Attachments (architectural plan) - (floor pattern layout) - (ceiling plan) - (similar design photo)' | translate}}</label>\n        <input type=\"file\" name=\"attachment\" id=\"file\" multiple (change)=\"getFiles($event)\" class=\"form-control\" />\n      </div>\n    </div>\n    \n    <div class=\"col-sm-6\">\n      <div class=\"form-group\">\n        <label class=\"required\">{{'Prefered Language' | translate}}</label>\n        <select [(ngModel)]=\"visualizationModel['language']\" name=\"country\" [disabled]=\"viewOnly\" class=\"form-control\">\n          <option selected disabled>{{'Select Field' | translate}}</option>\n          <option>English</option>\n          <option>عربي</option>\n        </select>\n        <label *ngIf=\"!visualizationModel['language'] && !validForm\" name=\"countryValidation\">{{'Please Fill this field' | translate}}</label>\n      </div>\n    </div>\n\n    <div class=\"col-xs-12\">\n      <button *ngIf=\"!viewOnly\" class=\"btn btn-orange\" type=\"submit\"> {{'Send' | translate}} </button>\n    </div>\n  </div>\n</form>"

/***/ }),

/***/ "./src/app/forms/3d-visualization/interior-design/interior-design.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InteriorDesignComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__drop_down_lists_workshop_drawings__ = __webpack_require__("./src/app/drop-down-lists/workshop-drawings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_model_external_view__ = __webpack_require__("./src/app/forms/models/model.external-view.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_service_submit_form__ = __webpack_require__("./src/app/forms/services/service.submit-form.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_urls__ = __webpack_require__("./src/app/service-urls.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_service_get_users__ = __webpack_require__("./src/app/services/service.get-users.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_service_file_upload__ = __webpack_require__("./src/app/forms/services/service.file-upload.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var InteriorDesignComponent = /** @class */ (function () {
    function InteriorDesignComponent(_FormSubmit, _Users, _FileUpload) {
        this._FormSubmit = _FormSubmit;
        this._Users = _Users;
        this._FileUpload = _FileUpload;
        this.visualizationModel = new __WEBPACK_IMPORTED_MODULE_2__models_model_external_view__["a" /* ExternalView */]();
        this.otherText = false;
        this.validForm = true;
        this.viewOnly = false;
        this.orderStatus = "pending";
        this.attachments = [];
        this.drawingsList = __WEBPACK_IMPORTED_MODULE_1__drop_down_lists_workshop_drawings__["b" /* RequiredDrawings */];
        this.buildingTypes = __WEBPACK_IMPORTED_MODULE_1__drop_down_lists_workshop_drawings__["a" /* BuildingTypes */];
        this.buildingTypesSub = [];
    }
    InteriorDesignComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('formData')) {
            this.orderStatus = localStorage.getItem('orderStatus');
            this.attachments = localStorage.getItem('attachments').split(",");
            this.visualizationModel = JSON.parse(localStorage.getItem('formData'));
            if (localStorage.getItem('orderStatus') != 'processed') {
                this.viewOnly = false;
            }
            else {
                this.viewOnly = true;
            }
            if (this.visualizationModel.buildingType == "Other") {
                this.otherText = true;
            }
            else {
                this.buildingTypesSub.push(this.visualizationModel.buildingTypeSub);
            }
        }
        this.getCurrentUserInfo();
    };
    InteriorDesignComponent.prototype.selectBuildingType = function (buildingSelected) {
        if (buildingSelected == "Other") {
            this.otherText = true;
            this.visualizationModel.buildingTypeSub = "";
            this.buildingTypesSub = [];
        }
        else {
            this.otherText = false;
            this.buildingTypesSub = buildingSelected.split(",");
        }
    };
    InteriorDesignComponent.prototype.getFiles = function (e) {
        this.uploadedFiles = e;
        this.attachments = [];
        for (var _i = 0, _a = e.target.files; _i < _a.length; _i++) {
            var file = _a[_i];
            this.attachments.push(file.name);
        }
    };
    InteriorDesignComponent.prototype.submitForm = function () {
        this.validateData();
    };
    InteriorDesignComponent.prototype.validateData = function () {
        if (this.visualizationModel.buildingTypeSub
            && this.visualizationModel.city
            && this.visualizationModel.country
            && this.visualizationModel.language && this.attachments) {
            this.validForm = true;
            this.saveForm(JSON.stringify(this.visualizationModel));
        }
        else {
            this.validForm = false;
        }
    };
    InteriorDesignComponent.prototype.saveForm = function (formData) {
        var _this = this;
        this._FileUpload.uploadFiles(this.uploadedFiles).subscribe(function (data) {
            // SHOW A MESSAGE RECEIVED FROM THE WEB API.
            if (data) {
                _this._FormSubmit.saveFormDetails(__WEBPACK_IMPORTED_MODULE_4__service_urls__["a" /* serviceUrls */].addOrder, _this.currentUser['id'], _this.orderStatus, "3d-visualization", _this.attachments.toString(), formData).subscribe(function (data) {
                    window.location.href = "/myOrders";
                }, function (error) {
                    console.error(error);
                });
            }
        }, function (error) {
            console.log(error.MESSAGE); // SHOW ERRORS IF ANY.
        });
    };
    InteriorDesignComponent.prototype.ngOnDestroy = function () {
        localStorage.setItem('formData', "");
        localStorage.setItem('orderStatus', "");
        localStorage.setItem('attachments', "");
    };
    InteriorDesignComponent.prototype.getCurrentUserInfo = function () {
        var _this = this;
        this._Users.getCurrentUser(__WEBPACK_IMPORTED_MODULE_4__service_urls__["a" /* serviceUrls */].getCurrentUser).subscribe(function (data) {
            if (data["id"]) {
                _this.currentUser = data;
            }
        });
    };
    InteriorDesignComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-interior-design',
            template: __webpack_require__("./src/app/forms/3d-visualization/interior-design/interior-design.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_3__services_service_submit_form__["a" /* FormSubmit */], __WEBPACK_IMPORTED_MODULE_6__services_service_file_upload__["a" /* FileUpload */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_service_submit_form__["a" /* FormSubmit */], __WEBPACK_IMPORTED_MODULE_5__services_service_get_users__["a" /* Users */], __WEBPACK_IMPORTED_MODULE_6__services_service_file_upload__["a" /* FileUpload */]])
    ], InteriorDesignComponent);
    return InteriorDesignComponent;
}());



/***/ }),

/***/ "./src/app/forms/building-design/complete-design/complete-design.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"forms-container\">\n  <div class=\"container\">\n    <form (submit)=\"submitForm()\" class=\"form-card\">\n      <div class=\"row\">\n        <h1 class=\"h3 font-weight-normal form-heading\">{{'Complete Design' | translate}}</h1>\n\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Design Required' | translate}}</label>\n            <select [(ngModel)]=\"completeDesignModel['drawings']\" name=\"drawing\" [disabled]=\"viewOnly\" class=\"form-control\">\n              <option selected disabled> {{'Select Field' | translate}}</option>\n              <option *ngFor=\"let drawing of drawingsList\">{{drawing | translate}}</option>\n            </select>\n            <label *ngIf=\"!completeDesignModel['drawings'] && !validForm\" name=\"drawingValidation\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Building Type' | translate}}</label>\n            <select [(ngModel)]=\"completeDesignModel['buildingType']\" name=\"type\" (change)=\"selectBuildingType($event.target.value)\" [disabled]=\"viewOnly\" class=\"form-control\">\n              <option selected disabled>{{'Select Field' | translate}}</option>\n              <option *ngFor=\"let building of buildingTypes\" [value]=\"building.categories\">{{building.name | translate}}</option>\n              <option>{{'Other' | translate}}</option>\n            </select>\n            <label *ngIf=\"!completeDesignModel['buildingTypeSub'] && !validForm\" name=\"typeValidation\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div *ngIf=\"otherText\" class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Other' | translate}}</label>\n            <input [(ngModel)]=\"completeDesignModel['buildingTypeSub']\" type=\"text\" name=\"other\" [disabled]=\"viewOnly\" class=\"form-control\" placeholder=\"\"\n            />\n            <label *ngIf=\"!completeDesignModel['buildingTypeSub'] && !validForm && otherText\" name=\"otherValidation\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div *ngIf=\"buildingTypesSub.length>0\" class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Building Types:' | translate}}</label>\n            <select [(ngModel)]=\"completeDesignModel['buildingTypeSub']\" name=\"category\" [disabled]=\"viewOnly\" class=\"form-control\">\n              <option selected disabled> {{'Select Field' | translate}}</option>\n              <option *ngFor=\"let buildingSub of buildingTypesSub\">{{buildingSub | translate}}</option>\n            </select>\n            <label *ngIf=\"!completeDesignModel['buildingTypeSub'] && !validForm && buildingTypesSub.length>0\" name=\"categoryValidation\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Country' | translate}}</label>\n            <select [(ngModel)]=\"completeDesignModel['country']\" name=\"country\" [disabled]=\"viewOnly\" class=\"form-control\">\n              <option selected disabled> {{'Select Field' | translate}}</option>\n              <option>{{'Egypt' | translate}}</option>\n              <option>{{'Saudi Arabia' | translate}}</option>\n            </select>\n            <label *ngIf=\"!completeDesignModel['country'] && !validForm\" name=\"countryValidation\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"\">{{'City' | translate}}</label>\n            <input [(ngModel)]=\"completeDesignModel['city']\" type=\"text\" name=\"city\" [disabled]=\"viewOnly\" class=\"form-control\" placeholder=\"\" />\n            <label *ngIf=\"!completeDesignModel['city'] && !validForm\" name=\"cityValidation\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Land area' | translate}}</label>\n            <input [(ngModel)]=\"completeDesignModel['landArea']\" type=\"text\" name=\"landArea\" [disabled]=\"viewOnly\" class=\"form-control\" placeholder=\"\"\n            />\n            <label *ngIf=\"!completeDesignModel['landArea'] && !validForm\" name=\"landAreaValidation\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Building area' | translate}}</label>\n            <input [(ngModel)]=\"completeDesignModel['buildingArea']\" type=\"text\" name=\"buildingArea\" [disabled]=\"viewOnly\" class=\"form-control\" placeholder=\"\"\n            />\n            <label *ngIf=\"!completeDesignModel['buildingArea'] && !validForm\" name=\"buildingValidation\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Number of Floors' | translate}}</label>\n            <input [(ngModel)]=\"completeDesignModel['noOfFloors']\" type=\"text\" name=\"floors\" [disabled]=\"viewOnly\" class=\"form-control\" placeholder=\"\"\n            />\n            <label *ngIf=\"!completeDesignModel['noOfFloors'] && !validForm\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div class=\"col-xs-12\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Requests & Suggestions' | translate}}</label>\n            <textarea [(ngModel)]=\"completeDesignModel['additionalRequests']\" name=\"additional\" [disabled]=\"viewOnly\" class=\"form-control\"\n              rows=\"4\"></textarea>\n            <label *ngIf=\"!completeDesignModel['additionalRequests'] && !validForm\" name=\"additionalValidation\" class=\"required\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label>{{'Upload attachment' | translate}}</label>\n            <input type=\"file\" name=\"attachment\" id=\"file\" multiple (change)=\"getFiles($event)\" class=\"form-control\" />\n          </div>\n        </div>\n        \n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Prefered Language' | translate}}</label>\n            <select [(ngModel)]=\"completeDesignModel['language']\" name=\"language\" [disabled]=\"viewOnly\" class=\"form-control\">\n              <option selected disabled>{{'Select Field' | translate}}</option>\n              <option>English</option>\n              <option>عربي</option>\n            </select>\n            <label *ngIf=\"!completeDesignModel['language'] && !validForm\" name=\"languageValidation\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div class=\"col-xs-12\">\n          <button *ngIf=\"!viewOnly\" class=\"btn btn-orange\" type=\"submit\"> {{'Send' | translate}} </button>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/forms/building-design/complete-design/complete-design.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompleteDesignComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__drop_down_lists_workshop_drawings__ = __webpack_require__("./src/app/drop-down-lists/workshop-drawings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_service_submit_form__ = __webpack_require__("./src/app/forms/services/service.submit-form.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_urls__ = __webpack_require__("./src/app/service-urls.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_service_get_users__ = __webpack_require__("./src/app/services/service.get-users.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_service_file_upload__ = __webpack_require__("./src/app/forms/services/service.file-upload.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_model_complete_design__ = __webpack_require__("./src/app/forms/models/model.complete-design.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CompleteDesignComponent = /** @class */ (function () {
    function CompleteDesignComponent(_FormSubmit, _Users, _ActivatedRoute, _FileUpload) {
        this._FormSubmit = _FormSubmit;
        this._Users = _Users;
        this._ActivatedRoute = _ActivatedRoute;
        this._FileUpload = _FileUpload;
        this.completeDesignModel = new __WEBPACK_IMPORTED_MODULE_7__models_model_complete_design__["a" /* CompleteDesign */]();
        this.otherText = false;
        this.validForm = true;
        this.viewOnly = false;
        this.orderStatus = "pending";
        this.attachments = [];
        this.drawingsList = __WEBPACK_IMPORTED_MODULE_1__drop_down_lists_workshop_drawings__["b" /* RequiredDrawings */];
        this.buildingTypes = __WEBPACK_IMPORTED_MODULE_1__drop_down_lists_workshop_drawings__["a" /* BuildingTypes */];
        this.buildingTypesSub = [];
    }
    CompleteDesignComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('formData')) {
            this.orderStatus = localStorage.getItem('orderStatus');
            this.attachments = localStorage.getItem('attachments').split(",");
            this.completeDesignModel = JSON.parse(localStorage.getItem('formData'));
            if (localStorage.getItem('orderStatus') != 'processed') {
                this.viewOnly = false;
            }
            else {
                this.viewOnly = true;
            }
            if (this.completeDesignModel.buildingType == "Other") {
                this.otherText = true;
            }
            else {
                this.buildingTypesSub.push(this.completeDesignModel.buildingTypeSub);
            }
        }
        this.getCurrentUserInfo();
    };
    CompleteDesignComponent.prototype.selectBuildingType = function (buildingSelected) {
        if (buildingSelected == "Other") {
            this.otherText = true;
            this.completeDesignModel.buildingTypeSub = "";
            this.buildingTypesSub = [];
        }
        else {
            this.otherText = false;
            this.buildingTypesSub = buildingSelected.split(",");
        }
    };
    CompleteDesignComponent.prototype.getFiles = function (e) {
        this.uploadedFiles = e;
        this.attachments = [];
        for (var _i = 0, _a = e.target.files; _i < _a.length; _i++) {
            var file = _a[_i];
            this.attachments.push(file.name);
        }
        console.log(this.attachments.toString());
    };
    CompleteDesignComponent.prototype.submitForm = function () {
        this.validateData();
    };
    CompleteDesignComponent.prototype.validateData = function () {
        if (this.completeDesignModel.buildingType
            && this.completeDesignModel.buildingTypeSub
            && this.completeDesignModel.city
            && this.completeDesignModel.country
            && this.completeDesignModel.noOfFloors
            && this.completeDesignModel.additionalRequests
            && this.completeDesignModel.buildingArea
            && this.completeDesignModel.landArea && this.attachments) {
            this.validForm = true;
            this.saveForm(JSON.stringify(this.completeDesignModel));
        }
        else {
            this.validForm = false;
        }
    };
    CompleteDesignComponent.prototype.saveForm = function (formData) {
        var _this = this;
        this._FileUpload.uploadFiles(this.uploadedFiles).subscribe(function (data) {
            // SHOW A MESSAGE RECEIVED FROM THE WEB API.
            if (data) {
                _this._FormSubmit.saveFormDetails(__WEBPACK_IMPORTED_MODULE_3__service_urls__["a" /* serviceUrls */].addOrder, _this.currentUser['id'], _this.orderStatus, "complete-design", _this.attachments.toString(), formData).subscribe(function (data) {
                    window.location.href = "/myOrders";
                }, function (error) {
                    console.error(error);
                });
            }
        }, function (error) {
            console.log(error.MESSAGE); // SHOW ERRORS IF ANY.
        });
    };
    CompleteDesignComponent.prototype.ngOnDestroy = function () {
        localStorage.setItem('formData', "");
        localStorage.setItem('orderStatus', "");
        localStorage.setItem('attachments', "");
    };
    CompleteDesignComponent.prototype.getCurrentUserInfo = function () {
        var _this = this;
        this._Users.getCurrentUser(__WEBPACK_IMPORTED_MODULE_3__service_urls__["a" /* serviceUrls */].getCurrentUser).subscribe(function (data) {
            if (data["id"]) {
                _this.currentUser = data;
            }
        });
    };
    CompleteDesignComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-complete-design',
            template: __webpack_require__("./src/app/forms/building-design/complete-design/complete-design.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_service_submit_form__["a" /* FormSubmit */], __WEBPACK_IMPORTED_MODULE_6__services_service_file_upload__["a" /* FileUpload */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_service_submit_form__["a" /* FormSubmit */], __WEBPACK_IMPORTED_MODULE_4__services_service_get_users__["a" /* Users */], __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_6__services_service_file_upload__["a" /* FileUpload */]])
    ], CompleteDesignComponent);
    return CompleteDesignComponent;
}());



/***/ }),

/***/ "./src/app/forms/building-design/design-concept/design-concept.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"forms-container\">\n  <div class=\"container\">\n    <form (submit)=\"submitForm()\" class=\"form-card\">\n      <div class=\"row\">\n        <h1 class=\"h3 font-weight-normal form-heading\">{{'Design concept' | translate}}</h1>\n\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Design Required' | translate}}</label>\n            <select [(ngModel)]=\"designConcept['drawings']\" name=\"drawing\" [disabled]=\"viewOnly\" class=\"form-control\">\n              <option selected>{{'Concept' | translate}}</option>\n            </select>\n            <label *ngIf=\"!designConcept['drawings'] && !validForm\" name=\"drawingValidation\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Building Type' | translate}}</label>\n            <select [(ngModel)]=\"designConcept['buildingType']\" name=\"type\" (change)=\"selectBuildingType($event.target.value)\" [disabled]=\"viewOnly\" class=\"form-control\">\n              <option selected disabled>{{'Select Field' | translate}}</option>\n              <option *ngFor=\"let building of buildingTypes\" [value]=\"building.categories\">{{building.name | translate}}</option>\n              <option>{{'Other' | translate}}</option>\n            </select>\n            <label *ngIf=\"!designConcept['buildingTypeSub'] && !validForm\" name=\"typeValidation\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div *ngIf=\"otherText\" class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Other' | translate}}</label>\n            <input [(ngModel)]=\"designConcept['buildingTypeSub']\" type=\"text\" name=\"other\" [disabled]=\"viewOnly\" class=\"form-control\" placeholder=\"\"\n            />\n            <label *ngIf=\"!designConcept['buildingTypeSub'] && !validForm && otherText\" name=\"otherValidation\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div *ngIf=\"buildingTypesSub.length>0\" class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Building Types:' | translate}}</label>\n            <select [(ngModel)]=\"designConcept['buildingTypeSub']\" name=\"category\" [disabled]=\"viewOnly\" class=\"form-control\">\n              <option selected disabled> {{'Select Field' | translate}}</option>\n              <option *ngFor=\"let buildingSub of buildingTypesSub\">{{buildingSub | translate}}</option>\n            </select>\n            <label *ngIf=\"!designConcept['buildingTypeSub'] && !validForm && buildingTypesSub.length>0\" name=\"categoryValidation\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Country' | translate}}</label>\n            <select [(ngModel)]=\"designConcept['country']\" name=\"country\" [disabled]=\"viewOnly\" class=\"form-control\">\n              <option selected disabled> {{'Select Field' | translate}}</option>\n              <option>{{'Egypt' | translate}}</option>\n              <option>{{'Saudi Arabia' | translate}}</option>\n            </select>\n            <label *ngIf=\"!designConcept['country'] && !validForm\" name=\"countryValidation\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"\">{{'City' | translate}}</label>\n            <input [(ngModel)]=\"designConcept['city']\" type=\"text\" name=\"city\" [disabled]=\"viewOnly\" class=\"form-control\" placeholder=\"\" />\n            <label *ngIf=\"!designConcept['city'] && !validForm\" name=\"cityValidation\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Land area' | translate}}</label>\n            <input [(ngModel)]=\"designConcept['projectSize']\" type=\"text\" name=\"projectSize\" [disabled]=\"viewOnly\" class=\"form-control\" placeholder=\"\"\n            />\n            <label *ngIf=\"!designConcept['projectSize'] && !validForm\" name=\"projectSize\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Building area' | translate}}</label>\n            <input [(ngModel)]=\"designConcept['buildingSize']\" type=\"text\" name=\"buildingSize\" [disabled]=\"viewOnly\" class=\"form-control\" placeholder=\"\"\n            />\n            <label *ngIf=\"!designConcept['buildingSize'] && !validForm\" name=\"buildingValidation\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Number of Floors' | translate}}</label>\n            <input [(ngModel)]=\"designConcept['noOfFloors']\" type=\"text\" name=\"floors\" [disabled]=\"viewOnly\" class=\"form-control\" placeholder=\"\"\n            />\n            <label *ngIf=\"!designConcept['noOfFloors'] && !validForm\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div class=\"col-xs-12\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Requests & Suggestions' | translate}}</label>\n            <textarea [(ngModel)]=\"designConcept['additionalRequests']\" name=\"additional\" [disabled]=\"viewOnly\" class=\"form-control\"\n              rows=\"4\"></textarea>\n            <label *ngIf=\"!designConcept['additionalRequests'] && !validForm\" name=\"additionalValidation\" class=\"required\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label>{{'Upload attachment' | translate}}</label>\n            <input type=\"file\" name=\"attachment\" id=\"file\" multiple (change)=\"getFiles($event)\" class=\"form-control\" />\n          </div>\n        </div>\n        \n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Prefered Language' | translate}}</label>\n            <select [(ngModel)]=\"designConcept['language']\" name=\"language\" [disabled]=\"viewOnly\" class=\"form-control\">\n              <option selected disabled>{{'Select Field' | translate}}</option>\n              <option>English</option>\n              <option>عربي</option>\n            </select>\n            <label *ngIf=\"!designConcept['language'] && !validForm\" name=\"languageValidation\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div class=\"col-xs-12\">\n          <button *ngIf=\"!viewOnly\" class=\"btn btn-orange\" type=\"submit\"> {{'Send' | translate}} </button>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/forms/building-design/design-concept/design-concept.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DesignConceptComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__drop_down_lists_workshop_drawings__ = __webpack_require__("./src/app/drop-down-lists/workshop-drawings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_service_submit_form__ = __webpack_require__("./src/app/forms/services/service.submit-form.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_urls__ = __webpack_require__("./src/app/service-urls.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_service_get_users__ = __webpack_require__("./src/app/services/service.get-users.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_service_file_upload__ = __webpack_require__("./src/app/forms/services/service.file-upload.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_model_complete_design__ = __webpack_require__("./src/app/forms/models/model.complete-design.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var DesignConceptComponent = /** @class */ (function () {
    function DesignConceptComponent(_FormSubmit, _Users, _ActivatedRoute, _FileUpload) {
        this._FormSubmit = _FormSubmit;
        this._Users = _Users;
        this._ActivatedRoute = _ActivatedRoute;
        this._FileUpload = _FileUpload;
        this.designConcept = new __WEBPACK_IMPORTED_MODULE_7__models_model_complete_design__["a" /* CompleteDesign */]();
        this.otherText = false;
        this.validForm = true;
        this.viewOnly = false;
        this.orderStatus = "pending";
        this.attachments = [];
        this.drawingsList = __WEBPACK_IMPORTED_MODULE_1__drop_down_lists_workshop_drawings__["b" /* RequiredDrawings */];
        this.buildingTypes = __WEBPACK_IMPORTED_MODULE_1__drop_down_lists_workshop_drawings__["a" /* BuildingTypes */];
        this.buildingTypesSub = [];
    }
    DesignConceptComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('formData')) {
            this.orderStatus = localStorage.getItem('orderStatus');
            this.attachments = localStorage.getItem('attachments').split(",");
            this.designConcept = JSON.parse(localStorage.getItem('formData'));
            if (localStorage.getItem('orderStatus') != 'processed') {
                this.viewOnly = false;
            }
            else {
                this.viewOnly = true;
            }
            if (this.designConcept.buildingType == "Other") {
                this.otherText = true;
            }
            else {
                this.buildingTypesSub.push(this.designConcept.buildingTypeSub);
            }
        }
        this.getCurrentUserInfo();
    };
    DesignConceptComponent.prototype.selectBuildingType = function (buildingSelected) {
        if (buildingSelected == "Other") {
            this.otherText = true;
            this.designConcept.buildingTypeSub = "";
            this.buildingTypesSub = [];
        }
        else {
            this.otherText = false;
            this.buildingTypesSub = buildingSelected.split(",");
        }
    };
    DesignConceptComponent.prototype.getFiles = function (e) {
        this.uploadedFiles = e;
        this.attachments = [];
        for (var _i = 0, _a = e.target.files; _i < _a.length; _i++) {
            var file = _a[_i];
            this.attachments.push(file.name);
        }
        console.log(this.attachments.toString());
    };
    DesignConceptComponent.prototype.submitForm = function () {
        this.validateData();
    };
    DesignConceptComponent.prototype.validateData = function () {
        if (this.designConcept.buildingType
            && this.designConcept.buildingTypeSub
            && this.designConcept.city
            && this.designConcept.country
            && this.designConcept.noOfFloors
            && this.designConcept.additionalRequests
            && this.designConcept.buildingArea
            && this.designConcept.landArea && this.attachments) {
            this.validForm = true;
            this.saveForm(JSON.stringify(this.designConcept));
        }
        else {
            this.validForm = false;
        }
        console.log(this.validForm);
        console.log(this.designConcept);
    };
    DesignConceptComponent.prototype.saveForm = function (formData) {
        var _this = this;
        this._FileUpload.uploadFiles(this.uploadedFiles).subscribe(function (data) {
            // SHOW A MESSAGE RECEIVED FROM THE WEB API.
            if (data) {
                _this._FormSubmit.saveFormDetails(__WEBPACK_IMPORTED_MODULE_3__service_urls__["a" /* serviceUrls */].addOrder, _this.currentUser['id'], _this.orderStatus, "design-concept", _this.attachments.toString(), formData).subscribe(function (data) {
                    window.location.href = "/myOrders";
                }, function (error) {
                    console.error(error);
                });
            }
        }, function (error) {
            console.log(error.MESSAGE); // SHOW ERRORS IF ANY.
        });
    };
    DesignConceptComponent.prototype.ngOnDestroy = function () {
        localStorage.setItem('formData', "");
        localStorage.setItem('orderStatus', "");
        localStorage.setItem('attachments', "");
    };
    DesignConceptComponent.prototype.getCurrentUserInfo = function () {
        var _this = this;
        this._Users.getCurrentUser(__WEBPACK_IMPORTED_MODULE_3__service_urls__["a" /* serviceUrls */].getCurrentUser).subscribe(function (data) {
            if (data["id"]) {
                _this.currentUser = data;
            }
        });
    };
    DesignConceptComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-design-concept',
            template: __webpack_require__("./src/app/forms/building-design/design-concept/design-concept.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_service_submit_form__["a" /* FormSubmit */], __WEBPACK_IMPORTED_MODULE_6__services_service_file_upload__["a" /* FileUpload */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_service_submit_form__["a" /* FormSubmit */], __WEBPACK_IMPORTED_MODULE_4__services_service_get_users__["a" /* Users */], __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_6__services_service_file_upload__["a" /* FileUpload */]])
    ], DesignConceptComponent);
    return DesignConceptComponent;
}());



/***/ }),

/***/ "./src/app/forms/building-design/design-consult/design-consult.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"forms-container\">\n  <div class=\"container\">\n    <form (submit)=\"submitForm()\" class=\"form-card\">\n      <div class=\"row\">\n        <h1 class=\"h3 font-weight-normal form-heading\">{{'Consulting Engineering Designs' | translate}}</h1>\n\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'consult us in' | translate}}</label>\n            <select [(ngModel)]=\"consultUs['consultIn']\" name=\"consult\" [disabled]=\"viewOnly\" class=\"form-control\">\n              <option selected disabled> {{'Select Field' | translate}}</option>\n              <option>{{'Architectural designs' | translate}}</option>\n              <option>{{'Structural Designs' | translate}}</option>\n              <option>{{'Value Engineering for Structural Buildings' | translate}}</option>\n            </select>\n            <label *ngIf=\"!consultUs['consultIn'] && !validForm\" name=\"consultValidation\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Country' | translate}}</label>\n            <select [(ngModel)]=\"consultUs['country']\" name=\"country\" [disabled]=\"viewOnly\" class=\"form-control\">\n              <option selected disabled> {{'Select Field' | translate}}</option>\n              <option>{{'Egypt' | translate}}</option>\n              <option>{{'Saudi Arabia' | translate}}</option>\n            </select>\n            <label *ngIf=\"!consultUs['country'] && !validForm\" name=\"countryValidation\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"\">{{'City' | translate}}</label>\n            <input [(ngModel)]=\"consultUs['city']\" type=\"text\" name=\"city\" [disabled]=\"viewOnly\" class=\"form-control\" placeholder=\"\" />\n            <label *ngIf=\"!consultUs['city'] && !validForm\" name=\"cityValidation\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Building Type' | translate}}</label>\n            <select [(ngModel)]=\"consultUs['buildingType']\" name=\"type\" (change)=\"selectBuildingType($event.target.value)\" [disabled]=\"viewOnly\" class=\"form-control\">\n              <option selected disabled>{{'Select Field' | translate}}</option>\n              <option *ngFor=\"let building of buildingTypes\" [value]=\"building.categories\">{{building.name | translate}}</option>\n              <option>{{'Other' | translate}}</option>\n            </select>\n            <label *ngIf=\"!consultUs['buildingTypeSub'] && !validForm\" name=\"typeValidation\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div *ngIf=\"otherText\" class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Other' | translate}}</label>\n            <input [(ngModel)]=\"consultUs['buildingTypeSub']\" type=\"text\" name=\"other\" [disabled]=\"viewOnly\" class=\"form-control\" placeholder=\"\"\n            />\n            <label *ngIf=\"!consultUs['buildingTypeSub'] && !validForm && otherText\" name=\"otherValidation\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div *ngIf=\"buildingTypesSub.length>0\" class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Building Types:' | translate}}</label>\n            <select [(ngModel)]=\"consultUs['buildingTypeSub']\" name=\"category\" [disabled]=\"viewOnly\" class=\"form-control\">\n              <option selected disabled> {{'Select Field' | translate}}</option>\n              <option *ngFor=\"let buildingSub of buildingTypesSub\">{{buildingSub | translate}}</option>\n            </select>\n            <label *ngIf=\"!consultUs['buildingTypeSub'] && !validForm && buildingTypesSub.length>0\" name=\"categoryValidation\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div class=\"col-xs-12\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Type your question' | translate}}</label>\n            <textarea [(ngModel)]=\"consultUs['questionInput']\" name=\"question\" [disabled]=\"viewOnly\" class=\"form-control\"\n              rows=\"4\"></textarea>\n            <label *ngIf=\"!consultUs['questionInput'] && !validForm\" name=\"questionValidation\" class=\"required\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label>{{'Attachments' | translate}}</label>\n            <input type=\"file\" name=\"attachment\" id=\"file\" multiple (change)=\"getFiles($event)\" class=\"form-control\" />\n          </div>\n        </div>\n\n        <div class=\"col-xs-12\">\n          <button *ngIf=\"!viewOnly\" class=\"btn btn-orange\" type=\"submit\"> {{'Send' | translate}} </button>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/forms/building-design/design-consult/design-consult.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DesignConsultComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__drop_down_lists_workshop_drawings__ = __webpack_require__("./src/app/drop-down-lists/workshop-drawings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_service_submit_form__ = __webpack_require__("./src/app/forms/services/service.submit-form.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_urls__ = __webpack_require__("./src/app/service-urls.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_service_get_users__ = __webpack_require__("./src/app/services/service.get-users.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_service_file_upload__ = __webpack_require__("./src/app/forms/services/service.file-upload.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_model_consult__ = __webpack_require__("./src/app/forms/models/model.consult.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var DesignConsultComponent = /** @class */ (function () {
    function DesignConsultComponent(_FormSubmit, _Users, _ActivatedRoute, _FileUpload) {
        this._FormSubmit = _FormSubmit;
        this._Users = _Users;
        this._ActivatedRoute = _ActivatedRoute;
        this._FileUpload = _FileUpload;
        this.consultUs = new __WEBPACK_IMPORTED_MODULE_7__models_model_consult__["a" /* Consultation */]();
        this.otherText = false;
        this.validForm = true;
        this.viewOnly = false;
        this.orderStatus = "pending";
        this.attachments = [];
        this.drawingsList = __WEBPACK_IMPORTED_MODULE_1__drop_down_lists_workshop_drawings__["b" /* RequiredDrawings */];
        this.buildingTypes = __WEBPACK_IMPORTED_MODULE_1__drop_down_lists_workshop_drawings__["a" /* BuildingTypes */];
        this.buildingTypesSub = [];
    }
    DesignConsultComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('formData')) {
            this.orderStatus = localStorage.getItem('orderStatus');
            this.attachments = localStorage.getItem('attachments').split(",");
            this.consultUs = JSON.parse(localStorage.getItem('formData'));
            if (localStorage.getItem('orderStatus') != 'processed') {
                this.viewOnly = false;
            }
            else {
                this.viewOnly = true;
            }
            if (this.consultUs.buildingType == "Other") {
                this.otherText = true;
            }
            else {
                this.buildingTypesSub.push(this.consultUs.buildingTypeSub);
            }
        }
        this.getCurrentUserInfo();
    };
    DesignConsultComponent.prototype.selectBuildingType = function (buildingSelected) {
        if (buildingSelected == "Other") {
            this.otherText = true;
            this.consultUs.buildingTypeSub = "";
            this.buildingTypesSub = [];
        }
        else {
            this.otherText = false;
            this.buildingTypesSub = buildingSelected.split(",");
        }
    };
    DesignConsultComponent.prototype.getFiles = function (e) {
        this.uploadedFiles = e;
        this.attachments = [];
        for (var _i = 0, _a = e.target.files; _i < _a.length; _i++) {
            var file = _a[_i];
            this.attachments.push(file.name);
        }
        console.log(this.attachments.toString());
    };
    DesignConsultComponent.prototype.submitForm = function () {
        this.validateData();
    };
    DesignConsultComponent.prototype.validateData = function () {
        if (this.consultUs.buildingType
            && this.consultUs.buildingTypeSub
            && this.consultUs.city
            && this.consultUs.country && this.consultUs.questionInput && this.attachments) {
            this.validForm = true;
            this.saveForm(JSON.stringify(this.consultUs));
        }
        else {
            this.validForm = false;
        }
    };
    DesignConsultComponent.prototype.saveForm = function (formData) {
        var _this = this;
        this._FileUpload.uploadFiles(this.uploadedFiles).subscribe(function (data) {
            // SHOW A MESSAGE RECEIVED FROM THE WEB API.
            if (data) {
                _this._FormSubmit.saveFormDetails(__WEBPACK_IMPORTED_MODULE_3__service_urls__["a" /* serviceUrls */].addOrder, _this.currentUser['id'], _this.orderStatus, "design-consult", _this.attachments.toString(), formData).subscribe(function (data) {
                    window.location.href = "/myOrders";
                }, function (error) {
                    console.error(error);
                });
            }
        }, function (error) {
            console.log(error.MESSAGE); // SHOW ERRORS IF ANY.
        });
    };
    DesignConsultComponent.prototype.ngOnDestroy = function () {
        localStorage.setItem('formData', "");
        localStorage.setItem('orderStatus', "");
        localStorage.setItem('attachments', "");
    };
    DesignConsultComponent.prototype.getCurrentUserInfo = function () {
        var _this = this;
        this._Users.getCurrentUser(__WEBPACK_IMPORTED_MODULE_3__service_urls__["a" /* serviceUrls */].getCurrentUser).subscribe(function (data) {
            if (data["id"]) {
                _this.currentUser = data;
            }
        });
    };
    DesignConsultComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-design-consult',
            template: __webpack_require__("./src/app/forms/building-design/design-consult/design-consult.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_service_submit_form__["a" /* FormSubmit */], __WEBPACK_IMPORTED_MODULE_6__services_service_file_upload__["a" /* FileUpload */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_service_submit_form__["a" /* FormSubmit */], __WEBPACK_IMPORTED_MODULE_4__services_service_get_users__["a" /* Users */], __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_6__services_service_file_upload__["a" /* FileUpload */]])
    ], DesignConsultComponent);
    return DesignConsultComponent;
}());



/***/ }),

/***/ "./src/app/forms/building-design/facade-design/facade-design.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"forms-container\">\n  <div class=\"container\">\n    <form (submit)=\"submitForm()\" class=\"form-card\">\n      <div class=\"row\">\n        <h1 class=\"h3 font-weight-normal form-heading\">{{'Facade Design' | translate}}</h1>\n\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Design Required' | translate}}</label>\n            <select [(ngModel)]=\"facadeTypeModel['drawings']\" name=\"drawing\" [disabled]=\"viewOnly\" class=\"form-control\">\n              <option selected> {{'Facade Design' | translate}}</option>\n            </select>\n            <label *ngIf=\"!facadeTypeModel['drawings'] && !validForm\" name=\"drawingValidation\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Facade Type' | translate}}</label>\n            <select [(ngModel)]=\"facadeTypeModel['facadeType']\" name=\"country\" [disabled]=\"viewOnly\" class=\"form-control\">\n              <option selected disabled> {{'Select Field' | translate}}</option>\n              <option>{{'New Design' | translate}}</option>\n              <option>{{'Enhance existing design' | translate}}</option>\n            </select>\n            <label *ngIf=\"!facadeTypeModel['country'] && !validForm\" name=\"countryValidation\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Country' | translate}}</label>\n            <select [(ngModel)]=\"facadeTypeModel['country']\" name=\"country\" [disabled]=\"viewOnly\" class=\"form-control\">\n              <option selected disabled> {{'Select Field' | translate}}</option>\n              <option>{{'Egypt' | translate}}</option>\n              <option>{{'Saudi Arabia' | translate}}</option>\n            </select>\n            <label *ngIf=\"!facadeTypeModel['country'] && !validForm\" name=\"countryValidation\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"\">{{'City' | translate}}</label>\n            <input [(ngModel)]=\"facadeTypeModel['city']\" type=\"text\" name=\"city\" [disabled]=\"viewOnly\" class=\"form-control\" placeholder=\"Enter City\" />\n            <label *ngIf=\"!facadeTypeModel['city'] && !validForm\" name=\"cityValidation\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Building Type' | translate}}</label>\n            <select [(ngModel)]=\"facadeTypeModel['buildingType']\" name=\"type\" (change)=\"selectBuildingType($event.target.value)\" [disabled]=\"viewOnly\" class=\"form-control\">\n              <option selected disabled>{{'Select Field' | translate}}</option>\n              <option *ngFor=\"let building of buildingTypes\" [value]=\"building.categories\">{{building.name | translate}}</option>\n              <option>{{'Other' | translate}}</option>\n            </select>\n            <label *ngIf=\"!facadeTypeModel['buildingTypeSub'] && !validForm\" name=\"typeValidation\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div *ngIf=\"otherText\" class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Other' | translate}}</label>\n            <input [(ngModel)]=\"facadeTypeModel['buildingTypeSub']\" type=\"text\" name=\"other\" [disabled]=\"viewOnly\" class=\"form-control\" placeholder=\"Enter Building Type\"\n            />\n            <label *ngIf=\"!facadeTypeModel['buildingTypeSub'] && !validForm && otherText\" name=\"otherValidation\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div *ngIf=\"buildingTypesSub.length>0\" class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Building Types:' | translate}}</label>\n            <select [(ngModel)]=\"facadeTypeModel['buildingTypeSub']\" name=\"category\" [disabled]=\"viewOnly\" class=\"form-control\">\n              <option selected disabled> {{'Select Field' | translate}}</option>\n              <option *ngFor=\"let buildingSub of buildingTypesSub\">{{buildingSub | translate}}</option>\n            </select>\n            <label *ngIf=\"!facadeTypeModel['buildingTypeSub'] && !validForm && buildingTypesSub.length>0\" name=\"categoryValidation\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Building area' | translate}}</label>\n            <input [(ngModel)]=\"facadeTypeModel['buildingArea']\" type=\"text\" name=\"buildingArea\" [disabled]=\"viewOnly\" class=\"form-control\" placeholder=\"Enter building size\"\n            />\n            <label *ngIf=\"!facadeTypeModel['buildingArea'] && !validForm\" name=\"buildingValidation\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Building Height' | translate}}</label>\n            <input [(ngModel)]=\"facadeTypeModel['buildingHeight']\" type=\"text\" name=\"buildingHeight\" [disabled]=\"viewOnly\" class=\"form-control\" placeholder=\"Enter project size\"\n            />\n            <label *ngIf=\"!facadeTypeModel['buildingHeight'] && !validForm\" name=\"buildingHeightValidation\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Architectural style' | translate}}</label>\n            <select [(ngModel)]=\"facadeTypeModel['architecturalStyle']\" name=\"architecturalStyle\" [disabled]=\"viewOnly\" class=\"form-control\">\n              <option selected disabled> {{'Select Field' | translate}}</option>\n              <option>{{'Modern' | translate}}</option>\n              <option>{{'اندلسي' | translate}}</option>\n              <option>{{'روماني' | translate}}</option>\n              <option>{{'كلاسيكي' | translate}}</option>\n              <option>{{'تراثي' | translate}}</option>\n              <option>{{'Others (Attach photo)' | translate}}</option>\n            </select>\n            <label *ngIf=\"!facadeTypeModel['architecturalStyle'] && !validForm\" name=\"architecturalStyleValidation\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Number of Floors' | translate}}</label>\n            <input [(ngModel)]=\"facadeTypeModel['noOfFloors']\" type=\"text\" name=\"floors\" [disabled]=\"viewOnly\" class=\"form-control\" placeholder=\"Enter Number of Floors\"\n            />\n            <label *ngIf=\"!facadeTypeModel['noOfFloors'] && !validForm\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div class=\"col-xs-12\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Requests & Suggestions' | translate}}</label>\n            <textarea [(ngModel)]=\"facadeTypeModel['additionalRequests']\" name=\"additional\" [disabled]=\"viewOnly\" class=\"form-control\"\n              rows=\"4\"></textarea>\n            <label *ngIf=\"!facadeTypeModel['additionalRequests'] && !validForm\" name=\"additionalValidation\" class=\"required\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label>{{'Attachments (architectural plans,elevations & sections)' | translate}}</label>\n            <input type=\"file\" name=\"attachment\" id=\"file\" multiple (change)=\"getFiles($event)\" class=\"form-control\" />\n          </div>\n        </div>\n        \n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Prefered Language' | translate}}</label>\n            <select [(ngModel)]=\"facadeTypeModel['language']\" name=\"language\" [disabled]=\"viewOnly\" class=\"form-control\">\n              <option selected disabled>{{'Select Field' | translate}}</option>\n              <option>English</option>\n              <option>عربي</option>\n            </select>\n            <label *ngIf=\"!facadeTypeModel['language'] && !validForm\" name=\"languageValidation\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div class=\"col-xs-12\">\n          <button *ngIf=\"!viewOnly\" class=\"btn btn-orange\" type=\"submit\"> {{'Send' | translate}} </button>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/forms/building-design/facade-design/facade-design.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FacadeDesignComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__drop_down_lists_workshop_drawings__ = __webpack_require__("./src/app/drop-down-lists/workshop-drawings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_service_submit_form__ = __webpack_require__("./src/app/forms/services/service.submit-form.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_urls__ = __webpack_require__("./src/app/service-urls.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_service_get_users__ = __webpack_require__("./src/app/services/service.get-users.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_service_file_upload__ = __webpack_require__("./src/app/forms/services/service.file-upload.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_model_facade_design__ = __webpack_require__("./src/app/forms/models/model.facade-design.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var FacadeDesignComponent = /** @class */ (function () {
    function FacadeDesignComponent(_FormSubmit, _Users, _ActivatedRoute, _FileUpload) {
        this._FormSubmit = _FormSubmit;
        this._Users = _Users;
        this._ActivatedRoute = _ActivatedRoute;
        this._FileUpload = _FileUpload;
        this.facadeTypeModel = new __WEBPACK_IMPORTED_MODULE_7__models_model_facade_design__["a" /* FacadeType */]();
        this.otherText = false;
        this.validForm = true;
        this.viewOnly = false;
        this.orderStatus = "pending";
        this.attachments = [];
        this.drawingsList = __WEBPACK_IMPORTED_MODULE_1__drop_down_lists_workshop_drawings__["b" /* RequiredDrawings */];
        this.buildingTypes = __WEBPACK_IMPORTED_MODULE_1__drop_down_lists_workshop_drawings__["a" /* BuildingTypes */];
        this.buildingTypesSub = [];
    }
    FacadeDesignComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('formData')) {
            this.orderStatus = localStorage.getItem('orderStatus');
            this.attachments = localStorage.getItem('attachments').split(",");
            this.facadeTypeModel = JSON.parse(localStorage.getItem('formData'));
            if (localStorage.getItem('orderStatus') != 'processed') {
                this.viewOnly = false;
            }
            else {
                this.viewOnly = true;
            }
            if (this.facadeTypeModel.buildingType == "Other") {
                this.otherText = true;
            }
            else {
                this.buildingTypesSub.push(this.facadeTypeModel.buildingTypeSub);
            }
        }
        this.getCurrentUserInfo();
    };
    FacadeDesignComponent.prototype.getFiles = function (e) {
        this.uploadedFiles = e;
        this.attachments = [];
        for (var _i = 0, _a = e.target.files; _i < _a.length; _i++) {
            var file = _a[_i];
            this.attachments.push(file.name);
        }
        console.log(this.attachments.toString());
    };
    FacadeDesignComponent.prototype.submitForm = function () {
        this.validateData();
    };
    FacadeDesignComponent.prototype.selectBuildingType = function (buildingSelected) {
        if (buildingSelected == "Other") {
            this.otherText = true;
            this.facadeTypeModel.buildingTypeSub = "";
            this.buildingTypesSub = [];
        }
        else {
            this.otherText = false;
            this.buildingTypesSub = buildingSelected.split(",");
        }
    };
    FacadeDesignComponent.prototype.validateData = function () {
        if (this.facadeTypeModel.buildingType
            && this.facadeTypeModel.buildingTypeSub
            && this.facadeTypeModel.city
            && this.facadeTypeModel.country
            && this.facadeTypeModel.noOfFloors
            && this.facadeTypeModel.additionalRequests
            && this.facadeTypeModel.buildingArea && this.attachments) {
            this.validForm = true;
            this.saveForm(JSON.stringify(this.facadeTypeModel));
        }
        else {
            this.validForm = false;
        }
    };
    FacadeDesignComponent.prototype.saveForm = function (formData) {
        var _this = this;
        this._FileUpload.uploadFiles(this.uploadedFiles).subscribe(function (data) {
            // SHOW A MESSAGE RECEIVED FROM THE WEB API.
            if (data) {
                _this._FormSubmit.saveFormDetails(__WEBPACK_IMPORTED_MODULE_3__service_urls__["a" /* serviceUrls */].addOrder, _this.currentUser['id'], _this.orderStatus, "facade-design", _this.attachments.toString(), formData).subscribe(function (data) {
                    window.location.href = "/myOrders";
                }, function (error) {
                    console.error(error);
                });
            }
        }, function (error) {
            console.log(error.MESSAGE); // SHOW ERRORS IF ANY.
        });
    };
    FacadeDesignComponent.prototype.ngOnDestroy = function () {
        localStorage.setItem('formData', "");
        localStorage.setItem('orderStatus', "");
        localStorage.setItem('attachments', "");
    };
    FacadeDesignComponent.prototype.getCurrentUserInfo = function () {
        var _this = this;
        this._Users.getCurrentUser(__WEBPACK_IMPORTED_MODULE_3__service_urls__["a" /* serviceUrls */].getCurrentUser).subscribe(function (data) {
            if (data["id"]) {
                _this.currentUser = data;
            }
        });
    };
    FacadeDesignComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-facade-design',
            template: __webpack_require__("./src/app/forms/building-design/facade-design/facade-design.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_service_submit_form__["a" /* FormSubmit */], __WEBPACK_IMPORTED_MODULE_6__services_service_file_upload__["a" /* FileUpload */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_service_submit_form__["a" /* FormSubmit */], __WEBPACK_IMPORTED_MODULE_4__services_service_get_users__["a" /* Users */], __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_6__services_service_file_upload__["a" /* FileUpload */]])
    ], FacadeDesignComponent);
    return FacadeDesignComponent;
}());



/***/ }),

/***/ "./src/app/forms/contest-cost/contest-cost.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"forms-container\">\n  <div class=\"container\">\n    <form (submit)=\"submitForm()\" class=\"form-card\">\n      <div class=\"row\">\n        <h1 class=\"h3 font-weight-normal form-heading\">{{'Bidding Pricing' | translate}}</h1>\n\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Services Required' | translate}}</label>\n            <select [(ngModel)]=\"contestCostModel.services\" name=\"service\" [disabled]=\"viewOnly\" class=\"form-control\">\n              <option selected>{{'Bidding Pricing' | translate}}</option>\n            </select>\n            <label *ngIf=\"!contestCostModel.services && !validForm\" name=\"serviceValidation\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Building Type' | translate}}</label>\n            <select [(ngModel)]=\"contestCostModel['buildingType']\" name=\"type\" (change)=\"selectBuildingType($event.target.value)\" [disabled]=\"viewOnly\" class=\"form-control\">\n              <option selected disabled>{{'Select Field' | translate}}</option>\n              <option *ngFor=\"let building of buildingTypes\" [value]=\"building.categories\">{{building.name | translate}}</option>\n              <option>{{'Other' | translate}}</option>\n            </select>\n            <label *ngIf=\"!contestCostModel['buildingTypeSub'] && !validForm\" name=\"typeValidation\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div *ngIf=\"otherText\" class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Other' | translate}}</label>\n            <input [(ngModel)]=\"contestCostModel['buildingTypeSub']\" type=\"text\" name=\"other\" [disabled]=\"viewOnly\" class=\"form-control\" placeholder=\"\"\n            />\n            <label *ngIf=\"!contestCostModel['buildingTypeSub'] && !validForm && otherText\" name=\"otherValidation\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div *ngIf=\"buildingTypesSub.length>0\" class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Building Types:' | translate}}</label>\n            <select [(ngModel)]=\"contestCostModel['buildingTypeSub']\" name=\"category\" [disabled]=\"viewOnly\" class=\"form-control\">\n              <option selected disabled> {{'Select Field' | translate}}</option>\n              <option *ngFor=\"let buildingSub of buildingTypesSub\">{{buildingSub | translate}}</option>\n            </select>\n            <label *ngIf=\"!contestCostModel['buildingTypeSub'] && !validForm && buildingTypesSub.length>0\" name=\"categoryValidation\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Country' | translate}}</label>\n            <select [(ngModel)]=\"contestCostModel['country']\" name=\"country\" [disabled]=\"viewOnly\" class=\"form-control\">\n              <option selected disabled> {{'Select Field' | translate}}</option>\n              <option>{{'Egypt' | translate}}</option>\n              <option>{{'Saudi Arabia' | translate}}</option>\n            </select>\n            <label *ngIf=\"!contestCostModel['country'] && !validForm\" name=\"countryValidation\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"\">{{'City' | translate}}</label>\n            <input [(ngModel)]=\"contestCostModel['city']\" type=\"text\" name=\"city\" [disabled]=\"viewOnly\" class=\"form-control\" placeholder=\"\" />\n            <label *ngIf=\"!contestCostModel['city'] && !validForm\" name=\"cityValidation\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Building area (m2) - (ground floor + typical floors)' | translate}}</label>\n            <input [(ngModel)]=\"contestCostModel['buildingSize']\" type=\"text\" name=\"buildingSize\" [disabled]=\"viewOnly\" class=\"form-control\" placeholder=\"\"\n            />\n            <label *ngIf=\"!contestCostModel['buildingSize'] && !validForm\" name=\"buildingValidation\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Project size' | translate}}</label>\n            <input [(ngModel)]=\"contestCostModel['projectSize']\" type=\"text\" name=\"projectSize\" [disabled]=\"viewOnly\" class=\"form-control\" placeholder=\"\"\n            />\n            <label *ngIf=\"!contestCostModel['projectSize'] && !validForm\" name=\"projectSize\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Number of Floors' | translate}}</label>\n            <input [(ngModel)]=\"contestCostModel['noOfFloors']\" type=\"text\" name=\"floors\" [disabled]=\"viewOnly\" class=\"form-control\" placeholder=\"\"\n            />\n            <label *ngIf=\"!contestCostModel['noOfFloors'] && !validForm\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div class=\"col-xs-12\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Requests & Suggestions' | translate}}</label>\n            <textarea [(ngModel)]=\"contestCostModel['additionalRequests']\" name=\"additional\" [disabled]=\"viewOnly\" class=\"form-control\"\n              rows=\"4\"></textarea>\n            <label *ngIf=\"!contestCostModel['additionalRequests'] && !validForm\" name=\"additionalValidation\" class=\"required\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label>{{'Attachments (General Site plan - Architectural plans - BOQ & Specifications)' | translate}}</label>\n            <input type=\"file\" name=\"attachment\" id=\"file\" multiple (change)=\"getFiles($event)\" class=\"form-control\" />\n          </div>\n        </div>\n\n        <div class=\"col-xs-12\">\n          <button *ngIf=\"!viewOnly\" class=\"btn btn-orange\" type=\"submit\"> {{'Send' | translate}} </button>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/forms/contest-cost/contest-cost.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContestCostComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_model_contest_cost__ = __webpack_require__("./src/app/forms/contest-cost/models/model.contest-cost.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__drop_down_lists_workshop_drawings__ = __webpack_require__("./src/app/drop-down-lists/workshop-drawings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_service_submit_form__ = __webpack_require__("./src/app/forms/services/service.submit-form.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_urls__ = __webpack_require__("./src/app/service-urls.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_service_get_users__ = __webpack_require__("./src/app/services/service.get-users.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_service_file_upload__ = __webpack_require__("./src/app/forms/services/service.file-upload.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ContestCostComponent = /** @class */ (function () {
    function ContestCostComponent(_FormSubmit, _Users, _ActivatedRoute, _FileUpload) {
        this._FormSubmit = _FormSubmit;
        this._Users = _Users;
        this._ActivatedRoute = _ActivatedRoute;
        this._FileUpload = _FileUpload;
        this.contestCostModel = new __WEBPACK_IMPORTED_MODULE_1__models_model_contest_cost__["a" /* ContestCost */]();
        this.otherText = false;
        this.validForm = true;
        this.viewOnly = false;
        this.orderStatus = "pending";
        this.attachments = [];
        this.drawingsList = __WEBPACK_IMPORTED_MODULE_2__drop_down_lists_workshop_drawings__["b" /* RequiredDrawings */];
        this.buildingTypes = __WEBPACK_IMPORTED_MODULE_2__drop_down_lists_workshop_drawings__["a" /* BuildingTypes */];
        this.buildingTypesSub = [];
    }
    ContestCostComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('formData')) {
            this.orderStatus = localStorage.getItem('orderStatus');
            this.attachments = localStorage.getItem('attachments').split(",");
            this.contestCostModel = JSON.parse(localStorage.getItem('formData'));
            if (localStorage.getItem('orderStatus') != 'processed') {
                this.viewOnly = false;
            }
            else {
                this.viewOnly = true;
            }
            if (this.contestCostModel.buildingType == "Other") {
                this.otherText = true;
            }
            else {
                this.buildingTypesSub.push(this.contestCostModel.buildingTypeSub);
            }
        }
        this.getCurrentUserInfo();
    };
    ContestCostComponent.prototype.getFiles = function (e) {
        this.uploadedFiles = e;
        this.attachments = [];
        for (var _i = 0, _a = e.target.files; _i < _a.length; _i++) {
            var file = _a[_i];
            this.attachments.push(file.name);
        }
        console.log(this.attachments.toString());
    };
    ContestCostComponent.prototype.submitForm = function () {
        this.validateData();
    };
    ContestCostComponent.prototype.validateData = function () {
        if (this.contestCostModel.buildingType
            && this.contestCostModel.buildingTypeSub
            && this.contestCostModel.city
            && this.contestCostModel.country
            && this.contestCostModel.services
            && this.contestCostModel.noOfFloors
            && this.contestCostModel.additionalRequests
            && this.contestCostModel.buildingSize
            && this.contestCostModel.projectSize && this.attachments) {
            this.validForm = true;
            this.saveForm(JSON.stringify(this.contestCostModel));
        }
        else {
            this.validForm = false;
        }
    };
    ContestCostComponent.prototype.saveForm = function (formData) {
        var _this = this;
        this._FileUpload.uploadFiles(this.uploadedFiles).subscribe(function (data) {
            // SHOW A MESSAGE RECEIVED FROM THE WEB API.
            if (data) {
                _this._FormSubmit.saveFormDetails(__WEBPACK_IMPORTED_MODULE_4__service_urls__["a" /* serviceUrls */].addOrder, _this.currentUser['id'], _this.orderStatus, "Bidding-price", _this.attachments.toString(), formData).subscribe(function (data) {
                    window.location.href = "/myOrders";
                }, function (error) {
                    console.error(error);
                });
            }
        }, function (error) {
            console.log(error.MESSAGE); // SHOW ERRORS IF ANY.
        });
    };
    ContestCostComponent.prototype.ngOnDestroy = function () {
        localStorage.setItem('formData', "");
        localStorage.setItem('orderStatus', "");
        localStorage.setItem('attachments', "");
    };
    ContestCostComponent.prototype.getCurrentUserInfo = function () {
        var _this = this;
        this._Users.getCurrentUser(__WEBPACK_IMPORTED_MODULE_4__service_urls__["a" /* serviceUrls */].getCurrentUser).subscribe(function (data) {
            if (data["id"]) {
                _this.currentUser = data;
            }
        });
    };
    ContestCostComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-contest-cost',
            template: __webpack_require__("./src/app/forms/contest-cost/contest-cost.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_3__services_service_submit_form__["a" /* FormSubmit */], __WEBPACK_IMPORTED_MODULE_7__services_service_file_upload__["a" /* FileUpload */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_service_submit_form__["a" /* FormSubmit */], __WEBPACK_IMPORTED_MODULE_5__services_service_get_users__["a" /* Users */], __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_7__services_service_file_upload__["a" /* FileUpload */]])
    ], ContestCostComponent);
    return ContestCostComponent;
}());



/***/ }),

/***/ "./src/app/forms/contest-cost/models/model.contest-cost.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContestCost; });
var ContestCost = /** @class */ (function () {
    function ContestCost() {
        this.services = '';
        this.city = '';
        this.projectSize = '';
        this.buildingSize = '';
        this.buildingType = '';
        this.buildingTypeSub = '';
        this.noOfFloors = '';
        this.additionalRequests = '';
        this.country = '';
    }
    return ContestCost;
}());



/***/ }),

/***/ "./src/app/forms/forms.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"forms-container\">\n  <div class=\"container\">\n    <div class=\"form-card\">\n      <div class=\"row\">\n        <h1 class=\"h3 font-weight-normal form-heading\">Consult Us</h1>\n\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"required\">Consult us in:</label>\n            <select class=\"form-control\">\n              <option selected disabled> Select Fieled</option>\n              <option>مخططات الورشة الميكانيكية</option>\n              <option>مخططات الورشة الكهربائية</option>\n            </select>\n          </div>\n        </div>\n\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"required\">text</label>\n            <input type=\"text\" class=\"form-control\" placeholder=\"Enter text\" />\n          </div>\n        </div>\n\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label>Upload File</label>\n            <input type=\"file\" class=\"form-control\" />\n          </div>\n        </div>\n\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"\">text</label>\n            <input type=\"text\" class=\"form-control\" placeholder=\"Enter text\" />\n          </div>\n        </div>\n\n        <div class=\"col-xs-12\">\n          <div class=\"form-group\">\n            <label class=\"required\">Leave a message</label>\n            <textarea class=\"form-control\" rows=\"4\"></textarea>\n          </div>\n        </div>\n\n        <div class=\"col-xs-12\">\n\n          <div class=\"checkbox\">\n            <label>\n              <input type=\"checkbox\"> Check me out\n            </label>\n          </div>\n\n          <div class=\"checkbox\">\n            <label>\n              <input type=\"checkbox\"> Check me out\n            </label>\n          </div>\n\n          <div class=\"radio\">\n            <label>\n              <input type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios1\" value=\"option1\" checked> Option one is this and that&mdash;be sure to include why it's great\n            </label>\n          </div>\n\n          <div class=\"radio\">\n            <label>\n              <input type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios2\" value=\"option2\"> Option two can be something else and selecting it will deselect option one\n            </label>\n          </div>\n\n          <div class=\"radio disabled\">\n            <label>\n              <input type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios3\" value=\"option3\" disabled> Option three is disabled\n            </label>\n          </div>\n\n        </div>\n        <div class=\"col-xs-12\">\n          <button class=\"btn\"> Cancel </button>\n          <button class=\"btn btn-orange\"> Send </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/forms/forms.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FormsComponent = /** @class */ (function () {
    function FormsComponent() {
    }
    FormsComponent.prototype.ngOnInit = function () {
    };
    FormsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-forms',
            template: __webpack_require__("./src/app/forms/forms.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], FormsComponent);
    return FormsComponent;
}());



/***/ }),

/***/ "./src/app/forms/mechanical-design/mechanical-design.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"forms-container\">\n  <div class=\"container\">\n    <form (submit)=\"submitForm()\" class=\"form-card\">\n      <div class=\"row\">\n        <h1 class=\"h3 font-weight-normal form-heading\">{{'Mechanical, electrical and sanitary designs' | translate}}</h1>\n\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Design Required' | translate}}</label>\n            <select [(ngModel)]=\"mechanicalDesign['drawings']\" name=\"drawing\" [disabled]=\"viewOnly\" class=\"form-control\">\n              <option selected disabled> {{'Select Field' | translate}}</option>\n              <option *ngFor=\"let drawing of drawingsList\">{{drawing | translate}}</option>\n            </select>\n            <label *ngIf=\"!mechanicalDesign['drawings'] && !validForm\" name=\"drawingValidation\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Building Type' | translate}}</label>\n            <select [(ngModel)]=\"mechanicalDesign['buildingType']\" name=\"type\" (change)=\"selectBuildingType($event.target.value)\" [disabled]=\"viewOnly\" class=\"form-control\">\n              <option selected disabled>{{'Select Field' | translate}}</option>\n              <option *ngFor=\"let building of buildingTypes\" [value]=\"building.categories\">{{building.name | translate}}</option>\n              <option>Other</option>\n            </select>\n            <label *ngIf=\"!mechanicalDesign['buildingTypeSub'] && !validForm\" name=\"typeValidation\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div *ngIf=\"otherText\" class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Other' | translate}}</label>\n            <input [(ngModel)]=\"mechanicalDesign['buildingTypeSub']\" type=\"text\" name=\"other\" [disabled]=\"viewOnly\" class=\"form-control\" placeholder=\"Enter Building Type\"\n            />\n            <label *ngIf=\"!mechanicalDesign['buildingTypeSub'] && !validForm && otherText\" name=\"otherValidation\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div *ngIf=\"buildingTypesSub.length>0\" class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Building Types:' | translate}}</label>\n            <select [(ngModel)]=\"mechanicalDesign['buildingTypeSub']\" name=\"category\" [disabled]=\"viewOnly\" class=\"form-control\">\n              <option selected disabled> {{'Select Field' | translate}}</option>\n              <option *ngFor=\"let buildingSub of buildingTypesSub\">{{buildingSub | translate}}</option>\n            </select>\n            <label *ngIf=\"!mechanicalDesign['buildingTypeSub'] && !validForm && buildingTypesSub.length>0\" name=\"categoryValidation\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Country' | translate}}</label>\n            <select [(ngModel)]=\"mechanicalDesign['country']\" name=\"countryy\" [disabled]=\"viewOnly\" class=\"form-control\">\n              <option selected disabled> {{'Select Field' | translate}}</option>\n              <option>{{'Egypt' | translate}}</option>\n              <option>{{'Saudi Arabia' | translate}}</option>\n            </select>\n            <label *ngIf=\"!mechanicalDesign['country'] && !validForm\" name=\"countryValidation\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Number of Floors' | translate}}</label>\n            <input [(ngModel)]=\"mechanicalDesign['noOfFloors']\" type=\"text\" name=\"floors\" [disabled]=\"viewOnly\" class=\"form-control\" placeholder=\"Enter Number of Floors\"\n            />\n            <label *ngIf=\"!mechanicalDesign['noOfFloors'] && !validForm\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"\">{{'City' | translate}}</label>\n            <input [(ngModel)]=\"mechanicalDesign['city']\" type=\"text\" name=\"city\" [disabled]=\"viewOnly\" class=\"form-control\" placeholder=\"Enter City\" />\n            <label *ngIf=\"!mechanicalDesign['city'] && !validForm\" name=\"cityValidation\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div class=\"col-xs-12\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Requests & Suggestions' | translate}}</label>\n            <textarea [(ngModel)]=\"mechanicalDesign['additionalRequests']\" name=\"additional\" [disabled]=\"viewOnly\" class=\"form-control\" rows=\"4\"></textarea>\n            <label *ngIf=\"!mechanicalDesign['additionalRequests'] && !validForm\" name=\"additionalValidation\" class=\"required\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label>{{'Attachments (architectural drawings)' | translate}}</label>\n            <input type=\"file\" name=\"attachment\" id=\"file\" multiple (change)=\"getFiles($event)\" class=\"form-control\" />\n          </div>\n        </div>\n        \n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Prefered Language' | translate}}</label>\n            <select [(ngModel)]=\"mechanicalDesign['language']\" name=\"country\" [disabled]=\"viewOnly\" class=\"form-control\">\n              <option selected disabled>{{'Select Field' | translate}}</option>\n              <option>English</option>\n              <option>عربي</option>\n            </select>\n            <label *ngIf=\"!mechanicalDesign['language'] && !validForm\" name=\"countryValidation\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div class=\"col-xs-12\">\n          <button *ngIf=\"!viewOnly\" class=\"btn btn-orange\" type=\"submit\"> {{'Send' | translate}} </button>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/forms/mechanical-design/mechanical-design.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MechanicalDesignComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__drop_down_lists_workshop_drawings__ = __webpack_require__("./src/app/drop-down-lists/workshop-drawings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_model_workshop_drawing__ = __webpack_require__("./src/app/forms/models/model.workshop-drawing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_service_submit_form__ = __webpack_require__("./src/app/forms/services/service.submit-form.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_urls__ = __webpack_require__("./src/app/service-urls.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_service_get_users__ = __webpack_require__("./src/app/services/service.get-users.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_service_file_upload__ = __webpack_require__("./src/app/forms/services/service.file-upload.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MechanicalDesignComponent = /** @class */ (function () {
    function MechanicalDesignComponent(_FormSubmit, _Users, _FileUpload) {
        this._FormSubmit = _FormSubmit;
        this._Users = _Users;
        this._FileUpload = _FileUpload;
        this.mechanicalDesign = new __WEBPACK_IMPORTED_MODULE_2__models_model_workshop_drawing__["a" /* WorkShopDrawings */]();
        this.otherText = false;
        this.validForm = true;
        this.viewOnly = false;
        this.orderStatus = "pending";
        this.attachments = [];
        this.drawingsList = __WEBPACK_IMPORTED_MODULE_1__drop_down_lists_workshop_drawings__["b" /* RequiredDrawings */];
        this.buildingTypes = __WEBPACK_IMPORTED_MODULE_1__drop_down_lists_workshop_drawings__["a" /* BuildingTypes */];
        this.buildingTypesSub = [];
    }
    MechanicalDesignComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('formData')) {
            this.orderStatus = localStorage.getItem('orderStatus');
            this.mechanicalDesign = JSON.parse(localStorage.getItem('formData'));
            this.attachments = localStorage.getItem('attachments').split(",");
            if (localStorage.getItem('orderStatus') != 'processed') {
                this.viewOnly = false;
            }
            else {
                this.viewOnly = true;
            }
            if (this.mechanicalDesign.buildingType == "Other") {
                this.otherText = true;
            }
            else {
                this.buildingTypesSub.push(this.mechanicalDesign.buildingTypeSub);
            }
        }
        this.getCurrentUserInfo();
    };
    MechanicalDesignComponent.prototype.selectBuildingType = function (buildingSelected) {
        if (buildingSelected == "Other") {
            this.otherText = true;
            this.mechanicalDesign.buildingTypeSub = "";
            this.buildingTypesSub = [];
        }
        else {
            this.otherText = false;
            this.buildingTypesSub = buildingSelected.split(",");
        }
    };
    MechanicalDesignComponent.prototype.submitForm = function () {
        this.validateData();
    };
    MechanicalDesignComponent.prototype.validateData = function () {
        if (this.mechanicalDesign.buildingTypeSub
            && this.mechanicalDesign.city
            && this.mechanicalDesign.country
            && this.mechanicalDesign.drawings
            && this.mechanicalDesign.noOfFloors
            && this.mechanicalDesign.additionalRequests
            && this.mechanicalDesign.language && this.attachments) {
            this.validForm = true;
            this.saveForm(JSON.stringify(this.mechanicalDesign));
        }
        else {
            this.validForm = false;
        }
    };
    MechanicalDesignComponent.prototype.getFiles = function (e) {
        this.uploadedFiles = e;
        this.attachments = [];
        for (var _i = 0, _a = e.target.files; _i < _a.length; _i++) {
            var file = _a[_i];
            this.attachments.push(file.name);
        }
        console.log(this.attachments.toString());
    };
    MechanicalDesignComponent.prototype.saveForm = function (formData) {
        var _this = this;
        this._FileUpload.uploadFiles(this.uploadedFiles).subscribe(function (data) {
            // SHOW A MESSAGE RECEIVED FROM THE WEB API.
            if (data) {
                _this._FormSubmit.saveFormDetails(__WEBPACK_IMPORTED_MODULE_4__service_urls__["a" /* serviceUrls */].addOrder, _this.currentUser['id'], _this.orderStatus, "mechanical-design", _this.attachments.toString(), formData).subscribe(function (data) {
                    window.location.href = "/myOrders";
                }, function (error) {
                    console.error(error);
                });
            }
        }, function (error) {
            console.log(error.MESSAGE); // SHOW ERRORS IF ANY.
        });
    };
    MechanicalDesignComponent.prototype.ngOnDestroy = function () {
        localStorage.setItem('formData', "");
        localStorage.setItem('orderStatus', "");
        localStorage.setItem('attachments', "");
    };
    MechanicalDesignComponent.prototype.getCurrentUserInfo = function () {
        var _this = this;
        this._Users.getCurrentUser(__WEBPACK_IMPORTED_MODULE_4__service_urls__["a" /* serviceUrls */].getCurrentUser).subscribe(function (data) {
            if (data["id"]) {
                _this.currentUser = data;
            }
        });
    };
    MechanicalDesignComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-mechanical-design',
            template: __webpack_require__("./src/app/forms/mechanical-design/mechanical-design.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_3__services_service_submit_form__["a" /* FormSubmit */], __WEBPACK_IMPORTED_MODULE_6__services_service_file_upload__["a" /* FileUpload */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_service_submit_form__["a" /* FormSubmit */], __WEBPACK_IMPORTED_MODULE_5__services_service_get_users__["a" /* Users */], __WEBPACK_IMPORTED_MODULE_6__services_service_file_upload__["a" /* FileUpload */]])
    ], MechanicalDesignComponent);
    return MechanicalDesignComponent;
}());



/***/ }),

/***/ "./src/app/forms/models/model.complete-design.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompleteDesign; });
var CompleteDesign = /** @class */ (function () {
    function CompleteDesign() {
        this.drawings = "";
        this.buildingType = "";
        this.buildingTypeSub = "";
        this.landArea = "";
        this.buildingArea = "";
        this.country = "";
        this.noOfFloors = "";
        this.city = "";
        this.additionalRequests = "";
        this.language = "";
    }
    return CompleteDesign;
}());



/***/ }),

/***/ "./src/app/forms/models/model.consult.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Consultation; });
var Consultation = /** @class */ (function () {
    function Consultation() {
        this.consultIn = "";
        this.buildingType = "";
        this.buildingTypeSub = "";
        this.questionInput = "";
        this.country = "";
        this.city = "";
    }
    return Consultation;
}());



/***/ }),

/***/ "./src/app/forms/models/model.evacuation.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EvacuationModel; });
var EvacuationModel = /** @class */ (function () {
    function EvacuationModel() {
        this.drawings = "";
        this.buildingType = "";
        this.buildingTypeSub = "";
        this.country = "";
        this.landArea = "";
        this.groundArea = "";
        this.noOfFloors = "";
        this.city = "";
        this.additionalRequests = "";
        this.language = "";
        this.comments = "";
    }
    return EvacuationModel;
}());



/***/ }),

/***/ "./src/app/forms/models/model.external-view.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExternalView; });
var ExternalView = /** @class */ (function () {
    function ExternalView() {
        this.drawings = "";
        this.buildingType = "";
        this.buildingTypeSub = "";
        this.country = "";
        this.city = "";
        this.planAttachment = "";
        this.language = "";
        this.spaceArea = "";
        this.noOfFloors = "";
    }
    return ExternalView;
}());



/***/ }),

/***/ "./src/app/forms/models/model.facade-design.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FacadeType; });
var FacadeType = /** @class */ (function () {
    function FacadeType() {
        this.drawings = "";
        this.facadeType = "";
        this.buildingType = "";
        this.buildingTypeSub = "";
        this.buildingHeight = "";
        this.buildingArea = "";
        this.country = "";
        this.noOfFloors = "";
        this.architecturalStyle = "";
        this.city = "";
        this.additionalRequests = "";
        this.language = "";
    }
    return FacadeType;
}());



/***/ }),

/***/ "./src/app/forms/models/model.fire-system.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FireSystemModel; });
var FireSystemModel = /** @class */ (function () {
    function FireSystemModel() {
        this.drawings = "";
        this.buildingType = "";
        this.buildingTypeSub = "";
        this.country = "";
        this.landArea = "";
        this.groundArea = "";
        this.noOfFloors = "";
        this.city = "";
        this.additionalRequests = "";
        this.approval = "";
        this.language = "";
        this.comments = "";
    }
    return FireSystemModel;
}());



/***/ }),

/***/ "./src/app/forms/models/model.safety-reports.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SafetyReportModel; });
var SafetyReportModel = /** @class */ (function () {
    function SafetyReportModel() {
        this.drawings = "";
        this.buildingType = "";
        this.buildingTypeSub = "";
        this.country = "";
        this.landArea = "";
        this.groundArea = "";
        this.noOfFloors = "";
        this.city = "";
        this.additionalRequests = "";
        this.checkSafety = "";
        this.language = "";
        this.comments = "";
    }
    return SafetyReportModel;
}());



/***/ }),

/***/ "./src/app/forms/models/model.visualization.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Visualization; });
var Visualization = /** @class */ (function () {
    function Visualization() {
        this.drawings = "";
        this.noOfLayouts = "";
        this.avgArea = "";
        this.buildingType = "";
        this.buildingTypeSub = "";
        this.country = "";
        this.city = "";
        this.planAttachment = "";
        this.language = "";
    }
    return Visualization;
}());



/***/ }),

/***/ "./src/app/forms/models/model.workshop-drawing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkShopDrawings; });
var WorkShopDrawings = /** @class */ (function () {
    function WorkShopDrawings() {
        this.drawings = "";
        this.buildingType = "";
        this.buildingTypeSub = "";
        this.country = "";
        this.noOfFloors = "";
        this.city = "";
        this.additionalRequests = "";
        this.language = "";
    }
    return WorkShopDrawings;
}());



/***/ }),

/***/ "./src/app/forms/safety/evacuation-report/evacuation-report.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"forms-container\">\n  <div class=\"container\">\n    <form (submit)=\"submitForm()\" class=\"form-card\">\n      <div class=\"row\">\n        <h1 class=\"h3 font-weight-normal form-heading\">{{'Evacuation plans' | translate}}</h1>\n\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Design Required' | translate}}</label>\n            <select [(ngModel)]=\"evacuationModel['drawings']\" name=\"drawing\" [disabled]=\"viewOnly\" class=\"form-control\">\n              <option selected>{{\"Evacuation plans\" | translate}}</option>\n            </select>\n            <label *ngIf=\"!evacuationModel['drawings'] && !validForm\" name=\"drawingValidation\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Building Type' | translate}}</label>\n            <select [(ngModel)]=\"evacuationModel['buildingType']\" name=\"type\" (change)=\"selectBuildingType($event.target.value)\" [disabled]=\"viewOnly\"\n              class=\"form-control\">\n              <option selected disabled>{{'Select Field' | translate}}</option>\n              <option *ngFor=\"let building of buildingTypes\" [value]=\"building.categories\">{{building.name | translate}}</option>\n              <option>{{'Other' | translate}}</option>\n            </select>\n            <label *ngIf=\"!evacuationModel['buildingTypeSub'] && !validForm\" name=\"typeValidation\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div *ngIf=\"otherText\" class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Other' | translate}}</label>\n            <input [(ngModel)]=\"evacuationModel['buildingTypeSub']\" type=\"text\" name=\"other\" [disabled]=\"viewOnly\" class=\"form-control\"\n              placeholder=\"Enter Building Type\" />\n            <label *ngIf=\"!evacuationModel['buildingTypeSub'] && !validForm && otherText\" name=\"otherValidation\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div *ngIf=\"buildingTypesSub.length>0\" class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Building Types:' | translate}}</label>\n            <select [(ngModel)]=\"evacuationModel['buildingTypeSub']\" name=\"category\" [disabled]=\"viewOnly\" class=\"form-control\">\n              <option selected disabled> {{'Select Field' | translate}}</option>\n              <option *ngFor=\"let buildingSub of buildingTypesSub\">{{buildingSub | translate}}</option>\n            </select>\n            <label *ngIf=\"!evacuationModel['buildingTypeSub'] && !validForm && buildingTypesSub.length>0\" name=\"categoryValidation\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Country' | translate}}</label>\n            <select [(ngModel)]=\"evacuationModel['country']\" name=\"countryy\" [disabled]=\"viewOnly\" class=\"form-control\">\n              <option selected disabled> {{'Select Field' | translate}}</option>\n              <option>{{'Egypt' | translate}}</option>\n              <option>{{'Saudi Arabia' | translate}}</option>\n            </select>\n            <label *ngIf=\"!evacuationModel['country'] && !validForm\" name=\"countryValidation\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"\">{{'City' | translate}}</label>\n            <input [(ngModel)]=\"evacuationModel['city']\" type=\"text\" name=\"city\" [disabled]=\"viewOnly\" class=\"form-control\" placeholder=\"\"\n            />\n            <label *ngIf=\"!evacuationModel['city'] && !validForm\" name=\"cityValidation\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Land area' | translate}}</label>\n            <input [(ngModel)]=\"evacuationModel['landArea']\" type=\"text\" name=\"floors\" [disabled]=\"viewOnly\" class=\"form-control\" placeholder=\"\"\n            />\n            <label *ngIf=\"!evacuationModel['landArea'] && !validForm\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Ground floor area' | translate}}</label>\n            <input [(ngModel)]=\"evacuationModel['groundArea']\" type=\"text\" name=\"floors\" [disabled]=\"viewOnly\" class=\"form-control\" placeholder=\"\"\n            />\n            <label *ngIf=\"!evacuationModel['groundArea'] && !validForm\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Number of Floors' | translate}}</label>\n            <input [(ngModel)]=\"evacuationModel['noOfFloors']\" type=\"text\" name=\"floors\" [disabled]=\"viewOnly\" class=\"form-control\" placeholder=\"\"\n            />\n            <label *ngIf=\"!evacuationModel['noOfFloors'] && !validForm\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div class=\"col-xs-12\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Requests & Suggestions' | translate}}</label>\n            <textarea [(ngModel)]=\"evacuationModel['additionalRequests']\" name=\"additional\" [disabled]=\"viewOnly\" class=\"form-control\"\n              rows=\"4\"></textarea>\n            <label *ngIf=\"!evacuationModel['additionalRequests'] && !validForm\" name=\"additionalValidation\" class=\"required\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label>{{'Upload attachment' | translate}}</label>\n            <input type=\"file\" name=\"attachment\" id=\"file\" multiple (change)=\"getFiles($event)\" class=\"form-control\" />\n          </div>\n        </div>\n\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Prefered Language' | translate}}</label>\n            <select [(ngModel)]=\"evacuationModel['language']\" name=\"country\" [disabled]=\"viewOnly\" class=\"form-control\">\n              <option selected disabled>{{'Select Field' | translate}}</option>\n              <option>English</option>\n              <option>عربي</option>\n            </select>\n            <label *ngIf=\"!evacuationModel['language'] && !validForm\" name=\"countryValidation\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div class=\"col-xs-12\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Notes' | translate}}</label>\n            <textarea [(ngModel)]=\"evacuationModel['comments']\" name=\"comments\" [disabled]=\"viewOnly\" class=\"form-control\"\n              rows=\"4\"></textarea>\n            <label *ngIf=\"!evacuationModel['comments'] && !validForm\" name=\"commentsValidation\" class=\"required\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div class=\"col-xs-12\">\n          <button *ngIf=\"!viewOnly\" class=\"btn btn-orange\" type=\"submit\"> {{'Send' | translate}} </button>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/forms/safety/evacuation-report/evacuation-report.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EvacuationReportComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__drop_down_lists_workshop_drawings__ = __webpack_require__("./src/app/drop-down-lists/workshop-drawings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_model_evacuation__ = __webpack_require__("./src/app/forms/models/model.evacuation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_service_submit_form__ = __webpack_require__("./src/app/forms/services/service.submit-form.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_urls__ = __webpack_require__("./src/app/service-urls.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_service_get_users__ = __webpack_require__("./src/app/services/service.get-users.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_service_file_upload__ = __webpack_require__("./src/app/forms/services/service.file-upload.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EvacuationReportComponent = /** @class */ (function () {
    function EvacuationReportComponent(_FormSubmit, _Users, _FileUpload) {
        this._FormSubmit = _FormSubmit;
        this._Users = _Users;
        this._FileUpload = _FileUpload;
        this.evacuationModel = new __WEBPACK_IMPORTED_MODULE_2__models_model_evacuation__["a" /* EvacuationModel */]();
        this.otherText = false;
        this.validForm = true;
        this.viewOnly = false;
        this.orderStatus = "pending";
        this.attachments = [];
        this.drawingsList = __WEBPACK_IMPORTED_MODULE_1__drop_down_lists_workshop_drawings__["b" /* RequiredDrawings */];
        this.buildingTypes = __WEBPACK_IMPORTED_MODULE_1__drop_down_lists_workshop_drawings__["a" /* BuildingTypes */];
        this.buildingTypesSub = [];
    }
    EvacuationReportComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('formData')) {
            this.orderStatus = localStorage.getItem('orderStatus');
            this.attachments = localStorage.getItem('attachments').split(",");
            this.evacuationModel = JSON.parse(localStorage.getItem('formData'));
            if (localStorage.getItem('orderStatus') != 'processed') {
                this.viewOnly = false;
            }
            else {
                this.viewOnly = true;
            }
            if (this.evacuationModel.buildingType == "Other") {
                this.otherText = true;
            }
            else {
                this.buildingTypesSub.push(this.evacuationModel.buildingTypeSub);
            }
        }
        this.getCurrentUserInfo();
    };
    EvacuationReportComponent.prototype.selectBuildingType = function (buildingSelected) {
        if (buildingSelected == "Other") {
            this.otherText = true;
            this.evacuationModel.buildingTypeSub = "";
            this.buildingTypesSub = [];
        }
        else {
            this.otherText = false;
            this.buildingTypesSub = buildingSelected.split(",");
        }
    };
    EvacuationReportComponent.prototype.getFiles = function (e) {
        this.uploadedFiles = e;
        this.attachments = [];
        for (var _i = 0, _a = e.target.files; _i < _a.length; _i++) {
            var file = _a[_i];
            this.attachments.push(file.name);
        }
        console.log(this.attachments.toString());
    };
    EvacuationReportComponent.prototype.submitForm = function () {
        this.validateData();
    };
    EvacuationReportComponent.prototype.validateData = function () {
        if (this.evacuationModel.buildingTypeSub
            && this.evacuationModel.city
            && this.evacuationModel.country
            && this.evacuationModel.drawings
            && this.evacuationModel.noOfFloors
            && this.evacuationModel.additionalRequests
            && this.evacuationModel.language && this.attachments) {
            this.validForm = true;
            this.saveForm(JSON.stringify(this.evacuationModel));
        }
        else {
            this.validForm = false;
        }
    };
    EvacuationReportComponent.prototype.saveForm = function (formData) {
        var _this = this;
        this._FileUpload.uploadFiles(this.uploadedFiles).subscribe(function (data) {
            // SHOW A MESSAGE RECEIVED FROM THE WEB API.
            if (data) {
                _this._FormSubmit.saveFormDetails(__WEBPACK_IMPORTED_MODULE_4__service_urls__["a" /* serviceUrls */].addOrder, _this.currentUser['id'], _this.orderStatus, "evacuation", _this.attachments.toString(), formData).subscribe(function (data) {
                    window.location.href = "/myOrders";
                }, function (error) {
                    console.error(error);
                });
            }
        }, function (error) {
            console.log(error.MESSAGE); // SHOW ERRORS IF ANY.
        });
    };
    EvacuationReportComponent.prototype.ngOnDestroy = function () {
        localStorage.setItem('formData', "");
        localStorage.setItem('orderStatus', "");
        localStorage.setItem('attachments', "");
    };
    EvacuationReportComponent.prototype.getCurrentUserInfo = function () {
        var _this = this;
        this._Users.getCurrentUser(__WEBPACK_IMPORTED_MODULE_4__service_urls__["a" /* serviceUrls */].getCurrentUser).subscribe(function (data) {
            if (data["id"]) {
                _this.currentUser = data;
            }
        });
    };
    EvacuationReportComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-evacuation-report',
            template: __webpack_require__("./src/app/forms/safety/evacuation-report/evacuation-report.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_3__services_service_submit_form__["a" /* FormSubmit */], __WEBPACK_IMPORTED_MODULE_6__services_service_file_upload__["a" /* FileUpload */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_service_submit_form__["a" /* FormSubmit */], __WEBPACK_IMPORTED_MODULE_5__services_service_get_users__["a" /* Users */], __WEBPACK_IMPORTED_MODULE_6__services_service_file_upload__["a" /* FileUpload */]])
    ], EvacuationReportComponent);
    return EvacuationReportComponent;
}());



/***/ }),

/***/ "./src/app/forms/safety/fire-systems/fire-systems.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"forms-container\">\n  <div class=\"container\">\n    <form (submit)=\"submitForm()\" class=\"form-card\">\n      <div class=\"row\">\n        <h1 class=\"h3 font-weight-normal form-heading\">{{'Fire alarm and fire fighting systems' | translate}}</h1>\n\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Design Required' | translate}}</label>\n            <select [(ngModel)]=\"fireSystemModel['drawings']\" name=\"drawing\" [disabled]=\"viewOnly\" class=\"form-control\">\n              <option selected>{{\"Fire alarm and fire fighting systems\" | translate}}</option>\n            </select>\n            <label *ngIf=\"!fireSystemModel['drawings'] && !validForm\" name=\"drawingValidation\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Building Type' | translate}}</label>\n            <select [(ngModel)]=\"fireSystemModel['buildingType']\" name=\"type\" (change)=\"selectBuildingType($event.target.value)\" [disabled]=\"viewOnly\"\n              class=\"form-control\">\n              <option selected disabled>{{'Select Field' | translate}}</option>\n              <option *ngFor=\"let building of buildingTypes\" [value]=\"building.categories\">{{building.name | translate}}</option>\n              <option>{{'Other' | translate}}</option>\n            </select>\n            <label *ngIf=\"!fireSystemModel['buildingTypeSub'] && !validForm\" name=\"typeValidation\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div *ngIf=\"otherText\" class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Other' | translate}}</label>\n            <input [(ngModel)]=\"fireSystemModel['buildingTypeSub']\" type=\"text\" name=\"other\" [disabled]=\"viewOnly\" class=\"form-control\"\n              placeholder=\"Enter Building Type\" />\n            <label *ngIf=\"!fireSystemModel['buildingTypeSub'] && !validForm && otherText\" name=\"otherValidation\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div *ngIf=\"buildingTypesSub.length>0\" class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Building Types:' | translate}}</label>\n            <select [(ngModel)]=\"fireSystemModel['buildingTypeSub']\" name=\"category\" [disabled]=\"viewOnly\" class=\"form-control\">\n              <option selected disabled> {{'Select Field' | translate}}</option>\n              <option *ngFor=\"let buildingSub of buildingTypesSub\">{{buildingSub | translate}}</option>\n            </select>\n            <label *ngIf=\"!fireSystemModel['buildingTypeSub'] && !validForm && buildingTypesSub.length>0\" name=\"categoryValidation\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Country' | translate}}</label>\n            <select [(ngModel)]=\"fireSystemModel['country']\" name=\"countryy\" [disabled]=\"viewOnly\" class=\"form-control\">\n              <option selected disabled> {{'Select Field' | translate}}</option>\n              <option>{{'Egypt' | translate}}</option>\n              <option>{{'Saudi Arabia' | translate}}</option>\n            </select>\n            <label *ngIf=\"!fireSystemModel['country'] && !validForm\" name=\"countryValidation\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"\">{{'City' | translate}}</label>\n            <input [(ngModel)]=\"fireSystemModel['city']\" type=\"text\" name=\"city\" [disabled]=\"viewOnly\" class=\"form-control\" placeholder=\"\"\n            />\n            <label *ngIf=\"!fireSystemModel['city'] && !validForm\" name=\"cityValidation\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Land area' | translate}}</label>\n            <input [(ngModel)]=\"fireSystemModel['landArea']\" type=\"text\" name=\"floors\" [disabled]=\"viewOnly\" class=\"form-control\" placeholder=\"\"\n            />\n            <label *ngIf=\"!fireSystemModel['landArea'] && !validForm\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Ground floor area' | translate}}</label>\n            <input [(ngModel)]=\"fireSystemModel['groundArea']\" type=\"text\" name=\"floors\" [disabled]=\"viewOnly\" class=\"form-control\" placeholder=\"\"\n            />\n            <label *ngIf=\"!fireSystemModel['groundArea'] && !validForm\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Number of Floors' | translate}}</label>\n            <input [(ngModel)]=\"fireSystemModel['noOfFloors']\" type=\"text\" name=\"floors\" [disabled]=\"viewOnly\" class=\"form-control\" placeholder=\"\"\n            />\n            <label *ngIf=\"!fireSystemModel['noOfFloors'] && !validForm\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div class=\"col-xs-12\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Requests & Suggestions' | translate}}</label>\n            <textarea [(ngModel)]=\"fireSystemModel['additionalRequests']\" name=\"additional\" [disabled]=\"viewOnly\" class=\"form-control\"\n              rows=\"4\"></textarea>\n            <label *ngIf=\"!fireSystemModel['additionalRequests'] && !validForm\" name=\"additionalValidation\" class=\"required\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Would you like to approve it from Civil Defense?' | translate}}</label>\n            <select [(ngModel)]=\"fireSystemModel['approval']\" name=\"approval\" [disabled]=\"viewOnly\" class=\"form-control\">\n              <option selected disabled> {{'Select Field' | translate}}</option>\n              <option>{{'Yes I want' | translate}}</option>\n              <option>{{'No, I Do not want' | translate}}</option>\n            </select>\n            <label *ngIf=\"!fireSystemModel['approval'] && !validForm\" name=\"approvalValidation\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label>{{'Upload attachment' | translate}}</label>\n            <input type=\"file\" name=\"attachment\" id=\"file\" multiple (change)=\"getFiles($event)\" class=\"form-control\" />\n          </div>\n        </div>\n\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Prefered Language' | translate}}</label>\n            <select [(ngModel)]=\"fireSystemModel['language']\" name=\"country\" [disabled]=\"viewOnly\" class=\"form-control\">\n              <option selected disabled>{{'Select Field' | translate}}</option>\n              <option>English</option>\n              <option>عربي</option>\n            </select>\n            <label *ngIf=\"!fireSystemModel['language'] && !validForm\" name=\"countryValidation\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div class=\"col-xs-12\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Notes' | translate}}</label>\n            <textarea [(ngModel)]=\"fireSystemModel['comments']\" name=\"comments\" [disabled]=\"viewOnly\" class=\"form-control\"\n              rows=\"4\"></textarea>\n            <label *ngIf=\"!fireSystemModel['comments'] && !validForm\" name=\"commentsValidation\" class=\"required\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div class=\"col-xs-12\">\n          <button *ngIf=\"!viewOnly\" class=\"btn btn-orange\" type=\"submit\"> {{'Send' | translate}} </button>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/forms/safety/fire-systems/fire-systems.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FireSystemsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__drop_down_lists_workshop_drawings__ = __webpack_require__("./src/app/drop-down-lists/workshop-drawings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_model_fire_system__ = __webpack_require__("./src/app/forms/models/model.fire-system.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_service_submit_form__ = __webpack_require__("./src/app/forms/services/service.submit-form.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_urls__ = __webpack_require__("./src/app/service-urls.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_service_get_users__ = __webpack_require__("./src/app/services/service.get-users.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_service_file_upload__ = __webpack_require__("./src/app/forms/services/service.file-upload.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var FireSystemsComponent = /** @class */ (function () {
    function FireSystemsComponent(_FormSubmit, _Users, _FileUpload) {
        this._FormSubmit = _FormSubmit;
        this._Users = _Users;
        this._FileUpload = _FileUpload;
        this.fireSystemModel = new __WEBPACK_IMPORTED_MODULE_2__models_model_fire_system__["a" /* FireSystemModel */]();
        this.otherText = false;
        this.validForm = true;
        this.viewOnly = false;
        this.orderStatus = "pending";
        this.attachments = [];
        this.drawingsList = __WEBPACK_IMPORTED_MODULE_1__drop_down_lists_workshop_drawings__["b" /* RequiredDrawings */];
        this.buildingTypes = __WEBPACK_IMPORTED_MODULE_1__drop_down_lists_workshop_drawings__["a" /* BuildingTypes */];
        this.buildingTypesSub = [];
    }
    FireSystemsComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('formData')) {
            this.orderStatus = localStorage.getItem('orderStatus');
            this.attachments = localStorage.getItem('attachments').split(",");
            this.fireSystemModel = JSON.parse(localStorage.getItem('formData'));
            if (localStorage.getItem('orderStatus') != 'processed') {
                this.viewOnly = false;
            }
            else {
                this.viewOnly = true;
            }
            if (this.fireSystemModel.buildingType == "Other") {
                this.otherText = true;
            }
            else {
                this.buildingTypesSub.push(this.fireSystemModel.buildingTypeSub);
            }
        }
        this.getCurrentUserInfo();
    };
    FireSystemsComponent.prototype.selectBuildingType = function (buildingSelected) {
        if (buildingSelected == "Other") {
            this.otherText = true;
            this.fireSystemModel.buildingTypeSub = "";
            this.buildingTypesSub = [];
        }
        else {
            this.otherText = false;
            this.buildingTypesSub = buildingSelected.split(",");
        }
    };
    FireSystemsComponent.prototype.getFiles = function (e) {
        this.uploadedFiles = e;
        this.attachments = [];
        for (var _i = 0, _a = e.target.files; _i < _a.length; _i++) {
            var file = _a[_i];
            this.attachments.push(file.name);
        }
        console.log(this.attachments.toString());
    };
    FireSystemsComponent.prototype.submitForm = function () {
        this.validateData();
    };
    FireSystemsComponent.prototype.validateData = function () {
        if (this.fireSystemModel.buildingTypeSub
            && this.fireSystemModel.city
            && this.fireSystemModel.country
            && this.fireSystemModel.drawings
            && this.fireSystemModel.noOfFloors
            && this.fireSystemModel.additionalRequests
            && this.fireSystemModel.language && this.attachments
            && this.fireSystemModel.approval) {
            this.validForm = true;
            this.saveForm(JSON.stringify(this.fireSystemModel));
        }
        else {
            this.validForm = false;
        }
    };
    FireSystemsComponent.prototype.saveForm = function (formData) {
        var _this = this;
        this._FileUpload.uploadFiles(this.uploadedFiles).subscribe(function (data) {
            // SHOW A MESSAGE RECEIVED FROM THE WEB API.
            if (data) {
                _this._FormSubmit.saveFormDetails(__WEBPACK_IMPORTED_MODULE_4__service_urls__["a" /* serviceUrls */].addOrder, _this.currentUser['id'], _this.orderStatus, "fire-systems", _this.attachments.toString(), formData).subscribe(function (data) {
                    window.location.href = "/myOrders";
                }, function (error) {
                    console.error(error);
                });
            }
        }, function (error) {
            console.log(error.MESSAGE); // SHOW ERRORS IF ANY.
        });
    };
    FireSystemsComponent.prototype.ngOnDestroy = function () {
        localStorage.setItem('formData', "");
        localStorage.setItem('orderStatus', "");
        localStorage.setItem('attachments', "");
    };
    FireSystemsComponent.prototype.getCurrentUserInfo = function () {
        var _this = this;
        this._Users.getCurrentUser(__WEBPACK_IMPORTED_MODULE_4__service_urls__["a" /* serviceUrls */].getCurrentUser).subscribe(function (data) {
            if (data["id"]) {
                _this.currentUser = data;
            }
        });
    };
    FireSystemsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-fire-systems',
            template: __webpack_require__("./src/app/forms/safety/fire-systems/fire-systems.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_3__services_service_submit_form__["a" /* FormSubmit */], __WEBPACK_IMPORTED_MODULE_6__services_service_file_upload__["a" /* FileUpload */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_service_submit_form__["a" /* FormSubmit */], __WEBPACK_IMPORTED_MODULE_5__services_service_get_users__["a" /* Users */], __WEBPACK_IMPORTED_MODULE_6__services_service_file_upload__["a" /* FileUpload */]])
    ], FireSystemsComponent);
    return FireSystemsComponent;
}());



/***/ }),

/***/ "./src/app/forms/safety/safet-architect/safet-architect.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"forms-container\">\n  <div class=\"container\">\n    <form (submit)=\"submitForm()\" class=\"form-card\">\n      <div class=\"row\">\n        <h1 class=\"h3 font-weight-normal form-heading\">{{'Safety Studies' | translate}}</h1>\n\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Required Service' | translate}}</label>\n            <select [(ngModel)]=\"safetyReport['drawings']\" name=\"drawing\" [disabled]=\"viewOnly\" class=\"form-control\">\n              <option selected>{{\"Life safety drawings\" | translate}}</option>\n            </select>\n            <label *ngIf=\"!safetyReport['drawings'] && !validForm\" name=\"drawingValidation\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Building Type' | translate}}</label>\n            <select [(ngModel)]=\"safetyReport['buildingType']\" name=\"type\" (change)=\"selectBuildingType($event.target.value)\" [disabled]=\"viewOnly\"\n              class=\"form-control\">\n              <option selected disabled>{{'Select Field' | translate}}</option>\n              <option *ngFor=\"let building of buildingTypes\" [value]=\"building.categories\">{{building.name | translate}}</option>\n              <option>{{'Other' | translate}}</option>\n            </select>\n            <label *ngIf=\"!safetyReport['buildingTypeSub'] && !validForm\" name=\"typeValidation\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div *ngIf=\"otherText\" class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Other' | translate}}</label>\n            <input [(ngModel)]=\"safetyReport['buildingTypeSub']\" type=\"text\" name=\"other\" [disabled]=\"viewOnly\" class=\"form-control\"\n              placeholder=\"Enter Building Type\" />\n            <label *ngIf=\"!safetyReport['buildingTypeSub'] && !validForm && otherText\" name=\"otherValidation\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div *ngIf=\"buildingTypesSub.length>0\" class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Building Types:' | translate}}</label>\n            <select [(ngModel)]=\"safetyReport['buildingTypeSub']\" name=\"category\" [disabled]=\"viewOnly\" class=\"form-control\">\n              <option selected disabled> {{'Select Field' | translate}}</option>\n              <option *ngFor=\"let buildingSub of buildingTypesSub\">{{buildingSub | translate}}</option>\n            </select>\n            <label *ngIf=\"!safetyReport['buildingTypeSub'] && !validForm && buildingTypesSub.length>0\" name=\"categoryValidation\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Country' | translate}}</label>\n            <select [(ngModel)]=\"safetyReport['country']\" name=\"countryy\" [disabled]=\"viewOnly\" class=\"form-control\">\n              <option selected disabled> {{'Select Field' | translate}}</option>\n              <option>{{'Egypt' | translate}}</option>\n              <option>{{'Saudi Arabia' | translate}}</option>\n            </select>\n            <label *ngIf=\"!safetyReport['country'] && !validForm\" name=\"countryValidation\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"\">{{'City' | translate}}</label>\n            <input [(ngModel)]=\"safetyReport['city']\" type=\"text\" name=\"city\" [disabled]=\"viewOnly\" class=\"form-control\" placeholder=\"\"\n            />\n            <label *ngIf=\"!safetyReport['city'] && !validForm\" name=\"cityValidation\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Land area' | translate}}</label>\n            <input [(ngModel)]=\"safetyReport['landArea']\" type=\"text\" name=\"floors\" [disabled]=\"viewOnly\" class=\"form-control\" placeholder=\"\"\n            />\n            <label *ngIf=\"!safetyReport['landArea'] && !validForm\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Ground floor area' | translate}}</label>\n            <input [(ngModel)]=\"safetyReport['groundArea']\" type=\"text\" name=\"floors\" [disabled]=\"viewOnly\" class=\"form-control\" placeholder=\"\"\n            />\n            <label *ngIf=\"!safetyReport['groundArea'] && !validForm\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Number of Floors' | translate}}</label>\n            <input [(ngModel)]=\"safetyReport['noOfFloors']\" type=\"text\" name=\"floors\" [disabled]=\"viewOnly\" class=\"form-control\" placeholder=\"\"\n            />\n            <label *ngIf=\"!safetyReport['noOfFloors'] && !validForm\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div class=\"col-xs-12\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Requests & Suggestions' | translate}}</label>\n            <textarea [(ngModel)]=\"safetyReport['additionalRequests']\" name=\"additional\" [disabled]=\"viewOnly\" class=\"form-control\"\n              rows=\"4\"></textarea>\n            <label *ngIf=\"!safetyReport['additionalRequests'] && !validForm\" name=\"additionalValidation\" class=\"required\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label>{{'Upload attachment' | translate}}</label>\n            <input type=\"file\" name=\"attachment\" id=\"file\" multiple (change)=\"getFiles($event)\" class=\"form-control\" />\n          </div>\n        </div>\n\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Prefered Language' | translate}}</label>\n            <select [(ngModel)]=\"safetyReport['language']\" name=\"country\" [disabled]=\"viewOnly\" class=\"form-control\">\n              <option selected disabled>{{'Select Field' | translate}}</option>\n              <option>English</option>\n              <option>عربي</option>\n            </select>\n            <label *ngIf=\"!safetyReport['language'] && !validForm\" name=\"countryValidation\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div class=\"col-xs-12\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Notes' | translate}}</label>\n            <textarea [(ngModel)]=\"safetyReport['comments']\" name=\"comments\" [disabled]=\"viewOnly\" class=\"form-control\"\n              rows=\"4\"></textarea>\n          </div>\n        </div>\n\n        <div class=\"col-xs-12\">\n          <button *ngIf=\"!viewOnly\" class=\"btn btn-orange\" type=\"submit\"> {{'Send' | translate}} </button>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/forms/safety/safet-architect/safet-architect.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SafetArchitectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__drop_down_lists_workshop_drawings__ = __webpack_require__("./src/app/drop-down-lists/workshop-drawings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_model_safety_reports__ = __webpack_require__("./src/app/forms/models/model.safety-reports.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_service_submit_form__ = __webpack_require__("./src/app/forms/services/service.submit-form.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_urls__ = __webpack_require__("./src/app/service-urls.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_service_get_users__ = __webpack_require__("./src/app/services/service.get-users.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_service_file_upload__ = __webpack_require__("./src/app/forms/services/service.file-upload.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SafetArchitectComponent = /** @class */ (function () {
    function SafetArchitectComponent(_FormSubmit, _Users, _FileUpload) {
        this._FormSubmit = _FormSubmit;
        this._Users = _Users;
        this._FileUpload = _FileUpload;
        this.safetyReport = new __WEBPACK_IMPORTED_MODULE_2__models_model_safety_reports__["a" /* SafetyReportModel */]();
        this.otherText = false;
        this.validForm = true;
        this.viewOnly = false;
        this.orderStatus = "pending";
        this.attachments = [];
        this.drawingsList = __WEBPACK_IMPORTED_MODULE_1__drop_down_lists_workshop_drawings__["b" /* RequiredDrawings */];
        this.buildingTypes = __WEBPACK_IMPORTED_MODULE_1__drop_down_lists_workshop_drawings__["a" /* BuildingTypes */];
        this.buildingTypesSub = [];
    }
    SafetArchitectComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('formData')) {
            this.orderStatus = localStorage.getItem('orderStatus');
            this.attachments = localStorage.getItem('attachments').split(",");
            this.safetyReport = JSON.parse(localStorage.getItem('formData'));
            if (localStorage.getItem('orderStatus') != 'processed') {
                this.viewOnly = false;
            }
            else {
                this.viewOnly = true;
            }
            if (this.safetyReport.buildingType == "Other") {
                this.otherText = true;
            }
            else {
                this.buildingTypesSub.push(this.safetyReport.buildingTypeSub);
            }
        }
        this.getCurrentUserInfo();
    };
    SafetArchitectComponent.prototype.selectBuildingType = function (buildingSelected) {
        if (buildingSelected == "Other") {
            this.otherText = true;
            this.safetyReport.buildingTypeSub = "";
            this.buildingTypesSub = [];
        }
        else {
            this.otherText = false;
            this.buildingTypesSub = buildingSelected.split(",");
        }
    };
    SafetArchitectComponent.prototype.getFiles = function (e) {
        this.uploadedFiles = e;
        this.attachments = [];
        for (var _i = 0, _a = e.target.files; _i < _a.length; _i++) {
            var file = _a[_i];
            this.attachments.push(file.name);
        }
        console.log(this.attachments.toString());
    };
    SafetArchitectComponent.prototype.submitForm = function () {
        this.validateData();
    };
    SafetArchitectComponent.prototype.validateData = function () {
        if (this.safetyReport.buildingTypeSub
            && this.safetyReport.city
            && this.safetyReport.country
            && this.safetyReport.drawings
            && this.safetyReport.noOfFloors
            && this.safetyReport.additionalRequests
            && this.safetyReport.language && this.attachments) {
            this.validForm = true;
            this.saveForm(JSON.stringify(this.safetyReport));
        }
        else {
            this.validForm = false;
        }
    };
    SafetArchitectComponent.prototype.saveForm = function (formData) {
        var _this = this;
        this._FileUpload.uploadFiles(this.uploadedFiles).subscribe(function (data) {
            // SHOW A MESSAGE RECEIVED FROM THE WEB API.
            if (data) {
                _this._FormSubmit.saveFormDetails(__WEBPACK_IMPORTED_MODULE_4__service_urls__["a" /* serviceUrls */].addOrder, _this.currentUser['id'], _this.orderStatus, "safety-architectrual", _this.attachments.toString(), formData).subscribe(function (data) {
                    window.location.href = "/myOrders";
                }, function (error) {
                    console.error(error);
                });
            }
        }, function (error) {
            console.log(error.MESSAGE); // SHOW ERRORS IF ANY.
        });
    };
    SafetArchitectComponent.prototype.ngOnDestroy = function () {
        localStorage.setItem('formData', "");
        localStorage.setItem('orderStatus', "");
        localStorage.setItem('attachments', "");
    };
    SafetArchitectComponent.prototype.getCurrentUserInfo = function () {
        var _this = this;
        this._Users.getCurrentUser(__WEBPACK_IMPORTED_MODULE_4__service_urls__["a" /* serviceUrls */].getCurrentUser).subscribe(function (data) {
            if (data["id"]) {
                _this.currentUser = data;
            }
        });
    };
    SafetArchitectComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-safet-architect',
            template: __webpack_require__("./src/app/forms/safety/safet-architect/safet-architect.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_3__services_service_submit_form__["a" /* FormSubmit */], __WEBPACK_IMPORTED_MODULE_6__services_service_file_upload__["a" /* FileUpload */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_service_submit_form__["a" /* FormSubmit */], __WEBPACK_IMPORTED_MODULE_5__services_service_get_users__["a" /* Users */], __WEBPACK_IMPORTED_MODULE_6__services_service_file_upload__["a" /* FileUpload */]])
    ], SafetArchitectComponent);
    return SafetArchitectComponent;
}());



/***/ }),

/***/ "./src/app/forms/safety/safety-consult/safety-consult.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"forms-container\">\n  <div class=\"container\">\n    <form (submit)=\"submitForm()\" class=\"form-card\">\n      <div class=\"row\">\n        <h1 class=\"h3 font-weight-normal form-heading\">{{'Consult safety studies' | translate}}</h1>\n\n        <div class=\"col-xs-12\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'consult us in' | translate}}</label>\n            <textarea [(ngModel)]=\"consultUs['consultIn']\" name=\"consult\" [disabled]=\"viewOnly\" class=\"form-control\"\n              rows=\"4\"></textarea>\n            <label *ngIf=\"!consultUs['consultIn'] && !validForm\" name=\"consultValidation\" class=\"required\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Country' | translate}}</label>\n            <select [(ngModel)]=\"consultUs['country']\" name=\"country\" [disabled]=\"viewOnly\" class=\"form-control\">\n              <option selected disabled> {{'Select Field' | translate}}</option>\n              <option>{{'Egypt' | translate}}</option>\n              <option>{{'Saudi Arabia' | translate}}</option>\n            </select>\n            <label *ngIf=\"!consultUs['country'] && !validForm\" name=\"countryValidation\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"\">{{'City' | translate}}</label>\n            <input [(ngModel)]=\"consultUs['city']\" type=\"text\" name=\"city\" [disabled]=\"viewOnly\" class=\"form-control\" placeholder=\"\" />\n            <label *ngIf=\"!consultUs['city'] && !validForm\" name=\"cityValidation\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Building Type' | translate}}</label>\n            <select [(ngModel)]=\"consultUs['buildingType']\" name=\"type\" (change)=\"selectBuildingType($event.target.value)\" [disabled]=\"viewOnly\" class=\"form-control\">\n              <option selected disabled>{{'Select Field' | translate}}</option>\n              <option *ngFor=\"let building of buildingTypes\" [value]=\"building.categories\">{{building.name | translate}}</option>\n              <option>{{'Other' | translate}}</option>\n            </select>\n            <label *ngIf=\"!consultUs['buildingTypeSub'] && !validForm\" name=\"typeValidation\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div *ngIf=\"otherText\" class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Other' | translate}}</label>\n            <input [(ngModel)]=\"consultUs['buildingTypeSub']\" type=\"text\" name=\"other\" [disabled]=\"viewOnly\" class=\"form-control\" placeholder=\"\"\n            />\n            <label *ngIf=\"!consultUs['buildingTypeSub'] && !validForm && otherText\" name=\"otherValidation\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div *ngIf=\"buildingTypesSub.length>0\" class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Building Types:' | translate}}</label>\n            <select [(ngModel)]=\"consultUs['buildingTypeSub']\" name=\"category\" [disabled]=\"viewOnly\" class=\"form-control\">\n              <option selected disabled> {{'Select Field' | translate}}</option>\n              <option *ngFor=\"let buildingSub of buildingTypesSub\">{{buildingSub | translate}}</option>\n            </select>\n            <label *ngIf=\"!consultUs['buildingTypeSub'] && !validForm && buildingTypesSub.length>0\" name=\"categoryValidation\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div class=\"col-xs-12\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Type your question' | translate}}</label>\n            <textarea [(ngModel)]=\"consultUs['questionInput']\" name=\"question\" [disabled]=\"viewOnly\" class=\"form-control\"\n              rows=\"4\"></textarea>\n            <label *ngIf=\"!consultUs['questionInput'] && !validForm\" name=\"questionValidation\" class=\"required\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label>{{'Attachments' | translate}}</label>\n            <input type=\"file\" name=\"attachment\" id=\"file\" multiple (change)=\"getFiles($event)\" class=\"form-control\" />\n          </div>\n        </div>\n\n        <div class=\"col-xs-12\">\n          <button *ngIf=\"!viewOnly\" class=\"btn btn-orange\" type=\"submit\"> {{'Send' | translate}} </button>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/forms/safety/safety-consult/safety-consult.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SafetyConsultComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__drop_down_lists_workshop_drawings__ = __webpack_require__("./src/app/drop-down-lists/workshop-drawings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_service_submit_form__ = __webpack_require__("./src/app/forms/services/service.submit-form.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_urls__ = __webpack_require__("./src/app/service-urls.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_service_get_users__ = __webpack_require__("./src/app/services/service.get-users.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_service_file_upload__ = __webpack_require__("./src/app/forms/services/service.file-upload.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_model_consult__ = __webpack_require__("./src/app/forms/models/model.consult.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SafetyConsultComponent = /** @class */ (function () {
    function SafetyConsultComponent(_FormSubmit, _Users, _ActivatedRoute, _FileUpload) {
        this._FormSubmit = _FormSubmit;
        this._Users = _Users;
        this._ActivatedRoute = _ActivatedRoute;
        this._FileUpload = _FileUpload;
        this.consultUs = new __WEBPACK_IMPORTED_MODULE_7__models_model_consult__["a" /* Consultation */]();
        this.otherText = false;
        this.validForm = true;
        this.viewOnly = false;
        this.orderStatus = "pending";
        this.attachments = [];
        this.drawingsList = __WEBPACK_IMPORTED_MODULE_1__drop_down_lists_workshop_drawings__["b" /* RequiredDrawings */];
        this.buildingTypes = __WEBPACK_IMPORTED_MODULE_1__drop_down_lists_workshop_drawings__["a" /* BuildingTypes */];
        this.buildingTypesSub = [];
    }
    SafetyConsultComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('formData')) {
            this.orderStatus = localStorage.getItem('orderStatus');
            this.attachments = localStorage.getItem('attachments').split(",");
            this.consultUs = JSON.parse(localStorage.getItem('formData'));
            if (localStorage.getItem('orderStatus') != 'processed') {
                this.viewOnly = false;
            }
            else {
                this.viewOnly = true;
            }
            if (this.consultUs.buildingType == "Other") {
                this.otherText = true;
            }
            else {
                this.buildingTypesSub.push(this.consultUs.buildingTypeSub);
            }
        }
        this.getCurrentUserInfo();
    };
    SafetyConsultComponent.prototype.selectBuildingType = function (buildingSelected) {
        if (buildingSelected == "Other") {
            this.otherText = true;
            this.consultUs.buildingTypeSub = "";
            this.buildingTypesSub = [];
        }
        else {
            this.otherText = false;
            this.buildingTypesSub = buildingSelected.split(",");
        }
    };
    SafetyConsultComponent.prototype.getFiles = function (e) {
        this.uploadedFiles = e;
        this.attachments = [];
        for (var _i = 0, _a = e.target.files; _i < _a.length; _i++) {
            var file = _a[_i];
            this.attachments.push(file.name);
        }
        console.log(this.attachments.toString());
    };
    SafetyConsultComponent.prototype.submitForm = function () {
        this.validateData();
    };
    SafetyConsultComponent.prototype.validateData = function () {
        if (this.consultUs.buildingType
            && this.consultUs.buildingTypeSub
            && this.consultUs.city
            && this.consultUs.country && this.consultUs.questionInput && this.attachments) {
            this.validForm = true;
            this.saveForm(JSON.stringify(this.consultUs));
        }
        else {
            this.validForm = false;
        }
    };
    SafetyConsultComponent.prototype.saveForm = function (formData) {
        var _this = this;
        this._FileUpload.uploadFiles(this.uploadedFiles).subscribe(function (data) {
            // SHOW A MESSAGE RECEIVED FROM THE WEB API.
            if (data) {
                _this._FormSubmit.saveFormDetails(__WEBPACK_IMPORTED_MODULE_3__service_urls__["a" /* serviceUrls */].addOrder, _this.currentUser['id'], _this.orderStatus, "safety-consult", _this.attachments.toString(), formData).subscribe(function (data) {
                    window.location.href = "/myOrders";
                }, function (error) {
                    console.error(error);
                });
            }
        }, function (error) {
            console.log(error.MESSAGE); // SHOW ERRORS IF ANY.
        });
    };
    SafetyConsultComponent.prototype.ngOnDestroy = function () {
        localStorage.setItem('formData', "");
        localStorage.setItem('orderStatus', "");
        localStorage.setItem('attachments', "");
    };
    SafetyConsultComponent.prototype.getCurrentUserInfo = function () {
        var _this = this;
        this._Users.getCurrentUser(__WEBPACK_IMPORTED_MODULE_3__service_urls__["a" /* serviceUrls */].getCurrentUser).subscribe(function (data) {
            if (data["id"]) {
                _this.currentUser = data;
            }
        });
    };
    SafetyConsultComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-safety-consult',
            template: __webpack_require__("./src/app/forms/safety/safety-consult/safety-consult.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_service_submit_form__["a" /* FormSubmit */], __WEBPACK_IMPORTED_MODULE_6__services_service_file_upload__["a" /* FileUpload */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_service_submit_form__["a" /* FormSubmit */], __WEBPACK_IMPORTED_MODULE_4__services_service_get_users__["a" /* Users */], __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_6__services_service_file_upload__["a" /* FileUpload */]])
    ], SafetyConsultComponent);
    return SafetyConsultComponent;
}());



/***/ }),

/***/ "./src/app/forms/safety/safety-report/safety-report.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"forms-container\">\n  <div class=\"container\">\n    <form (submit)=\"submitForm()\" class=\"form-card\">\n      <div class=\"row\">\n        <h1 class=\"h3 font-weight-normal form-heading\">{{'Safety report' | translate}}</h1>\n\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Design Required' | translate}}</label>\n            <select [(ngModel)]=\"safetyReport['drawings']\" name=\"drawing\" [disabled]=\"viewOnly\" class=\"form-control\">\n              <option selected>{{'Life safety report' | translate}}</option>\n            </select>\n            <label *ngIf=\"!safetyReport['drawings'] && !validForm\" name=\"drawingValidation\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Building Type' | translate}}</label>\n            <select [(ngModel)]=\"safetyReport['buildingType']\" name=\"type\" (change)=\"selectBuildingType($event.target.value)\" [disabled]=\"viewOnly\"\n              class=\"form-control\">\n              <option selected disabled>{{'Select Field' | translate}}</option>\n              <option *ngFor=\"let building of buildingTypes\" [value]=\"building.categories\">{{building.name | translate}}</option>\n              <option>{{'Other' | translate}}</option>\n            </select>\n            <label *ngIf=\"!safetyReport['buildingTypeSub'] && !validForm\" name=\"typeValidation\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div *ngIf=\"otherText\" class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Other' | translate}}</label>\n            <input [(ngModel)]=\"safetyReport['buildingTypeSub']\" type=\"text\" name=\"other\" [disabled]=\"viewOnly\" class=\"form-control\"\n              placeholder=\"Enter Building Type\" />\n            <label *ngIf=\"!safetyReport['buildingTypeSub'] && !validForm && otherText\" name=\"otherValidation\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div *ngIf=\"buildingTypesSub.length>0\" class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Building Types:' | translate}}</label>\n            <select [(ngModel)]=\"safetyReport['buildingTypeSub']\" name=\"category\" [disabled]=\"viewOnly\" class=\"form-control\">\n              <option selected disabled> {{'Select Field' | translate}}</option>\n              <option *ngFor=\"let buildingSub of buildingTypesSub\">{{buildingSub | translate}}</option>\n            </select>\n            <label *ngIf=\"!safetyReport['buildingTypeSub'] && !validForm && buildingTypesSub.length>0\" name=\"categoryValidation\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Country' | translate}}</label>\n            <select [(ngModel)]=\"safetyReport['country']\" name=\"countryy\" [disabled]=\"viewOnly\" class=\"form-control\">\n              <option selected disabled> {{'Select Field' | translate}}</option>\n              <option>{{'Egypt' | translate}}</option>\n              <option>{{'Saudi Arabia' | translate}}</option>\n            </select>\n            <label *ngIf=\"!safetyReport['country'] && !validForm\" name=\"countryValidation\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"\">{{'City' | translate}}</label>\n            <input [(ngModel)]=\"safetyReport['city']\" type=\"text\" name=\"city\" [disabled]=\"viewOnly\" class=\"form-control\" placeholder=\"\"\n            />\n            <label *ngIf=\"!safetyReport['city'] && !validForm\" name=\"cityValidation\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Land area' | translate}}</label>\n            <input [(ngModel)]=\"safetyReport['landArea']\" type=\"text\" name=\"floors\" [disabled]=\"viewOnly\" class=\"form-control\" placeholder=\"\"\n            />\n            <label *ngIf=\"!safetyReport['landArea'] && !validForm\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Ground floor area' | translate}}</label>\n            <input [(ngModel)]=\"safetyReport['groundArea']\" type=\"text\" name=\"floors\" [disabled]=\"viewOnly\" class=\"form-control\" placeholder=\"\"\n            />\n            <label *ngIf=\"!safetyReport['groundArea'] && !validForm\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Number of Floors' | translate}}</label>\n            <input [(ngModel)]=\"safetyReport['noOfFloors']\" type=\"text\" name=\"floors\" [disabled]=\"viewOnly\" class=\"form-control\" placeholder=\"\"\n            />\n            <label *ngIf=\"!safetyReport['noOfFloors'] && !validForm\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div class=\"col-xs-12\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Is there safety drawings and fire sections?' | translate}}</label>\n            <textarea [(ngModel)]=\"safetyReport['checkSafety']\" name=\"checkSafety\" [disabled]=\"viewOnly\" class=\"form-control\"\n              rows=\"4\"></textarea>\n            <label *ngIf=\"!safetyReport['checkSafety'] && !validForm\" name=\"checkSafetyValidation\" class=\"required\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div class=\"col-xs-12\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Requests & Suggestions' | translate}}</label>\n            <textarea [(ngModel)]=\"safetyReport['additionalRequests']\" name=\"additional\" [disabled]=\"viewOnly\" class=\"form-control\"\n              rows=\"4\"></textarea>\n            <label *ngIf=\"!safetyReport['additionalRequests'] && !validForm\" name=\"additionalValidation\" class=\"required\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label>{{'Upload attachment' | translate}}</label>\n            <input type=\"file\" name=\"attachment\" id=\"file\" multiple (change)=\"getFiles($event)\" class=\"form-control\" />\n          </div>\n        </div>\n\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Prefered Language' | translate}}</label>\n            <select [(ngModel)]=\"safetyReport['language']\" name=\"country\" [disabled]=\"viewOnly\" class=\"form-control\">\n              <option selected disabled>{{'Select Field' | translate}}</option>\n              <option>English</option>\n              <option>عربي</option>\n            </select>\n            <label *ngIf=\"!safetyReport['language'] && !validForm\" name=\"countryValidation\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div class=\"col-xs-12\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Notes' | translate}}</label>\n            <textarea [(ngModel)]=\"safetyReport['comments']\" name=\"comments\" [disabled]=\"viewOnly\" class=\"form-control\"\n              rows=\"4\"></textarea>\n            <label *ngIf=\"!safetyReport['comments'] && !validForm\" name=\"commentsValidation\" class=\"required\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div class=\"col-xs-12\">\n          <button *ngIf=\"!viewOnly\" class=\"btn btn-orange\" type=\"submit\"> {{'Send' | translate}} </button>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/forms/safety/safety-report/safety-report.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SafetyReportComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__drop_down_lists_workshop_drawings__ = __webpack_require__("./src/app/drop-down-lists/workshop-drawings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_model_safety_reports__ = __webpack_require__("./src/app/forms/models/model.safety-reports.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_service_submit_form__ = __webpack_require__("./src/app/forms/services/service.submit-form.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_urls__ = __webpack_require__("./src/app/service-urls.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_service_get_users__ = __webpack_require__("./src/app/services/service.get-users.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_service_file_upload__ = __webpack_require__("./src/app/forms/services/service.file-upload.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SafetyReportComponent = /** @class */ (function () {
    function SafetyReportComponent(_FormSubmit, _Users, _FileUpload) {
        this._FormSubmit = _FormSubmit;
        this._Users = _Users;
        this._FileUpload = _FileUpload;
        this.safetyReport = new __WEBPACK_IMPORTED_MODULE_2__models_model_safety_reports__["a" /* SafetyReportModel */]();
        this.otherText = false;
        this.validForm = true;
        this.viewOnly = false;
        this.orderStatus = "pending";
        this.attachments = [];
        this.drawingsList = __WEBPACK_IMPORTED_MODULE_1__drop_down_lists_workshop_drawings__["b" /* RequiredDrawings */];
        this.buildingTypes = __WEBPACK_IMPORTED_MODULE_1__drop_down_lists_workshop_drawings__["a" /* BuildingTypes */];
        this.buildingTypesSub = [];
    }
    SafetyReportComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('formData')) {
            this.orderStatus = localStorage.getItem('orderStatus');
            this.attachments = localStorage.getItem('attachments').split(",");
            this.safetyReport = JSON.parse(localStorage.getItem('formData'));
            if (localStorage.getItem('orderStatus') != 'processed') {
                this.viewOnly = false;
            }
            else {
                this.viewOnly = true;
            }
            if (this.safetyReport.buildingType == "Other") {
                this.otherText = true;
            }
            else {
                this.buildingTypesSub.push(this.safetyReport.buildingTypeSub);
            }
        }
        this.getCurrentUserInfo();
    };
    SafetyReportComponent.prototype.selectBuildingType = function (buildingSelected) {
        if (buildingSelected == "Other") {
            this.otherText = true;
            this.safetyReport.buildingTypeSub = "";
            this.buildingTypesSub = [];
        }
        else {
            this.otherText = false;
            this.buildingTypesSub = buildingSelected.split(",");
        }
    };
    SafetyReportComponent.prototype.getFiles = function (e) {
        this.uploadedFiles = e;
        this.attachments = [];
        for (var _i = 0, _a = e.target.files; _i < _a.length; _i++) {
            var file = _a[_i];
            this.attachments.push(file.name);
        }
        console.log(this.attachments.toString());
    };
    SafetyReportComponent.prototype.submitForm = function () {
        this.validateData();
    };
    SafetyReportComponent.prototype.validateData = function () {
        if (this.safetyReport.buildingTypeSub
            && this.safetyReport.city
            && this.safetyReport.country
            && this.safetyReport.drawings
            && this.safetyReport.noOfFloors
            && this.safetyReport.additionalRequests
            && this.safetyReport.language && this.safetyReport.checkSafety && this.attachments) {
            this.validForm = true;
            this.saveForm(JSON.stringify(this.safetyReport));
        }
        else {
            this.validForm = false;
        }
    };
    SafetyReportComponent.prototype.saveForm = function (formData) {
        var _this = this;
        this._FileUpload.uploadFiles(this.uploadedFiles).subscribe(function (data) {
            // SHOW A MESSAGE RECEIVED FROM THE WEB API.
            if (data) {
                _this._FormSubmit.saveFormDetails(__WEBPACK_IMPORTED_MODULE_4__service_urls__["a" /* serviceUrls */].addOrder, _this.currentUser['id'], _this.orderStatus, "safety-report", _this.attachments.toString(), formData).subscribe(function (data) {
                    window.location.href = "/myOrders";
                }, function (error) {
                    console.error(error);
                });
            }
        }, function (error) {
            console.log(error.MESSAGE); // SHOW ERRORS IF ANY.
        });
    };
    SafetyReportComponent.prototype.ngOnDestroy = function () {
        localStorage.setItem('formData', "");
        localStorage.setItem('orderStatus', "");
        localStorage.setItem('attachments', "");
    };
    SafetyReportComponent.prototype.getCurrentUserInfo = function () {
        var _this = this;
        this._Users.getCurrentUser(__WEBPACK_IMPORTED_MODULE_4__service_urls__["a" /* serviceUrls */].getCurrentUser).subscribe(function (data) {
            if (data["id"]) {
                _this.currentUser = data;
            }
        });
    };
    SafetyReportComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-safety-report',
            template: __webpack_require__("./src/app/forms/safety/safety-report/safety-report.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_3__services_service_submit_form__["a" /* FormSubmit */], __WEBPACK_IMPORTED_MODULE_6__services_service_file_upload__["a" /* FileUpload */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_service_submit_form__["a" /* FormSubmit */], __WEBPACK_IMPORTED_MODULE_5__services_service_get_users__["a" /* Users */], __WEBPACK_IMPORTED_MODULE_6__services_service_file_upload__["a" /* FileUpload */]])
    ], SafetyReportComponent);
    return SafetyReportComponent;
}());



/***/ }),

/***/ "./src/app/forms/services/service.file-upload.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileUpload; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FileUpload = /** @class */ (function () {
    function FileUpload(http) {
        this.http = http;
    }
    FileUpload.prototype.uploadFiles = function (e) {
        var frmData = new FormData();
        for (var i = 0; i < e.target.files.length; i++) {
            frmData.append("files", e.target.files[i]);
        }
        return this.http.post('http://localhost:8081/uploadMultipleFiles', frmData).map(function (res) { return res.json(); });
    };
    FileUpload = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], FileUpload);
    return FileUpload;
}());



/***/ }),

/***/ "./src/app/forms/services/service.submit-form.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormSubmit; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FormSubmit = /** @class */ (function () {
    function FormSubmit(http) {
        this.http = http;
    }
    FormSubmit.prototype.saveFormDetails = function (url, userId, status, name, attachment, formData) {
        var parameters = {
            name: name,
            creationDate: "",
            status: status,
            attachment: attachment,
            formData: formData,
            userId: userId
        };
        return this.http.post(url, parameters).map(function (res) { return res.text(); });
    };
    FormSubmit = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], FormSubmit);
    return FormSubmit;
}());



/***/ }),

/***/ "./src/app/forms/structural-design/structural-design.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"forms-container\">\n  <div class=\"container\">\n    <form (submit)=\"submitForm()\" class=\"form-card\">\n      <div class=\"row\">\n        <h1 class=\"h3 font-weight-normal form-heading\">{{'Structural Designs' | translate}}</h1>\n\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Design Required' | translate}}</label>\n            <select [(ngModel)]=\"workshopModel['drawings']\" name=\"drawing\" [disabled]=\"viewOnly\" class=\"form-control\">\n              <option selected disabled> {{'Select Field' | translate}}</option>\n              <option>{{'Concrete Structures' | translate}}</option>\n              <option>{{'Steel Structures' | translate}}</option>\n              <option>{{'Post Tension Buildings' | translate}}</option>\n              <option>{{'Value Engineering for Structural Buildings' | translate}}</option>\n            </select>\n            <label *ngIf=\"!workshopModel['drawings'] && !validForm\" name=\"drawingValidation\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Building Type' | translate}}</label>\n            <select [(ngModel)]=\"workshopModel['buildingType']\" name=\"type\" (change)=\"selectBuildingType($event.target.value)\" [disabled]=\"viewOnly\" class=\"form-control\">\n              <option selected disabled>{{'Select Field' | translate}}</option>\n              <option *ngFor=\"let building of buildingTypes\" [value]=\"building.categories\">{{building.name | translate}}</option>\n              <option>Other</option>\n            </select>\n            <label *ngIf=\"!workshopModel['buildingTypeSub'] && !validForm\" name=\"typeValidation\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div *ngIf=\"otherText\" class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Other' | translate}}</label>\n            <input [(ngModel)]=\"workshopModel['buildingTypeSub']\" type=\"text\" name=\"other\" [disabled]=\"viewOnly\" class=\"form-control\" placeholder=\"\"\n            />\n            <label *ngIf=\"!workshopModel['buildingTypeSub'] && !validForm && otherText\" name=\"otherValidation\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div *ngIf=\"buildingTypesSub.length>0\" class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Building Types:' | translate}}</label>\n            <select [(ngModel)]=\"workshopModel['buildingTypeSub']\" name=\"category\" [disabled]=\"viewOnly\" class=\"form-control\">\n              <option selected disabled> {{'Select Field' | translate}}</option>\n              <option *ngFor=\"let buildingSub of buildingTypesSub\">{{buildingSub | translate}}</option>\n            </select>\n            <label *ngIf=\"!workshopModel['buildingTypeSub'] && !validForm && buildingTypesSub.length>0\" name=\"categoryValidation\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Country' | translate}}</label>\n            <select [(ngModel)]=\"workshopModel['country']\" name=\"countryy\" [disabled]=\"viewOnly\" class=\"form-control\">\n              <option selected disabled> {{'Select Field' | translate}}</option>\n              <option>{{'Egypt' | translate}}</option>\n              <option>{{'Saudi Arabia' | translate}}</option>\n            </select>\n            <label *ngIf=\"!workshopModel['country'] && !validForm\" name=\"countryValidation\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Number of Floors' | translate}}</label>\n            <input [(ngModel)]=\"workshopModel['noOfFloors']\" type=\"text\" name=\"floors\" [disabled]=\"viewOnly\" class=\"form-control\" placeholder=\"\"\n            />\n            <label *ngIf=\"!workshopModel['noOfFloors'] && !validForm\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"\">{{'City' | translate}}</label>\n            <input [(ngModel)]=\"workshopModel['city']\" type=\"text\" name=\"city\" [disabled]=\"viewOnly\" class=\"form-control\" placeholder=\"\" />\n            <label *ngIf=\"!workshopModel['city'] && !validForm\" name=\"cityValidation\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div class=\"col-xs-12\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Requests & Suggestions' | translate}}</label>\n            <textarea [(ngModel)]=\"workshopModel['additionalRequests']\" name=\"additional\" [disabled]=\"viewOnly\" class=\"form-control\" rows=\"4\"></textarea>\n            <label *ngIf=\"!workshopModel['additionalRequests'] && !validForm\" name=\"additionalValidation\" class=\"required\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label>{{'Attachments (architectural drawings)' | translate}}</label>\n            <input type=\"file\" name=\"attachment\" id=\"file\" multiple (change)=\"getFiles($event)\" class=\"form-control\" />\n          </div>\n        </div>\n        \n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Prefered Language' | translate}}</label>\n            <select [(ngModel)]=\"workshopModel['language']\" name=\"language\" [disabled]=\"viewOnly\" class=\"form-control\">\n              <option selected disabled>{{'Select Field' | translate}}</option>\n              <option>English</option>\n              <option>عربي</option>\n            </select>\n            <label *ngIf=\"!workshopModel['language'] && !validForm\" name=\"languageValidation\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div class=\"col-xs-12\">\n          <button class=\"btn btn-orange\" type=\"submit\"> {{'Send' | translate}} </button>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/forms/structural-design/structural-design.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StructuralDesignComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__drop_down_lists_workshop_drawings__ = __webpack_require__("./src/app/drop-down-lists/workshop-drawings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_model_workshop_drawing__ = __webpack_require__("./src/app/forms/models/model.workshop-drawing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_service_submit_form__ = __webpack_require__("./src/app/forms/services/service.submit-form.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_urls__ = __webpack_require__("./src/app/service-urls.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_service_get_users__ = __webpack_require__("./src/app/services/service.get-users.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_service_file_upload__ = __webpack_require__("./src/app/forms/services/service.file-upload.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var StructuralDesignComponent = /** @class */ (function () {
    function StructuralDesignComponent(_FormSubmit, _Users, _FileUpload) {
        this._FormSubmit = _FormSubmit;
        this._Users = _Users;
        this._FileUpload = _FileUpload;
        this.workshopModel = new __WEBPACK_IMPORTED_MODULE_2__models_model_workshop_drawing__["a" /* WorkShopDrawings */]();
        this.otherText = false;
        this.validForm = true;
        this.viewOnly = false;
        this.orderStatus = "pending";
        this.attachments = [];
        this.drawingsList = __WEBPACK_IMPORTED_MODULE_1__drop_down_lists_workshop_drawings__["b" /* RequiredDrawings */];
        this.buildingTypes = __WEBPACK_IMPORTED_MODULE_1__drop_down_lists_workshop_drawings__["a" /* BuildingTypes */];
        this.buildingTypesSub = [];
    }
    StructuralDesignComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('formData')) {
            this.orderStatus = localStorage.getItem('orderStatus');
            this.attachments = localStorage.getItem('attachments').split(",");
            this.workshopModel = JSON.parse(localStorage.getItem('formData'));
            if (localStorage.getItem('orderStatus') != 'processed') {
                this.viewOnly = false;
            }
            else {
                this.viewOnly = true;
            }
            if (this.workshopModel.buildingType == "Other") {
                this.otherText = true;
            }
            else {
                this.buildingTypesSub.push(this.workshopModel.buildingTypeSub);
            }
        }
        this.getCurrentUserInfo();
    };
    StructuralDesignComponent.prototype.selectBuildingType = function (buildingSelected) {
        if (buildingSelected == "Other") {
            this.otherText = true;
            this.workshopModel.buildingTypeSub = "";
            this.buildingTypesSub = [];
        }
        else {
            this.otherText = false;
            this.buildingTypesSub = buildingSelected.split(",");
        }
    };
    StructuralDesignComponent.prototype.getFiles = function (e) {
        this.uploadedFiles = e;
        this.attachments = [];
        for (var _i = 0, _a = e.target.files; _i < _a.length; _i++) {
            var file = _a[_i];
            this.attachments.push(file.name);
        }
        console.log(this.attachments.toString());
    };
    StructuralDesignComponent.prototype.submitForm = function () {
        this.validateData();
    };
    StructuralDesignComponent.prototype.validateData = function () {
        if (this.workshopModel.buildingTypeSub
            && this.workshopModel.city
            && this.workshopModel.country
            && this.workshopModel.drawings
            && this.workshopModel.noOfFloors
            && this.workshopModel.additionalRequests
            && this.workshopModel.language && this.attachments) {
            this.validForm = true;
            this.saveForm(JSON.stringify(this.workshopModel));
        }
        else {
            this.validForm = false;
        }
    };
    StructuralDesignComponent.prototype.saveForm = function (formData) {
        var _this = this;
        this._FileUpload.uploadFiles(this.uploadedFiles).subscribe(function (data) {
            // SHOW A MESSAGE RECEIVED FROM THE WEB API.
            if (data) {
                _this._FormSubmit.saveFormDetails(__WEBPACK_IMPORTED_MODULE_4__service_urls__["a" /* serviceUrls */].addOrder, _this.currentUser['id'], _this.orderStatus, "structural-design", _this.attachments.toString(), formData).subscribe(function (data) {
                    window.location.href = "/myOrders";
                }, function (error) {
                    console.error(error);
                });
            }
        }, function (error) {
            console.log(error.MESSAGE); // SHOW ERRORS IF ANY.
        });
    };
    StructuralDesignComponent.prototype.ngOnDestroy = function () {
        localStorage.setItem('formData', "");
        localStorage.setItem('orderStatus', "");
        localStorage.setItem('attachments', "");
    };
    StructuralDesignComponent.prototype.getCurrentUserInfo = function () {
        var _this = this;
        this._Users.getCurrentUser(__WEBPACK_IMPORTED_MODULE_4__service_urls__["a" /* serviceUrls */].getCurrentUser).subscribe(function (data) {
            if (data["id"]) {
                _this.currentUser = data;
            }
        });
    };
    StructuralDesignComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-structural-design',
            template: __webpack_require__("./src/app/forms/structural-design/structural-design.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_3__services_service_submit_form__["a" /* FormSubmit */], __WEBPACK_IMPORTED_MODULE_6__services_service_file_upload__["a" /* FileUpload */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_service_submit_form__["a" /* FormSubmit */], __WEBPACK_IMPORTED_MODULE_5__services_service_get_users__["a" /* Users */], __WEBPACK_IMPORTED_MODULE_6__services_service_file_upload__["a" /* FileUpload */]])
    ], StructuralDesignComponent);
    return StructuralDesignComponent;
}());



/***/ }),

/***/ "./src/app/forms/tenders-consult/tenders-consult.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"forms-container\">\n  <div class=\"container\">\n    <form (submit)=\"submitForm()\" class=\"form-card\">\n      <div class=\"row\">\n        <h1 class=\"h3 font-weight-normal form-heading\">{{'CONSULT OUR TEAM' | translate}}</h1>\n\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'consult us in' | translate}}</label>\n            <select [(ngModel)]=\"consultUs['consultIn']\" name=\"consult\" [disabled]=\"viewOnly\" class=\"form-control\">\n              <option selected disabled> {{'Select Field' | translate}}</option>\n              <option>{{'To inquire about the price of an item' | translate}}</option>\n              <option>{{'Make notes on the price of an item' | translate}}</option>\n              <option>{{'To inquire about the price analysis of a separate item' | translate}}</option>\n            </select>\n            <label *ngIf=\"!consultUs['consultIn'] && !validForm\" name=\"consultValidation\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Country' | translate}}</label>\n            <select [(ngModel)]=\"consultUs['country']\" name=\"country\" [disabled]=\"viewOnly\" class=\"form-control\">\n              <option selected disabled> {{'Select Field' | translate}}</option>\n              <option>{{'Egypt' | translate}}</option>\n              <option>{{'Saudi Arabia' | translate}}</option>\n            </select>\n            <label *ngIf=\"!consultUs['country'] && !validForm\" name=\"countryValidation\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"\">{{'City' | translate}}</label>\n            <input [(ngModel)]=\"consultUs['city']\" type=\"text\" name=\"city\" [disabled]=\"viewOnly\" class=\"form-control\" placeholder=\"\" />\n            <label *ngIf=\"!consultUs['city'] && !validForm\" name=\"cityValidation\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div class=\"col-xs-12\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Type your question' | translate}}</label>\n            <textarea [(ngModel)]=\"consultUs['questionInput']\" name=\"question\" [disabled]=\"viewOnly\" class=\"form-control\"\n              rows=\"4\"></textarea>\n            <label *ngIf=\"!consultUs['questionInput'] && !validForm\" name=\"questionValidation\" class=\"required\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label>{{'Attachments (image of item description - drawings)' | translate}}</label>\n            <input type=\"file\" name=\"attachment\" id=\"file\" multiple (change)=\"getFiles($event)\" class=\"form-control\" />\n          </div>\n        </div>\n\n        <div class=\"col-xs-12\">\n          <button *ngIf=\"!viewOnly\" class=\"btn btn-orange\" type=\"submit\"> {{'Send' | translate}} </button>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/forms/tenders-consult/tenders-consult.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TendersConsultComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__drop_down_lists_workshop_drawings__ = __webpack_require__("./src/app/drop-down-lists/workshop-drawings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_service_submit_form__ = __webpack_require__("./src/app/forms/services/service.submit-form.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_urls__ = __webpack_require__("./src/app/service-urls.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_service_get_users__ = __webpack_require__("./src/app/services/service.get-users.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_service_file_upload__ = __webpack_require__("./src/app/forms/services/service.file-upload.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_model_consult__ = __webpack_require__("./src/app/forms/models/model.consult.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var TendersConsultComponent = /** @class */ (function () {
    function TendersConsultComponent(_FormSubmit, _Users, _ActivatedRoute, _FileUpload) {
        this._FormSubmit = _FormSubmit;
        this._Users = _Users;
        this._ActivatedRoute = _ActivatedRoute;
        this._FileUpload = _FileUpload;
        this.consultUs = new __WEBPACK_IMPORTED_MODULE_7__models_model_consult__["a" /* Consultation */]();
        this.otherText = false;
        this.validForm = true;
        this.viewOnly = false;
        this.orderStatus = "pending";
        this.attachments = [];
        this.drawingsList = __WEBPACK_IMPORTED_MODULE_1__drop_down_lists_workshop_drawings__["b" /* RequiredDrawings */];
        this.buildingTypes = __WEBPACK_IMPORTED_MODULE_1__drop_down_lists_workshop_drawings__["a" /* BuildingTypes */];
        this.buildingTypesSub = [];
    }
    TendersConsultComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('formData')) {
            this.orderStatus = localStorage.getItem('orderStatus');
            this.attachments = localStorage.getItem('attachments').split(",");
            this.consultUs = JSON.parse(localStorage.getItem('formData'));
            if (localStorage.getItem('orderStatus') != 'processed') {
                this.viewOnly = false;
            }
            else {
                this.viewOnly = true;
            }
            if (this.consultUs.buildingType == "Other") {
                this.otherText = true;
            }
            else {
                this.buildingTypesSub.push(this.consultUs.buildingTypeSub);
            }
        }
        this.getCurrentUserInfo();
    };
    TendersConsultComponent.prototype.selectBuildingType = function (buildingSelected) {
        if (buildingSelected == "Other") {
            this.otherText = true;
            this.consultUs.buildingTypeSub = "";
            this.buildingTypesSub = [];
        }
        else {
            this.otherText = false;
            this.buildingTypesSub = buildingSelected.split(",");
        }
    };
    TendersConsultComponent.prototype.getFiles = function (e) {
        this.uploadedFiles = e;
        this.attachments = [];
        for (var _i = 0, _a = e.target.files; _i < _a.length; _i++) {
            var file = _a[_i];
            this.attachments.push(file.name);
        }
        console.log(this.attachments.toString());
    };
    TendersConsultComponent.prototype.submitForm = function () {
        this.validateData();
    };
    TendersConsultComponent.prototype.validateData = function () {
        if (this.consultUs.city
            && this.consultUs.country && this.consultUs.questionInput && this.attachments) {
            this.validForm = true;
            this.saveForm(JSON.stringify(this.consultUs));
        }
        else {
            this.validForm = false;
        }
    };
    TendersConsultComponent.prototype.saveForm = function (formData) {
        var _this = this;
        this._FileUpload.uploadFiles(this.uploadedFiles).subscribe(function (data) {
            // SHOW A MESSAGE RECEIVED FROM THE WEB API.
            if (data) {
                _this._FormSubmit.saveFormDetails(__WEBPACK_IMPORTED_MODULE_3__service_urls__["a" /* serviceUrls */].addOrder, _this.currentUser['id'], _this.orderStatus, "tenders-consult", _this.attachments.toString(), formData).subscribe(function (data) {
                    window.location.href = "/myOrders";
                }, function (error) {
                    console.error(error);
                });
            }
        }, function (error) {
            console.log(error.MESSAGE); // SHOW ERRORS IF ANY.
        });
    };
    TendersConsultComponent.prototype.ngOnDestroy = function () {
        localStorage.setItem('formData', "");
        localStorage.setItem('orderStatus', "");
        localStorage.setItem('attachments', "");
    };
    TendersConsultComponent.prototype.getCurrentUserInfo = function () {
        var _this = this;
        this._Users.getCurrentUser(__WEBPACK_IMPORTED_MODULE_3__service_urls__["a" /* serviceUrls */].getCurrentUser).subscribe(function (data) {
            if (data["id"]) {
                _this.currentUser = data;
            }
        });
    };
    TendersConsultComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-tenders-consult',
            template: __webpack_require__("./src/app/forms/tenders-consult/tenders-consult.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_service_submit_form__["a" /* FormSubmit */], __WEBPACK_IMPORTED_MODULE_6__services_service_file_upload__["a" /* FileUpload */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_service_submit_form__["a" /* FormSubmit */], __WEBPACK_IMPORTED_MODULE_4__services_service_get_users__["a" /* Users */], __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_6__services_service_file_upload__["a" /* FileUpload */]])
    ], TendersConsultComponent);
    return TendersConsultComponent;
}());



/***/ }),

/***/ "./src/app/forms/tenders-revision/tenders-revision.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"forms-container\">\n  <div class=\"container\">\n    <form (submit)=\"submitForm()\" class=\"form-card\">\n      <div class=\"row\">\n        <h1 class=\"h3 font-weight-normal form-heading\">{{'Review and check the prices of tenders' | translate}}</h1>\n\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Services Required' | translate}}</label>\n            <select [(ngModel)]=\"contestCostModel.services\" name=\"service\" [disabled]=\"viewOnly\" class=\"form-control\">\n              <option selected>{{'Review and check the prices of tenders' | translate}}</option>\n            </select>\n            <label *ngIf=\"!contestCostModel.services && !validForm\" name=\"serviceValidation\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Building Type' | translate}}</label>\n            <select [(ngModel)]=\"contestCostModel['buildingType']\" name=\"type\" (change)=\"selectBuildingType($event.target.value)\" [disabled]=\"viewOnly\" class=\"form-control\">\n              <option selected disabled>{{'Select Field' | translate}}</option>\n              <option *ngFor=\"let building of buildingTypes\" [value]=\"building.categories\">{{building.name | translate}}</option>\n              <option>{{'Other' | translate}}</option>\n            </select>\n            <label *ngIf=\"!contestCostModel['buildingTypeSub'] && !validForm\" name=\"typeValidation\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div *ngIf=\"otherText\" class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Other' | translate}}</label>\n            <input [(ngModel)]=\"contestCostModel['buildingTypeSub']\" type=\"text\" name=\"other\" [disabled]=\"viewOnly\" class=\"form-control\" placeholder=\"\"\n            />\n            <label *ngIf=\"!contestCostModel['buildingTypeSub'] && !validForm && otherText\" name=\"otherValidation\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div *ngIf=\"buildingTypesSub.length>0\" class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Building Types:' | translate}}</label>\n            <select [(ngModel)]=\"contestCostModel['buildingTypeSub']\" name=\"category\" [disabled]=\"viewOnly\" class=\"form-control\">\n              <option selected disabled> {{'Select Field' | translate}}</option>\n              <option *ngFor=\"let buildingSub of buildingTypesSub\">{{buildingSub | translate}}</option>\n            </select>\n            <label *ngIf=\"!contestCostModel['buildingTypeSub'] && !validForm && buildingTypesSub.length>0\" name=\"categoryValidation\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Country' | translate}}</label>\n            <select [(ngModel)]=\"contestCostModel['country']\" name=\"country\" [disabled]=\"viewOnly\" class=\"form-control\">\n              <option selected disabled> {{'Select Field' | translate}}</option>\n              <option>{{'Egypt' | translate}}</option>\n              <option>{{'Saudi Arabia' | translate}}</option>\n            </select>\n            <label *ngIf=\"!contestCostModel['country'] && !validForm\" name=\"countryValidation\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"\">{{'City' | translate}}</label>\n            <input [(ngModel)]=\"contestCostModel['city']\" type=\"text\" name=\"city\" [disabled]=\"viewOnly\" class=\"form-control\" placeholder=\"\" />\n            <label *ngIf=\"!contestCostModel['city'] && !validForm\" name=\"cityValidation\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Building area' | translate}}</label>\n            <input [(ngModel)]=\"contestCostModel['buildingSize']\" type=\"text\" name=\"buildingSize\" [disabled]=\"viewOnly\" class=\"form-control\" placeholder=\"\"\n            />\n            <label *ngIf=\"!contestCostModel['buildingSize'] && !validForm\" name=\"buildingValidation\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Project size' | translate}}</label>\n            <input [(ngModel)]=\"contestCostModel['projectSize']\" type=\"text\" name=\"projectSize\" [disabled]=\"viewOnly\" class=\"form-control\" placeholder=\"\"\n            />\n            <label *ngIf=\"!contestCostModel['projectSize'] && !validForm\" name=\"projectSize\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Number of Floors' | translate}}</label>\n            <input [(ngModel)]=\"contestCostModel['noOfFloors']\" type=\"text\" name=\"floors\" [disabled]=\"viewOnly\" class=\"form-control\" placeholder=\"\"\n            />\n            <label *ngIf=\"!contestCostModel['noOfFloors'] && !validForm\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div class=\"col-xs-12\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Requests & Suggestions' | translate}}</label>\n            <textarea [(ngModel)]=\"contestCostModel['additionalRequests']\" name=\"additional\" [disabled]=\"viewOnly\" class=\"form-control\"\n              rows=\"4\"></textarea>\n            <label *ngIf=\"!contestCostModel['additionalRequests'] && !validForm\" name=\"additionalValidation\" class=\"required\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label>{{'Attachments (all available drawingss - BOQ and Specifications)' | translate}}</label>\n            <input type=\"file\" name=\"attachment\" id=\"file\" multiple (change)=\"getFiles($event)\" class=\"form-control\" />\n          </div>\n        </div>\n\n        <div class=\"col-xs-12\">\n          <button *ngIf=\"!viewOnly\" class=\"btn btn-orange\" type=\"submit\"> {{'Send' | translate}} </button>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/forms/tenders-revision/tenders-revision.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TendersRevisionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contest_cost_models_model_contest_cost__ = __webpack_require__("./src/app/forms/contest-cost/models/model.contest-cost.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__drop_down_lists_workshop_drawings__ = __webpack_require__("./src/app/drop-down-lists/workshop-drawings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_service_submit_form__ = __webpack_require__("./src/app/forms/services/service.submit-form.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_urls__ = __webpack_require__("./src/app/service-urls.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_service_get_users__ = __webpack_require__("./src/app/services/service.get-users.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_service_file_upload__ = __webpack_require__("./src/app/forms/services/service.file-upload.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var TendersRevisionComponent = /** @class */ (function () {
    function TendersRevisionComponent(_FormSubmit, _Users, _ActivatedRoute, _FileUpload) {
        this._FormSubmit = _FormSubmit;
        this._Users = _Users;
        this._ActivatedRoute = _ActivatedRoute;
        this._FileUpload = _FileUpload;
        this.contestCostModel = new __WEBPACK_IMPORTED_MODULE_1__contest_cost_models_model_contest_cost__["a" /* ContestCost */]();
        this.otherText = false;
        this.validForm = true;
        this.viewOnly = false;
        this.orderStatus = "pending";
        this.attachments = [];
        this.drawingsList = __WEBPACK_IMPORTED_MODULE_2__drop_down_lists_workshop_drawings__["b" /* RequiredDrawings */];
        this.buildingTypes = __WEBPACK_IMPORTED_MODULE_2__drop_down_lists_workshop_drawings__["a" /* BuildingTypes */];
        this.buildingTypesSub = [];
    }
    TendersRevisionComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('formData')) {
            this.orderStatus = localStorage.getItem('orderStatus');
            this.attachments = localStorage.getItem('attachments').split(",");
            this.contestCostModel = JSON.parse(localStorage.getItem('formData'));
            if (localStorage.getItem('orderStatus') != 'processed') {
                this.viewOnly = false;
            }
            else {
                this.viewOnly = true;
            }
            if (this.contestCostModel.buildingType == "Other") {
                this.otherText = true;
            }
            else {
                this.buildingTypesSub.push(this.contestCostModel.buildingTypeSub);
            }
        }
        this.getCurrentUserInfo();
    };
    TendersRevisionComponent.prototype.getFiles = function (e) {
        this.uploadedFiles = e;
        this.attachments = [];
        for (var _i = 0, _a = e.target.files; _i < _a.length; _i++) {
            var file = _a[_i];
            this.attachments.push(file.name);
        }
        console.log(this.attachments.toString());
    };
    TendersRevisionComponent.prototype.submitForm = function () {
        this.validateData();
    };
    TendersRevisionComponent.prototype.validateData = function () {
        if (this.contestCostModel.buildingType
            && this.contestCostModel.buildingTypeSub
            && this.contestCostModel.city
            && this.contestCostModel.country
            && this.contestCostModel.services
            && this.contestCostModel.noOfFloors
            && this.contestCostModel.additionalRequests
            && this.contestCostModel.buildingSize
            && this.contestCostModel.projectSize && this.attachments) {
            this.validForm = true;
            this.saveForm(JSON.stringify(this.contestCostModel));
        }
        else {
            this.validForm = false;
        }
    };
    TendersRevisionComponent.prototype.saveForm = function (formData) {
        var _this = this;
        this._FileUpload.uploadFiles(this.uploadedFiles).subscribe(function (data) {
            // SHOW A MESSAGE RECEIVED FROM THE WEB API.
            if (data) {
                _this._FormSubmit.saveFormDetails(__WEBPACK_IMPORTED_MODULE_4__service_urls__["a" /* serviceUrls */].addOrder, _this.currentUser['id'], _this.orderStatus, "Review-and-check", _this.attachments.toString(), formData).subscribe(function (data) {
                    window.location.href = "/myOrders";
                }, function (error) {
                    console.error(error);
                });
            }
        }, function (error) {
            console.log(error.MESSAGE); // SHOW ERRORS IF ANY.
        });
    };
    TendersRevisionComponent.prototype.ngOnDestroy = function () {
        localStorage.setItem('formData', "");
        localStorage.setItem('orderStatus', "");
        localStorage.setItem('attachments', "");
    };
    TendersRevisionComponent.prototype.getCurrentUserInfo = function () {
        var _this = this;
        this._Users.getCurrentUser(__WEBPACK_IMPORTED_MODULE_4__service_urls__["a" /* serviceUrls */].getCurrentUser).subscribe(function (data) {
            if (data["id"]) {
                _this.currentUser = data;
            }
        });
    };
    TendersRevisionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-tenders-revision',
            template: __webpack_require__("./src/app/forms/tenders-revision/tenders-revision.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_3__services_service_submit_form__["a" /* FormSubmit */], __WEBPACK_IMPORTED_MODULE_7__services_service_file_upload__["a" /* FileUpload */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_service_submit_form__["a" /* FormSubmit */], __WEBPACK_IMPORTED_MODULE_5__services_service_get_users__["a" /* Users */], __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_7__services_service_file_upload__["a" /* FileUpload */]])
    ], TendersRevisionComponent);
    return TendersRevisionComponent;
}());



/***/ }),

/***/ "./src/app/forms/tenders-seperate/tenders-seperate.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"forms-container\">\n  <div class=\"container\">\n    <form (submit)=\"submitForm()\" class=\"form-card\">\n      <div class=\"row\">\n        <h1 class=\"h3 font-weight-normal form-heading\">{{'Pricing a separate department' | translate}}</h1>\n\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Services Required' | translate}}</label>\n            <select [(ngModel)]=\"contestCostModel.services\" name=\"service\" [disabled]=\"viewOnly\" class=\"form-control\">\n              <option selected>{{'Pricing a separate department' | translate}}</option>\n            </select>\n            <label *ngIf=\"!contestCostModel.services && !validForm\" name=\"serviceValidation\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Building Type' | translate}}</label>\n            <select [(ngModel)]=\"contestCostModel['buildingType']\" name=\"type\" (change)=\"selectBuildingType($event.target.value)\" [disabled]=\"viewOnly\" class=\"form-control\">\n              <option selected disabled>{{'Select Field' | translate}}</option>\n              <option *ngFor=\"let building of buildingTypes\" [value]=\"building.categories\">{{building.name | translate}}</option>\n              <option>{{'Other' | translate}}</option>\n            </select>\n            <label *ngIf=\"!contestCostModel['buildingTypeSub'] && !validForm\" name=\"typeValidation\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div *ngIf=\"otherText\" class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Other' | translate}}</label>\n            <input [(ngModel)]=\"contestCostModel['buildingTypeSub']\" type=\"text\" name=\"other\" [disabled]=\"viewOnly\" class=\"form-control\" placeholder=\"\"\n            />\n            <label *ngIf=\"!contestCostModel['buildingTypeSub'] && !validForm && otherText\" name=\"otherValidation\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div *ngIf=\"buildingTypesSub.length>0\" class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Building Types:' | translate}}</label>\n            <select [(ngModel)]=\"contestCostModel['buildingTypeSub']\" name=\"category\" [disabled]=\"viewOnly\" class=\"form-control\">\n              <option selected disabled> {{'Select Field' | translate}}</option>\n              <option *ngFor=\"let buildingSub of buildingTypesSub\">{{buildingSub | translate}}</option>\n            </select>\n            <label *ngIf=\"!contestCostModel['buildingTypeSub'] && !validForm && buildingTypesSub.length>0\" name=\"categoryValidation\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Country' | translate}}</label>\n            <select [(ngModel)]=\"contestCostModel['country']\" name=\"country\" [disabled]=\"viewOnly\" class=\"form-control\">\n              <option selected disabled> {{'Select Field' | translate}}</option>\n              <option>{{'Egypt' | translate}}</option>\n              <option>{{'Saudi Arabia' | translate}}</option>\n            </select>\n            <label *ngIf=\"!contestCostModel['country'] && !validForm\" name=\"countryValidation\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"\">{{'City' | translate}}</label>\n            <input [(ngModel)]=\"contestCostModel['city']\" type=\"text\" name=\"city\" [disabled]=\"viewOnly\" class=\"form-control\" placeholder=\"\" />\n            <label *ngIf=\"!contestCostModel['city'] && !validForm\" name=\"cityValidation\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Building area' | translate}}</label>\n            <input [(ngModel)]=\"contestCostModel['buildingSize']\" type=\"text\" name=\"buildingSize\" [disabled]=\"viewOnly\" class=\"form-control\" placeholder=\"\"\n            />\n            <label *ngIf=\"!contestCostModel['buildingSize'] && !validForm\" name=\"buildingValidation\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Project size' | translate}}</label>\n            <input [(ngModel)]=\"contestCostModel['projectSize']\" type=\"text\" name=\"projectSize\" [disabled]=\"viewOnly\" class=\"form-control\" placeholder=\"\"\n            />\n            <label *ngIf=\"!contestCostModel['projectSize'] && !validForm\" name=\"projectSize\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Number of Floors' | translate}}</label>\n            <input [(ngModel)]=\"contestCostModel['noOfFloors']\" type=\"text\" name=\"floors\" [disabled]=\"viewOnly\" class=\"form-control\" placeholder=\"\"\n            />\n            <label *ngIf=\"!contestCostModel['noOfFloors'] && !validForm\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div class=\"col-xs-12\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Requests & Suggestions' | translate}}</label>\n            <textarea [(ngModel)]=\"contestCostModel['additionalRequests']\" name=\"additional\" [disabled]=\"viewOnly\" class=\"form-control\"\n              rows=\"4\"></textarea>\n            <label *ngIf=\"!contestCostModel['additionalRequests'] && !validForm\" name=\"additionalValidation\" class=\"required\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label>{{'Attachments (General Site Plans - Item drawings / Item to be priced - Item Description)' | translate}}</label>\n            <input type=\"file\" name=\"attachment\" id=\"file\" multiple (change)=\"getFiles($event)\" class=\"form-control\" />\n          </div>\n        </div>\n\n        <div class=\"col-xs-12\">\n          <button *ngIf=\"!viewOnly\" class=\"btn btn-orange\" type=\"submit\"> {{'Send' | translate}} </button>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/forms/tenders-seperate/tenders-seperate.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TendersSeperateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contest_cost_models_model_contest_cost__ = __webpack_require__("./src/app/forms/contest-cost/models/model.contest-cost.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__drop_down_lists_workshop_drawings__ = __webpack_require__("./src/app/drop-down-lists/workshop-drawings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_service_submit_form__ = __webpack_require__("./src/app/forms/services/service.submit-form.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_urls__ = __webpack_require__("./src/app/service-urls.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_service_get_users__ = __webpack_require__("./src/app/services/service.get-users.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_service_file_upload__ = __webpack_require__("./src/app/forms/services/service.file-upload.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var TendersSeperateComponent = /** @class */ (function () {
    function TendersSeperateComponent(_FormSubmit, _Users, _ActivatedRoute, _FileUpload) {
        this._FormSubmit = _FormSubmit;
        this._Users = _Users;
        this._ActivatedRoute = _ActivatedRoute;
        this._FileUpload = _FileUpload;
        this.contestCostModel = new __WEBPACK_IMPORTED_MODULE_1__contest_cost_models_model_contest_cost__["a" /* ContestCost */]();
        this.otherText = false;
        this.validForm = true;
        this.viewOnly = false;
        this.orderStatus = "pending";
        this.attachments = [];
        this.drawingsList = __WEBPACK_IMPORTED_MODULE_2__drop_down_lists_workshop_drawings__["b" /* RequiredDrawings */];
        this.buildingTypes = __WEBPACK_IMPORTED_MODULE_2__drop_down_lists_workshop_drawings__["a" /* BuildingTypes */];
        this.buildingTypesSub = [];
    }
    TendersSeperateComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('formData')) {
            this.orderStatus = localStorage.getItem('orderStatus');
            this.attachments = localStorage.getItem('attachments').split(",");
            this.contestCostModel = JSON.parse(localStorage.getItem('formData'));
            if (localStorage.getItem('orderStatus') != 'processed') {
                this.viewOnly = false;
            }
            else {
                this.viewOnly = true;
            }
            if (this.contestCostModel.buildingType == "Other") {
                this.otherText = true;
            }
            else {
                this.buildingTypesSub.push(this.contestCostModel.buildingTypeSub);
            }
        }
        this.getCurrentUserInfo();
    };
    TendersSeperateComponent.prototype.getFiles = function (e) {
        this.uploadedFiles = e;
        this.attachments = [];
        for (var _i = 0, _a = e.target.files; _i < _a.length; _i++) {
            var file = _a[_i];
            this.attachments.push(file.name);
        }
        console.log(this.attachments.toString());
    };
    TendersSeperateComponent.prototype.submitForm = function () {
        this.validateData();
    };
    TendersSeperateComponent.prototype.validateData = function () {
        if (this.contestCostModel.buildingType
            && this.contestCostModel.buildingTypeSub
            && this.contestCostModel.city
            && this.contestCostModel.country
            && this.contestCostModel.services
            && this.contestCostModel.noOfFloors
            && this.contestCostModel.additionalRequests
            && this.contestCostModel.buildingSize
            && this.contestCostModel.projectSize && this.attachments) {
            this.validForm = true;
            this.saveForm(JSON.stringify(this.contestCostModel));
        }
        else {
            this.validForm = false;
        }
    };
    TendersSeperateComponent.prototype.saveForm = function (formData) {
        var _this = this;
        this._FileUpload.uploadFiles(this.uploadedFiles).subscribe(function (data) {
            // SHOW A MESSAGE RECEIVED FROM THE WEB API.
            if (data) {
                _this._FormSubmit.saveFormDetails(__WEBPACK_IMPORTED_MODULE_4__service_urls__["a" /* serviceUrls */].addOrder, _this.currentUser['id'], _this.orderStatus, "Tenders-seperate", _this.attachments.toString(), formData).subscribe(function (data) {
                    window.location.href = "/myOrders";
                }, function (error) {
                    console.error(error);
                });
            }
        }, function (error) {
            console.log(error.MESSAGE); // SHOW ERRORS IF ANY.
        });
    };
    TendersSeperateComponent.prototype.ngOnDestroy = function () {
        localStorage.setItem('formData', "");
        localStorage.setItem('orderStatus', "");
        localStorage.setItem('attachments', "");
    };
    TendersSeperateComponent.prototype.getCurrentUserInfo = function () {
        var _this = this;
        this._Users.getCurrentUser(__WEBPACK_IMPORTED_MODULE_4__service_urls__["a" /* serviceUrls */].getCurrentUser).subscribe(function (data) {
            if (data["id"]) {
                _this.currentUser = data;
            }
        });
    };
    TendersSeperateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-tenders-seperate',
            template: __webpack_require__("./src/app/forms/tenders-seperate/tenders-seperate.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_3__services_service_submit_form__["a" /* FormSubmit */], __WEBPACK_IMPORTED_MODULE_7__services_service_file_upload__["a" /* FileUpload */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_service_submit_form__["a" /* FormSubmit */], __WEBPACK_IMPORTED_MODULE_5__services_service_get_users__["a" /* Users */], __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_7__services_service_file_upload__["a" /* FileUpload */]])
    ], TendersSeperateComponent);
    return TendersSeperateComponent;
}());



/***/ }),

/***/ "./src/app/forms/workshop-drawing/workshop-consult/workshop-consult.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"forms-container\">\n  <div class=\"container\">\n    <form (submit)=\"submitForm()\" class=\"form-card\">\n      <div class=\"row\">\n        <h1 class=\"h3 font-weight-normal form-heading\">{{'Consult the workshop plans' | translate}}</h1>\n\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'consult us in' | translate}}</label>\n            <select [(ngModel)]=\"consultUs['consultIn']\" name=\"consult\" [disabled]=\"viewOnly\" class=\"form-control\">\n              <option selected disabled> {{'Select Field' | translate}}</option>\n              <option>{{'Architectural Workshop drawings' | translate}}</option>\n              <option>{{'structurale workshop drawings' | translate}}</option>\n              <option>{{'Electrical workshop drawings' | translate}}</option>\n              <option>{{'sanitary workshop drawings' | translate}}</option>\n              <option>{{'Mechanical workshop drawings' | translate}}</option>\n            </select>\n            <label *ngIf=\"!consultUs['consultIn'] && !validForm\" name=\"consultValidation\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Country' | translate}}</label>\n            <select [(ngModel)]=\"consultUs['country']\" name=\"country\" [disabled]=\"viewOnly\" class=\"form-control\">\n              <option selected disabled> {{'Select Field' | translate}}</option>\n              <option>{{'Egypt' | translate}}</option>\n              <option>{{'Saudi Arabia' | translate}}</option>\n            </select>\n            <label *ngIf=\"!consultUs['country'] && !validForm\" name=\"countryValidation\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"\">{{'City' | translate}}</label>\n            <input [(ngModel)]=\"consultUs['city']\" type=\"text\" name=\"city\" [disabled]=\"viewOnly\" class=\"form-control\" placeholder=\"\" />\n            <label *ngIf=\"!consultUs['city'] && !validForm\" name=\"cityValidation\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Building Type' | translate}}</label>\n            <select [(ngModel)]=\"consultUs['buildingType']\" name=\"type\" (change)=\"selectBuildingType($event.target.value)\" [disabled]=\"viewOnly\" class=\"form-control\">\n              <option selected disabled>{{'Select Field' | translate}}</option>\n              <option *ngFor=\"let building of buildingTypes\" [value]=\"building.categories\">{{building.name | translate}}</option>\n              <option>{{'Other' | translate}}</option>\n            </select>\n            <label *ngIf=\"!consultUs['buildingTypeSub'] && !validForm\" name=\"typeValidation\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div *ngIf=\"otherText\" class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Other' | translate}}</label>\n            <input [(ngModel)]=\"consultUs['buildingTypeSub']\" type=\"text\" name=\"other\" [disabled]=\"viewOnly\" class=\"form-control\" placeholder=\"\"\n            />\n            <label *ngIf=\"!consultUs['buildingTypeSub'] && !validForm && otherText\" name=\"otherValidation\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div *ngIf=\"buildingTypesSub.length>0\" class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Building Types:' | translate}}</label>\n            <select [(ngModel)]=\"consultUs['buildingTypeSub']\" name=\"category\" [disabled]=\"viewOnly\" class=\"form-control\">\n              <option selected disabled> {{'Select Field' | translate}}</option>\n              <option *ngFor=\"let buildingSub of buildingTypesSub\">{{buildingSub | translate}}</option>\n            </select>\n            <label *ngIf=\"!consultUs['buildingTypeSub'] && !validForm && buildingTypesSub.length>0\" name=\"categoryValidation\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div class=\"col-xs-12\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Type your question' | translate}}</label>\n            <textarea [(ngModel)]=\"consultUs['questionInput']\" name=\"question\" [disabled]=\"viewOnly\" class=\"form-control\"\n              rows=\"4\"></textarea>\n            <label *ngIf=\"!consultUs['questionInput'] && !validForm\" name=\"questionValidation\" class=\"required\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label>{{'Attachments' | translate}}</label>\n            <input type=\"file\" name=\"attachment\" id=\"file\" multiple (change)=\"getFiles($event)\" class=\"form-control\" />\n          </div>\n        </div>\n\n        <div class=\"col-xs-12\">\n          <button *ngIf=\"!viewOnly\" class=\"btn btn-orange\" type=\"submit\"> {{'Send' | translate}} </button>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/forms/workshop-drawing/workshop-consult/workshop-consult.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkshopConsultComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__drop_down_lists_workshop_drawings__ = __webpack_require__("./src/app/drop-down-lists/workshop-drawings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_service_submit_form__ = __webpack_require__("./src/app/forms/services/service.submit-form.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_urls__ = __webpack_require__("./src/app/service-urls.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_service_get_users__ = __webpack_require__("./src/app/services/service.get-users.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_service_file_upload__ = __webpack_require__("./src/app/forms/services/service.file-upload.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_model_consult__ = __webpack_require__("./src/app/forms/models/model.consult.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var WorkshopConsultComponent = /** @class */ (function () {
    function WorkshopConsultComponent(_FormSubmit, _Users, _ActivatedRoute, _FileUpload) {
        this._FormSubmit = _FormSubmit;
        this._Users = _Users;
        this._ActivatedRoute = _ActivatedRoute;
        this._FileUpload = _FileUpload;
        this.consultUs = new __WEBPACK_IMPORTED_MODULE_7__models_model_consult__["a" /* Consultation */]();
        this.otherText = false;
        this.validForm = true;
        this.viewOnly = false;
        this.orderStatus = "pending";
        this.attachments = [];
        this.drawingsList = __WEBPACK_IMPORTED_MODULE_1__drop_down_lists_workshop_drawings__["b" /* RequiredDrawings */];
        this.buildingTypes = __WEBPACK_IMPORTED_MODULE_1__drop_down_lists_workshop_drawings__["a" /* BuildingTypes */];
        this.buildingTypesSub = [];
    }
    WorkshopConsultComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('formData')) {
            this.orderStatus = localStorage.getItem('orderStatus');
            this.attachments = localStorage.getItem('attachments').split(",");
            this.consultUs = JSON.parse(localStorage.getItem('formData'));
            if (localStorage.getItem('orderStatus') != 'processed') {
                this.viewOnly = false;
            }
            else {
                this.viewOnly = true;
            }
            if (this.consultUs.buildingType == "Other") {
                this.otherText = true;
            }
            else {
                this.buildingTypesSub.push(this.consultUs.buildingTypeSub);
            }
        }
        this.getCurrentUserInfo();
    };
    WorkshopConsultComponent.prototype.selectBuildingType = function (buildingSelected) {
        if (buildingSelected == "Other") {
            this.otherText = true;
            this.consultUs.buildingTypeSub = "";
            this.buildingTypesSub = [];
        }
        else {
            this.otherText = false;
            this.buildingTypesSub = buildingSelected.split(",");
        }
    };
    WorkshopConsultComponent.prototype.getFiles = function (e) {
        this.uploadedFiles = e;
        this.attachments = [];
        for (var _i = 0, _a = e.target.files; _i < _a.length; _i++) {
            var file = _a[_i];
            this.attachments.push(file.name);
        }
        console.log(this.attachments.toString());
    };
    WorkshopConsultComponent.prototype.submitForm = function () {
        this.validateData();
    };
    WorkshopConsultComponent.prototype.validateData = function () {
        if (this.consultUs.buildingType
            && this.consultUs.buildingTypeSub
            && this.consultUs.city
            && this.consultUs.country && this.consultUs.questionInput && this.attachments) {
            this.validForm = true;
            this.saveForm(JSON.stringify(this.consultUs));
        }
        else {
            this.validForm = false;
        }
    };
    WorkshopConsultComponent.prototype.saveForm = function (formData) {
        var _this = this;
        this._FileUpload.uploadFiles(this.uploadedFiles).subscribe(function (data) {
            // SHOW A MESSAGE RECEIVED FROM THE WEB API.
            if (data) {
                _this._FormSubmit.saveFormDetails(__WEBPACK_IMPORTED_MODULE_3__service_urls__["a" /* serviceUrls */].addOrder, _this.currentUser['id'], _this.orderStatus, "workshop-consult", _this.attachments.toString(), formData).subscribe(function (data) {
                    window.location.href = "/myOrders";
                }, function (error) {
                    console.error(error);
                });
            }
        }, function (error) {
            console.log(error.MESSAGE); // SHOW ERRORS IF ANY.
        });
    };
    WorkshopConsultComponent.prototype.ngOnDestroy = function () {
        localStorage.setItem('formData', "");
        localStorage.setItem('orderStatus', "");
        localStorage.setItem('attachments', "");
    };
    WorkshopConsultComponent.prototype.getCurrentUserInfo = function () {
        var _this = this;
        this._Users.getCurrentUser(__WEBPACK_IMPORTED_MODULE_3__service_urls__["a" /* serviceUrls */].getCurrentUser).subscribe(function (data) {
            if (data["id"]) {
                _this.currentUser = data;
            }
        });
    };
    WorkshopConsultComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-workshop-consult',
            template: __webpack_require__("./src/app/forms/workshop-drawing/workshop-consult/workshop-consult.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_service_submit_form__["a" /* FormSubmit */], __WEBPACK_IMPORTED_MODULE_6__services_service_file_upload__["a" /* FileUpload */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_service_submit_form__["a" /* FormSubmit */], __WEBPACK_IMPORTED_MODULE_4__services_service_get_users__["a" /* Users */], __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_6__services_service_file_upload__["a" /* FileUpload */]])
    ], WorkshopConsultComponent);
    return WorkshopConsultComponent;
}());



/***/ }),

/***/ "./src/app/forms/workshop-drawing/workshop-drawing.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"forms-container\">\n  <div class=\"container\">\n    <form (submit)=\"submitForm()\" class=\"form-card\">\n      <div class=\"row\">\n        <h1 class=\"h3 font-weight-normal form-heading\">{{'SHOP DRAWINGS' | translate}}</h1>\n\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Required drawings' | translate}}</label>\n            <select [(ngModel)]=\"workshopModel['drawings']\" name=\"drawing\" [disabled]=\"viewOnly\" class=\"form-control\">\n              <option selected disabled> {{'Select Field' | translate}}</option>\n              <option *ngFor=\"let drawing of drawingsList\">{{drawing | translate}}</option>\n            </select>\n            <label *ngIf=\"!workshopModel['drawings'] && !validForm\" name=\"drawingValidation\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Building Type' | translate}}</label>\n            <select [(ngModel)]=\"workshopModel['buildingType']\" name=\"type\" (change)=\"selectBuildingType($event.target.value)\" [disabled]=\"viewOnly\"\n              class=\"form-control\">\n              <option selected disabled>{{'Select Field' | translate}}</option>\n              <option *ngFor=\"let building of buildingTypes\" [value]=\"building.categories\">{{building.name | translate}}</option>\n              <option>{{'Other' | translate}}</option>\n            </select>\n            <label *ngIf=\"!workshopModel['buildingTypeSub'] && !validForm\" name=\"typeValidation\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div *ngIf=\"otherText\" class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Other' | translate}}</label>\n            <input [(ngModel)]=\"workshopModel['buildingTypeSub']\" type=\"text\" name=\"other\" [disabled]=\"viewOnly\" class=\"form-control\"\n              placeholder=\"Enter Building Type\" />\n            <label *ngIf=\"!workshopModel['buildingTypeSub'] && !validForm && otherText\" name=\"otherValidation\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div *ngIf=\"buildingTypesSub.length>0\" class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Building Types:' | translate}}</label>\n            <select [(ngModel)]=\"workshopModel['buildingTypeSub']\" name=\"category\" [disabled]=\"viewOnly\" class=\"form-control\">\n              <option selected disabled> {{'Select Field' | translate}}</option>\n              <option *ngFor=\"let buildingSub of buildingTypesSub\">{{buildingSub}}</option>\n            </select>\n            <label *ngIf=\"!workshopModel['buildingTypeSub'] && !validForm && buildingTypesSub.length>0\" name=\"categoryValidation\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Country' | translate}}</label>\n            <select [(ngModel)]=\"workshopModel['country']\" name=\"countryy\" [disabled]=\"viewOnly\" class=\"form-control\">\n              <option selected disabled> {{'Select Field' | translate}}</option>\n              <option>{{'Egypt' | translate}}</option>\n              <option>{{'Saudi Arabia' | translate}}</option>\n            </select>\n            <label *ngIf=\"!workshopModel['country'] && !validForm\" name=\"countryValidation\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"\">{{'City' | translate}}</label>\n            <input [(ngModel)]=\"workshopModel['city']\" type=\"text\" name=\"city\" [disabled]=\"viewOnly\" class=\"form-control\" placeholder=\"\"\n            />\n            <label *ngIf=\"!workshopModel['city'] && !validForm\" name=\"cityValidation\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Number of Floors' | translate}}</label>\n            <input [(ngModel)]=\"workshopModel['noOfFloors']\" type=\"text\" name=\"floors\" [disabled]=\"viewOnly\" class=\"form-control\" placeholder=\"\"\n            />\n            <label *ngIf=\"!workshopModel['noOfFloors'] && !validForm\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div class=\"col-xs-12\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Requests & Suggestions' | translate}}</label>\n            <textarea [(ngModel)]=\"workshopModel['additionalRequests']\" name=\"additional\" [disabled]=\"viewOnly\" class=\"form-control\"\n              rows=\"4\"></textarea>\n            <label *ngIf=\"!workshopModel['additionalRequests'] && !validForm\" name=\"additionalValidation\" class=\"required\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label>{{'Attachments (design drawings)' | translate}}</label>\n            <input type=\"file\" name=\"attachment\" id=\"file\" multiple (change)=\"getFiles($event)\" class=\"form-control\" />\n          </div>\n        </div>\n\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Prefered Language' | translate}}</label>\n            <select [(ngModel)]=\"workshopModel['language']\" name=\"country\" [disabled]=\"viewOnly\" class=\"form-control\">\n              <option selected disabled>{{'Select Field' | translate}}</option>\n              <option>English</option>\n              <option>عربي</option>\n            </select>\n            <label *ngIf=\"!workshopModel['language'] && !validForm\" name=\"countryValidation\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div class=\"col-xs-12\">\n          <button *ngIf=\"!viewOnly\" class=\"btn btn-orange\" type=\"submit\"> {{'Send' | translate}} </button>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/forms/workshop-drawing/workshop-drawing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkshopDrawingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__drop_down_lists_workshop_drawings__ = __webpack_require__("./src/app/drop-down-lists/workshop-drawings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_model_workshop_drawing__ = __webpack_require__("./src/app/forms/models/model.workshop-drawing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_service_submit_form__ = __webpack_require__("./src/app/forms/services/service.submit-form.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_urls__ = __webpack_require__("./src/app/service-urls.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_service_get_users__ = __webpack_require__("./src/app/services/service.get-users.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_service_file_upload__ = __webpack_require__("./src/app/forms/services/service.file-upload.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var WorkshopDrawingComponent = /** @class */ (function () {
    function WorkshopDrawingComponent(_FormSubmit, _Users, _FileUpload) {
        this._FormSubmit = _FormSubmit;
        this._Users = _Users;
        this._FileUpload = _FileUpload;
        this.workshopModel = new __WEBPACK_IMPORTED_MODULE_2__models_model_workshop_drawing__["a" /* WorkShopDrawings */]();
        this.otherText = false;
        this.validForm = true;
        this.viewOnly = false;
        this.orderStatus = "pending";
        this.attachments = [];
        this.drawingsList = __WEBPACK_IMPORTED_MODULE_1__drop_down_lists_workshop_drawings__["b" /* RequiredDrawings */];
        this.buildingTypes = __WEBPACK_IMPORTED_MODULE_1__drop_down_lists_workshop_drawings__["a" /* BuildingTypes */];
        this.buildingTypesSub = [];
    }
    WorkshopDrawingComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('formData')) {
            this.orderStatus = localStorage.getItem('orderStatus');
            this.attachments = localStorage.getItem('attachments').split(",");
            this.workshopModel = JSON.parse(localStorage.getItem('formData'));
            if (localStorage.getItem('orderStatus') != 'processed') {
                this.viewOnly = false;
            }
            else {
                this.viewOnly = true;
            }
            if (this.workshopModel.buildingType == "Other") {
                this.otherText = true;
            }
            else {
                this.buildingTypesSub.push(this.workshopModel.buildingTypeSub);
            }
        }
        this.getCurrentUserInfo();
    };
    WorkshopDrawingComponent.prototype.selectBuildingType = function (buildingSelected) {
        if (buildingSelected == "Other") {
            this.otherText = true;
            this.workshopModel.buildingTypeSub = "";
            this.buildingTypesSub = [];
        }
        else {
            this.otherText = false;
            this.buildingTypesSub = buildingSelected.split(",");
        }
    };
    WorkshopDrawingComponent.prototype.getFiles = function (e) {
        this.uploadedFiles = e;
        this.attachments = [];
        for (var _i = 0, _a = e.target.files; _i < _a.length; _i++) {
            var file = _a[_i];
            this.attachments.push(file.name);
        }
        console.log(this.attachments.toString());
    };
    WorkshopDrawingComponent.prototype.submitForm = function () {
        this.validateData();
    };
    WorkshopDrawingComponent.prototype.validateData = function () {
        if (this.workshopModel.buildingTypeSub
            && this.workshopModel.city
            && this.workshopModel.country
            && this.workshopModel.drawings
            && this.workshopModel.noOfFloors
            && this.workshopModel.additionalRequests
            && this.workshopModel.language && this.attachments) {
            this.validForm = true;
            this.saveForm(JSON.stringify(this.workshopModel));
        }
        else {
            this.validForm = false;
        }
    };
    WorkshopDrawingComponent.prototype.saveForm = function (formData) {
        var _this = this;
        this._FileUpload.uploadFiles(this.uploadedFiles).subscribe(function (data) {
            // SHOW A MESSAGE RECEIVED FROM THE WEB API.
            if (data) {
                _this._FormSubmit.saveFormDetails(__WEBPACK_IMPORTED_MODULE_4__service_urls__["a" /* serviceUrls */].addOrder, _this.currentUser['id'], _this.orderStatus, "SHOP-DRAWINGS", _this.attachments.toString(), formData).subscribe(function (data) {
                    window.location.href = "/myOrders";
                }, function (error) {
                    console.error(error);
                });
            }
        }, function (error) {
            console.log(error.MESSAGE); // SHOW ERRORS IF ANY.
        });
    };
    WorkshopDrawingComponent.prototype.ngOnDestroy = function () {
        localStorage.setItem('formData', "");
        localStorage.setItem('orderStatus', "");
        localStorage.setItem('attachments', "");
    };
    WorkshopDrawingComponent.prototype.getCurrentUserInfo = function () {
        var _this = this;
        this._Users.getCurrentUser(__WEBPACK_IMPORTED_MODULE_4__service_urls__["a" /* serviceUrls */].getCurrentUser).subscribe(function (data) {
            if (data["id"]) {
                _this.currentUser = data;
            }
        });
    };
    WorkshopDrawingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-workshop-drawing',
            template: __webpack_require__("./src/app/forms/workshop-drawing/workshop-drawing.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_3__services_service_submit_form__["a" /* FormSubmit */], __WEBPACK_IMPORTED_MODULE_6__services_service_file_upload__["a" /* FileUpload */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_service_submit_form__["a" /* FormSubmit */], __WEBPACK_IMPORTED_MODULE_5__services_service_get_users__["a" /* Users */], __WEBPACK_IMPORTED_MODULE_6__services_service_file_upload__["a" /* FileUpload */]])
    ], WorkshopDrawingComponent);
    return WorkshopDrawingComponent;
}());



/***/ }),

/***/ "./src/app/forms/workshop-drawing/workshop-slabs/workshop-slabs.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"forms-container\">\n  <div class=\"container\">\n    <form (submit)=\"submitForm()\" class=\"form-card\">\n      <div class=\"row\">\n        <h1 class=\"h3 font-weight-normal form-heading\">{{'Workshop drawings for pre-stressed slabs and bridges' | translate}}</h1>\n\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Required drawings' | translate}}</label>\n            <select [(ngModel)]=\"workshopModel['drawings']\" name=\"drawing\" [disabled]=\"viewOnly\" class=\"form-control\">\n              <option selected>{{'Workshop drawings for pre-stressed slabs and bridges' | translate}}</option>\n            </select>\n            <label *ngIf=\"!workshopModel['drawings'] && !validForm\" name=\"drawingValidation\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Building Type' | translate}}</label>\n            <select [(ngModel)]=\"workshopModel['buildingType']\" name=\"type\" (change)=\"selectBuildingType($event.target.value)\" [disabled]=\"viewOnly\"\n              class=\"form-control\">\n              <option selected disabled>{{'Select Field' | translate}}</option>\n              <option *ngFor=\"let building of buildingTypes\" [value]=\"building.categories\">{{building.name | translate}}</option>\n              <option>{{'Other' | translate}}</option>\n            </select>\n            <label *ngIf=\"!workshopModel['buildingTypeSub'] && !validForm\" name=\"typeValidation\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div *ngIf=\"otherText\" class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Other' | translate}}</label>\n            <input [(ngModel)]=\"workshopModel['buildingTypeSub']\" type=\"text\" name=\"other\" [disabled]=\"viewOnly\" class=\"form-control\"\n              placeholder=\"Enter Building Type\" />\n            <label *ngIf=\"!workshopModel['buildingTypeSub'] && !validForm && otherText\" name=\"otherValidation\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div *ngIf=\"buildingTypesSub.length>0\" class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Building Types:' | translate}}</label>\n            <select [(ngModel)]=\"workshopModel['buildingTypeSub']\" name=\"category\" [disabled]=\"viewOnly\" class=\"form-control\">\n              <option selected disabled> {{'Select Field' | translate}}</option>\n              <option *ngFor=\"let buildingSub of buildingTypesSub\">{{buildingSub}}</option>\n            </select>\n            <label *ngIf=\"!workshopModel['buildingTypeSub'] && !validForm && buildingTypesSub.length>0\" name=\"categoryValidation\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Country' | translate}}</label>\n            <select [(ngModel)]=\"workshopModel['country']\" name=\"countryy\" [disabled]=\"viewOnly\" class=\"form-control\">\n              <option selected disabled> {{'Select Field' | translate}}</option>\n              <option>{{'Egypt' | translate}}</option>\n              <option>{{'Saudi Arabia' | translate}}</option>\n            </select>\n            <label *ngIf=\"!workshopModel['country'] && !validForm\" name=\"countryValidation\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"\">{{'City' | translate}}</label>\n            <input [(ngModel)]=\"workshopModel['city']\" type=\"text\" name=\"city\" [disabled]=\"viewOnly\" class=\"form-control\" placeholder=\"\"\n            />\n            <label *ngIf=\"!workshopModel['city'] && !validForm\" name=\"cityValidation\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Number of Floors' | translate}}</label>\n            <input [(ngModel)]=\"workshopModel['noOfFloors']\" type=\"text\" name=\"floors\" [disabled]=\"viewOnly\" class=\"form-control\" placeholder=\"\"\n            />\n            <label *ngIf=\"!workshopModel['noOfFloors'] && !validForm\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div class=\"col-xs-12\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Requests & Suggestions' | translate}}</label>\n            <textarea [(ngModel)]=\"workshopModel['additionalRequests']\" name=\"additional\" [disabled]=\"viewOnly\" class=\"form-control\"\n              rows=\"4\"></textarea>\n            <label *ngIf=\"!workshopModel['additionalRequests'] && !validForm\" name=\"additionalValidation\" class=\"required\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label>{{'Attachments (design drawings)' | translate}}</label>\n            <input type=\"file\" name=\"attachment\" id=\"file\" multiple (change)=\"getFiles($event)\" class=\"form-control\" />\n          </div>\n        </div>\n\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"required\">{{'Prefered Language' | translate}}</label>\n            <select [(ngModel)]=\"workshopModel['language']\" name=\"country\" [disabled]=\"viewOnly\" class=\"form-control\">\n              <option selected disabled>{{'Select Field' | translate}}</option>\n              <option>English</option>\n              <option>عربي</option>\n            </select>\n            <label *ngIf=\"!workshopModel['language'] && !validForm\" name=\"countryValidation\">{{'Please Fill this field' | translate}}</label>\n          </div>\n        </div>\n\n        <div class=\"col-xs-12\">\n          <button *ngIf=\"!viewOnly\" class=\"btn btn-orange\" type=\"submit\"> {{'Send' | translate}} </button>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/forms/workshop-drawing/workshop-slabs/workshop-slabs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkshopSlabsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__drop_down_lists_workshop_drawings__ = __webpack_require__("./src/app/drop-down-lists/workshop-drawings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_model_workshop_drawing__ = __webpack_require__("./src/app/forms/models/model.workshop-drawing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_service_submit_form__ = __webpack_require__("./src/app/forms/services/service.submit-form.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_urls__ = __webpack_require__("./src/app/service-urls.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_service_get_users__ = __webpack_require__("./src/app/services/service.get-users.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_service_file_upload__ = __webpack_require__("./src/app/forms/services/service.file-upload.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var WorkshopSlabsComponent = /** @class */ (function () {
    function WorkshopSlabsComponent(_FormSubmit, _Users, _FileUpload) {
        this._FormSubmit = _FormSubmit;
        this._Users = _Users;
        this._FileUpload = _FileUpload;
        this.workshopModel = new __WEBPACK_IMPORTED_MODULE_2__models_model_workshop_drawing__["a" /* WorkShopDrawings */]();
        this.otherText = false;
        this.validForm = true;
        this.viewOnly = false;
        this.orderStatus = "pending";
        this.attachments = [];
        this.drawingsList = __WEBPACK_IMPORTED_MODULE_1__drop_down_lists_workshop_drawings__["b" /* RequiredDrawings */];
        this.buildingTypes = __WEBPACK_IMPORTED_MODULE_1__drop_down_lists_workshop_drawings__["a" /* BuildingTypes */];
        this.buildingTypesSub = [];
    }
    WorkshopSlabsComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('formData')) {
            this.orderStatus = localStorage.getItem('orderStatus');
            this.attachments = localStorage.getItem('attachments').split(",");
            this.workshopModel = JSON.parse(localStorage.getItem('formData'));
            if (localStorage.getItem('orderStatus') != 'processed') {
                this.viewOnly = false;
            }
            else {
                this.viewOnly = true;
            }
            if (this.workshopModel.buildingType == "Other") {
                this.otherText = true;
            }
            else {
                this.buildingTypesSub.push(this.workshopModel.buildingTypeSub);
            }
        }
        this.getCurrentUserInfo();
    };
    WorkshopSlabsComponent.prototype.selectBuildingType = function (buildingSelected) {
        if (buildingSelected == "Other") {
            this.otherText = true;
            this.workshopModel.buildingTypeSub = "";
            this.buildingTypesSub = [];
        }
        else {
            this.otherText = false;
            this.buildingTypesSub = buildingSelected.split(",");
        }
    };
    WorkshopSlabsComponent.prototype.getFiles = function (e) {
        this.uploadedFiles = e;
        this.attachments = [];
        for (var _i = 0, _a = e.target.files; _i < _a.length; _i++) {
            var file = _a[_i];
            this.attachments.push(file.name);
        }
        console.log(this.attachments.toString());
    };
    WorkshopSlabsComponent.prototype.submitForm = function () {
        this.validateData();
    };
    WorkshopSlabsComponent.prototype.validateData = function () {
        if (this.workshopModel.buildingTypeSub
            && this.workshopModel.city
            && this.workshopModel.country
            && this.workshopModel.drawings
            && this.workshopModel.noOfFloors
            && this.workshopModel.additionalRequests
            && this.workshopModel.language && this.attachments) {
            this.validForm = true;
            this.saveForm(JSON.stringify(this.workshopModel));
        }
        else {
            this.validForm = false;
        }
    };
    WorkshopSlabsComponent.prototype.saveForm = function (formData) {
        var _this = this;
        this._FileUpload.uploadFiles(this.uploadedFiles).subscribe(function (data) {
            // SHOW A MESSAGE RECEIVED FROM THE WEB API.
            if (data) {
                _this._FormSubmit.saveFormDetails(__WEBPACK_IMPORTED_MODULE_4__service_urls__["a" /* serviceUrls */].addOrder, _this.currentUser['id'], _this.orderStatus, "Workshop-drawings-for-pre-stressed", _this.attachments.toString(), formData).subscribe(function (data) {
                    window.location.href = "/myOrders";
                }, function (error) {
                    console.error(error);
                });
            }
        }, function (error) {
            console.log(error.MESSAGE); // SHOW ERRORS IF ANY.
        });
    };
    WorkshopSlabsComponent.prototype.ngOnDestroy = function () {
        localStorage.setItem('formData', "");
        localStorage.setItem('orderStatus', "");
        localStorage.setItem('attachments', "");
    };
    WorkshopSlabsComponent.prototype.getCurrentUserInfo = function () {
        var _this = this;
        this._Users.getCurrentUser(__WEBPACK_IMPORTED_MODULE_4__service_urls__["a" /* serviceUrls */].getCurrentUser).subscribe(function (data) {
            if (data["id"]) {
                _this.currentUser = data;
            }
        });
    };
    WorkshopSlabsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-workshop-slabs',
            template: __webpack_require__("./src/app/forms/workshop-drawing/workshop-slabs/workshop-slabs.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_3__services_service_submit_form__["a" /* FormSubmit */], __WEBPACK_IMPORTED_MODULE_6__services_service_file_upload__["a" /* FileUpload */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_service_submit_form__["a" /* FormSubmit */], __WEBPACK_IMPORTED_MODULE_5__services_service_get_users__["a" /* Users */], __WEBPACK_IMPORTED_MODULE_6__services_service_file_upload__["a" /* FileUpload */]])
    ], WorkshopSlabsComponent);
    return WorkshopSlabsComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n  <div class=\"navTop d-none\">\n    <div class=\"container-fluid\">\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li>\n          <div class=\"lang\">\n            <i class=\"icon-globe\"></i>\n            <input type=\"button\" value=\"AR\" />\n          </div>\n        </li>\n        <li *ngIf=\"!loggedIn\">\n          <button class=\"btn\">\n            <a href=\"/login\">{{'Login' | translate}}</a>\n          </button>\n        </li>\n        <li *ngIf=\"!loggedIn\">\n          <button class=\"btn btn-orange\">\n            <a [routerLink]='[\"/register\"]'>{{'Register' | translate}}</a>\n          </button>\n        </li>\n        <li *ngIf=\"loggedIn\" class=\"dropdown\">\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">{{'welcome,' | translate}} {{currentUserName}}\n            <span class=\"caret\"></span>\n          </a>\n          <ul class=\"dropdown-menu\">\n            <li>\n              <a [routerLink]='[\"/myProfile\"]'>{{'My Profile' | translate}}</a>\n            </li>\n            <li>\n              <a [routerLink]='[\"/myOrders\"]'>{{'My Orders' | translate}}</a>\n            </li>\n            <li role=\"separator\" class=\"divider\"></li>\n            <li>\n              <a href=\"javascript:void(0)\" (click)=\"logOut()\">{{'Logout' | translate}}</a>\n            </li>\n          </ul>\n        </li>\n\n      </ul>\n    </div>\n  </div>\n  <nav class=\"navbar\">\n    <div class=\"container-fluid\">\n      <div class=\"navbar-header\">\n        <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#headerNav\" aria-expanded=\"false\">\n          <span class=\"sr-only\">Toggle navigation</span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n        </button>\n        <a [routerLink]='[\"/\"]'>\n          <img src=\"/assets/images/logo.png\" alt=\"\" />\n        </a>\n      </div>\n\n      <div class=\"collapse navbar-collapse\" id=\"headerNav\">\n        <ul class=\"nav navbar-nav\">\n          <li>\n            <a routerLinkActive=\"active\" [routerLink]='[\"/\"]' [routerLinkActiveOptions]=\"{exact: true}\">{{'Home' | translate}}</a>\n          </li>\n          <li>\n            <a routerLinkActive=\"active\" [routerLink]='[\"/aboutUs\"]' [routerLinkActiveOptions]=\"{exact: true}\">{{'About Us' | translate}}</a>\n          </li>\n          <li>\n            <a routerLinkActive=\"active\" [routerLink]='[\"/what-we-do\"]' [routerLinkActiveOptions]=\"{exact: true}\">{{'What we do' | translate}}</a>\n          </li>\n          <li>\n            <a routerLinkActive=\"active\" [routerLink]='[\"/how-we-work\"]' [routerLinkActiveOptions]=\"{exact: true}\">{{'How we work' | translate}}</a>\n          </li>\n          <li>\n            <a routerLinkActive=\"active\" [routerLink]='[\"/our-projects\"]' [routerLinkActiveOptions]=\"{exact: true}\">{{'Our Projects' | translate}}</a>\n          </li>\n          <li>\n            <a routerLinkActive=\"active\" [routerLink]='[\"/contactUs\"]' [routerLinkActiveOptions]=\"{exact: true}\">{{'Contact Us' | translate}}</a>\n          </li>\n        </ul>\n        <ul class=\"nav navbar-nav navbar-right another-nav\">\n          <li>\n            <div class=\"lang\">\n              <i class=\"icon-globe\"></i>\n              <input type=\"button\" (click)=\"toggleLanguage()\" value=\"{{languageText}}\" />\n            </div>\n          </li>\n          <li *ngIf=\"!loggedIn\">\n            <button class=\"btn\">\n              <a href=\"/login\">{{'Login' | translate}}</a>\n            </button>\n          </li>\n          <li *ngIf=\"!loggedIn\">\n            <button class=\"btn btn-orange\">\n              <a [routerLink]='[\"/register\"]'>{{'Register' | translate}}</a>\n            </button>\n          </li>\n          <li *ngIf=\"loggedIn\" class=\"dropdown\">\n            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">{{'welcome,' | translate}} {{currentUserName}}\n              <span class=\"caret\"></span>\n            </a>\n            <ul class=\"dropdown-menu\">\n              <li>\n                <a [routerLink]='[\"/myProfile\"]'>{{'My Profile' | translate}}</a>\n              </li>\n              <li>\n                <a [routerLink]='[\"/myOrders\"]'>{{'My Orders' | translate}}</a>\n              </li>\n              <li role=\"separator\" class=\"divider\"></li>\n              <li>\n                <a href=\"javascript:void(0)\" (click)=\"logOut()\">{{'Logout' | translate}}</a>\n              </li>\n            </ul>\n          </li>\n\n        </ul>\n      </div>\n\n    </div>\n  </nav>\n</div>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_urls__ = __webpack_require__("./src/app/service-urls.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_service_get_users__ = __webpack_require__("./src/app/services/service.get-users.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_service_logout__ = __webpack_require__("./src/app/services/service.logout.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__translate_translate_service__ = __webpack_require__("./src/app/translate/translate.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(_Users, _Logout, _translate) {
        this._Users = _Users;
        this._Logout = _Logout;
        this._translate = _translate;
        this.currentUserName = "";
        this.currentLang = "";
        this.languageText = "";
        this.loggedIn = false;
        this.openSearch = false;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.currentLang = this.getCurrentLang();
        this.getCurrentUserInfo();
        this.setLanguageText();
    };
    HeaderComponent.prototype.setLanguageText = function () {
        if (this.currentLang == "ar") {
            this.languageText = "English";
            // this.setArCss();
        }
        else {
            this.languageText = "عربي";
            // this.setEnCss();
        }
        // this._translate.use(this.currentLang);
        // this.setCurrentLang(this.currentLang);
    };
    HeaderComponent.prototype.toggleLanguage = function () {
        if (this.currentLang == "en") {
            this.currentLang = "ar";
        }
        else {
            this.currentLang = "en";
        }
        this.setCurrentLang(this.currentLang);
    };
    HeaderComponent.prototype.toggleField = function () {
        this.openSearch = !this.openSearch;
    };
    HeaderComponent.prototype.setEnCss = function () {
        window['changeCSS']('/assets/bootstrap/css/bootstrap.min.css', 2);
        window['changeCSS']('/assets/styles.css', 3);
    };
    HeaderComponent.prototype.setArCss = function () {
        window['changeCSS']('/assets/bootstrap/css/bootstrap-rtl.min.css', 2);
        window['changeCSS']('/assets/styles-rtl.css', 3);
    };
    HeaderComponent.prototype.getCurrentUserInfo = function () {
        var _this = this;
        this._Users.getCurrentUser(__WEBPACK_IMPORTED_MODULE_1__service_urls__["a" /* serviceUrls */].getCurrentUser).subscribe(function (data) {
            console.log(data);
            if (data["id"]) {
                _this.loggedIn = true;
                _this.currentUserName = data['firstName'];
            }
            else {
                _this.loggedIn = false;
            }
        });
    };
    HeaderComponent.prototype.logOut = function () {
        this._Logout.logOut(__WEBPACK_IMPORTED_MODULE_1__service_urls__["a" /* serviceUrls */].logout).subscribe(function (data) {
            localStorage.clear();
            window.location.href = "/login";
        }, function (error) {
            console.log(error);
        });
    };
    HeaderComponent.prototype.getCurrentLang = function () {
        return localStorage.getItem('currentLang');
    };
    HeaderComponent.prototype.setCurrentLang = function (language) {
        localStorage.setItem('currentLang', language);
        window.location.reload();
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/header/header.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_3__services_service_logout__["a" /* Logout */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_service_get_users__["a" /* Users */], __WEBPACK_IMPORTED_MODULE_3__services_service_logout__["a" /* Logout */], __WEBPACK_IMPORTED_MODULE_4__translate_translate_service__["a" /* TranslateService */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home-content/home-content.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"homeContainer\">\n  <div class=\"container-fluid\">\n\n    <div class=\"col-md-5\">\n      <div class=\"darkSplit\">\n        <p *ngIf=\"currentLang=='en'\" class=\"logoDetailed\"><span>M</span>ODERN \n          <span>E</span>NGINEERING <span>G</span>ROUP <span>F</span>OR\n          <span>A</span>RCHITECTURE\n        </p>\n        <p *ngIf=\"currentLang=='ar'\" class=\"logoDetailed\"><span>ا</span>لمجموعة \n          <span>ل</span>لهندسية <span>ا</span>لحديثة <span>ا</span>لمعمارة\n        </p>\n        <app-service-tabs (tabChanged)=\"changeTab($event)\"></app-service-tabs>\n\n        <div class=\"details\">\n          <h3>{{categoryDescHeader | translate}}</h3>\n          <p class=\"building-desc\">\n            {{categoryDesc | translate}}\n          </p>\n        </div>\n\n      </div>\n    </div>\n\n    <div class=\"col-md-7 visible-lg visible-md\">\n      <div class=\"lightSplit {{categoryImg}}\">\n        <!-- <div class=\"serviceBg \"   [style.height.px]=\"myInnerHeight\"></div> -->\n      </div>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/home-content/home-content.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeContentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeContentComponent = /** @class */ (function () {
    function HomeContentComponent() {
        this.categoryDescHeader = "DESIGN Your DREAM";
        this.categoryDesc = "Create & develop a unique design from conceptial to final design drawings.";
        this.categoryImg = "buildingBg";
        this.currentLang = this.getCurrentLang();
    }
    HomeContentComponent.prototype.ngOnInit = function () {
        this.myInnerHeight = (window.innerHeight);
    };
    HomeContentComponent.prototype.changeTab = function (categoryInfo) {
        this.categoryDescHeader = categoryInfo['descHeader'];
        this.categoryDesc = categoryInfo['desc'];
        this.categoryImg = categoryInfo['img'];
    };
    HomeContentComponent.prototype.getCurrentLang = function () {
        return localStorage.getItem('currentLang');
    };
    HomeContentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home-content',
            template: __webpack_require__("./src/app/home-content/home-content.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], HomeContentComponent);
    return HomeContentComponent;
}());



/***/ }),

/***/ "./src/app/how-we-work/how-we-work.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/how-we-work/how-we-work.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"about-container\">\n  <div class=\"header-container\"></div>\n\n  <div class=\"about-content\">\n\n    <div class=\"gray-section\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-xs-12\">\n            <h1 class=\"h2 font-weight-normal form-heading\">{{'How we work' | translate}}</h1>\n            <div class=\"about-main text-block\">\n              {{'With the remarkable acceleration of modern technological development, we have tried to facilitate the provision of engineering services to serve our customers better by following these steps:' | translate}}<br />\n              {{'1- Entry on our site and choose the required engineering service.' | translate}}<br />               \n              {{'2 - Fill the minimum amount of information through which we can provide technical and financial offer.' | translate}}<br />              \n              {{'3 - Sending the technical and financial offer by us according to engineering service required.' | translate}}<br />               \n              {{'4. Your approval of the technical and financial offer.' | translate}} <br /> \n              {{'5- Delivery of the required works according to the specified dates and in the agreed manner.' | translate}}\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/how-we-work/how-we-work.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HowWeWorkComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HowWeWorkComponent = /** @class */ (function () {
    function HowWeWorkComponent() {
    }
    HowWeWorkComponent.prototype.ngOnInit = function () {
    };
    HowWeWorkComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-how-we-work',
            template: __webpack_require__("./src/app/how-we-work/how-we-work.component.html"),
            styles: [__webpack_require__("./src/app/how-we-work/how-we-work.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HowWeWorkComponent);
    return HowWeWorkComponent;
}());



/***/ }),

/***/ "./src/app/models/model.orders.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Order; });
var Order = /** @class */ (function () {
    function Order() {
        this.name = "";
        this.creationDate = "";
        this.comments = "";
        this.status = "";
        this.attachment = [];
    }
    return Order;
}());



/***/ }),

/***/ "./src/app/models/model.user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = /** @class */ (function () {
    function User() {
        this.firstName = "";
        this.lastName = "";
        this.email = "";
        this.mobile = "";
        this.password = "";
        this.role = "";
    }
    return User;
}());



/***/ }),

/***/ "./src/app/my-orders/my-orders.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!showFormDetails\" class=\"orders-container gray-section\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <h1 class=\"h2 font-weight-normal form-heading\">{{'My Orders' | translate}}</h1>\n\n      <div class=\"table-responsive\">\n        <table class=\"table table-bordered\">\n          <thead>\n            <tr>\n              <th>#</th>\n              <th>{{'Order Name' | translate}}</th>\n              <th>{{'Order Status' | translate}}</th>\n              <th>{{'Order Creation Date' | translate}}</th>\n              <th>{{'Attachments' | translate}}</th>\n              <th>{{'Comments' | translate}}</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let order of orderList; let i = index\">\n              <th scope=\"row\" (click)=\"showOrderData(order)\">{{i+1}}</th>\n              <td (click)=\"showOrderData(order)\">{{order.name}}</td>\n              <td (click)=\"showOrderData(order)\">{{order.status}}</td>\n              <td (click)=\"showOrderData(order)\">{{formatDate(order.creationDate)}}</td>\n              <td>\n                <li *ngFor=\"let attachment of order.attachment\">\n                  <a href=\"{{attachment.url}}\">{{attachment.name}}</a>\n                </li>\n              </td>\n              <td (click)=\"showOrderData(order)\">{{order.comments}}</td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n\n    </div>\n  </div>\n</div>\n\n<!-- <app-workshop-drawing *ngIf=\"showFormDetails\" [formData]=\"orderFormData\"></app-workshop-drawing>  -->"

/***/ }),

/***/ "./src/app/my-orders/my-orders.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyOrdersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_urls__ = __webpack_require__("./src/app/service-urls.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_service_get_users__ = __webpack_require__("./src/app/services/service.get-users.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_model_orders__ = __webpack_require__("./src/app/models/model.orders.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyOrdersComponent = /** @class */ (function () {
    function MyOrdersComponent(_Users, router) {
        this._Users = _Users;
        this.router = router;
        this.orderList = [];
        this.downloadURL = __WEBPACK_IMPORTED_MODULE_1__service_urls__["a" /* serviceUrls */].attachmentDownload;
        this.showFormDetails = false;
    }
    MyOrdersComponent.prototype.ngOnInit = function () {
        this.getCurrentUserInfo();
    };
    MyOrdersComponent.prototype.getOrders = function (currentUser) {
        for (var i = 0; i < currentUser['orders'].length; i++) {
            var myOrder = new __WEBPACK_IMPORTED_MODULE_3__models_model_orders__["a" /* Order */]();
            myOrder.name = currentUser['orders'][i]['name'];
            if (currentUser['orders'][i]['comments']) {
                myOrder.comments = currentUser['orders'][i]['comments'];
            }
            myOrder.status = currentUser['orders'][i]['status'];
            myOrder.creationDate = currentUser['orders'][i]['creationDate'];
            for (var _i = 0, _a = currentUser['orders'][i]['attachment'].split(","); _i < _a.length; _i++) {
                var attachment = _a[_i];
                console.log(currentUser['orders'][i]['attachment'].split(","));
                var temp = {
                    name: attachment,
                    url: this.downloadURL + attachment
                };
                if (temp.name != "") {
                    myOrder.attachment.push(temp);
                }
            }
            myOrder.formData = JSON.parse(currentUser['orders'][i]['formData']);
            this.orderList.push(myOrder);
        }
    };
    MyOrdersComponent.prototype.getCurrentUserInfo = function () {
        var _this = this;
        this._Users.getCurrentUser(__WEBPACK_IMPORTED_MODULE_1__service_urls__["a" /* serviceUrls */].getCurrentUser).subscribe(function (data) {
            if (data["id"]) {
                _this.getOrders(data);
            }
        });
    };
    MyOrdersComponent.prototype.showOrderData = function (order) {
        this.orderFormData = order['formData'];
        localStorage.setItem('formData', JSON.stringify(this.orderFormData));
        localStorage.setItem('orderStatus', order['status']);
        localStorage.setItem('attachments', order['attachment']);
        this.router.navigate(['/forms/' + order.name]);
    };
    MyOrdersComponent.prototype.formatDate = function (date) {
        var formattedDate = date.split('T')[0];
        return formattedDate;
    };
    MyOrdersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-my-orders',
            template: __webpack_require__("./src/app/my-orders/my-orders.component.html"),
            providers: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_service_get_users__["a" /* Users */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]])
    ], MyOrdersComponent);
    return MyOrdersComponent;
}());



/***/ }),

/***/ "./src/app/my-profile/my-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"forms-container\">\n  <div class=\"container\">\n    <div class=\"form-card\">\n      <div class=\"row\">\n        <h1 class=\"h3 font-weight-normal form-heading\">My Profile</h1>\n\n        <div class=\"col-sm-6\">\n            <div class=\"form-group\">\n              <label>{{'First Name' | translate}}</label>\n              <input [(ngModel)]=\"currentLoggedInUser.firstName\" type=\"text\" class=\"form-control\" [ngClass]=\"{'plain-text': !editable}\" [disabled]=\"!editable\" placeholder=\"First Name\" />\n            </div>\n        </div>\n\n        <div class=\"col-sm-6\">\n            <div class=\"form-group\">\n              <label>{{'Last Name' | translate}}</label>\n              <input [(ngModel)]=\"currentLoggedInUser.lastName\" type=\"text\" class=\"form-control\" [ngClass]=\"{'plain-text': !editable}\"  [disabled]=\"!editable\" placeholder=\"Last Name\" />\n            </div>\n        </div>\n\n        <div class=\"col-sm-6\">\n            <div class=\"form-group\">\n              <label>{{'Email' | translate}}</label>\n              <input [(ngModel)]=\"currentLoggedInUser.email\" type=\"text\" class=\"form-control\" [ngClass]=\"{'plain-text': !editable}\" [disabled]=\"!editable\" placeholder=\"Email\" />\n            </div>\n        </div>\n\n        <div class=\"col-sm-6\">\n            <div class=\"form-group\">\n              <label>{{'Mobile Number' | translate}}</label>\n              <input [(ngModel)]=\"currentLoggedInUser.mobile\" type=\"text\" class=\"form-control\" [ngClass]=\"{'plain-text': !editable}\" [disabled]=\"!editable\" placeholder=\"Mobile Number\" />\n            </div>\n        </div>\n\n        <div class=\"col-xs-12\">\n            <button class=\"btn btn-orange\" (click)=\"edit()\" [ngClass]=\"{'d-none': editable}\"> {{'Edit' | translate}} </button>\n            <button class=\"btn btn-orange\" (click)=\"save()\" [ngClass]=\"{'d-none': !editable}\"> {{'Save' | translate}} </button>\n        </div>\n\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/my-profile/my-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_urls__ = __webpack_require__("./src/app/service-urls.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_service_get_users__ = __webpack_require__("./src/app/services/service.get-users.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_model_user__ = __webpack_require__("./src/app/models/model.user.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MyProfileComponent = /** @class */ (function () {
    function MyProfileComponent(_Users) {
        this._Users = _Users;
        this.editable = false;
        this.currentUserId = 0;
        this.currentUserEmail = "";
        this.currentLoggedInUser = new __WEBPACK_IMPORTED_MODULE_3__models_model_user__["a" /* User */]();
    }
    MyProfileComponent.prototype.ngOnInit = function () {
        this.getCurrentUserInfo();
    };
    MyProfileComponent.prototype.edit = function () {
        this.editable = !this.editable;
    };
    MyProfileComponent.prototype.save = function () {
        this.updateUser();
    };
    MyProfileComponent.prototype.getCurrentUserInfo = function () {
        var _this = this;
        this._Users.getCurrentUser(__WEBPACK_IMPORTED_MODULE_1__service_urls__["a" /* serviceUrls */].getCurrentUser).subscribe(function (data) {
            if (data["id"]) {
                _this.currentUserId = data["id"];
                _this.currentUserEmail = data['email'];
                _this.currentLoggedInUser = data;
            }
        });
    };
    MyProfileComponent.prototype.updateUser = function () {
        var _this = this;
        this._Users.updateUser(__WEBPACK_IMPORTED_MODULE_1__service_urls__["a" /* serviceUrls */].updateUser, this.currentLoggedInUser, this.currentUserId).subscribe(function (data) {
            if (_this.currentUserEmail != _this.currentLoggedInUser.email) {
                window.location.href = "/logout";
            }
            else {
                window.location.href = "/myProfile";
            }
        }, function (error) {
            console.log(error + "----------------");
        });
    };
    MyProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-my-profile',
            template: __webpack_require__("./src/app/my-profile/my-profile.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_service_get_users__["a" /* Users */]])
    ], MyProfileComponent);
    return MyProfileComponent;
}());



/***/ }),

/***/ "./src/app/our-projects/our-projects.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/our-projects/our-projects.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"about-container\">\n  <div class=\"header-container\"></div>\n\n  <div class=\"about-content\">\n\n    <div class=\"gray-section\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-xs-12\">\n            <h1 class=\"h2 font-weight-normal form-heading\">{{'Our Projects' | translate}}</h1>\n            <div class=\"about-main text-block\">\n              {{'A group of ambitious engineers with multiple experience in all engineering disciplines with more than 15 years of experience in the Gulf region. The diversity of our expertise has enabled us to work from the innovation of the design idea to the final design of all the engineering departments with the preparation of technical specifications, bills of quantities and calculation of estimated costs, And conducting studies on safety systems as well as the executive and coordination drawings for all engineering departments. The diversity of our experience in the jobs that we have experienced during the early stages of our working life in different engineering departments, such as the work in the fields of design and supervision of the execution of the engineering consulting offices, as well as engineers in the technical office, project execution engineers and project management in the multi-class construction companies, Engineering fields, especially in the Gulf States and the Arab Republic of Egypt.' | translate}}\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/our-projects/our-projects.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OurProjectsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OurProjectsComponent = /** @class */ (function () {
    function OurProjectsComponent() {
    }
    OurProjectsComponent.prototype.ngOnInit = function () {
    };
    OurProjectsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-our-projects',
            template: __webpack_require__("./src/app/our-projects/our-projects.component.html"),
            styles: [__webpack_require__("./src/app/our-projects/our-projects.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], OurProjectsComponent);
    return OurProjectsComponent;
}());



/***/ }),

/***/ "./src/app/registeration/registeration.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"forms-container\">\n  <!-- <div class=\"header-bg\"></div> -->\n  <div class=\"container\">\n      <div class=\"form-card\">\n        <div class=\"row\">\n            <h1 class=\"h3 font-weight-normal form-heading\">{{'Registeration' | translate}}</h1>\n            <form (submit)=\"validateInformation()\" class=\"form-signin\">\n              \n              <div class=\"col-sm-6\">\n                  <div class=\"form-group\">\n                    <label for=\"firstName\">{{'First Name' | translate}}</label>\n                    <input [(ngModel)]=\"user.firstName\" name=\"first\" type=\"text\" id=\"firstName\" class=\"form-control\" placeholder=\"{{'First Name' | translate}}\" autofocus=\"\">\n                    <label *ngIf=\"firstNameInValid\">{{'Please Fill this field' | translate}}</label>\n                  </div>\n              </div>\n              <div class=\"col-sm-6\">\n                  <div class=\"form-group\">\n                    <label for=\"inputLastName\">{{'Last Name' | translate}}</label>\n                    <input [(ngModel)]=\"user.lastName\" name=\"last\" type=\"text\" id=\"inputLastName\" class=\"form-control\" placeholder=\"{{'Last Name' | translate}}\">\n                    <label *ngIf=\"lastNameInValid\">{{'Please Fill this field' | translate}}</label>\n                  </div>\n              </div>\n              <div class=\"clearfix\"></div>\n              <div class=\"col-sm-6\">\n                  <div class=\"form-group\">\n                    <label for=\"inputEmail\">{{'Email' | translate}}</label>\n                    <input [(ngModel)]=\"user.email\" name=\"email\" type=\"email\" id=\"inputEmail\" class=\"form-control\" placeholder=\"{{'Email' | translate}}\">\n                    <label *ngIf=\"emailInValid\">{{'Please Fill this field' | translate}}</label>\n                  </div>\n              </div>\n              <div class=\"col-sm-6\">\n                  <div class=\"form-group\">\n                    <label for=\"inputEmail\">{{'Mobile Number' | translate}}</label>\n                    <input [(ngModel)]=\"user.mobile\" name=\"mobile\" type=\"mobile\" id=\"inputMobile\" class=\"form-control\" placeholder=\"{{'Mobile Number' | translate}}\">\n                    <label *ngIf=\"mobileInvalid\">{{'Please Fill this field' | translate}}</label>\n                  </div>\n              </div>\n              <div class=\"clearfix\"></div>\n              <div class=\"col-sm-6\">\n                  <div class=\"form-group\">\n                    <label for=\"passwordInput\">{{'Password' | translate}}</label>\n                    <input [(ngModel)]=\"user.password\" name=\"password\" type=\"password\" id=\"passwordInput\" class=\"form-control\" placeholder=\"{{'Password' | translate}}\">\n                    <label *ngIf=\"passwordInValid\">{{'Please Fill this field' | translate}}</label>\n                  </div>\n              </div>\n              <div class=\"col-sm-6\">\n                  <div class=\"form-group\">\n                    <label for=\"confirmPasswordInput\">{{'Confirm Password' | translate}}</label>\n                    <input [(ngModel)]=\"confirmPassword\" name=\"confirmPassword\" type=\"password\" id=\"confirmPasswordInput\" class=\"form-control\" placeholder=\"{{'Confirm Password' | translate}}\">\n                    <label *ngIf=\"confirmPasswordInValid\">{{'Please Fill this field' | translate}}</label>\n                    <label *ngIf=\"passwordMatch\">{{'This field should match the password value' | translate}}</label>\n                  </div>\n              </div>\n              <div class=\"col-xs-12\">\n                  <button type=\"submit\" class=\"btn btn-orange\"> {{'Register' | translate}} </button>\n              </div>\n            </form>\n        </div>\n      </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/registeration/registeration.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_model_user__ = __webpack_require__("./src/app/models/model.user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_service_get_users__ = __webpack_require__("./src/app/services/service.get-users.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_urls__ = __webpack_require__("./src/app/service-urls.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterationComponent = /** @class */ (function () {
    function RegisterationComponent(_Users) {
        this._Users = _Users;
        this.user = new __WEBPACK_IMPORTED_MODULE_1__models_model_user__["a" /* User */]();
        //Form Validators
        this.firstNameInValid = false;
        this.lastNameInValid = false;
        this.emailInValid = false;
        this.passwordInValid = false;
        this.confirmPasswordInValid = false;
        this.mobileInvalid = false;
        this.passwordMatch = false;
        this.confirmPassword = "";
        this.errors = 0;
    }
    RegisterationComponent.prototype.ngOnInit = function () {
    };
    RegisterationComponent.prototype.validateInformation = function () {
        this.errors = 0;
        if (!this.user.firstName) {
            this.firstNameInValid = true;
            this.errors++;
        }
        else {
            this.firstNameInValid = false;
        }
        if (!this.user.mobile) {
            this.mobileInvalid = true;
            this.errors++;
        }
        else {
            this.mobileInvalid = false;
        }
        if (!this.user.lastName) {
            this.lastNameInValid = true;
            this.errors++;
        }
        else {
            this.lastNameInValid = false;
        }
        if (!this.user.email) {
            this.emailInValid = true;
            this.errors++;
        }
        else {
            this.emailInValid = false;
        }
        if (!this.user.password) {
            this.passwordInValid = true;
            this.errors++;
        }
        else {
            this.passwordInValid = false;
        }
        if (!this.confirmPassword) {
            this.confirmPasswordInValid = true;
            this.errors++;
        }
        else if (this.confirmPassword && this.confirmPassword != this.user.password) {
            this.confirmPasswordInValid = false;
            this.passwordMatch = true;
            this.errors++;
        }
        else if (this.confirmPassword && this.confirmPassword == this.user.password) {
            this.confirmPasswordInValid = false;
            this.passwordMatch = false;
        }
        this.registerUser();
    };
    RegisterationComponent.prototype.registerUser = function () {
        if (this.errors == 0) {
            this.user.role = "ROLE_GUEST";
            this.addUser();
        }
    };
    RegisterationComponent.prototype.addUser = function () {
        this._Users.addUser(__WEBPACK_IMPORTED_MODULE_3__service_urls__["a" /* serviceUrls */].addUser, this.user).subscribe(function (data) {
            window.location.href = "/";
        }, function (error) {
            console.log(error + "----------------");
        });
    };
    RegisterationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-registeration',
            template: __webpack_require__("./src/app/registeration/registeration.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_service_get_users__["a" /* Users */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_service_get_users__["a" /* Users */]])
    ], RegisterationComponent);
    return RegisterationComponent;
}());



/***/ }),

/***/ "./src/app/service-details/details-content/details-content.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Class names buildDesign /  safetyStudies -->\n<div class=\"details-content buildDesign\">\n  <div *ngFor=\"let subCategory of subCategories\" (click)=\"checkSub(subCategory)\" [ngClass]=\"(subCategory.sub_categories.length==0)?'noSub':''\"\n    class=\"content-col text-center\">\n    <div class=\"slide1 front {{subCategory.image}}\">\n      <div class=\"d-tableCell\">\n        <h2>{{subCategory.name | translate}}</h2>\n        <p>{{subCategory.description | translate}}</p>\n      </div>\n    </div>\n\n    <div class=\"back\">\n      <ul>\n        <li *ngFor=\"let categoryList of subCategory.sub_categories\">\n          <a href='{{categoryList.path}}'>\n            <h4 class=\"title\"> {{categoryList.name | translate}} </h4>\n            <p class=\"info\">{{categoryList.description | translate}}</p>\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/service-details/details-content/details-content.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsContentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__categories_mockup__ = __webpack_require__("./src/app/categories-mockup.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DetailsContentComponent = /** @class */ (function () {
    function DetailsContentComponent(router) {
        this.router = router;
        this.servicesCategories = __WEBPACK_IMPORTED_MODULE_1__categories_mockup__["a" /* categories */].categories;
        this.subCategories = [];
    }
    DetailsContentComponent.prototype.ngOnInit = function () {
        this.loadSubCategories();
    };
    DetailsContentComponent.prototype.loadSubCategories = function () {
        for (var i = 0; i < this.servicesCategories.length; i++) {
            if (this.servicesCategories[i].name == this.category) {
                this.subCategories = this.servicesCategories[i].sub_categories;
                break;
            }
        }
    };
    DetailsContentComponent.prototype.checkSub = function (subCategory) {
        if (subCategory['sub_categories'].length == 0) {
            // this.router.navigate([subCategory['path']]);
            window.location.href = subCategory['path'];
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], DetailsContentComponent.prototype, "category", void 0);
    DetailsContentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-details-content',
            template: __webpack_require__("./src/app/service-details/details-content/details-content.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], DetailsContentComponent);
    return DetailsContentComponent;
}());



/***/ }),

/***/ "./src/app/service-details/details-footer/details-footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer>\n  <h3 class=\"footer-heading\"> {{title | translate}} </h3>\n  <h4 class=\"footer-desc\">{{description | translate}}</h4>\n</footer>\n"

/***/ }),

/***/ "./src/app/service-details/details-footer/details-footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsFooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DetailsFooterComponent = /** @class */ (function () {
    function DetailsFooterComponent() {
    }
    DetailsFooterComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], DetailsFooterComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], DetailsFooterComponent.prototype, "description", void 0);
    DetailsFooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-details-footer',
            template: __webpack_require__("./src/app/service-details/details-footer/details-footer.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], DetailsFooterComponent);
    return DetailsFooterComponent;
}());



/***/ }),

/***/ "./src/app/service-details/service-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"serviceContainer\">\n  <app-details-content [category]=\"mainCategory\"></app-details-content>\n  <app-details-footer [title]=\"title\" [description]=\"description\"></app-details-footer>\n</div>\n"

/***/ }),

/***/ "./src/app/service-details/service-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__categories_mockup__ = __webpack_require__("./src/app/categories-mockup.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ServiceDetailsComponent = /** @class */ (function () {
    function ServiceDetailsComponent(router, routers) {
        var _this = this;
        this.router = router;
        this.routers = routers;
        this.mainCategory = "";
        this.description = "";
        this.title = "";
        router.params.subscribe(function (params) {
            _this.mainCategory = params['category'];
            if (_this.mainCategory == "CONSULT OUR TEAM") {
                _this.routers.navigate(['contactUs']);
            }
            else {
                _this.getCatDetails(_this.mainCategory);
            }
        });
    }
    ServiceDetailsComponent.prototype.getCatDetails = function (mainCategory) {
        for (var i = 0; i < __WEBPACK_IMPORTED_MODULE_2__categories_mockup__["a" /* categories */].categories.length; i++) {
            if (__WEBPACK_IMPORTED_MODULE_2__categories_mockup__["a" /* categories */].categories[i].name == mainCategory) {
                this.description = __WEBPACK_IMPORTED_MODULE_2__categories_mockup__["a" /* categories */].categories[i].description;
                this.title = mainCategory;
                break;
            }
        }
    };
    ServiceDetailsComponent.prototype.ngOnInit = function () {
    };
    ServiceDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-service-details',
            template: __webpack_require__("./src/app/service-details/service-details.component.html"),
            providers: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], ServiceDetailsComponent);
    return ServiceDetailsComponent;
}());



/***/ }),

/***/ "./src/app/service-tabs/service-tabs.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"serviceTabs\">\n  <ul>\n    <li *ngFor=\"let category of servicesCategories\" (mouseenter)=\"changeCategoryInfo(category.descriptionHeader, category.description, category.image)\"\n      (mouseleave)=\"changeCategoryInfo(defaultDescHeader, defaultDesc, defaultImg)\" [routerLink]=\"['/service', category.name]\">\n      <a> {{category.name | translate}} </a>\n    </li>\n  </ul>\n</div>"

/***/ }),

/***/ "./src/app/service-tabs/service-tabs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceTabsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__categories_mockup__ = __webpack_require__("./src/app/categories-mockup.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ServiceTabsComponent = /** @class */ (function () {
    function ServiceTabsComponent() {
        this.tabChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.defaultImg = "buildingBg";
        this.defaultDesc = "Create & develop a unique design from conceptial to final design drawings.";
        this.defaultDescHeader = "DESIGN Your DREAM";
        this.servicesCategories = __WEBPACK_IMPORTED_MODULE_1__categories_mockup__["a" /* categories */].categories;
    }
    ServiceTabsComponent.prototype.ngOnInit = function () {
    };
    ServiceTabsComponent.prototype.changeCategoryInfo = function (categoryDescHeader, categoryDesc, categoryImg) {
        var categoryInfo = {
            descHeader: categoryDescHeader,
            desc: categoryDesc,
            img: categoryImg
        };
        this.tabChanged.emit(categoryInfo);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], ServiceTabsComponent.prototype, "tabChanged", void 0);
    ServiceTabsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-service-tabs',
            template: __webpack_require__("./src/app/service-tabs/service-tabs.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], ServiceTabsComponent);
    return ServiceTabsComponent;
}());



/***/ }),

/***/ "./src/app/service-urls.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return serviceUrls; });
var serviceUrls = {
    getAll: "/getAll",
    getUser: "/getUser",
    addUser: "/addUser",
    updateUser: "/updateUser",
    addOrder: "/addOrder",
    getCurrentUser: "/getCurrentUser",
    logout: "/logout",
    attachmentDownload: "http://localhost:8081/downloadFile/"
};


/***/ }),

/***/ "./src/app/services/service.get-users.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Users; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Users = /** @class */ (function () {
    function Users(http) {
        this.http = http;
    }
    Users.prototype.getAllUsers = function (url) {
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    Users.prototype.getUserByEmail = function (url, email) {
        return this.http.get(url + "/" + email).map(function (res) { return res.json(); });
    };
    Users.prototype.addUser = function (url, user) {
        return this.http.post(url, user).map(function (res) { return res.text(); });
    };
    Users.prototype.updateUser = function (url, user, id) {
        var params = {
            id: id,
            firstName: user['firstName'],
            lastName: user['lastName'],
            email: user['email'],
            mobile: user['mobile'],
            password: user['password'],
            role: user['role']
        };
        return this.http.post(url, params).map(function (res) { return res.text(); });
    };
    Users.prototype.getCurrentUser = function (url) {
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    Users = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], Users);
    return Users;
}());



/***/ }),

/***/ "./src/app/services/service.logout.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Logout; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Logout = /** @class */ (function () {
    function Logout(http) {
        this.http = http;
    }
    Logout.prototype.logOut = function (url) {
        return this.http.get(url).map(function (res) { return res.text(); });
    };
    Logout = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], Logout);
    return Logout;
}());



/***/ }),

/***/ "./src/app/translate/lang-ar.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LANG_AR_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LANG_AR_TRANS; });
var LANG_AR_NAME = 'ar';
var LANG_AR_TRANS = {
    "Design": "التصميمات الهندسية",
    "DESIGN Your DREAM": "صمم حلمك",
    "Login": "الدخول",
    "Register": "التسجيل",
    "welcome,": "مرحبا,",
    "My Profile": "ملفي",
    "My Orders": "طلباتي",
    "Logout": "الخروج",
    "Home": "الرئيسية",
    "About Us": "عنا",
    "Contact Us": "اتصل بنا",
    "What we do": "ماذا نفعل",
    "How we work": "كيف نعمل",
    "Our Projects": "مشاريعنا",
    "Create & develop a unique design from conceptial to final design drawings.": "إنشاء وتطوير تصميم فريد من الرسومات التصورية إلى التصميم النهائي.",
    "complete design": "تصميم متكامل",
    "Preparation of drawings and design drawings for all engineering specialties": "اعداد المخططات و الرسومات التصميمية لكافة التخصصات الهندسية",
    "Residential buildings": "المنشات السكنية",
    "(Villas - condominiums - towers - residential complexes)": "(فيلات-عمارات-أبراج-مجمعات سكنية)",
    "Commercial and office buildings": "المنشات التجارية و الادارية",
    "(Hotels - resthouses - gardens and parks...)": "(فنادق-استراحات-حدائق ومنتزهات...)",
    "Tourist and entertainment buildings": "المنشات السياحية و الترفيهية",
    "(Mosques - schools - hospitals - clubs...)": "(مساجد-مدارس-مستشفيات-نوادي...)",
    "Public utilities and service buildings": "مباني المرافق و الخدمات العامة",
    "(Factories - warehouses - workshops...)": "(مصانع-مستودعات-ورش...)",
    "Architectural designs": "التصميمات المعمارية",
    "Preparing, developing and presenting ideas and architectural designs": "اعداد و تطوير و اظهار الافكار و المخططات التصميمية المعمارية",
    "Design concept": "فكرة تصميمية",
    "Concept": "فكرة تصميمية",
    "Façade Design": "تصميم واجهات",
    "3D Visualization": "الاظهار ثلاثي البعاد",
    "Structural designs": "التصميمات الانشائية",
    "Preparing and reviewing the cost of designs and construction plans": "اعداد و مراجعة كلفة التصميمات و المخططات الانشائية",
    "Concrete Structures": "منشاّت خرسانية",
    "Steel Structures": "منشاّت معدنية",
    "Post Tension Buildings": "منشاّت سابقة الإجهاد",
    "Value Engineering for Structural Buildings": "تقليل التكلفة الإنشائية للمباني باستخدام نظم البناء الحديثة",
    "Electro-Mechanical Design": "التصميمات الميكانيكية و الكهربائية و الصحية",
    "Preparation of electrical and mechanical drawings and drawings": "اعداد المخططات و الرسومات الكهربائية و الميكانيكيو و الصحية",
    "Shop Drawings": "مخططات الورشة",
    "WorkShop Drawings": "مخططات الورشة",
    "ACCURATE DETAILING for PERFECT EXECUTING": "التفصيل الدقيق للتنفيذ الكامل",
    "Detailed drawings from the design drawings ensure working in site without any conflict between disciplines.": "الرسومات التفصيلية من الرسومات التصميمية تضمن العمل في الموقع دون أي تعارض بين التخصصات.",
    "Workshop drawings for pre-stressed slabs and bridges": "مخططات الورشة للبلاطات والجسور سابقة الإجهاد",
    "Tenders Studies": "دراسات المناقصات",
    "INNOVATIVE TECHNIQUE For ACCURATE PRICING": "تقنية مبتكرة للحصول على أسعار دقيقة",
    "Cost and pricing services for tendering & bidding with ability to study the cost of each separate item.": "خدمات التكلفة والتسعير للمناقصات والمزايدات مع القدرة على دراسة تكلفة كل بند منفصل.",
    "Bidding Pricing": "تسعير المناقصات",
    "Pricing a separate department": "تسعير قسم مستقل",
    "Review and check the prices of tenders": "مراجعة وتدقيق أسعار المناقصات",
    "Safety Studies": "دراسات السلامة",
    "SAFETY For BUILDING & OCCUPANTS": "السلامة للبناء والمهارات",
    "Study and analysis the building efficiency and its ability to deal with emergency cases.": "دراسة وتحليل كفاءة البناء وقدرته على التعامل مع الحالات الطارئة.",
    "Architectural Safety Study": "دراسة السلامة المعمارية",
    "Preparation of life safety drawings": "إعداد مخططات السلامة المعمارية",
    "Prepare a life safety report": "إعداد تقرير السلامة",
    "Prepare Evacuation plans": "إعداد خطط الإخلاء",
    "Fire systems and alarm systems": "أنظمة إنذار ومكافحة الحريق",
    "CONSULT OUR TEAM": "استشرنا",
    "FREE ANSWERS TO YOU TECHNICAL QUERIES": "اجوبة مجانية لاستشارتك الفنية",
    "Send us your technical questions and our team will provide you with the proper response ASAP": "أرسل لنا أسئلتك التقنية وسيقدم لك فريقنا الاستجابة المناسبة في أسرع وقت ممكن",
    "Please Fill this field": "من فضلك املأ هذا الحقل",
    "This field should match the password value": "هذا الحقل يجب ان يكون مطابق لكلمة المرور",
    "First Name": "الأسم الأول",
    "Last Name": "الأسم الأخير",
    "Email": "البريد الالكتروني",
    "Mobile Number": "رقم الموبايل",
    "Password": "كلمة المرور",
    "Confirm Password": "تأكيد كلمة المرور",
    "Edit": "تعديل",
    "Save": "حفظ",
    'Order Name': 'اسم الطلب',
    "Order Status": "موقف الطلب",
    "Order Creation Date": "تاريخ تقديم الطلب",
    "Attachments": "المرفقات",
    "Notes": " الملاحظات",
    "Mega Engineering": "المجموعة الهندسية الحديثة للعمارة",
    "All rights reserved": "كل الحقوق محفوظة",
    "A group of ambitious engineers with multiple experience in all engineering disciplines with more than 15 years of experience in the Gulf region. The diversity of our expertise has enabled us to work from the innovation of the design idea to the final design of all the engineering departments with the preparation of technical specifications, bills of quantities and calculation of estimated costs, And conducting studies on safety systems as well as the executive and coordination drawings for all engineering departments. The diversity of our experience in the jobs that we have experienced during the early stages of our working life in different engineering departments, such as the work in the fields of design and supervision of the execution of the engineering consulting offices, as well as engineers in the technical office, project execution engineers and project management in the multi-class construction companies, Engineering fields, especially in the Gulf States and the Arab Republic of Egypt.": "مجموعة من المهندسين الطموحين ذوي خبرات متعددة في كافة التخصصات الهندسية بخبرة تزيد عن خمسة عشر عاماً في منطقة الخليج ، وقد مكننا تنوع خبراتنا من العمل بدايةً من ابتكار الفكرة التصميمة للمشروع وتطويرها والوصول إلى التصميم النهائي لكافة الأقسام الهندسية مع إعداد المواصفات الفنية وجداول الكميات وحساب التكاليف المالية التقديرية ، وعمل الدراسات الخاصة بأنظمة السلامة وكذلك المخططات التنفيذية والتنسيقية لكافة الأقسام الهندسية. كما أن تنوع خبراتنا في الوظائف التي شغرناها خلال المراحل الأولى من حياتنا العملية في الأقسام الهندسية المختلفة كالعمل في مجالي التصميم والإشراف على التنفيذ في المكاتب الهندسية الاستشارية وكذلك العمل كمهندسين بالمكتب الفني ومهندسين تنفيذ بالمواقع وإدارة المشاريع في شركات المقاولات متعددة التصانيف قد منحنا خبرة متنوعة في كافة المجالات الهندسية وبالأخص في دول الخليج العربي وجمهورية مصر العربية .",
    "We provide engineering services in four main sections:": "نقوم بتقديم خدمات هندسية تتمثل في أربعة أقسام رئيسية هي :",
    "Engineering Design Works – Executive Plans - Safety Studies - Bids Study We have tried through these four sections to meet the needs of our customers from engineering and real estate offices, contracting companies and individuals, through the work of innovative engineering designs while maintaining the estimated costs of the project and adhere to the security and safety standards and the requirements of the concerned parties to achieve the aspirations of our customers with the workmanship and enable the implementation of business in site without a conflict between different systems. We also offer some of the free services, which are available in our list, through which you can get some free information and answers to your questions and inquiries": "أعمال التصميم الهندسي  -  المخططات التنفيذية  -  دراسات السلامة  -  دراسة المناقصات وقد حاولنا من خلال تلك الأقسام الأربعة أن نلبي رغبات عملائنا من المكاتب الهندسية والعقارية وشركات المقاولات والأفراد ، وذلك من خلال عمل تصاميم هندسية مبتكرة مع الحفاظ على التكاليف التقديرية للمشروع والالتزام بمعايير الأمن والسلامة واشتراطات الجهات المعنية بما يحقق طموحات عملائنا مع ضمان جودة العمل وتمكين تنفيذ الأعمال بالموقع من دون تعارض بين الأنظمة المختلفة. كما أننا نقدم بعض الخدمات المجانية والمتمثلة في قائمة استشرنا ، والتي يمكنكم من خلالها الحصول على بعض المعلومات والأجوبة المجانية على أسألتكم واستفساراتكم.",
    "With the remarkable acceleration of modern technological development, we have tried to facilitate the provision of engineering services to serve our customers better by following these steps:": "في ظل التسارع الملحوظ بالتطور التكنولجي المعاصر ، حاولنا تسهيل تقديم الخدمات الهندسية لخدمة عملائنا على نحو أفضل ، وذلك عن طريق الخطوات التالية :",
    "1- Entry on our site and choose the required engineering service.": "1-  الدخول على موقعنا واختيار الخدمة الهندسية المطلوبة.",
    "2 - Fill the minimum amount of information through which we can provide technical and financial offer.": "2- تعبئة ا   لحد الأدنى من المعلومات التي نستطيع من خلالها تقديم العرض الفني والمالي.",
    "3 - Sending the technical and financial offer by us according to engineering service required.": "3- إرسال العرض الفني والمالي من قِبلنا حسب الخدمة الهندسية المطلوبة.",
    "4. Your approval of the technical and financial offer.": "4- موافقتكم على العرض الفني والمالي.",
    "5- Delivery of the required works according to the specified dates and in the agreed manner.": "5- تسليم الأعمال المطلوبة وفق المواعيد المحددة وبالطريقة المُتفق عليها.",
    "Registeration": "التسجيل",
    "Name": "الأسم",
    "Phone": "التليفون",
    "Company": "الشركة",
    "Question": "السؤال",
    "Send": "ارسل",
    "Address:": "العنوان:",
    "Fax:": "فاكس:",
    "Postcode:": "الرقم البريدي:",
    "Telephone:": "تليفون:",
    "Mobile:": "موبايل:",
    "Email:": "البريد الألكتروني:",
    "Leave a message": "اكتب رسالتك",
    "Industrial Building": "المنشات الصناعية",
    "(Malls - Administrative buildings - Multi-use towers)": "(مولات - مباني ادارية - ابراج متعددة الاستخدام)",
    "Workshop Drawings": "مخططات الورشة",
    "Design Required": "التصميم المطلوب",
    "Select Field": "اختر",
    "fire": "حريق",
    "Air Conditioning": "تكييف و تهوية",
    "sanitary": "صحية",
    "Electrical": "كهربائية",
    "Structural": "انشائية",
    "Architectural": "معمارية",
    "All": "الكل",
    "Building Type": "نوع التصميم",
    "Residential Villas": "فيلات سكنية",
    "Residential complexs": "مجمعات سكنية",
    "Residential Towers": "أبراج سكنية",
    "Malls": "مجمع تجاري",
    "Office buildings": "مبنى اداري",
    "Mixed-use tower": "أبراج متعددة الأستخدام",
    "Hotels": "فنادق",
    "Hostels & Boarding Houses": "مبنى شقق فندقية",
    "Rests & Resorts": "استراحات",
    "Parks & Public Gardens": "حدائق ومتنزهات",
    "Mosques": "مساجد",
    "Schools & Educational buildings": "مدارس ومباني تعليمية",
    "Parking Buildings": "مواقف سيارات",
    "Hospitals and medical centers": "مستشفيات ومراكز طبية",
    "Stadiums and sports clubs": "ملاعب ونوادي رياضية",
    "Warehouses": "مستودعات ",
    "Factories": "مصانع",
    "Workshops": "ورش",
    "Other": "أخري",
    "Building Types:": "نوع المبني:",
    "Country": "البلد",
    "Egypt": "مصر",
    "Saudi Arabia": "السعودية",
    "Number of Floors": "عدد ادوار المبنى",
    "City": "المدينة",
    "Requests & Suggestions": "طلبات ومقترحات العميل",
    "Upload attachment": "المرفقات",
    "Prefered Language": "اللغة المفضلة للمخططات والرسومات",
    "Mechanical, electrical and sanitary designs": "التصميمات الميكانيكية و الكهربية",
    "Services Required": "الخدمات المطلوبة",
    "Building area": "مساحة المبني (بالمتر المربع)",
    "Project size": "مساحة المشروع (بالمتر المربع) ",
    "Number of Layouts:": "عدد المساقط المطلوبة",
    "Average Area:": "متوسط مساحه المسقط (بالمتر المربع)",
    "Land area": "مساحة الأرض (بالمتر الربع)",
    "Ground floor area": "مساحة الدور الأرضي (بالمتر المربع)",
    "Would you like to approve it from Civil Defense?": "خدمة اعتماد المخططات من الدفاع المدنى",
    "Yes": "نعم",
    "No": "لا",
    "Is there safety drawings and fire sections?": "هل يوجد مخططات سلامة وقطاعات حريق؟",
    "Industrial buildings": "المنشات الصناعية",
    "Residential Buildings": "المنشات السكنية",
    "Complete Design": "تصميم متكامل",
    "Building Height": "ارتفاع المبني (بالمتر)",
    "Facade Type": "نوع الواجهة",
    "Architectural style": "الطراز المعماري",
    "Modern": "مودرن",
    "New Design": "تصميم جديد",
    "Enhance existing design": "تطوير واجهة قائمة",
    "Facade Design": "تصميم واجهة",
    'اندلسي': 'اندلسي',
    'روماني': 'روماني',
    'كلاسيكي': 'كلاسيكي',
    'تراثي': 'تراثي',
    "Others (Attach photo)": "أخري (ارفق صورة)",
    "Attachments (architectural plans,elevations & sections)": "مرفقات  (مساقط أفقية معمارية / واجهات وقطاعات معمارية)",
    "Attachments (architectural plans)": "المرفقات (مسقط أفقي معماري)",
    "Attachments (architectural drawings)": "المرفقات (المخططات المعمارية)",
    "Required Service": "الخدمة المطلوبة",
    "Life safety drawings": "اعداد مخططات السلامة المعمارية",
    "Safety report": "تقرير السلامة",
    "Life safety report": "إعداد تقرير السلامة المعمارية",
    "Evacuation plans": "إعداد خطط الإخلاء",
    "Fire alarm and fire fighting systems": "أنظمة إنذار ومكافحة الحريق",
    "Yes I want": "أرغب",
    "No, I Do not want": "لا أرغب",
    "Required drawings": "المخططات المطلوبة",
    "Attachments (design drawings)": "مرفقات (المخططات التصميمية)",
    "Safety Systems": "أنظمة سلامة",
    "SHOP DRAWINGS": "مخططات الورشة",
    "Attachments (plans) - (elevations) - (layout/site plan)": "مرفقات (مخططات الموقع العام - مخططات البند القسم / البند المطلوب تسعيره - توصيف البند)",
    "Attachments (all available drawingss - BOQ and Specifications)": "مراجعة وتدقيق أسعار المناقصات",
    "Attachments (General Site plan - Architectural plans - BOQ & Specifications)": "مرفقات (مخططات الموقع العام - المخططات المعمارية - جداول الكميات والمواصفات)",
    "Building area (m2) - (ground floor + typical floors)": "مرفقات (مخططات الموقع العام - المخططات المعمارية - جداول الكميات والمواصفات)",
    "External view": "منظور خارجي",
    "Attachments (plans) / Attachments (elevations) / Attachments (layout/site plan)": "المرفقات (مساقط أفقية) / المرفقات (واجهات) / المرفقات (مسقط أفقي للموقع العام)",
    "3D Plan": "مساقط ثلاثية الأبعاد",
    "interior design": "منظور داخلي",
    "Attachments (architectural plan) - (floor pattern layout) - (ceiling plan) - (similar design photo)": "المرفقات (مسقط أفقي معماري) - (مسقط أفقي للأرضيات) - (مسقط أفقي للأسقف) - (صورة استرشادية للطراز المقترح)",
    "Room/space type": "مساحه الفراغ (بالمتر المربع)",
    "consult us in": "استشرنا في",
    "Structural Designs": "التصميم الإنشائي",
    "Type your question": "أضف سؤالك",
    "Architectural Workshop drawings": "مخططات الورشة المعمارية",
    "structurale workshop drawings": "مخططات الورشة الإنشائية",
    "Electrical workshop drawings": "مخططات الورشة الكهربائية",
    "sanitary workshop drawings": "مخططات الورشة الصحية",
    "Mechanical workshop drawings": "مخططات الورشة الميكانيكية",
    "To inquire about the price of an item": "للاستفسار عن سعر بند مُعين",
    "Make notes on the price of an item": "إبداء الملاحظات على سعر بند مُعين",
    "To inquire about the price analysis of a separate item": "للاستفسار عن تحليل سعر بند مُستقل",
    "Attachments (image of item description - drawings)": "المرفقات (صورة من توصيف البند - المخططات)",
    "Consulting Engineering Designs": "استشارة التصميمات الهندسية",
    "Consult the workshop plans": "استشارة مخططات الورشة",
    "Consult safety studies": "استشارة دراسات السلامة"
};


/***/ }),

/***/ "./src/app/translate/lang-en.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LANG_EN_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LANG_EN_TRANS; });
var LANG_EN_NAME = 'en';
var LANG_EN_TRANS = {
    "Design": "Design",
    "DESIGN Your DREAM": "DESIGN Your DREAM",
    "Login": "Login",
    "Register": "Register",
    "welcome,": "welcome,",
    "My Profile": "My Profile",
    "My Orders": "My Orders",
    "Logout": "Logout",
    "Home": "Home",
    "About Us": "About Us",
    "Contact Us": "Contact Us",
    "What we do": "What we do",
    "How we work": "How we work",
    "Our Projects": "Our Projects",
    "Create & develop a unique design from conceptial to final design drawings.": "Create & develop a unique design from conceptial to final design drawings.",
    "complete design": "complete design",
    "Preparation of drawings and design drawings for all engineering specialties": "Preparation of drawings and design drawings for all engineering specialties",
    "Residential buildings": "Residential buildings",
    "(Villas - buildings - towers - residential compounds)": "(Villas - condominiums - towers - residential complexes)",
    "Commercial and office buildings": "Commercial and office buildings",
    "(Hotels - resthouses - gardens and parks...)": "(Hotels - resthouses - gardens and parks...)",
    "Tourist and entertainment buildings": "Tourist and entertainment buildings",
    "(Mosques - schools - hospitals - clubs...)": "(Mosques - schools - hospitals - clubs...)",
    "Public utilities and service buildings": "Public utilities and service buildings",
    "(Factories - warehouses - workshops...)": "(Factories - warehouses - workshops...)",
    "Architectural designs": "Architectural designs",
    "Preparing, developing and presenting ideas and architectural designs": "Preparing, developing and presenting ideas and architectural designs",
    "Design concept": "Design concept",
    "Concept": "Concept",
    "Façade Design": "Façade Design",
    "3D Visualization": "3D Visualization",
    "Structural designs": "Structural designs",
    "Preparing and reviewing the cost of designs and construction plans": "Preparing and reviewing the cost of designs and construction plans",
    "Concrete Structures": "Concrete Structures",
    "Steel Structures": "Steel Structures",
    "Post Tension Buildings": "Post Tension Buildings",
    "Value Engineering for Structural Buildings": "Value Engineering for Structural Buildings",
    "Electro-Mechanical Design": "Electro-Mechanical Design",
    "Preparation of electrical and mechanical drawings and drawings": "Preparation of electrical and mechanical drawings and drawings",
    "Shop Drawings": "Shop Drawings",
    "WorkShop Drawings": "WorkShop Drawings",
    "ACCURATE DETAILING for PERFECT EXECUTING": "ACCURATE DETAILING for PERFECT EXECUTING",
    "Detailed drawings from the design drawings ensure working in site without any conflict between disciplines.": "Detailed drawings from the design drawings ensure working in site without any conflict between disciplines.",
    "Workshop drawings for pre-stressed slabs and bridges": "Workshop drawings for pre-stressed slabs and bridges",
    "Tenders Studies": "Tenders Studies",
    "INNOVATIVE TECHNIQUE For ACCURATE PRICING": "INNOVATIVE TECHNIQUE For ACCURATE PRICING",
    "Cost and pricing services for tendering & bidding with ability to study the cost of each separate item.": "Cost and pricing services for tendering & bidding with ability to study the cost of each separate item.",
    "Bidding Pricing": "Bidding Pricing",
    "Pricing a separate department": "Pricing a separate department",
    "Review and check the prices of tenders": "Review and check the prices of tenders",
    "Safety Studies": "Safety Studies",
    "SAFETY For BUILDING & OCCUPANTS": "SAFETY For BUILDING & OCCUPANTS",
    "Study and analysis the building efficiency and its ability to deal with emergency cases.": "Study and analysis the building efficiency and its ability to deal with emergency cases.",
    "Architectural Safety Study": "Architectural Safety Study",
    "Preparation of life safety drawings": "Life safety drawings",
    "Prepare a life safety report": "Life safety report",
    "Prepare evacuation plans": "Evacuation plans",
    "Fire systems and alarm systems": "Fire Systems",
    "CONSULT OUR TEAM": "CONSULT OUR TEAM",
    "FREE ANSWERS TO YOU TECHNICAL QUERIES": "FREE ANSWERS TO YOU TECHNICAL QUERIES",
    "Send us your technical questions and our team will provide you with the proper response ASAP": "Send us your technical questions and our team will provide you with the proper response ASAP",
    "Please Fill this field": "Please Fill this field",
    "This field should match the password value": "This field should match the password value",
    "First Name": "First Name",
    "Last Name": "Last Name",
    "Email": "Email",
    "Mobile Number": "Mobile Number",
    "Password": "Password",
    "Confirm Password": "Confirm Password",
    "Edit": "Edit",
    "Save": "Save",
    'Order Name': 'Order Name',
    "Order Status": "Order Status",
    "Order Creation Date": 'Order Creation Date',
    "Attachments": "Attachments",
    "Notes": "Notes",
    "Mega Engineering": "Mega Engineering",
    "All rights reserved": "All rights reserved",
    "A group of ambitious engineers with multiple experience in all engineering disciplines with more than 15 years of experience in the Gulf region. The diversity of our expertise has enabled us to work from the innovation of the design idea to the final design of all the engineering departments with the preparation of technical specifications, bills of quantities and calculation of estimated costs, And conducting studies on safety systems as well as the executive and coordination drawings for all engineering departments. The diversity of our experience in the jobs that we have experienced during the early stages of our working life in different engineering departments, such as the work in the fields of design and supervision of the execution of the engineering consulting offices, as well as engineers in the technical office, project execution engineers and project management in the multi-class construction companies, Engineering fields, especially in the Gulf States and the Arab Republic of Egypt.": "A group of ambitious engineers with multiple experience in all engineering disciplines with more than 15 years of experience in the Gulf region. The diversity of our expertise has enabled us to work from the innovation of the design idea to the final design of all the engineering departments with the preparation of technical specifications, bills of quantities and calculation of estimated costs, And conducting studies on safety systems as well as the executive and coordination drawings for all engineering departments. The diversity of our experience in the jobs that we have experienced during the early stages of our working life in different engineering departments, such as the work in the fields of design and supervision of the execution of the engineering consulting offices, as well as engineers in the technical office, project execution engineers and project management in the multi-class construction companies, Engineering fields, especially in the Gulf States and the Arab Republic of Egypt.",
    "We provide engineering services in four main sections:": "We provide engineering services in four main sections:",
    "Engineering Design Works – Executive Plans - Safety Studies - Bids Study We have tried through these four sections to meet the needs of our customers from engineering and real estate offices, contracting companies and individuals, through the work of innovative engineering designs while maintaining the estimated costs of the project and adhere to the security and safety standards and the requirements of the concerned parties to achieve the aspirations of our customers with the workmanship and enable the implementation of business in site without a conflict between different systems. We also offer some of the free services, which are available in our list, through which you can get some free information and answers to your questions and inquiries": "Engineering Design Works – Executive Plans - Safety Studies - Bids Study We have tried through these four sections to meet the needs of our customers from engineering and real estate offices, contracting companies and individuals, through the work of innovative engineering designs while maintaining the estimated costs of the project and adhere to the security and safety standards and the requirements of the concerned parties to achieve the aspirations of our customers with the workmanship and enable the implementation of business in site without a conflict between different systems. We also offer some of the free services, which are available in our list, through which you can get some free information and answers to your questions and inquiries",
    "With the remarkable acceleration of modern technological development, we have tried to facilitate the provision of engineering services to serve our customers better by following these steps:": "With the remarkable acceleration of modern technological development, we have tried to facilitate the provision of engineering services to serve our customers better by following these steps:",
    "1- Entry on our site and choose the required engineering service.": "1- Entry on our site and choose the required engineering service.",
    "2 - Fill the minimum amount of information through which we can provide technical and financial offer.": "2 - Fill the minimum amount of information through which we can provide technical and financial offer.",
    "3 - Sending the technical and financial offer by us according to engineering service required.": "3 - Sending the technical and financial offer by us according to engineering service required.",
    "4. Your approval of the technical and financial offer.": "4. Your approval of the technical and financial offer.",
    "5- Delivery of the required works according to the specified dates and in the agreed manner.": "5- Delivery of the required works according to the specified dates and in the agreed manner.",
    "Registeration": "Registeration",
    "Name": "Name",
    "Phone": "Phone",
    "Company": "Company",
    "Question": "Question",
    "Send": "Send",
    "Address:": "Address:",
    "Fax:": "Fax:",
    "Postcode:": "Postcode:",
    "Telephone:": "Telephone:",
    "Mobile:": "Mobile:",
    "Email:": "Email:",
    "Leave a message": "Leave a message",
    "Industrial Building": "Industrial Building",
    "(Malls - Administrative buildings - Multi-use towers)": "(Malls - Administrative buildings - Multi-use towers)",
    "Workshop Drawings": "Workshop Drawings",
    "Design Required": "Required Design",
    "Select Field": "Select Field",
    "fire": "fire",
    "Air Conditioning": "HVAC work",
    "sanitary": "sanitary",
    "Electrical": "Electrical",
    "Structural": "Structural",
    "Architectural": "Architectural",
    "Building Type": "Design Type",
    "Residential Villas": "Residential Villas",
    "Residential complexs": "Residential complexs",
    "Residential Towers": "Residential Towers",
    "Malls": "Malls",
    "Office buildings": "Office buildings",
    "Mixed-use tower": "Mixed-use tower",
    "Hotels": "Hotels",
    "Hostels & Boarding Houses": "Hostels & Boarding Houses",
    "Rests & Resorts": "Rests & Resorts",
    "Parks & Public Gardens": "Parks & Public Gardens",
    "Mosques": "Mosques",
    "Schools & Educational buildings": "Schools & Educational buildings",
    "Parking Buildings": "Parking Buildings",
    "Hospitals and medical centers": "Hospitals and medical centers",
    "Stadiums and sports clubs": "Stadiums and sports clubs",
    "Warehouses": "Warehouses",
    "Factories": "Factories",
    "Workshops": "Workshops",
    "Other": "Other",
    "Building Types:": "Building Type:",
    "Country": "Country",
    "Egypt": "Egypt",
    "Saudi Arabia": "Saudi Arabia",
    "Number of Floors": "Number of Floors",
    "City": "City",
    "Requests & Suggestions": "Client Requirements",
    "Upload attachment": "Upload attachments",
    "Prefered Language": "Preferred language for drawings and documents",
    "Mechanical, electrical and sanitary designs": "Mechanical, electrical and sanitary designs",
    "Services Required": "Services Required",
    "Building area": "Building area (m2)",
    "Project size": "Project area (m2)",
    "Number of Layouts:": "Number of required floor plans",
    "Average Area:": "Average area of floors (m2)",
    "Land area": "Land area (m2)",
    "Ground floor area": "Ground floor area (m2)",
    "Would you like to approve it from Civil Defense?": "Do you want Civil Defense Approval?",
    "Yes": "Yes",
    "No": "No",
    "Is there safety drawings and fire sections?": "Is there safety drawings and fire sections?",
    "Industrial buildings": 'Industrial buildings',
    "Residential Buildings": "Residential Buildings",
    "Complete Design": "Complete Design",
    "Building Height": "Building Height (m)",
    "Facade Type": "Elevation/Facade Type",
    "Architectural style": "Architectural style",
    "Modern": "Modern",
    "New Design": "New Facade Design",
    "Enhance existing design": "Existing Facade renovation",
    "Facade Design": "Facades Design",
    "All": "All",
    'اندلسي': 'Andalusi',
    'روماني': 'Romanian',
    'كلاسيكي': 'classic',
    'تراثي': 'Heritage',
    "Others (Attach photo)": "Others (Attach photo)",
    "Attachments (architectural plans,elevations & sections)": "Attachments (architectural plans,elevations & sections)",
    "Attachments (architectural plans)": "Attachments (architectural plans)",
    "Attachments (architectural drawings)": "Attachments (architectural drawings)",
    "Required Service": "Required Service",
    "Life safety drawings": "Life safety drawings",
    "Safety report": "Safety report",
    "Life safety report": "Life safety report",
    "Evacuation plans": "Evacuation plans",
    "Fire alarm and fire fighting systems": "Fire alarm and fire fighting systems",
    "Yes I want": "Yes, I want",
    "No, I Do not want": "No, I Do not want",
    "Required drawings": "Required drawings",
    "Attachments (design drawings)": "Attachments (design drawings)",
    "Safety Systems": "Safety Systems",
    "SHOP DRAWINGS": "SHOP DRAWINGS",
    "Attachments (General Site Plans - Item drawings / Item to be priced - Item Description)": "Attachments (General Site Plans - Item drawings / Item to be priced - Item Description)",
    "Attachments (all available drawingss - BOQ and Specifications)": "Attachments (all available drawingss - BOQ and Specifications)",
    "Attachments (General Site plan - Architectural plans - BOQ & Specifications)": "Attachments (General Site plan - Architectural plans - BOQ & Specifications)",
    "Building area (m2) - (ground floor + typical floors)": "Building area (m2) - (ground floor + typical floors)",
    "External view": "External view",
    "Attachments (plans) - (elevations) - (layout/site plan)": "Attachments (plans) - (elevations) - (layout/site plan)",
    "3D Plan": "3D Plan",
    "interior design": "interior design",
    "Attachments (architectural plan) - (floor pattern layout) - (ceiling plan) - (similar design photo)": "Attachments (architectural plan) - (floor pattern layout) - (ceiling plan) - (similar design photo)",
    "Room/space type": "Room/space type",
    "consult us in": "consult us in",
    "Structural Designs": "Structural Designs",
    "Type your question": "Type your question",
    "Architectural Workshop drawings": "Architectural Workshop drawings",
    "structurale workshop drawings": "structurale workshop drawings",
    "Electrical workshop drawings": "Electrical workshop drawings",
    "sanitary workshop drawings": "sanitary workshop drawings",
    "Mechanical workshop drawings": "Mechanical workshop drawings",
    "To inquire about the price of an item": "To inquire about the price of an item",
    "Make notes on the price of an item": "Make notes on the price of an item",
    "To inquire about the price analysis of a separate item": "To inquire about the price analysis of a separate item",
    "Attachments (image of item description - drawings)": "Attachments (image of item description - drawings)",
    "Consulting Engineering Designs": "Consulting Engineering Designs",
    "Consult the workshop plans": "Consult the workshop plans",
    "Consult safety studies": "Consult safety studies"
};


/***/ }),

/***/ "./src/app/translate/lang-es.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LANG_ES_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LANG_ES_TRANS; });
var LANG_ES_NAME = 'es';
var LANG_ES_TRANS = {
    'hello world': 'hola mundo',
    'How are you': 'Como estas',
    'Understand?': 'Entender?',
};


/***/ }),

/***/ "./src/app/translate/translate.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TranslatePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__translate_translate_service__ = __webpack_require__("./src/app/translate/translate.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TranslatePipe = /** @class */ (function () {
    function TranslatePipe(_translate) {
        this._translate = _translate;
    }
    TranslatePipe.prototype.transform = function (value, args) {
        if (value == "Verficiation Code​") {
            console.log(this._translate.instant(value));
        }
        if (!value)
            return;
        return this._translate.instant(value);
    };
    TranslatePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'translate',
            pure: false
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__translate_translate_service__["a" /* TranslateService */]])
    ], TranslatePipe);
    return TranslatePipe;
}());



/***/ }),

/***/ "./src/app/translate/translate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TranslateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__translation__ = __webpack_require__("./src/app/translate/translation.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var TranslateService = /** @class */ (function () {
    function TranslateService(_translations) {
        this._translations = _translations;
    }
    Object.defineProperty(TranslateService.prototype, "currentLang", {
        get: function () {
            return this._currentLang;
        },
        enumerable: true,
        configurable: true
    });
    TranslateService.prototype.use = function (lang) {
        this._currentLang = lang;
    };
    TranslateService.prototype.translate = function (key) {
        var translation = key;
        if (this._translations[this.currentLang] && this._translations[this.currentLang][key]) {
            return this._translations[this.currentLang][key];
        }
        return translation;
    };
    TranslateService.prototype.instant = function (key) {
        return this.translate(key);
    };
    TranslateService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__translation__["a" /* TRANSLATIONS */])),
        __metadata("design:paramtypes", [Object])
    ], TranslateService);
    return TranslateService;
}());



/***/ }),

/***/ "./src/app/translate/translation.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TRANSLATIONS; });
/* unused harmony export dictionary */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TRANSLATION_PROVIDERS; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lang_en__ = __webpack_require__("./src/app/translate/lang-en.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lang_es__ = __webpack_require__("./src/app/translate/lang-es.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lang_ar__ = __webpack_require__("./src/app/translate/lang-ar.ts");




var TRANSLATIONS = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* InjectionToken */]('translation');
var dictionary = (_a = {},
    _a[__WEBPACK_IMPORTED_MODULE_1__lang_en__["a" /* LANG_EN_NAME */]] = __WEBPACK_IMPORTED_MODULE_1__lang_en__["b" /* LANG_EN_TRANS */],
    _a[__WEBPACK_IMPORTED_MODULE_2__lang_es__["a" /* LANG_ES_NAME */]] = __WEBPACK_IMPORTED_MODULE_2__lang_es__["b" /* LANG_ES_TRANS */],
    _a[__WEBPACK_IMPORTED_MODULE_3__lang_ar__["a" /* LANG_AR_NAME */]] = __WEBPACK_IMPORTED_MODULE_3__lang_ar__["b" /* LANG_AR_TRANS */],
    _a);
var TRANSLATION_PROVIDERS = [
    { provide: TRANSLATIONS, useValue: dictionary },
];
var _a;


/***/ }),

/***/ "./src/app/what-we-do/what-we-do.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/what-we-do/what-we-do.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"about-container\">\n  <div class=\"header-container\"></div>\n\n  <div class=\"about-content\">\n\n    <div class=\"white-section\">\n      <div class=\"container\">\n        <div class=\"row\">\n\n          <div class=\"col-md-6\">\n            <div class=\"info-col\">\n              <div class=\"text-block\">\n                <h2 class=\"h3 font-weight-normal form-heading\">{{'What we do' | translate}}</h2>\n                <p>\n                  {{'We provide engineering services in four main sections:' | translate}}\n                  {{'Engineering Design Works – Executive Plans - Safety Studies - Bids Study We have tried through these four sections to meet the needs of our customers from engineering and real estate offices, contracting companies and individuals, through the work of innovative engineering designs while maintaining the estimated costs of the project and adhere to the security and safety standards and the requirements of the concerned parties to achieve the aspirations of our customers with the workmanship and enable the implementation of business in site without a conflict between different systems. We also offer some of the free services, which are available in our list, through which you can get some free information and answers to your questions and inquiries'| translate}} \n                </p>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"col-md-6\">\n            <div class=\"img-block\">\n              <img src=\"/assets/images/about.jpg\" alt=\"\" class=\"img-responsive\" />\n            </div>\n          </div>\n\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/what-we-do/what-we-do.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WhatWeDoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WhatWeDoComponent = /** @class */ (function () {
    function WhatWeDoComponent() {
    }
    WhatWeDoComponent.prototype.ngOnInit = function () {
    };
    WhatWeDoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-what-we-do',
            template: __webpack_require__("./src/app/what-we-do/what-we-do.component.html"),
            styles: [__webpack_require__("./src/app/what-we-do/what-we-do.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WhatWeDoComponent);
    return WhatWeDoComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map