import "./App.css";
import Counter from "./components/Counter";
import { useState } from "react";

function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  return (
    <div className="App">
      <p>yo whats poppin</p>
      <div>
        <Counter count={count1} setCount={setCount2} />
        <Counter count={count2} setCount={setCount1} />
      </div>
    </div>
  );
}

export default App;
