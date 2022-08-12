const BASE_URL = 'http://localhost:3000/api';

const listEl = document.getElementById('list');
const sortAgeBtn = document.getElementById('ageSort');
const orderDiplayEl = sortAgeBtn.querySelector('span');

const showStudentsBtn = document.getElementById('showStudents');

let sortOrder = 'DESC';
orderDiplayEl.textContent = sortOrder;

function renderUsers(userArr) {
  const listString = userArr
    .map(
      (uObj) => `
      <li>
      <p><strong>${uObj.name}</strong> Is ${uObj.age} years old ${uObj.isStudent ? 'student' : ''}. <i>Gender:</i> ${
        uObj.gender
      }</p>
      </li>
  `
    )
    .join('');
  listEl.innerHTML = listString;
}

async function getUsers(urlEnd) {
  const resp = await fetch(`${BASE_URL}/${urlEnd}`);
  const dataInJs = await resp.json();
  console.log('dataInJs ===', dataInJs);
  renderUsers(dataInJs);
}
getUsers('users/sort-age/ASC');

sortAgeBtn.addEventListener('click', () => {
  // kai paspaudziam mygtuka pakeisti jame esanti zodeli ASC i DESC

  getUsers(`users/sort-age/${sortOrder}`);

  sortOrder = sortOrder === 'ASC' ? 'DESC' : 'ASC';
  orderDiplayEl.textContent = sortOrder;
});

showStudentsBtn.addEventListener('click', () => {});
