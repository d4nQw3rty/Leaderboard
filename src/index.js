import './style.css';
import myGame from './modules/createGame.js';
import easterEggQuest from './modules/scoresMethods.js';
import ui from './modules/ui.js';

myGame();

const manageData = async () => {
  const data = await easterEggQuest.getScores();
  const x = data.filter(
    (x) => Number(x.score) <= 100 && Number(x.score) >= 0,
  );
  x.sort((a, b) => b.score - a.score);
  const topTen = x.slice(0, 10);
  ui.render(topTen);
};

manageData();

const form = document.getElementById('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const user = document.getElementById('player').value;
  const score = document.getElementById('playerScore').value;
  easterEggQuest.addScore(user, score);
  form.reset();
});

const refreshBtn = document.getElementById('refresh');
refreshBtn.addEventListener('click', () => {
  window.location.reload();
});
