var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ProblemService } from "../shared/problem.service";
import { CourseService } from "../../shared/course.service";
import { TermYearPipe } from "../../shared/term-year.pipe";
import { SchoolService } from "../../../shared/school.service";
import { KeywordService } from "./keyword/keyword.service";
export var ProblemDetailComponent = (function () {
    // switched order
    function ProblemDetailComponent(route, schoolService, problemService, courseService, keywordService) {
        this.route = route;
        this.schoolService = schoolService;
        this.problemService = problemService;
        this.courseService = courseService;
        this.keywordService = keywordService;
        this.keywords = [];
    }
    ProblemDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.problemService
            .currentProblemObservable()
            .subscribe(function (problem) { return _this.problem = problem; });
        this.schoolService
            .currentSchoolObservable()
            .combineLatest(this.courseService.currentCourseObservable(), this.problemService.currentProblemObservable(), function (school, course, problem) { return ({ school: school, course: course, problem: problem }); })
            .subscribe(function (value) {
            if (value.school && value.course && value.problem) {
                _this.navLocations = [
                    {
                        title: value.school.acronym,
                        route: "/schools/" + value.school.id + "/courses"
                    },
                    {
                        title: value.course.title,
                        route: "/schools/" + value.school.id + "/courses/" + value.course.id + "/problems"
                    },
                    {
                        title: value.problem.title,
                        route: "/schools/" + value.school.id + "/courses/" + value.course.id + "/problems/" + value.problem.id
                    }
                ];
            }
        });
        this.courseService
            .currentCourseObservable()
            .subscribe(function (course) {
            if (course) {
                _this.tags = [
                    course.courseNumber,
                    new TermYearPipe().transform(course.term, course.year),
                    course.instructor];
            }
        });
        this.route.params
            .subscribe(function (params) {
            _this.schoolService.getSchool(params['schoolId']);
            _this.courseService.getCourse(params['courseId']);
            _this.problemService.setCurrentProblem({ id: params['problemId'] });
        });
        this.keywordService
            .keywordsObservable()
            .subscribe(function (keywords) {
            _this.keywords = keywords;
        });
    };
    ProblemDetailComponent.prototype.getValidKeywords = function () {
        return this.keywords.filter(function (keyword) { return keyword.id; });
    };
    ProblemDetailComponent.prototype.addLink = function (data) {
        var keyword = data.keyword, url = data.url;
        console.log(keyword, url);
    };
    __decorate([
        ViewChild('problemBodyComponent'), 
        __metadata('design:type', Object)
    ], ProblemDetailComponent.prototype, "problemBodyComponent", void 0);
    ProblemDetailComponent = __decorate([
        Component({
            selector: 'app-problem-detail',
            templateUrl: './problem-detail.component.html',
            styleUrls: ['./problem-detail.component.sass']
        }), 
        __metadata('design:paramtypes', [ActivatedRoute, SchoolService, ProblemService, CourseService, KeywordService])
    ], ProblemDetailComponent);
    return ProblemDetailComponent;
}());
//# sourceMappingURL=/Users/harryliu/Documents/projects/cover/frontend/src/app/schools/courses/problems/problem-detail/problem-detail.component.js.map