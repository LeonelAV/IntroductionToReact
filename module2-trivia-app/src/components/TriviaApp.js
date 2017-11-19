import React, { Component } from 'react';
import Question from '../components/Questions';
import Answers from '../components/Answers';
import Score from '../components/Score';

var questions = [
  ['The Mexican city of Tijuana borders what US city?',3],
  ['What was the name of the currency used in Spain before the euro?',2],
  ['In 1783, the first free flight of a hot air balloon carrying a human occurred in what city?',1],
  ['The use of chopsticks originated in what country?','Vietnam','China','Japan','Mongolia',1],
  ['Napoleon suffered defeat at Waterloo in what year?',2],
  ['What is the most popular board game of all time?',0],
  ['The Roman numeral “D” stands for what number?',1],
  ['In what year was the first Apple computer released?',0],
  ['What year was Facebook founded?',1],
  ['The first McDonald’s restaurant opened in which US state?',2]
];

var answers = [
  ['Yuma','Calexico','Tucson','San Diego'], 
  ['Franc','Peso','Pesetas','Dollar'], 
  ['Berlin','Paris','London','Vienna'],
  ['1896','1835','1815','1791'],
  ['Chess','Domino','Checkers','Monopoly'],
  ['200','500','100','1000'],
  ['1976','1982','1986','1974'],
  ['2001','2004','2006','1998'],
  ['Pennsylvania','New York','California','Kentucky']
  ]

class TriviaApp extends Component {
  constructor(props){
      super(props)
      this.state = {question: questions[0][0], answer: answers}
    }

  render() {

    let style = {
      width:'70%',
      margin:'0 auto'
    } 
    
    return (
      <div style={style}>
        <Question question={this.state.question}/>
        <Answers answers= {this.state.answer}/>
        <Score />
      </div>
    );
  }
}



export default TriviaApp;
