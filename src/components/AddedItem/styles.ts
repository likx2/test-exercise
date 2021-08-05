import styled from 'styled-components';
import { ReactComponent } from '../../assets/images/close.svg';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0 0;
`;
export const Box = styled.div<{ isCargo?: boolean }>`
  width: 40%;
  font-weight: 600;
  margin: 0 15px 0 0;
  padding: 10px 20px;
  border-radius: 5px;
  background-color: ${(props) => (props.isCargo ? '#00b894' : '#fab1a0')};
  color: #fff;
`;

export const DeleteBtn = styled(ReactComponent)`
  width: 25px;
  height: 25px;
  cursor: pointer;
`;
