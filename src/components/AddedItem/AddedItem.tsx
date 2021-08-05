import React from 'react';
import { useDispatch } from 'react-redux';
import { removeCargo, removeTerminal } from '../../store/action-creators/item';
import { DeleteBtn, Box, Wrapper } from './styles';

const AddedItem = ({ name, terminalId, cargoId }: { name: string; terminalId: string; cargoId?: string }) => {
  const dispatch = useDispatch();

  const deleteItem = () => {
    if (cargoId) {
      dispatch(removeCargo(terminalId, cargoId));
    } else {
      dispatch(removeTerminal(terminalId));
    }
  };
  return (
    <>
      <Wrapper>
        <Box isCargo={!!cargoId}>{name}</Box>
        <DeleteBtn onClick={deleteItem} />
      </Wrapper>
    </>
  );
};

export default AddedItem;
