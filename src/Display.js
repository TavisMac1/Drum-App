import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import './App.css';

const Display = () => {

    let snare = new Audio("/snare.mp3");
    let hiHat = new Audio("/hihat.mp3");
    let kick = new Audio("/kick.mp3");

    const playSound = (event) => {
        if (event.key === 'd' || event.key === 'D' ) {
            snare.play();

            if (event.key === 'd' || event.key === 'D') {
                snare.pause();
                let snare2 = new Audio("/snare.mp3");
                snare2.play();
            }

        } else if (event.key === 's' || event.key === 'S') {
            hiHat.play();

            if (event.key === 's' || event.key === 'S') {
                hiHat.pause();
                let hiHat2 = new Audio("/hihat.mp3");
                hiHat2.play();
             }
        } else if (event.key === 'c' || event.key === 'C') {
            kick.play();
            if (event.key === 'c' || event.key === 'C') {
                kick.pause();
                let kick2 = new Audio("/kick.mp3");
                kick2.play();
             }
        }
    }

    return(
        <div>
           <input type="text" className="input" autoFocus onKeyDown={playSound}/>
           <div>
               <h1 className='displayChar'>

               </h1>
           </div>
        </div>
    );
} 

export default Display;