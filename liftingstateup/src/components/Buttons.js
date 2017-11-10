import React from 'react';


class Buttons extends React.Component {
  render(){
    return (
      <button style = {{color: this.props.active? 'red': 'blue'}} onClick = {() =>this.props.clickHandler(this.props.id, this.props.name)}
        {this.props.name}
      </button>
    )
  }
}

export default Buttons;