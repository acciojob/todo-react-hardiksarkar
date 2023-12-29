import React, { useState } from "react";

export default function Todo() {
  let [todoList, setTodoList] = useState([]);
  let [todo, setTodo] = useState("");
  let [id, setId] = useState(1);

  function addTodoFunc(e) {
    e.preventDefault();
    if (todo.trim() == "") {
      return;
    }
    setTodoList([...todoList, { id: id, value: todo }]);
    setTodo("");
    setId(id + 1);
  }

  function deleteTodoFunc(deleteId) {
    setTodoList(todoList.filter((item) => item.id != deleteId));
  }

  return (
    <div id="main-container">
      <h1>To-Do List</h1>
      <form action="" onSubmit={(e) => addTodoFunc(e)}>
        <input
          type="text"
          name="todo"
          id="todo"
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
        />
        <button>Add Todo</button>
      </form>
      <div>
        {todoList.map((item) => {
          return (
            <ul>
              <li className="my-todo">
                <p key={item.id}>{item.value}</p>
                <button onClick={() => deleteTodoFunc(item.id)}>Delete</button>
              </li>
            </ul>
          );
        })}
      </div>
    </div>
  );
}
