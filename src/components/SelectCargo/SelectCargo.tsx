import React, { ChangeEvent, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCargo } from '../../store/action-creators/item';
import Cargo from '../../types/item';
import GLobalState from '../../types/GlobalState';

const SelectCargo = ({ terminalId }: { terminalId: string }) => {
  const selectRef = useRef<HTMLSelectElement>(null);

  const { cargoes } = useSelector((state: GLobalState) => state.data);

  const items = useSelector((state: GLobalState) => state.items);

  const dispatch = useDispatch();

  const chooseCargo = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(addCargo(terminalId, e.currentTarget.value));

    if (selectRef.current) {
      selectRef.current.selectedIndex = 0;
    }
  };

  const disableOption = (selectedItem: Cargo) => {
    return items.some((item) => item.id === terminalId && item.cargoIds.includes(selectedItem.id));
  };

  return (
    <select ref={selectRef} onChange={chooseCargo} defaultValue="add...">
      <option disabled>add...</option>
      {cargoes.map((cargo) => {
        return (
          <option value={cargo.id} key={cargo.id} disabled={disableOption(cargo)}>
            {cargo.name}
          </option>
        );
      })}
    </select>
  );
};
export default SelectCargo;
