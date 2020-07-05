import React from 'react';
import './App.css';
import About from './containers/About';
import Projects from './containers/Projects';
import OtherProjects from './containers/OtherProjects';
import Contact from './containers/Contact';
import NavBar from './containers/NavBar';

function App() {
  return (
    <div className="App">
          <NavBar />
          <About />
          <Projects />
          <OtherProjects />
          <Contact />
    </div>
  );
}

export default App;
