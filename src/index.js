import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

class TipCalculator extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
          bill: 0,
          tip: 0,
      }
    }

    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
      }

    render() {
        let tipAmount = this.state.bill * (this.state.tip / 100);
        const total = tipAmount + Number(this.state.bill);

      return (
        <form>
            <h1>Tip Calculator</h1>
        <label for='bill'>Enter your bill amount:&emsp;&emsp;$</label>
        <input
            class='input'
            type='number'
            name='bill'
            onChange={this.myChangeHandler}
        />
        <br></br>
        <label for='tip'>Enter your tip percentage: %</label>
        <input 
            class='input'
            type='number'
            name='tip'
            onChange={this.myChangeHandler}
        />
        <p>Your tip amount is ${tipAmount.toFixed(2)}</p>
        <p>Your total bill is ${total.toFixed(2)}</p>
        </form>
      );
    }
  }
  
  ReactDOM.render(<TipCalculator />, document.getElementById('root'));