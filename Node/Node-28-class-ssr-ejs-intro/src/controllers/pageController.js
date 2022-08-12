const { users } = require('../db');

const showHomePage = (req, res) => {
  const tech = ['Html', 'CSS', 'JS'];
  const data = {
    tech,
    title: 'Homepage',
    currentPage: 'home',
  };
  res.render('index', data);
};

const showAboutPage = (req, res) => {
  const data = {
    title: 'about us',
    currentPage: 'about',
  };
  res.render('about', data);
};

const showContactPage = (req, res) => {
  const locals = {
    title: 'Contact us',
    currentPage: 'contact',
  };
  res.render('contact', locals);
};

const showUsersPage = (req, res) => {
  const locals = {
    users,
    currentPage: 'users',
  };
  res.render('users', locals);
};

module.exports = {
  showHomePage,
  showAboutPage,
  showContactPage,
  showUsersPage,
};
