const questions = [
    {
        question: "What is the smallest header in html by default?",
         answers: [
            {text:"h1" , correct:false},
            {text:"h6" , correct:true},
            {text:"h5" , correct:false},
            {text:"h4" , correct:false},

        ]
    },
    
    {
        question: "Which of the following is a linear data structure?",
         answers: [
            {text:"Array" ,correct:true},
            {text:"Binary Tree" ,correct:false},
            {text:"AVL Trees" ,correct:false},
            {text:"Graph" ,correct:false},

        ]
    },
    {
        question: "which attribute is used to  provide a unique name to an HTMl element?",
        answers: [
           {text:"class" ,correct:false},
           {text:"id" ,correct:true},
           {text:"type" ,correct:false},
           {text:"none of above" ,correct:false},

       ] 
    },
    {
        question: "Which of the following data structure can be used to implemented queues?",
         answers: [
            {text:"Array" ,correct:false},
            {text:"Stack" ,correct:false},
            {text:"Linklist" ,correct:false},
            {text:"All of the above" ,correct:true},

        ]
    },
    {
        question: "which of the following properties is used to change the font of text?",
        answers: [
           {text:"font-size" ,correct:false},
           {text:"text-align" ,correct:false},
           {text:"font-family" ,correct:true},
           {text:"none of the above" ,correct:false},
        ]
    }
];

const questionsElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons"); 
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    alert("hello");
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex]; 
  let questionNo = currentQuestionIndex + 1;
  questionsElement.innerHTML = questionNo + "." + currentQuestion.question;

  currentQuestion.answers.forEach(answer =>{
       const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
  
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState(){
  nextButton.style.display = "none";
  while(answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  } 
}
function selectAnswer(e){
     const selectedBtn= e.target;
    const isCorrect=selectedBtn.dataset.correct==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled=true;

    });
    nextButton.style.display="block";
}
function showScore(){
    resetState();
    questionsElement.innerHTML='You scored $(score) out of ${questions.length}!';
    nextButton.innerHTML="Play Again";
    nextButton.style.display="block";
}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}


nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});
startQuiz();