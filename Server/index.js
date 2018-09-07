const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser')

const app =express();

app.use(bodyParser.json())
app.use(session ({
    secret: "session",
    resave: false,
   saveUninitialized: false 
}))

app.get('/', function(req,res) {
    if (!req.session.userName && !req.session.visitCount){
    req.session.userName = "Jacob"
    req.session.visitCount = 1;
    res.status(201).send(req.session)
    }else {
        req.session.visitCount += 1;
        res.status(200).send(req.session);
    }
})

app.post('/api/cart', (req, res) => {
    let { cart } = req.body;
    req.session.cart = cart;
    res.send(req.session)
})

app.listen(4000, () => {
    console.log('Work you stupid thing... port 3000')
})
