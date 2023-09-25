function Question(text, choices, answer) {
  this.text = text;
  this.choices = choices;
  this.answer = answer;
}

var questions = [
  new Question("Which type of JavaScript language is ___", ["Object-Oriented", "Object-based", "Assembly-based", "High-level"], "Object-based"),
  new Question("Which one of the following also known as Conditional Expression:", ["Alternative to if-else", "Switch statement", "If-then-else statement", "immediate if"], "immediate if"),
  new Question("Which of the following variables takes precedence over the others if the names are the same?", ["Global variable", "The local element", "The two of the above", "None of the above"], "The local element"),
  new Question("The function and var are known as:", ["Keywords", "Data types", "Declaration statements", "prototypes"], "Declaration statements"),
  new Question("Which one of the following is the correct way for calling the JavaScript code?", ["Preprocessor", "Triggering Event", "RMI", "Function/Method"], "Function/Method")
];

var questionElement = document.getElementById("question");

  var choiceElements =[
    document.getElementById("choice0"),
    document.getElementById("choice1"),
    document.getElementById("choice2"),
    document.getElementById("choice3"),
  ];

  var progressElement = document.getElementById("progress");

var currentQuestionIndex = 0;
var score = 0;
var isQuizEnded = false;


function showQuestion(questionIndex) {
  if(isQuizEnded){
    showScores();
  }else{

    var currentQuestion = questions[questionIndex];

    questionElement.innerHTML = currentQuestion.text;

  for (let i = 0; i < currentQuestion.choices.length; i++) {
    choiceElements[i].innerHTML = currentQuestion.choices[i];
  }

  progressElement.textContent = "Question " + (questionIndex + 1) + " of " + questions.length;
  checkAnswer(currentQuestionIndex);

}
  
};



function endQuiz() {
  isQuizEnded = true;
  showScores();
};

function showScores() {
  var gameOverHTML = "<h1>Result</h1>";
  gameOverHTML += "<h2 id='score'> Your scores: " + score + ".And mark percentage is: "+(score/questions.length*100)+"%"+"</h2>";
  var element = document.getElementById("quiz");
  element.innerHTML = gameOverHTML;
};

function checkAnswer(questionIndex) {
  var currentQuestion = questions[questionIndex];
  for (var i = 0; i < currentQuestion.choices.length; i++) {
    choiceElements[i].onclick = function () {
      if (this.innerHTML === currentQuestion.answer) {
        score++;
      }
      currentQuestionIndex++;
      if (currentQuestionIndex < questions.length) {
        showQuestion(currentQuestionIndex);
      } else {
        endQuiz();
      }
    };
  }
};



showQuestion(currentQuestionIndex);
