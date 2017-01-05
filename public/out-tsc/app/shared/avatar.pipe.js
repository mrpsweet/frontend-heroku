var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Pipe } from '@angular/core';
import { Md5 } from "ts-md5/dist/md5";
export var AvatarPipe = (function () {
    function AvatarPipe() {
    }
    AvatarPipe.prototype.transform = function (email, size) {
        if (size === void 0) { size = 100; }
        var e = email.trim().toLowerCase();
        var md5 = new Md5();
        md5.appendStr(e);
        return "https://www.gravatar.com/avatar/" + md5.end() + "?s=" + size;
    };
    AvatarPipe = __decorate([
        Pipe({
            name: 'avatar'
        }), 
        __metadata('design:paramtypes', [])
    ], AvatarPipe);
    return AvatarPipe;
}());
//# sourceMappingURL=/Users/harryliu/Documents/projects/cover/frontend/src/app/shared/avatar.pipe.js.map