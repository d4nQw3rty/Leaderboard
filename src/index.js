import _ from 'lodash';
import './style.css';
import scores from './modules/scores.js';

const scoresList = document.getElementById('scoreList');
scores.forEach((score) => {
    const li = document.createElement('li');
    li.className = 'score';
    li.innerHTML = ` ${score.name} : ${score.score} `;
    scoresList.appendChild(li);
});
