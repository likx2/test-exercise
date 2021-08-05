import styled from 'styled-components';
import { ReactComponent as Icon } from '../../assets/images/success.svg';

export const Wrapper = styled.div`
  text-align: center;
`;

export const SuccessIcon = styled(Icon)`
  display: inline-block;
  width: 100px;
  height: 100px;
`;

export const Capture = styled.p`
  font-size: 32px;
  font-weight: 600;
`;
