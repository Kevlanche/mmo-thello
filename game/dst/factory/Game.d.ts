
export interface GameBinding {
  foo: (s: factory_Game_Side) => void
getNeedValidation: () => boolean
getSource: (nthOfType: number) => Uint8Array
getConveyorType: (x: number, y: number) => factory_Game_ConveyorType
getNonce: (x: number, y: number) => number
setConveyorNonce: (x: number, y: number, nonce: number) => void
validateAll: (expectedNonce: number) => void
getSpecialType: (x: number, y: number) => factory_Game_SpecialTileType
setCurrency: (amount: number, amountPerSec: number) => void
setTileColorClass: (x: number, y: number, colorClass: string) => void
setHoverInfo: (x: number, y: number, msg: string) => void
buildBoard: (size: number) => void
setSpecialTile: (x: number, y: number, type: factory_Game_SpecialTileType) => void
getIncomingClick: () => string
showError: (errmsg: string) => void
}
export function Game(bind: GameBinding): void;

export type bool = boolean;

enum factory_Game_ConveyorType {
  LTT,
  TTR,
  RTB,
  BTL,
  LTR,
  TTB
}


enum factory_Game_SpecialTileType {
  SOURCER,
  SOURCEG,
  SOURCEB,
  SINK,
  MERGER
}


enum factory_Game_Side {
  TOP,
  RIGHT,
  BOTTOM,
  LEFT
}

export type int = number;
export const Types = {
  factory_Game_Side: factory_Game_Side,
factory_Game_ConveyorType: factory_Game_ConveyorType,
factory_Game_SpecialTileType: factory_Game_SpecialTileType,
}

export const VERSION: string;
