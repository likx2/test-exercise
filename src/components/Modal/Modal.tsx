import React, { FormEvent } from "react";
import { useSelector } from "react-redux";
import GLobalState from "../../types/GlobalState";
import { Bottom, CloseBtn, ErrorMsg, Form, Mid, SubmitBtn, Top, Wrapper } from "./styles";
import SelectTerminal from "../SelectTerminal";
import { sendItems } from "../../services/http_servise";
import ItemGroup from "../ItemGroup";

const Modal = ({ setIsModalOpened }: { setIsModalOpened: (isModalOpened:boolean)=>void }) => {


  const comparator = "comparator"

  const { cargoes, terminals, error, loading } = useSelector(
    (state: GLobalState) => state.data
  );

  const items = useSelector(
    (state: GLobalState) => state.items
  );

  if (loading) return <h1>Loading...</h1>;


  if ((typeof terminals === typeof comparator) || (typeof cargoes === typeof comparator)) return <ErrorMsg>Something went wrong</ErrorMsg>;

  const submitHandler = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await sendItems(items)
     setIsModalOpened(false)
      console.log(response);
    }
    catch (e) {
      throw e;
    }
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
          {items.map(terminal => {
            return <ItemGroup terminalId={terminal.id} key={terminal.id} />
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
