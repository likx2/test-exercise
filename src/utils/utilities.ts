import Cargo, { ItemState } from '../types/item';
import Terminal from '../types/item';

export const findIdByName = (items: Terminal[] | Cargo[], name: string) => {
  return items.find((item) => item.name === name)?.id as string;
};

export const findNameById = (items: Terminal[] | Cargo[], id: string) => {
  return items.find((item) => item.id === id)?.name as string;
};

export const getItemIndex = (state: ItemState, terminalId: string, cargoId: string) => {
  const terminalIndex = state.findIndex((terminal) => terminal.id === terminalId);
  const filteredTerminal = [...state.filter((terminal) => terminal.id !== terminalId)];
  const secPart = state.splice(terminalIndex + 1);
  return { terminalIndex, filteredTerminal, secPart };
};

export const swapCargoesAdding = (state: ItemState, terminalId: string, cargoId: string): ItemState => {
  const { terminalIndex, filteredTerminal, secPart } = getItemIndex(state, terminalId, cargoId);
  filteredTerminal[terminalIndex] = { id: terminalId, cargoIds: [...state[terminalIndex].cargoIds, cargoId] };
  return [...filteredTerminal, ...secPart];
};

export const swapCargoesRemoving = (state: ItemState, terminalId: string, cargoId: string): ItemState => {
  const { terminalIndex, filteredTerminal, secPart } = getItemIndex(state, terminalId, cargoId);
  const filteredCargoes = [...state[terminalIndex].cargoIds.filter((id) => id !== cargoId)];
  filteredTerminal[terminalIndex] = { id: terminalId, cargoIds: [...filteredCargoes] };
  return [...filteredTerminal, ...secPart];
};

export const isString = (arg: any) => {
  return typeof arg === typeof 'string';
};
