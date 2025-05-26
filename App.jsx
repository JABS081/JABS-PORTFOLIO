import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Portfolio from './pages/portfolio/Portfolio';
import Contact from './pages/contact/Contact';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Home />
        <About />
        <Portfolio />
        <Contact />
      </main>
    </div>
  );
};

export default App;
