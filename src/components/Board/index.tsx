import React from 'react';
import { GAME_SIZE } from '../../settings/constants';
import Hero from "../Hero";
import MiniDemon from '../MiniDemon';
import Demon from '../Demon';
import Chest from '../Chest';
import Trap from '../Trap';

const Board = () =>{
    return(
      <div>
        <MiniDemon initialPosition={{ x: 10, y: 8}} />
        <MiniDemon initialPosition={{ x: 10, y: 10}} />

        <Hero />
        <Demon />
        <Chest />
        <Trap />
         <img src="./assets-react4gamers/tileset.gif" alt="" width={GAME_SIZE} height={GAME_SIZE} /> 
      </div>
    )
}

export default Board;