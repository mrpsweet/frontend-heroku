var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { NgModule } from "@angular/core";
import { TermYearPipe } from "./term-year.pipe";
/**
 * Created by harryliu on 1/3/17.
 */
export var CoursesSharedModule = (function () {
    function CoursesSharedModule() {
    }
    CoursesSharedModule = __decorate([
        NgModule({
            declarations: [
                TermYearPipe
            ],
            exports: [
                TermYearPipe
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], CoursesSharedModule);
    return CoursesSharedModule;
}());
//# sourceMappingURL=/Users/harryliu/Documents/projects/cover/frontend/src/app/schools/courses/shared/shared.module.js.map