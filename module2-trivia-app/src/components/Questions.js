import React from 'react';

class Questions extends React.Component{
  render(){
  let style = {
    color: 'red'
  }
  return (
    <div>
      <h1 style = {style} >{this.props.question}</h1>
    </div>
  )
}
}

export default Questions;