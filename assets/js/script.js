// var answerCounter = 0;
var startButton = document.querySelector("#start-button");
 var questionDisplay = document.querySelector("#main-header");
// var answerDisplayEl = document.querySelector("#answer-options");

 var questionObject = [
   
 {   question: "what is a Boolean?",
     answers: ["true", "false", "both"],
     correct: "3"
 },

 {   question: "What does HTML stand for?",
     answers: ["Hypertext Markup Language", 
                 "Happy Times Meeting Lobbyists", 
                "Hens Train Male Llamas",
                "Hyper Test Markdown Language"],
    correct: "1"
},
{   question: "Which answer is the 'not' operator",
    answers: ["null", "&", "Na", "!"],
    correct: "4"
},

{   question: "Which one is not a primitive data-type in javascript",
    answers: ["string", "float", "boolean", "number"],
    correct: "2"
}
];


 var startQuiz = function() {
     nextQuestion();
// //var quizQuestionEl = document.createElement("div");
// //quizQuestionEl.className = "questions";

// //var q2El = document.createElement("h1");
// questionDisplay.textContent = questionObject[0].question1;

// //quizQuestionEl.appendChild(q2El);



// //var quizAnswersEl = document.createElement("li");
// //quizAnswersEl.className = "answer-list";
// //quizAnswersEl.setAttribute("data-id", answerCounter)

// var quizAnswersEl = document.createElement("li");
// quizAnswersEl.className = "answer-list";
// quizAnswersEl.setAttribute("data-id", answerCounter);
// answerDisplayEl.appendChild(quizAnswersEl);
// var finalList = quizAnswersEl.textContent

// for (var i = 0; i < 4; i++) {
    
//     finalList = questionObject[0].answers1[i];
//     console.log(quizAnswersEl);
//     answerCounter++;

 }

var nextQuestion = function() {

}

var select = function(){

}






// //var answerInfo = document.createElement("div");
// //answerInfo.className = "answer-info";

// //answerDisplayEl.textContent = questionObject[0].answers1 ;
// //quizAnswersEl.appendChild(answerInfo);

// }

startButton.addEventListener("click", startQuiz);

