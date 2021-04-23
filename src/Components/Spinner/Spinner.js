import React from 'react';
import { Spinner, Ball, BallOne, BallTwo } from './SpinnerStyles';

const spinner = () => {
  return (
    <Spinner>
      <Ball />
      <BallOne />
      <BallTwo />
    </Spinner>
  );
};

export default spinner;
