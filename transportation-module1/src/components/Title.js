import React from 'react';

function Title(props){
  return (
  <div>
    <h1>{props.title}</h1>
    <h3>{props.description}</h3>
  </div>
  )
}

export default Title