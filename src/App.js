import React from 'react';
import './App.css';
import About from './components/About';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Project from './components/Project';
import Footer from './components/Footer';

function App() {

  return (
    <div>
      <Header></Header>
      <main>
        <About></About>
      </main>
      <Project></Project>
      <Footer></Footer>    
    </div>
  );
}

export default App;
