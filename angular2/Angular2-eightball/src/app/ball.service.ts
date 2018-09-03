import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Response } from '@angular/http';
import { Question } from './question';
@Injectable()
export class BallService {
    answers = ["It is certain",
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

    constructor() { }

    getAnswer(question: string):Question {
        var answer = this.answers[Math.floor(Math.random() * this.answers.length)];

        var newQuestion = new Question(question, answer);

        return newQuestion;
    }

    

   



    
}