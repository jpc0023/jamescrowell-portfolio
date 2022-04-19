import React from "react";
import { capitalizeFirstLetter } from '../../utils/helpers';
import photo from '../../assets/images/run-buddy.jpg';
import Work from "../Work";
import news from '../../assets/images/News4Uscreenshot.jpg'
import taskmaster from '../../assets/images/taskmasterpro.jpg'
import regex from '../../assets/images/regex.jpg'
import codequiz from '../../assets/images/codequiz.jpg'
import password from '../../assets/images/passwordgenerator.jpg'

function Project() {



    return (
        <section id="mainwrapper" className="col-3">

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
                            <p className="caption-bottom">
                                <a href="https://jpc0023.github.io/run-buddy/" target={'_blank'}>Deployed link</a>
                            </p>
                            </span>
                  
                    </div>
                    <div id="box-3" className="box relative">
                  
                        <img id="image-4" src={news}/>
                            <span className="caption fade-caption">
                            <h4>News4U</h4>
                            <p>Collaborative work to design a site using third party APIs</p>
                            <p className="caption-bottom">
                                <a href="https://rpkrupali1.github.io/News4U/" target={'_blank'}>Deployed link</a>
                            </p>
                            </span>
   
                    </div>
                    <div id="box-3" className="box">
   
                        <img id="image-4" src={taskmaster}/>
                            <span className="caption fade-caption">
                            <h4>Task Master Pro</h4>
                            <p>Task management app using javascript</p>
                            <p className="caption-bottom">
                                <a href="https://jpc0023.github.io/taskmaster-pro/" target={'_blank'}>Deployed link</a>
                            </p>
                            </span>
            
                    </div>
                    <div id="box-3" className="box relative">
       
                        <img id="image-4" src={regex}/>
                            <span className="caption fade-caption">
                            <h4>Regular Expression</h4>
                            <p>This markdown describes the function of the regular expression code and its requirements</p>
                            <p className="caption-bottom">
                                <a href="https://gist.github.com/jpc0023/6ffb2b1b15b2e7ee87dc069024b78174" target={'_blank'}>Deployed link</a>
                            </p>
                            </span>
                       
                    </div>

                    <div id="box-3" className="box relative">
       
                        <img id="image-4" src={codequiz}/>
                            <span className="caption fade-caption">
                            <h4>Code Quiz</h4>
                            <p>Simple multiple choice code quiz demonstrating the use of Javascript</p>
                            <p className="caption-bottom">
                                <a href="https://jpc0023.github.io/challenge-four-jpc0023/" target={'_blank'}>Deployed link</a>
                            </p>
                            </span>
                        
                    </div>

                    <div id="box-3" className="box relative">
                        
                        <img id="image-4" src={password}/>
                            <span className="caption fade-caption">
                            <h4>Password Generator</h4>
                            <p>Random password generator based on selected criteria displays use of Javascript</p>
                            <p className="caption-bottom">
                                <a href="https://jpc0023.github.io/secure-password-generator/" target={'_blank'}>Deployed link</a>
                            </p></span>
                        
                    </div>
            
                </div>
              
                {/* <Work category={currentCategory.name} /> */}
            
        </section>
    );
}

export default Project;
