


todoList = [];



function addtoList(){
  const inputElement = document.querySelector('.js-name-input');

  const dateElement = document.querySelector('.js-date');

  const dateVal = dateElement.value;
  const name = inputElement.value;

  todoList.push({name, 
    dueDate: dateVal});
  inputElement.value = '';

  rendertodoList();
}



document.querySelector('.js-add-todo-button').addEventListener('click', () => {
  addtoList();
});



function rendertodoList(){
  let todoListHTML = '';

  todoList.forEach((todoObject, index) => {
    const { name, dueDate } = todoObject;
    const html = 
    ` <div> ${name}</div> 
      <div>${dueDate}</div>
      <button 
      class = "delete-todo-button js-delete-todo-button">Delete</button>
    `;
    todoListHTML += html;
  });
  document.querySelector('.js-todo-list').innerHTML = todoListHTML;

  document.querySelectorAll('.js-delete-todo-button').forEach((deleteButton, index) => {
    deleteButton.addEventListener('click', () => {
    todoList.splice(index,1);
    rendertodoList();
    });
  })
}





