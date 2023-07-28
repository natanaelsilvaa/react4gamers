import { EDirection, HEAD_OFFSET, TILE_SIZE } from '../../settings/constants';
import React from 'react'
import './index.css';
import useHeroMoviment from '../../hooks/useHeroMoviment';

// const moviment = {
//  position: { x: 5, y: 5},
//    direction: EDirection.RIGHT,
// }

interface IProps {
    initialPosition: { x: number; y: number}
}

const Hero = (props: IProps) => {
  const {position, direction} = useHeroMoviment(props.initialPosition);
  

    return(
    <div
        style={{
            position: 'absolute',
            width: TILE_SIZE,
            height: TILE_SIZE + HEAD_OFFSET,
            top: TILE_SIZE * position.y - HEAD_OFFSET,
            left: TILE_SIZE * position.x,
            backgroundImage: "url(./assets-react4gamers/Hero.png)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: `0px -${TILE_SIZE - HEAD_OFFSET}px`,
            animation: "hero-animation 1s steps(4) infinite",
            transform: `scaleX(${direction === EDirection.RIGHT ? 1 : -1})`,
            zIndex: 1,
            
        }}
     />
 )
}

export default Hero;


