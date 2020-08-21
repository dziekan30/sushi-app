import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import Home from './components/Home'
import Header from './components/Header'
import CatFacts from './components/CatFacts'
// import Say from './components/Say'
import Footer from './components/Footer'
import Speech from './components/Speech'


function App() {
  return (
    <div>
      <Header />
      <Home />
      {/* <Say /> */}
      <Speech />
      <Footer />
      <CatFacts />
    </div>
  );
}

export default App;
