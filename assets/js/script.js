// Questions array
const questions = [
  {
    title: "Commonly used data types DO NOT include:",
    choices: 
    [
      "booleans",
      "strings",
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
      "parentheses",
      "curly brackets",
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
      "quotes",
      "commas",
      "curly brackets",
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
      "console.log",
      "for loops"
    ],
    answer: "console.log"
  }
];

// Global Variables
let totalTime = questions.length * 15;
let timer;
let shuffleQuestions, currentQuestionIndex;

// Reference variables
const timerEl = document.getElementById("time");
const startBtn = document.getElementById('strt-btn');
const questionCardEl = document.getElementById('card');
const questionEl = document.getElementById('question-title');
const startScreen = document.getElementById('start-screen');
const optionsEl = document.getElementById('options');
const checkEl = document.getElementById('check');
const initialsEl = document.getElementById('initials');
const submitBtn = document.getElementById('submit');

// GIVEN I am taking a code quiz:
// WHEN I click the start button
// THEN a timer starts and I am presented with a question

// Event Listener to start game
if(startBtn) {
  startBtn.addEventListener('click', startGame);
}

  // Start Game Function
function startGame() {

  // Display Game Start in console
  console.log('Game start!');
  
  // Hide start-screen at game start
  startScreen.classList.add('hidden');

  // Reveal question cards at game start
  questionCardEl.classList.remove('hidden');

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
  questionEl.innerText = title.title;

  optionsEl.innerText = "";

  title.choices.forEach(function(choice, i) {
    var option = document.createElement('button');
    option.classList.add('grid-item');
    option.setAttribute("value", choice);

    option.textContent = i + 1 + ". " + choice;

    option.onclick = guess;

    optionsEl.appendChild(option);
  })
}

// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock

  // Function to check for player guess action
function guess() {

  // Wrong answers deduct time by 15 seconds
  if (this.value !== questions[currentQuestionIndex].answer) {
    totalTime -=15;

    if(totalTime < 0) {
     totalTime = 0;
    }

    // Display new time
    timerEl.textContent = totalTime;

    // Wrong answer response
    checkEl.textContent = "Try Again";
  } else {
    // Right answer response
    checkEl.textContent = "Nice!";
  }

  checkEl.setAttribute("class", "check");
  setTimeout(function() {
    checkEl.setAttribute("class", "check hide");
  }, 1000);

  // move to next question
  currentQuestionIndex++;

  // Next question in array
  if (currentQuestionIndex === questions.length) {
    gameOver();
  } else {
    nextQuestion();
  }
}

  // Countdown timer function
function countdown() {
  // Add decrement to total time for countdown
  totalTime--;
  timerEl.textContent = totalTime;

  // check if user has run out of time
  if (totalTime <= 0) {
    gameOver();
  }
}

// WHEN all questions are answered or the timer reaches 0
// THEN the game is over

  // Game over function
gameOver = () => {
  
  // stops timer
  clearInterval(timer);

  // hide question card
  questionCardEl.classList.add('hidden');

  // display results page
  const resultsEl = document.getElementById('results');
  resultsEl.classList.remove('hidden');

  // display user score
  const userScore = document.getElementById('userScore');
  userScore.textContent = totalTime;
}

// WHEN the game is over
// THEN I can save my initials and my score

  // Submit Btn saves score
  if (submitBtn) {
    submitBtn.onclick = saveScore;
  }

  // Function to save player score
function saveScore() {
  let initials = initialsEl.value.trim();

  // check for empty value
  if (initials !== "") {
    // get scores from local storage, else put new scores in array
    let highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];

    // Create new scoresheet for current user
    let playerScore = {
      score: totalTime,
      initials: initials
    };

    // save to local storage
    highscores.push(playerScore);
    window.localStorage.setItem("highscores", JSON.stringify(highscores));

    window.location.href = "highscores.html";
  }
}

// Check for input by Enter key
if (initialsEl) {
  initialsEl.onkeyup = enterCheck;
}

function enterCheck(event) {
  if (event.key === 13) {
    saveScore();
    console.log('Enter pressed');
  }
}



