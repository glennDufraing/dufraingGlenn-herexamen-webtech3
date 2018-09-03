"use strict";
var Question = (function () {
    function Question(question, answer) {
        this.question = question;
        this.answer = answer;
    }
    Question.prototype.toForm = function () {
        return "question=" + this.question + "&answer=" + this.answer;
    };
    return Question;
}());
exports.Question = Question;
//# sourceMappingURL=question.js.map