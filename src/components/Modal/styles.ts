import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
`;

export const Top = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: #b2bec3;
`;

export const Bottom = styled.div`
  width: 100%;
  height: 10vh;
  padding: 15px;
  background-color: #b2bec3;
`;

export const SubmitBtn = styled.button`
  display: block;
  padding: 8px 25px;
  border: 2px solid black;
  font-size: 15px;
  margin: 0 0 0 auto;
`;

export const Form = styled.form`
  width: 100%;
  height: 80vh;
  background-color: #ffff;
`;

export const CloseBtn = styled.button`
  font-size: 40px;
`;
