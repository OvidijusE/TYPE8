const BASE_URL = 'http://localhost:3000/api';

const jokeEl = document.getElementById('out');
// get joke from backend
async function getJoke(callback) {
  try {
    const resp = await fetch(`${BASE_URL}/joke`);
    const data = await resp.json();
    console.log('data ===', data);
    callback(data.joke, jokeEl);
  } catch (error) {
    console.log('error in get joke ===', error);
  }
}
getJoke(showJoke);
// display joke in #out

// get joke from backend
async function getJokeAxios() {
  try {
    const { data } = await axios.get(`${BASE_URL}/joke`);
    console.log('data ===', data);
  } catch (error) {
    console.log('error in getJokeAxios ===', error);
    console.log(error.response.data);
  }

  // callback(data.joke, jokeEl);
}
getJokeAxios();

function showJoke(joke, dest) {
  dest.textContent = joke;
}
