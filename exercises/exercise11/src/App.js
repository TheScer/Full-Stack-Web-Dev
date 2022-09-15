import AddTodo from "./components/AddTodo";
import { useState, useEffect } from "react";
import TodoList from "./components/TodoList";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const addTodoHandler = async (todo) => {
    console.log(todo);
    const response = await fetch(
      "https://todo-list-bc991-default-rtdb.europe-west1.firebasedatabase.app/todos.json",
      {
        method: "POST",
        body: JSON.stringify(todo),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
  };

  const fetchTodos = async () => {
    const response = await fetch(
      "https://todo-list-bc991-default-rtdb.europe-west1.firebasedatabase.app/todos.json"
    );
    const data = await response.json();

    const fetchedTodos = [];

    for (const key in data) {
      fetchedTodos.push({
        id: key,
        text: data[key].text,
        date: data[key].date,
      });
    }

    setTodos(fetchedTodos);
  };

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  let noTasks = null;

  if (todos.length === 0) {
    noTasks = <p>no todos yet!</p>;
  } else {
    noTasks = null;
  }

  return (
    <>
      <section>
        <AddTodo onAddTodo={addTodoHandler} />
      </section>
      <section>
        <TodoList todos={todos}></TodoList>
      </section>
      <section>{noTasks}</section>
    </>
  );
};

export default App;
