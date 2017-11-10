import React from 'react';
import Buttons from './Buttons';
import Details from './Details.js';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {activeArray:[0,0,0,0], details:""}
  }
  render(){
    return (
      <div>
        <Buttons id={0} name="John"/>
        <Buttons id={1} name="Paul"/>
        <Buttons id={2} name="Ringo" />
        <Buttons id={3} name="George" />
        <Details />
      </div>
    )
  }
}

export default App;
