import React, { FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GLobalState from '../../types/GlobalState';
import { Bottom, CloseBtn, Form, Mid, SubmitBtn, Top, Wrapper } from './styles';
import SelectTerminal from '../SelectTerminal';
import ItemGroup from '../ItemGroup';
import sendData from '../../store/action-creators/sendData';
import { DATA_ACTIONS } from '../../types/data';

const Modal = ({ setIsModalOpened }: { setIsModalOpened: (isModalOpened: boolean) => void }) => {
  const items = useSelector((state: GLobalState) => state.items);

  const dispatch = useDispatch();

  const submitHandler = async (e: FormEvent) => {
    e.preventDefault();
    setIsModalOpened(false);
    dispatch({ type: DATA_ACTIONS.START_REQUEST });
    dispatch(sendData(items));
  };

  return (
    <Wrapper>
      <Top>
        <h2>Edit Rotation</h2>
        <CloseBtn onClick={() => setIsModalOpened(false)}>&times;</CloseBtn>
      </Top>
      <Form>
        <Mid>
          <SelectTerminal />
          {items.map((terminal) => {
            return <ItemGroup terminalId={terminal.id} key={terminal.id} />;
          })}
        </Mid>
        <Bottom>
          <SubmitBtn type="submit" onClick={submitHandler}>
            Submit
          </SubmitBtn>
        </Bottom>
      </Form>
    </Wrapper>
  );
};

export default Modal;
