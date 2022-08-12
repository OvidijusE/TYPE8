const BASE_URL = 'http://localhost:3000/api';

const tBodyEl = document.querySelector('.table-body');

const ascEl = document.querySelector('.asc-age');
const dogButtonEl = document.querySelector('.button-dog');

let sortOrder = 'Age: (Asc)';
ascEl.textContent = sortOrder;

function renderPets(petsArr) {
  const listString = petsArr
    .map(
      (pObj) => `
        <tr>
          <td>${pObj.name}</td>
          <td>${pObj.type}</td>
          <td class="age">${pObj.age}</td>
        </tr>
        `
    )
    .join('');
  tBodyEl.innerHTML = listString;
}

async function getPets(url) {
  const resp = await fetch(`${BASE_URL}/${url}`);
  const datainJs = await resp.json();
  console.log('datainJs ===', datainJs);
  renderPets(datainJs);
}
getPets('pets/sort-age/Desc');

ascEl.addEventListener('click', () => {
  getPets(`pets/sort-age/${sortOrder}`);
  sortOrder = sortOrder === 'Age: (Desc)' ? 'Age: (Asc)' : 'Age: (Desc)';
  ascEl.textContent = sortOrder;
});

// dar neveikia filter
// async function getDogs(dogs) {
//   const resp = await fetch(`${BASE_URL}/${dogs}`);
//   const datainJs = await resp.json();
//   renderPets(datainJs);
// }
// getDogs(`pets/type/dogs`);

// dogButtonEl.addEventListener('click', (e) => {
//   e.preventDefault();
//   getDogs(`pets/type/${dog}`);
//   dog = dog === 'Dog' ? -1 : 1;
// });
