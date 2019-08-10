import React from 'react';

class CounterComponent extends React.Component {
  constructor(props) {
   super(props);
   this.state = { count: 0 };
  }
  update = type => {
    if (type === "Inc") {
      this.setState(({ count }) => ({ count: count + 1 }));
    } else if (type === "Dec") {
      this.setState(({ count }) => ({ count: count - 1 }));
    }
  };
  render() {
    return this.props.render({
      ...this.state,
      ...this.props,
      update: this.update
    });
  }
}

export default CounterComponent;