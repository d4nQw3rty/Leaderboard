const ui = {

  render(scoresData) {
    const scores = document.getElementById('scoreList');
    scores.innerHTML = '';
    for (let i = 0; i < scoresData.length; i += 1) {
      const index = i + 1;
      const li = document.createElement('li');
      li.setAttribute('id', index);
      if (index % 2 === 0) {
        li.classList.add('gray-bg');
      }
      li.innerHTML = `${scoresData[i].user}: ${scoresData[i].score}`;
      scores.appendChild(li);
    }
  },
};

export default ui;
