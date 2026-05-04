import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
 import './App.css'
// import index from './index.jsx'
import {createRoot} from 'react-dom/client'
const root = createRoot(document.getElementById('root'));

function App() {

  return (
    <div className='App'>
        <header className='Header'>
          <h1 className='h1'>My React App</h1>
        </header>
        <ol className='Ol'>
          <li className='Li'>Vite Setup</li>
          <li className='Li'>JSX Syntax</li>
          <li className='Li'>React Components</li>
        </ol>
        <footer className='Footer'>
          <p>© 2023 My React App. All rights reserved.</p>
        </footer>
    </div>
  );
}
 root.render(
  <App />
 )

 export default App;