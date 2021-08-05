import React, { ChangeEvent, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTerminal } from '../../store/action-creators/item';
import GLobalState from '../../types/GlobalState';
import Terminal from '../../types/item';
import { List } from './styles';

const SelectTerminal = () => {
  const selectRef = useRef<HTMLSelectElement>(null);

  const { terminals } = useSelector((state: GLobalState) => state.data);

  const items = useSelector((state: GLobalState) => state.items);

  const dispatch = useDispatch();

  const chooseTerminal = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(addTerminal(e.currentTarget.value));

    if (selectRef.current) {
      selectRef.current.selectedIndex = 0;
    }
  };

  const disableOption = (selectedItem: Terminal) => {
    return items.some((item) => item.id === selectedItem.id);
  };

  return (
    <List ref={selectRef} onChange={chooseTerminal} defaultValue="add...">
      <option disabled>add...</option>
      {terminals.map((terminal) => {
        return (
          <option value={terminal.id} key={terminal.id} disabled={disableOption(terminal)}>
            {terminal.name}
          </option>
        );
      })}
    </List>
  );
};
export default SelectTerminal;
