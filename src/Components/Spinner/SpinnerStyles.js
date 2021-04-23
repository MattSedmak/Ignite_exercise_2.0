import styled from 'styled-components';
import { keyframes } from 'styled-components';

const bounce = keyframes`
  0%,
  80%,
  100%{
    transform:scale(0);
  }
  40%{
    transform: scale(1);
  }
`;

export const Spinner = styled.div`
  width: 70px;
  margin: 0 200px;
`;

export const Ball = styled.div`
  width: 15px;
  height: 15px;
  background-color: #333447;
  border-radius: 100%;
  display: inline-block;
  animation: ${bounce} 1.4s infinite ease-in-out;
`;

export const BallOne = styled(Ball)`
  background-color: hotpink;
  animation-delay: -0.32s;
`;

export const BallTwo = styled(Ball)`
  background-color: rebeccapurple;
  animation-delay: -0.16s;
`;
