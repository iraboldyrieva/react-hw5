import React, { useState, useEffect } from "react";

export default function UseEffectComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component rendered or updated");
  });

  return (
    <div>
      <h2>useEffect:</h2>
      <p>Counter: {count}</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
