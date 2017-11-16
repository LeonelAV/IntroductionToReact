import React, { Component } from 'react';
import Question from '../components/Questions';
import Answers from '../components/Answers';
import Score from '../components/Score';

class TriviaApp extends Component {
  render() {
    let style = {
      width:'70%',
      margin:'0 auto'
    } 
    return (
      <div style={style}>
        <Question />
        <Answers name='answer1'/>
        <Answers name='answer2'/>
        <Answers name='answer3'/>
        <Answers name='answer4'/>
        <Score />
      </div>
    );
  }
}

export default TriviaApp;
