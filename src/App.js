import React, { Component } from 'react';
import RoutesJS from './routes';

class App extends Component {
  render(){
      return (
      <div className="App h-full bg-gradient-to-b from-slate-800 to-slate-900">
        <RoutesJS/>
      </div>
    );
  }
}

export default App;
