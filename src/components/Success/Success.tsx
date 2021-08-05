import React, { useEffect } from 'react';
import { Capture, SuccessIcon, Wrapper } from './styles';

const Success = () => {
  useEffect(() => {
    setTimeout(() => {
      window.location.reload();
    }, 3000);
  }, []);

  return (
    <Wrapper>
      <SuccessIcon />
      <Capture>Success</Capture>
    </Wrapper>
  );
};

export default Success;
