import React, { Component } from 'react'

import logo from './logo.svg';
import './styles/styles.css';
import PictureClick from './components/clicks/PictureClick';
import PictureClick2 from './components/clicks/PictureClick2';
import ComponentClick1 from './components/clicks/ComponentClick1';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <div className="main-container">
            <PictureClick />
            <PictureClick2 />
          </div> */}
          <div class="grid-container">
            <ComponentClick1 />
            <div class="item-2">2</div>
            <div class="item-3">3</div>
            <div class="item-4">4</div>
            <div class="item-5">5</div>
            <div class="item-6">6</div>
          </div>
        </header>
      </div>
    )
  }
}

export default App;
