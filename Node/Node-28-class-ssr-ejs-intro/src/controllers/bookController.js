const { getAllBooks, addBook } = require('../model/bookModel');

const showBooksPage = async (req, res) => {
  let allBooksArr;
  let feedback;
  try {
    allBooksArr = await getAllBooks();
  } catch (error) {
    console.log('error ===', error);
    feedback = 'Something went wrong';
  }
  const locals = {
    title: 'book',
    currentPage: 'books',
    allBooksArr,
    feedback,
  };
  res.render('books', locals);
};

const showNewBookForm = async (req, res) => {
  const locals = {
    currentPage: 'new-book',
    title: 'Lets create a new book',
  };
  res.render('new-book', locals);
};

const processBookForm = async (req, res) => {
  const {
    title, author, year, category,
  } = req.body;

  const result = await addBook(title, author, year, category);
  console.log('result ===', result);
  const feedback = result.affectedRows === 1 ? 'Success' : 'Error';
  const locals = {
    currentPage: 'new-book',
    title: 'Lets create a new book',
    feedback,
  };
  res.render('new-book', locals);
  //   res.redirect('/books');
};

module.exports = {
  showBooksPage,
  showNewBookForm,
  processBookForm,
};
