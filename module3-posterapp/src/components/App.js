import React from 'react';

export class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {value:"", items: []}
  }
  handleChange(event){
    this.setState({value: event.target.value})
    console.log(this.state.value)
  }
  render(){
    return (
    <div> 
      <input value={this.state.value} onChange={this.handleChange.bind(this)} />
    </div>
    )
  }
}

