import { Component } from '@angular/core';
import { BallService } from './ball.service';
import { Question } from './question';
@Component({
   selector: 'my-app',
   templateUrl: './app.component.html'
})

export class AppComponent {

    question: Question;
    model='';
    constructor(private ballService: BallService) { }

    onSubmit() {
        if (localStorage.getItem(this.model) === null) {
            this.question = this.ballService.getAnswer(this.model);
            localStorage.setItem(this.question.question,this.question.answer);
        } else {
            this.question = new Question(this.model, localStorage.getItem(this.model));
        }

    }
}
