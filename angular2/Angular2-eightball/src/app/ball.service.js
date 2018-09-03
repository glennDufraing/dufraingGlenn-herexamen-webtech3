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
var question_1 = require("./question");
var BallService = (function () {
    function BallService() {
        this.answers = ["It is certain",
            "It is decidedly so",
            "Without a doubt.",
            "yes - definitely.",
            "You may rely on it.",
            "As I see it, yes.",
            "Most likely.",
            "Outlook good.",
            "Yes.",
            "Signs point to yes.",
            "Reply hazy, try again",
            "Ask again later.",
            "Better not tell you now.",
            "Cannot predict now.",
            "Concentrate and ask again.",
            "Don't count on it.",
            "My reply is no.",
            "My sources say no",
            "Outlook not so good.",
            "Very doubtful."];
    }
    BallService.prototype.getAnswer = function (question) {
        var answer = this.answers[Math.floor(Math.random() * this.answers.length)];
        var newQuestion = new question_1.Question(question, answer);
        return newQuestion;
    };
    return BallService;
}());
BallService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], BallService);
exports.BallService = BallService;
//# sourceMappingURL=ball.service.js.map