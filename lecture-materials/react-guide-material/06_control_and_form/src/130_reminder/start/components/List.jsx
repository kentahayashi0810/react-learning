const List = ({ todos, deleteTodo }) => {
  return (
    <>
      {todos.map((todo) => (
        <div key={todo.id}>
          <button onClick={() => deleteTodo(todo.id)}>完了</button>
          <span>{todo.content}</span>
        </div>
      ))}
    </>
  );
};

export default List;
