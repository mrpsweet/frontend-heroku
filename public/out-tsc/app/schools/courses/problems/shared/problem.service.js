var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from "@angular/core";
import { Subject, BehaviorSubject } from "rxjs";
import { environment } from "../../../../../environments/environment";
import { Http } from "@angular/http";
import { CourseService } from "../../shared/course.service";
var initialProblems = [];
export var ProblemService = (function () {
    function ProblemService(http, courseService) {
        var _this = this;
        this.http = http;
        this.courseService = courseService;
        this.currentProblem = new BehaviorSubject(null);
        this.currentProblemId = new BehaviorSubject(null);
        this.operations = new Subject();
        this.index = new Subject();
        this.show = new Subject();
        this.problems = this.operations
            .scan(function (problems, operation) {
            return operation(problems);
        }, initialProblems)
            .publishReplay(1)
            .refCount();
        this.index
            .map(function (courseId) { return (environment.apiEndpoint + "/courses/" + courseId + "/problems"); })
            .flatMap(function (requestUrl) { return _this.http.get(requestUrl); })
            .map(this.extractData)
            .map(function (newProblems) {
            return function (problems) { return newProblems; };
        })
            .subscribe(this.operations);
        courseService.currentCourseObservable()
            .subscribe(function (course) {
            if (course) {
                _this.index.next(course.id);
            }
        });
        this.show
            .map(function (problemId) { return (environment.apiEndpoint + "/problems/" + problemId); })
            .flatMap(function (requestUrl) { return _this.http.get(requestUrl); })
            .map(this.extractData)
            .subscribe(this.currentProblem);
        this.currentProblemId
            .subscribe(function (problemId) {
            if (problemId) {
                _this.show.next(problemId);
            }
        });
    }
    ProblemService.prototype.problemsObservable = function () {
        return this.problems;
    };
    ProblemService.prototype.currentProblemObservable = function () {
        return this.currentProblem;
    };
    ProblemService.prototype.setCurrentProblem = function (problem) {
        this.currentProblemId.next(problem.id);
    };
    ProblemService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    ProblemService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [Http, CourseService])
    ], ProblemService);
    return ProblemService;
}());
//# sourceMappingURL=/Users/harryliu/Documents/projects/cover/frontend/src/app/schools/courses/problems/shared/problem.service.js.map