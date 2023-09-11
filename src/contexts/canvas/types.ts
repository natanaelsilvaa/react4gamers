import { EDirections } from '../../settings/constants';

export type ICanvas = ECanvas[][];

export type IWalker = 'Hero' | 'Enemy';

export interface ICanvasMap {
  [x: string]: { tile: ECanvas, position: IPosition }
};

export interface IPosition {
  x: number;
  y: number;
}

export interface IConsequences {
  valid: boolean;
  dead: boolean;
  chest: boolean;
  door: boolean;
}

export interface ICanvasMoviment {
  position: IPosition;
  consequences: IConsequences;
}

export interface ICanvasContext {
  canvas: ICanvas;
  updateCanvas: (
    direction: EDirections,
    currentPosition: IPosition,
    walker: IWalker
  ) => ICanvasMoviment;
}

export enum ECanvas {
  FLOOR = 0, // Espaços Disponíveis para movimento
  WALL = 1, // Parede
  DOOR = 2, // Porta
  TRAP = 3, // Armadilha
  MINI_DEMON = 4, // MiniDemon
  DEMON = 5, // Demon
  CHEST = 6, // Baú
  HERO = 7, // Hero
}
