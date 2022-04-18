import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";



const Header = (props) => {

    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
        contactSelected,
        setContactSelected
    } = props;

    useEffect(()=>{
        document.title = capitalizeFirstLetter("testt");
    }, [currentCategory]);

    // function categorySelected(name) {
    //     console.log(`${currentCategory.name} clicked`)
    // }

    return (
        <header >
            <div className="px-1 my-5">
                <h1 className="px-1 name"><span className="topper"><span className="firstletter">J</span>ames</span> <span className="bottomer"><span className="firstletter">C</span>rowell</span></h1>
                <ul className="flex-row heads">

                    <li className="mx-2 links">
                        <a href="#about" onClick={() => setContactSelected(false)}>
                            About Me
                        </a>
                    </li>

                    <li className={`mx-2 links ${contactSelected && 'navActive'}`}>
                        <span onClick={() => setContactSelected(true)}>Contact</span>
                    </li>

                    {categories.map((category) => (
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
                    ))}
                </ul>
                </div>
        </header>
    );
};

export default Header;