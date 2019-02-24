/*
Was to lazy to deal w/ max diplay size. I was focused on under
-research deeper on why javascript has floating point precision issues w/ operations
*/

//Base calculator component
import React, { Component } from 'react';
import './calc.css'
import {calculator} from './calculatorFunc'

const buttons = [
  {
    key: 0,
    name: 'zero'
  },
  {
    key: 1,
    name: 'one'
  },
  {
    key: 2,
    name: 'two'
  },
  {
    key: 3,
    name: 'three'
  },
  {
    key: 4,
    name: 'four'
  },
  {
    key: 5,
    name: 'five'
  },
  {
    key: 6,
    name: 'six'
  },
  {
    key: 7,
    name: 'seven'
  },
  {
    key: 8,
    name: 'eight'
  },
  {
    key: 9,
    name: 'nine'
  },
  {
    key: '.',
    name: 'decimal'
  },
  {
    key: '+',
    name: 'add'
  },
  {
    key: '-',
    name: 'subtract'
  },
  {
    key: '*',
    name: 'multiply'
  },
  {
    key: '/',
    name: 'divide'
  },
  {
    key: '=',
    name: 'equals'
  },
  {
    key: 'AC',
    name: 'clear'
  },
  {
    key: '+/-',
    name: 'changeSign'
  }
]

//18 buttons, 20 slots;

class Calc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: '0',
      storedNum: null,
      operation: null
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const buttonName = e.target.innerText;
    console.log(buttonName);
    const newState = calculator(buttonName, this.state);
    this.setState(newState);
  }

  render() {
    const handleClickFunc = this.handleClick;
    return (
    <div className='background'>
    <div className='container'>
      <div className='display'>
        {this.state.current}
      </div>
      {buttons.map(function(x){
        const combinedClass = "button " + x.name;
        return (
                <div
                  key={x.key}
                  className={combinedClass}
                  onClick={handleClickFunc}
                  >
                      <div className='buttonText'>
                        {x.key}
                      </div>
                </div>
        )})}
    </div>
    </div>
  )}
}
export default Calc;
