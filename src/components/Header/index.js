import React from "react";


function Header() {

    const categories = [
        {
            name: 'Portfolio',
            description: 'description'
        },
        {name: 'Resume', description: 'description 2'},
        // {name: 'word 3', description: 'description 3'},
        // {name: 'word 4', description: 'description 4'},
    ];

    function categorySelected(name) {
        console.log(`${name} clicked`)
    }

    return (
        <header>
            <section >
                <h1 id="about" className="my-5">James Crowell</h1>
            
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a href="#about">
                            About Me
                        </a>
                    </li>
                    <li>
                        <span>Contact</span>
                    </li>
                    {categories.map((category) => (
                        <li
                            className="mx-1"
                            key={category.name}
                            >
                                <span onClick={() => categorySelected(category.name)} >
                                    {category.name}
                                </span>
                            </li>
                    ))}
                </ul>
            </nav>
            </section>
        </header>
    );
};

export default Header;