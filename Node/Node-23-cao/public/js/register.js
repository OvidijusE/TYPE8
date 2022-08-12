import { BASE_URL } from './modules/modulesConfig.js';

const formEl = document.querySelector('.form');

formEl.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = {
    email: formEl.email.value.trim(''),
    password: formEl.password.value.trim(''),
    repeat_password: formEl.repeat_password.value.trim(''),
  };
  console.log('formData ===', formData);
});

// pabaigti registracija
