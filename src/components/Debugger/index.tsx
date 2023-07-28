import React from "react"
import Tile from './Tile/index';
import { ECanvas, canvas } from "../../contexts/canvas/helpers";
import Trap from "../Trap";
import MiniDemon from "../MiniDemon";


 function getCanvasMap() {
     const array = []

     for (let y = 0; y < canvas.length;  y++) {
       const canvasY = canvas[y]
  
     for (let x = 0; x < canvasY.length; x++) {
       const canvasYX = canvasY[x];

       const position = { x: x, y: y }
       const text = canvas[y][x] || canvasYX;
       const key = `${x} - ${y}`;

       if (text === ECanvas.TRAP) {
         array.push(<Trap key={key} initialPosition={position}  />) 
       }

       if (text === ECanvas.MINI_DEMON) {
         array.push(<MiniDemon key={key} initialPosition={position}  />) 
       }


    }
   }
   return array;
  }
 

function Debugger() {
    const tile = getCanvasMap();

    return(
        <div>
           {tile}
        </div> 
    );

};
 export default Debugger;