


todoList = [];

function addtoList(){
  const inputElement = document.querySelector('.js-task-input');
  const name = inputElement.value;
  todoList.push({name});
  inputElement.value = '';

  rendertodoList();
}



document.querySelector('.js-add-todo-button').addEventListener('click', () => {
  addtoList();
});



function rendertodoList(){
  let todoListHTML = '';

  todoList.forEach((todoObject, index) => {
    const { name } = todoObject;
    const html = 
    ` <div> ${name}</div> 
      <button 
      class = "delete-todo-button js-delete-todo-button">Delete</button>
    `;
    todoListHTML += html;
  });
  document.querySelector('.js-current-tasks-grid').innerHTML = todoListHTML;

  document.querySelectorAll('.js-delete-todo-button').forEach((deleteButton, index) => {
    deleteButton.addEventListener('click', () => {
    todoList.splice(index,1);
    rendertodoList();
    });
  })
}

function getCurrentDate() {
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const currentDate = new Date();
  const currentDay = currentDate.getDay();
  const month = String(currentDate.getMonth() + 1);
  const currentMonName = months[month-1];
  const currentDayName = days[currentDay];
  const dayNumber = String(currentDate.getDate()).padStart(2, '0');
  return `${currentDayName}, ${currentMonName} ${dayNumber}`;
}
function displayDate() {
  const html = `${getCurrentDate()}`;
  document.querySelector('.js-current-date').textContent = html;
}


displayDate();






