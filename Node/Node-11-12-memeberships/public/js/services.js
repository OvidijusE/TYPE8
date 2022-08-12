import { BASE_URL } from './modules/config.js';
import { renderCards } from './modules/html.js';

console.log('sevices.js');

const cardContainerEl = document.querySelector('.cards-container');
const addBtnEl = document.querySelector('.btn-add');

addBtnEl.addEventListener('click', () => {
  window.location.href = 'add-service.html';
});

async function getServices() {
  try {
    const resp = await fetch(`${BASE_URL}/services`);
    console.log('resp ===', resp);
    // fetch nepermeta kodo i catch bloka jei status yra klaidos
    if (resp.ok === false) throw new Error('something is wrong');

    const servicesArr = await resp.json();
    console.log('servicesArr ===', servicesArr);
    console.log('piesiam korteles');
    renderCards(servicesArr, cardContainerEl);
    // createCard(servicesArr[0]);
  } catch (error) {
    console.warn('error ===', error);
    console.log('atvaizduojam klaida');
  }
}

// New membership mygtuko pagalba issiusti
addBtnEl.addEventListener('click', () => {
  deleteService();
});
//DELETE  http://localhost:3000/api/services/626260927e093fa25187f45b

export async function deleteService(idToDelete) {
  try {
    const resp = await fetch(`${BASE_URL}/services/${idToDelete}`, {
      method: 'DELETE',
    });
    console.log('resp ===', resp);
    // fetch nepermeta kodo i catch bloka jei status yra klaidos
    if (resp.ok === false) throw new Error('error deleting');
    getServices();
  } catch (error) {
    console.warn('error ===', error);
  }
}

getServices();
