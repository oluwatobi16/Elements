window.addEventListener('load', function(event){
    fetch('http://127.0.0.1:8080/')
     .then(response => response.text())
     .then(body =>
        document.getElementById('Chemicals').innerHTML=body)
        .catch((error) => alert(error))
  });
  
 
    function renderElements (Chemicals){
      //alert(things);
      let container = document.getElementById('Elements');
      for(let chemical of Chemicals){
         let item = document.createElement('li')
         item.innerHTML = chemical;
         container.appendChild(item);
      }
      }
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
