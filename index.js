window.addEventListener('load', function(event){
    fetch('http://127.0.0.1:8080/')
     .then(response => response.text())
     .then(body =>
        document.getElementById('things').innerHTML=body)
        .catch((error) => alert(error))
  });
  
  function renderThings (Fruits){
    //alert(things);
    let container = document.getElementById('things');
    container.innerHTML= ''
    for(let fruit of Fruits){
       let item = document.createElement('li')
       item.innerHTML = fruit;
       container.appendChild(item);
    }
    }  
