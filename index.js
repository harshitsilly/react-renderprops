import React, { Component } from 'react';
import { render } from 'react-dom';
import CounterComponent from './Hello';
import './style.css';

const Counter = ({ count, update }) => (
  <div>
    <button onClick={() => update("Inc")}>Inc</button>
      {count}
    <button onClick={() => update("Dec")}>Dec</button>
  </div>
);

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <CounterComponent render={props => <Counter {...props} />} />
        <p>
          Start editing to see some magic happen :)
        </p>
      </div>
    );
  }
}


render(<App />, document.getElementById('root'));
