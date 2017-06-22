const express = require('express');
const hbs = require('hbs');
const fs = require('fs');
const app = express();
hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs');
//
// app.get('/', (req, res) => {
//   res.status(200).send('Hello, cookieworld!');
//
// });
// app.use(express.static(__dirname + '/public'));
// hbs.registerHelper('getCurrentYear',() => {
//   return new Date().getFullYear()
// });


app.get ('/' ,(req, res) => {
    res.render('home.hbs',{
    pageTitle: 'Home B Page',
    welcomeMessage: "Welcome to the interactive website",
})
app.get('/about', (req, res) => {
  res.render('about.hbs', {
    pageTitle: "ABooout Page",
    });
});

app.get('/projects', (req, res) => {
  res.render('projects.hbs', {
    pageTitle: "Bowmans's Projects Page",
    });
});

app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'Unable to help'
});

});


  });

// [END hello_world]

if (module === require.main) {
  // [START server]
  // Start the server
  const server = app.listen(process.env.PORT || 8081, () => {
    const port = server.address().port;
    console.log(`App listening on port ${port}`);
  });
  // [END server]
}

module.exports = app;
