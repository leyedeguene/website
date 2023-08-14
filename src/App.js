import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Expertises from './components/Expertises';
import Domaines from './components/Domaines';
import Actualites from './components/Actualites';
import Contact from './components/Contact';
import Footer from  './components/Footer';
import Message from './components/Message';
import Modal from './zone-pub/Modal';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Expertises />
      <Domaines />
      <Actualites />
      <Contact />
      <Modal />
      <Message />
      <Footer />
    </div>
  );
}

export default App;