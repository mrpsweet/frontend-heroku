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
export var UserService = (function () {
    function UserService() {
    }
    UserService.prototype.getAllUsers = function () {
        return undefined;
    };
    UserService.prototype.signIn = function (email, password) {
    };
    UserService.prototype.signUp = function (user) {
    };
    UserService.prototype.signOut = function (user) {
    };
    UserService.prototype.modify = function (user) {
    };
    UserService.prototype.deleteAccount = function (user) {
    };
    UserService.prototype.getUser = function () {
    };
    UserService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [])
    ], UserService);
    return UserService;
}());
//# sourceMappingURL=/Users/harryliu/Documents/projects/cover/frontend/src/app/shared/user.service.js.map