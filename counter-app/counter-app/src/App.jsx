import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const [className, setClassName] = useState("");

  useEffect(() => {
    if (counter > 0) {
      setClassName("counter-positive");
    } else if (counter === 0) {
      setClassName("counter-zero");
    } else {
      setClassName("counter-negative");
    }
  }, [counter]);
  const increaseCounter = () => {
    setCounter(counter + 1);
  };

  const decreaseCounter = () => {
    setCounter(counter - 1);
  };
  return (
    <div className="container">
      <div className="counter-container">
        <button onClick={increaseCounter}>+</button>
        <input
          className={`counter ${className}`}
          type="text"
          value={counter}
          onChange={(e) => setCounter(e.target.value)}
          readOnly
        />
        <button onClick={decreaseCounter}>-</button>
      </div>
    </div>
  );
}

export default App;
