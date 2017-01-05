var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CoreModule } from "./core/core.module";
import { AppRoutingModule } from "./app-routing.module";
import { StaticsModule } from "./statics/statics.module";
import { ProblemsModule } from "./schools/courses/problems/problems.module";
import { SharedModule } from "./shared/shared.module";
import { SchoolsModule } from "./schools/schools.module";
import { CoursesModule } from "./schools/courses/courses.module";
import { SchoolService } from "./schools/shared/school.service";
import { ProblemService } from "./schools/courses/problems/shared/problem.service";
import { CourseService } from "./schools/courses/shared/course.service";
import { KeywordService } from "./schools/courses/problems/problem-detail/keyword/keyword.service";
import { LinkService } from "./schools/courses/problems/problem-detail/keyword/link/link.service";
export var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                AppComponent
            ],
            imports: [
                BrowserModule,
                CoreModule,
                SharedModule,
                AppRoutingModule,
                StaticsModule,
                ProblemsModule,
                SchoolsModule,
                CoursesModule
            ],
            providers: [
                SchoolService,
                ProblemService,
                CourseService,
                KeywordService,
                LinkService
            ],
            bootstrap: [AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/harryliu/Documents/projects/cover/frontend/src/app/app.module.js.map