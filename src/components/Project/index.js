import React from "react";
import { capitalizeFirstLetter } from '../../utils/helpers';
import photo from '../../assets/images/run-buddy.jpg';
import Work from "../Work";

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
                  
                        <img id="image-4" src={photo}/>
                            <span className="caption fade-caption">
                            <h4>Fade Caption</h4>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit,sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                            </span>
   
                    </div>
                    <div id="box-3" className="box">
   
                        <img id="image-4" src={photo}/>
                            <span className="caption fade-caption">
                            <h4>Fade Caption</h4>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit,sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                            </span>
            
                    </div>
                    <div id="box-3" className="box relative">
       
                        <img id="image-4" src={photo}/>
                            <span className="caption fade-caption">
                            <p>Fade Caption</p>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit,sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                            </span>
                       
                    </div>
            
                </div>
              
                {/* <Work category={currentCategory.name} /> */}
            
        </section>
    );
}

export default Project;