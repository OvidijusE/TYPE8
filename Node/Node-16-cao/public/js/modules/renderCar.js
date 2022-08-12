import { deleteCar } from '../view-car.js';

function makeEl(tagName, text, dest, elClass = null, src = null) {
  const el = document.createElement(tagName);
  el.textContent = text;
  if (elClass) el.className = elClass;
  if (src) el.src = src;
  dest.appendChild(el);
  return el;
}

// nuotrauka neveikia
export function createCarCard(newCarObj) {
  const articleEl = document.createElement('article');

  articleEl.className = 'car';
  makeEl('h3', `${newCarObj.numberplates}`, articleEl, 'car-numberplate');
  makeEl('p', `${newCarObj.title}`, articleEl, 'car-title');
  makeEl('div', '', articleEl, 'hr');
  makeEl('img', '', articleEl, 'car-image', `${newCarObj.image}`);
  makeEl('div', '', articleEl, 'hr');
  const deleteButton = makeEl('button', 'DELETE', articleEl, 'delete-button');
  deleteButton.addEventListener('click', () => {
    console.log('click');
    deleteCar(newCarObj.id);
  });

  return articleEl;
}

export function renderCarCards(carsdArr, dest) {
  dest.innerHTML = '';
  carsdArr.forEach((cObj) => {
    const card = createCarCard(cObj);
    dest.append(card);
  });
}
