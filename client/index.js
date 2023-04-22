import Chemicals from "../server"
let chemical=[]
let data=JSON.parse(Chemicals);
chemical.push(data)

window.addEventListener('load', function(event){
    fetch('http://127.0.0.1:8080/')
     .then(response => response.text())
     .then(body =>
        document.getElementById('things').innerHTML=body)
        .catch((error) => alert(error))
  });
  
 
    function renderElements (chemical){
      //alert(things);
      let container = document.getElementById('things');
      for(let element of chemical){
         let item = document.createElement('li')
         item.innerHTML = element;
         container.appendChild(item);
      }
      }
  submit.addEventListener('click',async function(event){
          event.preventDefault();
          let newthing = document.getElementById('newthing').value;
          let parameters = {'newthing': newthing};
          let response = await fetch('http://127.0.0.1:8080/element/add',{
          method: 'POST',
          headers: {
             'Content-Type': 'application/json'
          },
          body: JSON.stringify(parameters)
       });
       let body = await response.json();
       renderThings(body);
       })

       function validateForm() {
        var x = document.forms["InputForm"]["newthing"].value;
        if (x == "") {
          alert("Name must be filled out");
          return false;
        }
        else{
          alert(x);
        }
      } 
      let submit = document.getElementById('submit_thing');