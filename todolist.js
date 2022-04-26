var btn = document.getElementById('btn');
var input = document.getElementById('input');
var message =document.getElementById('message');
  
function dex (){
  if(input.value.length>0){
   var li = document.createElement('li');
   var displaymode = document.createTextNode(input.value);
   li.appendChild(displaymode);
   li.innerHTML +='<button onclick="this.parentNode.remove();"> delete</button >'
   message.appendChild(li);
   input.value= ""; 
  };
};
function createlist(){
    var li = document.createElement('li');
    var displaymode = document.createTextNode(input.value);
    li.appendChild(displaymode);
    li.innerHTML +='<button onclick="this.parentNode.remove();"> delete</button >'
    message.appendChild(li);
    input.value= "";    
};
function inputlist(){
    return input.value.length;
}
function keypresslisten(e){
    if(inputlist()>0 && e.keyCode===13){
        createlist();

}};

btn.addEventListener('click', dex );
input.addEventListener('keypress', keypresslisten);
