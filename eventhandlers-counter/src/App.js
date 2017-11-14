import React from 'react';

const buttonStyle = {
  width:'100px',
  fontSize:'50px',
  position: 'absolute',
  right:'50%'

}

class Counter extends React.Component {
  constructor(props){
    super(props)
    this.state = {counter: 0}
    this.clickHandler =  this.clickHandler.bind(this)
  }

  clickHandler(){
    this.setState({counter: this.state.counter +1})
  }

  render(){
    return (
      <div>
        <button style={buttonStyle} onClick = {this.clickHandler} >{this.state.counter}</button>
      </div>
    )
  }
}

export default Counter;
