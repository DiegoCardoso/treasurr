import React from 'react';
import { render } from 'react-dom';


const App = React.createClass({
  render() {
    return (
      <header>
        <h2>Treasurr</h2>
      </header>
    );
  }
});

render(<App />, document.getElementById('app-container'));
