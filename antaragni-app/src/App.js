import './App.css';
import React from 'react';
import {background} from '../src/assets/images';
import Header from './components/Header/Header';
import About from './components/About/About';
import WHY US from './components/WHY US/WHY US';
function App() {
  return (
  
    <div className="App">
      <Header />
      <About />
      <WHY US />
    </div>  
  );
}

export default App;


