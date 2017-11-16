import React from 'react';

class Answers extends React.Component{
  render(){
  let style = {
    height: 100,
    width: 300
  }
  return (
    <div>
      {this.props.answers.map(function(answer, i){
        return <button style={style} key={i}>{answer}</button>
        })
  }
    </div>
  )
}
}

export default Answers;