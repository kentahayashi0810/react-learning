import { createContext, useContext, useReducer } from "react";

const reducer = (state, { type, payload, id, content }) => {
  switch (type) {
    case "CREATE":
      return [...state, payload];

    case "DELETE":
      const newTodos = state.filter((todo) => {
        return todo.id !== id;
      });

      return newTodos;

    case "UPDATE":
      const target = state.find((todo) => {
        return todo.id === id;
      });

      const rest = state.filter((todo) => {
        return todo.id !== id;
      });

      return [...rest, { ...target, content }];

    case "TOGGLE-EDIT":
      const targetTodo = state.find((todo) => {
        return todo.id === id;
      });

      const restTodos = state.filter((todo) => {
        return todo.id !== id;
      });

      return [...restTodos, { ...targetTodo, editing: !targetTodo.editing }];

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
