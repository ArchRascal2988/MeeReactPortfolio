import React from 'react';
import { Link } from 'react-router-dom';
import {FaGithub, FaLinkedin} from 'react-icons/fa';

const Header= ()=>{
    return (
        <header>
            <section className='links'>
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
                    <a className="asButton" href="https://docs.google.com/document/d/1ONQt5m_hHZyRdKkV83vvubIW7T4suRmAm9WnYZ6OdOU/edit">
                        <h2>Resume</h2> 
                    </a>
                </div>
            </section>
            <section className='icons'>
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
            </section>
        </header>
    );
}

export default Header;
