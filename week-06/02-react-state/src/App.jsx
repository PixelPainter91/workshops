import { useState, useEffect } from "react";
import ButtonWithState from "./components/ButtonWithState";
import ButtonWithProps from "./components/ButtonWithProps";
import LilDeath from "./components/LilDeath";
import Navbar from "./components/Navbar/Navbar";


function App() {
  const [num, setNum] = useState(0);
  useEffect(() => {
    const moveSpeed = 10; 

    const handleWheel = (e) => {
      e.preventDefault();
      window.scrollBy({
        top: e.deltaY * (moveSpeed *100 ),
        left: e.deltaX * (moveSpeed *100),
      });
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => window.removeEventListener("wheel", handleWheel);
  }, []);
  return (
    <>
      <Navbar />
      

      <main className="game-area">
        <LilDeath />
      </main>
      

      <div className="controlskey">
        <h2>lilDeath Controls:</h2>
        <h3>Once selected:</h3>
        <p>move up, down, left, right with the arrow keys</p>
        <p>attack with "a"</p>
      </div>

      <section className="ui-demo">
        <h1>State with Components</h1>

        <h2>Buttons with their own state</h2>
        <ButtonWithState />
        <ButtonWithState />

        <h2>State passed as props</h2>
        <ButtonWithProps num={num} setNum={setNum} />
        <ButtonWithProps num={num} setNum={setNum} />
      </section>
      <section className="ui-demo">
        <h1>State with Components</h1>

        <h2>Buttons with their own state</h2>
        <ButtonWithState />
        <ButtonWithState />

        <h2>State passed as props</h2>
        <ButtonWithProps num={num} setNum={setNum} />
        <ButtonWithProps num={num} setNum={setNum} />
      </section>
      <section className="ui-demo">
        <h1>State with Components</h1>

        <h2>Buttons with their own state</h2>
        <ButtonWithState />
        <ButtonWithState />

        <h2>State passed as props</h2>
        <ButtonWithProps num={num} setNum={setNum} />
        <ButtonWithProps num={num} setNum={setNum} />
      </section>
      <section className="ui-demo">
        <h1>State with Components</h1>

        <h2>Buttons with their own state</h2>
        <ButtonWithState />
        <ButtonWithState />

        <h2>State passed as props</h2>
        <ButtonWithProps num={num} setNum={setNum} />
        <ButtonWithProps num={num} setNum={setNum} />
      </section>
      <section className="ui-demo">
        <h1>State with Components</h1>

        <h2>Buttons with their own state</h2>
        <ButtonWithState />
        <ButtonWithState />

        <h2>State passed as props</h2>
        <ButtonWithProps num={num} setNum={setNum} />
        <ButtonWithProps num={num} setNum={setNum} />
      </section>
      <section className="ui-demo">
        <h1>State with Components</h1>

        <h2>Buttons with their own state</h2>
        <ButtonWithState />
        <ButtonWithState />

        <h2>State passed as props</h2>
        <ButtonWithProps num={num} setNum={setNum} />
        <ButtonWithProps num={num} setNum={setNum} />
      </section>
      <section className="ui-demo">
        <h1>State with Components</h1>

        <h2>Buttons with their own state</h2>
        <ButtonWithState />
        <ButtonWithState />

        <h2>State passed as props</h2>
        <ButtonWithProps num={num} setNum={setNum} />
        <ButtonWithProps num={num} setNum={setNum} />
      </section>
      <section className="ui-demo">
        <h1>State with Components</h1>

        <h2>Buttons with their own state</h2>
        <ButtonWithState />
        <ButtonWithState />

        <h2>State passed as props</h2>
        <ButtonWithProps num={num} setNum={setNum} />
        <ButtonWithProps num={num} setNum={setNum} />
      </section>
      <section className="ui-demo">
        <h1>State with Components</h1>

        <h2>Buttons with their own state</h2>
        <ButtonWithState />
        <ButtonWithState />

        <h2>State passed as props</h2>
        <ButtonWithProps num={num} setNum={setNum} />
        <ButtonWithProps num={num} setNum={setNum} />
      </section>
      <section className="ui-demo">
        <h1>State with Components</h1>

        <h2>Buttons with their own state</h2>
        <ButtonWithState />
        <ButtonWithState />

        <h2>State passed as props</h2>
        <ButtonWithProps num={num} setNum={setNum} />
        <ButtonWithProps num={num} setNum={setNum} />
      </section>
      <section className="ui-demo">
        <h1>State with Components</h1>

        <h2>Buttons with their own state</h2>
        <ButtonWithState />
        <ButtonWithState />

        <h2>State passed as props</h2>
        <ButtonWithProps num={num} setNum={setNum} />
        <ButtonWithProps num={num} setNum={setNum} />
      </section>
      <section className="ui-demo">
        <h1>State with Components</h1>

        <h2>Buttons with their own state</h2>
        <ButtonWithState />
        <ButtonWithState />

        <h2>State passed as props</h2>
        <ButtonWithProps num={num} setNum={setNum} />
        <ButtonWithProps num={num} setNum={setNum} />
      </section>
      <section className="ui-demo">
        <h1>State with Components</h1>

        <h2>Buttons with their own state</h2>
        <ButtonWithState />
        <ButtonWithState />

        <h2>State passed as props</h2>
        <ButtonWithProps num={num} setNum={setNum} />
        <ButtonWithProps num={num} setNum={setNum} />
      </section>
      <section className="ui-demo">
        <h1>State with Components</h1>

        <h2>Buttons with their own state</h2>
        <ButtonWithState />
        <ButtonWithState />

        <h2>State passed as props</h2>
        <ButtonWithProps num={num} setNum={setNum} />
        <ButtonWithProps num={num} setNum={setNum} />
      </section>
      <section className="ui-demo">
        <h1>State with Components</h1>

        <h2>Buttons with their own state</h2>
        <ButtonWithState />
        <ButtonWithState />

        <h2>State passed as props</h2>
        <ButtonWithProps num={num} setNum={setNum} />
        <ButtonWithProps num={num} setNum={setNum} />
      </section>
    </>
  );
}

export default App;
