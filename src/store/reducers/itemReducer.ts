import { ItemAction, ItemState, ITEM_ACTIONS } from "../../types/item"
const initalState: ItemState = []

export const itemReducer = (state = initalState, action: ItemAction): ItemState => {
    switch (action.type) {
        case ITEM_ACTIONS.ADD_TERMINAL:
            const { id } = action.payload
            return [...state, { id, cargoIds: [] }]

        case ITEM_ACTIONS.ADD_CARGO:
            const { terminalId, cargoId } = action.payload;
            const index = state.findIndex(terminal => terminal.id === terminalId)
            const filtered = [...state.filter(terminal => terminal.id !== terminalId)]
            const secPart = state.splice(index + 1)
            filtered[index] = { id: terminalId, cargoIds: [...state[index].cargoIds, cargoId] }
            return [...filtered, ...secPart]

        case ITEM_ACTIONS.REMOVE_TERMINAL:
            const { idToRemove } = action.payload
            return state.filter(terminal => terminal.id !== idToRemove)

        case ITEM_ACTIONS.REMOVE_CARGO:
            const { terminalIdToRemove, cargoIdToRemove } = action.payload
            const indexTerminalRemove = state.findIndex(terminal => terminal.id === terminalIdToRemove)
            const filteredTerminals = [...state.filter(terminal => terminal.id !== terminalIdToRemove)]
            const filteredCargoes = [...state[indexTerminalRemove].cargoIds.filter(id => id !== cargoIdToRemove)]
            filteredTerminals[indexTerminalRemove] = { id: terminalIdToRemove, cargoIds: [...filteredCargoes] }
            const secondPart = state.splice(indexTerminalRemove + 1)
            return [...filteredTerminals, ...secondPart];

        default:
            return state;
    }
}