import React from 'react';
import './index.css';
import {  TILE_SIZE } from '../../settings/constants';


const Trap = () => {
    return(
    <div
        style={{
            position: 'absolute',
            width: TILE_SIZE,
            height: 100,
            top: TILE_SIZE * 7,
            left: TILE_SIZE * 8,
            backgroundImage: "url(./assets-react4gamers/TRAP.png)",
            backgroundRepeat: "no-repeat",
            animation: "trap-animation 1s steps(4) infinite",
            
            
        }}
     />
 )
}

export default Trap;

