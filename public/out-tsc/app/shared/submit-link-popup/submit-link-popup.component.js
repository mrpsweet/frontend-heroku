var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, EventEmitter, Output, ElementRef } from '@angular/core';
export var SubmitLinkPopupComponent = (function () {
    function SubmitLinkPopupComponent(el) {
        this.el = el;
        this.onSubmitLink = new EventEmitter();
        this.onCancel = new EventEmitter();
    }
    SubmitLinkPopupComponent.prototype.ngOnInit = function () {
    };
    SubmitLinkPopupComponent.prototype.onKeyDown = function (event) {
        switch (event.key) {
            case "Enter":
                this.onSubmitLink.emit(this.url);
                break;
            case "Escape":
                this.onCancel.emit();
                break;
        }
    };
    SubmitLinkPopupComponent.prototype.clear = function () {
        this.url = '';
    };
    __decorate([
        Input(), 
        __metadata('design:type', Boolean)
    ], SubmitLinkPopupComponent.prototype, "loading", void 0);
    __decorate([
        Output(), 
        __metadata('design:type', EventEmitter)
    ], SubmitLinkPopupComponent.prototype, "onSubmitLink", void 0);
    __decorate([
        Output(), 
        __metadata('design:type', EventEmitter)
    ], SubmitLinkPopupComponent.prototype, "onCancel", void 0);
    SubmitLinkPopupComponent = __decorate([
        Component({
            selector: 'app-submit-link-popup',
            templateUrl: './submit-link-popup.component.html',
            styleUrls: ['./submit-link-popup.component.sass']
        }), 
        __metadata('design:paramtypes', [ElementRef])
    ], SubmitLinkPopupComponent);
    return SubmitLinkPopupComponent;
}());
//# sourceMappingURL=/Users/harryliu/Documents/projects/cover/frontend/src/app/shared/submit-link-popup/submit-link-popup.component.js.map