function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("bt" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// create questions
var questions = [
    new Question("Inside which HTML element do we put the JavaScript?", ["js", "script","javascript", "scripting"], "script"),

    new Question("What is the correct place to add javascript?", ["The body tag", "The head tag","Above both", "None"], "The <body> tag"),
    

    new Question("The external JavaScript file must contain the <script> tag,", ["True", "False","Might be","None"], "False"),
    

    new Question("How do you write 'Hello World' in an alert box?", ["alert('Hello World');", "alertbox('Hello World');","msg('Hello World');", "msgBox('Hello World');"], "alert('Hello World');"),
        
    new Question("How do you call a function named 'myFunction'?", ["call myfunction();", "myfunction()","call function myfunction();", "function myfunction();"], "myfunction();"),

    new Question("How to write an IF statement in JavaScript?", ["if i==5","if (i==5)","if i ===5","if i==5 then"],"if (i==5)"),

    new Question("How does a WHILE loop start?",["while i=1 to 10","while(i<=1;i++)","while(i<=10)","while i=1,10"],"while(i<=10)"),

    new Question("How to make comment in javascript?",["'This is comment'","<!--This is comment-->","//This is comment","/This is comment"],"//This is comment")
];


var quiz = new Quiz(questions);


populate();
