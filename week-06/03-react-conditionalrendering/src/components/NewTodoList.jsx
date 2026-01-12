function NewTodoItem({thing, isDone }){
    return(
        <li>
        {thing}{ isDone && " ✅"};
        </li>)
}

export default function NewTodoList(){
    return(
        <section>
      <h1>Todo List</h1>
      <ul>
        <NewTodoItem thing="Learn JSX" isDone={true} />
        <NewTodoItem thing="Build a Todo App" isDone={false} />
        <NewTodoItem thing="Review React basics" isDone={true} />
      </ul>
    </section>
    )
}