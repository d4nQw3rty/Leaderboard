import './style.css';
import easterEggQuest from './modules/scoresMethods.js';
import ui from './modules/ui.js';

const manageData = async () => {
  const data = await easterEggQuest.getScores();
  const x = data.filter(
    (x) => Number(x.score) <= 1000 && Number(x.score) >= 0,
  );
  x.sort((a, b) => b.score - a.score);
  const top = x.slice(0, 1000);
  ui.render(top);
};

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
  manageData();
});
