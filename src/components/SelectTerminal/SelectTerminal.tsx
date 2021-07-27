import React, { ChangeEvent, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import GLobalState from "../../types/GlobalState";
import { ITEM_ACTIONS } from "../../types/item";
import Terminal from "../../types/Terminal";


const SelectTerminal = () => {

    const selectRef = useRef<HTMLSelectElement>(null)


    const { terminals } = useSelector(
        (state: GLobalState) => state.data
    );

    const items = useSelector((state: GLobalState) => state.items)


    const dispatch = useDispatch()

    const chooseTerminal = (e: ChangeEvent<HTMLSelectElement>) => {
        dispatch({ type: ITEM_ACTIONS.ADD_TERMINAL, payload: { id: e.currentTarget.value } })

        if (selectRef.current) {
            selectRef.current.selectedIndex = 0
        }
    }

    const disableOption = (selectedItem: Terminal) => {
        return items.some(item => item.id === selectedItem.id)
    }


    return (
        <select ref={selectRef} onChange={chooseTerminal} defaultValue='add...'>
            <option disabled>add...</option>
            {terminals.map(terminal => {
                return <option value={terminal.id} key={terminal.id} disabled={disableOption(terminal)}>{terminal.name}</option>
            })}

        </select>
    )
}
export default SelectTerminal;