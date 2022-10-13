const ui = {

  render(scoresData) {
    const scores = document.getElementById('scoreList');
    scores.innerHTML = '';
    for (let i = 0; i < scoresData.length; i += 1) {
      const index = i + 1;
      const li = document.createElement('li');
      li.setAttribute('id', index);
      li.classList.add('listElement');
      if (index % 2 === 0) {
        li.classList.add('gray-bg');
      }
      li.innerHTML = `<span class="flex1">${index}</span><span class="flex1">${scoresData[i].user}</span><span class="flex1">${scoresData[i].score}</span>  `;
      scores.appendChild(li);
    }
  },
};

export default ui;
