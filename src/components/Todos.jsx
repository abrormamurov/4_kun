function Todos({ todos }) {
  return (
    <>
      {todos &&
        todos.map((todo) => {
          return (
            <li key={todo.id}>
              <h3>Title: {todo.title}</h3>
              <p>Completed: {todo.completed ? "✅" : "❌"}</p>
            </li>
          );
        })}
    </>
  );
}

export default Todos;
