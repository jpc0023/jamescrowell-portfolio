import React from "react";
import { capitalizeFirstLetter } from '../../utils/helpers';
import photo from '../../assets/images/run-buddy.jpg';
import Work from "../Work";
import news from '../../assets/images/News4Uscreenshot.jpg'
import taskmaster from '../../assets/images/taskmasterpro.jpg'
import regex from '../../assets/images/regex.jpg'
import codequiz from '../../assets/images/codequiz.jpg'
import password from '../../assets/images/passwordgenerator.jpg'

function Project( {currentCategory} ) {

    const { name, description } = currentCategory;

    return (
        <section id="mainwrapper" className="col-3">
            
                <h1>{capitalizeFirstLetter(name)}</h1>
                <p>{description}</p>
                {/* <div className="photobox">
                    <img
                        src={photo}
                        alt='run-buddy html css'
                        className='img-thumbnail'
                        />
                        <div className="subtext">
                            This is text but where will it go?
                        </div>
                </div> */}
                <div id="lineup">
                    <div id="box-3" className="box relative">
                        
                        <img id="image-4" src={photo}/>
                            <span className="caption fade-caption">
                            <h4>Run Buddy</h4>
                            <p> <hr></hr></p>
                            <p>html5, css3</p>
                            </span>
                  
                    </div>
                    <div id="box-3" className="box relative">
                  
                        <img id="image-4" src={news}/>
                            <span className="caption fade-caption">
                            <h4>News4U</h4>
                            <p>Collaborative work to design a site using third party APIs</p>
                            </span>
   
                    </div>
                    <div id="box-3" className="box">
   
                        <img id="image-4" src={taskmaster}/>
                            <span className="caption fade-caption">
                            <h4>Task Master Pro</h4>
                            <p>Task management app using javascript</p>
                            </span>
            
                    </div>
                    <div id="box-3" className="box relative">
       
                        <img id="image-4" src={regex}/>
                            <span className="caption fade-caption">
                            <h4>Regular Expression</h4>
                            <p>This markdown describes the function of the regular expression code and its requirements</p>
                            </span>
                       
                    </div>

                    <div id="box-3" className="box relative">
       
                        <img id="image-4" src={codequiz}/>
                            <span className="caption fade-caption">
                            <h4>Code Quiz</h4>
                            <p>Simple multiple choice code quiz demontsrating the use of Javascript</p>
                            </span>
                        
                    </div>

                    <div id="box-3" className="box relative">
                        
                        <img id="image-4" src={password}/>
                            <span className="caption fade-caption">
                            <h4>Password Generator</h4>
                            <p>Random password generator based on selected criteria displays use of Javascript</p>
                            </span>
                        
                    </div>
            
                </div>
              
                {/* <Work category={currentCategory.name} /> */}
            
        </section>
    );
}

export default Project;