import React from 'react';
import GetApp from './components/Download';
import About from './components/About';
import Hero from './components/Hero';
import Intro from './components/Intro';
import Navbar from './components/Navbar';
import Platform from './components/Platform';
import Tabs from './components/Tabs';
import Newsroom from './components/Newsroom';
import Footers from './components/Footers';
import Credits from './components/Credits';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Intro />
      <About />
      <GetApp />
      <Platform />
      <Tabs />
      <Newsroom />
      <Footers />
      <Credits />
    </div>
  );
}

export default App;
