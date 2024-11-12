const questions = [

  {
    question: "Which of the following is a CSS framework?",
    answers: [
      {text: "Bootstrap", correct: true},
      {text: "React", correct: false},
      {text: "Node.js", correct: false},
      {text: "MongoDB", correct: false}
    ]
  },
  {
    question: "What does HTML stand for?",
    answers: [
      {text: "Hyper Text Markup Language", correct: true},
      {text: "Hyperlinks and Text Markup Language", correct: false},
      {text: "Home Tool Markup Language", correct: false},
      {text: "Hyper Technical Markup Language", correct: false}
    ]
  },
  {
    question: "Which of the following is used to style web pages?",
    answers: [
      {text: "CSS", correct: true},
      {text: "JavaScript", correct: false},
      {text: "HTML", correct: false},
      {text: "Python", correct: false}
    ]
  },
  {
    question: "Which HTML tag is used to define an internal style sheet?",
    answers: [
      {text: "<style>", correct: true},
      {text: "<script>", correct: false},
      {text: "<css>", correct: false},
      {text: "<link>", correct: false}
    ]
  },
  {
    question: "What is the purpose of JavaScript in web development?",
    answers: [
      {text: "To add interactivity to web pages", correct: true},
      {text: "To style web pages", correct: false},
      {text: "To create static content", correct: false},
      {text: "To manage databases", correct: false}
    ]
  },
  {
    question: "Which method is used to select an element by its id in JavaScript?",
    answers: [
      {text: "document.getElementById()", correct: true},
      {text: "document.querySelector()", correct: false},
      {text: "document.getElementByClass()", correct: false},
      {text: "document.getByTag()", correct: false}
    ]
  },
  {
    question: "Which of these is a JavaScript framework?",
    answers: [
      {text: "React", correct: true},
      {text: "CSS", correct: false},
      {text: "SQL", correct: false},
      {text: "HTML", correct: false}
    ]
  },
  {
    question: "Which of the following is used for server-side scripting?",
    answers: [
      {text: "Node.js", correct: true},
      {text: "JavaScript", correct: false},
      {text: "CSS", correct: false},
      {text: "HTML", correct: false}
    ]
  },
  {
    question: "Which attribute is used to specify the destination of a hyperlink in HTML?",
    answers: [
      {text: "href", correct: true},
      {text: "src", correct: false},
      {text: "alt", correct: false},
      {text: "action", correct: false}
    ]
  },
  {
    question: "What does the 'flexbox' layout system in CSS help with?",
    answers: [
      {text: "Aligning and distributing space among items in a container", correct: true},
      {text: "Creating animations", correct: false},
      {text: "Managing event listeners", correct: false},
      {text: "Fetching data from APIs", correct: false}
    ]
  }
]


const questionElement = document.getElementById('question')
const answerButton = document.getElementById('answer-buttons')
const nextButton = document.getElementById('next-btn')

let currentQuestionIndex = 0
let score = 0

function startQuiz(){
    currentQuestionIndex =  0
    score = 0
    nextButton.innerHTML = 'Next'
    showQuestion()
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex]
    let questionNo = currentQuestionIndex + 1
    questionElement.innerHTML = questionNo + '. ' + currentQuestion.question

    currentQuestion.answers.ForEach(answer => {
        const button = document.createElement('button')
        button.innerHTML = answer.text
        button.classList.add('btn')
        answerButton.appendChild(button)
        if(answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
    })
}

function resetState(){
    nextButton.style.display = 'none'
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild)
    }
}

function selectAnswer(e){
    const selectedBtn = e.target
    const isCorrect = selectedBtn.dataset.correct === 'true'
    if(isCorrect){
        selectedBtn.classList.add('correct')
    }else{
        selectedBtn.classList.add('incorrect')
    }
    Array.from(answerButton.children).forEach(button => {
        if(button.dataset.correct === 'true'){
            button.classList.add('correct')
        }
        button.disabled = true
    })
    nextButton.style.display = 'block'
}
startQuiz()