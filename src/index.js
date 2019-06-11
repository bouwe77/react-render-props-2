import React, { useState } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

function App() {
  const [on, setOn] = useState(false);

  function save(event) {
    event.preventDefault();
    console.log("Let's save the on value: " + on);
  }

  return (
    <form onSubmit={save}>
      <Toggle render={renderToggleCheckbox} toggle={setOn} on={on} />
      <br />
      <button type="submit">Save</button>
    </form>
  );
}

function Toggle({ render, toggle, on = false }) {
  return <>{render(() => toggle(!on), on)}</>;
}

Toggle.propTypes = {
  render: PropTypes.func.isRequired,
  toggle: PropTypes.func.isRequired,
  on: PropTypes.bool
};

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
