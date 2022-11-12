import React from 'react';
import Trans from './Trans';
import Header from './Header';
import Home from './Home';
import About from './About';
import Experience from './Experience';
import Project from './Project';
import Contact from './Contact';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Trans />
      <Header />
      <Home />
      <About />
      <Experience />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
