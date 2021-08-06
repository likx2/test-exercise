import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchData from '../../store/action-creators/fetchData';
import GLobalState from '../../types/GlobalState';
import Modal from '../Modal';
import Error from '../Error';
import { Wrapper, Btn } from './styles';
import './styles.ts';
import Loading from '../Loading';
import Success from '../Success';
import { startRequset } from '../../store/action-creators/startRequest';
const Main = () => {
  const [isModaOpened, setIsModalOpened] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startRequset());
    dispatch(fetchData());
  }, [dispatch]);

  const { error, loading, status, success } = useSelector((state: GLobalState) => state.data);

  const openModal = () => {
    setIsModalOpened(true);
  };

  if (loading)
    return (
      <Wrapper>
        <Loading />
      </Wrapper>
    );

  if (error) {
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
        <Btn onClick={openModal}>Start rotation</Btn>
      </Wrapper>
      {isModaOpened ? <Modal setIsModalOpened={setIsModalOpened} /> : null}
    </>
  );
};

export default Main;
