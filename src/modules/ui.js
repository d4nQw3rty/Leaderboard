const ui = {

  render(scoresData) {
    const scores = document.getElementById('scoreList');

    scoresData.forEach((score) => {
      const index = scoresData.indexOf(score) + 1;
      const li = document.createElement('li');
      li.setAttribute('id', index);
      li.className = 'score';
      if (index % 2 === 0) {
        li.classList.add('gray-bg');
      }
      li.innerHTML = ` ${score.user} : ${score.score} `;
      scores.appendChild(li);
    });
  },
};

export default ui;
