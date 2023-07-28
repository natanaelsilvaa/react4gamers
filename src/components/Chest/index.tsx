import React from 'react';
import './index.css';
import { HEAD_OFFSET, TILE_SIZE } from '../../settings/constants';


interface IProps {
    initialPosition: { x: number; y: number }
  }
  
  const Chest = (props: IProps) => {
    return(
    <div
        style={{
            position: 'absolute',
            width: TILE_SIZE,
            height: TILE_SIZE + HEAD_OFFSET,
            top: TILE_SIZE * props.initialPosition.y,
            left: TILE_SIZE * props.initialPosition.x,
            backgroundImage: "url(./assets-react4gamers/CHEST.png)",
            backgroundRepeat: "no-repeat",
            animation: "chest-animation 1s steps(3) infinite",
            
        
        }}
     />
 )
}

export default Chest;

