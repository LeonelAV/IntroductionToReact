import React from 'react';
import Buttons from './Buttons';
import Details from './Details.js';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {activeArray:[0,0,0,0], details:""}
  }

  clickHandler(id){
    var arr = [0,0,0,0]
    arr[id] = 1
    this.setState({activeArray: arr})
  }

  render(){
    return (
      <div>
        <Buttons id={0} clickHandler={this.clickHandler} name="John"/>
        <Buttons id={1} clickHandler={this.clickHandler} name="Paul"/>
        <Buttons id={2} clickHandler={this.clickHandler} name="Ringo" />
        <Buttons id={3} clickHandler={this.clickHandler} name="George" />
        <Details />
      </div>
    )
  }
}

export default App;
