import React, { useRef } from "react";

export default function UseRefComponent() {
  const inputRef = useRef();

  return (
    <div>
      <h2>useRef:</h2>
      <input ref={inputRef} type="text" />
      <button onClick={() => inputRef.current.focus()}>Focus me</button>
      <button onClick={() => inputRef.current.blur()}>Blur me</button>
    </div>
  );
}
