import React from 'react';
import './App.css';
import Home from './components/Home'
import CatFacts from './components/CatFacts'

function App() {
  return (
    <div>
      <header>
        <Home />
        <CatFacts />
      </header>
    </div>
  );
}

export default App;
