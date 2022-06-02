import React from 'react';
import { Link } from 'react-router-dom';

const Header= ()=>{
    return (
        <header className="container flex-row justify-space-between-lg justify-center align-center">
            <div>
                <Link to= '/'>
                    <h2>Home</h2>
                </Link>
            </div>
            <div>
                <Link to= '/work'>
                    <h2>My Work</h2>
                </Link>
            </div>
            <div>
                <Link to= '/about'>
                    <h2>About Me</h2>
                </Link>
            </div>
            <div>
                <a href="">
                    Resume 
                </a>
            </div>
            <div className='align-end'>
                <a href="https://github.com/ArchRascal2988">
                    <i class="fa fa-github"></i> 
                </a>
            </div>
            <div className='align-end'>
                <a href="https://www.linkedin.com/in/lex-matthews-a45650230/">
                    <i class="fa fa-linkedin-square"></i> 
                </a>
            </div>
        </header>
    );
}

export default Header;
