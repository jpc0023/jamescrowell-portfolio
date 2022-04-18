import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Project from './components/Project';
import Footer from './components/Footer';
import ContactForm from './components/Contact';
import About from './components/About';

function App() {

  const [contactSelected, setContactSelected] = useState(false);
  
  const [categories] = useState([
    {
        name: 'Portfolio',
        description: 'sample of projects completed'
    },
    {name: 'Resume', description: 'sample of skills and qualifications'},
    // {name: 'word 3', description: 'description 3'},
    // {name: 'word 4', description: 'description 4'},
  ]);
  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  

  return (
    <div id='appmain'>
      <Header
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
        >
      </Header>
      <main>
        
        {!contactSelected ? (
          <>
        <About></About> 
        <Project currentCategory={currentCategory}></Project> 
        
        </>
        ) : (
          <ContactForm></ContactForm>
        )}
      </main>
    </div>
  );
}

export default App;
