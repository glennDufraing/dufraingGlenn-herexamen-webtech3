"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var ball_service_1 = require("./ball.service");
var question_1 = require("./question");
var AppComponent = (function () {
    function AppComponent(ballService) {
        this.ballService = ballService;
        this.model = '';
    }
    AppComponent.prototype.onSubmit = function () {
        if (localStorage.getItem(this.model) === null) {
            this.question = this.ballService.getAnswer(this.model);
            localStorage.setItem(this.question.question, this.question.answer);
        }
        else {
            this.question = new question_1.Question(this.model, localStorage.getItem(this.model));
        }
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: './app.component.html'
    }),
    __metadata("design:paramtypes", [ball_service_1.BallService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map