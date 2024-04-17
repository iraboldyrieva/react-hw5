import React, { useState, useLayoutEffect } from "react";

export default function UseLayoutEffectComponent() {
  const [text, setText] = useState("");

  useLayoutEffect(() => {
    if (text) {
      const paragraph = document.createElement("p");
      paragraph.textContent = text;
      document.body.appendChild(paragraph);
    }
  }, [text]);

  return (
    <div>
      <h2>useLayoutEffect:</h2>
      <button onClick={() => setText("New paragraph added")}>
        Add paragraph
      </button>
    </div>
  );
}
