const express = require('express');
const app = express();

const path = require('path')
app.use(express.static('Chemicals'))
let Elements = require('./Elements.json')


app.get('/',(req, res) => {
  res.sendFile(path.resolve('client','index.html'));
})
app.get('/admin',(req,res) =>{
  res.sendFile(path.resolve('client','admin.html'));
})


app.listen(8080, () => console.log('server running'));