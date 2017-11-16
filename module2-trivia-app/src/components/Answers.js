import React from 'react';

class Answers extends React.Component{
  render(){
  return (
    <div>
      <button>{this.props.name}</button>
    </div>
  )
}
}

export default Answers;