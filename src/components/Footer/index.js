import React from "react";
import twitter from '../../assets/images/twitter.png';
import github from '../../assets/images/Octocat.png';
import linkedin from '../../assets/images/LI-Logo.png';

function Footer() {
    return (
        <footer>
            <div className="footer">
                <ul>
                    <li><a href="https://twitter.com/jpc0023" target="_blank" rel="noreferrer"><img src={twitter} /></a></li>
                    <li><a href="https://www.linkedin.com/in/james-crowell-601774221/" target="_blank" rel="noreferrer"><img src={linkedin} /></a></li>
                    <li><a href="https://www.github.com/jpc0023" target="_blank" rel="noreferrer"><img src={github} /></a></li>
                </ul>
                </div>
    </footer>
    );
};

export default Footer;