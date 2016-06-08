import React from 'react';
import { render } from 'react-dom';

import MyComponent from './components/myComponent.jsx';

class App extends React.Component {
  render () {
    return (
      <div>
        <h1>Please press the button</h1>
        <MyComponent />
      </div>
    )
  }
};

render(<App />, document.getElementById('app'));
