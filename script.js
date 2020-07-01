var li;
// alert("We got it bruh!")
var addButton = document.getElementById('add');
addButton.addEventListener('click',addItem)

var removeButton = document.getElementById('remove');
removeButton.addEventListener('click',removeItem)

var removeAllButton = document.getElementById('removeAll');
removeAllButton.addEventListener('click',removeAllItems)


function addItem(){
    var ul=document.getElementById("list")
   var input = document.getElementById('input');
   var item = input.value;
   var textnode = document.createTextNode(item);
//    console.log(item)
   if (item ===''){
       return false
   }  
   else{
      
       var li=document.createElement('li');
       var checkbox=document.createElement('input')
       var label=document.createElement('label')
       checkbox.type="checkbox"
       checkbox.setAttribute('id','check')
       li.appendChild(checkbox);
       label.appendChild(textnode);
       li.appendChild(label);
       ul.insertBefore(li,ul.childNodes[0]);
       setTimeout(()=>{
           li.className='mycheck'
        },76)
       setTimeout(()=>{
           li.className='visual'
        },150)
        
       input.value=""
   }
}

function removeItem(){
    var ul=document.getElementById("list")
    li=ul.children;
    for (let index = 0; index < li.length; index++) {
        const element = li[index];
        while(li[index] && li[index].children[0].checked){
            ul.removeChild(li[index])
        }
    }
}

function removeAllItems(){
    var ul=document.getElementById("list")
    let index=0
    li=ul.children
    // console.log(li.length)
    while(index<li.length){
        ul.remove(li[index])
        index++
    }
    let ul1=document.createElement('ul')
    ul1.setAttribute('id','list')
    document.querySelector('#container').appendChild(ul1)
    console.log(li.length)
}