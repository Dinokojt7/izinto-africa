import React from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <section
      className="h-screen bg-Hero bg-cover
      font-[Poppins] md:bg-top bg-center"
      >
        <Navbar />
        <Hero />
      </section>
    </div>
  );
}

export default App;
