const bookObj = {
  _id: '625e647093911a771417d0b2',
  title: 'Book 1',
  year: 2000,
  rating: 4,
  authorArr: [
    {
      _id: '625e718ad2f7e433900f0d5d',
      name: 'James book1',
      town: 'London',
      bookId: '625e647093911a771417d0b2',
    },
  ],
};
// obj1.authorName = obj1.authorArr[0].name;
// obj1.authorTown = obj1.authorArr[0].town;
// delete obj1.authorArr;
const objCopy = {
  title: bookObj.title,
  year: bookObj.year,
  rating: bookObj.rating,
  authorName: bookObj.authorArr[0].name,
  authorTown: bookObj.authorArr[0].town,
};
console.log('obj1 ===', bookObj);
console.log('objCopy ===', objCopy);
const rezult = {
  _id: '625e647093911a771417d0b2',
  title: 'Book 1',
  year: 2000,
  rating: 4,
  authorArr: [
    {
      _id: '625e718ad2f7e433900f0d5d',
      name: 'James book1',
      town: 'London',
      bookId: '625e647093911a771417d0b2',
    },
  ],
};
