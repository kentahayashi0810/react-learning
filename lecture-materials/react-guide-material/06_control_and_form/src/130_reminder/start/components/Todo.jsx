import { useState } from "react";
import List from "./List";
import Form from "./Form";

const Todo = () => {
  const todosList = [
    {
      id: 1,
      content: "店予約する",
    },
    {
      id: 2,
      content: "卵買う",
    },
    {
      id: 3,
      content: "郵便出す",
    },
  ];

  const [todos, setTodos] = useState(todosList);
  const [todoInput, setTodoInput] = useState("");
  const [todoItemCounter, setTodoItemCounter] = useState(todos.length + 1);

  const deleteTodo = (id) => {
    setTodos((prev) => {
      const newtodos = prev
        .map((todo) => ({ ...todo }))
        .filter((todo) => id !== todo.id);
      return newtodos;
    });
  };

  const addTodo = () => {
    setTodos((prev) => {
      const newtodos = prev.map((todo) => ({ ...todo }));
      const newTodo = {
        id: todoItemCounter,
        content: todoInput,
      };
      newtodos.push(newTodo);

      return newtodos;
    });

    setTodoInput("");
    setTodoItemCounter((prev) => prev + 1);
  };

  return (
    <>
      <List todos={todos} deleteTodo={deleteTodo} />
      <Form todoInputState={[todoInput, setTodoInput]} addTodo={addTodo} />
    </>
  );
};

export default Todo;
