import React from 'react';
import pfp from '../../assets/images/pfp.jpg';

function About() {
  return (
    <section id='aboutme'>

      <div className='row'>

          <div className='column'>
            <h2 id="about">James Crowell</h2>
            <img id='image-3' className='user' src={pfp}></img>
          </div>

          <div className='column-right'>
            <h2>Full Stack Web Developer</h2>
            <div className='row'>
              <div className='column'>
              <p className='abouttext'>Full stack web developer educated at Michigan State University Coding Bootcamp. Skilled in HTML, CSS, JavaScript and more.
                  Passionate about approaching programming challenges from different angles and collaborating
                  with others to create meaningful web applications. Excited to develop responsive websites.
                  Positioned to provide unique perspectives on how end users interact with websites and software
                  platforms by leveraging background in digital marketing and finance.</p>
              </div>
              <div className='column'>
              <ul className='ordered'>
                <li className='red'>HTML5/CSS3</li>
                <li className='white'>Git</li>
                <li className='blue'>Javascript/jQuery</li>
                <li className='red'>Node.js</li>
                <li className='white'>Object-Oriented Programming</li>
                <li className='blue'>Express.js</li>
                <li className='red'>MongoDB</li>
                <li className='white'>MySQL</li>
                <li className='blue'>React</li>
                <li className='red'>Web/Third-Party/Server-Side APIs</li>
                <li className='white'>ORM/MVC</li>
                <li className='blue'>Regex</li>
                <li className='red'>NoSQL</li>
                <li className='white'>MERN</li>
                <li className='blue'>State</li>
                <li className='red'>Python</li>
              </ul>
              </div>
            </div>
            
          </div>  

          </div>
      
    </section>
  );
}

export default About;