// var answerCounter = 0;
var startButton = document.querySelector("#start-button");
 var questionDisplay = document.querySelector("#main-header");
 var answerDisplayEl = document.querySelector("#answers");
 var nextButton = document.querySelector("#next-btn");
 var playerScore = 0;
 var questionNum =  0;
 var mainContent = document.querySelector('.main-content')
 
 
 var questionObject = [
   
 {   question: "what is a Boolean?",
     answers: [{text: "true", correct: false, id:0},
     {text: "false", correct: false ,id:0},
     {text: "both", correct: true , id:25},
     {text: "none", correct: false, id:0}],
     
 },

 {   question: "What does HTML stand for?",
     answers: [{text:"Hypertext Markup Language", correct: true, id:25}, 
     {text:"Happy Times Meeting Lobbyists", correct: false, id:0}, 
     {text:"Hens Train Male Llamas", correct: false, id:0},
     {text:"Hyper Test Markdown Language", correct: false, id:0}],
},
{   question: "Which answer is the 'not' operator",
    answers: [{text:"null", correct: false, id:0}, 
            {text:"&", correct: false, id:0}, 
            {text:"Na", correct: false, id: 0}, 
            {text:"!", correct: true, id: 25}],
},

{   question: "Which one is not a primitive data-type in javascript",
    answers: [{text:"string", correct: false, id:0},
            {text:"float", correct: true, id:25}, 
            {text:"boolean", correct: false, id:0}, 
            {text:"number", correct: false, id:0}],
}
];


 var startQuiz = function() {
    //startButton.classList.add('hide');
     
   // mainContent.classList.remove('hide');
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
    reset();
    show(questionObject[questionNum]);
    
}

var show = function(question) {
    questionDisplay.innerText = question.question;
    question.answers.forEach(answers => {
        var answerButton = document.createElement('button');
        answerButton.innerText = answers.text;
        answerButton.classList.add('btn')
        if(answers.correct) {
            answerButton.dataset.correct = answers.correct;
            
        }
       

        
        answerButton.classList.add('button');
        
        answerButton.addEventListener("click", select);
        answerDisplayEl.appendChild(answerButton);
        
        
    })
    
}




var select = function(event){
    var targetedButton = event.target;
    var correct = targetedButton.dataset.correct;
    setStatusClass(document.body, correct)
    
    Array.from(answerDisplayEl.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    

    })




   
   
    // if (targetedButton) {
    // playerScore += 25;
    // console.log(playerScore)
    // }
    
    
    // playerScore += targetedButton;
    // console.log(targetedButton);

}

var reset = function(){
    clearStatusClass(document.body)
    while (answerDisplayEl.firstChild) {
        answerDisplayEl.removeChild(answerDisplayEl.firstChild);
    }

};
function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
      element.classList.add('correct')
    } else {
      element.classList.add('wrong')
    }
  }
  
  function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
  }





// //var answerInfo = document.createElement("div");
// //answerInfo.className = "answer-info";

// //answerDisplayEl.textContent = questionObject[0].answers1 ;
// //quizAnswersEl.appendChild(answerInfo);

// }

startButton.addEventListener("click", startQuiz);
nextButton.addEventListener('click', () => {
    questionNum++
    nextQuestion()
  });

