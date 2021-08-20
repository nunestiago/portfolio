import './App.scss';
import 'bootstrap';

import React from 'react';

import { About, Experience, FloatingIcons, Footer, Header, Skills } from './components';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <FloatingIcons />
      <Header />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Footer />
    </div>
  );
}

export default App;
