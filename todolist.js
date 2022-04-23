var bnt = document.getElementById('btn');
varinput = document.getElementById('input');
var list = document.getElementById('div2');

bnt.addEventListener('click',function(){
    if(input.value.length >0){
    var todolist = input.value;
    list.innerText = todolist
    input.value = '';
    br
}
});