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
import { CoursesRoutingModule } from "./courses-routing.module";
import { CourseListComponent } from './course-list/course-list.component';
import { SharedModule } from "../../shared/shared.module";
import { CourseRowComponent } from './course-row/course-row.component';
import { CoursesSharedModule } from "./shared/shared.module";
/**
 * Created by harryliu on 12/25/16.
 */
export var CoursesModule = (function () {
    function CoursesModule() {
    }
    CoursesModule = __decorate([
        NgModule({
            declarations: [
                CourseListComponent,
                CourseRowComponent
            ],
            imports: [
                SharedModule,
                CoursesSharedModule,
                CoursesRoutingModule
            ],
            exports: [
                CourseListComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], CoursesModule);
    return CoursesModule;
}());
//# sourceMappingURL=/Users/harryliu/Documents/projects/cover/frontend/src/app/schools/courses/courses.module.js.map