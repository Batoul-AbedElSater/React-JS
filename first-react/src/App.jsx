import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
 import './App.css'
// import index from './index.jsx'
import {createRoot} from 'react-dom/client'
const root = createRoot(document.getElementById('root'));
import { Fragment } from 'react'

function Header(){
  return (
     
     <header className='Header'>
          <img className='img' src={reactLogo} alt="Hero Image" />
          <nav className='nav'>
            <ul className='ul'>
              <li className='nav-list-item'>Pricing</li>
              <li className='nav-list-item'>About</li>
              <li className='nav-list-item'>Contact</li>
            </ul>
          </nav>

      </header>

  )
}
function Ol(){
  return (
    <ol className='Ol'>
          <li className='Li'>Vite Setup</li>
          <li className='Li'>JSX Syntax</li>
          <li className='Li'>React Components</li>
        </ol>
  )
}
function Footer(){
  return(
    <footer className='Footer'>
          <p>© 2023 My React App. All rights reserved.</p>
        </footer>
  )
}
function App() {

  return (
    <>
        <Header />
        <Ol />
        <Footer />
    </>
  );
}
 root.render(
  <App />
 )

 export default App;