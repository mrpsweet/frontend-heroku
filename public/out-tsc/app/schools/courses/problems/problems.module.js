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
import { CommonModule } from "@angular/common";
import { ProblemListComponent } from './problem-list/problem-list.component';
import { ThumbnailComponent } from './problem-list/problem-row/problem-row.component';
import { HttpModule } from "@angular/http";
import { ProblemDetailComponent } from './problem-detail/problem-detail.component';
import { ProblemHeaderComponent } from './problem-detail/problem-header/problem-header.component';
import { ProblemBodyComponent } from './problem-detail/problem-body/problem-body.component';
import { HighlightPipe } from "./problem-detail/problem-body/highlight.pipe";
import { KeywordComponent } from './problem-detail/keyword/keyword.component';
import { LinkComponent } from './problem-detail/keyword/link/link.component';
import { VotesComponent } from './problem-detail/keyword/link/votes/votes.component';
import { LinkiconPipe } from './problem-detail/keyword/link/linkicon.pipe';
import { SharedModule } from "../../../shared/shared.module";
import { CoursesSharedModule } from "../shared/shared.module";
import { ProblemsRoutingModule } from "./problems-routing.module";
export var ProblemsModule = (function () {
    function ProblemsModule() {
    }
    ProblemsModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                HttpModule,
                SharedModule,
                CoursesSharedModule,
                ProblemsRoutingModule
            ],
            declarations: [
                ProblemListComponent,
                ThumbnailComponent,
                ProblemDetailComponent,
                ProblemHeaderComponent,
                ProblemBodyComponent,
                KeywordComponent,
                LinkComponent,
                VotesComponent,
                LinkiconPipe,
                HighlightPipe
            ],
            providers: [
                { provide: HighlightPipe, useClass: HighlightPipe }
            ],
            exports: [
                ProblemListComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], ProblemsModule);
    return ProblemsModule;
}());
//# sourceMappingURL=/Users/harryliu/Documents/projects/cover/frontend/src/app/schools/courses/problems/problems.module.js.map