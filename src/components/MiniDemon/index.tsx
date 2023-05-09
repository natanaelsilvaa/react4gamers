import React from 'react';
import './index.css';
import { TILE_SIZE, HEAD_OFFSET } from '../../settings/constants';


const MiniDemon = () => {
    return(
    <div
        style={{
            position: 'absolute',
            bottom: TILE_SIZE  * 10,
            width: TILE_SIZE,
            height: TILE_SIZE + HEAD_OFFSET,
            left: TILE_SIZE * 7,
            backgroundImage: "url(./assets-react4gamers/MINI-DEMON.png)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: `0px -${TILE_SIZE - HEAD_OFFSET}px`,
            animation: "mini-demon-animation 1s steps(4) infinite",
            
            
        }}
     />
 )
}

export default MiniDemon
;

