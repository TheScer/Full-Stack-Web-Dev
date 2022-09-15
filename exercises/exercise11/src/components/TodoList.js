import React from "react";

function TodoList(props) {
  let content = props.todos.map((todo) => (
    <div key={todo.id}>
      <h2>{todo.text}</h2>
      <h3>{todo.date}</h3>
      <br></br>
    </div>
  ));

  return <div>{content}</div>;
}

export default TodoList;
