function getHighscores() {
    // either get scores from localstorage or set to empty array
    var highscores = JSON.parse(window.localStorage.getItem('highscores')) || [];
  
    // sort highscores by score property in descending order
    highscores.sort(function(a, b) {
      return b.score - a.score;
    });
  
    highscores.forEach(function (score) {
      // Turns each playerScore into a list item
      var liTag = document.createElement('li');
      if(liTag) {
        liTag.textContent = score.initials + ' - ' + score.score;
      }
      
      // Add list of scores to display
      var olEl = document.getElementById('highscores');
      if (olEl) {
        olEl.appendChild(liTag);
      }
    });
}
  
function clearHighscores() {
    window.localStorage.removeItem('highscores');
    window.location.reload();
}

const clear = document.getElementById('clear');
if (clear) {
    clear.addEventListener('click', clearHighscores)
}
  
// run function when page loads
getHighscores();