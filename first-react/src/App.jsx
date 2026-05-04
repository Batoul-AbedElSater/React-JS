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
        <ol className='Ol'>
          <li className='Li'>Vite Setup</li>
          <li className='Li'>JSX Syntax</li>
          <li className='Li'>React Components</li>
        </ol>
    </div>
  );
}
 root.render(
  <App />
 )

 export default App;