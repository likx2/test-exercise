import { ItemAction, ItemState, ITEM_ACTIONS } from '../../types/item';
import { swapCargoesAdding, swapCargoesRemoving } from '../../utils/utilities';
const initalState: ItemState = [];

export const itemReducer = (state = initalState, action: ItemAction): ItemState => {
  switch (action.type) {
    case ITEM_ACTIONS.ADD_TERMINAL:
      const { id } = action.payload;
      return [...state, { id, cargoIds: [] }];

    case ITEM_ACTIONS.ADD_CARGO:
      const { terminalId, cargoId } = action.payload;

      return swapCargoesAdding(state, terminalId, cargoId);

    case ITEM_ACTIONS.REMOVE_TERMINAL:
      const { idToRemove } = action.payload;
      return state.filter((terminal) => terminal.id !== idToRemove);

    case ITEM_ACTIONS.REMOVE_CARGO:
      const { terminalIdToRemove, cargoIdToRemove } = action.payload;

      return swapCargoesRemoving(state, terminalIdToRemove, cargoIdToRemove);

    default:
      return state;
  }
};
