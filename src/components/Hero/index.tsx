import React from 'react';
import './index.css';
import { TILE_SIZE } from '../../settings/constants';


const Hero = () => {
    return(
    <div
        style={{
            position: 'absolute',
            width: TILE_SIZE,
            height: 100,
            bottom: 43 * 8,
            left: 0,
            backgroundImage: "url(./assets-react4gamers/Hero.png)",
            backgroundRepeat: "no-repeat",
            animation: "hero-animation 1s steps(4) infinite",
            
            
        }}
     />
 )
}

export default Hero;

