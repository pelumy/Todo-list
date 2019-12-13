// selecting dom elements to manipulate them
let input = document.querySelector('.text-input');
let ul = document.querySelector('ul');
// event listener
input.addEventListener('keypress',function (keypressed) {
   if (keypressed.which === 13) {
    //    create lists when enter is pressed
    let li = document.createElement('li');
    let newTodo = this.value;
    this.value = '';

    ul.appendChild(li).append(newTodo);
   } 
});
// user can delete an element

//user can save or clear
let saveBtn = document.querySelector('.save');
let clearBtn = document.querySelector('.clear');
let body = document.querySelector('body');

saveBtn.addEventListener('click', function(){
    localStorage.setItem('todo-items', ul.innerHTML);
    alert('Todo list saved!!!');
});

// clearBtn.addEventListener('click', function(){
//     localStorage.removeItem('todo-items', ul.innerHTML);
// });
function clearAll(){
    
   if (!window.confirm('Are you sure you want to clear all?')){
       return;
   }else{
    document.querySelector('.todo-items').innerHTML = '';    
   }
    
};