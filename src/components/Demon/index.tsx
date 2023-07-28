import React from 'react';
import './index.css';
import { DEMON_SIZE, EDirection, TILE_SIZE } from '../../settings/constants';
import useEnemyMoviment from '../../hooks/useEnemyMoviment';



// const Demon = () => {
//   const moviment = useEnemyMoviment({x: 5, y: 5});



interface IProps {
  initialPosition: { x: number; y: number }
}

const Demon = (props: IProps) => {
  const moviment = useEnemyMoviment(props.initialPosition)
    return(
    <div
        style={{
          position: 'absolute',
          top: TILE_SIZE * moviment.position.y,
          left: TILE_SIZE * moviment.position.x,
          width: DEMON_SIZE,
          height: DEMON_SIZE,
          backgroundImage: "url(./assets-react4gamers/DEMON.png)",
          backgroundRepeat: "no-repeat",
          animation: "demon-animation 1s steps(4) infinite",
          transform: `scaleX(${moviment.direction === EDirection.RIGHT ? 1 : -1})`,
            
            
        }}
     />
 )
}

export default Demon
;

