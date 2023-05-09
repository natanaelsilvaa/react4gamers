import React from 'react';
import './index.css';
import { TILE_SIZE } from '../../settings/constants';
import { DEMON_SIZE } from '../../settings/constants';



const Demon
 = () => {
    return(
    <div
        style={{
            position: 'absolute',
            width: DEMON_SIZE,
            height: DEMON_SIZE,
            bottom: DEMON_SIZE,
            left: DEMON_SIZE,
            backgroundImage: "url(./assets-react4gamers/DEMON.png)",
            backgroundRepeat: "no-repeat",
            animation: "demon-animation 1s steps(4) infinite",
            
            
        }}
     />
 )
}

export default Demon
;

