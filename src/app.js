const express = require('express');
const path = require('path');
const hbs = require('./config/handlebars');
const usersRoutes = require('./routes/users.routes');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');


const app = express();
const PORT = process.env.PORT || 3000;

app.engine('handlebars', hbs);
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));


// Middlewares

app.use(express.static(path.join(__dirname, '../public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride('_method')); 

// Routes

app.use('/users', usersRoutes);

app.get('/', (req, res) => {
    res.render('home');
})


// Server

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});