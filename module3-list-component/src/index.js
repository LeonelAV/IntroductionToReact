import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { ControlledInput } from './ControlledInput';

var array = [
  {id:100, product:"Apple", price:1},
  {id:101, product:"Banana", price:1},
  {id:102, product:"Carrot", price:2},
  {id:103, product:"Donuts", price:5},
  {id:104, product:"EggPlant", price:4}
]

class ProductList extends Component {
  constructor(props){
    super(props)
  }
  render(){
    var elements = this.props.productArray.map( (item, index) => <li key={item.id}>Product: {item.product} | Price: {item.price}</li>)
    return (
      <div>
        <ol>{elements}</ol>
        <ControlledInput />
      </div>
    )
  }
}


ReactDOM.render(<ProductList productArray= {array} />, document.getElementById('root'))