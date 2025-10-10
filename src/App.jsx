import React from 'react'
import './index.css'
import Navbar from './pages/Navbar'
import Hero from "./pages/Hero";
import Mission from './pages/Mission';
import Stats from './pages/Stats';
import Ourteam from './pages/Ourteam';
import Footer from './pages/Footer';




function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Mission/>
      <Ourteam/>
      <Stats />
      <Footer />
    </div>
  );
}

export default App
