const express = require('express')
const app = express()
const port = 3000

//Sending text response
app.get('/', (req,res) => {
    res.send('Hello World!');
});

//Sending HTML response
app.get('/route1', (req,res) => {
    res.send(`<html><h1 style="color:green;">Hello World</h1></html>`);
});

//Sending JSON response
app.get('/route2', (req,res) => {
    let response = {'success' : true, 'otherdata': 'abcd'}
    res.send(response);
});


app.get('/signUp', (req,res) => {
    res.send(`<html><h1 style="color:green;">Hello World</h1></html>`);
});

app.get('/login', (req,res) => {
    res.send(`<html><h1 style="color:green;">Hello World</h1></html>`);
});


app.listen(port , () => {
    console.log(`App is listering on ${port}`);
});