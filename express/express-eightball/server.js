const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var LocalStorage = require('node-localstorage').LocalStorage,
localStorage = new LocalStorage('./scratch');

if (typeof localStorage === "undefined" || localStorage === null) {
  var LocalStorage = require('node-localstorage').LocalStorage;
  localStorage = new LocalStorage('./scratch');
}

app.listen(process.env.PORT || 3000, () => {
  console.log('Listening on port 3000');
});

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static('public'));

var answers = ["It is certain",
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


app.get('/', (req, res) => {
    // renders index.ejs
    res.render('index.ejs',{"answer":""});

})
app.post('/',(req,res) =>{
    var question = req.body.question;
    var answer;

    if (localStorage.getItem(question) === null) {
        answer = answers[Math.floor(Math.random() * answers.length)];
        localStorage.setItem(question, answer);
    } else {
        answer = localStorage.getItem(question);
    }
    res.render('index.ejs', { "answer": answer,"question":question });
})
