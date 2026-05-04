import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './Header.jsx'
import MainContent from './MainContent.jsx'
import Footer from './Footer.jsx'

function App() {
  return (
    <>
        <Header />
        <MainContent />
        <Footer />
    </>
  );
}

export default App;

