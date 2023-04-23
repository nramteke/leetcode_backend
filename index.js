const express = require('express')
const bodyParser = require('body-parser');
const { use } = require('express/lib/application');
const app = express()
const port = 3000

app.use(bodyParser.json());

let users = [];
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


app.post('/signup', (req,res) => {
    //Add logic to decode the body
    //Body should have email and password
    
    let {email, password, role} = req.body;
    // Add user to the users array
   
    if(email && password && role){
        if(users != null && users != undefined){
            if(users.length > 0){
                let user = users.find(user => user.email === email);
                if(user){
                    res.send(`User already exists with ${email}`).status(200);
                    return
                }
            }
            users.push(req.body);
            res.send(`Your signup with ${email} is successful.`).status(200);
        }
        
    }
    else{
        res.status(401);
        res.send(`Your signup with ${email} failed..`);
    }
    console.log("Users " + JSON.stringify(users));
});

app.post('/login', (req,res) => {
    //Add logic to decode the body
    //Body should have email and password

    //
    res.send(`<html><h1 style="color:green;">Hello World</h1></html>`);
});

app.get('/questions', (req,res) => {
    res.send(`<html><h1 style="color:green;">Hello World</h1></html>`);
});

app.post('/submissions', (req,res) => {
    res.send(`<html><h1 style="color:green;">Hello World</h1></html>`);
});


app.listen(port , () => {
    console.log(`App is listening on ${port}`);
});