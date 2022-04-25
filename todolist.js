var btn = document.getElementById('btn');
var input = document.getElementById('input');
var message =document.getElementById('message');
  
function dex (){
   var li = document.createElement('li');
   var displaymode = document.createTextNode(input.value);
   li.appendChild(displaymode);
   li.innerHTML +='<button onclick="this.parentNode.remove();"> delete</button >'
   message.appendChild(li);
   input.value= "";
}
btn.addEventListener('click', dex );
