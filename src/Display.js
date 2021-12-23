import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import './App.css';

const Display = () => {

    let audio = new Audio("/Shoot.wav");

    const playSound = (event) => {
        if (event.key === 's') {
            audio.play();
            console.log('snare shouold go off');
        }
    }

    return(
        <div>
           <input type="text" className="input" autoFocus onKeyDown={playSound}/>
           <div>
               <h1 className='displayChar'>
                   {}
               </h1>
           </div>
        </div>
    );
} 


export default Display;