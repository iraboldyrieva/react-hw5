import React, { useState } from "react";

export default function UseStateComponent() {
  const [name, setName] = useState("");
  const names = ["Ann", "Alex", "Andrew", "Mary", "Harry", "Bill"];

  return (
    <div>
      <h2>useState:</h2>
      <button
        onClick={() => setName(names[Math.floor(Math.random() * names.length)])}
      >
        Say Hello
      </button>
      <p>Hello {name}</p>
    </div>
  );
}
