function completeTodo(event) {
   const value = event.target.getAttribute('aria-checked');
   if (value !== 'true') {
    event.target.setAttribute('aria-checked', 'true');
   } else {
    event.target.setAttribute('aria-checked', 'false');
   }
}

function removeTodo(event) {
    event.target.parentNode.remove();
}

function addTodo(event) {
    event.preventDefault();
    const item = document.createElement('li');
    item.innerText = document.querySelector("#item").value;
    item.addEventListener("click", completeTodo)
    
    const button = document.createElement('button');
    button.innerText = 'x';
    button.addEventListener("click", removeTodo);
    item.append(button);

    const list = document.querySelector('ul');
    list.appendChild(item);
}

document.querySelector("form").addEventListener("submit", addTodo);