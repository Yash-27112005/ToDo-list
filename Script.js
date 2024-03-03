const todolist = document.querySelector(".todolist");
const listvalue = document.querySelector(".listvalue");

let todoListValue = [];

const getTodoListLS = () => {
  return JSON.parse(localStorage.getItem("todoData")) || [];
};

const addTodoListLocalStorage = (todo) => {
  return localStorage.setItem("todoData", JSON.stringify(todo));
};

const showTodoList = () => {
  todoListValue = getTodoListLS();
  todoListValue.forEach((curTodo) => {
    const liElement = document.createElement("li");
    liElement.innerHTML = curTodo;
    todolist.append(liElement);
  });
};

const removeTodoList = (e) => {
  console.log(e.target.textContent);
  let currentTodo = e.target;
  console.log(todoListValue);
  alert(`You want to remove ${e.target.textContent}`);
  updatedTodoList = todoListValue.filter(
    (curTodoValue) => curTodoValue !== currentTodo.textContent
  );

  addTodoListLocalStorage(updatedTodoList);
  currentTodo.remove();
  //   todolist.innerHTML="";
  //   showTodoList();
  console.log(updatedTodoList);
};

const addTodoList = (e) => {
  e.preventDefault();

  todoListValue = getTodoListLS();
  let newTodo = listvalue.value.trim();
  console.log(newTodo);

  listvalue.value = "";

  if (newTodo.length !== 0 && !todoListValue.includes(newTodo)) {
    console.log(typeof todoListValue);
    todoListValue.push(newTodo);
    todoListValue = [...new Set(todoListValue)];

    addTodoListLocalStorage(todoListValue);
    // console.log("hello js ");
    const liElement = document.createElement("li");
    liElement.innerHTML = newTodo;
    todolist.append(liElement);
  }
};

showTodoList();

document.querySelector(".btn").addEventListener("click", (e) => {
  addTodoList(e);
});
todolist.addEventListener("click", (e) => removeTodoList(e));
