var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
export var BreadcrumbComponent = (function () {
    function BreadcrumbComponent() {
    }
    __decorate([
        Input(), 
        __metadata('design:type', Array)
    ], BreadcrumbComponent.prototype, "navLocations", void 0);
    BreadcrumbComponent = __decorate([
        Component({
            selector: 'app-breadcrumb',
            templateUrl: './breadcrumb.component.html',
            styleUrls: ['./breadcrumb.component.sass']
        }), 
        __metadata('design:paramtypes', [])
    ], BreadcrumbComponent);
    return BreadcrumbComponent;
}());
//# sourceMappingURL=/Users/harryliu/Documents/projects/cover/frontend/src/app/shared/breadcrumb/breadcrumb.component.js.map