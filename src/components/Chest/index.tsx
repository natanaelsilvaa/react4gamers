import React, { useContext } from 'react';
import { IPosition } from '../../contexts/canvas/types';
import { ChestsContext } from '../../contexts/chest';
import { TILE_SIZE } from '../../settings/constants';
import './index.css';

interface IProps {
  position: IPosition;
}

function Chest(props: IProps) {
  const { openedChests } = useContext(ChestsContext);

  const enableAnimation = openedChests.positions.find(
    position => position.x === props.position.x && position.y === props.position.y
  );

  return (
    <div
      style={{
        position: 'absolute',
        top: `${props.position.y * TILE_SIZE}px`,
        left: `${props.position.x * TILE_SIZE}px`,
        width: TILE_SIZE,
        height: TILE_SIZE,
        backgroundImage: `url(./assets-react4gamers/chest.png)`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: `0px 0px`,
        animation: enableAnimation && 'chest-animation 1s steps(2) forwards',
      }}
    />
  );
}

export default Chest;
