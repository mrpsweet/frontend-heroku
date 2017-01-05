var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, ElementRef, ViewEncapsulation, HostListener, ViewChild, Output, EventEmitter } from '@angular/core';
import { setTimeout } from "timers";
import { HighlightPipe } from "./highlight.pipe";
export var ProblemBodyComponent = (function () {
    function ProblemBodyComponent(el, highlightPipe) {
        this.el = el;
        this.highlightPipe = highlightPipe;
        this.onAddLink = new EventEmitter();
        this.loading = false;
    }
    ProblemBodyComponent.prototype.ngOnInit = function () {
        this.selected = false;
        this.shadowRoot = this.el.nativeElement.shadowRoot;
        this.problemBodyEl = this.shadowRoot.querySelector('#problem-body');
    };
    ProblemBodyComponent.prototype.ngOnChanges = function (changes) {
        this.updateProblemBody();
    };
    ProblemBodyComponent.prototype.updateProblemBody = function () {
        var _this = this;
        setTimeout(function () {
            _this.problemBodyEl.innerHTML = _this.highlightPipe.transform(_this.problemBody, _this.keywords);
        }, 0);
    };
    ProblemBodyComponent.prototype.getLocation = function (event) {
        // this.cancel();
        var selection = this.shadowRoot.getSelection();
        // maybe it's always 1
        if (selection.rangeCount) {
            var range = selection.getRangeAt(0);
            var length_1 = range.endOffset - range.startOffset;
            if (length_1 > 0 && range.startContainer == range.endContainer) {
                this.showPopup = true;
                this.selected = true;
                this.loading = false;
                var node = range.startContainer.parentNode;
                if (!node.attributes.getNamedItem('data-keyword-id')) {
                    var start = this.getStart(range);
                    this.editingKeyword = {
                        start: start,
                        length: length_1,
                        selected: true
                    };
                    this.keywords.push(this.editingKeyword);
                    this.keywords = Object.assign([], this.keywords);
                    var rect = range.getBoundingClientRect();
                    // Setup popup window
                    this.updatePopupPosition(rect);
                }
            }
        }
        this.updateProblemBody();
    };
    ProblemBodyComponent.prototype.updatePopupPosition = function (rect, absolutePosition) {
        if (absolutePosition === void 0) { absolutePosition = false; }
        var popup = this.submitLinkPopupComponent.el.nativeElement;
        var rectLeft = absolutePosition ? rect.left : rect.left + document.body.scrollLeft, rectTop = absolutePosition ? rect.top : rect.top + document.body.scrollTop;
        this.popupLeft = rectLeft - this.shadowRoot.host.clientLeft + (rect.width - popup.clientWidth) / 2;
        this.popupTop = rectTop - this.shadowRoot.host.clientTop - popup.clientHeight;
    };
    ProblemBodyComponent.prototype.getStart = function (range) {
        var previousNode = range.startContainer.previousSibling;
        if (previousNode) {
            // Select on new content
            var keywordId_1 = previousNode.attributes.getNamedItem('data-keyword-id').value;
            var keyword = this.keywords.filter(function (keyword) { return keyword.id == keywordId_1; })[0];
            return keyword.start + keyword.length + range.startOffset;
        }
        return range.startOffset;
    };
    ProblemBodyComponent.prototype.submitLink = function (url) {
        this.loading = true;
        this.onAddLink.next({ keyword: this.editingKeyword, url: url });
    };
    ProblemBodyComponent.prototype.closePopup = function () {
        this.showPopup = false;
        this.deselect(null);
    };
    ProblemBodyComponent.prototype.cancel = function () {
        this.submitLinkPopupComponent.clear();
        this.closePopup();
        this.loading = false;
    };
    ProblemBodyComponent.prototype.deselect = function (event) {
        if (!event || (event && !event.target.dataset.keywordId)) {
            this.keywords = this.keywords.filter(function (keyword) { return !keyword.selected; });
            this.selected = false;
            this.updateProblemBody();
        }
    };
    ProblemBodyComponent.prototype.onWindowKeypress = function (event) {
        switch (event.key) {
            case "Escape":
                this.cancel();
                break;
            case "Enter":
                break;
            default:
                if (this.showPopup)
                    this.shadowRoot.querySelector('#link-field').focus();
                break;
        }
    };
    ProblemBodyComponent.prototype.onMouseOver = function (event) {
        var element = event.target;
        if (element.dataset.keywordId) {
            this.loading = false;
            this.editingKeyword = this.keywords.filter(function (keyword) {
                return keyword.id == element.dataset.keywordId;
            })[0];
            if (this.selected)
                this.deselect(null);
            this.showPopup = true;
            this.updatePopupPosition({
                left: element.offsetLeft,
                top: element.offsetTop,
                width: element.offsetWidth,
                height: element.offsetHeight
            }, true);
        }
    };
    __decorate([
        Input(), 
        __metadata('design:type', String)
    ], ProblemBodyComponent.prototype, "problemBody", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', Array)
    ], ProblemBodyComponent.prototype, "keywords", void 0);
    __decorate([
        Output(), 
        __metadata('design:type', EventEmitter)
    ], ProblemBodyComponent.prototype, "onAddLink", void 0);
    __decorate([
        ViewChild('submitLinkPopupComponent'), 
        __metadata('design:type', Object)
    ], ProblemBodyComponent.prototype, "submitLinkPopupComponent", void 0);
    __decorate([
        HostListener('window:keydown', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], ProblemBodyComponent.prototype, "onWindowKeypress", null);
    ProblemBodyComponent = __decorate([
        Component({
            selector: 'app-problem-body',
            templateUrl: './problem-body.component.html',
            styleUrls: ['./problem-body.component.sass'],
            encapsulation: ViewEncapsulation.Native
        }), 
        __metadata('design:paramtypes', [ElementRef, HighlightPipe])
    ], ProblemBodyComponent);
    return ProblemBodyComponent;
}());
//# sourceMappingURL=/Users/harryliu/Documents/projects/cover/frontend/src/app/schools/courses/problems/problem-detail/problem-body/problem-body.component.js.map