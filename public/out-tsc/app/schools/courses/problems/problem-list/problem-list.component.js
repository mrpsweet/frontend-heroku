var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from "@angular/core";
import { ProblemService } from "../shared/problem.service";
import { ActivatedRoute } from "@angular/router";
import { SchoolService } from "../../../shared/school.service";
import { CourseService } from "../../shared/course.service";
export var ProblemListComponent = (function () {
    function ProblemListComponent(schoolService, courseService, problemService, route) {
        this.schoolService = schoolService;
        this.courseService = courseService;
        this.problemService = problemService;
        this.route = route;
    }
    ProblemListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.problemService.problemsObservable().subscribe(function (problems) { return _this.problems = problems; });
        this.schoolService
            .currentSchoolObservable()
            .combineLatest(this.courseService.currentCourseObservable(), function (school, course) { return ({ school: school, course: course }); })
            .subscribe(function (schoolCourse) {
            if (schoolCourse.school != null && schoolCourse.course != null) {
                _this.navLocation = [
                    {
                        title: schoolCourse.school.acronym,
                        route: "/schools/" + schoolCourse.school.id + "/courses"
                    },
                    {
                        title: schoolCourse.course.title,
                        route: "/schools/" + schoolCourse.school.id + "/courses/" + schoolCourse.course.id + "/problems"
                    }
                ];
            }
        });
        this.route.params
            .subscribe(function (params) {
            _this.schoolService.getSchool(params['schoolId']);
            _this.courseService.getCourse(params['courseId']);
        });
    };
    ProblemListComponent.prototype.setCurrentProblem = function (problem) {
        this.problemService.setCurrentProblem(problem);
    };
    ProblemListComponent = __decorate([
        Component({
            selector: 'app-problem-list',
            templateUrl: './problem-list.component.html',
            styleUrls: ['./problem-list.component.sass']
        }), 
        __metadata('design:paramtypes', [SchoolService, CourseService, ProblemService, ActivatedRoute])
    ], ProblemListComponent);
    return ProblemListComponent;
}());
//# sourceMappingURL=/Users/harryliu/Documents/projects/cover/frontend/src/app/schools/courses/problems/problem-list/problem-list.component.js.map