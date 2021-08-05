import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background-color: #fff;
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
export const Mid = styled.div`
  height: 80vh;
  padding: 15px;
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
  border-radius: 3px;
  font-size: 15px;
  margin: 0 0 0 auto;
  background-color: #6c5ce7;
  color: #fff;
`;

export const Form = styled.form`
  width: 100%;
  height: 80vh;
  background-color: #ffff;
`;

export const CloseBtn = styled.button`
  font-size: 40px;
`;

export const AddBtn = styled.button`
  padding: 5px 10px;
  background-color: #74b9ff;
  color: #fff;
  border-radius: 3px;
  height: fit-content;
`;
