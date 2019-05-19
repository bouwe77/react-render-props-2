import React, { useState } from "react";
import ReactDOM from "react-dom";

function App() {
  const [meuk, setMeuk] = useState(false);
  return (
    <div>
      {meuk ? "ON" : "OFF"}
      <hr />
      <Toggle render={renderToggleButton} />
      <hr />
      <Toggle render={renderToggleCheckbox} />
    </div>
  );
}

function Toggle(props) {
  const [on, setOn] = useState(false);

  return <>{props.render(() => setOn(!on), on)}</>;
}

function renderToggleButton(toggle, on, bla) {
  function handleClick() {
    toggle();
    bla(on);
  }
  return <button onClick={handleClick}>{on ? "ON" : "OFF"}</button>;
}

function renderToggleCheckbox(toggle, on, bla) {
  return (
    <>
      <input type="checkbox" checked={on} onChange={() => toggle()} />
      {on ? "ON" : "OFF"}
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
