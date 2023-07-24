import './App.css';
import React from 'react';
import {background} from '../src/assets/images';
import Header from './components/Header/Header';
import About from './components/About/About';
import WHY US from './components/WHY US/WHY US';
import Responsibilities from './components/Responsibilities/Responsibilities';
import Incentives  from './components/Incentives/Incentives';
import Contact from './components/Contact/Contact';
function App() {
  return (
  
    <div className="App">
      <Header />
      <About />
      <WHY US />
      <Responsibilities />
      <Incentives />
      <Contact />
    </div>  
  );
}

export default App;


