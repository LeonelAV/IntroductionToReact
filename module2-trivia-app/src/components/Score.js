import React from 'react';

function Score(){
  var style = {
    float: 'right',
    marginRight: '30%'
  }
  return(
    <div style = {style}>
      <h1>Correct:0</h1>
      <h1>Incorrect:0</h1>
    </div>
  )
}
export default Score;