import {
  AddCargoAction,
  AddTerminalAction,
  ITEM_ACTIONS,
  RemoveCargoAction,
  RemoveTerminalAction
} from '../../types/item';

export const addTerminal = (terminalId: string): AddTerminalAction => {
  return { type: ITEM_ACTIONS.ADD_TERMINAL, payload: { id: terminalId } };
};

export const addCargo = (terminalId: string, cargoId: string): AddCargoAction => {
  return { type: ITEM_ACTIONS.ADD_CARGO, payload: { terminalId, cargoId } };
};

export const removeTerminal = (terminalId: string): RemoveTerminalAction => {
  return { type: ITEM_ACTIONS.REMOVE_TERMINAL, payload: { idToRemove: terminalId } };
};

export const removeCargo = (terminalId: string, cargoId: string): RemoveCargoAction => {
  return {
    type: ITEM_ACTIONS.REMOVE_CARGO,
    payload: { terminalIdToRemove: terminalId, cargoIdToRemove: cargoId }
  };
};
