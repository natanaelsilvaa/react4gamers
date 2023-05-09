import React from 'react';
import './index.css';
import { HEAD_OFFSET, TILE_SIZE } from '../../settings/constants';


const Trap = () => {
    return(
    <div
        style={{
            position: 'absolute',
            width: TILE_SIZE,
            height: 100,
            bottom: TILE_SIZE * 7,
            left: TILE_SIZE * 8,
            backgroundImage: "url(./assets-react4gamers/TRAP.png)",
            backgroundRepeat: "no-repeat",
            animation: "trap-animation 1s steps(4) infinite",
            
            
        }}
     />
 )
}

export default Trap;

