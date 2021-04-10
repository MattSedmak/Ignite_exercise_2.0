import React from 'react';

const repo = (props) => {
  return (
    <div>
      <h3>{props.fullName}</h3>
      <p>{props.description}</p>
      <p>{props.stars}</p>
    </div>
  );
};
export default repo;
