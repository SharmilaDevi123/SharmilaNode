const express = require('express');

var app = express();

app.use((req, res, next) => {
res.render('Maintenance.hbs');
});

app.get('/about', (req,res) => {
  res.render('home.hbs', {
    pageTitle: 'Home Page',
    currentYear: new Date().getFullYear(),
    welcomeMsg: 'Welcome to Home Page'
  });
});

app.get('/bad', (req,res) => {
  res.send({
    ErrorMessage:'Bad Request'
  });
});

app.listen(3000);
