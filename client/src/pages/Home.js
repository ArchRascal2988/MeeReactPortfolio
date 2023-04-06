import React from 'react';
import {useState, useEffect} from 'react';

const Home= () =>{
    const typewriter= async (message)=>{
        let index=0;

        const ref = setInterval(()=>{
            setMsg(message.substring(0, index+1));
            index++;
        }, 180);

        setTimeout(()=> clearInterval(ref), 500*message.length);
    }

    const [msg, setMsg]= useState('');

    useEffect(()=>{
        typewriter("Hey! Welcome to my portfolio, I'm Lex!")
    }, []);

    return (
    <main className='homeMain'>
        <div className='homeDiv'>
            <div className='wackyDiv'>
                <h1 className='welcome'>{msg}</h1>
            </div>
        </div>
    </main>
    );
}

export default Home;