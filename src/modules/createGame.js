const myGame = async () => {
  const game = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
    method: 'POST',
    body: JSON.stringify({
      name: 'Easter Egg Quest',
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const data = await game.json();
  const getId = data.result.split(' ')[3];
  localStorage.setItem('List', getId);
  return data;
};
export default myGame;
