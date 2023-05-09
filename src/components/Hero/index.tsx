import useEventListener from '@use-it/event-listener';
import { HEAD_OFFSET, TILE_SIZE } from '../../settings/constants';
import React from 'react'
import './index.css';


const initialPosition = {
    x: 15,
    y: 15
};

const Hero = () => {
    const [ positionState, updatePositionState ] = React.useState(initialPosition);
    const [ direction, updateDirectionState ] = React.useState('RIGHT');
    
   useEventListener('keydown', (event: {key:any;}) => {
    
       if (event.key === 'ArrowLeft') {
        updatePositionState({   x: positionState.x - 1, y: positionState.y,})
        updateDirectionState('LEFT');
       } else if (event.key === 'ArrowRight') {
        updatePositionState({   x: positionState.x + 1, y: positionState.y,});
        updateDirectionState('RIGHT');
       } else if (event.key === 'ArrowDown') {
        updatePositionState({x: positionState.x, y: positionState.y -1});

       } else if (event.key === 'ArrowUp') {
           updatePositionState({ x: positionState.x, y: positionState.y + 1,});
        }
    });
           
     
           

    // setTimeout(() => {
    //     const newPosition = { x: 14, y: 15};
    //     updatePositionState(newPosition);
    // }, 2000)


    return(
    <div
        style={{
            position: 'absolute',
            width: TILE_SIZE,
            height: TILE_SIZE + HEAD_OFFSET,
            bottom: TILE_SIZE * positionState.y,
            left: TILE_SIZE * positionState.x,
            backgroundImage: "url(./assets-react4gamers/Hero.png)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: `0px -${TILE_SIZE - HEAD_OFFSET}px`,
            animation: "hero-animation 1s steps(4) infinite",
            transform: `scaleX(${direction === 'RIGHT' ? 1 : -1})`
            
        }}
     />
 )
}

export default Hero;

function createRoot(arg0: string, arg1: (event: any) => void) {
    throw new Error('Function not implemented.');
}

