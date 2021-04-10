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
      <DecrementBtn onClick={props.decrement}>– Decrement</DecrementBtn>
      <CounterSpan>Counter: {props.count}</CounterSpan>
      <IncrementBtn onClick={props.increment}>+ Increment</IncrementBtn>
    </Wrapper>
  );
};

export default counter;
