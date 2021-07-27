import React from 'react'
import { useSelector } from 'react-redux';
import GLobalState from '../../types/GlobalState';
import { findNameById } from '../../utils/utilities'
import AddedItem from '../AddedItem'
import SelectCargo from '../SelectCargo';

const ItemGroup = ({ terminalId }: { terminalId: string }) => {


    const { terminals, cargoes } = useSelector(
        (state: GLobalState) => state.data
    );

    const items = useSelector(
        (state: GLobalState) => state.items
    );

    const terminalName = findNameById(terminals, terminalId)
    const terminalIndex = items.findIndex(terminal => terminal.id === terminalId)
    return (
        <>
            <AddedItem name={terminalName} terminalId={terminalId} />
            <SelectCargo terminalId={terminalId} />
            {items[terminalIndex].cargoIds.map(id => {
                const cargoName = findNameById(cargoes, id)
                return < AddedItem name={cargoName} key={id} terminalId={terminalId} cargoId={id} />
            })}
        </>
    )
}

export default ItemGroup
