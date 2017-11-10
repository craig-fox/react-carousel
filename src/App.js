import React, { Component } from 'react';
import './App.css';
import Display from './components/display/Display'


class App extends Component {
  render() {
    const dataUrl = "/data/item-data.json"
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Carousel App</h1>
        </header>
          <div className="container-fluid">
              <div className="row">
                  <div className="col-md-12 col-xs-12">
                    <Display data-url={dataUrl}/>
                  </div>
              </div>
          </div>
      </div>
    );
  }
}

export default App;
