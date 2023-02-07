import React from 'react';
import {useState, useEffect} from 'react';

const Home= () =>{
    const typewriter= async (message:string)=>{
        let index=0;

        const ref = setInterval(()=>{
            setMsg(message.substring(0, index+1));
            index++;
        }, 500);

        setTimeout(()=> clearInterval(ref), 500*message.length);
    }

    const [msg, setMsg]= useState('');

    useEffect(()=>{
        typewriter("Hey! Welcome to my portfolio, I'm Lex!")
        .then(()=>{
            for(let i:number=1; i<msg.length; i++){
                setMsg(msg.substring(i, msg.length));
            }

            typewriter("Lex Lake Matthews");
        });
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