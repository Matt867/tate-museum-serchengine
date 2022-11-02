const express = require('express');
const path = require('path')
const app = express();
const port = 3000;



app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../pages/index.html'));
});
app.get('/results', (req, res) => {
    res.sendFile(path.join(__dirname, '../pages/search-results.html'));
});
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../pages/login.html'))
})




app.get('/stylesheets/index-style.css', (req, res) => {
    res.sendFile(path.join(__dirname, '../stylesheets/index-style.css'))
})
app.get('/stylesheets/login-signup-style.css', (req, res) => {
    res.sendFile(path.join(__dirname, '../stylesheets/login-signup-style.css'))
})
app.get('/stylesheets/search-results.css', (req, res) => {
    res.sendFile(path.join(__dirname, '../stylesheets/search-results.css'))
})
app.get('/images/tatebritain.jpg', (req, res) => {
    res.sendFile(path.join(__dirname, '../images/tatebritain.jpg'))
})
app.get('/images/download.png', (req, res) => {
    res.sendFile(path.join(__dirname, '../images/download.png'))
})
app.get('/scripts/script.js', (req, res) => {
    res.sendFile(path.join(__dirname, '../scripts/script.js'))
})
app.get('/scripts/functions.js', (req, res) => {
    res.sendFile(path.join(__dirname, '../scripts/functions.js'))
})
app.get('/scripts/artpiece.js', (req, res) => {
    res.sendFile(path.join(__dirname, '../scripts/artpiece.js'))
})
app.get('/scripts/resultScript.js', (req, res) => {
    res.sendFile(path.join(__dirname, '../scripts/resultScript.js'))
})


app.listen(port);
