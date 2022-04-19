import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Project from './components/Project';
import Footer from './components/Footer';
import ContactForm from './components/Contact';
import About from './components/About';
import Resume from './components/Resume';

function App() {

  const [contactSelected, setContactSelected] = useState(false);
  const [projectSelected, setProjectSelected] = useState(false);
  const [resumeSelected, setResumeSelected] = useState(false);
  // const [categories] = useState([
  //   {
  //       name: 'Portfolio',
  //       description: 'sample of projects completed'
  //   },
  //   {name: 'Resume', description: 'sample of skills and qualifications'},
  // ]);
  // const [currentCategory, setCurrentCategory] = useState(categories[0]);
  

  return (
    <div id='appmain'>
      <Header
        // categories={categories}
        // setCurrentCategory={setCurrentCategory}
        // currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
        projectSelected={projectSelected}
        setProjectSelected={setProjectSelected}
        resumeSelected={resumeSelected}
        setResumeSelected={setResumeSelected}

        >
      </Header>
      <main>
        
        {contactSelected ? (
          <>
        <ContactForm></ContactForm> 
          </>
        ):(<></>)}

        {projectSelected ? (
          <>
        <Project></Project> 
          </>
        ):(<></>)}

        {resumeSelected ? (
          <>
        <Resume></Resume> 
          </>
        ):(<></>)}


        {!contactSelected && !projectSelected && !resumeSelected ? (
          <>
          <About></About>
          </>
        ):<></>}
        {/* {!projectSelected ? (
          <>
          <Project currentCategory={currentCategory}></Project>
          </>
        ):(
          <About></About>
        )} */}
        {/* <Project currentCategory={currentCategory}></Project> */}
      </main>
      <Footer></Footer>
    </div>
    
  );
}

export default App;
