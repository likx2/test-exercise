export interface Item {
  id: string;
  cargoIds: string[];
}

export type ItemState = Item[];

export enum ITEM_ACTIONS {
  ADD_TERMINAL = 'ADD_TERMINAL',
  REMOVE_TERMINAL = 'REMOVE_TERMINAL',
  ADD_CARGO = 'ADD_CARGO',
  REMOVE_CARGO = 'REMOVE_CARGO'
}

export interface AddTerminalAction {
  type: ITEM_ACTIONS.ADD_TERMINAL;
  payload: { id: string };
}

export interface AddCargoAction {
  type: ITEM_ACTIONS.ADD_CARGO;
  payload: { terminalId: string; cargoId: string };
}

export interface RemoveTerminalAction {
  type: ITEM_ACTIONS.REMOVE_TERMINAL;
  payload: { idToRemove: string };
}
export interface RemoveCargoAction {
  type: ITEM_ACTIONS.REMOVE_CARGO;
  payload: { terminalIdToRemove: string; cargoIdToRemove: string };
}

export type ItemAction = AddTerminalAction | AddCargoAction | RemoveTerminalAction | RemoveCargoAction;

export interface Terminal {
  id: string;
  name: string;
}

export default interface Cargo {
  id: string;
  name: string;
}
