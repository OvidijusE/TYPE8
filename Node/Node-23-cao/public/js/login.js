import { BASE_URL } from './modules/modulesConfig.js';

const formEl = document.querySelector('.form');

formEl.addEventListener('submit', async (e) => {
  e.preventDefault();
  const loginObj = {
    email: formEl.email.value.trim(''),
    password: formEl.password.value.trim(''),
  };
  console.log('loginObj ===', loginObj);
  const resp = await fetch(`${BASE_URL}/api/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'applicatin/json',
    },
    body: JSON.stringify(loginObj),
  });
  const dataInJs = await resp.json();
  console.log('dataInJs ===', dataInJs);
  if (dataInJs.success === true) {
    console.log('login success');
    const { token } = dataInJs;
    localStorage.setItem('loginUserToken', token);
  } else {
    console.log('login fail');
  }
});

// pabaigti login
