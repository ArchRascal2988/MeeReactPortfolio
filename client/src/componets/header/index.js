import React from 'react';
import { Link } from 'react-router-dom';
import {FaGithub, FaLinkedin, FaTwitter} from 'react-icons/fa';

const Header= ()=>{
    return (
        <header>
            <div>
                <Link className="asButton" to= '/Lex_Lake_Matthews/'>
                    <h2>Home</h2>
                </Link>
            </div>
            <div>
                <Link className="asButton" to= '/Lex_Lake_Matthews/work'>
                    <h2>Work</h2>
                </Link>
            </div>
            <div>
                <Link className="asButton" to= '/Lex_Lake_Matthews/about'>
                    <h2>About</h2>
                </Link>
            </div>
            <div>
                <a className="asButton" href="https://docs.google.com/document/d/1JXXHUxPW8-q4mk3r9W5hfUCgpW04xrrm/edit?usp=sharing&ouid=101507926116752176818&rtpof=true&sd=true">
                    <h2>Resume</h2> 
                </a>
            </div>
            <div>
                <a href="https://twitter.com/archRascal2988" className='iconLink'>
                    <FaTwitter className='icon' size= '40px'></FaTwitter>
                </a>
            </div>
            <div>
                <a href="https://github.com/ArchRascal2988" className='iconLink'>
                    <FaGithub className='icon' size= '40px'></FaGithub>
                </a>
            </div>
            <div>
                <a href="https://www.linkedin.com/in/lex-matthews-a45650230/" className='iconLink'>
                    <FaLinkedin className='icon' size= '40px'></FaLinkedin>
                </a>
            </div>
        </header>
    );
}

export default Header;
