import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import fetchData from "../../store/action-creators/fetchData";
import Modal from "../Modal";
import { Wrapper, Btn } from "./styles";
import "./styles.ts";
const Main = () => {
  const [isModaOpened, setIsModalOpened] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

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
