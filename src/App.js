import React, { Component } from 'react';
import Example from './example'
import { Provider } from 'react-redux'
import store from './store'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <Provider store={store}>
        <Example />
      </Provider>
    );
  }
}

export default App;
