import React from 'react';

class Answers extends React.Component{
  render(){
  let style = {
    height: 100,
    width: 300
  }
  return (
    <div>
      <button style={style}>{this.props.name}</button>
    </div>
  )
}
}

export default Answers;