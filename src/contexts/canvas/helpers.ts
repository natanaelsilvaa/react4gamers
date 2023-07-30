import { EDirection, EWALKER } from "../../settings/constants";






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
  [WL, FL, FL, WL, FL, FL, FL, FL, WL, FL, FL, FL, FL, FL, FL, FL, WL, FL, TP, WL],
  [WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, CH, FL, FL, FL, FL, FL, FL, WL],
  [WL, FL, FL, FL, FL, FL, TP, FL, FL, FL, DM, FL, FL, FL, TP, FL, FL, FL, FL, WL],
  [WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],
  [WL, FL, FL, FL, FL, FL, DM, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, MD, WL],
  [WL, FL, DM, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],
  [WL, FL, FL, FL, FL, HR, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],
  [WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],
  [WL, FL, FL, FL, CH, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],
  [WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],
  [WL, FL, FL, FL, FL, FL, TP, FL, FL, FL, FL, FL, FL, FL, TP, FL, DM, FL, FL, WL],
  [WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],
  [WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, CH, FL, FL, FL, FL, FL, FL, FL, WL],
  [WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],
  [WL, FL, FL, FL, FL, CH, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],
  [WL, FL, WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],
  [WL, TP, FL, FL, FL, FL, FL, FL, FL, FL, FL, DM, FL, FL, FL, FL, FL, FL, TP, WL],
  [WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL]
];

export function checkValidMoviment(nextPosition, walker) {

  const canvasValue = canvas[nextPosition.y][nextPosition.x];
  const result = walker === EWALKER.HERO ? getHeroValidMovies(canvasValue) : getEnemyValidMovies(canvasValue);
  return result;
}

function getHeroValidMovies(canvasValue) {
  return {
    valid: canvasValue === ECanvas.FLOOR || canvasValue === ECanvas.TRAP || canvasValue === ECanvas.CHEST || canvasValue === ECanvas.MINI_DEMON || canvasValue === ECanvas.DEMON,
    dead: canvasValue === ECanvas.TRAP || canvasValue === ECanvas.MINI_DEMON || canvasValue === ECanvas.DEMON,
    chest: canvasValue === ECanvas.CHEST,
    door: canvasValue === ECanvas.DOOR,
  }
  
}


function getEnemyValidMovies(canvasValue) {
  return {
    valid: canvasValue === ECanvas.FLOOR || canvasValue === ECanvas.HERO,
    dead: false,
    chest:false,
    door: false,
  }
}








