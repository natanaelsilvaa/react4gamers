import React from 'react';
import './index.css';
import { HEAD_OFFSET, TILE_SIZE } from '../../settings/constants';


const Chest = () => {
    return(
    <div
        style={{
            position: 'absolute',
            width: TILE_SIZE,
            height: TILE_SIZE + HEAD_OFFSET,
            bottom: TILE_SIZE * 4,
            left: TILE_SIZE * 6 ,
            backgroundImage: "url(./assets-react4gamers/CHEST.png)",
            backgroundRepeat: "no-repeat",
            animation: "chest-animation 1s steps(3) infinite",
            
        
        }}
     />
 )
}

export default Chest;

