import React, { Component } from 'react'
import Chart from "react-apexcharts";

import './styles/styles.css';
import ComponentClick1 from './components/clicks/ComponentClick1';
import ComponentClick2 from './components/clicks/ComponentClick2';
import ComponentClick3 from './components/clicks/ComponentClick3';
import ComponentClick4 from './components/clicks/ComponentClick4';
import ComponentClick5 from './components/clicks/ComponentClick5';
import ComponentClick6 from './components/clicks/ComponentClick6';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          type: "basic-bar"
        },
        plotOptions:{
          bar: {
            horizontal: true,
          }
        },
        xaxis: {
          categories: ['Preis', 'Lieferkomplexität', 'Nachhaltigkeit']
        }
      },
      series: [
        {
          name: "series-1",
          data: [80, 30, 80]
        }, {
          name: "series-1",
          data: [20, 85, 20]
        }, {
          name: "series-1",
          data: [40, 60, 50]
        }
      ]

    };

    this.state2 = {
      series: [{
        name: 'Series 1',
        data: [80, 30, 80],
      }, {
        name: 'Series 2',
        data: [20, 85, 20],
      }, {
        name: 'Series 3',
        data: [40, 60, 50],
      }],
      options: {
        chart: {
          height: 350,
          type: 'radar',
          dropShadow: {
            enabled: true,
            blur: 1,
            left: 1,
            top: 1
          }
        },
        title: {
          text: 'Radar Chart - Multi Series'
        },
        stroke: {
          width: 2
        },
        fill: {
          opacity: 0.3
        },
        markers: {
          size: 0
        },
        xaxis: {
          categories: ['Preis', 'Lieferkomplexität', 'Nachhaltigkeit']
        }
      },
    
    
    };
  }

  



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="app">
            <div className="row">
              <div className="mixed-chart">
                <Chart
                  options={this.state.options}
                  series={this.state.series}
                  type="bar"
                  width="500"
                />
                <Chart
                  options={this.state2.options}
                  series={this.state2.series}
                  type="radar"
                  width="500"
                  height="500"
                />
              </div>
            </div>
          </div>
          <div className="grid-container">
            <ComponentClick1 />
            <ComponentClick2 />
            <ComponentClick3 />
            <ComponentClick4 />
            <ComponentClick5 />
            <ComponentClick6 />
            <div className="item-7">7</div>
          </div>
        </header>
      </div>
    )
  }
}

export default App;
