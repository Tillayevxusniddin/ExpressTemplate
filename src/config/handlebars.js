const { engine } = require('express-handlebars');
const path = require('path');

const hbs = engine({
  defaultLayout: 'main',
  layoutsDir: path.join(__dirname, '../views/layouts'),
  partialsDir: path.join(__dirname, '../views/partials'),
  extname: '.handlebars',
});

module.exports = hbs;