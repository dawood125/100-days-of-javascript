import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  let increaseCounter = () => {
    setCount((prev) => prev + 1);
  }
  let decreaseCounter = () => {
    if (count <= 0) {
      alert(" Cant decrease in the negative number");
    }
    else {
      setCount((prev) => prev - 1);
    }
  }
  let resetCounter = () => {
    setCount(0);
  }
  return (
    <main className="MainSection">
      <h1 className="heading">Counter Problem Solution</h1>
      <button onClick={resetCounter}>Reset Counter</button>
      <div className="CounterSection">
        <div>
          <button onClick={decreaseCounter}>Decrease</button>
        </div>
        <div className="counter">{count}</div>
        <div>
          <button onClick={increaseCounter}>Increase</button>
        </div>
      </div>
    </main>
  );
};

export default Counter;
