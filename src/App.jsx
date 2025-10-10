import React from 'react'
import './index.css'
import Navbar from './pages/Navbar'
import Hero from "./pages/Hero";
import Mission from './pages/Mission';
import Stats from './pages/Stats';




function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Mission/>
      <Stats />
    </div>
  );
}

export default App
