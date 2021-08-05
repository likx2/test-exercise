import React from 'react';
import { Msg, Status } from './styles';

const Error = ({ status }: { status: number }) => {
  return (
    <div>
      <Msg>Something went wrong</Msg>
      <Status>Status Code:{status}</Status>
    </div>
  );
};

export default Error;
