
// Prova utilizzo ExpressJS

const express = require('express'); // Richiede il modulo Express
const app = express();
const bodyParser = require('body-parser');

// Dice ad Express che useremo bodyparser a livelli base e a livelli più annidati (urlencoded)

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Rendering engine Jade

app.set('view engine', 'jade');

// Middleware per funzioni satiche

app.use(express.static('public'));

app.get('/greetings/:name', function(req, res){
    let userName = req.params.name;
    res.render('index', {
        title: 'This is a NodeJS course', message: 'Hello ' + userName +', NodeJS first app'})
})

// Logga nella console nome e cognome inseriti nel form in index.html

app.post('/new-user', (req, res) => {
    console.log('This is the body:', req.body);
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;

    let message = {
        title: 'The user was created',
        text: 'User created',
        firstName: firstName,
        lastName: lastName
    }
    res.render('user-confirm', message); 
})

// Determina la porta del server

app.listen(3000, function(){
    console.log('Server is listening in port 3000');
})