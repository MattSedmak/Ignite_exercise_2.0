import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  margin-bottom: 20px;
`;

export const CounterSpan = styled.p`
  font-size: 1rem;
  color: black;
  width: 80px;
  text-align: center;
  padding: 10px;
  margin: 20px;
`;

const Button = styled.button`
  width: 150px;
  border-radius: 50px;
  padding: 10px;
  font-size: 0.8em;
`;

export const DecrementBtn = styled(Button)`
  background-color: white;
  color: black;
  border: 1px solid black;
  outline: none;
  &:hover {
    cursor: pointer;
    background-color: black;
    color: white;
  }
`;

export const IncrementBtn = styled(Button)`
  background-color: hotpink;
  color: white;
  border: 1px solid hotpink;
  outline: none;
  &:hover {
    cursor: pointer;
    background-color: rebeccapurple;
    border: 1px solid rebeccapurple;
  }
`;
