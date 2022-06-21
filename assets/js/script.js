// var answerCounter = 0;
var startButton = document.querySelector("#start-button");
 var questionDisplay = document.querySelector("#main-header");
 var answerDisplayEl = document.querySelector("#answers");
 var questionNum = 0;
 
 var questionObject = [
   
 {   question: "what is a Boolean?",
     answers: [{text: "true", correct: false },
     {text: "false", correct: false },
     {text: "both", correct: true }],
     
 },

 {   question: "What does HTML stand for?",
     answers: [{text:"Hypertext Markup Language", correct: true}, 
     {text:"Happy Times Meeting Lobbyists", correct: false}, 
     {text:"Hens Train Male Llamas", correct: false},
     {text:"Hyper Test Markdown Language", correct: false}],
},
{   question: "Which answer is the 'not' operator",
    answers: [{text:"null", correct: false}, 
            {text:"&", correct: false}, 
            {text:"Na", correct: false}, 
            {text:"!", correct: true}],
},

{   question: "Which one is not a primitive data-type in javascript",
    answers: [{text:"string", correct: false},
            {text:"float", correct: true}, 
            {text:"boolean", correct: false}, 
            {text:"number", correct: false}],
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
  show(questionObject[questionNum]);
  
}

var show = function(question) {
    questionDisplay.innerText = question.question;
    question.answers.forEach(answer => {
        var answerButton = document.createElement("button");
        answerButton.innerHTML = answer.text;
        if(answer.correct) {
            answerButton.dataset.correct = answer.correct;
        }
        startButton.classList.add('button');
        
        startButton.addEventListener("click", select);
        answerDisplayEl.appendChild(answerButton);


    })
}

var select = function(){

}






// //var answerInfo = document.createElement("div");
// //answerInfo.className = "answer-info";

// //answerDisplayEl.textContent = questionObject[0].answers1 ;
// //quizAnswersEl.appendChild(answerInfo);

// }

startButton.addEventListener("click", startQuiz);

