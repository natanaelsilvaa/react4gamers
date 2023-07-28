import { EDirection } from "../../settings/constants";

export function handleNextPosition(direction, position) {
  switch (direction) {

    case EDirection.LEFT:
      return { x: position.x - 1, y: position.y, };

    case EDirection.RIGHT:
      return { x: position.x + 1, y: position.y, };

    case EDirection.DOWN:
      return { x: position.x, y: position.y + 1 };

    case EDirection.UP:
      return { x: position.x, y: position.y - 1, };

  }
}

export enum ECanvas {
  FLOOR = 0,
  WALL = 1,
  DOOR = 2,
  TRAP = 3,
  MINI_DEMON = 4,
  DEMON = 5,
  CHEST = 6,
  HERO = 7,

}

const FL = ECanvas.FLOOR;
const WL = ECanvas.WALL;
const DR = ECanvas.DOOR;
const TP = ECanvas.TRAP;
const MD = ECanvas.MINI_DEMON;
const DM = ECanvas.DEMON;
const CH = ECanvas.CHEST;
const HR = ECanvas.HERO;




// VALOR 1 REPRESENTA A PAREDE E FL REPRESENTA O CHÃO!


export const canvas = [

  [WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, DR, DR, WL, WL, WL, WL, WL],
  [WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, DR, DR, WL, WL, WL, WL, WL],
  [WL, HR, FL, WL, FL, FL, FL, FL, WL, FL, FL, FL, FL, FL, FL, FL, WL, FL, TP, WL],
  [WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, CH, FL, FL, FL, FL, FL, FL, WL],
  [WL, FL, FL, FL, FL, FL, TP, FL, FL, FL, DM, FL, FL, FL, TP, FL, FL, FL, FL, WL],
  [WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],
  [WL, FL, FL, FL, FL, FL, DM, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, MD, WL],
  [WL, FL, DM, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],
  [WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],
  [WL, FL, FL, FL, FL, FL, FL, FL, FL, MD, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],
  [WL, FL, FL, FL, CH, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],
  [WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],
  [WL, FL, FL, FL, FL, FL, TP, FL, FL, FL, FL, FL, FL, FL, TP, FL, DM, FL, FL, WL],
  [WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],
  [WL, MD, FL, FL, FL, FL, FL, FL, FL, FL, FL, CH, FL, FL, FL, FL, FL, FL, FL, WL],
  [WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],
  [WL, FL, FL, FL, FL, CH, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],
  [WL, FL, FL, FL, FL, FL, MD, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],
  [WL, TP, FL, FL, FL, FL, FL, FL, FL, FL, FL, DM, FL, FL, FL, FL, FL, FL, TP, WL],
  [WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL]
];

export function checkValidMoviment(nextPosition) {
  const canvasValue = canvas[nextPosition.y][nextPosition.x];

  if (canvasValue === ECanvas.WALL) {
    return false
  }

  if (canvasValue === ECanvas.CHEST) {
     console.log('PISOU NO BAU');
  }

  if (canvasValue === ECanvas.TRAP) {
    console.log('PISOU Na armadilha');
 }
  return true;
}







