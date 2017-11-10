import React from 'react';


class Buttons extends React.Component {
  render(){
    return (
      <button>
        {this.props.name}
      </button>
    )
  }
}

export default Buttons;