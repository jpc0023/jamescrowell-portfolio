import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Project from './components/Project';
import Footer from './components/Footer';
import ContactForm from './components/Contact';

function App() {

  const [contactSelected, setContactSelected] = useState(false);
  
  const [categories] = useState([
    {
        name: 'Portfolio',
        description: 'description'
    },
    {name: 'Resume', description: 'description 2'},
    // {name: 'word 3', description: 'description 3'},
    // {name: 'word 4', description: 'description 4'},
  ]);
  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  // const [contactSelected, setContactSelected] = useState(false);
  // const [categories] = useState([
  //   {
  //     name: 'commercial',
  //     description: 'Photos of grocery stores, food trucks, and other commercial projects',
  //   },
  //   { name: 'portraits', description: 'Portraits of people in my life' },
  //   { name: 'food', description: 'Delicious delicacies' },
  //   { name: 'landscape', description: 'Fields, farmhouses, waterfalls, and the beauty of nature' },
  // ]);

  // const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
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
