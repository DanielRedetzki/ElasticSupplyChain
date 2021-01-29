import React, { Component } from 'react'

import './styles/styles.css';
import ComponentClick1 from './components/clicks/ComponentClick1';
import ComponentClick2 from './components/clicks/ComponentClick2';
import ComponentClick3 from './components/clicks/ComponentClick3';
import ComponentClick4 from './components/clicks/ComponentClick4';
import ComponentClick5 from './components/clicks/ComponentClick5';
import ComponentClick6 from './components/clicks/ComponentClick6';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="grid-container">
            <ComponentClick1 />
            <ComponentClick2 />
            <ComponentClick3 />
            <ComponentClick4 />
            <ComponentClick5 />
            <ComponentClick6 />
          </div>
        </header>
      </div>
    )
  }
}

export default App;
