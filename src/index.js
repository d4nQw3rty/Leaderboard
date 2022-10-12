import './style.css';
import scores from './modules/scores.js';
import myGame from './modules/createGame.js';

myGame();

const scoresList = document.getElementById('scoreList');
scores.forEach((score) => {
  const li = document.createElement('li');
  li.className = 'score';
  if (score.id % 2 === 0) {
    li.classList.add('gray-bg');
  }

  li.innerHTML = ` ${score.name} : ${score.score} `;
  scoresList.appendChild(li);
});
