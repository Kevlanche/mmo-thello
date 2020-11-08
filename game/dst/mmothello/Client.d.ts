
export interface ClientBinding {
  getClick: () => Uint8Array
postToServer: (msg: Uint8Array) => void
getIncomingMessage: () => Uint8Array
setBoard: (x: number, y: number, color: number) => void
}
export function Client(bind: ClientBinding): void;

export type byte = number;
export type int = number;
export const Types = {
  
}

export const VERSION: string;
