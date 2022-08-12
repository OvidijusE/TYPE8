import { BASE_URL } from './modules/modules-config.js';
import { renderCarCards } from './modules/renderCar.js';

const carsContainerEl = document.querySelector('.cars-container');

async function getCars() {
  try {
    const resp = await fetch(`${BASE_URL}/cars`);
    console.log('resp ===', resp);
    if (resp.ok === false) throw new Error('something is wrong');
    const carsArr = await resp.json();
    renderCarCards(carsArr, carsContainerEl);
  } catch (error) {
    console.warn('error ===', error);
  }
}
getCars();

export async function deleteCar(delId) {
  try {
    const resp = await fetch(`${BASE_URL}/cars/${delId}`, {
      method: 'DELETE',
    });
    if (resp.ok === false) {
      throw new Error('error deleting');
    }
    getCars();
  } catch (error) {
    console.log('error ===', error);
  }
}
