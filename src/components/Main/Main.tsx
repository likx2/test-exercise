import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchData from '../../store/action-creators/fetchData';
import GLobalState from '../../types/GlobalState';
import Modal from '../Modal';
import Error from '../Error';
import { Wrapper, Btn } from './styles';
import './styles.ts';
import Loading from '../Loading';
import { DATA_ACTIONS } from '../../types/data';
import Success from '../Success';
import { startRequset } from '../../store/action-creators/startRequest';
const Main = () => {
  const [isModaOpened, setIsModalOpened] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startRequset());
    dispatch(fetchData());
  }, [dispatch]);

  const comparator = 'comparator';

  const { cargoes, terminals, error, loading, status, success } = useSelector((state: GLobalState) => state.data);

  if (loading)
    return (
      <Wrapper>
        <Loading />
      </Wrapper>
    );

  if (typeof terminals === typeof comparator || typeof cargoes === typeof comparator || error) {
    return (
      <Wrapper>
        <Error status={status} />
      </Wrapper>
    );
  }

  if (success) {
    return (
      <Wrapper>
        <Success />
      </Wrapper>
    );
  }

  return (
    <>
      <Wrapper>
        <Btn onClick={() => setIsModalOpened(true)}>Start rotation</Btn>
      </Wrapper>
      {isModaOpened ? <Modal setIsModalOpened={setIsModalOpened} /> : null}
    </>
  );
};

export default Main;
