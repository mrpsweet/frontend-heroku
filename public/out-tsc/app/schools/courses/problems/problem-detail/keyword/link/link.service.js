var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Subject } from "rxjs";
import { environment } from "../../../../../../../environments/environment";
import { Http } from "@angular/http";
import { KeywordService } from "../keyword.service";
var initialLinks = {};
export var LinkService = (function () {
    function LinkService(http, keywordService) {
        var _this = this;
        this.http = http;
        this.keywordService = keywordService;
        this.index = new Subject();
        this.operations = new Subject();
        this.allLinks = this.operations
            .scan(function (links, operation) {
            return operation(links);
        }, initialLinks);
        this.index
            .flatMap(function (keywordId) {
            var url = environment.apiEndpoint + "/keywords/" + keywordId + "/links";
            return _this.http
                .get(url)
                .map(_this.extractData)
                .map(function (links) { return ({ links: links, keywordId: keywordId }); });
        })
            .map(function (_a) {
            var links = _a.links, keywordId = _a.keywordId;
            return function (oldLinks) {
                var keywordLinks = {};
                keywordLinks[keywordId] = links;
                return Object.assign({}, oldLinks, keywordLinks);
            };
        })
            .subscribe(this.operations);
        keywordService
            .keywordsObservable()
            .subscribe(function (keywords) {
            keywords.forEach(function (keyword) {
                _this.index.next(keyword.id);
            });
        });
    }
    LinkService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    LinkService.prototype.linksObservable = function (keywordId) {
        return this.allLinks.map(function (allLinks) { return allLinks[keywordId]; });
    };
    LinkService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [Http, KeywordService])
    ], LinkService);
    return LinkService;
}());
//# sourceMappingURL=/Users/harryliu/Documents/projects/cover/frontend/src/app/schools/courses/problems/problem-detail/keyword/link/link.service.js.map