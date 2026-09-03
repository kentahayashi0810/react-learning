import { createContext, useContext, useReducer } from "react";

const reducer = (todos, { type, payload }) => {
  switch (type) {
    case "CREATE": {
      return [...todos, payload];
    }

    case "DELETE": {
      const newTodos = todos.filter((todo) => {
        return todo.id !== payload.id;
      });
      return newTodos;
    }

    case "UPDATE": {
      const newTodos = todos.map((todo) =>
        todo.id === payload.id ? payload : todo,
      );
      return newTodos;
    }

    default:
      break;
  }
};

const TodoContext = createContext();
const TodoDispatchContext = createContext();

export const TodoProvider = ({ children }) => {
  const todosList = [
    {
      id: 1,
      content: "店予約する",
      editing: false,
    },
    {
      id: 2,
      content: "卵買う",
      editing: false,
    },
    {
      id: 3,
      content: "郵便出す",
      editing: false,
    },
  ];

  const [todos, dispatch] = useReducer(reducer, todosList);

  return (
    <TodoContext.Provider value={todos}>
      <TodoDispatchContext.Provider value={dispatch}>
        {children}
      </TodoDispatchContext.Provider>
    </TodoContext.Provider>
  );
};

export const useTodo = () => {
  return useContext(TodoContext);
};
export const useTodoDispatch = () => {
  return useContext(TodoDispatchContext);
};
