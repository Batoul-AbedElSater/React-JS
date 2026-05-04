import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function index() {
  const name = "Batoul"; // You can use variables!

  return (
    <div className='app'>
      <h1 className='h1'>{name}'s Learning Page</h1>
      <p>I am currently practicing:</p>
      <ul>
        <li>Vite Setup</li>
        <li>JSX Syntax</li>
        <li>React Components</li>
      </ul>
      <button className='button' onClick={() => alert('Practice makes perfect!')}>
        Click Me
      </button>
    </div>
  );
}

export default index;
