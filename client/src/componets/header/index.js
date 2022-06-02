import React from 'react';
import { Link } from 'react-router-dom';
import {FaGithub, FaLinkedin, FaTwitter} from 'react-icons/fa';

const Header= ()=>{
    return (
        <header>
            <div>
                <Link className="asButton" to= '/'>
                    <h2>Home</h2>
                </Link>
            </div>
            <div>
                <Link className="asButton" to= '/work'>
                    <h2>Work</h2>
                </Link>
            </div>
            <div>
                <Link className="asButton" to= '/about'>
                    <h2>About</h2>
                </Link>
            </div>
            <div>
                <a className="asButton" href="">
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
