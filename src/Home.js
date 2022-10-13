import React, { createRef, useRef } from "react";

export default function Home() {
  let input = useRef(null);
  function inputControl() {
    input.current.value = "I am Deeksha";
    input.current.focus();
  }
  return (
    <div>
      <input type="text" ref={input} /> <br /> <br />
      <button onClick={inputControl}> Click me </button>
    </div>
  );
}
