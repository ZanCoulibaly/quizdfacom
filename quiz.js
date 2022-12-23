//Question bank
var questionBank = [{
        question: 'Quelle est la date de création du DFA ?',
        option: ['2002', '1987', '1997', '2012'],
        answer: '1997'
    },
    {
        question: 'Choix la bonne signification du DFA',
        option: ['Diallo et Fall Communication', 'Diop et Fall Associé', 'Diallo et Fane Association', 'Dramane et Fatou Communication'],
        answer: 'Diop et Fall Associé'
    },
    {
        question: 'Choix la bonne reponse',
        option: ['DFA est une entreprise de recrutement', 'DFA est une entreprise de communication', 'DFA est une entreprise commercial des produits hydrocarburant', 'DFA est une chaîne télévision privé'],
        answer: 'DFA est une entreprise de communication'
    },
    {
        question: 'Où est situé DFA ?',
        option: ['Au Sité de Niger P235 R52', 'Kalaban coura près du station total', 'Sotuba ACI', 'Hamdallaye ACI 2000'],
        answer: 'Hamdallaye ACI 2000'
    },
    {
        question: 'Choix la bonne reponse',
        option: ['DFA organise des evenement', 'DFA vend des voitures tout neuf', 'DFA évolue dans le domaine de transport des colis', "DFA est un laboratoire d'\analyse"],
        answer: 'DFA organise des evenement'
    }
]

var question = document.getElementById('question');
var quizContainer = document.getElementById('quiz-container');
var scorecard = document.getElementById('scorecard');
var option0 = document.getElementById('option0');
var option1 = document.getElementById('option1');
var option2 = document.getElementById('option2');
var option3 = document.getElementById('option3');
var next = document.querySelector('.next');
var points = document.getElementById('score');
var span = document.querySelectorAll('span');
var i = 0;
var score = 0;

//function to display questions
function displayQuestion() {
    for (var a = 0; a < span.length; a++) {
        span[a].style.background = 'none';
    }
    question.innerHTML = 'Q.' + (i + 1) + ' ' + questionBank[i].question;
    option0.innerHTML = questionBank[i].option[0];
    option1.innerHTML = questionBank[i].option[1];
    option2.innerHTML = questionBank[i].option[2];
    option3.innerHTML = questionBank[i].option[3];
    stat.innerHTML = "Question" + ' ' + (i + 1) + ' ' + 'sur' + ' ' + questionBank.length;
}

//function to calculate scores
function calcScore(e) {
    if (e.innerHTML === questionBank[i].answer && score < questionBank.length) {
        score = score + 1;
        document.getElementById(e.id).style.background = 'green';
    } else {
        document.getElementById(e.id).style.background = 'red';
    }
    setTimeout(nextQuestion, 3000);
}

//function to display next question
function nextQuestion() {
    if (i < questionBank.length - 1) {
        i = i + 1;
        displayQuestion();
    } else {
        points.innerHTML = score + '/' + questionBank.length;
        quizContainer.style.display = 'none';
        scoreboard.style.display = 'block'
    }
}

//click events to next button
next.addEventListener('click', nextQuestion);

//Back to Quiz button event
function backToQuiz() {
    location.reload();
}

//function to check Answers
function checkAnswer() {
    var answerBank = document.getElementById('answerBank');
    var answers = document.getElementById('answers');
    answerBank.style.display = 'block';
    scoreboard.style.display = 'none';
    for (var a = 0; a < questionBank.length; a++) {
        var list = document.createElement('li');
        list.innerHTML = questionBank[a].answer;
        answers.appendChild(list);
    }
}


displayQuestion();