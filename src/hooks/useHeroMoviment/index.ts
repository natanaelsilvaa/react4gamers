import React from 'react';
import { EDirection } from "../../settings/constants";
import useEventListener from '@use-it/event-listener';
import { handleNextPosition } from '../../contexts/canvas/helpers';

function useHeroMoviment(initialPosition) {
    const [ positionState, updatePositionState ] = React.useState(initialPosition);
    const [ direction, updateDirectionState ] = React.useState(EDirection.RIGHT);
     
    useEventListener('keydown', (event:{key:any;})  => {
      const direction = event.key as EDirection;


      const nextPosition = handleNextPosition(direction, positionState);
      updatePositionState(nextPosition);
      updateDirectionState(direction);
    });
    
    
    return{
      position: positionState,
      direction: direction,
    }
}

export default useHeroMoviment;


