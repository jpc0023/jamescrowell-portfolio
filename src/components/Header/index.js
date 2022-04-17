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

    function categorySelected(name) {
        console.log(`${currentCategory.name} clicked`)
    }

    return (
        <header className="flex-row px-1">

                <h1 className="my-5 px-1">James Crowell</h1>
            
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a href="#about" onClick={() => setContactSelected(false)}>
                            About Me
                        </a>
                    </li>
                    <li className={`mx-2 ${contactSelected && 'navActive'}`}>
                        <span onClick={() => setContactSelected(true)}>Contact</span>
                    </li>
                    {categories.map((category) => (
                        <li className={`mx-1 ${
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
            </nav>
        </header>
    );
};

export default Header;