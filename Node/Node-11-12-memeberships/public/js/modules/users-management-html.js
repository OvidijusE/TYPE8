function makeEl(tagName, text, dest, elClass = null) {
  const el = document.createElement(tagName);
  el.textContent = text;
  if (elClass) el.className = elClass;
  dest.appendChild(el);
  return el;
}

export function createUserCard(newCardObj) {
  const articleEl = document.createElement('article');

  articleEl.className = 'card';
  makeEl('p', `${newCardObj.name} ${newCardObj.surname}`, articleEl);
  makeEl('p', `${newCardObj.email}`, articleEl);
  makeEl('p', `${newCardObj.membership}`, articleEl);

  return articleEl;
}

export function renderUserCards(cardArr, dest) {
  // isvalyti dest kad neliktu pries tai buvusiu korteliu
  dest.innerHTML = '';
  // sukti cikla ir irasyti visas gautas korteles
  cardArr.forEach((cObj) => {
    const card = createUserCard(cObj);
    dest.append(card);
  });
}
