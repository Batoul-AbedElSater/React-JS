import React from "react";
import padsData from "./pads";
import "./App.css";
import Pad from "./Pad"

export default function App() {
  const [pads, setPads] = React.useState(padsData);

  const buttonElements = pads.map(pad => (
    <Pad key={pad.id} color={pad.color}/>
  ))

  return (
    <main>
      <div className="pad-container">
        {buttonElements}
      </div>
    </main>
  );
}
