import React from "react";
import avatar from "./assets/sweet.jpeg";
import "./Header.css";

export default function Header(props) {

  return (
    <header className="mini-header">
      <img src={avatar} alt="Profile" className="mini-avatar" />
      <p className="mini-name">{props.userName}</p>
    </header>
  );
}