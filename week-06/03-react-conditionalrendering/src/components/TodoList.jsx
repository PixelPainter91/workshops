function TodoItem({ task, isDone }) {
  return (
    <li>
      {task}
      {isDone && " ✅"}
    </li>
  );
}

export default function TodoList() {
  return (
    <section>
      <h1>Todo List</h1>
      <ul>
        <TodoItem task="Learn JSX" isDone={true} />
        <TodoItem task="Build a Todo App" isDone={false} />
        <TodoItem task="Review React basics" isDone={true} />
      </ul>
    </section>
  );
}
