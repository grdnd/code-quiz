const startBtn = document.getElementById('strt-btn')
const questionContainerEl = document.getElementById('question-container')

startBtn.addEventListener('click', startGame)

function startGame() {
  console.log('Started')
  startBtn.classList.add('hidden')
  questionContainerEl.classList.remove('hidden')

}

// function nextQuestion() {

// }

// function Answer() {

// }



// var timer = 60;
// var interval = setInterval(function(){
//   document.getElementById('timer').innerHTML=timer;
//   timer--;
//   if (timer === 0){
//     clearInterval(interval);
//     document.getElementById('timer').innerHTML='Time! ⏰';
//     prompt("Initials: ");
//   }
// }, 1000);