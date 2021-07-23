import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import GLobalState from "../../types/GlobalState";
import { Wrapper } from "./styles";
import "./styles.ts";

const Modal = () => {
  const { cargoes, terminals, error, loading } = useSelector(
    (state: GLobalState) => state.data
  );

  if (loading) return <h1>Loading...</h1>;

  if (error) return <h1>{error}</h1>;

  return (
    <Wrapper>
      {cargoes.map((cargo) => (
        <p key={cargo.id}>{cargo.name}</p>
      ))}
    </Wrapper>
  );
};

export default Modal;
