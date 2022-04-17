import React from "react";
import { capitalizeFirstLetter } from '../../utils/helpers';
import photo from '../../assets/images/run-buddy.jpg';

import Work from "../Work";

function Project( {currentCategory} ) {

    const { name, description } = currentCategory;

    return (
        <section>
            
                <h1>{capitalizeFirstLetter(name)}</h1>
                <p>{description}</p>
                <div className="flex-row">
                    <img
                        src={photo}
                        alt='run-buddy html css'
                        className='img-thumbnail mx-1'
                        />
                </div>
                <Work category={currentCategory.name} />
            
            {/* <div>
                <h1>{capitalizeFirstLetter(name)}</h1>
                <p>{description}</p>
                <div className="flex-row">
                    <img
                        src={photo}
                        alt='run-buddy html css'
                        className='img-thumbnail mx-1'
                        />
                </div>
            </div>
            <div>
                <h1>{capitalizeFirstLetter(name)}</h1>
                <p>{description}</p>
                <div className="flex-row">
                    <img
                        src={photo}
                        alt='run-buddy html css'
                        className='img-thumbnail mx-1'
                        />
                </div>
            </div>
            <div>
                <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
                <p>{currentCategory.name}</p>
                <div className="flex-row">
                    <img
                        src={photo}
                        alt='run-buddy html css'
                        className='img-thumbnail mx-1'
                        />
                </div>
            </div>
            <div>
                <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
                <p>{currentCategory.name}</p>
                <div className="flex-row">
                    <img
                        src={photo}
                        alt='run-buddy html css'
                        className='img-thumbnail mx-1'
                        />
                </div>
            </div>
            <div>
                <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
                <p>{currentCategory.name}</p>
                <div className="flex-row">
                    <img
                        src={photo}
                        alt='run-buddy html css'
                        className='img-thumbnail mx-1'
                        />
                </div> */}
            {/* </div> */}
        </section>
    );
}

export default Project;