import React from 'react';
import { useDispatch } from 'react-redux';
import { ITEM_ACTIONS } from '../../types/item';
import { DeleteBtn, Box, Wrapper } from './styles';




const AddedItem = ({ name, terminalId, cargoId }: { name: string, terminalId: string, cargoId?: string }) => {

    const dispatch = useDispatch()

    const deleteItem = () => {

        if (cargoId) {

            dispatch({ type: ITEM_ACTIONS.REMOVE_CARGO, payload: { terminalIdToRemove: terminalId, cargoIdToRemove: cargoId } })
        }
        else {
            dispatch({ type: ITEM_ACTIONS.REMOVE_TERMINAL, payload: { idToRemove: terminalId } })
        }
    }
    return <>
        <Wrapper>
            <Box isCargo={!!cargoId}>
                {name}
            </Box>
            <DeleteBtn onClick={deleteItem} />
        </Wrapper>
    </>

}

export default AddedItem;