import React from "react";
import Todo from "./Todo";

function TodoList({ todos, check, clickDelete }) {
  return todos.map((todo) => {
    return (
      <Todo key={todo.id} check={check} todo={todo} clickDelete={clickDelete} />
    );
  });
}

export default TodoList;
