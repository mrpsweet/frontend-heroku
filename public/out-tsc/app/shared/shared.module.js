var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { NgModule } from "@angular/core";
import { FromNowPipe } from "./from-now.pipe";
import { AvatarPipe } from './avatar.pipe';
import { FormsModule } from "@angular/forms";
import { NavComponent } from "./topbar/topbar.component";
import { BreadcrumbComponent } from "./breadcrumb/breadcrumb.component";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { TagsComponent } from './tags/tags.component';
import { ThumbnailComponent } from './thumbnail/thumbnail.component';
import { CircularLoaderComponent } from './circular-spinner/circular-spinner.component';
import { SubmitLinkPopupComponent } from './submit-link-popup/submit-link-popup.component';
export var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        NgModule({
            imports: [FormsModule, RouterModule, CommonModule],
            declarations: [
                FromNowPipe,
                AvatarPipe,
                NavComponent,
                BreadcrumbComponent,
                TagsComponent,
                ThumbnailComponent,
                CircularLoaderComponent,
                SubmitLinkPopupComponent
            ],
            exports: [
                CommonModule,
                FromNowPipe,
                AvatarPipe,
                FormsModule,
                NavComponent,
                TagsComponent,
                BreadcrumbComponent,
                ThumbnailComponent,
                CircularLoaderComponent,
                SubmitLinkPopupComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], SharedModule);
    return SharedModule;
}());
//# sourceMappingURL=/Users/harryliu/Documents/projects/cover/frontend/src/app/shared/shared.module.js.map