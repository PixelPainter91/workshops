
import './App.css'

function App() {
function handleClick(message) {
  console.log(message);
}
  return (
    <>
  
<button onClick={() => handleClick("Hello!")}>Click me and I say hello!</button>
<button onClick={() => handleClick("Goodbye!")}>Click me and I say goodbye!</button>
    </>
  )
}

export default App
