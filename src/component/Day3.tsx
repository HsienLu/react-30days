import React, {useState} from "react";
import {v4 as uuidv4} from "uuid";
import useLocalStorage from "../hooks/use-local-storages"; // 假設你有一個自定義的 useLocalStorage hook

interface Todo {
  id: string;
  text: string;
  done: boolean;
}

function Day3() {
  const [newTodo, setNewTodo] = useState<string>("");
  const [todos, setTodos] = useLocalStorage<Todo[]>("todolist");

  const handleAddNewTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTodos([...todos, {id: uuidv4(), text: newTodo, done: false}]);
    setNewTodo("");
  };

  const handleToggleTodo = (todoToToggle: Todo) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === todoToToggle.id) {
          return {
            ...todoToToggle,
            done: !todoToToggle.done,
          };
        }
        return todo;
      })
    );
  };

  return (
    <div>
      <h1>Todo List App</h1>
      <form onSubmit={handleAddNewTodo}>
        <input
          type="text"
          placeholder="Add a new todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              style={{textDecoration: todo.done ? "line-through" : "none"}}
              onClick={() => handleToggleTodo(todo)}
            >
              {todo.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Day3;
