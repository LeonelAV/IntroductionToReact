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
    this.resetHandler = this.resetHandler.bind(this)
  }

  clickHandler(){
    this.setState({counter: this.state.counter +1})
  }

  resetHandler(){
    this.setState({counter: 0})
  }

  render(){
    return (
      <div>
        <button style={buttonStyle} onClick = {this.clickHandler} >{this.state.counter}</button>
        <button style={{backgroundColor:'red', position:'absolute', right:'53%', top:'15%'}} onClick={this.resetHandler}>RESET</button>
      </div>
    )
  }
}

export default Counter;
