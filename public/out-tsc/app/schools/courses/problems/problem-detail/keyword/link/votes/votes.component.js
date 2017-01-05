var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, ViewEncapsulation } from '@angular/core';
var State;
(function (State) {
    State[State["upVoted"] = 0] = "upVoted";
    State[State["downVoted"] = 1] = "downVoted";
    State[State["not"] = 2] = "not";
})(State || (State = {}));
export var VotesComponent = (function () {
    function VotesComponent() {
        this.state = State.not;
    }
    VotesComponent.prototype.ngOnInit = function () {
    };
    VotesComponent.prototype.onDownvote = function () {
        switch (this.state) {
            case State.upVoted:
                this.upvotes--;
                this.downvotes++;
                this.state = State.downVoted;
                break;
            case State.downVoted:
                this.downvotes--;
                this.state = State.not;
                break;
            case State.not:
                this.downvotes++;
                this.state = State.downVoted;
                break;
        }
    };
    VotesComponent.prototype.onUpvote = function () {
        switch (this.state) {
            case State.upVoted:
                this.upvotes--;
                this.state = State.not;
                break;
            case State.downVoted:
                this.downvotes--;
                this.upvotes++;
                this.state = State.upVoted;
                break;
            case State.not:
                this.upvotes++;
                this.state = State.upVoted;
                break;
        }
    };
    __decorate([
        Input(), 
        __metadata('design:type', Number)
    ], VotesComponent.prototype, "upvotes", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', Number)
    ], VotesComponent.prototype, "downvotes", void 0);
    VotesComponent = __decorate([
        Component({
            selector: 'app-votes',
            templateUrl: './votes.component.html',
            styleUrls: ['./votes.component.sass'],
            encapsulation: ViewEncapsulation.Native
        }), 
        __metadata('design:paramtypes', [])
    ], VotesComponent);
    return VotesComponent;
}());
//# sourceMappingURL=/Users/harryliu/Documents/projects/cover/frontend/src/app/schools/courses/problems/problem-detail/keyword/link/votes/votes.component.js.map