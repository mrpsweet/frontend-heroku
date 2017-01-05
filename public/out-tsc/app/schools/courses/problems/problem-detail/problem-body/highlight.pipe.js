var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Pipe } from "@angular/core";
export var HighlightPipe = (function () {
    function HighlightPipe() {
    }
    HighlightPipe.prototype.transform = function (problemBody, keywords) {
        var _this = this;
        keywords.sort(function (v1, v2) { return v1.start - v2.start; });
        //create an empty list
        var htmlParts = [];
        //loop
        var lastIndex = 0;
        keywords.forEach(function (keyword, index) {
            htmlParts.push(problemBody.substring(lastIndex, keyword.start));
            _this.formatKeyword(htmlParts, problemBody.substr(keyword.start, keyword.length), keyword, index);
            lastIndex = keyword.start + keyword.length;
        });
        htmlParts.push(problemBody.substring(lastIndex, problemBody.length));
        return htmlParts.join('');
    };
    HighlightPipe.prototype.formatKeyword = function (htmlParts, text, keyword, index) {
        if (!keyword.selected) {
            htmlParts.push("<a data-keyword-id=\"" + keyword.id + "\" href=\"" + keyword.bestLinkUrl + "\" target=\"_blank\">");
            htmlParts.push(text + "[" + (index + 1) + "]");
            htmlParts.push("</a>");
        }
        else {
            htmlParts.push("<span class=\"selected\">");
            htmlParts.push(text);
            htmlParts.push("</span>");
        }
    };
    HighlightPipe = __decorate([
        Pipe({
            name: "highlight"
        }), 
        __metadata('design:paramtypes', [])
    ], HighlightPipe);
    return HighlightPipe;
}());
//# sourceMappingURL=/Users/harryliu/Documents/projects/cover/frontend/src/app/schools/courses/problems/problem-detail/problem-body/highlight.pipe.js.map