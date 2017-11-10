import React from 'react';
import Buttons from './Buttons';
import Details from './Details.js';

class App extends React.Component {
  render(){
    return (
      <div>
        <Buttons name="John"/>
        <Buttons name="Paul"/>
        <Buttons name="Ringo" />
        <Buttons name="George" />
        <Details />
      </div>
    )
  }
}

export default App;
