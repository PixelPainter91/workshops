import React from "react";
import PackingList from "./components/PackingList";
import TodoList from "./components/TodoList";
import NewTodoList from "./components/NewTodoList";
import GrumpyButton from "./components/GrumpyButton";

function App() {
  return (
    <div className="App">
      <PackingList />
      <TodoList />
      <NewTodoList />
      <GrumpyButton />
    </div>
  );
}

export default App;

