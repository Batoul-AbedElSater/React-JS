import { useState } from 'react'
import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import './App.css'
function Header(){
  return(
    <header className="header">
          <img className='img' src={reactLogo} alt="React Logo" />
          <nav>
              <ul className='nav-list'>
                  <li className='nav-list-item'>Pricing</li>
                  <li className='nav-list-item'>About</li>
                  <li className='nav-list-item'>Contact</li>
              </ul>
          </nav>
    </header>
  )
}

export default Header;