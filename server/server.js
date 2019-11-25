const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');
const cache = require('./cache.js');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

express.static(path.join(__dirname, '../build'));

app.post('/update', );

app.listen(PORT, ()=>{
  console.log(`Server listening on PORT ${PORT}`);
});