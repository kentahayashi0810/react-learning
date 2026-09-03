import { useTodo, useTodoDispatch } from "../context/TodoContext";
import Item from "./Item";

const List = () => {
  const todos = useTodo();

  console.log(todos);

  return (
    <div>
      {todos.map((todo) => (
        <Item todo={todo} />
      ))}
    </div>
  );
};

export default List;
