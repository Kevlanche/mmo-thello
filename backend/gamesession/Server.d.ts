
export interface ServerBinding {
  receiveIncomingMessage: () => Uint8Array
getLastIncomingMessageOwner: () => number
postMessage: (msg: Uint8Array) => void
}
export function Server(bind: ServerBinding): void;

export type byte = number;
export const Types = {
  
}

export const VERSION: string;
