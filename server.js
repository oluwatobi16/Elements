const express = require('express');
const app = express();

const path = require('path')
app.use(express.static('Chemicals'))
let chemical=[]
let Chemicals = require('./Chemicals.json')


app.get('/',(req, res) => {
  res.sendFile(path.resolve('client','index.html'));
})
app.get('/admin',(req,res) =>{
  res.sendFile(path.resolve('client','admin.html'));
})
app.get('/Chemicals', function(req, resp){
  if(Chemicals == undefined || Chemicals.length == 0)
  {
   resp.status(404).json("Sorry folks, don't have a list of Jugnoo things!");
  }
  else{
    resp.json(Chemicals);
  }
 })
 app.post('/element/add', function(req,resp){
  //console.log(req)
 console.log(req.body);
  resp.send("I am Posting!");
  const newchemical= req.body.newchemical;
  chemical.push(newchemical);
});


app.listen(8080, () => console.log('server running'));
