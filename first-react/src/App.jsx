import React from "react";
import padsData from "./pads";
import "./App.css";

export default function App() {
  const [pads, setPads] = React.useState(padsData);

  const buttonElements = pads.map(pad => (
    <button
      key={pad.id}
      className="pad"
      style={{ backgroundColor: pad.color }}
    >
      {pad.on ? "ON" : "OFF"}
    </button>
  ));

  return (
    <main>
      <div className="pad-container">
        {buttonElements}
      </div>
    </main>
  );
}
