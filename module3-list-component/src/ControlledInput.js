import React from 'react';
import ReactDOM from 'react-dom';

export class ControlledInput extends React.Component{
  constructor(props){
    super(props)
    this.state = {value: ''}
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
    this.setState({value: event.target.value}, () => console.log(this.state.value))
  }

  render(){
    return (
      <div>
      <h1>HELLO</h1>
      <input onChange = {this.handleChange} />
      </div>
    )
  }
}

ReactDOM.render(<ControlledInput />, document.getElementById('root'))