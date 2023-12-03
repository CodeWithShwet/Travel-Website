require('dotenv').config();
const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT;
const dotenv = require("dotenv");
dotenv.config({ path: './.env' });
require("./DB/connection");
const User = require('./Model/userSchema');

// Express SPECIFIC STUFF/ CONFIGURATION
app.use('/static', express.static('static')); //for serving static files
app.use(express.urlencoded())

// PUG CONFIGURATION
app.set('view engine', 'pug') // Set the template engine as Pug
app.set('views', path.join(__dirname, 'views')) //Sets the views directory

// ENDPOINTS
app.get('/', (req, res) => {
    const params = {}
    res.status(200).render('home.pug', params);
})

app.get('/contact', (req, res) => {
    const params = {}
    res.status(200).render('contact.pug', params);
})

app.post('/contact', (req, res) => {
    const myData = new User(req.body);
    myData.save().then(() => {
     console.log('The form has been submitted');
    }).catch(()=>{
     res.status(400).render('The form has not been submitted');
    })
     res.status(200).render('contact.pug');
 });


// START THE SERVER
app.listen( PORT, () => {
    console.log(`The Application has started successfully on port ${PORT}`);
});