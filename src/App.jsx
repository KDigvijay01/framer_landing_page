import React from 'react';
import './app.scss';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
// import Cursor from './components/cursor/Cursor';
import Parallax from './components/parallax/Parallax';
import Services from './components/services/Services';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';



function App() {


  
// const locomotiveScroll = new LocomotiveScroll();


// data-scroll data-scroll-section data-scroll-speed=".1"

  return (
    <div>
      {/* <Cursor/> */}
      <section id="Homepage">
        <Navbar/>
        <Hero/>
      </section>
      <section id="Services">
        <Parallax type="services"/>
      </section>
      <section>
        <Services/>
      </section>
      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>
      <Portfolio/>
      <section id="Contact">
        <Contact/>
      </section>
    </div>
  )
}

export default App
