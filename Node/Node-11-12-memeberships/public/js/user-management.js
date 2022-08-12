import { BASE_URL } from './modules/config.js';
import { renderUserCards } from './modules/users-management-html.js';

const cardContainerEl = document.querySelector('.cards-container');

const newUserBtn = document.querySelector('.btn-add');

newUserBtn.addEventListener('click', () => {
  window.location.href = 'add-user.html';
});

async function getUsers() {
  try {
    const resp = await fetch(`${BASE_URL}/users`);
    console.log('resp ===', resp);
    if (resp.ok === false) throw new Error('something is wrong');
    const servicesArr = await resp.json();
    renderUserCards(servicesArr, cardContainerEl);
  } catch (error) {
    console.warn('error ===', error);
  }
}
getUsers();

// export async function deleteService(idToDelete) {
//   try {
//     const resp = await fetch(`${BASE_URL}/services/${idToDelete}`, {
//       method: 'DELETE',
//     });
//     console.log('resp ===', resp);
//     // fetch nepermeta kodo i catch bloka jei status yra klaidos
//     if (resp.ok === false) throw new Error('error deleting');
//     getUsers();
//   } catch (error) {
//     console.warn('error ===', error);
//   }
// }
