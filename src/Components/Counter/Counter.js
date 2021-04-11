import React from 'react';
// import styled from 'styled-components';

import {
  Wrapper,
  CounterSpan,
  DecrementBtn,
  IncrementBtn,
} from './CounterStyles';

const counter = (props) => {
  return (
    <Wrapper>
      <DecrementBtn onClick={props.decrement}>&#9473; Decrement</DecrementBtn>
      <CounterSpan>Counter: {props.count}</CounterSpan>
      <IncrementBtn onClick={props.increment}>&#9547; Increment</IncrementBtn>
    </Wrapper>
  );
};

export default counter;
