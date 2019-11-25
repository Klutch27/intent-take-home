const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');

express.static(path.join(__dirname, '../build'));

app.listen(PORT, ()=>{
  console.log(`Server listening on PORT ${PORT}`);
});