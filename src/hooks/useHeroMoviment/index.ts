import React from 'react';
import { EDirection, EWALKER } from "../../settings/constants";
import useEventListener from '@use-it/event-listener';
import { CanvasContext } from '../../contexts/canvas';
import { ChestContext } from './../../contexts/chest/chest';
import Chest from '../../components/Chest';

function useHeroMoviment(initialPosition) {
    const canvasContext = React.useContext(CanvasContext);
    const chestContext = React.useContext(ChestContext);

    const [ positionState, updatePositionState ] = React.useState(initialPosition);
    const [ direction, updateDirectionState ] = React.useState(EDirection.RIGHT);

    useEventListener('keydown', (event:{key:any;})  => {
      const direction = event.key as EDirection;
      
      if (direction.indexOf('Arrow') === -1) {
        return;
      }
      
      const moviment = canvasContext.updateCanvas(direction, positionState, EWALKER.HERO)

      if (moviment.nextMove.valid) {
      updatePositionState(moviment.nextPosition);
      updateDirectionState(direction);

      if(moviment.nextMove.dead) {
        console.log('Você morreu')
      }

      if(moviment.nextMove.chest) {
        chestContext.updateOpenedChest();
      }
    }
  });
    
    
    return{
      position: positionState,
      direction: direction,
    }
}

export default useHeroMoviment;


