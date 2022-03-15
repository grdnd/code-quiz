// Questions array
const questions = [
  {
    title: "Commonly used data types DO NOT include:",
    choices: 
    [
      "strings",
      "booleans",
      "alerts",
      "numbers"
    ],
    answer: "alerts"
  },
  {
    title: "The condition in an if / else statement is enclosed within ___.",
    choices:
    [
      "quotes",
      "curly brackets",
      "parentheses",
      "square brackets"
    ],
    answer: "parentheses"
  },
  {
    title: "Arrays in JavaScript can be used to store ___.",
    choices: 
    [
    "numbers and strings",
    "other arrays",
    "booleans",
    "all of the above"
    ],
    answer: "all of the above"
  },
  {
    title: "String values must be enclosed within ___ when being assigned to variables.",
    choices:
    [
      "commas",
      "curly brackets",
      "quotes",
      "parentheses"
    ],
    answer: "quotes"
  },
  {
    title: "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: 
    [
      "JavaScript",
    "terminal / bash",
    "for loops",
    "console.log"
    ],
    answer: "console.log"
  }
];

// Global Variables
let totalTime = questions.length * 15;
let timer;
let shuffleQuestions, currentQuestionIndex;


// GIVEN I am taking a code quiz:

// Reference variables
const timerEl = document.getElementById("time");
const startBtn = document.getElementById('strt-btn');
const questionCardEl = document.getElementById('card');
const questionEl = document.getElementById('question-title');
const startScreen = document.getElementById('start-screen');
const optionsEl = document.getElementById('options');
// const optionBtn = document.getElementById('optionBtn');

  // startGame event listener
startBtn.addEventListener('click', startGame);

  // Start Game Function
function startGame() {

  // Display Game Start in console
  console.log('Game start!');
  
  // Hide start-screen at game start
  startScreen.classList.add('hidden');

  // Reveal question cards at game start
  questionCardEl.classList.remove('hidden');

// WHEN I click the start button
// THEN a timer starts and I am presented with a question

  // set question index to 0
  currentQuestionIndex = 0;
  // Math.random to shuffle question array
  shuffler = questions.sort(() => Math.random() - .5);

  // deduct time every second
  timer = setInterval(countdown, 1000);

  // display current time
  timerEl.textContent = totalTime;

  // function to get questions
  nextQuestion();
}

// Function to shuffle question array
function nextQuestion() {
  currentQuestion(shuffler[currentQuestionIndex])
}

function currentQuestion(title) {
  questionEl.innerText = title.title

  optionsEl.innerText = "";

  title.choices.forEach(function(choice, i) {
    var option = document.createElement('button');
    option.classList.add('grid-item');
    option.setAttribute("value", choice);

    option.textContent = i + 1 + ". " + choice;

    // option.onclick = questionClick;

    optionsEl.appendChild(option);
  })
}


//   // Picks question based on current index
//   let currentQuestion = questions[currentQuestionIndex];


// Countdown timer function
function countdown() {
  // Add decrement to total time for countdown
  totalTime--;
  timerEl.textContent = totalTime;

  // check if user has run out of time
  if (totalTime <= 0) {
    quizEnd();
  }
}


  
  



// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score
//