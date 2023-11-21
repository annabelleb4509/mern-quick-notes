const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
require('dotenv').config();
require('./config/database.js');   

// Require the Mongoose models
// const User = require('./models/user');
// const Item = require('./models/item');
// const Category = require('./models/category');
// const Order = require('./models/order');

// Local variables will come in handy for holding retrieved documents
let user, item, category, order;
let users, items, categories, orders;


const app = express();
   
//Middleware
app.use(logger('dev'));
app.use(express.json());

// app.use(favicon(path.join(__dirname, 'dist', 'favicon.ico')));

// create-react-app has a "build" directory
// vite uses the "dist" directory instead
	
// Configure both serve-favicon & static middleware
// to serve from the production 'build' folder

app.use(express.static(path.join(__dirname, 'dist')));

app.use(require('./config/checkToken'));

const port = process.env.PORT || 3001;

app.listen(port,  () => {
    console.log('Express running on http://localhost/:' + port);
});

// Define other routes HERE, before the default
app.use('/api/users', require('./routes/api/users'));

//This needs to be the last route:
// All unrecognised requests get served the home page
// (i.e. the react application)
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});