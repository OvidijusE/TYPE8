const BASE_URL = 'http://localhost:3000/api';

const addPetForm = document.querySelector('.add-pet');

addPetForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const petObj = {
    name: addPetForm.elements.name.value.trim(''),
    type: addPetForm.elements.type.value.trim(''),
    age: +addPetForm.elements.age.value.trim(''),
  };
  console.log('petObj ===', petObj);
  try {
    const resp = await fetch(`${BASE_URL}/pets`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(petObj),
    });
    if (!resp.ok) {
      throw new Error(`Error: ${resp.status}`);
    }
    addPetForm.reset();
    const data = await resp.json();
  } catch (error) {
    throw new Error(`Could not create pet obejct: ${Error}`);
  }
});
