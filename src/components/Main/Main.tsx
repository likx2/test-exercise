import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import fetchData from "../../store/action-creators/fetchData";
import Modal from "../Modal";
import { Box, Btn, Wrapper } from "./styles";
import "./styles.ts";
const Main = () => {
  const [isModaOpened, SetIsModalOpened] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <>
      <Box className="main">
        <Wrapper className="main__wrapper">
          <Btn className="main__btn" onClick={() => SetIsModalOpened(true)}>
            Start rotation
          </Btn>
        </Wrapper>
      </Box>
      {isModaOpened ? <Modal /> : null}
    </>
  );
};

export default Main;
