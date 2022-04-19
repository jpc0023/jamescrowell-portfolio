import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";



const Header = (props) => {

    const {
        // categories = [],
        // setCurrentCategory,
        currentCategory,
        contactSelected,
        setContactSelected,
        projectSelected,
        setProjectSelected,
        resumeSelected,
        setResumeSelected,
    } = props;

    useEffect(()=>{
        document.title = capitalizeFirstLetter("testt");
    }, [currentCategory]);

    return (
        <header >
            <div className="px-1 my-5">
                <h1 className="px-1 name">
                    <span className="topper"><span className="firstletter">J</span>ames</span> <span className="bottomer"><span className="firstletter">C</span>rowell</span></h1>
                <ul className="heads">

                    <li className="mx-2 links">
                        <a href="#about" onClick={() => {setContactSelected(false); setProjectSelected(false); setResumeSelected(false)}}>
                            About Me
                        </a>
                    </li>

                    <li className={`mx-2 links ${contactSelected && 'navActive'}`}>
                        <span onClick={() => {setContactSelected(true); setProjectSelected(false); setResumeSelected(false)}}>Contact</span>
                    </li>

                    <li className={`mx-2 links ${projectSelected && 'navActive'}`}>
                        <span onClick={() => {setContactSelected(false); setProjectSelected(true); setResumeSelected(false)}}>Portfolio</span>
                    </li>

                    <li className={`mx-2 links ${resumeSelected && 'navActive'}`}>
                        <span onClick={() => {setContactSelected(false); setProjectSelected(false); setResumeSelected(true)}}>Resume</span>
                    </li>

                    {/* {categories.map((category) => (
                        <li className={`mx-1 links ${
                            currentCategory.name === category.name && 'navActive'
                        }`}
                        key={category.name}
                        >
                            <span 
                            onClick={() => {
                                setCurrentCategory(category);
                                setContactSelected(false);
                            }} 
                                >
                                    {capitalizeFirstLetter(category.name)}
                            </span>
                        </li>
                    ))} */}
                </ul>
                </div>
        </header>
    );
};

export default Header;