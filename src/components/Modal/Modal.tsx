import React, { useEffect, MouseEvent, FormEvent } from "react";
import { useSelector } from "react-redux";

import GLobalState from "../../types/GlobalState";
import { Bottom, CloseBtn, Form, SubmitBtn, Top, Wrapper } from "./styles";
import "./styles.ts";

const Modal = ({ SetIsModalOpened }: { SetIsModalOpened: any }) => {
  const { cargoes, terminals, error, loading } = useSelector(
    (state: GLobalState) => state.data
  );

  if (loading) return <h1>Loading...</h1>;

  if (error) return <h1>{error}</h1>;

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <Wrapper>
      <Top>
        <h2>Edit Rotation</h2>
        <CloseBtn onClick={() => SetIsModalOpened(false)}>&times;</CloseBtn>
      </Top>
      <Form>
        <select name="terminals" id="">
          <option>add...</option>
          {terminals.map((terminal) => (
            <option key={terminal.id}>{terminal.name}</option>
          ))}
        </select>
      </Form>
      <Bottom>
        <SubmitBtn type="submit" onClick={submitHandler}>
          Submit
        </SubmitBtn>
      </Bottom>
    </Wrapper>
  );
};

export default Modal;
