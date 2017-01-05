var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from "@angular/core";
import { LinkService } from "./link/link.service";
export var KeywordComponent = (function () {
    function KeywordComponent(linkService) {
        this.linkService = linkService;
        this.links = [];
    }
    KeywordComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.linksStream = this.linkService.linksObservable(this.keyword.id);
        this.linksStream
            .subscribe(function (links) {
            if (links)
                _this.links = links;
        });
    };
    KeywordComponent.prototype.sortedLinks = function () {
        var _this = this;
        return this.links.sort(function (a, b) { return _this.getScore(b) - _this.getScore(a); });
    };
    KeywordComponent.prototype.getScore = function (link) {
        return (link.upvotes + link.downvotes) * (link.upvotes - link.downvotes);
    };
    __decorate([
        Input(), 
        __metadata('design:type', Object)
    ], KeywordComponent.prototype, "keyword", void 0);
    KeywordComponent = __decorate([
        Component({
            selector: 'app-keyword',
            templateUrl: './keyword.component.html',
            styleUrls: ['./keyword.component.sass']
        }), 
        __metadata('design:paramtypes', [LinkService])
    ], KeywordComponent);
    return KeywordComponent;
}());
//# sourceMappingURL=/Users/harryliu/Documents/projects/cover/frontend/src/app/schools/courses/problems/problem-detail/keyword/keyword.component.js.map