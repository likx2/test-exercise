import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import fetchData from "../../store/action-creators/fetchData";
import Modal from "../Modal";
import { Wrapper, Btn } from "./styles";
import "./styles.ts";
const Main = () => {
  const [isModaOpened, SetIsModalOpened] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <>
      <Wrapper>
        <Btn onClick={() => SetIsModalOpened(true)}>Start rotation</Btn>
      </Wrapper>
      {isModaOpened ? <Modal SetIsModalOpened={SetIsModalOpened} /> : null}
    </>
  );
};

export default Main;
