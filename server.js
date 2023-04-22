const express = require('express');
const app = express();
const path = require('path')
const fs = require('fs')
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(express.static('body-parser'));
app.use(express.static('client'))

let Chemicals = require('./Chemicals.json')
const { ok } = require('assert');
const { json } = require('body-parser');



app.get('/',(req, res) => {
  res.status(200).sendFile(path.join('client','index.html'))

})
app.get('/admin',(req,res) =>{
  res.status(200).sendFile(path.resolve('client','admin.html'));
})
app.get('/list', function(req, res){
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8090');
  if(Chemicals == undefined || Chemicals.length == 0)
  {
   res.status(404).json("Sorry, Chemicals list is empty");
  }
  else{
   res.send(Chemicals)
  }
 })
 app.post('/thing/add', function(req,res){
  console.log(req.body);
  const newID = Chemicals[Chemicals.length - 1].id + 1;
  const newelement = Object.assign({id:newID}, req.body)
  Chemicals.push(newelement)
  fs.writeFile('./Chemicals.json',JSON.stringify(Chemicals), (err) =>{
    res.status(201)

  })


});


app.listen(8090, () => console.log('server running'));
