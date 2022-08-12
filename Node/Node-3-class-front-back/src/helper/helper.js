function lg(el) {
  const elObj = { el };
  const key = Object.keys(elObj);
  console.log(`${key[0]} ===`, el);
}

// sukurti funkcija kuri argumentu paima masyva ir id
// grazina is to masyvo ta el kurio id paduota argumentu
// jei nerandam, tai grazinam false

function findById(arr, givenId) {
  const foundObj = arr.find((elObj) => elObj.id === givenId);

  return foundObj === undefined ? false : foundObj;
}

module.exports = {
  lg,
  findById,
};
