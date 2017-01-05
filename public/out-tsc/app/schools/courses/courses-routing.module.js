var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CourseListComponent } from "./course-list/course-list.component";
/**
 * Created by harryliu on 12/25/16.
 */
var courseRoutes = [
    { path: 'courses', children: [
            { path: '', component: CourseListComponent },
            { path: ':courseId', loadChildren: 'app/schools/courses/problems/problems.module#ProblemsModule' }
        ] }
];
export var CoursesRoutingModule = (function () {
    function CoursesRoutingModule() {
    }
    CoursesRoutingModule = __decorate([
        NgModule({
            imports: [
                RouterModule.forChild(courseRoutes)
            ],
            exports: [
                RouterModule
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], CoursesRoutingModule);
    return CoursesRoutingModule;
}());
//# sourceMappingURL=/Users/harryliu/Documents/projects/cover/frontend/src/app/schools/courses/courses-routing.module.js.map