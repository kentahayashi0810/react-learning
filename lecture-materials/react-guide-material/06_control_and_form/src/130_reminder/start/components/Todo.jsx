import { useState } from "react";

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
  const [todoItemCounter, setTodoItemCounter] = useState(todos.length);

  const deleteTodo = (id) => {
    setTodos((prev) => {
      const newtodos = prev
        .map((todo) => ({ ...todo }))
        .filter((todo) => id !== todo.id);
      return newtodos;
    });
  };

  const addTodo = () => {
    setTodoItemCounter((prev) => prev + 1);
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
  };

  return (
    <>
      {todos.map((todo) => (
        <div key={todo.id}>
          <button onClick={() => deleteTodo(todo.id)}>完了</button>
          {todo.content}
        </div>
      ))}
      <input
        type="text"
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
      />
      <button onClick={addTodo}>追加</button>
    </>
  );
};

export default Todo;
