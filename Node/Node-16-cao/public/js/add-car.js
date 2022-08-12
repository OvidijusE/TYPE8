import { BASE_URL } from './modules/modules-config.js';

const numberPlatesInputEl = document.getElementById('numberplates');
const titleInputEl = document.getElementById('title');
const imageInputel = document.getElementById('image');
const priceInputEl = document.getElementById('price');

const formEl = document.querySelector('.form');

formEl.addEventListener('submit', (e) => {
  e.preventDefault();
  const newCarObj = {
    numberplates: numberPlatesInputEl.value.trim(''),
    title: titleInputEl.value.trim(''),
    image: imageInputel.value.trim(''),
    price: priceInputEl.value,
  };
  console.log('newCarObj ===', newCarObj);
  createCar(newCarObj);
});

async function createCar(obj) {
  const resp = await fetch(`${BASE_URL}/cars`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj),
  });
  const dataInJs = await resp.json();
  console.log('resp ===', resp);

  if (dataInJs.success === true) {
    console.log('login success');
    // sukurta sekmingai
    // window.location.href = 'view-car.html';
  } else {
    console.error('cannot create car');
    handleError(dataInJs);
  }
}
// sutvarkyti validacija
function handleError(msg) {
  const pEl = document.createElement('p');
  pEl.setAttribute('class', 'error-output');

  pEl.textContent = msg;

  numberPlatesInputEl.insertAdjacentElement('beforebegin', pEl);
}
