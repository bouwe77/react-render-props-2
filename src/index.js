import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

function App() {
  const [on, setOn] = useState(false);

  function save(event) {
    event.preventDefault();
    console.log("Let's save the on value: " + on);
  }

  return (
    <form onSubmit={save}>
      <Toggle render={renderToggleCheckbox} on={on} toggle={setOn} />
      <br />
      <button type="submit">Save</button>
    </form>
  );
}

function Toggle({ render, toggle, on }) {
  return <>{render(() => toggle(!on), on)}</>;
}

function renderToggleCheckbox(toggle, on) {
  return (
    <>
      <input type="checkbox" checked={on} onChange={() => toggle()} />
      {on ? "ON" : "OFF"}
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
