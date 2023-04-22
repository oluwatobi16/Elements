
//Initial Get request
window.addEventListener('load', async function(event) {
    try{
   let response = await fetch('http://127.0.0.1:8090/list');
    let body = await response.json();
    renderThings(body);
    } catch(e) {
       alert(e);
    }
 })
//function to dynamically load all Elements to page once fetched
 function renderThings(Chemicals){
   let container = document.getElementById('things')
   container.innerHTML= '';
   for (let i = 0; i < Chemicals.length; i++){
      let obj = Chemicals[i]
      var x = document.createElement('tr')
      x.setAttribute('id','' + Chemicals.indexOf(i))
      container.appendChild(x);

      var element_name = document.createElement('td')
      element_name.innerHTML = obj.name
      x.appendChild(element_name)

      var element_group = document.createElement('td')
      element_group.innerHTML = obj.group
      x.appendChild(element_group)
      
      var element_symbol = document.createElement('td')
      element_symbol.innerHTML = obj.symbol
      x.appendChild(element_symbol)

      var element_price = document.createElement('td')
      element_price.innerHTML = obj.price
      x.appendChild(element_price)
      
      
      var amount = document.createElement('td')
      amount.innerHTML=0
      x.appendChild(amount)
      var increase= document.createElement('button')
      increase.innerHTML = '+'
      increase.setAttribute('onclick','Increment')
      increase.setAttribute('id', i)
      var decrease=document.createElement('button')
      decrease.innerHTML = '-'
      decrease.setAttribute('onclick','Decrement')
      decrease.setAttribute('id', '-' + i)
      amount.appendChild(increase)
      amount.appendChild(decrease)
   }
  
 }
