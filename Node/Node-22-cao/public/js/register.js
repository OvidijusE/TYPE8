import { BASE_URL } from './modules/modulesConfig.js';

const emailEl = document.getElementById('email');
const passwordEl = document.getElementById('password');

const formEl = document.querySelector('.form');

formEl.addEventListener('submit', (e) => {
  e.preventDefault();
  const newUserObj = {
    email: emailEl.value,
    password: passwordEl.value,
  };
  console.log('newUserObj ===', newUserObj);
  createUser(newUserObj);
});

async function createUser(user) {
  const resp = await fetch(`${BASE_URL}/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });
  console.log('resp ===', resp);
  if (resp.ok) {
    alert('Registration successful');
  } else {
    console.error('something went wrong');
  }
}
