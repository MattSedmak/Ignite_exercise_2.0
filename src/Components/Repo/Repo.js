import React from 'react';
import { Wrapper, Heading, Description, Star } from './RepoStyles';

const repo = (props) => {
  return (
    <Wrapper>
      <Heading>{props.fullName}</Heading>
      <Description>{props.description}</Description>
      <Star>&#9733; {props.stars}</Star>
    </Wrapper>
  );
};
export default repo;
