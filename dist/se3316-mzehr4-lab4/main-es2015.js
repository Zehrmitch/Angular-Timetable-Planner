(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/tPW":
/*!**************************************************!*\
  !*** ./src/app/schedules/schedules.component.ts ***!
  \**************************************************/
/*! exports provided: SchedulesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchedulesComponent", function() { return SchedulesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _create_timetable_create_timetable_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../create-timetable/create-timetable.component */ "DEDD");
/* harmony import */ var _view_and_edit_view_and_edit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view-and-edit/view-and-edit.component */ "iloi");




class SchedulesComponent {
    constructor() {
        this.searchSubject = "";
        this.searchCode = "";
        this.searchComponent = "";
        this.courseCodes = [];
        this.subjects = [];
        this.components = [];
        this.startTimes = [];
        this.endTimes = [];
        this.days = [];
    }
    ngOnInit() {
    }
    createSchedule() {
        var data = {
            listName: "",
            creator: "",
            lastEdit: "",
            numCourses: false,
            courses: true,
            visible: true,
        };
    }
}
SchedulesComponent.ɵfac = function SchedulesComponent_Factory(t) { return new (t || SchedulesComponent)(); };
SchedulesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SchedulesComponent, selectors: [["app-schedules"]], decls: 2, vars: 0, template: function SchedulesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-create-timetable");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-view-and-edit");
    } }, directives: [_create_timetable_create_timetable_component__WEBPACK_IMPORTED_MODULE_1__["CreateTimetableComponent"], _view_and_edit_view_and_edit_component__WEBPACK_IMPORTED_MODULE_2__["ViewAndEditComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzY2hlZHVsZXMuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SchedulesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-schedules',
                templateUrl: './schedules.component.html',
                styleUrls: ['./schedules.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/mzehr/Documents/GitHub/SE3316-mzehr4-lab5/src/main.ts */"zUnb");


/***/ }),

/***/ "17mN":
/*!******************************************************************!*\
  !*** ./src/app/search-time-table/search-time-table.component.ts ***!
  \******************************************************************/
/*! exports provided: SearchTimeTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchTimeTableComponent", function() { return SearchTimeTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_request_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/request.service */ "F8sd");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");








function SearchTimeTableComponent_mat_expansion_panel_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel-header", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const course_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Subject: ", course_r3.subject, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Course Number: ", course_r3.catalog_nbr, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Course Name: ", course_r3.className, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Class Section: ", course_r3.course_info[0].class_section, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Component: ", course_r3.course_info[0].ssr_component, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Time: ", course_r3.course_info[0].start_time, " - ", course_r3.course_info[0].end_time, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Days: ", course_r3.course_info[0].days, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Description: ", course_r3.catalog_description, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Campus: ", course_r3.course_info[0].campus, " ");
} }
class SearchTimeTableComponent {
    constructor(service) {
        this.service = service;
    }
    ngOnInit() {
    }
    displaySubjects(SC, CC) {
        var SC = SC.toUpperCase();
        var CC = CC.toUpperCase();
        this.service.timetableSearch(SC, CC).subscribe(e => {
            this.courses = e;
        });
        return this.courses;
    }
}
SearchTimeTableComponent.ɵfac = function SearchTimeTableComponent_Factory(t) { return new (t || SearchTimeTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_request_service__WEBPACK_IMPORTED_MODULE_1__["RequestService"])); };
SearchTimeTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchTimeTableComponent, selectors: [["app-search-time-table"]], decls: 18, vars: 1, consts: [["id", "timetablePlanner"], ["appearance", "standard"], ["matInput", "", "id", "timetableSubject", "placeholder", "eg. ACTURSCI"], ["subject", ""], ["matInput", "", "id", "timetableCourseCode", "placeholder", "eg. 1021B"], ["course", ""], ["mat-raised-button", "", 3, "click"], ["class", "accordion", 4, "ngFor", "ngForOf"], [1, "accordion"], [1, "expansionHeader"], [1, "header"]], template: function SearchTimeTableComponent_Template(rf, ctx) { if (rf & 1) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Search Timetables");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Subject");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Course Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchTimeTableComponent_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13); return ctx.displaySubjects(_r0.value, _r1.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-accordion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, SearchTimeTableComponent_mat_expansion_panel_17_Template, 21, 10, "mat-expansion-panel", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.courses);
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInput"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatAccordion"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionPanelHeader"]], styles: ["#timetablePlanner[_ngcontent-%COMP%] { \n    margin-top: 20px;   \n    box-shadow: 0 0 0 2px black inset;\n    overflow:auto;\n    width: 100%; \n    float: left; \n    background-color: rgb(167, 237, 255);\n    height: auto;\n    padding-top: 10px;\n    padding-bottom: 20px;\n}\nbutton[_ngcontent-%COMP%] {\n    margin-left: 10px;\n}\n.header[_ngcontent-%COMP%] {\n    display: block;\n    margin: 10px;\n}\n.expansionHeader[_ngcontent-%COMP%]{\n    height: auto;\n}\n.accordion[_ngcontent-%COMP%]{\n    margin: 10px;\n    background-color: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC10aW1lLXRhYmxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUNBQWlDO0lBQ2pDLGFBQWE7SUFDYixXQUFXO0lBQ1gsV0FBVztJQUNYLG9DQUFvQztJQUNwQyxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLDZCQUE2QjtBQUNqQyIsImZpbGUiOiJzZWFyY2gtdGltZS10YWJsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3RpbWV0YWJsZVBsYW5uZXIgeyBcbiAgICBtYXJnaW4tdG9wOiAyMHB4OyAgIFxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDJweCBibGFjayBpbnNldDtcbiAgICBvdmVyZmxvdzphdXRvO1xuICAgIHdpZHRoOiAxMDAlOyBcbiAgICBmbG9hdDogbGVmdDsgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2NywgMjM3LCAyNTUpO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cbmJ1dHRvbiB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG4uaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IDEwcHg7XG59XG4uZXhwYW5zaW9uSGVhZGVye1xuICAgIGhlaWdodDogYXV0bztcbn1cbi5hY2NvcmRpb257XG4gICAgbWFyZ2luOiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchTimeTableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-search-time-table',
                templateUrl: './search-time-table.component.html',
                styleUrls: ['./search-time-table.component.css']
            }]
    }], function () { return [{ type: src_app_request_service__WEBPACK_IMPORTED_MODULE_1__["RequestService"] }]; }, null); })();


/***/ }),

/***/ "1W4x":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");









class RegisterComponent {
    constructor(auth, router, firestore) {
        this.auth = auth;
        this.router = router;
        this.firestore = firestore;
    }
    ngOnInit() {
    }
    register() {
        if (this.password == this.passwordTwo) {
            this.auth.createUserWithEmailAndPassword(this.email, this.password)
                .then((user) => {
                alert(user);
                this.router.navigateByUrl("/main");
                this.createUser();
                // Signed in
            })
                .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode);
                alert(errorMessage);
            });
        }
        else {
            alert("Passwords do not match. Please try again");
        }
    }
    createUser() {
        var data = {
            email: this.email,
            password: this.password,
            name: this.name,
            isAdmin: false,
            enabled: true
        };
        return new Promise((resolve, reject) => {
            this.firestore.collection("users").add(data)
                .then(res => {
                alert("user added");
            }, err => reject(err));
        });
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"])); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 25, vars: 4, consts: [["id", "register"], ["appearance", "standard"], ["matInput", "", "id", "timetableCourseCode", 3, "ngModel", "ngModelChange"], ["matInput", "", "id", "timetableCourseCode", "type", "password", 3, "ngModel", "ngModelChange"], ["mat-raised-button", "", 3, "click"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Register New User");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_6_listener($event) { return ctx.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Email Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_11_listener($event) { return ctx.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_16_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Re-Enter Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_21_listener($event) { return ctx.passwordTwo = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_23_listener() { return ctx.register(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Register User");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.passwordTwo);
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"]], styles: ["#register[_ngcontent-%COMP%]{\n    margin-top: 5%;\n    margin-right: 25%;\n    margin-left: 25%;\n    box-shadow: 0 0 0 2px black inset;\n    overflow:auto;\n    width: 50%; \n    float: left; \n    background-color: rgb(167, 237, 255);\n    height: auto;\n    padding: 10px;\n    padding-bottom: 20px;\n    text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixpQ0FBaUM7SUFDakMsYUFBYTtJQUNiLFVBQVU7SUFDVixXQUFXO0lBQ1gsb0NBQW9DO0lBQ3BDLFlBQVk7SUFDWixhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJyZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3JlZ2lzdGVye1xuICAgIG1hcmdpbi10b3A6IDUlO1xuICAgIG1hcmdpbi1yaWdodDogMjUlO1xuICAgIG1hcmdpbi1sZWZ0OiAyNSU7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMnB4IGJsYWNrIGluc2V0O1xuICAgIG92ZXJmbG93OmF1dG87XG4gICAgd2lkdGg6IDUwJTsgXG4gICAgZmxvYXQ6IGxlZnQ7IFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNjcsIDIzNywgMjU1KTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-register',
                templateUrl: './register.component.html',
                styleUrls: ['./register.component.css']
            }]
    }], function () { return [{ type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] }]; }, null); })();


/***/ }),

/***/ "AytR":
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
    production: false,
    firebase: {
        apiKey: "AIzaSyBe4iCLl090Mlh4Ke0J0yTH-ho8P0qGnVI",
        authDomain: "lab-5-12689.firebaseapp.com",
        projectId: "lab-5-12689",
        storageBucket: "lab-5-12689.appspot.com",
        messagingSenderId: "87621218626",
        appId: "1:87621218626:web:657f14ee8efe89e08b18db",
        measurementId: "G-P639653K80"
    }
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

/***/ "C7aP":
/*!**********************************************!*\
  !*** ./src/app/courses/courses.component.ts ***!
  \**********************************************/
/*! exports provided: CoursesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursesComponent", function() { return CoursesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _display_all_subjects_display_all_subjects_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../display-all-subjects/display-all-subjects.component */ "yCCQ");
/* harmony import */ var _course_search_course_search_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../course-search/course-search.component */ "Sduk");
/* harmony import */ var _search_time_table_search_time_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../search-time-table/search-time-table.component */ "17mN");





class CoursesComponent {
    constructor() { }
    ngOnInit() {
    }
}
CoursesComponent.ɵfac = function CoursesComponent_Factory(t) { return new (t || CoursesComponent)(); };
CoursesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CoursesComponent, selectors: [["app-courses"]], decls: 3, vars: 0, template: function CoursesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-display-all-subjects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-course-search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-search-time-table");
    } }, directives: [_display_all_subjects_display_all_subjects_component__WEBPACK_IMPORTED_MODULE_1__["DisplayAllSubjectsComponent"], _course_search_course_search_component__WEBPACK_IMPORTED_MODULE_2__["CourseSearchComponent"], _search_time_table_search_time_table_component__WEBPACK_IMPORTED_MODULE_3__["SearchTimeTableComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb3Vyc2VzLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoursesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-courses',
                templateUrl: './courses.component.html',
                styleUrls: ['./courses.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "DEDD":
/*!****************************************************************!*\
  !*** ./src/app/create-timetable/create-timetable.component.ts ***!
  \****************************************************************/
/*! exports provided: CreateTimetableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateTimetableComponent", function() { return CreateTimetableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_request_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/request.service */ "F8sd");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function CreateTimetableComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "The schedule will be Public");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateTimetableComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "The schedule will be Private");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class CreateTimetableComponent {
    constructor(service) {
        this.service = service;
        this.courseList = {
            info: ''
        };
        this.scheduleList = {
            text: ''
        };
        this.isPublic = false;
        this.description = "";
    }
    ngOnInit() {
    }
    setPrivate() {
        this.isPublic = false;
    }
    setPublic() {
        this.isPublic = true;
    }
    createNewSchedule(scheduleName) {
        this.service.createSchedule(scheduleName).subscribe(e => {
            this.courseList = e;
        });
        return this.courseList;
    }
    addCourses(scheduleName) {
        let courses = {};
        for (var i = 1; i < 7; i++) {
            var key = document.getElementById(String(i) + "c").value;
            var val = document.getElementById(String(i) + "n").value;
            if (key != "" && val != "") {
                courses[key] = val;
            }
        }
        this.service.updateSchedule(scheduleName, courses).subscribe(e => {
            this.scheduleList = e;
        });
        return this.scheduleList;
    }
}
CreateTimetableComponent.ɵfac = function CreateTimetableComponent_Factory(t) { return new (t || CreateTimetableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_request_service__WEBPACK_IMPORTED_MODULE_1__["RequestService"])); };
CreateTimetableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreateTimetableComponent, selectors: [["app-create-timetable"]], decls: 93, vars: 4, consts: [["id", "newSchedule"], ["appearance", "standard"], ["matInput", "", "id", "scheduleName", "placeholder", "eg. Semester One"], ["scheduleName", ""], ["matInput", "", "id", "scheduleDescription", "placeholder", "eg. Semester One"], ["mat-raised-button", "", 3, "click"], [4, "ngIf"], ["id", "newCourse"], ["matInput", "", "id", "updateScheduleName", "placeholder", "eg. Semester One"], ["schedule", ""], ["id", "newTimetable"], ["matInput", "", "id", "1c", "placeholder", "eg. 1021B"], ["matInput", "", "id", "1n", "placeholder", "eg. ACTURSCI"], ["matInput", "", "id", "2c", "placeholder", "eg. 1021B"], ["matInput", "", "id", "2n", "placeholder", "eg. ACTURSCI"], ["matInput", "", "id", "3c", "placeholder", "eg. 1021B"], ["matInput", "", "id", "3n", "placeholder", "eg. ACTURSCI"], ["matInput", "", "id", "4c", "placeholder", "eg. 1021B"], ["matInput", "", "id", "4n", "placeholder", "eg. ACTURSCI"], ["matInput", "", "id", "5c", "placeholder", "eg. 1021B"], ["matInput", "", "id", "5n", "placeholder", "eg. ACTURSCI"], ["matInput", "", "id", "6c", "placeholder", "eg. 1021B"], ["matInput", "", "id", "6n", "placeholder", "eg. ACTURSCI"]], template: function CreateTimetableComponent_Template(rf, ctx) { if (rf & 1) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "New Class List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Schedule Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 4, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateTimetableComponent_Template_button_click_15_listener() { return ctx.setPublic(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Public");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateTimetableComponent_Template_button_click_17_listener() { return ctx.setPrivate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Private");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, CreateTimetableComponent_div_19_Template, 3, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, CreateTimetableComponent_div_20_Template, 3, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateTimetableComponent_Template_button_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8); return ctx.createNewSchedule(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Create Schedule ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Schedule to Update");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateTimetableComponent_Template_button_click_34_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](33); return ctx.addCourses(_r4.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Add/Update Courses ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "ul", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Course Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Subject Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Course Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Subject Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Course Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Subject Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Course Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Subject Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Course Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Subject Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Course Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Subject Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isPublic);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isPublic);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.courseList.info);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.scheduleList.text);
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInput"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: ["#newSchedule[_ngcontent-%COMP%] {\n    overflow: auto;\n    margin-top: 20px;\n    box-shadow: 0 0 0 2px black inset;\n    width: 35%; \n    float: left; \n    background-color: rgb(167, 237, 255); \n    height: 600px;\n}\nhr[_ngcontent-%COMP%] {\n    height: 2px;\n    fill: black;\n    border-width:0;\n    background-color:black;\n}\nul[_ngcontent-%COMP%]{\n    list-style-type: none;\n}\nbutton[_ngcontent-%COMP%] {\n    margin: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS10aW1ldGFibGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsaUNBQWlDO0lBQ2pDLFVBQVU7SUFDVixXQUFXO0lBQ1gsb0NBQW9DO0lBQ3BDLGFBQWE7QUFDakI7QUFDQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0lBQ1gsY0FBYztJQUNkLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0kscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6ImNyZWF0ZS10aW1ldGFibGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNuZXdTY2hlZHVsZSB7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAycHggYmxhY2sgaW5zZXQ7XG4gICAgd2lkdGg6IDM1JTsgXG4gICAgZmxvYXQ6IGxlZnQ7IFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNjcsIDIzNywgMjU1KTsgXG4gICAgaGVpZ2h0OiA2MDBweDtcbn1cbmhyIHtcbiAgICBoZWlnaHQ6IDJweDtcbiAgICBmaWxsOiBibGFjaztcbiAgICBib3JkZXItd2lkdGg6MDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmJsYWNrO1xufVxudWx7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuYnV0dG9uIHtcbiAgICBtYXJnaW46IDEwcHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateTimetableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-create-timetable',
                templateUrl: './create-timetable.component.html',
                styleUrls: ['./create-timetable.component.css']
            }]
    }], function () { return [{ type: src_app_request_service__WEBPACK_IMPORTED_MODULE_1__["RequestService"] }]; }, null); })();


/***/ }),

/***/ "F8sd":
/*!************************************!*\
  !*** ./src/app/request.service.ts ***!
  \************************************/
/*! exports provided: RequestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestService", function() { return RequestService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




const postHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set("Content-Type", "text/html; charset=utf-8");
const putHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set("Content-Type", "application/json; charset=utf-8");
class RequestService {
    constructor(http) {
        this.http = http;
        this.router = 'http://localhost:3000/api';
    }
    getSubjects() {
        return this.http.get(this.router + '/nameAndCodes');
    }
    courseSearch(courseCode) {
        return this.http.get(this.router + '/getCourseCodes/' + courseCode);
    }
    timetableSearch(subjectCode, courseCode) {
        return this.http.get(this.router + '/getCourseSearch/' + subjectCode + '/' + String(courseCode));
    }
    createSchedule(scheduleName) {
        return this.http.post(this.router + '/createSchedule/' + scheduleName, {}, { headers: postHeader });
    }
    updateSchedule(scheduleName, courses) {
        return this.http.put(this.router + '/updateSchedule/' + scheduleName, { body: JSON.stringify(courses) }, { headers: putHeader });
    }
    listSchedules() {
        return this.http.get(this.router + '/viewSchedules');
    }
}
RequestService.ɵfac = function RequestService_Factory(t) { return new (t || RequestService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
RequestService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RequestService, factory: RequestService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RequestService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "NjDy":
/*!**************************************************************!*\
  !*** ./src/app/admin-dashboard/admin-dashboard.component.ts ***!
  \**************************************************************/
/*! exports provided: AdminDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminDashboardComponent", function() { return AdminDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/app */ "Jgta");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function AdminDashboardComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, user_r1));
} }
class AdminDashboardComponent {
    constructor(auth, firestore) {
        this.auth = auth;
        this.firestore = firestore;
    }
    ngOnInit() {
        this.usersCollection = this.firestore.collection('users', ref => {
            return ref.orderBy('email');
        });
        this.users = this.usersCollection.valueChanges();
    }
    resetPass() {
        var user = firebase_app__WEBPACK_IMPORTED_MODULE_1__["default"].auth().currentUser;
        this.auth.sendPasswordResetEmail(user.email).then(function () {
            alert("Password Reset Email Sent");
        }).catch(function (error) {
            alert(error);
        });
    }
}
AdminDashboardComponent.ɵfac = function AdminDashboardComponent_Factory(t) { return new (t || AdminDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"])); };
AdminDashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminDashboardComponent, selectors: [["app-admin-dashboard"]], decls: 12, vars: 3, consts: [[3, "click"], [4, "ngFor", "ngForOf"]], template: function AdminDashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Reset Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminDashboardComponent_Template_button_click_4_listener() { return ctx.resetPass(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Reset Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Add User Data");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Registered Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AdminDashboardComponent_div_10_Template, 4, 3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 1, ctx.users));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["JsonPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbi1kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminDashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-admin-dashboard',
                templateUrl: './admin-dashboard.component.html',
                styleUrls: ['./admin-dashboard.component.css']
            }]
    }], function () { return [{ type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] }, { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] }]; }, null); })();


/***/ }),

/***/ "P+IX":
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/app */ "Jgta");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AuthGuard {
    constructor(router) {
        this.router = router;
    }
    canActivate() {
        var user = firebase_app__WEBPACK_IMPORTED_MODULE_1__["default"].auth().currentUser;
        console.log(user);
        if (user) {
            console.log("Logged in");
            return true;
        }
        else {
            console.log("Logged out");
            alert("Please log in to access this feature");
            this.router.navigateByUrl("/main");
            return false;
        }
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "Sduk":
/*!**********************************************************!*\
  !*** ./src/app/course-search/course-search.component.ts ***!
  \**********************************************************/
/*! exports provided: CourseSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseSearchComponent", function() { return CourseSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_request_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/request.service */ "F8sd");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function CourseSearchComponent_li_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const x_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", x_r2.subject, " -- ", x_r2.catalog_nbr, "");
} }
class CourseSearchComponent {
    constructor(service) {
        this.service = service;
    }
    ngOnInit() {
    }
    displayCourses(courseCode) {
        var courseCode = courseCode.toUpperCase();
        this.service.courseSearch(courseCode).subscribe(e => {
            this.courseList = e;
        });
        return this.courseList;
    }
}
CourseSearchComponent.ɵfac = function CourseSearchComponent_Factory(t) { return new (t || CourseSearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_request_service__WEBPACK_IMPORTED_MODULE_1__["RequestService"])); };
CourseSearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CourseSearchComponent, selectors: [["app-course-search"]], decls: 13, vars: 1, consts: [["id", "courseSearch"], ["appearance", "standard"], ["type", "text", "matInput", "", "id", "courseCodeInput", "placeholder", "eg. ACTURSCI", "name", "courseInput"], ["courses", ""], ["mat-raised-button", "", 3, "click"], ["id", "courseSearchResults"], [4, "ngFor", "ngForOf"]], template: function CourseSearchComponent_Template(rf, ctx) { if (rf & 1) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Course Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Course Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CourseSearchComponent_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8); return ctx.displayCourses(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, CourseSearchComponent_li_12_Template, 2, 2, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.courseList);
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInput"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], styles: ["#courseSearch[_ngcontent-%COMP%] {    \n    box-shadow: 0 0 0 2px black inset;\n    overflow:auto;\n    width: 50%; \n    float: right; \n    background-color: rgb(167, 237, 255); \n    height: 400px;\n}\n\nbutton[_ngcontent-%COMP%] {\n    margin-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvdXJzZS1zZWFyY2guY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlDQUFpQztJQUNqQyxhQUFhO0lBQ2IsVUFBVTtJQUNWLFlBQVk7SUFDWixvQ0FBb0M7SUFDcEMsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJjb3Vyc2Utc2VhcmNoLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY291cnNlU2VhcmNoIHsgICAgXG4gICAgYm94LXNoYWRvdzogMCAwIDAgMnB4IGJsYWNrIGluc2V0O1xuICAgIG92ZXJmbG93OmF1dG87XG4gICAgd2lkdGg6IDUwJTsgXG4gICAgZmxvYXQ6IHJpZ2h0OyBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTY3LCAyMzcsIDI1NSk7IFxuICAgIGhlaWdodDogNDAwcHg7XG59XG5cbmJ1dHRvbiB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CourseSearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-course-search',
                templateUrl: './course-search.component.html',
                styleUrls: ['./course-search.component.css']
            }]
    }], function () { return [{ type: src_app_request_service__WEBPACK_IMPORTED_MODULE_1__["RequestService"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





function AppComponent_li_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.name, " ");
} }
class AppComponent {
    constructor(firestore) {
        this.firestore = firestore;
        this.title = 'Timetable Planner';
        this.items = firestore.collection('items').valueChanges();
    }
    ngOnInit() {
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 27, vars: 4, consts: [["name", "description", "content", "A timetable to search course names and their codes"], ["name", "author", "content", "Mitchell Zehr"], ["class", "text", 4, "ngFor", "ngForOf"], ["routerLink", "/main"], ["routerLink", "/register"], ["routerLink", "/courses"], ["routerLink", "/courseList"], ["routerLink", "/schedules"], ["routerLink", "/admin"], ["id", "privacy", "routerLink", "/privacy"], [1, "text"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "meta", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Timetable - mzehr4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AppComponent_li_9_Template, 2, 1, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Courses");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Course List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Schedules");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Admin Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Privacy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 2, ctx.items));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"]], styles: ["li[_ngcontent-%COMP%] {\n    font-family: Arial;\n    list-style-type: none;\n}\n\nbutton[_ngcontent-%COMP%] {\n    margin-left: 10px;\n}\n\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    padding: 10px 15px;\n    margin: 5px;\n    text-decoration: none;\n    display: inline-block;\n    color: rgb(0, 0, 0);\n    background-color: rgb(247, 247, 247);\n    border-radius: 7px;\n}\n\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    color: #0061bd;\n    background-color: #d1d1d1;\n}\n\n#privacy[_ngcontent-%COMP%]{\n    float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsb0NBQW9DO0lBQ3BDLGtCQUFrQjtBQUN0Qjs7QUFDQTtJQUNJLGNBQWM7SUFDZCx5QkFBeUI7QUFDN0I7O0FBQ0E7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibGkge1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbDtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59XG5cbmJ1dHRvbiB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbm5hdiBhIHtcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gICAgbWFyZ2luOiA1cHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBjb2xvcjogcmdiKDAsIDAsIDApO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDcsIDI0NywgMjQ3KTtcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XG59XG5uYXYgYTpob3ZlciB7XG4gICAgY29sb3I6ICMwMDYxYmQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2QxZDFkMTtcbn1cbiNwcml2YWN5e1xuICAgIGZsb2F0OiByaWdodDtcbn1cblxuXG5cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css'],
            }]
    }], function () { return [{ type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"] }]; }, null); })();


/***/ }),

/***/ "TsVY":
/*!**********************************************!*\
  !*** ./src/app/privacy/privacy.component.ts ***!
  \**********************************************/
/*! exports provided: PrivacyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacyComponent", function() { return PrivacyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");



class PrivacyComponent {
    constructor() { }
    ngOnInit() {
    }
}
PrivacyComponent.ɵfac = function PrivacyComponent_Factory(t) { return new (t || PrivacyComponent)(); };
PrivacyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PrivacyComponent, selectors: [["app-privacy"]], decls: 39, vars: 0, consts: [["id", "privacy"], [1, "accordion"], [1, "expansionHeader"], [1, "header"]], template: function PrivacyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Privacy and Security");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-accordion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-expansion-panel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-expansion-panel-header", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Security and Privacy Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Some info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-accordion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-expansion-panel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-expansion-panel-header", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Acceptable Use Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Some info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-accordion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-expansion-panel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-expansion-panel-header", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "DMCA Notice & Takedown Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Some info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-accordion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-expansion-panel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-expansion-panel-header", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "DMCA Takedown Procedure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Some info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatAccordion"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatExpansionPanelHeader"]], styles: ["#privacy[_ngcontent-%COMP%]{\n    margin-top: 20px;  \n    box-shadow: 0 0 0 2px black inset;\n    overflow:auto;\n    width: 98%; \n    float: left; \n    background-color: rgb(167, 237, 255);\n    height: auto;\n    padding: 10px;\n    padding-bottom: 20px;\n}\nh1[_ngcontent-%COMP%]{\n    text-decoration: underline;\n}\n.header[_ngcontent-%COMP%] {\n    display: block;\n}\n.expansionHeader[_ngcontent-%COMP%]{\n    height: auto;\n}\n.accordion[_ngcontent-%COMP%]{\n    margin: 5px;\n    background-color: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByaXZhY3kuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixpQ0FBaUM7SUFDakMsYUFBYTtJQUNiLFVBQVU7SUFDVixXQUFXO0lBQ1gsb0NBQW9DO0lBQ3BDLFlBQVk7SUFDWixhQUFhO0lBQ2Isb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSwwQkFBMEI7QUFDOUI7QUFFQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFdBQVc7SUFDWCw2QkFBNkI7QUFDakMiLCJmaWxlIjoicHJpdmFjeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3ByaXZhY3l7XG4gICAgbWFyZ2luLXRvcDogMjBweDsgIFxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDJweCBibGFjayBpbnNldDtcbiAgICBvdmVyZmxvdzphdXRvO1xuICAgIHdpZHRoOiA5OCU7IFxuICAgIGZsb2F0OiBsZWZ0OyBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTY3LCAyMzcsIDI1NSk7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5oMXtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLmhlYWRlciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG4uZXhwYW5zaW9uSGVhZGVye1xuICAgIGhlaWdodDogYXV0bztcbn1cbi5hY2NvcmRpb257XG4gICAgbWFyZ2luOiA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PrivacyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-privacy',
                templateUrl: './privacy.component.html',
                styleUrls: ['./privacy.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Uq2V":
/*!******************************************************!*\
  !*** ./src/app/course-list/course-list.component.ts ***!
  \******************************************************/
/*! exports provided: CourseListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseListComponent", function() { return CourseListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class CourseListComponent {
    constructor() { }
    ngOnInit() {
    }
}
CourseListComponent.ɵfac = function CourseListComponent_Factory(t) { return new (t || CourseListComponent)(); };
CourseListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CourseListComponent, selectors: [["app-course-list"]], decls: 3, vars: 0, consts: [["id", "courseList"]], template: function CourseListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "course-list works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["#courseList[_ngcontent-%COMP%]{\n    margin-top: 5%;\n    margin-right: 25%;\n    margin-left: 25%;\n    box-shadow: 0 0 0 2px black inset;\n    overflow:auto;\n    width: 50%; \n    float: left; \n    background-color: rgb(167, 237, 255);\n    padding: 10px;\n    padding-bottom: 20px;\n    text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvdXJzZS1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixpQ0FBaUM7SUFDakMsYUFBYTtJQUNiLFVBQVU7SUFDVixXQUFXO0lBQ1gsb0NBQW9DO0lBQ3BDLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsa0JBQWtCO0FBQ3RCIiwiZmlsZSI6ImNvdXJzZS1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY291cnNlTGlzdHtcbiAgICBtYXJnaW4tdG9wOiA1JTtcbiAgICBtYXJnaW4tcmlnaHQ6IDI1JTtcbiAgICBtYXJnaW4tbGVmdDogMjUlO1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDJweCBibGFjayBpbnNldDtcbiAgICBvdmVyZmxvdzphdXRvO1xuICAgIHdpZHRoOiA1MCU7IFxuICAgIGZsb2F0OiBsZWZ0OyBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTY3LCAyMzcsIDI1NSk7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CourseListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-course-list',
                templateUrl: './course-list.component.html',
                styleUrls: ['./course-list.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _display_all_subjects_display_all_subjects_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./display-all-subjects/display-all-subjects.component */ "yCCQ");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _course_search_course_search_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./course-search/course-search.component */ "Sduk");
/* harmony import */ var _search_time_table_search_time_table_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./search-time-table/search-time-table.component */ "17mN");
/* harmony import */ var _create_timetable_create_timetable_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./create-timetable/create-timetable.component */ "DEDD");
/* harmony import */ var _view_and_edit_view_and_edit_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./view-and-edit/view-and-edit.component */ "iloi");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./main/main.component */ "wlho");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./register/register.component */ "1W4x");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _schedules_schedules_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./schedules/schedules.component */ "/tPW");
/* harmony import */ var _courses_courses_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./courses/courses.component */ "C7aP");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/fire */ "spgP");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var _admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./admin-dashboard/admin-dashboard.component */ "NjDy");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _privacy_privacy_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./privacy/privacy.component */ "TsVY");
/* harmony import */ var _course_list_course_list_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./course-list/course-list.component */ "Uq2V");




























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_15__["AppRoutingModule"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_19__["AngularFirestoreModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_22__["MatExpansionModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_23__["MatCardModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_18__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_20__["environment"].firebase)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _display_all_subjects_display_all_subjects_component__WEBPACK_IMPORTED_MODULE_7__["DisplayAllSubjectsComponent"],
        _course_search_course_search_component__WEBPACK_IMPORTED_MODULE_9__["CourseSearchComponent"],
        _search_time_table_search_time_table_component__WEBPACK_IMPORTED_MODULE_10__["SearchTimeTableComponent"],
        _create_timetable_create_timetable_component__WEBPACK_IMPORTED_MODULE_11__["CreateTimetableComponent"],
        _view_and_edit_view_and_edit_component__WEBPACK_IMPORTED_MODULE_12__["ViewAndEditComponent"],
        _main_main_component__WEBPACK_IMPORTED_MODULE_13__["MainComponent"],
        _register_register_component__WEBPACK_IMPORTED_MODULE_14__["RegisterComponent"],
        _schedules_schedules_component__WEBPACK_IMPORTED_MODULE_16__["SchedulesComponent"],
        _courses_courses_component__WEBPACK_IMPORTED_MODULE_17__["CoursesComponent"],
        _admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_21__["AdminDashboardComponent"],
        _privacy_privacy_component__WEBPACK_IMPORTED_MODULE_24__["PrivacyComponent"],
        _course_list_course_list_component__WEBPACK_IMPORTED_MODULE_25__["CourseListComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_15__["AppRoutingModule"],
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_19__["AngularFirestoreModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_22__["MatExpansionModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_23__["MatCardModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_18__["AngularFireModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                    _display_all_subjects_display_all_subjects_component__WEBPACK_IMPORTED_MODULE_7__["DisplayAllSubjectsComponent"],
                    _course_search_course_search_component__WEBPACK_IMPORTED_MODULE_9__["CourseSearchComponent"],
                    _search_time_table_search_time_table_component__WEBPACK_IMPORTED_MODULE_10__["SearchTimeTableComponent"],
                    _create_timetable_create_timetable_component__WEBPACK_IMPORTED_MODULE_11__["CreateTimetableComponent"],
                    _view_and_edit_view_and_edit_component__WEBPACK_IMPORTED_MODULE_12__["ViewAndEditComponent"],
                    _main_main_component__WEBPACK_IMPORTED_MODULE_13__["MainComponent"],
                    _register_register_component__WEBPACK_IMPORTED_MODULE_14__["RegisterComponent"],
                    _schedules_schedules_component__WEBPACK_IMPORTED_MODULE_16__["SchedulesComponent"],
                    _courses_courses_component__WEBPACK_IMPORTED_MODULE_17__["CoursesComponent"],
                    _admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_21__["AdminDashboardComponent"],
                    _privacy_privacy_component__WEBPACK_IMPORTED_MODULE_24__["PrivacyComponent"],
                    _course_list_course_list_component__WEBPACK_IMPORTED_MODULE_25__["CourseListComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_15__["AppRoutingModule"],
                    _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_19__["AngularFirestoreModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_22__["MatExpansionModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_23__["MatCardModule"],
                    _angular_fire__WEBPACK_IMPORTED_MODULE_18__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_20__["environment"].firebase)
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "iloi":
/*!**********************************************************!*\
  !*** ./src/app/view-and-edit/view-and-edit.component.ts ***!
  \**********************************************************/
/*! exports provided: ViewAndEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewAndEditComponent", function() { return ViewAndEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_request_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/request.service */ "F8sd");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function ViewAndEditComponent_li_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const x_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Subject: ", x_r1.scheduleName, "");
} }
class ViewAndEditComponent {
    constructor(service) {
        this.service = service;
    }
    ngOnInit() {
    }
    displaySchedules() {
        this.service.listSchedules().subscribe(e => {
            console.log("e: " + e);
            Object.keys(e).map(function (key, index) {
                console.log("key: " + key);
                this.schedules = key;
            });
        });
        return this.schedules;
    }
}
ViewAndEditComponent.ɵfac = function ViewAndEditComponent_Factory(t) { return new (t || ViewAndEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_request_service__WEBPACK_IMPORTED_MODULE_1__["RequestService"])); };
ViewAndEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ViewAndEditComponent, selectors: [["app-view-and-edit"]], decls: 17, vars: 1, consts: [["id", "viewAndEdit"], ["mat-raised-button", "", 3, "click"], ["appearance", "standard"], ["matInput", "", "id", "scheduleToDelete", "placeholder", "Schedule Name"], ["matInput", "", "id", "showScheduleCourses", "placeholder", "Schedule Name"], ["id", "viewSchedules"], [4, "ngFor", "ngForOf"], ["id", "showSchedule"]], template: function ViewAndEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "View and Edit Existing Schedules");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewAndEditComponent_Template_button_click_3_listener() { return ctx.displaySchedules(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "List all Schedules");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Schedule to Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Show Schedule");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ViewAndEditComponent_li_15_Template, 2, 1, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.schedules);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], styles: ["#viewAndEdit[_ngcontent-%COMP%] {\n    overflow: auto;\n    margin-top: 20px;\n    box-shadow: 0 0 0 2px black inset;\n    width: 65%; \n    float: right; \n    background-color: rgb(167, 237, 255); \n    height: 600px;\n}\n\n#showSchedule[_ngcontent-%COMP%] {\n    float: right;\n    padding-right: 20px;\n    padding-left: 10px;\n    width: 50%;\n}\n\n#viewSchedules[_ngcontent-%COMP%] {\n    float: left;\n    padding-left: 20px;\n    padding-right: 10px;\n    width: 40%;\n}\n\nbutton[_ngcontent-%COMP%] {\n    margin-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXctYW5kLWVkaXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsaUNBQWlDO0lBQ2pDLFVBQVU7SUFDVixZQUFZO0lBQ1osb0NBQW9DO0lBQ3BDLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckIiLCJmaWxlIjoidmlldy1hbmQtZWRpdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3ZpZXdBbmRFZGl0IHtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDJweCBibGFjayBpbnNldDtcbiAgICB3aWR0aDogNjUlOyBcbiAgICBmbG9hdDogcmlnaHQ7IFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNjcsIDIzNywgMjU1KTsgXG4gICAgaGVpZ2h0OiA2MDBweDtcbn1cblxuI3Nob3dTY2hlZHVsZSB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIHdpZHRoOiA1MCU7XG59XG5cbiN2aWV3U2NoZWR1bGVzIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICB3aWR0aDogNDAlO1xufVxuXG5idXR0b24ge1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewAndEditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-view-and-edit',
                templateUrl: './view-and-edit.component.html',
                styleUrls: ['./view-and-edit.component.css']
            }]
    }], function () { return [{ type: src_app_request_service__WEBPACK_IMPORTED_MODULE_1__["RequestService"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main/main.component */ "wlho");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register/register.component */ "1W4x");
/* harmony import */ var _schedules_schedules_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./schedules/schedules.component */ "/tPW");
/* harmony import */ var _courses_courses_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./courses/courses.component */ "C7aP");
/* harmony import */ var _admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin-dashboard/admin-dashboard.component */ "NjDy");
/* harmony import */ var _privacy_privacy_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./privacy/privacy.component */ "TsVY");
/* harmony import */ var _course_list_course_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./course-list/course-list.component */ "Uq2V");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./auth/auth.guard */ "P+IX");












const routes = [
    { path: 'main', component: _main_main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"] },
    { path: 'schedules', component: _schedules_schedules_component__WEBPACK_IMPORTED_MODULE_4__["SchedulesComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]] },
    { path: 'courses', component: _courses_courses_component__WEBPACK_IMPORTED_MODULE_5__["CoursesComponent"] },
    { path: 'admin', component: _admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["AdminDashboardComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]] },
    { path: 'courseList', component: _course_list_course_list_component__WEBPACK_IMPORTED_MODULE_8__["CourseListComponent"] },
    { path: 'privacy', component: _privacy_privacy_component__WEBPACK_IMPORTED_MODULE_7__["PrivacyComponent"] },
    { path: '', redirectTo: 'main', pathMatch: 'full' }
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

/***/ "wlho":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/app */ "Jgta");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");










class MainComponent {
    constructor(auth, router, firestore) {
        this.auth = auth;
        this.router = router;
        this.firestore = firestore;
    }
    ngOnInit() {
        this.email = "";
        this.password = "";
    }
    loginWithGoogle() {
        this.auth.signInWithPopup(new firebase_app__WEBPACK_IMPORTED_MODULE_1__["default"].auth.GoogleAuthProvider());
    }
    loginWithEmail() {
        this.auth
            .signInWithEmailAndPassword(this.email, this.password)
            .then((result) => {
            alert("Logged in");
            this.router.navigateByUrl("schedules");
        })
            .catch(function (error) {
            alert(error);
        });
    }
    logout() {
        this.auth.signOut();
        alert("Logged out");
    }
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"])); };
MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["app-main"]], decls: 29, vars: 2, consts: [["id", "about"], ["id", "login"], ["appearance", "standard"], ["matInput", "", "id", "timetableCourseCode", "placeholder", "eg. test@example.ca", 3, "ngModel", "ngModelChange"], ["matInput", "", "id", "timetableCourseCode", "type", "password", 3, "ngModel", "ngModelChange"], ["mat-raised-button", "", 3, "click"], ["id", "newUser"], ["mat-raised-button", "", "routerLink", "/register"]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Timetable planner is a utility that allows users to manage Western Unviersity courses. The planner lets users search and view courses. If the user registers they are able to create personalized schedules which can be published and viewed by other users. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MainComponent_Template_input_ngModelChange_11_listener($event) { return ctx.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MainComponent_Template_input_ngModelChange_15_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainComponent_Template_button_click_17_listener() { return ctx.loginWithEmail(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainComponent_Template_button_click_19_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainComponent_Template_button_click_21_listener() { return ctx.loginWithGoogle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Login with Google");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "New User?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password);
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], styles: ["#login[_ngcontent-%COMP%]{\n    margin-top: 20px;  \n    box-shadow: 0 0 0 2px black inset;\n    overflow:auto;\n    width: 98%; \n    float: left; \n    background-color: rgb(167, 237, 255);\n    height: auto;\n    padding: 10px;\n    padding-bottom: 20px;\n}\n#about[_ngcontent-%COMP%]{\n    margin-top: 20px;   \n    box-shadow: 0 0 0 2px black inset;\n    overflow:auto;\n    width: 98%; \n    float: left; \n    background-color: rgb(167, 237, 255);\n    height: auto;\n    padding: 10px;\n    padding-bottom: 20px;\n}\nbutton[_ngcontent-%COMP%] {\n    margin-left: 10px;\n}\n#newUser[_ngcontent-%COMP%]{\n    padding-top: 40px;\n    text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixpQ0FBaUM7SUFDakMsYUFBYTtJQUNiLFVBQVU7SUFDVixXQUFXO0lBQ1gsb0NBQW9DO0lBQ3BDLFlBQVk7SUFDWixhQUFhO0lBQ2Isb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsaUNBQWlDO0lBQ2pDLGFBQWE7SUFDYixVQUFVO0lBQ1YsV0FBVztJQUNYLG9DQUFvQztJQUNwQyxZQUFZO0lBQ1osYUFBYTtJQUNiLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIscUJBQXFCO0FBQ3pCIiwiZmlsZSI6Im1haW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNsb2dpbntcbiAgICBtYXJnaW4tdG9wOiAyMHB4OyAgXG4gICAgYm94LXNoYWRvdzogMCAwIDAgMnB4IGJsYWNrIGluc2V0O1xuICAgIG92ZXJmbG93OmF1dG87XG4gICAgd2lkdGg6IDk4JTsgXG4gICAgZmxvYXQ6IGxlZnQ7IFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNjcsIDIzNywgMjU1KTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cbiNhYm91dHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4OyAgIFxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDJweCBibGFjayBpbnNldDtcbiAgICBvdmVyZmxvdzphdXRvO1xuICAgIHdpZHRoOiA5OCU7IFxuICAgIGZsb2F0OiBsZWZ0OyBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTY3LCAyMzcsIDI1NSk7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5idXR0b24ge1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuI25ld1VzZXJ7XG4gICAgcGFkZGluZy10b3A6IDQwcHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-main",
                templateUrl: "./main.component.html",
                styleUrls: ["./main.component.css"],
            }]
    }], function () { return [{ type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"] }]; }, null); })();


/***/ }),

/***/ "yCCQ":
/*!************************************************************************!*\
  !*** ./src/app/display-all-subjects/display-all-subjects.component.ts ***!
  \************************************************************************/
/*! exports provided: DisplayAllSubjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayAllSubjectsComponent", function() { return DisplayAllSubjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_request_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/request.service */ "F8sd");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function DisplayAllSubjectsComponent_li_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const x_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", x_r1.subject, " : ", x_r1.className, "");
} }
class DisplayAllSubjectsComponent {
    constructor(service) {
        this.service = service;
    }
    ngOnInit() {
    }
    displaySubjects() {
        this.service.getSubjects().subscribe(e => {
            this.courses = e;
        });
        return this.courses;
    }
    hideSubjects() {
        this.service.getSubjects().subscribe(e => {
            this.courses = [];
        });
        return this.courses;
    }
}
DisplayAllSubjectsComponent.ɵfac = function DisplayAllSubjectsComponent_Factory(t) { return new (t || DisplayAllSubjectsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_request_service__WEBPACK_IMPORTED_MODULE_1__["RequestService"])); };
DisplayAllSubjectsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DisplayAllSubjectsComponent, selectors: [["app-display-all-subjects"]], decls: 9, vars: 1, consts: [["id", "subjectList"], ["mat-raised-button", "", 3, "click"], ["id", "allSubjects"], [4, "ngFor", "ngForOf"]], template: function DisplayAllSubjectsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Subject List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DisplayAllSubjectsComponent_Template_button_click_3_listener() { return ctx.displaySubjects(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Display All Subjects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DisplayAllSubjectsComponent_Template_button_click_5_listener() { return ctx.hideSubjects(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Hide Subjects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DisplayAllSubjectsComponent_li_8_Template, 2, 2, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.courses);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: ["#subjectList[_ngcontent-%COMP%] {  \n    box-shadow: 0 0 0 2px black inset;\n    overflow:auto;\n    width: 50%; \n    float: right; \n    background-color: rgb(167, 237, 255); \n    height: 400px;\n}\n\nbutton[_ngcontent-%COMP%] {\n    margin-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3BsYXktYWxsLXN1YmplY3RzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQ0FBaUM7SUFDakMsYUFBYTtJQUNiLFVBQVU7SUFDVixZQUFZO0lBQ1osb0NBQW9DO0lBQ3BDLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckIiLCJmaWxlIjoiZGlzcGxheS1hbGwtc3ViamVjdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNzdWJqZWN0TGlzdCB7ICBcbiAgICBib3gtc2hhZG93OiAwIDAgMCAycHggYmxhY2sgaW5zZXQ7XG4gICAgb3ZlcmZsb3c6YXV0bztcbiAgICB3aWR0aDogNTAlOyBcbiAgICBmbG9hdDogcmlnaHQ7IFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNjcsIDIzNywgMjU1KTsgXG4gICAgaGVpZ2h0OiA0MDBweDtcbn1cblxuYnV0dG9uIHtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DisplayAllSubjectsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-display-all-subjects',
                templateUrl: './display-all-subjects.component.html',
                styleUrls: ['./display-all-subjects.component.css']
            }]
    }], function () { return [{ type: src_app_request_service__WEBPACK_IMPORTED_MODULE_1__["RequestService"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map