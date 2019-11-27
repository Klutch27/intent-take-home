const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');
// const cache = require('./cache.js');
const session = require('express-session');
const cartController = require('./controllers/cartController.js');
const uid = require('uid-safe');

app.use(session({
  genid: function(req){
    return uid.sync(18);
  },
  secret: 'in_production_Gareth_would_use_process.env_instead_of_this_nonsense_string',
  name: 'intent',
  // note: I'm using the default sessionStore for this take home since it's a simple application. However the default store is not suitable for a production environment as it leaks memory under most conditions. For the purpose of this challenge, however, it will suffice.
  path: '*',
  resave: false,
  saveUninitialized: true
}));


app.use(express.json());
app.use(express.urlencoded({extended: true}));

express.static(path.join(__dirname, '../build'));

app.get('/', cartController.checkIfCartExists, (req, res, next)=>{
  console.log('req.session.id', req.session.id);
  res.status(200).json(req.body.userCache);
});

// app.post('/update', );

app.listen(PORT, ()=>{
  console.log(`Server listening on PORT ${PORT}`);
});


app.use('*', (req, res, next)=>{
  res.status(404).json('The page you are looking for does not exist.')
});