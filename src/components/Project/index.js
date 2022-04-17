import React from "react";
import { capitalizeFirstLetter } from '../../utils/helpers';
import photo from '../../assets/images/run-buddy.jpg';

function Project(props) {

    const currentCategory = {
        name: 'portfolio',
        description: 'description of portfolio'
    };

    return (
        <section>
            <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
            <p>{currentCategory.name}</p>
            <div className="flex-row">
                <img
                    src={photo}
                    alt='run-buddy html css'
                    className='img-thumbnail mx-1'
                    />
            </div>
        </section>
    );
}

export default Project;