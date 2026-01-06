import "./App.css";

function App() {
  //js 
  const myName = "Rory";
  const year = new Date().getFullYear();


  //our html using jsx
  return (
    <>
      <div>
        <h1>Hello, world!</h1>
        <p>This is my first react app.</p>
        <p> my name is {myName} and the year is {year}</p>
      </div>

      <div>
        <Greeting />
      </div>
    </>
  );
}

export default App;

export function Greeting() {
  const component = "This is a component!"
  {/* The result will be Hello John*/}
  return <h1 className="componentInfo">Hello {component}</h1>;
}

